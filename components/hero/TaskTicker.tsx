'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const LOG_ENTRIES = [
  'SCOUT identifying prospect — hospitality Puglia',
  'AYRO dispatching lead to CLOSER',
  'CLOSER scheduling discovery call — 48h',
  'COMPLIANCE verifying ADM license 16006',
  'ANALYST generating weekly performance report',
  'AYRO updating MEMORY with conversation context',
  'BUILDER estimating custom automation — 6 weeks',
  'ROUTER balancing inbound request queue',
  'MEDIA drafting WhatsApp template — IT locale',
  'SCOUT qualifying 12 new prospects — retail',
  'AYRO synthesizing client requirements',
  'CLOSER confirming call with founder — CEO track',
  'COMPLIANCE flagging risk pattern — preventive alert',
  'ANALYST clustering conversation topics',
  'BUILDER integrating WhatsApp + Google Calendar',
  'ROUTER routing high-priority request to AYRO',
  'MEMORY indexing 847 conversation turns',
  'MEDIA publishing editorial content — IT',
  'SCOUT discovered prospect — concessionario ADM',
  'AYRO approving automation blueprint',
] as const

const MAX_VISIBLE = 5
const FILL_INTERVAL_MS = 800
const AUTO_ROTATE_MIN_MS = 3000
const AUTO_ROTATE_RANGE_MS = 1000
const REDUCED_ROTATE_MS = 6000
const VISIBLE_DELAY_MS = 3200

interface LogEntry {
  id: number
  text: string
}

function pickRandomEntry(): string {
  return LOG_ENTRIES[Math.floor(Math.random() * LOG_ENTRIES.length)]
}

function renderEntry(text: string) {
  // The first whitespace-separated all-caps token is the agent name.
  const match = text.match(/^([A-Z]+)\s+(.*)$/)
  if (!match) {
    return <span>{text}</span>
  }
  return (
    <>
      <span className="text-ay-accent">{match[1]}</span>{' '}
      <span>{match[2]}</span>
    </>
  )
}

export default function TaskTicker() {
  const t = useTranslations('hero')
  const reduceMotion = useReducedMotion() ?? false

  const [entries, setEntries] = useState<LogEntry[]>([])
  const [visible, setVisible] = useState(false)
  const idRef = useRef(0)

  const addEntry = (text: string) => {
    setEntries((prev) => {
      const next: LogEntry = { id: idRef.current++, text }
      return [next, ...prev].slice(0, MAX_VISIBLE)
    })
  }

  // Reveal after the hero entrance settles
  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), VISIBLE_DELAY_MS)
    return () => window.clearTimeout(t)
  }, [])

  // Initial fill + ongoing rotation
  useEffect(() => {
    if (!visible) return

    let rotateTimer: number = 0
    let fillCount = 0

    const fillTick = () => {
      addEntry(pickRandomEntry())
      fillCount += 1
      if (fillCount < MAX_VISIBLE) {
        fillTimer = window.setTimeout(fillTick, FILL_INTERVAL_MS)
      } else {
        const scheduleRotation = () => {
          const delay = reduceMotion
            ? REDUCED_ROTATE_MS
            : AUTO_ROTATE_MIN_MS + Math.random() * AUTO_ROTATE_RANGE_MS
          rotateTimer = window.setTimeout(() => {
            addEntry(pickRandomEntry())
            scheduleRotation()
          }, delay)
        }
        scheduleRotation()
      }
    }

    let fillTimer: number = window.setTimeout(fillTick, 0)

    return () => {
      window.clearTimeout(fillTimer)
      window.clearTimeout(rotateTimer)
    }
  }, [visible, reduceMotion])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      className="hidden md:block absolute right-10 bottom-[120px] z-20 pointer-events-none w-[380px]"
    >
      <div className="bg-ay-surface/60 backdrop-blur-md border border-ay-border rounded-lg px-[18px] py-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-2.5">
          <span className="font-body text-[9px] font-semibold uppercase tracking-[0.15em] text-ay-accent">
            {t('systemLogTitle')}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-body text-[9px] uppercase tracking-wider text-ay-text-muted">
              {t('liveStatus')}
            </span>
          </div>
        </div>

        {/* Log entries */}
        <div className="flex flex-col gap-1.5 max-h-[160px] overflow-hidden">
          <AnimatePresence initial={false}>
            {entries.map((entry, i) => {
              const opacity = Math.max(1 - i * 0.18, 0.3)
              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity, y: 0 }}
                  exit={{ opacity: 0, y: 6, transition: { duration: 0.5 } }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[11px] leading-relaxed text-ay-text-muted"
                >
                  <span className="text-ay-accent">›</span> {renderEntry(entry.text)}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
