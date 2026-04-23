'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

// Client-side wrapper so the server root layout can mount a WebGL
// scene via next/dynamic({ ssr: false }). The dynamic helper is
// only callable with ssr: false inside client components.
const BackgroundScene = dynamic(() => import('./BackgroundScene'), {
  ssr: false,
  loading: () => null,
})

export default function BackgroundSceneMount() {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduceMotion(media.matches)
    handler()
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])

  return <BackgroundScene reduceMotion={reduceMotion} />
}
