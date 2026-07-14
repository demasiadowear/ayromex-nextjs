'use client'

import { useTranslations } from 'next-intl'
import SectionTransition from '@/components/sections/SectionTransition'

/** Come funziona — 3 passi, numerazione discreta, zero tecnicismi. */
export default function HomeHow() {
  const t = useTranslations('homeHow')
  const steps = ['s1', 's2', 's3'] as const

  return (
    <SectionTransition
      id="come-funziona"
      variant="fade-up"
      stagger={0.1}
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
      ariaLabelledBy="how-heading"
    >
      <div className="max-w-2xl">
        <span className="font-body text-[13px] font-semibold text-ay-accent block mb-3">
          {t('eyebrow')}
        </span>
        <h2
          id="how-heading"
          className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.12] [font-size:clamp(28px,6vw,34px)] md:[font-size:clamp(34px,3vw,46px)]"
        >
          {t('title')}
        </h2>
      </div>

      <ol className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 list-none">
        {steps.map((s, i) => (
          <li key={s} className="relative rounded-2xl border border-ay-border bg-ay-surface p-6 md:p-8">
            <span className="font-display font-extrabold text-ay-accent text-[15px]" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display font-extrabold text-ay-text text-[19px] md:text-[21px] leading-snug">
              {t(`${s}title`)}
            </h3>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-ay-text-muted">
              {t(`${s}desc`)}
            </p>
          </li>
        ))}
      </ol>
    </SectionTransition>
  )
}
