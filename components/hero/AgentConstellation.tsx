'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'
import { heroPulseBus } from '@/lib/heroPulseBus'
import { sceneProgress } from '@/lib/sceneProgress'
import AgentLabel from './AgentLabel'
import AgentNode, { type NodeState } from './AgentNode'
import ConnectionLine from './ConnectionLine'
import DataPulse from './DataPulse'
import PulseArrival from './PulseArrival'

type Vec3 = [number, number, number]

const NODE_POSITIONS: Vec3[] = [
  [-3, 1.5, -2],   // 0 top-left
  [0, 2, -3],      // 1 top-center (slightly back)
  [3, 1.5, -2],    // 2 top-right
  [-4, 0, 0],      // 3 mid-left
  [0, 0, 1],       // 4 master (forward)
  [4, 0, 0],       // 5 mid-right
  [-2.5, -1.5, -1],// 6 bottom-left
  [0, -2, -2],     // 7 bottom-center
  [2.5, -1.5, -1], // 8 bottom-right
]

const NODE_LABELS = [
  'SCOUT',      // 0
  'MEMORY',     // 1
  'COMPLIANCE', // 2
  'BUILDER',    // 3
  'AYRO',       // 4 master
  'CLOSER',     // 5
  'ANALYST',    // 6
  'MEDIA',      // 7
  'ROUTER',     // 8
] as const

// Per-node Y offset for the floating label so it sits above the
// node without colliding with neighbours.
const LABEL_Y_OFFSETS = [0.55, 0.55, 0.55, 0.55, 0.7, 0.55, -0.55, -0.55, -0.55]

const MASTER = 4

// -----------------------------------------------------------------
// SCENE PRESETS
// -----------------------------------------------------------------
// Four layouts of the 9 nodes driven by the global sceneProgress
// (0..1). Indices map 1:1 to NODE_POSITIONS above. Each preset
// carries { position, scale }; opacity is handled separately.
//
// Progress thresholds:
//   0.00 - 0.33  CONSTELLATION  (hero layout, unchanged)
//   0.33 - 0.66  TWO_WORLDS     (AYRO + CLOSER as big "planets")
//   0.66 - 1.00  TIMELINE       (4 nodes on a line + AYRO above)
//   1.00         CONVERGENCE    (all collapse toward master)
//
// Consumers interpolate linearly between adjacent presets using
// the fractional part of progress * 3.
// -----------------------------------------------------------------

interface ScenePreset {
  position: Vec3
  scale: number
}

const SCENE_CONSTELLATION: ScenePreset[] = NODE_POSITIONS.map((pos) => ({
  position: pos,
  scale: 1,
}))

// AYRO (4) pulled left, CLOSER (5) pulled right, rest faded small in the
// background so the composition reads as "two planets".
const SCENE_TWO_WORLDS: ScenePreset[] = [
  { position: [-5, 3, -4], scale: 0.5 },     // 0 SCOUT
  { position: [0, 4, -5], scale: 0.5 },      // 1 MEMORY
  { position: [5, 3, -4], scale: 0.5 },      // 2 COMPLIANCE
  { position: [-6, 1, -3], scale: 0.5 },     // 3 BUILDER
  { position: [-2.8, 0, 1], scale: 1.8 },    // 4 AYRO left planet
  { position: [2.8, 0, 1], scale: 1.8 },     // 5 CLOSER right planet
  { position: [-5, -2, -3], scale: 0.5 },    // 6 ANALYST
  { position: [0, -3, -4], scale: 0.5 },     // 7 MEDIA
  { position: [5, -2, -3], scale: 0.5 },     // 8 ROUTER
]

// Four nodes laid out horizontally as a timeline (SCOUT, BUILDER,
// COMPLIANCE, CLOSER) with AYRO above the line acting as the
// supervisor. The other four nodes recede far into the background.
const SCENE_TIMELINE: ScenePreset[] = [
  { position: [-4, 0, 0], scale: 1.2 },      // 0 SCOUT (step 01)
  { position: [-8, 3, -6], scale: 0.3 },     // 1 MEMORY hidden
  { position: [1.5, 0, 0], scale: 1.2 },     // 2 COMPLIANCE (step 03)
  { position: [-1.5, 0, 0], scale: 1.2 },    // 3 BUILDER (step 02)
  { position: [0, 2.5, 0], scale: 1.3 },     // 4 AYRO above the line
  { position: [4, 0, 0], scale: 1.2 },       // 5 CLOSER (step 04)
  { position: [-8, -3, -6], scale: 0.3 },    // 6 ANALYST hidden
  { position: [0, -3, -6], scale: 0.3 },     // 7 MEDIA hidden
  { position: [8, -3, -6], scale: 0.3 },     // 8 ROUTER hidden
]

