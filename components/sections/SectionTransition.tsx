'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { initScrollTrigger } from '@/lib/scroll'

type Variant = 'fade-up' | 'fade-scale' | 'parallax' | 'number-reveal'

interface Props {
  id: string
  children: React.ReactNode
  variant?: Variant
  delay?: number
  className?: string
}

// Shared wrapper for every page-level section after the hero. On
// mount it registers a ScrollTrigger-driven tween that fades the
// section in from opacity 0 + y 60 as the block crosses "top 80%"
// of the viewport. The tween reverses on scroll back up so
// revisits re-trigger the reveal cleanly.
//
// Variants:
// - fade-up (default): the section content fades up as one block.
// - fade-scale: same fade plus a 0.96 -> 1 scale.
// - parallax: no fade, children drift upward over the scroll span.
// - number-reveal: fade-up on content + a separate low-opacity
//   reveal of any descendant tagged data-section-number.
export default function SectionTransition({
  id,
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
}: Props) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    initScrollTrigger()

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) {
      // Nothing to animate — leave the block in its final state.
      return
    }

    const content = Array.from(
      el.querySelectorAll<HTMLElement>(':scope > *:not([data-section-number])'),
    )
    const numberEl = el.querySelector<HTMLElement>('[data-section-number]')

    const tweens: gsap.core.Tween[] = []

    if (variant === 'parallax') {
      const tween = gsap.fromTo(
        content,
        { y: 80 },
        {
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
      tweens.push(tween)
    } else {
      const fromVars: gsap.TweenVars = { opacity: 0, y: 60 }
      const toVars: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      }

      if (variant === 'fade-scale') {
        fromVars.scale = 0.96
        toVars.scale = 1
      }

      tweens.push(gsap.fromTo(content, fromVars, toVars))

      if (variant === 'number-reveal' && numberEl) {
        tweens.push(
          gsap.fromTo(
            numberEl,
            { opacity: 0 },
            {
              opacity: 0.08,
              duration: 1.5,
              delay: delay + 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
              },
            },
          ),
        )
      }
    }

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill()
        tween.kill()
      })
    }
  }, [variant, delay])

  return (
    <section id={id} ref={sectionRef} className={className}>
      {children}
    </section>
  )
}
