'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Grid } from '@react-three/drei'
import type { Group } from 'three'

interface Props {
  reduceMotion?: boolean
}

export default function GridFloor({ reduceMotion = false }: Props) {
  const groupRef = useRef<Group>(null)

  useFrame((_, delta) => {
    if (reduceMotion || !groupRef.current) return
    // Scroll the grid forward along Z so the lines appear to flow
    // toward the camera. Modulo on sectionSize (10) keeps the wrap
    // invisible because the pattern repeats every 10 units.
    groupRef.current.position.z = (groupRef.current.position.z + delta * 5) % 10
  })

  return (
    <group ref={groupRef}>
      <Grid
        position={[0, -2, 0]}
        args={[2000, 2000]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#FF6B00"
        sectionSize={10}
        sectionThickness={1.5}
        sectionColor="#FF6B00"
        fadeDistance={40}
        fadeStrength={1.8}
        infiniteGrid
        followCamera={false}
      />
    </group>
  )
}
