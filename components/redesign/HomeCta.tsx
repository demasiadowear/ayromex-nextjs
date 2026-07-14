'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import SectionTransition from '@/components/sections/SectionTransition'
import { whatsappLink } from '@/lib/contact'

/** CTA finale — un solo invito, diretto. */
export default function HomeCta() {
  const t = useTranslations('homeCta')

  return (
    <SectionTransition
      id="contatti-cta"
      variant="fade-up"
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
      ariaLabelledBy="cta-heading"
    >
      <div className="rounded-[2rem] bg-ay-accent-tint border border-ay-accent/20 px-6 py-12 md:px-16 md:py-16 text-center">
        <h2
          id="cta-heading"
          className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.1] [font-size:clamp(28px,7vw,36px)] md:[font-size:clamp(38px,3.4vw,52px)]"
        >
          {t('title')}
        </h2>
        <p className="mt-5 font-body text-[16px] md:text-[18px] leading-relaxed text-ay-text-muted max-w-[540px] mx-auto">
          {t('body')}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold text-[16px] px-9 py-6 transition-transform duration-200 hover:scale-[1.02]"
        >
          <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer">
            {t('button')}
          </a>
        </Button>
      </div>
    </SectionTransition>
  )
}
