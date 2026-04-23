'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  words: string[]
  className?: string
  showUnderline?: boolean
  underlineColor?: string
  rotationSpeed?: number
}

export function RotatingText({
  words,
  className = '',
  showUnderline = false,
  underlineColor = '#FF6B00',
  rotationSpeed = 3000,
}: Props) {
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, rotationSpeed)
    return () => clearInterval(interval)
  }, [words.length, rotationSpeed])

  if (!mounted) {
    return <span className={`text-[#FF6B00] ${className}`}>{words[0]}</span>
  }

  return (
    <span className={`relative inline-block align-baseline ${className}`} style={{ minWidth: '180px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="absolute left-0 top-0 text-[#FF6B00] whitespace-nowrap"
        >
          {words[index]}
          {showUnderline && (
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{
                display: 'block',
                height: '1.5px',
                background: underlineColor,
                transformOrigin: '0 50%',
                marginTop: '2px',
              }}
            />
          )}
        </motion.span>
      </AnimatePresence>
      <span className="invisible">{words.reduce((a, b) => (a.length > b.length ? a : b), '')}</span>
    </span>
  )
}
