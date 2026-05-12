'use client'

import { useTranslations } from 'next-intl'
import { FiBriefcase, FiHome, FiMonitor, FiShoppingBag } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import SectionTransition from './SectionTransition'

interface Card {
  key: 'adm' | 'professional' | 'hospitality' | 'retail'
  Icon: IconType
}

const CARDS: Card[] = [
  { key: 'adm', Icon: FiMonitor },
  { key: 'professional', Icon: FiBriefcase },
  { key: 'hospitality', Icon: FiHome },
  { key: 'retail', Icon: FiShoppingBag },
]

const STATS = [
  { valueKey: 'verticalsValue', labelKey: 'verticalsLabel' },
  { valueKey: 'hoursValue', labelKey: 'hoursLabel' },
  { valueKey: 'roiValue', labelKey: 'roiLabel' },
] as const

export default function VerticalsSection() {
  const t = useTranslations('verticalsSection')
  const tCards = useTranslations('verticalsSection.cards')
  const tStats = useTranslations('verticalsSection.stats')

  return (
    <SectionTransition
      id="verticali"
      variant="fade-up"
      className="relative min-h-[80vh] px-6 py-32 overflow-hidden flex items-center"
      ariaLabelledBy="verticals-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span
          className="font-body text-[12px] font-semibold uppercase tracking-[0.2em] text-ay-accent mb-6"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
        >
          {t('eyebrow')}
        </span>

        {/* Headline */}
        <h2
          id="verticals-heading"
          className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.02em]"
          style={{
            fontSize: 'clamp(48px, 7vw, 110px)',
            textShadow: '0 2px 12px rgba(0,0,0,0.6)',
          }}
        >
          {t('headline')}
        </h2>

        {/* Subtitle */}
        <p
          className="mt-8 max-w-[640px] font-body text-[18px] leading-relaxed text-ay-text-bright"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
        >
          {t('subtitle')}
        </p>

        {/* Cards grid */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map(({ key, Icon }) => (
            <div
              key={key}
              className="group relative z-10 rounded-2xl border border-ay-border bg-ay-surface/80 backdrop-blur-lg p-8 flex flex-col gap-4 text-left transition-all duration-200 hover:border-ay-accent hover:scale-[1.02]"
            >
              <Icon className="w-10 h-10 text-ay-accent" />
              <h3
                className="font-display font-extrabold uppercase text-ay-text leading-tight"
                style={{
                  fontSize: 'clamp(14px, 1.2vw, 18px)',
                  letterSpacing: 'normal',
                  wordBreak: 'break-word',
                  overflowWrap: 'anywhere',
                }}
              >
                {tCards(`${key}.title`)}
              </h3>
              <p className="font-body text-[14px] leading-relaxed text-ay-text-bright">
                {tCards(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-20 w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 border-y border-ay-border/50 py-10">
          {STATS.map(({ valueKey, labelKey }) => (
            <div key={valueKey} className="flex flex-col items-center gap-2">
              <span
                className="font-display font-extrabold text-ay-accent leading-none"
                style={{ fontSize: 'clamp(40px, 5vw, 56px)' }}
              >
                {tStats(valueKey)}
              </span>
              <span
                className="font-body text-[13px] uppercase tracking-[0.15em] text-ay-text-soft"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
              >
                {tStats(labelKey)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  )
}
