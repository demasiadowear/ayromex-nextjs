'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  type Points,
  type PointsMaterial,
} from 'three'

const PARTICLE_COUNT = 12
const DURATION_S = 0.5
const RADIUS = 0.5

interface Props {
  position: [number, number, number]
}

export default function PulseArrival({ position }: Props) {
  const pointsRef = useRef<Points>(null)
  const startTimeRef = useRef<number | null>(null)

  // Random unit-vector directions baked once at mount so the
  // explosion preserves its silhouette across frames.
  const { geometry, directions } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const directions = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      directions[i * 3] = Math.sin(phi) * Math.cos(theta)
      directions[i * 3 + 1] = Math.sin(phi) * Math.sin(theta)
      directions[i * 3 + 2] = Math.cos(phi)
    }

    const geo = new BufferGeometry()
    geo.setAttribute('position', new BufferAttribute(positions, 3))
    return { geometry: geo, directions }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return

    if (startTimeRef.current === null) {
      startTimeRef.current = state.clock.elapsedTime
    }
    const elapsed = state.clock.elapsedTime - startTimeRef.current
    const progress = Math.min(elapsed / DURATION_S, 1)

    const posAttr = pointsRef.current.geometry.attributes.position as BufferAttribute
    const arr = posAttr.array as Float32Array
    const r = progress * RADIUS

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr[i * 3] = directions[i * 3] * r
      arr[i * 3 + 1] = directions[i * 3 + 1] * r
      arr[i * 3 + 2] = directions[i * 3 + 2] * r
    }
    posAttr.needsUpdate = true

    const mat = pointsRef.current.material as PointsMaterial
    mat.opacity = (1 - progress) * 0.85
  })

  return (
    <points ref={pointsRef} position={position} geometry={geometry}>
      <pointsMaterial
        color="#FF6B00"
        size={0.05}
        sizeAttenuation
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  )
}
