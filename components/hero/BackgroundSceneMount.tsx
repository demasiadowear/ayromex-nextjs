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

const MOBILE_BREAKPOINT = '(max-width: 767px)'

export default function BackgroundSceneMount() {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [lightweight, setLightweight] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sizeMedia = window.matchMedia(MOBILE_BREAKPOINT)

    const onMotion = () => setReduceMotion(motionMedia.matches)
    const onSize = () => setLightweight(sizeMedia.matches)

    onMotion()
    onSize()
    motionMedia.addEventListener('change', onMotion)
    sizeMedia.addEventListener('change', onSize)

    return () => {
      motionMedia.removeEventListener('change', onMotion)
      sizeMedia.removeEventListener('change', onSize)
    }
  }, [])

  return <BackgroundScene reduceMotion={reduceMotion} lightweight={lightweight} />
}
