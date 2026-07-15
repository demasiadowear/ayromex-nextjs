'use client'

import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import SectionTransition from '@/components/sections/SectionTransition'
import { whatsappLink } from '@/lib/contact'
import ShieldMotif from './ShieldMotif'

/**
 * Servizi Web & E-commerce — seconda anima commerciale (web agency).
 * Il cuore è il meccanismo di vendita "Prima lo vedi, poi decidi":
 * demo gratuita, paghi solo se ti piace. Grande, non a fondo card.
 */
const PORTFOLIO = [
  { slug: 'rdinternational', name: 'RD International Group', url: 'https://www.rdinternationalgroup.com', image: '/portfolio/rdinternational.webp' },
  { slug: 'sunhouse', name: 'Sun House Bari', url: 'https://sunhousebari.it', image: '/portfolio/sunhouse.webp' },
  { slug: 'marilenagisonda', name: 'Marilena Gisonda', url: 'https://marilenagisonda.it', image: '/portfolio/marilenagisonda.webp' },
] as const

const PILLARS = ['google', 'identity', 'speed', 'care'] as const

export default function HomeServiziWeb() {
  const t = useTranslations('serviziWeb')
  const steps = ['s1', 's2', 's3'] as const

  return (
    <section id="siti-web" className="surface-cream relative scroll-mt-20 overflow-hidden border-b border-ay-border" aria-labelledby="web-heading">
      <ShieldMotif className="shield-arc w-[300px] md:w-[460px] -top-20 -right-12 !opacity-[0.05]" />

      <SectionTransition
        id="siti-web-inner"
        variant="fade-up"
        stagger={0.09}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
      >
        <span className="inline-flex items-center gap-2 font-body text-[13px] font-semibold text-ay-accent mb-8">
          <span className="w-6 h-px bg-ay-accent" aria-hidden="true" />
          {t('eyebrow')}
        </span>

        {/* CUORE: la promessa, grande */}
        <div id="web-heading" className="max-w-4xl">
          <h2 className="font-display font-extrabold text-ay-text tracking-[-0.025em] leading-[0.98] [font-size:clamp(40px,11vw,60px)] md:[font-size:clamp(60px,7vw,104px)]">
            {t('promiseLead')}{' '}
            <span className="text-ay-accent">{t('promiseAccent')}</span>
          </h2>
          <p className="mt-6 md:mt-8 font-body text-[18px] md:text-[22px] leading-relaxed text-ay-text max-w-[680px]">
            {t('promiseBody')}
          </p>
        </div>

        {/* 3 step visivi */}
        <ol className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 list-none">
          {steps.map((s, i) => (
            <li key={s} className="card-lift relative rounded-2xl border border-ay-border bg-ay-surface p-7 md:p-8">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-ay-accent text-white font-display font-extrabold text-[18px]" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display font-extrabold text-ay-text text-[20px] md:text-[22px] leading-snug">
                {t(`steps.${s}title`)}
              </h3>
              <p className="mt-3 font-body text-[15px] leading-relaxed text-ay-text-muted">
                {t(`steps.${s}desc`)}
              </p>
            </li>
          ))}
        </ol>

        {/* Pilastri — cosa ci mettiamo dentro */}
        <div className="mt-16 md:mt-20">
          <h3 className="font-display font-extrabold text-ay-text text-[22px] md:text-[28px] mb-8">
            {t('pillarsTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {PILLARS.map((p) => (
              <div key={p} className="flex gap-4 rounded-2xl border border-ay-border bg-ay-surface p-6">
                <span className="mt-1 w-2.5 h-2.5 rounded-full bg-ay-accent shrink-0" aria-hidden="true" />
                <div>
                  <h4 className="font-display font-extrabold text-ay-text text-[17px]">{t(`pillars.${p}.title`)}</h4>
                  <p className="mt-1.5 font-body text-[14.5px] leading-relaxed text-ay-text-muted">{t(`pillars.${p}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio reale */}
        <div className="mt-16 md:mt-20">
          <h3 className="font-display font-extrabold text-ay-text text-[22px] md:text-[28px] mb-8">
            {t('portfolioTitle')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PORTFOLIO.map((proj) => (
              <a
                key={proj.slug}
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift group block overflow-hidden rounded-2xl border border-ay-border bg-ay-surface"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={proj.image} alt={proj.name} width={400} height={300} loading="lazy" className="w-full h-40 object-cover" />
                <div className="p-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display font-extrabold text-ay-text text-[16px]">{proj.name}</p>
                    <p className="mt-1 font-body text-[13px] text-ay-text-muted">{t(`portfolio.${proj.slug}`)}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ay-accent shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold text-[16px] px-8 py-6 shadow-[0_10px_30px_-8px_rgba(255,106,0,0.6)] transition-all hover:scale-[1.03]"
          >
            <a href={whatsappLink('web-quote')} target="_blank" rel="noopener noreferrer">
              {t('cta')}
            </a>
          </Button>
        </div>
      </SectionTransition>
    </section>
  )
}
