'use client'

import { useState, type FormEvent } from 'react'
import { useTranslations } from 'next-intl'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_NUMBER } from '@/lib/contact'

/**
 * Form contatti senza backend: compone il messaggio e apre
 * WhatsApp con il testo precompilato. Coerente con il funnel
 * WhatsApp-first del sito (lib/contact.ts) — nessun endpoint
 * email da mantenere, nessun dato salvato lato nostro.
 */
export default function ContactForm() {
  const t = useTranslations('contattiPage')
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = [
      'Ciao AYROMEX!',
      `Nome: ${name.trim()}`,
      business.trim() ? `Attività: ${business.trim()}` : null,
      '',
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join('\n')
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  const fieldClass =
    'w-full rounded-xl border border-ay-border bg-ay-surface px-4 py-3.5 font-body text-[15px] text-ay-text placeholder:text-ay-text-muted/60 outline-none transition-colors duration-200 focus:border-ay-accent'

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ay-text-muted">
            {t('formName')}
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            autoComplete="name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ay-text-muted">
            {t('formBusiness')}
          </span>
          <input
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            className={fieldClass}
            autoComplete="organization"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ay-text-muted">
          {t('formMessage')}
        </span>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y min-h-[120px]`}
        />
      </label>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ay-accent text-ay-bg px-8 py-4 font-display font-bold uppercase tracking-widest text-[12px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200"
        >
          <FaWhatsapp className="w-4 h-4" />
          {t('formCta')}
        </button>
        <p className="font-body text-[13px] text-ay-text-muted leading-relaxed">
          {t('formHint')}
        </p>
      </div>
    </form>
  )
}
