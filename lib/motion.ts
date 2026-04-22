import type { Transition, Variants } from 'framer-motion'

// Shared easing for the site. Expo-out: snappy out, soft end.
export const EASE_OUT: Transition['ease'] = [0.22, 1, 0.36, 1]

// Default viewport configuration for whileInView reveals.
// `once: true` keeps animations from replaying on scroll-back.
// `margin: '-80px'` triggers slightly before a section is fully in view.
export const VIEWPORT_ONCE = { once: true, margin: '-80px' } as const

// Single element fade + 32px upward slide. Use for headlines and
// standalone paragraphs that should reveal once.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

// Pure opacity fade. Use for large blocks (cards, imagery) where a
// translate would feel heavy.
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

// Parent container that staggers its children. Pair with `sectionItem`
// on each child. Stagger 100ms matches the 80-120ms window called out
// in CLAUDE.md section 4.4.
export const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

// Child variant consumed by `sectionReveal`. 28px slide + fade with
// the shared easing and a slightly shorter duration to keep a staggered
// grid from feeling sluggish.
export const sectionItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
}
