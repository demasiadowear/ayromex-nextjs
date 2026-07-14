'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import SectionTransition from '@/components/sections/SectionTransition'

/**
 * Prova sociale — verticali anonimi + metriche aggregate.
 * MAI nomi di clienti reali (regola confidenzialità §10).
 */
export default function HomeProof() {
  const t = useTranslations('homeProof')
  const verticals = [
    { key: 'v1', img: '/images/placeholders/salone.svg' },
    { key: 'v2', img: '/images/placeholders/ristorante.svg' },
    { key: 'v3', img: '/images/placeholders/negozio.svg' },
  ] as const
  const stats = ['stat1', 'stat2', 'stat3'] as const

  return (
    <section id="clienti" className="bg-ay-cream/50 border-y border-ay-border" aria-labelledby="proof-heading">
      <SectionTransition
        id="clienti-inner"
        variant="fade-up"
        stagger={0.1}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
      >
        <div className="max-w-2xl">
          <span className="font-body text-[13px] font-semibold text-ay-accent block mb-3">
            {t('eyebrow')}
          </span>
          <h2
            id="proof-heading"
            className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.12] [font-size:clamp(28px,6vw,34px)] md:[font-size:clamp(34px,3vw,46px)]"
          >
            {t('title')}
          </h2>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {verticals.map(({ key, img }) => (
            <Card
              key={key}
              className="overflow-hidden border-ay-border bg-ay-surface shadow-none transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" width={400} height={300} loading="lazy" className="w-full h-36 object-cover" />
              <CardContent className="p-6">
                <h3 className="font-display font-extrabold text-ay-text text-[17px] leading-snug">
                  {t(`${key}title`)}
                </h3>
                <p className="mt-2.5 font-body text-[14.5px] leading-relaxed text-ay-text-muted">
                  {t(`${key}desc`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <dl className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 rounded-2xl border border-ay-border bg-ay-surface p-6 md:p-10">
          {stats.map((s) => (
            <div key={s} className="text-center md:text-left">
              <dt className="sr-only">{t(`${s}label`)}</dt>
              <dd>
                <span className="font-display font-extrabold text-ay-text [font-size:clamp(30px,6vw,36px)] md:[font-size:clamp(36px,2.6vw,44px)] leading-none">
                  {t(`${s}value`)}
                </span>
                <span className="block mt-2 font-body text-[14px] text-ay-text-muted">
                  {t(`${s}label`)}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </SectionTransition>
    </section>
  )
}
