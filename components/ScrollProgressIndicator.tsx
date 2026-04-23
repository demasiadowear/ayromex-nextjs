'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

// Thin progress bar pinned to the bottom of the viewport. Tracks
// the document's scroll progress 0 -> 1 and scales a single
// accent-coloured bar from left to right as the visitor moves
// through the page.
//
// The underlying motion value is wrapped in a spring so the
// indicator lags lenis slightly and feels damped instead of
// snappy.
export default function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 180,
    mass: 0.4,
  })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed bottom-0 left-0 right-0 h-[2px] bg-ay-accent origin-left z-[100] pointer-events-none"
      style={{ scaleX }}
    />
  )
}
