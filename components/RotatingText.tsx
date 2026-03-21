'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  words: string[]
  className?: string
}

export function RotatingText({ words, className = '' }: Props) {
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [words.length])

  if (!mounted) {
    return <span className={`text-[#FF4D00] ${className}`}>{words[0]}</span>
  }

  return (
    <span className={`relative inline-block ${className}`} style={{ minWidth: '180px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="absolute left-0 top-0 text-[#FF4D00] whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible spacer keeping height */}
      <span className="invisible">{words.reduce((a, b) => (a.length > b.length ? a : b), '')}</span>
    </span>
  )
}
