'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import AgentConstellation from './AgentConstellation'
import CameraRig from './CameraRig'
import ParticleField from './ParticleField'

interface Props {
  reduceMotion?: boolean
}

export default function HeroScene({ reduceMotion = false }: Props) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 60, position: [0, 1.5, 5] }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          onCreated={({ camera }) => camera.lookAt(0, 0.5, 0)}
        >
          <fog attach="fog" args={['#0A0A0A', 8, 30]} />
          <CameraRig reduceMotion={reduceMotion} />
          <AgentConstellation reduceMotion={reduceMotion} />
          <ParticleField reduceMotion={reduceMotion} />
        </Canvas>
      </Suspense>
    </div>
  )
}
