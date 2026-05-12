'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { FaWhatsapp } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'
import SectionTransition from './SectionTransition'
import { getProduct } from '@/lib/products'
import { whatsappLink } from '@/lib/contact'

// "Talk to AYROMEX" lands on WhatsApp. We deliberately do not
// invent a Calendly / Cal.com URL — Christian is the inbound
// surface and WA is the fastest path until that link exists.
const TALK_HREF = whatsappLink('product-fit')

function emitSceneIntensity(on: boolean) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<boolean>('ayro-scene:intensity', { detail: on }),
  )
}

export default function FinalCtaSection() {
  const t = useTranslations('finalCtaSection')

  // When the section enters the viewport, tell BackgroundScene to
  // intensify the ambient constellation traffic — same hook the
  // homepage CTA slot has always used, preserved for visual
  // continuity.
  const sectionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => emitSceneIntensity(entry.isIntersecting))
      },
      { threshold: 0.35 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      emitSceneIntensity(false)
    }
  }, [])

  const ayrodesk24 = getProduct('ayrodesk24')
  const ayrohub = getProduct('ayrohub')
  const ayrostay = getProduct('ayrostay')

  return (
    <SectionTransition
      id="contatti"
      variant="number-reveal"
      className="relative min-h-[90vh] px-6 py-32 overflow-hidden flex items-center justify-center"
    >
      <div
        ref={sectionRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Section number — final CTA sits in slot "03" */}
      <span
        data-section-number
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-ay-accent pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(240px, 40vw, 520px)', opacity: 0 }}
      >
        03
      </span>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ay-accent mb-6"
          style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
        >
          {t('eyebrow')}
        </span>

        {/* Headline */}
        <h2
          className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.02em] max-w-[18ch]"
          style={{
            fontSize: 'clamp(48px, 7vw, 104px)',
            textShadow: '0 2px 12px rgba(0,0,0,0.6)',
          }}
        >
          {t('headline')}
        </h2>

        {/* Subtitle */}
        <p
          className="mt-8 max-w-[640px] font-body text-[18px] leading-relaxed"
          style={{
            color: '#E5E5E5',
            textShadow: '0 1px 4px rgba(0,0,0,0.7)',
          }}
        >
          {t('subtitle')}
        </p>

        {/* CTA grid: 3 product buttons + 1 talk button */}
        <div className="mt-12 w-full max-w-[820px] grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={ayrodesk24.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ay-accent text-ay-bg px-6 py-4 font-display font-bold uppercase tracking-widest text-[13px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200"
          >
            {t('ctaAyrodesk24')}
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={ayrohub.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ay-accent/60 text-ay-accent px-6 py-4 font-display font-bold uppercase tracking-widest text-[13px] hover:bg-ay-accent hover:text-ay-bg hover:scale-[1.02] transition-all duration-200"
          >
            {t('ctaAyrohub')}
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={ayrostay.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ay-accent/60 text-ay-accent px-6 py-4 font-display font-bold uppercase tracking-widest text-[13px] hover:bg-ay-accent hover:text-ay-bg hover:scale-[1.02] transition-all duration-200"
          >
            {t('ctaAyrostay')}
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={TALK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ay-border text-ay-text px-6 py-4 font-display font-bold uppercase tracking-widest text-[13px] hover:border-ay-accent hover:text-ay-accent transition-all duration-200"
          >
            <FaWhatsapp className="w-4 h-4" />
            {t('ctaTalk')}
          </a>
        </div>
      </div>
    </SectionTransition>
  )
}
