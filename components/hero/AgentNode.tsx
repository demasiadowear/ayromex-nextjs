'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group, Mesh, MeshBasicMaterial, MeshStandardMaterial } from 'three'

export type NodeState = 'idle' | 'thinking' | 'active' | 'dormant'

interface Props {
  position: [number, number, number]
  state: NodeState
  delay?: number
  master?: boolean
  reduceMotion?: boolean
}

const ACCENT = '#FF6B00'

// Elastic ease-out: overshoots then settles.
function easeOutElastic(t: number) {
  if (t <= 0) return 0
  if (t >= 1) return 1
  const c4 = (2 * Math.PI) / 3
  return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
}

export default function AgentNode({
  position,
  state,
  delay = 0,
  master = false,
  reduceMotion = false,
}: Props) {
  const groupRef = useRef<Group>(null)
  const ringRef = useRef<Mesh>(null)
  const haloRef = useRef<Mesh>(null)
  const coreRef = useRef<Mesh>(null)
  const startTimeRef = useRef<number | null>(null)

  // Per-node randomness, stable across re-renders
  const ringSpeed = useMemo(() => 0.25 + Math.random() * 0.15, [])
  const ringTilt = useMemo(() => Math.random() * Math.PI, [])

  const sizes = useMemo(
    () => ({
      core: 0.15,
      ring: master ? 0.35 : 0.25,
      halo: master ? 0.45 : 0.4,
      haloOpacity: master ? 0.25 : 0.15,
      restScale: master ? 1.3 : 1.0,
    }),
    [master],
  )

  useFrame((rendererState, delta) => {
    if (!groupRef.current) return

    if (startTimeRef.current === null) {
      startTimeRef.current = rendererState.clock.elapsedTime
    }
    const sinceMount = rendererState.clock.elapsedTime - startTimeRef.current
    const elapsed = sinceMount - delay

    // Entrance: scale 0 -> restScale in 0.8s with elastic, then settle
    let baseScale = sizes.restScale
    if (!reduceMotion) {
      if (elapsed < 0) {
        groupRef.current.scale.setScalar(0)
        return
      }
      if (elapsed < 0.8) {
        baseScale = sizes.restScale * easeOutElastic(elapsed / 0.8)
      }
    }

    // State-based scale modifiers
    let stateScale = 1
    if (state === 'active') {
      stateScale = 1.15
    } else if (state === 'thinking' && !reduceMotion) {
      stateScale = 1 + Math.sin(rendererState.clock.elapsedTime * 4) * 0.05
    }

    groupRef.current.scale.setScalar(baseScale * stateScale)

    // Core emissive intensity
    if (coreRef.current) {
      const mat = coreRef.current.material as MeshStandardMaterial
      const target = state === 'active' ? 2.5 : state === 'dormant' ? 0.4 : 1.2
      mat.emissiveIntensity = mat.emissiveIntensity + (target - mat.emissiveIntensity) * delta * 6
    }

    // Halo opacity transitions toward target based on state
    if (haloRef.current) {
      const mat = haloRef.current.material as MeshBasicMaterial
      const target =
        state === 'dormant'
          ? 0.05
          : state === 'active'
            ? sizes.haloOpacity * 1.4
            : sizes.haloOpacity
      mat.opacity = mat.opacity + (target - mat.opacity) * delta * 4
    }

    // Ring rotation speed varies by state
    if (ringRef.current && !reduceMotion) {
      const speed =
        state === 'thinking' ? 0.8 : state === 'dormant' ? 0 : ringSpeed
      ringRef.current.rotation.x += speed * delta
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Core sphere — glowing centre */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[sizes.core, 16, 16]} />
        <meshStandardMaterial
          color={ACCENT}
          emissive={ACCENT}
          emissiveIntensity={1.2}
          toneMapped={false}
        />
      </mesh>

      {/* Ring wireframe */}
      <mesh ref={ringRef} rotation={[ringTilt, 0, 0]}>
        <torusGeometry args={[sizes.ring, 0.01, 8, 48]} />
        <meshBasicMaterial color={ACCENT} transparent opacity={0.6} />
      </mesh>

      {/* Outer halo — soft glow */}
      <mesh ref={haloRef}>
        <sphereGeometry args={[sizes.halo, 16, 16]} />
        <meshBasicMaterial
          color={ACCENT}
          transparent
          opacity={sizes.haloOpacity}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
