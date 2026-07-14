'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/contact'

/**
 * Hero redesign 2026 — chiaro, caldo, umano. Una sola entrata:
 * claim a righe con stagger, sub, badge, CTA. Poi fermo.
 */
export default function HomeHero() {
  const rootRef = useRef<HTMLElement>(null)
  const t = useTranslations('homeHero')

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        // Righe del claim: SOLO transform, mai opacity — un h1 a
        // opacity:0 sposta l'LCP alla fine dell'entrance (~4s
        // misurati). Translate-only = dipinto al primo frame.
        .from('[data-hero-line]', {
          y: 44,
          duration: 0.9,
          stagger: 0.14,
        })
        .from('[data-hero-sub]', { y: 24, opacity: 0, duration: 0.7 }, '-=0.45')
        // Badge: candidato LCP — translate-only come il claim.
        .from('[data-hero-badge]', { y: 22, duration: 0.7 }, '-=0.35')
        .from('[data-hero-cta]', { y: 16, opacity: 0, duration: 0.6 }, '-=0.4')
    }, el)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      className="relative px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          id="hero-heading"
          className="font-display font-extrabold tracking-[-0.02em] text-ay-text leading-[1.08] [font-size:clamp(34px,8vw,44px)] md:[font-size:clamp(48px,4.6vw,68px)]"
        >
          <span data-hero-line className="block">
            {t('line1')}
          </span>
          <span data-hero-line className="block text-ay-text-muted">
            {t('line2')}
          </span>
        </h1>

        <p
          data-hero-sub
          className="mt-6 md:mt-8 font-body text-[17px] md:text-[20px] leading-relaxed text-ay-text-muted max-w-[620px] mx-auto"
        >
          {t('sub')}
        </p>

        {/* Badge Meta Tech Provider — asset brand, sempre in inglese */}
        <div data-hero-badge className="mt-9 md:mt-12 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logos/primary/tech-light.svg"
            alt={t('badgeAlt')}
            width={720}
            height={300}
            fetchPriority="high"
            className="h-[120px] md:h-[160px] w-auto"
          />
        </div>

        <div
          data-hero-cta
          className="mt-9 md:mt-12 flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="w-full md:w-auto rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold text-[16px] px-8 py-6 transition-transform duration-200 hover:scale-[1.02]"
          >
            <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer">
              {t('ctaWhatsApp')}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full md:w-auto rounded-full border-ay-border bg-transparent text-ay-text font-semibold text-[16px] px-8 py-6 hover:bg-ay-surface hover:border-ay-text-muted"
          >
            <a href="#come-funziona">{t('ctaHow')}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
