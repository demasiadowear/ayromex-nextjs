'use client'

import { useTranslations } from 'next-intl'
import {
  ShieldCheck,
  BadgeCheck,
  MessageSquareText,
  TrendingUp,
  Check,
  X,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '@/lib/contact'
import SectionTransition from './SectionTransition'

/**
 * /whatsapp-business-api — client content. Copy in
 * `whatsappApiPage.*`. Icone Lucide generiche: NIENTE loghi Meta o
 * Meta Business Partner, per policy. Layout: intro ("cos'è"),
 * 4 card benefici, tabella comparativa API ufficiali vs soluzioni
 * non ufficiali, CTA WhatsApp finale.
 */

const BENEFITS = [
  { key: 'noBan', Icon: ShieldCheck },
  { key: 'verified', Icon: BadgeCheck },
  { key: 'templates', Icon: MessageSquareText },
  { key: 'scale', Icon: TrendingUp },
] as const

const ROWS = ['ban', 'badge', 'templates', 'scale', 'support'] as const

export default function WhatsAppApiContent() {
  const t = useTranslations('whatsappApiPage')

  return (
    <>
      {/* ── Header + "cos'è" ─────────────────────────────── */}
      <section
        className="relative px-4 sm:px-6 pt-16 md:pt-24 pb-10 md:pb-14"
        aria-labelledby="wab-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ay-blue/85 block mb-5">
            {t('eyebrow')}
          </span>
          <h1
            id="wab-heading"
            className="font-display font-extrabold text-ay-text leading-[1.0] tracking-[-0.025em] break-words max-w-[980px] [font-size:clamp(32px,8.5vw,42px)] md:[font-size:clamp(52px,5.5vw,84px)]"
          >
            {t('h1Start')}
            <span className="text-ay-accent">{t('h1Accent')}</span>
            {t('h1End')}
          </h1>
          <p className="mt-7 max-w-[760px] font-body text-[16px] md:text-[18px] leading-relaxed text-ay-text-muted">
            {t('intro')}
          </p>
        </div>
      </section>

      <SectionTransition
        id="wab-what-is"
        variant="fade-up"
        className="relative px-4 sm:px-6 py-10 md:py-14"
        ariaLabelledBy="wab-what-is-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="rounded-3xl border border-ay-border bg-ay-surface/90 backdrop-blur-xl p-6 md:p-10">
            <h2
              id="wab-what-is-heading"
              className="font-display font-extrabold text-ay-text [font-size:clamp(22px,5.5vw,28px)] md:[font-size:clamp(28px,2.8vw,38px)] mb-5"
            >
              {t('whatIsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-ay-text-muted">
                {t('whatIsP1')}
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-ay-text-muted">
                {t('whatIsP2')}
              </p>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* ── 4 card benefici ──────────────────────────────── */}
      <SectionTransition
        id="wab-benefits"
        variant="fade-up"
        className="relative px-4 sm:px-6 py-10 md:py-14"
        ariaLabelledBy="wab-benefits-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h2
            id="wab-benefits-heading"
            className="font-display font-extrabold text-ay-text [font-size:clamp(22px,5.5vw,28px)] md:[font-size:clamp(28px,2.8vw,38px)] mb-8"
          >
            {t('benefitsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map(({ key, Icon }) => (
              <div
                key={key}
                className="group rounded-2xl border border-ay-border bg-ay-surface/85 backdrop-blur-lg p-6 flex flex-col gap-3 transition-all duration-300 hover:border-ay-accent/60 hover:bg-ay-surface"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-ay-accent/30 bg-ay-accent/5">
                  <Icon className="w-5 h-5 text-ay-accent" aria-hidden="true" />
                </div>
                <h3 className="font-display font-extrabold text-ay-text text-[17px] leading-tight">
                  {t(`benefits.${key}.title`)}
                </h3>
                <p className="font-body text-[13.5px] leading-relaxed text-ay-text-muted">
                  {t(`benefits.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* ── Tabella comparativa ──────────────────────────── */}
      <SectionTransition
        id="wab-comparison"
        variant="fade-up"
        className="relative px-4 sm:px-6 py-10 md:py-14"
        ariaLabelledBy="wab-comparison-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <h2
            id="wab-comparison-heading"
            className="font-display font-extrabold text-ay-text [font-size:clamp(22px,5.5vw,28px)] md:[font-size:clamp(28px,2.8vw,38px)] mb-3"
          >
            {t('comparisonTitle')}
          </h2>
          <p className="font-body text-[15px] leading-relaxed text-ay-text-muted mb-8 max-w-[640px]">
            {t('comparisonSubtitle')}
          </p>

          <div className="overflow-x-auto rounded-2xl border border-ay-border">
            <table className="w-full min-w-[640px] border-collapse bg-ay-surface/85 backdrop-blur-lg">
              <thead>
                <tr className="border-b border-ay-border">
                  <th
                    scope="col"
                    className="text-left font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ay-text-muted px-5 py-4"
                  >
                    {t('colCriterion')}
                  </th>
                  <th
                    scope="col"
                    className="text-left font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ay-accent px-5 py-4"
                  >
                    {t('colOfficial')}
                  </th>
                  <th
                    scope="col"
                    className="text-left font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ay-text-muted px-5 py-4"
                  >
                    {t('colUnofficial')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr
                    key={row}
                    className={
                      i < ROWS.length - 1 ? 'border-b border-ay-border' : ''
                    }
                  >
                    <th
                      scope="row"
                      className="text-left font-body font-semibold text-[14px] text-ay-text px-5 py-4 align-top"
                    >
                      {t(`rows.${row}.label`)}
                    </th>
                    <td className="px-5 py-4 align-top">
                      <span className="flex items-start gap-2 font-body text-[14px] text-ay-text">
                        <Check
                          className="w-4 h-4 text-ay-lime shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {t(`rows.${row}.official`)}
                      </span>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <span className="flex items-start gap-2 font-body text-[14px] text-ay-text-muted">
                        <X
                          className="w-4 h-4 text-ay-text-muted shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {t(`rows.${row}.unofficial`)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionTransition>

      {/* ── CTA WhatsApp finale ──────────────────────────── */}
      <SectionTransition
        id="wab-cta"
        variant="fade-up"
        className="relative px-4 sm:px-6 py-14 md:py-24"
        ariaLabelledBy="wab-cta-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="rounded-3xl border border-ay-accent/30 bg-ay-surface/90 backdrop-blur-xl p-8 md:p-14 text-center">
            <h2
              id="wab-cta-heading"
              className="font-display font-extrabold text-ay-text [font-size:clamp(24px,6vw,32px)] md:[font-size:clamp(32px,3.4vw,48px)] mb-4"
            >
              {t('ctaTitle')}
            </h2>
            <p className="font-body text-[15px] md:text-[17px] leading-relaxed text-ay-text-muted max-w-[560px] mx-auto mb-8">
              {t('ctaBody')}
            </p>
            <a
              href={whatsappLink('whatsapp-api')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-ay-accent text-ay-bg px-8 py-4 font-display font-bold uppercase tracking-widest text-[13px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200"
            >
              <FaWhatsapp className="w-[18px] h-[18px]" aria-hidden="true" />
              {t('ctaButton')}
            </a>
          </div>
        </div>
      </SectionTransition>
    </>
  )
}
