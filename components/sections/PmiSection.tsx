'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import gsap from 'gsap'
import SectionTransition from './SectionTransition'
import { whatsappLink } from '@/lib/contact'
import { initScrollTrigger } from '@/lib/scroll'

const PILLARS = [
  { key: 'google',   number: '01' },
  { key: 'identity', number: '02' },
  { key: 'speed',    number: '03' },
  { key: 'care',     number: '04' },
] as const

export default function PmiSection() {
  const t          = useTranslations('pmiSection')
  const tPillars   = useTranslations('pmiSection.pillars')
  const tPromise   = useTranslations('pmiSection.promise')
  const tPortfolio = useTranslations('pmiSection.portfolio')
  const tCta       = useTranslations('pmiSection.cta')

  // Promise block — independent fade + y reveal, gated on
  // prefers-reduced-motion. Lives alongside the SectionTransition
  // wrapper's broader fade so the box has its own entry beat.
  const promiseRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = promiseRef.current
    if (!el) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) return

    initScrollTrigger()

    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <SectionTransition
      id="pmi"
      variant="fade-up"
      className="relative px-4 sm:px-6 py-20 md:py-32 overflow-hidden"
      ariaLabelledBy="pmi-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span
            className="font-mono text-[11px] tracking-[0.4em] text-ay-accent/70 uppercase mb-6"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
          >
            {t('eyebrow')}
          </span>

          <h2
            id="pmi-heading"
            className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.025em] break-words w-full max-w-full md:max-w-[22ch] mx-auto [font-size:clamp(32px,9.5vw,46px)] md:[font-size:clamp(52px,6vw,88px)]"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
          >
            <em className="not-italic italic text-ay-accent">
              {t('headlineAccent')}
            </em>
            {t('headlineEnd')}
          </h2>

          <p className="mt-8 max-w-[640px] font-body text-[18px] leading-relaxed text-ay-text-bright">
            {t('subline1')}
          </p>
          <p className="mt-3 max-w-[640px] font-body text-[15px] leading-relaxed text-ay-text-muted">
            {t('subline2')}
          </p>
        </div>

        {/* 4 Pillars — 2×2 on desktop */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {PILLARS.map(({ key, number }) => (
            <article
              key={key}
              className="group relative rounded-2xl border border-ay-border bg-ay-surface/70 backdrop-blur-lg p-8 md:p-10 flex flex-col gap-4 text-left transition-all duration-300 hover:border-ay-accent/40 hover:bg-ay-surface"
            >
              <header className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[11px] tracking-[0.3em] text-ay-text-muted uppercase">
                  {tPillars(`${key}.label`)}
                </span>
                <span className="font-mono text-[11px] tracking-[0.3em] text-ay-accent/60">
                  {number}/04
                </span>
              </header>

              <h3 className="font-display font-bold text-ay-text leading-[1.05] [font-size:clamp(22px,3.4vw,30px)]">
                {tPillars(`${key}.title`)}
              </h3>

              <p className="font-body text-[15px] leading-relaxed text-ay-text-bright">
                {tPillars(`${key}.body`)}
              </p>
            </article>
          ))}
        </div>

        {/* Promise / guarantee block */}
        <div
          ref={promiseRef}
          className="mt-16 md:mt-20 rounded-[2px] border border-ay-accent/30 bg-ay-accent/5 py-10 px-6 md:py-16 md:px-12 flex flex-col items-center text-center gap-6"
        >
          {/* Top hairline separator */}
          <div className="w-16 h-px bg-ay-accent/20" aria-hidden="true" />

          <span className="font-mono text-[11px] tracking-[0.4em] uppercase text-ay-accent/70">
            {tPromise('eyebrow')}
          </span>

          <h3 className="font-display font-bold text-ay-text leading-[1.0] tracking-[-0.02em] whitespace-pre-line max-w-[18ch] [font-size:clamp(32px,5.4vw,52px)]">
            {tPromise('headline')}
          </h3>

          <p className="font-body text-ay-text-muted whitespace-pre-line max-w-[600px] text-[15px] md:text-[17px] leading-relaxed">
            {tPromise('body')}
          </p>
        </div>

        {/* Portfolio coming-soon block */}
        <div className="flex flex-col items-center gap-6 py-16 mt-16 md:mt-20 border-t border-ay-border/40">

          <p className="font-mono text-xs tracking-[0.4em] text-ay-accent/60 uppercase pt-12">
            {tPortfolio('eyebrow')}
          </p>

          <h3 className="font-display text-3xl md:text-4xl text-center text-ay-text/80 leading-[1.1] max-w-[18ch]">
            {tPortfolio('titleStart')}
            <em className="not-italic italic text-ay-accent">
              {tPortfolio('titleAccent')}
            </em>
            {tPortfolio('titleEnd')}
          </h3>

          <p className="font-body text-ay-text-muted text-center max-w-md text-sm leading-relaxed">
            {tPortfolio('body')}
          </p>

          {/* 3 placeholder cards with shimmer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative aspect-video border border-ay-accent/10 bg-[#111111] overflow-hidden flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ay-accent/5 to-transparent animate-shimmer pointer-events-none" />
                <span className="font-mono text-[0.6rem] tracking-[0.4em] text-ay-text/20 uppercase relative z-10">
                  {tPortfolio('cardLabel')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <div className="space-y-2">
            <p className="font-display font-bold text-ay-text leading-tight [font-size:clamp(22px,3vw,32px)]">
              {tCta('line1')}
            </p>
            <p className="font-body text-ay-text-muted text-[15px] md:text-[17px]">
              {tCta('line2')}
            </p>
          </div>

          <a
            href={whatsappLink('web-quote')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-display font-bold uppercase tracking-widest text-sm rounded-full bg-ay-accent text-ay-bg px-7 py-[14px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200"
          >
            {tCta('button')}
          </a>
        </div>

      </div>
    </SectionTransition>
  )
}
