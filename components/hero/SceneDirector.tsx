'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { initScrollTrigger } from '@/lib/scroll'
import { sceneProgress } from '@/lib/sceneProgress'

// Owns the document-wide scene-progress driver. Mounts a single
// GSAP ScrollTrigger that scrubs sceneProgress.current from 0 at
// the top of the page to 1 at the bottom. No JSX, no DOM — just
// a side-effectful mount/unmount.
//
// Any component that needs to react to scroll position can import
// sceneProgress from lib/sceneProgress and read `.current` inside
// a useFrame loop. There is no React state here by design; the
// value is deliberately a ref-style singleton so the scroll
// scrub at 60fps does not trigger re-renders.
export default function SceneDirector() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    initScrollTrigger()

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduce) {
      // Pin scene to the first preset so the constellation
      // stays at its hero layout for reduced-motion users.
      sceneProgress.current = 0
      return
    }

    const tween = gsap.to(sceneProgress, {
      current: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
      sceneProgress.current = 0
    }
  }, [])

  return null
}