// Everything collapses toward the master. AYRO balloons to scale
// 2.5 while the others shrink into close-orbit satellites.
const SCENE_CONVERGENCE: ScenePreset[] = [
  { position: [-1.5, 1, 0], scale: 0.3 },    // 0
  { position: [0, 1.5, 0], scale: 0.3 },     // 1
  { position: [1.5, 1, 0], scale: 0.3 },     // 2
  { position: [-1.5, 0, 0], scale: 0.3 },    // 3
  { position: [0, 0, 0.5], scale: 2.5 },     // 4 AYRO huge
  { position: [1.5, 0, 0], scale: 0.3 },     // 5
  { position: [-1, -1.5, 0], scale: 0.3 },   // 6
  { position: [0, -1.5, 0], scale: 0.3 },    // 7
  { position: [1, -1.5, 0], scale: 0.3 },    // 8
]

const SCENES: ScenePreset[][] = [
  SCENE_CONSTELLATION,
  SCENE_TWO_WORLDS,
  SCENE_TIMELINE,
  SCENE_CONVERGENCE,
]

// Linear interpolation of two ScenePresets at fractional t 0..1.
function lerpPreset(a: ScenePreset, b: ScenePreset, t: number): ScenePreset {
  return {
    position: [
      a.position[0] + (b.position[0] - a.position[0]) * t,
      a.position[1] + (b.position[1] - a.position[1]) * t,
      a.position[2] + (b.position[2] - a.position[2]) * t,
    ],
    scale: a.scale + (b.scale - a.scale) * t,
  }
}

export function getScenePreset(idx: number, progress: number): ScenePreset {
  const scaled = Math.max(0, Math.min(progress, 1)) * (SCENES.length - 1)
  const low = Math.floor(scaled)
  const high = Math.min(low + 1, SCENES.length - 1)
  const t = scaled - low
  return lerpPreset(SCENES[low][idx], SCENES[high][idx], t)
}

// Entry order: master first, then clockwise from top-center.
const ENTRY_ORDER = [4, 1, 2, 5, 8, 7, 6, 3, 0]

// Stable connection keys: ordered pair "min-max"
const lineKey = (a: number, b: number) => `${Math.min(a, b)}-${Math.max(a, b)}`

const distance = (a: number, b: number) => {
  const [x1, y1, z1] = NODE_POSITIONS[a]
  const [x2, y2, z2] = NODE_POSITIONS[b]
  return Math.hypot(x2 - x1, y2 - y1, z2 - z1)
}

// Build the connection list once: master -> all + each non-master
// to its single nearest non-master neighbour. Duplicate pairs are
// dropped so the total stays ~13.
const CONNECTIONS: Array<[number, number]> = (() => {
  const conns: Array<[number, number]> = []
  const seen = new Set<string>()

  for (let i = 0; i < NODE_POSITIONS.length; i++) {
    if (i === MASTER) continue
    conns.push([MASTER, i])
    seen.add(lineKey(MASTER, i))
  }

  for (let i = 0; i < NODE_POSITIONS.length; i++) {
    if (i === MASTER) continue
    const nearest = NODE_POSITIONS
      .map((_, j) => j)
      .filter((j) => j !== i && j !== MASTER)
      .map((j) => ({ idx: j, d: distance(i, j) }))
      .sort((a, b) => a.d - b.d)[0]
    if (!nearest) continue
    const k = lineKey(i, nearest.idx)
    if (!seen.has(k)) {
      seen.add(k)
      conns.push([i, nearest.idx])
    }
  }

  return conns
})()

interface PulseInstance {
  id: number
  from: number
  to: number
}

interface ArrivalInstance {
  id: number
  position: Vec3
}

const ARRIVAL_LIFETIME_MS = 600

interface Props {
  reduceMotion?: boolean
}

