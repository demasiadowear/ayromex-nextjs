'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import SectionTransition from '@/components/sections/SectionTransition'
import { whatsappLink } from '@/lib/contact'
import ShieldMotif from './ShieldMotif'

/**
 * CTA finale — arancio pieno #FF6A00. Chiusura calda e decisa: il
 * bianco su arancio è il momento più forte della pagina. Bottone
 * bianco su arancio per massimo contrasto.
 */
export default function HomeCta() {
  const t = useTranslations('homeCta')

  return (
    <section className="surface-orange relative overflow-hidden" data-surface="orange">
      <ShieldMotif
        variant="solid"
        className="absolute w-[380px] md:w-[560px] -bottom-28 -right-16 text-white/10 pointer-events-none"
      />

      <SectionTransition
        id="contatti-cta"
        variant="fade-up"
        className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-36 text-center"
        ariaLabelledBy="cta-heading"
      >
        <h2
          id="cta-heading"
          className="font-display font-extrabold text-white tracking-[-0.025em] leading-[1.02] [font-size:clamp(36px,9vw,48px)] md:[font-size:clamp(52px,5vw,80px)]"
        >
          {t('title')}
        </h2>
        <p className="mt-6 font-body text-[17px] md:text-[20px] leading-relaxed text-white/85 max-w-[560px] mx-auto">
          {t('body')}
        </p>
        <Button
          asChild
          size="lg"
          className="mt-9 rounded-full bg-white !text-[#FF6A00] hover:bg-white font-semibold text-[17px] px-10 py-7 shadow-[0_16px_44px_-12px_rgba(0,0,0,0.35)] transition-all duration-200 hover:scale-[1.04]"
        >
          <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer">
            {t('button')}
          </a>
        </Button>
      </SectionTransition>
    </section>
  )
}
