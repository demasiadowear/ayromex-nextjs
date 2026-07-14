'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import SectionTransition from '@/components/sections/SectionTransition'
import { MtpBenefitsGrid, MtpComparisonTable } from './MtpShared'
import ShieldMotif from './ShieldMotif'

/**
 * Trust section — Tech Provider approvato da Meta. Sezione SCURA
 * calda (surface-ink): rompe la sequenza chiara e dà profondità,
 * l'arancio ci risalta vivo. data-surface guida la transizione
 * colore in ScrollColorController.
 */
export default function HomeTrust() {
  const t = useTranslations('homeTrust')

  return (
    <section className="surface-ink relative overflow-hidden" data-surface="ink">
      {/* Motivo scudo grande in filigrana */}
      <ShieldMotif className="shield-arc w-[360px] md:w-[560px] -bottom-24 -left-16 !opacity-[0.05]" />

      <SectionTransition
        id="trust"
        variant="fade-up"
        stagger={0.08}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28"
        ariaLabelledBy="trust-heading"
      >
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 font-body text-[13px] font-semibold text-ay-accent mb-4">
            <span className="w-6 h-px bg-ay-accent" aria-hidden="true" />
            {t('eyebrow')}
          </span>
          <h2
            id="trust-heading"
            className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.1] [font-size:clamp(30px,6.5vw,38px)] md:[font-size:clamp(36px,3.2vw,52px)]"
          >
            {t('title')}
          </h2>
          <p className="mt-5 font-body text-[16px] md:text-[18px] leading-relaxed text-ay-text-muted">
            {t('intro')}
          </p>
        </div>

        <div className="mt-10 md:mt-14">
          <MtpBenefitsGrid />
        </div>

        <div className="mt-10 md:mt-14">
          <MtpComparisonTable />
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 rounded-3xl border border-ay-border bg-ay-surface p-7 md:p-10">
          <p className="font-display font-extrabold text-ay-text text-[20px] md:text-[26px] leading-snug max-w-[620px]">
            {t('closing')}
          </p>
          <Button
            asChild
            size="lg"
            className="w-fit shrink-0 rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold px-7 py-6 shadow-[0_10px_30px_-8px_rgba(255,106,0,0.6)] transition-all hover:scale-[1.03]"
          >
            <Link href="/meta-tech-provider">
              {t('cta')}
              <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </SectionTransition>
    </section>
  )
}
