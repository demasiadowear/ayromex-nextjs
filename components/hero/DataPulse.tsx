'use client'

import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh, MeshStandardMaterial } from 'three'

interface Props {
  start: [number, number, number]
  end: [number, number, number]
  duration?: number
  onComplete?: () => void
  reduceMotion?: boolean
}

const TRAIL_OFFSET_S = 0.15
const TRAIL_BASE_OPACITY = 0.6

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
  const trailRef = useRef<Mesh>(null)
  const startTimeRef = useRef<number | null>(null)
  const completedRef = useRef(false)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    if (reduceMotion && !completedRef.current) {
      completedRef.current = true
      onCompleteRef.current?.()
    }
  }, [reduceMotion])

  useFrame((state, delta) => {
    if (!meshRef.current || reduceMotion) return

    if (startTimeRef.current === null) {
      startTimeRef.current = state.clock.elapsedTime
    }

    const elapsed = state.clock.elapsedTime - startTimeRef.current
    const headProgress = Math.min(elapsed / duration, 1)
    const headEased = easeInOutCubic(headProgress)

    // Move the leading sphere
    meshRef.current.position.x = start[0] + (end[0] - start[0]) * headEased
    meshRef.current.position.y = start[1] + (end[1] - start[1]) * headEased
    meshRef.current.position.z = start[2] + (end[2] - start[2]) * headEased

    // Trail rides 0.15s behind the head along the same path. Once
    // the head lands the trail keeps drifting toward the endpoint
    // while its material fades to transparent.
    if (trailRef.current) {
      const trailProgress = Math.max((elapsed - TRAIL_OFFSET_S) / duration, 0)
      const trailEased = easeInOutCubic(Math.min(trailProgress, 1))
      trailRef.current.position.x = start[0] + (end[0] - start[0]) * trailEased
      trailRef.current.position.y = start[1] + (end[1] - start[1]) * trailEased
      trailRef.current.position.z = start[2] + (end[2] - start[2]) * trailEased

      const trailMat = trailRef.current.material as MeshStandardMaterial
      if (headProgress >= 1) {
        trailMat.opacity = Math.max(trailMat.opacity - delta * 4, 0)
      } else {
        trailMat.opacity = TRAIL_BASE_OPACITY
      }
    }

    if (headProgress >= 1 && !completedRef.current) {
      completedRef.current = true
      onCompleteRef.current?.()
    }
  })

  if (reduceMotion) return null

  return (
    <group>
      {/* Leading spark */}
      <mesh ref={meshRef} position={start}>
        <sphereGeometry args={[0.06, 8, 8]} />
        <meshStandardMaterial
          color="#FF6B00"
          emissive="#FF6B00"
          emissiveIntensity={3}
          toneMapped={false}
        />
      </mesh>

      {/* Trailing afterglow */}
      <mesh ref={trailRef} position={start}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial
          color="#FF6B00"
          emissive="#FF6B00"
          emissiveIntensity={1.5}
          toneMapped={false}
          transparent
          opacity={TRAIL_BASE_OPACITY}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}
