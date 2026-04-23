'use client'

import { useFrame, useThree } from '@react-three/fiber'
import { Vector3 } from 'three'

const LOOK_TARGET = new Vector3(0, 0.5, 0)
const BASE = { x: 0, y: 1.5, z: 5 } as const
const AMPLITUDE_X = 3.5
const AMPLITUDE_Y = 1.4
const LERP = 0.04
const ORBIT_SPEED = 0.02 // radians per second
const ORBIT_RADIUS = 0.3 // units

interface Props {
  reduceMotion?: boolean
}

export default function CameraRig({ reduceMotion = false }: Props) {
  const { camera, mouse, pointer } = useThree()

  useFrame((state, delta) => {
    if (reduceMotion) {
      camera.position.set(BASE.x, BASE.y, BASE.z)
      camera.lookAt(LOOK_TARGET)
      return
    }

    // Mouse-driven parallax target
    const source = pointer ?? mouse
    const mouseX = source.x * AMPLITUDE_X
    const mouseY = BASE.y + source.y * AMPLITUDE_Y

    // Slow orbital sway around the look target so the camera never
    // feels frozen even when the visitor's pointer is still.
    const t = state.clock.elapsedTime * ORBIT_SPEED
    const orbitX = Math.sin(t) * ORBIT_RADIUS
    const orbitZ = Math.cos(t) * ORBIT_RADIUS

    const targetX = mouseX + orbitX
    const targetY = mouseY
    const targetZ = BASE.z + orbitZ

    camera.position.x += (targetX - camera.position.x) * LERP
    camera.position.y += (targetY - camera.position.y) * LERP
    camera.position.z += (targetZ - camera.position.z) * LERP
    camera.lookAt(LOOK_TARGET)
  })

  return null
}
