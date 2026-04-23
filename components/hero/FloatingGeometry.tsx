'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'

interface Props {
  reduceMotion?: boolean
}

type PieceProps = {
  position: [number, number, number]
  rotationSpeed: [number, number, number]
  reduceMotion: boolean
  children: React.ReactNode
}

function Piece({ position, rotationSpeed, reduceMotion, children }: PieceProps) {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (reduceMotion || !ref.current) return
    ref.current.rotation.x += rotationSpeed[0] * delta
    ref.current.rotation.y += rotationSpeed[1] * delta
    ref.current.rotation.z += rotationSpeed[2] * delta
  })

  return (
    <mesh ref={ref} position={position}>
      {children}
    </mesh>
  )
}

export default function FloatingGeometry({ reduceMotion = false }: Props) {
  return (
    <>
      {/* Icosahedron, top-left, muted */}
      <Piece
        position={[-6, 3, -2]}
        rotationSpeed={[0.05, 0.08, 0]}
        reduceMotion={reduceMotion}
      >
        <icosahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#27272A" wireframe />
      </Piece>

      {/* Octahedron, bottom-right, accent */}
      <Piece
        position={[7, -2.5, -3]}
        rotationSpeed={[0.07, -0.06, 0.03]}
        reduceMotion={reduceMotion}
      >
        <octahedronGeometry args={[1.4, 0]} />
        <meshBasicMaterial color="#FF6B00" wireframe transparent opacity={0.55} />
      </Piece>

      {/* Thin torus, top-right, muted */}
      <Piece
        position={[6, 3, -4]}
        rotationSpeed={[0.1, 0.05, 0]}
        reduceMotion={reduceMotion}
      >
        <torusGeometry args={[1, 0.02, 12, 48]} />
        <meshBasicMaterial color="#27272A" wireframe />
      </Piece>

      {/* Thin ring, bottom-left, accent */}
      <Piece
        position={[-7, -2, -3]}
        rotationSpeed={[0, 0.12, 0]}
        reduceMotion={reduceMotion}
      >
        <torusGeometry args={[1.2, 0.015, 8, 64]} />
        <meshBasicMaterial color="#FF6B00" wireframe transparent opacity={0.6} />
      </Piece>

      {/* Small octahedron, far back, muted */}
      <Piece
        position={[0, 4, -8]}
        rotationSpeed={[0.04, 0.03, 0.02]}
        reduceMotion={reduceMotion}
      >
        <octahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#27272A" wireframe />
      </Piece>
    </>
  )
}
