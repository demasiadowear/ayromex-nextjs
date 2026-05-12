'use client'

import { useTranslations } from 'next-intl'
import SectionTransition from './SectionTransition'
import type { AyroGuideHover } from '@/components/hero/AyroGuide'
import { PRODUCTS, type Product } from '@/lib/products'

function emitHover(value: AyroGuideHover) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<AyroGuideHover>('ayro-guide:hover', { detail: value }),
  )
}

function ProductCard({ product }: { product: Product }) {
  const t = useTranslations(`productsSection.${product.i18nKey}`)

  return (
    <div
      data-product={product.id}
      onMouseEnter={() => emitHover(product.id)}
      onMouseLeave={() => emitHover(null)}
      className="group relative z-10 rounded-3xl border border-ay-border bg-ay-surface/95 backdrop-blur-xl p-10 flex flex-col gap-6 transition-all duration-300 hover:border-ay-accent hover:scale-[1.02]"
    >
      {/* Hover glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(255,106,0,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 flex flex-col gap-6 h-full">
        {/* Badge */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-ay-lime animate-pulse" />
          <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-ay-accent">
            {t('badge')}
          </span>
        </div>

        {/* Product lockup */}
        <div>
          <h3 className="font-display text-[40px] leading-none font-extrabold text-ay-text">
            {t('name')}
          </h3>
          <p className="mt-3 font-body text-[16px] text-ay-text-muted">
            {t('tagline')}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ay-blue/85">
            {t('audience')}
          </p>
        </div>

        {/* Bullets */}
        <ul className="flex flex-col gap-3 mt-2">
          {(['bullet1', 'bullet2', 'bullet3'] as const).map((k) => (
            <li
              key={k}
              className="flex items-start gap-3 font-body text-[14px] text-ay-text/85"
            >
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ay-accent" />
              {t(k)}
            </li>
          ))}
        </ul>

        {/* Footer row: price + CTA */}
        <div className="mt-auto flex items-end justify-between pt-8 border-t border-ay-border">
          <span className="font-mono text-[13px] text-ay-text-muted">
            {t('pricing')}
          </span>
          <a
            href={product.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[14px] font-semibold text-ay-accent hover:underline underline-offset-4"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const t = useTranslations('productsSection')

  return (
    <SectionTransition
      id="prodotti"
      variant="number-reveal"
      className="relative min-h-screen px-6 py-32 overflow-hidden"
    >
      {/* Giant background number */}
      <span
        data-section-number
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-ay-accent pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(240px, 40vw, 520px)', opacity: 0 }}
      >
        {t('number')}
      </span>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Headline */}
        <h2
          className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(64px, 9vw, 140px)' }}
        >
          {t('headlineLine1')}
          <br />
          <span className="text-ay-accent">{t('headlineLine2')}</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-8 max-w-[720px] font-body text-[18px] text-ay-text-muted leading-relaxed">
          {t('subtitle')}
        </p>

        {/* Cards grid */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </SectionTransition>
  )
}