const NODE_ENTRY_STEP = 0.2 // seconds between successive node mounts
const PULSE_DURATION_S = 1.2
const ENTRANCE_BUFFER_MS = 2500
const NON_MASTER = [0, 1, 2, 3, 5, 6, 7, 8]
const MAX_SIMULTANEOUS_PULSES = 3

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Per-node wrapper that pulls its transform from the active scene
// preset every frame. The inner AgentNode is rendered with a
// local (0,0,0) position so the outer group is the single source
// of truth for where the node lives in world space.
function SceneDrivenNode({ idx, children }: { idx: number; children: React.ReactNode }) {
  const ref = useRef<Group>(null)

  useFrame(() => {
    if (!ref.current) return
    const preset = getScenePreset(idx, sceneProgress.current)
    ref.current.position.set(preset.position[0], preset.position[1], preset.position[2])
    ref.current.scale.setScalar(preset.scale)
  })

  return <group ref={ref}>{children}</group>
}

// Connection lines fade out as soon as the scene starts to
// transition away from the initial CONSTELLATION, because their
// endpoints stop matching the node positions. Re-animating line
// geometry in sync with the node lerp is deferred to a later
// sub-chunk; for now the lines simply get out of the way.
function SceneAwareLines({ activeLines }: { activeLines: Set<string> }) {
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    const p = sceneProgress.current
    // Full visibility under 5% progress; fully hidden past 15%.
    const visible = Math.max(0, 1 - Math.max(0, (p - 0.05) / 0.1))
    groupRef.current.visible = visible > 0.01
  })

  return (
    <group ref={groupRef}>
      {CONNECTIONS.map(([a, b]) => {
        const key = lineKey(a, b)
        return (
          <ConnectionLine
            key={key}
            start={NODE_POSITIONS[a]}
            end={NODE_POSITIONS[b]}
            isActive={activeLines.has(key)}
          />
        )
      })}
    </group>
  )
}

