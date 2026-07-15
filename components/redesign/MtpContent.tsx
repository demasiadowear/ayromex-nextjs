'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import SectionTransition from '@/components/sections/SectionTransition'
import { whatsappLink } from '@/lib/contact'
import { MtpBenefitsGrid, MtpComparisonTable } from './MtpShared'

/**
 * /meta-tech-provider — approfondimento certificazione. Riusa i
 * blocchi condivisi (benefici + tabella) ed espande con "cos'è",
 * FAQ (accordion) e CTA WhatsApp.
 */
const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5'] as const

export default function MtpContent() {
  const t = useTranslations('mtp')

  return (
    <>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-14 md:pt-20 pb-10 md:pb-14" aria-labelledby="mtp-heading">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div className="flex-1 min-w-0">
            <span className="font-body text-[13px] font-semibold text-ay-accent block mb-3">
              {t('eyebrow')}
            </span>
            <h1
              id="mtp-heading"
              className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.08] [font-size:clamp(32px,7.5vw,40px)] md:[font-size:clamp(44px,4vw,62px)] max-w-[820px]"
            >
              {t('h1')}
            </h1>
            <p className="mt-6 font-body text-[16px] md:text-[18px] leading-relaxed text-ay-text-muted max-w-[680px]">
              {t('intro')}
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logos/primary/tech-light.svg"
            alt="Meta Tech Provider — Business API Official"
            width={1036}
            height={295}
            fetchPriority="high"
            className="h-[104px] md:h-[136px] w-auto shrink-0 mx-auto lg:mx-0"
          />
        </div>
      </section>

      {/* Cos'è */}
      <SectionTransition
        id="mtp-what-is"
        variant="fade-up"
        className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12"
        ariaLabelledBy="mtp-what-is-heading"
      >
        <div className="rounded-2xl border border-ay-border bg-ay-surface p-6 md:p-10">
          <h2
            id="mtp-what-is-heading"
            className="font-display font-extrabold text-ay-text [font-size:clamp(22px,5.5vw,26px)] md:[font-size:clamp(26px,2.4vw,34px)] mb-5"
          >
            {t('whatIsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <p className="font-body text-[15.5px] leading-relaxed text-ay-text-muted">{t('whatIsP1')}</p>
            <p className="font-body text-[15.5px] leading-relaxed text-ay-text-muted">{t('whatIsP2')}</p>
          </div>
        </div>
      </SectionTransition>

      {/* Benefici */}
      <SectionTransition
        id="mtp-benefits"
        variant="fade-up"
        className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12"
        ariaLabelledBy="mtp-benefits-heading"
      >
        <h2
          id="mtp-benefits-heading"
          className="font-display font-extrabold text-ay-text [font-size:clamp(22px,5.5vw,26px)] md:[font-size:clamp(26px,2.4vw,34px)] mb-8"
        >
          {t('benefitsTitle')}
        </h2>
        <MtpBenefitsGrid />
      </SectionTransition>

      {/* Tabella comparativa */}
      <SectionTransition
        id="mtp-comparison"
        variant="fade-up"
        className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12"
        ariaLabelledBy="mtp-comparison-heading"
      >
        <h2
          id="mtp-comparison-heading"
          className="font-display font-extrabold text-ay-text [font-size:clamp(22px,5.5vw,26px)] md:[font-size:clamp(26px,2.4vw,34px)] mb-3"
        >
          {t('comparisonTitle')}
        </h2>
        <p className="font-body text-[15px] leading-relaxed text-ay-text-muted mb-8 max-w-[620px]">
          {t('comparisonSubtitle')}
        </p>
        <MtpComparisonTable />
      </SectionTransition>

      {/* FAQ */}
      <SectionTransition
        id="mtp-faq"
        variant="fade-up"
        className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12"
        ariaLabelledBy="mtp-faq-heading"
      >
        <h2
          id="mtp-faq-heading"
          className="font-display font-extrabold text-ay-text [font-size:clamp(22px,5.5vw,26px)] md:[font-size:clamp(26px,2.4vw,34px)] mb-8"
        >
          {t('faqTitle')}
        </h2>
        <Accordion type="single" collapsible className="max-w-[780px] rounded-2xl border border-ay-border bg-ay-surface px-6">
          {FAQ_KEYS.map((k) => (
            <AccordionItem key={k} value={k} className="border-ay-border">
              <AccordionTrigger className="font-body font-semibold text-[16px] text-ay-text text-left hover:no-underline hover:text-ay-accent">
                {t(`faq.${k}.q`)}
              </AccordionTrigger>
              <AccordionContent className="font-body text-[15px] leading-relaxed text-ay-text-muted">
                {t(`faq.${k}.a`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionTransition>

      {/* CTA */}
      <SectionTransition
        id="mtp-cta"
        variant="fade-up"
        className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20"
        ariaLabelledBy="mtp-cta-heading"
      >
        <div className="rounded-[2rem] bg-ay-accent-tint border border-ay-accent/20 px-6 py-12 md:px-16 md:py-14 text-center">
          <h2
            id="mtp-cta-heading"
            className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.1] [font-size:clamp(26px,6.5vw,32px)] md:[font-size:clamp(32px,3vw,46px)]"
          >
            {t('ctaTitle')}
          </h2>
          <p className="mt-4 font-body text-[16px] leading-relaxed text-ay-text-muted max-w-[520px] mx-auto">
            {t('ctaBody')}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold text-[16px] px-9 py-6 transition-transform duration-200 hover:scale-[1.02]"
          >
            <a href={whatsappLink('whatsapp-api')} target="_blank" rel="noopener noreferrer">
              {t('ctaButton')}
            </a>
          </Button>
        </div>
      </SectionTransition>
    </>
  )
}
