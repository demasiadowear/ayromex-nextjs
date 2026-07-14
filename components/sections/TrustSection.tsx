'use client'

import { useTranslations } from 'next-intl'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { Link } from '@/i18n/navigation'
import SectionTransition from './SectionTransition'

/**
 * Trust band — "Meta Tech Provider ufficiale". Sits right under the
 * hero. Text-only by policy: NO Meta / Meta Business Partner logos,
 * only a generic WhatsApp glyph. Copy lives in `trustSection.*`.
 */
export default function TrustSection() {
  const t = useTranslations('trustSection')
  const tMeta = useTranslations('metaTechProvider')
  const points = ['point1', 'point2', 'point3'] as const

  return (
    <SectionTransition
      id="trust"
      variant="fade-up"
      className="relative px-4 sm:px-6 py-14 md:py-20"
      ariaLabelledBy="trust-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-ay-border bg-ay-surface/90 backdrop-blur-xl p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Badge Meta Tech Provider AYROMEX (asset brand vettoriale,
              nessun logo Meta / Meta Business Partner) */}
          <div className="shrink-0 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/badges/meta-tech-provider.svg"
              alt={tMeta('badge')}
              width={600}
              height={470}
              loading="lazy"
              className="w-[170px] md:w-[210px] h-auto"
            />
          </div>

          <div className="flex-1 min-w-0">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ay-blue/85 block mb-3">
              {t('eyebrow')}
            </span>
            <h2
              id="trust-heading"
              className="font-display font-extrabold text-ay-text leading-[1.05] tracking-[-0.02em] [font-size:clamp(24px,6vw,32px)] md:[font-size:clamp(32px,3.2vw,44px)] mb-4"
            >
              {t('title')}
            </h2>
            <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-ay-text-muted max-w-[720px] mb-5">
              {t('body')}
            </p>

            <ul className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-3">
              {points.map((key) => (
                <li
                  key={key}
                  className="inline-flex items-center gap-2 rounded-full border border-ay-border bg-ay-bg/60 px-4 py-2 font-body text-[13px] text-ay-text"
                >
                  <FiCheck className="w-3.5 h-3.5 text-ay-lime shrink-0" aria-hidden="true" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0">
            <Link
              href="/whatsapp-business-api"
              className="inline-flex items-center gap-2 rounded-full border border-ay-accent/60 text-ay-accent px-6 py-3.5 font-display font-bold uppercase tracking-widest text-[12px] hover:bg-ay-accent hover:text-ay-bg transition-all duration-200"
            >
              {t('cta')}
              <FiArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </SectionTransition>
  )
}
