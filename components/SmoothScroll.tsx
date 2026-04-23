'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { registerLenisScrollTrigger } from '@/lib/scroll'
import { initParallaxUtilities } from '@/lib/scroll'

interface Props {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: Props) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      lerp: 0.08,
    })

    // Bridge lenis to GSAP ScrollTrigger: lenis.raf is driven from
    // gsap.ticker so both systems share a single frame loop and
    // ScrollTrigger.update fires on every lenis scroll event.
    const detachScrollTrigger = registerLenisScrollTrigger(lenis)

    // Pick up any markup tagged with parallax utility classes that
    // was rendered by server components before this effect ran.
    const detachParallax = initParallaxUtilities()

    return () => {
      detachScrollTrigger()
      detachParallax()
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
