'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Billboard, Text } from '@react-three/drei'

interface Props {
  text: string
  position: [number, number, number]
  isMaster?: boolean
  delay?: number
  reduceMotion?: boolean
}

const FONT_SIZE_NORMAL = 0.12
const FONT_SIZE_MASTER = 0.16
const TARGET_OPACITY_NORMAL = 0.9
const TARGET_OPACITY_MASTER = 1.0
const FADE_IN_DURATION = 0.6
const POST_NODE_DELAY = 0.3

export default function AgentLabel({
  text,
  position,
  isMaster = false,
  delay = 0,
  reduceMotion = false,
}: Props) {
  // ref points to the troika Text mesh; .material is exposed
  const textRef = useRef<any>(null)
  const startTimeRef = useRef<number | null>(null)

  const targetOpacity = isMaster ? TARGET_OPACITY_MASTER : TARGET_OPACITY_NORMAL

  useFrame((state) => {
    if (!textRef.current) return
    const material = textRef.current.material
    if (!material) return

    if (reduceMotion) {
      if (material.opacity !== targetOpacity) {
        material.opacity = targetOpacity
      }
      return
    }

    if (startTimeRef.current === null) {
      startTimeRef.current = state.clock.elapsedTime
    }
    const elapsed =
      state.clock.elapsedTime - startTimeRef.current - delay - POST_NODE_DELAY

    if (elapsed < 0) {
      material.opacity = 0
      return
    }
    if (elapsed < FADE_IN_DURATION) {
      material.opacity = (elapsed / FADE_IN_DURATION) * targetOpacity
    } else {
      material.opacity = targetOpacity
    }
  })

  return (
    <Billboard position={position}>
      <Text
        ref={textRef}
        fontSize={isMaster ? FONT_SIZE_MASTER : FONT_SIZE_NORMAL}
        color={isMaster ? '#FF6B00' : '#FAFAFA'}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.05}
        material-toneMapped={false}
        material-transparent={true}
        material-opacity={0}
      >
        {text}
      </Text>
    </Billboard>
  )
}
