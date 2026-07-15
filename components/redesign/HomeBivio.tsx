'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import SectionTransition from '@/components/sections/SectionTransition'
import ShieldMotif from './ShieldMotif'

/**
 * Bivio sotto l'hero — le due anime commerciali con lo STESSO peso
 * visivo: automazione AI (prodotti) e siti web. Stessa card, stessa
 * dimensione, stesso trattamento; cambia solo il glifo dentro lo
 * scudo. Ogni card porta alla sua sezione.
 */
const BRANCHES = [
  { key: 'ai' as const, glyph: 'chat' as const, href: '#prodotti-home' },
  { key: 'web' as const, glyph: 'window' as const, href: '#siti-web' },
]

export default function HomeBivio() {
  const t = useTranslations('homeBivio')

  return (
    <SectionTransition
      id="bivio"
      variant="fade-up"
      stagger={0.1}
      className="max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24"
      ariaLabelledBy="bivio-heading"
    >
      <h2 id="bivio-heading" className="sr-only">
        {t('eyebrow')}
      </h2>
      <span className="inline-flex items-center gap-2 font-body text-[13px] font-semibold text-ay-accent mb-6">
        <span className="w-6 h-px bg-ay-accent" aria-hidden="true" />
        {t('eyebrow')}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {BRANCHES.map(({ key, glyph, href }) => (
          <a
            key={key}
            href={href}
            className="card-lift group relative overflow-hidden rounded-3xl border border-ay-border bg-ay-surface p-7 md:p-10 flex flex-col"
          >
            {/* Filigrana scudo nell'angolo — motivo ricorrente */}
            <ShieldMotif
              glyph={glyph}
              className="pointer-events-none absolute -top-8 -right-6 w-[150px] text-ay-accent opacity-[0.06]"
            />

            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-ay-accent/10 shrink-0">
              <ShieldMotif glyph={glyph} className="w-8 h-8 text-ay-accent" />
            </div>

            <h3 className="mt-6 font-display font-extrabold text-ay-text leading-tight [font-size:clamp(24px,5.5vw,28px)] md:[font-size:clamp(28px,2.4vw,36px)]">
              {t(`${key}.title`)}
            </h3>
            <p className="mt-4 font-body text-[15.5px] md:text-[16.5px] leading-relaxed text-ay-text-muted flex-1">
              {t(`${key}.desc`)}
            </p>

            <span className="mt-7 inline-flex items-center gap-2 font-body font-semibold text-[15px] text-ay-accent">
              {t(`${key}.cta`)}
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </a>
        ))}
      </div>
    </SectionTransition>
  )
}
