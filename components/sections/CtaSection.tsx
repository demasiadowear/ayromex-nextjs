'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { FaWhatsapp } from 'react-icons/fa'
import SectionTransition from './SectionTransition'
import type { AyroGuideHover } from '@/components/hero/AyroGuide'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

function emitSceneIntensity(on: boolean) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<boolean>('ayro-scene:intensity', { detail: on }),
  )
}

function emitHover(value: AyroGuideHover) {
  if (typeof window === 'undefined') return
  window.dispatchEvent(
    new CustomEvent<AyroGuideHover>('ayro-guide:hover', { detail: value }),
  )
}

type Toast =
  | { kind: 'success'; message: string }
  | { kind: 'error'; message: string }
  | null

export default function CtaSection() {
  const t = useTranslations('ctaSection')

  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [shaking, setShaking] = useState(false)
  const [toast, setToast] = useState<Toast>(null)
  const [disabled, setDisabled] = useState(false)

  // When the section enters the viewport, tell the BackgroundScene
  // to intensify the ambient constellation traffic for a dramatic
  // closing feel. Fires once on enter and again on exit.
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (disabled) return

    if (!EMAIL_RE.test(email.trim())) {
      setInvalid(true)
      setShaking(true)
      setToast({ kind: 'error', message: t('toastError') })
      window.setTimeout(() => setShaking(false), 220)
      window.setTimeout(() => setToast(null), 2800)
      return
    }

    // Mock: log the lead; real wiring (Supabase + Slack) lands in STEP 6.
    // eslint-disable-next-line no-console
    console.log('[AYROMEX CTA] lead email:', email.trim())

    setInvalid(false)
    setDisabled(true)
    setToast({ kind: 'success', message: t('toastSuccess') })

    // Tell the AyroGuide that we received a submission.
    emitHover('cta-submitted')
    window.setTimeout(() => emitHover(null), 4000)

    window.setTimeout(() => {
      setToast(null)
      setDisabled(false)
      setEmail('')
    }, 3500)
  }

  return (
    <SectionTransition
      id="contatti"
      variant="number-reveal"
      className="relative min-h-[85vh] px-6 py-32 overflow-hidden flex items-center justify-center"
    >
      <div ref={sectionRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />

      <span
        data-section-number
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-ay-accent pointer-events-none select-none leading-none"
        style={{ fontSize: 'clamp(240px, 40vw, 520px)', opacity: 0 }}
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

        <motion.form
          onSubmit={handleSubmit}
          onFocus={() => emitHover('cta-form')}
          onBlur={(e) => {
            // Only clear hover when focus fully leaves the form.
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              emitHover(null)
            }
          }}
          animate={shaking ? { x: [-6, 6, -4, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
          className="mt-12 w-full max-w-[640px] flex flex-col sm:flex-row gap-3"
        >
          <label htmlFor="cta-email" className="sr-only">
            {t('emailPlaceholder')}
          </label>
          <input
            id="cta-email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (invalid) setInvalid(false)
            }}
            placeholder={t('emailPlaceholder')}
            disabled={disabled}
            aria-invalid={invalid}
            className={`flex-1 rounded-full bg-ay-surface/85 backdrop-blur-md px-7 py-4 font-body text-[16px] text-ay-text placeholder:text-ay-text-muted outline-none transition-colors duration-200 disabled:opacity-60 border ${
              invalid
                ? 'border-[#FF4D4D] focus:border-[#FF4D4D]'
                : 'border-ay-border focus:border-ay-accent'
            }`}
          />
          <button
            type="submit"
            disabled={disabled}
            className="shrink-0 rounded-full bg-ay-accent text-ay-bg px-7 py-4 font-display font-bold uppercase tracking-widest text-[13px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:hover:scale-100"
          >
            {t('submitButton')}
          </button>
        </motion.form>

        <a
          href="https://wa.me/390808407861"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-body text-[14px] text-ay-text-muted hover:text-ay-accent transition-colors duration-200"
        >
          <FaWhatsapp className="w-4 h-4" />
          {t('whatsappLink')}
        </a>
      </div>

      {/* Toast, fixed top-right of the viewport */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-24 right-8 z-[60] max-w-[320px] rounded-xl bg-ay-surface/95 backdrop-blur-md px-5 py-4 font-body text-[14px] text-ay-text shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
            style={{
              border: `1px solid ${toast.kind === 'success' ? '#FF6A00' : '#FF4D4D'}`,
            }}
          >
            <span className="flex items-center gap-3">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{
                  background: toast.kind === 'success' ? '#FF6A00' : '#FF4D4D',
                }}
              />
              {toast.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionTransition>
  )
}
