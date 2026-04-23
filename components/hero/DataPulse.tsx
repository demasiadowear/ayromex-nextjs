'use client'

import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

interface Props {
  start: [number, number, number]
  end: [number, number, number]
  duration?: number
  onComplete?: () => void
  reduceMotion?: boolean
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function DataPulse({
  start,
  end,
  duration = 1.2,
  onComplete,
  reduceMotion = false,
}: Props) {
  const meshRef = useRef<Mesh>(null)
  const startTimeRef = useRef<number | null>(null)
  const completedRef = useRef(false)
  const onCompleteRef = useRef(onComplete)

  // Keep latest callback in a ref so the effect below stays stable.
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  // Reduced motion: skip the travel and resolve immediately.
  useEffect(() => {
    if (reduceMotion && !completedRef.current) {
      completedRef.current = true
      onCompleteRef.current?.()
    }
  }, [reduceMotion])

  useFrame((state) => {
    if (!meshRef.current || completedRef.current || reduceMotion) return

    if (startTimeRef.current === null) {
      startTimeRef.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - startTimeRef.current
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeInOutCubic(progress)

    meshRef.current.position.x = start[0] + (end[0] - start[0]) * eased
    meshRef.current.position.y = start[1] + (end[1] - start[1]) * eased
    meshRef.current.position.z = start[2] + (end[2] - start[2]) * eased

    if (progress >= 1) {
      completedRef.current = true
      onCompleteRef.current?.()
    }
  })

  if (reduceMotion) return null

  return (
    <mesh ref={meshRef} position={start}>
      <sphereGeometry args={[0.06, 8, 8]} />
      <meshStandardMaterial
        color="#FF6B00"
        emissive="#FF6B00"
        emissiveIntensity={3}
        toneMapped={false}
      />
    </mesh>
  )
}
