'use client'

import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaWhatsapp } from 'react-icons/fa'
import SectionTransition from './SectionTransition'
import type { AyroGuideHover } from '@/components/hero/AyroGuide'

function emitHover(value: AyroGuideHover) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<AyroGuideHover>('ayro-guide:hover', { detail: value }),
  )
}

export default function CtaSection() {
  const t = useTranslations('ctaSection')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || submitting) return

    setSubmitting(true)
    // Mock: log the lead; real wiring (Supabase + Slack) lands in STEP 6.
    // eslint-disable-next-line no-console
    console.log('[AYROMEX CTA stub] lead email:', email)

    window.setTimeout(() => {
      setSubmitted(true)
      setSubmitting(false)
      window.setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3500)
    }, 300)
  }

  return (
    <SectionTransition
      id="contatti"
      variant="number-reveal"
      className="relative min-h-[85vh] px-6 py-32 overflow-hidden"
    >
      <span
        data-section-number
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-ay-accent pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(200px, 30vw, 400px)', opacity: 0 }}
      >
        {t('number')}
      </span>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2
          className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(48px, 7vw, 104px)' }}
        >
          {t('headlineLine1')}
          <br />
          <span className="text-ay-accent">{t('headlineLine2')}</span>
        </h2>

        <p className="mt-8 max-w-[560px] font-body text-[18px] text-ay-text-muted leading-relaxed">
          {t('subtitle')}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 w-full max-w-[480px] flex flex-col sm:flex-row gap-3"
          onFocus={() => emitHover('cta-form')}
          onBlur={() => emitHover(null)}
        >
          <label htmlFor="cta-email" className="sr-only">
            {t('emailPlaceholder')}
          </label>
          <input
            id="cta-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            disabled={submitting || submitted}
            className="flex-1 rounded-full bg-ay-surface border border-ay-border px-6 py-4 font-body text-[15px] text-ay-text placeholder:text-ay-text-muted outline-none focus:border-ay-accent transition-colors duration-200 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={submitting || submitted}
            className="shrink-0 rounded-full bg-ay-accent text-ay-bg px-7 py-4 font-display font-bold uppercase tracking-widest text-[13px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:hover:scale-100"
          >
            {t('submitLabel')}
          </button>
        </form>

        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="mt-4 font-body text-[14px] text-ay-accent"
            >
              {t('submittedMessage')}
            </motion.p>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/390808407861"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-body text-[14px] text-ay-text-muted hover:text-ay-accent transition-colors duration-200"
        >
          <FaWhatsapp className="w-4 h-4" />
          {t('whatsappLabel')}
        </a>
      </div>
    </SectionTransition>
  )
}
