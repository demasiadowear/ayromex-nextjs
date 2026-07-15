'use client'

import { useTranslations } from 'next-intl'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import SectionTransition from '@/components/sections/SectionTransition'
import WhatsAppChatMock from './WhatsAppChatMock'

/**
 * Prodotti AI — l'anima primaria. AyroDesk24 in evidenza con la
 * conversazione WhatsApp simulata accanto: si capisce in due secondi
 * cosa fa, senza parlare di "soluzioni AI". AyroHub sotto, per il
 * verticale gaming ADM.
 */
export default function HomeProducts() {
  const t = useTranslations('homeProducts')
  const bullets = ['b1', 'b2', 'b3'] as const

  return (
    <section
      id="prodotti-home"
      className="scroll-mt-20 bg-ay-bg border-b border-ay-border"
      aria-labelledby="products-heading"
    >
      <SectionTransition
        id="prodotti-home-inner"
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
            id="products-heading"
            className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.08] [font-size:clamp(30px,6.5vw,38px)] md:[font-size:clamp(38px,3.4vw,54px)]"
          >
            {t('title')}
          </h2>
        </div>

        {/* AyroDesk24 — in evidenza, con la chat che lo spiega */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="min-w-0">
            <p className="font-body text-[13px] font-semibold text-ay-accent mb-2">
              {t('desk.for')}
            </p>
            <h3 className="font-display font-extrabold text-ay-text text-[28px] md:text-[36px] leading-tight">
              {t('desk.name')}
            </h3>
            <p className="mt-4 font-body text-[16px] md:text-[17.5px] leading-relaxed text-ay-text-muted">
              {t('desk.desc')}
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-body text-[15.5px] text-ay-text"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ay-accent/12">
                    <Check className="h-3 w-3 text-ay-accent" aria-hidden="true" />
                  </span>
                  {t(`desk.${b}`)}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
              <Button
                asChild
                size="lg"
                className="w-fit rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold px-7 py-6 shadow-[0_10px_30px_-8px_rgba(255,106,0,0.6)] transition-all hover:scale-[1.03]"
              >
                <Link href="/prodotti#ayrodesk24">
                  {t('desk.cta')}
                  <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Link>
              </Button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/brand/logos/primary/tech-light.svg"
                alt="Meta Tech Provider — Business API Official"
                width={1036}
                height={295}
                loading="lazy"
                className="h-11 w-auto"
              />
            </div>
          </div>

          <div className="min-w-0">
            <WhatsAppChatMock />
          </div>
        </div>

        {/* AyroHub — verticale gaming ADM */}
        <div className="card-lift mt-12 md:mt-16 rounded-3xl border border-ay-border bg-ay-surface p-7 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="min-w-0">
            <p className="font-body text-[13px] font-semibold text-ay-accent mb-2">
              {t('hub.for')}
            </p>
            <h3 className="font-display font-extrabold text-ay-text text-[24px] md:text-[30px] leading-tight">
              {t('hub.name')}
            </h3>
            <p className="mt-4 font-body text-[15.5px] leading-relaxed text-ay-text-muted">
              {t('hub.desc')}
            </p>
          </div>

          <div className="min-w-0 flex flex-col justify-center">
            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-body text-[15px] text-ay-text"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ay-accent/12">
                    <Check className="h-3 w-3 text-ay-accent" aria-hidden="true" />
                  </span>
                  {t(`hub.${b}`)}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="mt-7 w-fit rounded-full border-ay-accent/50 text-ay-accent font-semibold px-6 py-5 hover:bg-ay-accent hover:text-white transition-all"
            >
              <Link href="/prodotti#ayrohub">
                {t('hub.cta')}
                <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionTransition>
    </section>
  )
}
