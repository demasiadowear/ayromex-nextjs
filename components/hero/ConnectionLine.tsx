'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import { Color } from 'three'

interface Props {
  start: [number, number, number]
  end: [number, number, number]
  isActive?: boolean
}

const IDLE_COLOR = new Color('#27272A')
const ACTIVE_COLOR = new Color('#FF6B00')
const IDLE_OPACITY = 0.3
const ACTIVE_OPACITY = 0.85
const IDLE_WIDTH = 0.8
const ACTIVE_WIDTH = 1.6

export default function ConnectionLine({
  start,
  end,
  isActive = false,
}: Props) {
  const points = useMemo(() => [start, end], [start, end])

  // Animated material values, lerped each frame toward the target
  // dictated by `isActive`. Storing them in refs avoids re-renders.
  const opacityRef = useRef(IDLE_OPACITY)
  const widthRef = useRef(IDLE_WIDTH)
  const colorRef = useRef(IDLE_COLOR.clone())
  const lineRef = useRef<any>(null)

  useFrame((_, delta) => {
    if (!lineRef.current) return

    const targetOpacity = isActive ? ACTIVE_OPACITY : IDLE_OPACITY
    const targetWidth = isActive ? ACTIVE_WIDTH : IDLE_WIDTH
    const targetColor = isActive ? ACTIVE_COLOR : IDLE_COLOR

    opacityRef.current += (targetOpacity - opacityRef.current) * delta * 6
    widthRef.current += (targetWidth - widthRef.current) * delta * 6
    colorRef.current.lerp(targetColor, delta * 6)

    const material = lineRef.current.material
    if (material) {
      material.opacity = opacityRef.current
      material.linewidth = widthRef.current
      material.color.copy(colorRef.current)
    }
  })

  return (
    <Line
      ref={lineRef}
      points={points}
      color={IDLE_COLOR}
      lineWidth={IDLE_WIDTH}
      transparent
      opacity={IDLE_OPACITY}
      depthWrite={false}
    />
  )
}
