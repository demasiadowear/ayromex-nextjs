'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * AyromexGlowingShadow — decorative glow halo behind any element.
 *
 * Layered radial gradients (AYROMEX Brand Orange primary, Electric
 * Blue secondary) sit absolutely behind `children` and pulse slowly.
 * The wrapper is `relative` and inherits its width from the parent —
 * never `vw`, never `w-screen`, so the glow cannot create horizontal
 * overflow on mobile.
 *
 * - No rainbow / no hue cycling / no purple.
 * - No @property polyfill, no global CSS.
 * - prefers-reduced-motion turns the pulse off (glow stays static).
 * - Decorative wrapper: renders a <div>, no role, no interactivity.
 *
 * Use sparingly — e.g. behind the hero focal card, not on every card.
 */

type Intensity = 'soft' | 'medium' | 'strong'

interface AyromexGlowingShadowProps {
  children: ReactNode
  className?: string
  intensity?: Intensity
}

const INTENSITY_MAP: Record<
  Intensity,
  { orange: number; blue: number; spread: number; blur: number }
> = {
  soft:   { orange: 0.20, blue: 0.08, spread: 18, blur: 50 },
  medium: { orange: 0.32, blue: 0.12, spread: 26, blur: 64 },
  strong: { orange: 0.46, blue: 0.18, spread: 36, blur: 80 },
}

export default function AyromexGlowingShadow({
  children,
  className,
  intensity = 'medium',
}: AyromexGlowingShadowProps) {
  const reduce = useReducedMotion() ?? false
  const cfg = INTENSITY_MAP[intensity]

  return (
    <div className={`relative ${className ?? ''}`}>
      {/* Orange primary glow — sits behind children, clipped to
          the visual footprint of the wrapper so it never bleeds
          into adjacent layout. inset-[-N%] gives a soft halo
          past the child edges without using viewport units. */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-[inherit] pointer-events-none"
        style={{
          inset: `-${cfg.spread}%`,
          background: `radial-gradient(closest-side, rgba(255,106,0,${cfg.orange}), rgba(255,106,0,${cfg.orange * 0.4}) 45%, transparent 75%)`,
          filter: `blur(${cfg.blur}px)`,
          zIndex: 0,
        }}
        initial={{ opacity: 0.85 }}
        animate={reduce ? undefined : { opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Electric Blue secondary — offset for subtle dimensional
          depth. Lower opacity than the orange so it reads as a
          cool counterpoint, never as a separate light source. */}
      <motion.div
        aria-hidden="true"
        className="absolute rounded-[inherit] pointer-events-none"
        style={{
          inset: `-${cfg.spread * 0.7}%`,
          background: `radial-gradient(closest-side at 30% 70%, rgba(0,166,244,${cfg.blue}), transparent 70%)`,
          filter: `blur(${cfg.blur * 0.9}px)`,
          zIndex: 0,
        }}
        initial={{ opacity: 0.6 }}
        animate={reduce ? undefined : { opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />

      {/* Children rendered above the glow. position: relative so
          they create their own stacking context above the absolute
          glow layers. */}
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  )
}
