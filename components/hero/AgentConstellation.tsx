'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import AgentLabel from './AgentLabel'
import AgentNode, { type NodeState } from './AgentNode'
import ConnectionLine from './ConnectionLine'
import DataPulse from './DataPulse'

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

export default function AgentConstellation({ reduceMotion = false }: Props) {
  const [nodeStates, setNodeStates] = useState<NodeState[]>(() =>
    NODE_POSITIONS.map((_, i) => (i === MASTER ? 'thinking' : 'idle')),
  )
  const [pulses, setPulses] = useState<PulseInstance[]>([])
  const [activeLines, setActiveLines] = useState<Set<string>>(new Set())
  const [showConnections, setShowConnections] = useState(reduceMotion)

  const pulseIdRef = useRef(0)
  const pulseCountRef = useRef(0)

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

      // Flash the destination, then return to its baseline state.
      setNodeStates((prev) => prev.map((s, i) => (i === to ? 'active' : s)))
      window.setTimeout(() => {
        setNodeStates((prev) =>
          prev.map((s, i) =>
            i === to ? (i === MASTER ? 'thinking' : 'idle') : s,
          ),
        )
      }, 200)
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
      {showConnections &&
        connectionViews.map(({ a, b, key, start, end }) => (
          <ConnectionLine
            key={key}
            start={start}
            end={end}
            isActive={activeLines.has(lineKey(a, b))}
          />
        ))}

      {NODE_POSITIONS.map((position, idx) => {
        const order = ENTRY_ORDER.indexOf(idx)
        const delay = reduceMotion ? 0 : order * NODE_ENTRY_STEP
        return (
          <AgentNode
            key={idx}
            position={position}
            state={nodeStates[idx]}
            delay={delay}
            master={idx === MASTER}
            reduceMotion={reduceMotion}
          />
        )
      })}

      {NODE_POSITIONS.map((position, idx) => {
        const order = ENTRY_ORDER.indexOf(idx)
        const delay = reduceMotion ? 0 : order * NODE_ENTRY_STEP
        const labelPosition: Vec3 = [
          position[0],
          position[1] + LABEL_Y_OFFSETS[idx],
          position[2],
        ]
        return (
          <AgentLabel
            key={`label-${idx}`}
            text={NODE_LABELS[idx]}
            position={labelPosition}
            isMaster={idx === MASTER}
            delay={delay}
            reduceMotion={reduceMotion}
          />
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
    </group>
  )
}
