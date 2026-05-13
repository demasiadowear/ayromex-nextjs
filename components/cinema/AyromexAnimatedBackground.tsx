'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * AYROMEX CORE — lightweight global background.
 *
 * Replaces the MP4 video-background system on the homepage. Pure
 * CSS + Framer Motion: a metallic orange grid, a slow-pulsing
 * brand-orange radial core, a secondary drifting glow, two thin
 * Electric Blue sweep lines and three tiny status nodes
 * (orange / blue / lime). A top + bottom Ink vignette keeps
 * headlines legible.
 *
 * Fixed full-viewport, z-0, pointer-events-none. The whole layer
 * respects prefers-reduced-motion by short-circuiting every
 * Framer Motion `animate` prop.
 *
 * Performance budget: zero network requests (no video, no images),
 * GPU-accelerated transforms/opacity only, no canvas, no WebGL.
 * Mobile-safe — uses overflow-hidden on the wrapper so decorative
 * elements that exceed viewport bounds never produce horizontal
 * scroll.
 */
export default function AyromexAnimatedBackground() {
  const reduce = useReducedMotion() ?? false

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none bg-ay-bg"
      style={{ zIndex: 0 }}
    >
      {/* Metallic orange grid base — uses the existing .grid-bg
          utility (slow horizontal drift, very low opacity orange). */}
      <div className="grid-bg" />

      {/* Primary AYROMEX CORE glow — orange radial, slow pulse. */}
      <motion.div
        className="absolute left-1/2 top-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 'min(1400px, 180vw)',
          height: 'min(1400px, 180vw)',
          background:
            'radial-gradient(closest-side, rgba(255,106,0,0.22), rgba(255,106,0,0.06) 38%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary glow — bottom-right, slow drift, smaller. */}
      <motion.div
        className="absolute rounded-full"
        style={{
          right: '-15%',
          bottom: '-15%',
          width: 'min(900px, 110vw)',
          height: 'min(900px, 110vw)',
          background:
            'radial-gradient(closest-side, rgba(255,106,0,0.10), transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={reduce ? undefined : { x: [0, -30, 0], y: [0, -24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Tertiary cool tint — top-left Electric Blue, very subtle. */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: '-20%',
          top: '-10%',
          width: 'min(700px, 90vw)',
          height: 'min(700px, 90vw)',
          background:
            'radial-gradient(closest-side, rgba(0,166,244,0.10), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={reduce ? undefined : { opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Two Electric Blue technical sweep lines — fade in/out. */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 h-px"
        style={{
          top: '22%',
          background:
            'linear-gradient(90deg, transparent, rgba(0,166,244,0.50) 50%, transparent)',
        }}
        animate={reduce ? undefined : { opacity: [0.25, 0.7, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 h-px"
        style={{
          bottom: '28%',
          background:
            'linear-gradient(90deg, transparent, rgba(0,166,244,0.35) 50%, transparent)',
        }}
        animate={reduce ? undefined : { opacity: [0.55, 0.2, 0.55] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Three tiny floating status nodes — orange / blue / lime. */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[18%] left-[12%] w-2 h-2 rounded-full bg-ay-accent"
        style={{ boxShadow: '0 0 22px rgba(255,106,0,0.7)' }}
        animate={
          reduce
            ? undefined
            : { y: [0, -14, 0], opacity: [0.6, 1, 0.6] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-[58%] left-[82%] w-1.5 h-1.5 rounded-full bg-ay-blue"
        style={{ boxShadow: '0 0 18px rgba(0,166,244,0.7)' }}
        animate={
          reduce
            ? undefined
            : { y: [0, 12, 0], opacity: [0.5, 0.95, 0.5] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute top-[78%] left-[28%] w-1 h-1 rounded-full bg-ay-lime"
        style={{ boxShadow: '0 0 14px rgba(168,255,62,0.6)' }}
        animate={
          reduce
            ? undefined
            : { y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Top + bottom Ink vignette so display headlines stay
          legible regardless of where the glow lands. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.10) 25%, rgba(13,13,13,0.10) 75%, rgba(13,13,13,0.80) 100%)',
        }}
      />
    </div>
  )
}
