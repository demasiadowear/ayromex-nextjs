'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  type Points,
} from 'three'

const PARTICLE_COUNT = 60

const BOX = { x: 30, y: 15, z: 30 } as const
const HALF = { x: BOX.x / 2, y: BOX.y / 2, z: BOX.z / 2 } as const

const ACCENT = new Color('#FF6B00')
const TEXT = new Color('#FAFAFA')
const ACCENT_RATIO = 0.5

interface Props {
  reduceMotion?: boolean
}

export default function ParticleField({ reduceMotion = false }: Props) {
  const pointsRef = useRef<Points>(null)

  const { geometry, velocities, seeds } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    const seeds = new Float32Array(PARTICLE_COUNT)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * BOX.x
      positions[i * 3 + 1] = (Math.random() - 0.5) * BOX.y
      positions[i * 3 + 2] = (Math.random() - 0.5) * BOX.z

      const color = Math.random() < ACCENT_RATIO ? ACCENT : TEXT
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      velocities[i * 3] = (Math.random() - 0.5) * 0.3
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.3
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.3

      seeds[i] = Math.random() * Math.PI * 2
    }

    const geometry = new BufferGeometry()
    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    geometry.setAttribute('color', new BufferAttribute(colors, 3))

    return { geometry, velocities, seeds }
  }, [])

  useFrame((state, delta) => {
    if (reduceMotion || !pointsRef.current) return

    const posAttr = pointsRef.current.geometry.attributes.position as BufferAttribute
    const posArr = posAttr.array as Float32Array
    const t = state.clock.elapsedTime

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const base = i * 3

      posArr[base] +=
        velocities[base] * delta + Math.sin(t * 0.3 + seeds[i]) * delta * 0.05
      posArr[base + 1] +=
        velocities[base + 1] * delta + Math.cos(t * 0.25 + seeds[i]) * delta * 0.05
      posArr[base + 2] += velocities[base + 2] * delta

      // Toroidal wrap-around on all three axes
      if (posArr[base] > HALF.x) posArr[base] -= BOX.x
      else if (posArr[base] < -HALF.x) posArr[base] += BOX.x

      if (posArr[base + 1] > HALF.y) posArr[base + 1] -= BOX.y
      else if (posArr[base + 1] < -HALF.y) posArr[base + 1] += BOX.y

      if (posArr[base + 2] > HALF.z) posArr[base + 2] -= BOX.z
      else if (posArr[base + 2] < -HALF.z) posArr[base + 2] += BOX.z
    }

    posAttr.needsUpdate = true
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        vertexColors
        transparent
        depthWrite={false}
        blending={AdditiveBlending}
        opacity={0.85}
      />
    </points>
  )
}
