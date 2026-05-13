'use client'

import { motion, useReducedMotion } from 'framer-motion'

import NetworkPulseBeams from './NetworkPulseBeams'

/**
 * AYROMEX CORE — lightweight global background.
 *
 * Replaces the MP4 video-background system on the homepage. Pure
 * CSS + Framer Motion + SVG: a metallic orange grid, a slow-pulsing
 * brand-orange radial core, a secondary drifting glow, a tertiary
 * Electric Blue tint, and the NetworkPulseBeams orchestration layer
 * (sparse SVG nodes + animated comet beams). A top + bottom Ink
 * vignette keeps headlines legible.
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

      {/* AYROMEX orchestration network — nodes + animated beams. */}
      <NetworkPulseBeams />

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
