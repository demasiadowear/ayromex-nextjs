'use client'

import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  text: string | null
  /** Which side of the guide anchor the bubble attaches to. Tail flips accordingly. */
  side?: 'left' | 'top'
}

// Narrative dialog shown next to the AyroGuide follower. Receives
// a nullable text so the parent can "clear" the bubble by passing
// null and let AnimatePresence exit-animate it out.
export default function AyroBubble({ text, side = 'left' }: Props) {
  const positionClass =
    side === 'top'
      ? 'bottom-full left-1/2 -translate-x-1/2 mb-3'
      : 'right-full top-1/2 -translate-y-1/2 mr-3'

  return (
    <div className={`pointer-events-none absolute ${positionClass}`}>
      <AnimatePresence mode="wait">
        {text && (
          <motion.div
            key={text}
            initial={{ opacity: 0, scale: 0.95, y: side === 'top' ? 4 : 0, x: side === 'left' ? 4 : 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: side === 'top' ? 4 : 0, x: side === 'left' ? 4 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[280px] w-max rounded-xl border border-ay-accent/30 bg-ay-surface/90 backdrop-blur-md px-4 py-3 font-body text-[14px] leading-snug text-ay-text shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
          >
            {text}
            {/* Tail triangle */}
            {side === 'left' ? (
              <span
                aria-hidden="true"
                className="absolute top-1/2 -translate-y-1/2 left-full -ml-[1px]"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderLeft: '8px solid rgba(255, 106, 0, 0.3)',
                }}
              />
            ) : (
              <span
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 top-full -mt-[1px]"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: '8px solid rgba(255, 106, 0, 0.3)',
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
