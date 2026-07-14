'use client'

import { useTranslations } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import SectionTransition from '@/components/sections/SectionTransition'
import { MtpBenefitsGrid, MtpComparisonTable } from './MtpShared'

/** Trust section — Tech Provider approvato da Meta (home). */
export default function HomeTrust() {
  const t = useTranslations('homeTrust')

  return (
    <SectionTransition
      id="trust"
      variant="fade-up"
      stagger={0.08}
      className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
      ariaLabelledBy="trust-heading"
    >
      <div className="max-w-2xl">
        <span className="font-body text-[13px] font-semibold text-ay-accent block mb-3">
          {t('eyebrow')}
        </span>
        <h2
          id="trust-heading"
          className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.12] [font-size:clamp(28px,6vw,34px)] md:[font-size:clamp(34px,3vw,46px)]"
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

      <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <p className="font-display font-extrabold text-ay-text text-[18px] md:text-[21px] leading-snug max-w-[560px]">
          {t('closing')}
        </p>
        <Button
          asChild
          variant="outline"
          className="w-fit rounded-full border-ay-accent/50 text-ay-accent font-semibold hover:bg-ay-accent hover:text-white px-6 py-5"
        >
          <Link href="/meta-tech-provider">
            {t('cta')}
            <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </SectionTransition>
  )
}