export default function AgentConstellation({ reduceMotion = false }: Props) {
  const [nodeStates, setNodeStates] = useState<NodeState[]>(() =>
    NODE_POSITIONS.map((_, i) => (i === MASTER ? 'thinking' : 'idle')),
  )
  const [pulses, setPulses] = useState<PulseInstance[]>([])
  const [activeLines, setActiveLines] = useState<Set<string>>(new Set())
  const [showConnections, setShowConnections] = useState(reduceMotion)
  const [arrivals, setArrivals] = useState<ArrivalInstance[]>([])

  const pulseIdRef = useRef(0)
  const pulseCountRef = useRef(0)
  const arrivalIdRef = useRef(0)

  const spawnPulse = useCallback((from: number, to: number) => {
    if (pulseCountRef.current >= MAX_SIMULTANEOUS_PULSES) return
    pulseCountRef.current += 1
    const id = pulseIdRef.current++

    setPulses((prev) => [...prev, { id, from, to }])
    setActiveLines((prev) => {
      const next = new Set(prev)
      next.add(lineKey(from, to))
      return next
    })

    // Notify the DOM TaskTicker so it can spin up a related log row.
    heroPulseBus.emit({ from: NODE_LABELS[from], to: NODE_LABELS[to] })
  }, [])

  const handlePulseComplete = useCallback(
    (id: number, from: number, to: number) => {
      pulseCountRef.current = Math.max(0, pulseCountRef.current - 1)

      setPulses((prev) => prev.filter((p) => p.id !== id))
      setActiveLines((prev) => {
        const next = new Set(prev)
        next.delete(lineKey(from, to))
        return next
      })

      // Spawn a short-lived arrival burst at the destination.
      const arrivalId = arrivalIdRef.current++
      setArrivals((prev) => [...prev, { id: arrivalId, position: NODE_POSITIONS[to] }])
      window.setTimeout(() => {
        setArrivals((prev) => prev.filter((a) => a.id !== arrivalId))
      }, ARRIVAL_LIFETIME_MS)

      // Flash the destination, then return to its baseline state.
      // 400ms gives the brighter "active" emissive + halo enough time
      // to register before the lerp pulls it back to idle/thinking.
      setNodeStates((prev) => prev.map((s, i) => (i === to ? 'active' : s)))
      window.setTimeout(() => {
        setNodeStates((prev) =>
          prev.map((s, i) =>
            i === to ? (i === MASTER ? 'thinking' : 'idle') : s,
          ),
        )
      }, 400)
    },
    [],
  )

  // Reveal connections after the staggered node entrance settles.
  useEffect(() => {
    if (reduceMotion) {
      setShowConnections(true)
      return
    }
    const t = window.setTimeout(() => setShowConnections(true), ENTRANCE_BUFFER_MS)
    return () => window.clearTimeout(t)
  }, [reduceMotion])

  // Periodically pick a non-master node, set it to "thinking", then
  // emit a pulse from that node to the master.
  useEffect(() => {
    if (reduceMotion) return

    let timer: number = 0
    let thinkingTimer: number = 0

    const scheduleNext = () => {
      const wait = 2000 + Math.random() * 2000
      timer = window.setTimeout(() => {
        const nodeIdx = pickRandom(NON_MASTER)

        setNodeStates((prev) =>
          prev.map((s, i) => (i === nodeIdx ? 'thinking' : s)),
        )

        thinkingTimer = window.setTimeout(() => {
          setNodeStates((prev) =>
            prev.map((s, i) => (i === nodeIdx ? 'idle' : s)),
          )
          spawnPulse(nodeIdx, MASTER)
        }, 1500)

        scheduleNext()
      }, wait)
    }

    const initial = window.setTimeout(scheduleNext, ENTRANCE_BUFFER_MS + 500)

    return () => {
      window.clearTimeout(initial)
      window.clearTimeout(timer)
      window.clearTimeout(thinkingTimer)
    }
  }, [reduceMotion, spawnPulse])

  // Master occasionally emits outbound pulses to a random spoke.
  useEffect(() => {
    if (reduceMotion) return

    let timer: number = 0

    const scheduleNext = () => {
      const wait = 5000 + Math.random() * 2000
      timer = window.setTimeout(() => {
        spawnPulse(MASTER, pickRandom(NON_MASTER))
        scheduleNext()
      }, wait)
    }

    const initial = window.setTimeout(scheduleNext, ENTRANCE_BUFFER_MS + 2000)

    return () => {
      window.clearTimeout(initial)
      window.clearTimeout(timer)
    }
  }, [reduceMotion, spawnPulse])

  // Memoized connection list with their active flag derived from state.
  const connectionViews = useMemo(
    () =>
      CONNECTIONS.map(([a, b]) => ({
        a,
        b,
        key: lineKey(a, b),
        start: NODE_POSITIONS[a],
        end: NODE_POSITIONS[b],
      })),
    [],
  )

  return (
    <group>
      {showConnections && <SceneAwareLines activeLines={activeLines} />}

      {NODE_POSITIONS.map((_, idx) => {
        const order = ENTRY_ORDER.indexOf(idx)
        const delay = reduceMotion ? 0 : order * NODE_ENTRY_STEP
        return (
          <SceneDrivenNode key={idx} idx={idx}>
            <AgentNode
              position={[0, 0, 0]}
              state={nodeStates[idx]}
              delay={delay}
              master={idx === MASTER}
              reduceMotion={reduceMotion}
            />
          </SceneDrivenNode>
        )
      })}

      {NODE_POSITIONS.map((_, idx) => {
        const order = ENTRY_ORDER.indexOf(idx)
        const delay = reduceMotion ? 0 : order * NODE_ENTRY_STEP
        return (
          <SceneDrivenNode key={`label-${idx}`} idx={idx}>
            <AgentLabel
              text={NODE_LABELS[idx]}
              position={[0, LABEL_Y_OFFSETS[idx], 0]}
              isMaster={idx === MASTER}
              delay={delay}
              reduceMotion={reduceMotion}
            />
          </SceneDrivenNode>
        )
      })}

      {pulses.map((p) => (
        <DataPulse
          key={p.id}
          start={NODE_POSITIONS[p.from]}
          end={NODE_POSITIONS[p.to]}
          duration={PULSE_DURATION_S}
          reduceMotion={reduceMotion}
          onComplete={() => handlePulseComplete(p.id, p.from, p.to)}
        />
      ))}

      {!reduceMotion &&
        arrivals.map((a) => <PulseArrival key={a.id} position={a.position} />)}
    </group>
  )
}
