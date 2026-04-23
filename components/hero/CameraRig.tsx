'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

const LOOK_TARGET = new Vector3(0, 0.5, 0)
const BASE_Y = 1.5
const AMPLITUDE_X = 2.5
const AMPLITUDE_Y = 1.2
const LERP = 0.02

interface Props {
  reduceMotion?: boolean
}

export default function CameraRig({ reduceMotion = false }: Props) {
  const { camera, mouse, pointer } = useThree()

  useFrame(() => {
    if (reduceMotion) {
      camera.position.set(0, BASE_Y, 5)
      camera.lookAt(LOOK_TARGET)
      return
    }

    // `pointer` is R3F's normalized mouse (-1..1 on both axes), same
    // values as `mouse` on a desktop pointer. On touch devices both
    // default to 0 so the camera simply stays at the base position.
    const source = pointer ?? mouse
    const targetX = source.x * AMPLITUDE_X
    const targetY = BASE_Y + source.y * AMPLITUDE_Y

    camera.position.x += (targetX - camera.position.x) * LERP
    camera.position.y += (targetY - camera.position.y) * LERP
    camera.lookAt(LOOK_TARGET)
  })

  return null
}
