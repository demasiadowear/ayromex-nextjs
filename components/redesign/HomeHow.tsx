'use client'

import { useTranslations } from 'next-intl'
import SectionTransition from '@/components/sections/SectionTransition'
import ShieldMotif from './ShieldMotif'

/**
 * Come funziona — 3 passi. Sezione SCURA calda (surface-ink), secondo
 * beat di profondità dopo la trust. Numeri grandi, zero tecnicismi.
 */
export default function HomeHow() {
  const t = useTranslations('homeHow')
  const steps = ['s1', 's2', 's3'] as const

  return (
    <section id="come-funziona" className="surface-ink relative overflow-hidden" data-surface="ink">
      <ShieldMotif className="shield-arc w-[340px] md:w-[520px] -bottom-24 -right-16 !opacity-[0.05]" />

      <SectionTransition
        id="come-funziona-inner"
        variant="fade-up"
        stagger={0.1}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
        ariaLabelledBy="how-heading"
      >
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 font-body text-[13px] font-semibold text-ay-accent mb-4">
            <span className="w-6 h-px bg-ay-accent" aria-hidden="true" />
            {t('eyebrow')}
          </span>
          <h2
            id="how-heading"
            className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.1] [font-size:clamp(30px,6.5vw,38px)] md:[font-size:clamp(36px,3.2vw,52px)]"
          >
            {t('title')}
          </h2>
        </div>

        <ol className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 list-none">
          {steps.map((s, i) => (
            <li key={s} className="card-lift relative rounded-2xl border border-ay-border bg-ay-surface p-7 md:p-8">
              <span className="font-display font-extrabold text-ay-accent [font-size:clamp(40px,8vw,52px)] leading-none block" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-display font-extrabold text-ay-text text-[20px] md:text-[22px] leading-snug">
                {t(`${s}title`)}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-ay-text-muted">
                {t(`${s}desc`)}
              </p>
            </li>
          ))}
        </ol>
      </SectionTransition>
    </section>
  )
}
