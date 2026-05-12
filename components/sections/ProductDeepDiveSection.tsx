'use client'

import { useTranslations } from 'next-intl'
import { FiArrowUpRight } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import SectionTransition from './SectionTransition'
import { getProduct, type ProductId } from '@/lib/products'

/**
 * Generic product deep-dive slab. Three thin wrappers
 * (AyroDesk24/AyroHub/AyroStay) configure it with their feature
 * list and icons; everything else — product name, portal URL,
 * tagline, copy, CTAs — flows from lib/products.ts + i18n.
 *
 * i18n contract (per product):
 *   {productId}DeepDive: {
 *     eyebrow, tagline, focus,
 *     features: { [key]: { title, description } },
 *     result, ctaPrimary, ctaSecondary
 *   }
 */
export interface ProductDeepDiveFeature {
  /** Translation key under `{productId}DeepDive.features.*`. */
  key: string
  Icon: IconType
}

interface Props {
  productId: ProductId
  features: ProductDeepDiveFeature[]
}

export default function ProductDeepDiveSection({
  productId,
  features,
}: Props) {
  const product = getProduct(productId)
  const t = useTranslations(`${productId}DeepDive`)
  const tFeatures = useTranslations(`${productId}DeepDive.features`)

  // Split the result sentence on periods so each clause becomes a
  // small chip. Falls back to a single block if no periods exist.
  const resultChunks = t('result')
    .split('.')
    .map((s) => s.trim())
    .filter(Boolean)

  return (
    <SectionTransition
      id={`${productId}-deep`}
      variant="fade-up"
      className="relative px-6 py-28 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header row */}
        <div className="flex flex-col items-start max-w-[920px]">
          <span
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ay-blue/85 mb-5"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
          >
            {t('eyebrow')}
          </span>

          <h2
            className="font-display font-extrabold text-ay-text leading-[0.98] tracking-[-0.02em]"
            style={{
              fontSize: 'clamp(36px, 5.4vw, 72px)',
              textShadow: '0 2px 12px rgba(0,0,0,0.55)',
            }}
          >
            <span className="text-ay-accent">{product.displayName}</span>
            <span className="text-ay-text-muted mx-3">—</span>
            <span>{t('tagline')}</span>
          </h2>

          <p
            className="mt-7 max-w-[720px] font-body text-[17px] leading-relaxed"
            style={{
              color: '#E5E5E5',
              textShadow: '0 1px 4px rgba(0,0,0,0.7)',
            }}
          >
            {t('focus')}
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ key, Icon }) => (
            <div
              key={key}
              className="group relative rounded-2xl border border-ay-border bg-ay-surface/85 backdrop-blur-lg p-6 flex flex-col gap-3 text-left transition-all duration-300 hover:border-ay-accent/60 hover:bg-ay-surface"
            >
              {/* Subtle blue top accent on hover */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-ay-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-ay-accent/30 bg-ay-accent/5">
                <Icon className="w-5 h-5 text-ay-accent" />
              </div>

              <h3 className="font-display font-extrabold text-ay-text text-[17px] leading-tight">
                {tFeatures(`${key}.title`)}
              </h3>
              <p
                className="font-body text-[13.5px] leading-relaxed"
                style={{ color: '#D8D8D8' }}
              >
                {tFeatures(`${key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Result block + CTAs row */}
        <div className="mt-14 rounded-3xl border border-ay-border bg-ay-surface/90 backdrop-blur-xl p-8 md:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="w-1.5 h-1.5 rounded-full bg-ay-lime animate-pulse"
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ay-lime">
                outcome
              </span>
            </div>

            {/* Outcome chips — Cream for warm emphasis on the verdict */}
            <div className="flex flex-wrap gap-2">
              {resultChunks.map((chunk, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-ay-cream/15 bg-ay-cream/5 px-4 py-2 font-body text-[14px] text-ay-cream"
                >
                  {chunk}
                </span>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 shrink-0">
            <a
              href={product.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ay-accent text-ay-bg px-6 py-3.5 font-display font-bold uppercase tracking-widest text-[12px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200"
            >
              {t('ctaPrimary')}
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center justify-center rounded-full border border-ay-accent/60 text-ay-accent px-6 py-3.5 font-display font-bold uppercase tracking-widest text-[12px] hover:bg-ay-accent hover:text-ay-bg transition-all duration-200"
            >
              {t('ctaSecondary')}
            </a>
          </div>
        </div>
      </div>
    </SectionTransition>
  )
}
