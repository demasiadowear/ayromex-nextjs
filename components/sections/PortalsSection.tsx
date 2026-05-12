'use client'

import { useTranslations } from 'next-intl'
import { FiArrowUpRight, FiTerminal } from 'react-icons/fi'
import SectionTransition from './SectionTransition'
import { PRODUCTS, type Product } from '@/lib/products'
import { whatsappLink } from '@/lib/contact'

// "Talk to AYROMEX" lands on WhatsApp — same convention as the
// existing CTA in the homepage. No invented external booking URL.
const TALK_HREF = whatsappLink('portal-advice')

// Strip protocol for the display string.
function displayHost(url: string): string {
  return url.replace(/^https?:\/\//, '')
}

function PortalCard({ product }: { product: Product }) {
  const t = useTranslations('productsSection')
  const tPortals = useTranslations('portalsSection')
  const tName = t(`${product.i18nKey}.name`)
  const tTagline = t(`${product.i18nKey}.tagline`)
  const demoLabel = tPortals(`demoLabel.${product.i18nKey}`)

  return (
    <div
      data-portal={product.id}
      className="group relative rounded-3xl border border-ay-border bg-ay-surface/90 backdrop-blur-xl p-8 flex flex-col gap-6 transition-all duration-300 hover:border-ay-accent/60 hover:bg-ay-surface"
    >
      {/* Subtle tech-blue top line */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-ay-blue/40 to-transparent"
      />

      {/* Header: terminal icon + LIVE pip */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <FiTerminal className="w-4 h-4 text-ay-blue/85" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ay-text-muted">
            portal
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="w-1.5 h-1.5 rounded-full bg-ay-lime animate-pulse"
            aria-hidden="true"
          />
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-ay-lime">
            live
          </span>
        </div>
      </div>

      {/* Product lockup */}
      <div>
        <h3 className="font-display text-[34px] leading-none font-extrabold text-ay-text">
          {tName}
        </h3>
        <p className="mt-3 font-body text-[15px] text-ay-text-muted leading-relaxed">
          {tTagline}
        </p>
      </div>

      {/* Portal host */}
      <div className="mt-auto pt-6 border-t border-ay-border">
        <p className="font-mono text-[12px] text-ay-blue/85 truncate">
          {displayHost(product.portalUrl)}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={product.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ay-accent text-ay-bg px-5 py-3 font-display font-bold uppercase tracking-widest text-[12px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200"
        >
          {tPortals('openPortal')}
          <FiArrowUpRight className="w-3.5 h-3.5" />
        </a>
        <a
          href="#contatti"
          className="flex-1 inline-flex items-center justify-center rounded-full border border-ay-border text-ay-text px-5 py-3 font-display font-bold uppercase tracking-widest text-[12px] hover:border-ay-accent hover:text-ay-accent transition-all duration-200"
        >
          {demoLabel}
        </a>
      </div>
    </div>
  )
}

export default function PortalsSection() {
  const t = useTranslations('portalsSection')
  const talkLabel = useTranslations('finalCtaSection')('ctaTalk')

  return (
    <SectionTransition
      id="portali"
      variant="fade-up"
      className="relative min-h-[85vh] px-6 py-32 overflow-hidden flex items-center"
      ariaLabelledBy="portals-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ay-accent mb-6"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
        >
          {t('eyebrow')}
        </span>

        {/* Headline */}
        <h2
          id="portals-heading"
          className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.02em] max-w-[20ch]"
          style={{
            fontSize: 'clamp(40px, 6vw, 84px)',
            textShadow: '0 2px 12px rgba(0,0,0,0.6)',
          }}
        >
          {t('headline')}
        </h2>

        {/* Subtitle */}
        <p
          className="mt-8 max-w-[720px] font-body text-[17px] leading-relaxed text-ay-text-bright"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
        >
          {t('subtitle')}
        </p>

        {/* Portal cards */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <PortalCard key={p.id} product={p} />
          ))}
        </div>

        {/* Talk to AYROMEX — quiet trailing link */}
        <a
          href={TALK_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 font-body text-[14px] text-ay-text-muted hover:text-ay-accent transition-colors duration-200"
        >
          <span aria-hidden="true">→</span>
          {talkLabel}
        </a>
      </div>
    </SectionTransition>
  )
}
