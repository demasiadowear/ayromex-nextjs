'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import AyroBubble from './AyroBubble'

// Scroll thresholds (in viewport heights) that drive the state
// transitions. The guide is hidden while the hero is fully in
// view, then appears during the hero -> products handoff.
const TH_APPEAR = 0.7 // hero still visible but scrolling past
const TH_PRODUCTS = 1.3
const TH_PROCESS = 2.3
const TH_CTA = 3.3

export type AyroGuideState =
  | 'hidden'
  | 'transition'
  | 'products'
  | 'process'
  | 'cta'

export type AyroGuideHover =
  | null
  | 'ayrohub'
  | 'ayrodesk24'
  | 'process-01'
  | 'process-02'
  | 'process-03'
  | 'process-04'
  | 'cta-form'
  | 'cta-submitted'

interface InternalState {
  phase: AyroGuideState
  hover: AyroGuideHover
}

// Keep the last observed hover/phase in a ref-like closure so the
// scroll listener can coexist with hover callbacks without
// re-creating dependencies.
const INITIAL: InternalState = { phase: 'hidden', hover: null }

export default function AyroGuide() {
  const t = useTranslations('ayroGuide')
  const reduceMotion = useReducedMotion() ?? false

  const [{ phase, hover }, setState] = useState<InternalState>(INITIAL)

  // Scroll-position -> phase mapping. Uses raw window.scrollY since
  // lenis preserves it. Throttled via rAF to keep the listener
  // cheap.
  useEffect(() => {
    let rafId = 0
    let ticking = false

    const update = () => {
      ticking = false
      const vh = window.innerHeight || 1
      const progress = window.scrollY / vh

      let nextPhase: AyroGuideState = 'hidden'
      if (progress >= TH_CTA) nextPhase = 'cta'
      else if (progress >= TH_PROCESS) nextPhase = 'process'
      else if (progress >= TH_PRODUCTS) nextPhase = 'products'
      else if (progress >= TH_APPEAR) nextPhase = 'transition'

      setState((prev) =>
        prev.phase === nextPhase ? prev : { ...prev, phase: nextPhase },
      )
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      rafId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
      window.cancelAnimationFrame(rafId)
    }
  }, [])

  // Listen for hero-wide custom hover events dispatched by product
  // cards, process steps and the CTA form. Any component inside
  // the homepage can emit `window.dispatchEvent(new CustomEvent(
  // 'ayro-guide:hover', { detail: 'ayrohub' | null }))`.
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<AyroGuideHover>).detail
      setState((prev) =>
        prev.hover === (detail ?? null)
          ? prev
          : { ...prev, hover: detail ?? null },
      )
    }
    window.addEventListener('ayro-guide:hover', handler)
    return () => window.removeEventListener('ayro-guide:hover', handler)
  }, [])

  // Resolve which bubble to show given phase + hover.
  const bubbleText = resolveBubble(t, phase, hover)

  // Whether the guide is visible at all.
  const visible = phase !== 'hidden'

  // Intensified presence: CTA phase and hover variants make the
  // node brighter and slightly larger.
  const intensified = phase === 'cta' || hover !== null
  const scale = intensified ? 1.15 : 1

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : -12, scale: reduceMotion ? 1 : 0.92 }}
          animate={{ opacity: 1, y: 0, scale }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -12, scale: 0.92 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="hidden md:block fixed top-[96px] right-10 z-40 pointer-events-none"
        >
          <div className="relative w-20 h-20">
            {/* Halo */}
            <motion.div
              className="absolute inset-0 rounded-full bg-ay-accent blur-lg"
              animate={{
                opacity: intensified ? 0.5 : 0.28,
                scale: reduceMotion ? 1 : [1, 1.08, 1],
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
              }
            />
            {/* Ring */}
            <motion.div
              className="absolute inset-1 rounded-full border border-ay-accent/60"
              animate={
                reduceMotion
                  ? { rotate: 0 }
                  : { rotate: 360 }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: phase === 'cta' ? 6 : 14, repeat: Infinity, ease: 'linear' }
              }
            />
            {/* Core */}
            <div
              className="absolute left-1/2 top-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ay-accent"
              style={{
                boxShadow: intensified
                  ? '0 0 24px rgba(255,107,0,0.85), 0 0 48px rgba(255,107,0,0.45)'
                  : '0 0 16px rgba(255,107,0,0.55), 0 0 32px rgba(255,107,0,0.25)',
              }}
            />

            {/* Bubble to the left of the guide */}
            <AyroBubble text={bubbleText} side="left" />
          </div>
        </motion.div>
      )}

      {/* Mobile follower: smaller, docked bottom-right with bubble above */}
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="md:hidden fixed bottom-24 right-6 z-40 pointer-events-none"
        >
          <div className="relative w-[60px] h-[60px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-ay-accent blur-lg"
              animate={{ opacity: intensified ? 0.5 : 0.28 }}
            />
            <div
              className="absolute left-1/2 top-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ay-accent"
              style={{
                boxShadow: '0 0 16px rgba(255,107,0,0.65)',
              }}
            />
            <AyroBubble text={bubbleText} side="top" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function resolveBubble(
  t: (key: string) => string,
  phase: AyroGuideState,
  hover: AyroGuideHover,
): string | null {
  if (hover === 'ayrohub') return t('productAyroHub')
  if (hover === 'ayrodesk24') return t('productAyroDesk24')
  if (hover === 'process-01') return t('process01')
  if (hover === 'process-02') return t('process02')
  if (hover === 'process-03') return t('process03')
  if (hover === 'process-04') return t('process04')
  if (hover === 'cta-form') return t('ctaForm')
  if (hover === 'cta-submitted') return t('ctaSubmitted')

  switch (phase) {
    case 'transition':
      return t('transition')
    case 'products':
      return t('productsIntro')
    case 'process':
      return t('processIntro')
    case 'cta':
      return t('ctaIntro')
    default:
      return null
  }
}
