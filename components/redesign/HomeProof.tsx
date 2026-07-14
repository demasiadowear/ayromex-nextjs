'use client'

import { useTranslations } from 'next-intl'
import { Card, CardContent } from '@/components/ui/card'
import SectionTransition from '@/components/sections/SectionTransition'
import CountUp from './CountUp'

/**
 * Prova sociale — verticali anonimi + metriche aggregate concrete.
 * MAI nomi di clienti reali (regola confidenzialità §10). I numeri
 * contano all'ingresso in viewport, su una banda scura calda.
 */
export default function HomeProof() {
  const t = useTranslations('homeProof')
  const verticals = [
    { key: 'v1', img: '/images/placeholders/salone.svg' },
    { key: 'v2', img: '/images/placeholders/ristorante.svg' },
    { key: 'v3', img: '/images/placeholders/negozio.svg' },
  ] as const
  const stats = ['stat1', 'stat2', 'stat3', 'stat4'] as const

  return (
    <section id="clienti" className="surface-cream border-t border-ay-border" aria-labelledby="proof-heading">
      <SectionTransition
        id="clienti-inner"
        variant="fade-up"
        stagger={0.1}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
      >
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 font-body text-[13px] font-semibold text-ay-accent mb-4">
            <span className="w-6 h-px bg-ay-accent" aria-hidden="true" />
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
            <Card key={key} className="card-lift overflow-hidden border-ay-border bg-ay-surface shadow-none">
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

        {/* Banda numeri — scura calda, i valori contano all'ingresso */}
        <dl className="surface-ink mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-9 md:gap-10 rounded-3xl p-8 md:p-12 overflow-hidden">
          {stats.map((s) => (
            <div key={s} className="min-w-0 text-center lg:text-left">
              <dt className="sr-only">{t(`${s}label`)}</dt>
              <dd>
                <CountUp
                  value={t(`${s}value`)}
                  className="block font-display font-extrabold text-ay-accent tabular-nums whitespace-nowrap [font-size:clamp(30px,8vw,38px)] md:[font-size:clamp(34px,2.8vw,46px)] leading-none"
                />
                <span className="block mt-3 font-body text-[13.5px] md:text-[14px] leading-snug text-ay-text-muted">
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
