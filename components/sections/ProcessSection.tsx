'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import SectionTransition from './SectionTransition'
import type { AyroGuideHover } from '@/components/hero/AyroGuide'

const STEPS = [1, 2, 3, 4] as const

function emitHover(value: AyroGuideHover) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<AyroGuideHover>('ayro-guide:hover', { detail: value }),
  )
}

interface StepProps {
  index: number
  id: 'process-01' | 'process-02' | 'process-03' | 'process-04'
}

function Step({ index, id }: StepProps) {
  const t = useTranslations('processSection')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.dataset.visible = 'true'
            emitHover(id)
          } else {
            delete el.dataset.visible
            // Clear the guide hover so the next section's phase
            // (verticals / CTA) can take over cleanly. If a sibling
            // step enters right after, its own emitHover(id) will
            // win in the same batch.
            emitHover(null)
          }
        })
      },
      { threshold: 0.55 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      emitHover(null)
    }
  }, [id])

  return (
    <div ref={ref} data-step={id} className="relative flex-1 flex flex-col">
      {/* Small ghosted step number — keeps the visual cadence
          without stacking four giant glyphs behind the titles
          (which used to overflow horizontally on tight columns). */}
      <span
        aria-hidden="true"
        className="absolute -top-6 left-0 font-display font-extrabold text-ay-accent/10 leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(60px, 5vw, 88px)' }}
      >
        {t(`step${index}number`)}
      </span>

      {/* Step accent dot on the connector line */}
      <span
        aria-hidden="true"
        className="step-dot absolute top-0 left-0 w-3 h-3 rounded-full border-2 border-ay-border bg-ay-bg transition-colors duration-500"
      />

      <div className="relative z-10 pl-6 pt-12 flex flex-col gap-3">
        <h3
          className="font-display font-extrabold text-ay-text text-[22px] lg:text-[26px] leading-tight"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.85)' }}
        >
          {t(`step${index}title`)}
        </h3>
        <span
          className="font-mono text-[13px] text-ay-accent uppercase tracking-wider"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
        >
          {t(`step${index}duration`)}
        </span>
        <p
          className="font-body text-[14px] leading-relaxed max-w-[260px]"
          style={{
            color: '#E5E5E5',
            textShadow: '0 1px 4px rgba(0,0,0,0.75)',
          }}
        >
          {t(`step${index}desc`)}
        </p>
      </div>

      <style jsx>{`
        div[data-visible='true'] .step-dot {
          border-color: #ff6a00;
          background-color: #ff6a00;
          box-shadow: 0 0 16px rgba(255, 106, 0, 0.6);
        }
      `}</style>
    </div>
  )
}

export default function ProcessSection() {
  const t = useTranslations('processSection')

  return (
    <SectionTransition
      id="processo"
      variant="number-reveal"
      className="relative min-h-screen px-6 py-32 overflow-x-hidden overflow-y-visible"
      ariaLabelledBy="process-heading"
    >
      {/* Giant background number */}
      <span
        data-section-number
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-ay-accent pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(240px, 40vw, 520px)', opacity: 0 }}
      >
        {t('number')}
      </span>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h2
          id="process-heading"
          className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(64px, 9vw, 140px)' }}
        >
          {t('headlineLine1')}
          <br />
          <span className="text-ay-accent">{t('headlineLine2')}</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-8 max-w-[640px] font-body text-[18px] text-ay-text-muted leading-relaxed">
          {t('subtitle')}
        </p>

        {/* Steps row */}
        <div className="mt-24 w-full relative">
          {/* Horizontal connector (desktop) / vertical (mobile) */}
          <div
            aria-hidden="true"
            className="absolute top-1.5 left-3 right-3 h-px bg-ay-border hidden lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-1.5 w-px bg-ay-border block lg:hidden"
          />

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            {STEPS.map((n) => (
              <Step
                key={n}
                index={n}
                id={`process-0${n}` as StepProps['id']}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionTransition>
  )
}
