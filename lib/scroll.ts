'use client'

import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type Lenis from 'lenis'

let pluginRegistered = false

// Idempotent GSAP ScrollTrigger registration. Safe to call from
// multiple components without double-registering the plugin.
export function initScrollTrigger() {
  if (pluginRegistered) return
  if (typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  pluginRegistered = true
}

// Bridge a Lenis instance with GSAP ScrollTrigger:
// - ScrollTrigger.update runs on every lenis scroll event
// - lenis.raf is driven from gsap.ticker instead of a standalone
//   requestAnimationFrame, so both systems share a single frame
//   loop and cannot drift from each other
// - gsap.ticker.lagSmoothing is disabled to prevent GSAP from
//   pausing time while lenis is mid-inertia
//
// Returns a teardown function that unsubscribes the listeners.
export function registerLenisScrollTrigger(lenis: Lenis) {
  initScrollTrigger()

  const onScroll = () => ScrollTrigger.update()
  lenis.on('scroll', onScroll)

  const ticker = (time: number) => {
    // gsap.ticker fires with time in seconds; lenis.raf expects ms.
    lenis.raf(time * 1000)
  }
  gsap.ticker.add(ticker)
  gsap.ticker.lagSmoothing(0)

  return () => {
    lenis.off('scroll', onScroll)
    gsap.ticker.remove(ticker)
  }
}

interface ScrollRevealOptions {
  start?: string
  end?: string
  y?: number
  duration?: number
  delay?: number
  ease?: string
  scrub?: boolean | number
  once?: boolean
}

// Reveal a single element with a fade + translate tween gated on
// its own intersection with the viewport. `once: true` plays the
// tween once and leaves the element in the final state on exit.
export function useScrollReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  options: ScrollRevealOptions = {},
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    initScrollTrigger()

    const {
      start = 'top 80%',
      end = 'top 30%',
      y = 60,
      duration = 1.2,
      delay = 0,
      ease = 'power3.out',
      scrub = false,
      once = true,
    } = options

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref])
}

// Parallax an element along scroll. `speed > 0` moves it slower
// than the page (settles higher as the visitor scrolls down);
// `speed < 0` inverts the relationship. Use ~0.5 for subtle,
// 1.5 for aggressive.
export function useParallax<T extends HTMLElement>(
  ref: RefObject<T | null>,
  speed = 0.5,
) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    initScrollTrigger()

    const tween = gsap.to(el, {
      yPercent: -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [ref, speed])
}

// Scan the document for .parallax-slow / .parallax-fast markers
// and wire each to a scrub-linked parallax tween. Call this once
// after the SmoothScroll wrapper has mounted.
export function initParallaxUtilities() {
  if (typeof window === 'undefined') return () => {}
  initScrollTrigger()

  const triggers: ScrollTrigger[] = []

  const bind = (selector: string, speed: number) => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector))
    elements.forEach((el) => {
      const tween = gsap.to(el, {
        yPercent: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    })
  }

  bind('.parallax-slow', 0.5)
  bind('.parallax-fast', 1.5)

  return () => {
    triggers.forEach((t) => t.kill())
  }
}
