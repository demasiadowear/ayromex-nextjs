'use client'

import { useTranslations } from 'next-intl'
import {
  FiInbox,
  FiClock,
  FiCpu,
  FiGrid,
  FiTrendingUp,
  FiActivity,
} from 'react-icons/fi'
import type { IconType } from 'react-icons'
import SectionTransition from './SectionTransition'

interface OutcomeCard {
  key:
    | 'leadLoss'
    | 'response'
    | 'manual'
    | 'control'
    | 'scale'
    | 'visibility'
  Icon: IconType
}

// Six operational outcomes. The order is the visual reading order
// across the 2 / 3-column grid. Icons are intentionally restrained
// (line-only) so they read as system signals, not decorations.
const OUTCOMES: OutcomeCard[] = [
  { key: 'leadLoss', Icon: FiInbox },
  { key: 'response', Icon: FiClock },
  { key: 'manual', Icon: FiCpu },
  { key: 'control', Icon: FiGrid },
  { key: 'scale', Icon: FiTrendingUp },
  { key: 'visibility', Icon: FiActivity },
]

export default function OutcomesSection() {
  const t = useTranslations('outcomesSection')
  const tCards = useTranslations('outcomesSection.cards')

  return (
    <SectionTransition
      id="risultati"
      variant="fade-up"
      className="relative min-h-[80vh] px-6 py-32 overflow-hidden flex items-center"
      ariaLabelledBy="outcomes-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ay-accent mb-6"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
        >
          {t('eyebrow')}
        </span>

        {/* Headline */}
        <h2
          id="outcomes-heading"
          className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.02em] max-w-[18ch]"
          style={{
            fontSize: 'clamp(40px, 6vw, 84px)',
            textShadow: '0 2px 12px rgba(0,0,0,0.6)',
          }}
        >
          {t('headline')}
        </h2>

        {/* Subtitle */}
        <p
          className="mt-8 max-w-[720px] font-body text-[18px] leading-relaxed"
          style={{
            color: '#E5E5E5',
            textShadow: '0 1px 4px rgba(0,0,0,0.7)',
          }}
        >
          {t('subtitle')}
        </p>

        {/* Cards grid */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {OUTCOMES.map(({ key, Icon }) => (
            <div
              key={key}
              className="group relative rounded-2xl border border-ay-border bg-ay-surface/80 backdrop-blur-lg p-7 flex flex-col gap-4 text-left transition-all duration-300 hover:border-ay-accent/60 hover:bg-ay-surface/95"
            >
              {/* Subtle tech accent line — Electric Blue */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-ay-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Icon + status pip row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl border border-ay-accent/30 bg-ay-accent/5">
                  <Icon className="w-5 h-5 text-ay-accent" />
                </div>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-ay-lime"
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-display font-extrabold text-ay-text text-[19px] leading-tight">
                {tCards(`${key}.title`)}
              </h3>
              <p
                className="font-body text-[14px] leading-relaxed"
                style={{ color: '#D8D8D8' }}
              >
                {tCards(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  )
}
