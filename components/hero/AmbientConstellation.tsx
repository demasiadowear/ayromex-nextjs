'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import AgentNode, { type NodeState } from './AgentNode'
import ConnectionLine from './ConnectionLine'
import DataPulse from './DataPulse'

type Vec3 = [number, number, number]

// Simplified 5-node constellation for the persistent background.
// Master at centre + four outer spokes. No labels, no bus emit,
// slower pulse cadence so the background never competes with the
// foreground hero scene.
const NODE_POSITIONS: Vec3[] = [
  [-3.5, 1, 0],    // 0 top-left
  [3.5, 1, 0],     // 1 top-right
  [0, 0, 0],       // 2 master
  [-2.5, -1.5, 0], // 3 bottom-left
  [2.5, -1.5, 0],  // 4 bottom-right
]

const MASTER = 2
const NON_MASTER = [0, 1, 3, 4]

const CONNECTIONS: Array<[number, number]> = [
  [MASTER, 0],
  [MASTER, 1],
  [MASTER, 3],
  [MASTER, 4],
]

const lineKey = (a: number, b: number) => `${Math.min(a, b)}-${Math.max(a, b)}`

const PULSE_DURATION_S = 1.6
const MAX_PULSES = 2
const PULSE_WAIT_MIN_MS = 5000
const PULSE_WAIT_RANGE_MS = 3000
const ENTRY_BUFFER_MS = 1500

interface PulseInstance {
  id: number
  from: number
  to: number
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

interface Props {
  reduceMotion?: boolean
}

export default function AmbientConstellation({ reduceMotion = false }: Props) {
  const [nodeStates, setNodeStates] = useState<NodeState[]>(() =>
    NODE_POSITIONS.map((_, i) => (i === MASTER ? 'thinking' : 'idle')),
  )
  const [pulses, setPulses] = useState<PulseInstance[]>([])
  const [activeLines, setActiveLines] = useState<Set<string>>(new Set())

  const pulseIdRef = useRef(0)
  const pulseCountRef = useRef(0)

  const spawnPulse = useCallback((from: number, to: number) => {
    if (pulseCountRef.current >= MAX_PULSES) return
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

      setNodeStates((prev) => prev.map((s, i) => (i === to ? 'active' : s)))
      window.setTimeout(() => {
        setNodeStates((prev) =>
          prev.map((s, i) =>
            i === to ? (i === MASTER ? 'thinking' : 'idle') : s,
          ),
        )
      }, 300)
    },
    [],
  )

  useEffect(() => {
    if (reduceMotion) return

    let timer: number = 0
    const schedule = () => {
      const wait = PULSE_WAIT_MIN_MS + Math.random() * PULSE_WAIT_RANGE_MS
      timer = window.setTimeout(() => {
        spawnPulse(pickRandom(NON_MASTER), MASTER)
        schedule()
      }, wait)
    }

    const initial = window.setTimeout(schedule, ENTRY_BUFFER_MS)
    return () => {
      window.clearTimeout(initial)
      window.clearTimeout(timer)
    }
  }, [reduceMotion, spawnPulse])

  return (
    <group>
      {CONNECTIONS.map(([a, b]) => (
        <ConnectionLine
          key={lineKey(a, b)}
          start={NODE_POSITIONS[a]}
          end={NODE_POSITIONS[b]}
          isActive={activeLines.has(lineKey(a, b))}
        />
      ))}

      {NODE_POSITIONS.map((position, idx) => (
        <AgentNode
          key={idx}
          position={position}
          state={nodeStates[idx]}
          master={idx === MASTER}
          reduceMotion={reduceMotion}
        />
      ))}

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
