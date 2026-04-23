'use client'

import { Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import AmbientConstellation from './AmbientConstellation'
import ParticleField from './ParticleField'

interface Props {
  reduceMotion?: boolean
  lightweight?: boolean
}

const LOOK_TARGET: [number, number, number] = [0, 0, 0]
const BASE_POSITION: [number, number, number] = [0, 2, 8]

// Simple slow camera drift for the ambient background layer. Avoids
// mouse parallax so the background never reacts to cursor movement
// (that's reserved for the hero scene), but keeps a subtle sin/cos
// wander so the layer never feels pinned.
function BackgroundCamera({ reduceMotion = false }: Props) {
  const { camera } = useThree()

  useFrame((state) => {
    if (reduceMotion) {
      camera.position.set(...BASE_POSITION)
      camera.lookAt(...LOOK_TARGET)
      return
    }

    const t = state.clock.elapsedTime * 0.03
    camera.position.x = BASE_POSITION[0] + Math.sin(t) * 0.8
    camera.position.y = BASE_POSITION[1] + Math.cos(t * 0.7) * 0.3
    camera.position.z = BASE_POSITION[2] + Math.cos(t) * 0.5
    camera.lookAt(...LOOK_TARGET)
  })

  return null
}

export default function BackgroundScene({ reduceMotion = false, lightweight = false }: Props) {
  // Crossfade in as the visitor scrolls past the hero. The hero
  // section is ~100vh so mapping 0-800 covers the handoff zone.
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 800], [0, 1])

  // Listen for the CTA section reporting its visibility so the
  // ambient constellation can briefly intensify its traffic.
  const [intensified, setIntensified] = useState(false)
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<boolean>).detail
      setIntensified(Boolean(detail))
    }
    window.addEventListener('ayro-scene:intensity', handler)
    return () => window.removeEventListener('ayro-scene:intensity', handler)
  }, [])

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: reduceMotion ? 0.35 : opacity }}
    >
      <Suspense fallback={null}>
        <Canvas
          dpr={lightweight ? [1, 1.5] : [1, 2]}
          camera={{ fov: 60, position: BASE_POSITION }}
          gl={{
            antialias: !lightweight,
            alpha: true,
            powerPreference: lightweight ? 'low-power' : 'high-performance',
          }}
          onCreated={({ camera }) => camera.lookAt(...LOOK_TARGET)}
        >
          <fog attach="fog" args={['#0A0A0A', 5, 20]} />
          <BackgroundCamera reduceMotion={reduceMotion} />
          <AmbientConstellation
            reduceMotion={reduceMotion}
            lightweight={lightweight}
            intensified={intensified}
          />
          <ParticleField reduceMotion={reduceMotion} lightweight={lightweight} />
        </Canvas>
      </Suspense>
    </motion.div>
  )
}
