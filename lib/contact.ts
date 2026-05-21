/**
 * AYROMEX contact surface — single source of truth.
 *
 * Centralizes the WhatsApp number, email addresses and the
 * per-intent prefill messages used by CTAs across the site.
 * When the number or the canned message changes, you change it
 * here and the whole site picks it up.
 *
 * Prefill messages are Italian-first because the inbound surface
 * (Christian) replies in Italian. They are intentionally NOT
 * translated per-locale — keeps a single inbound stream and
 * matches the live behaviour of the contact form today.
 */

// E.164 without the leading +, formatted for wa.me URLs.
export const WHATSAPP_NUMBER = '390808407861'

// Public-facing display form (used in body copy / tooltips).
export const WHATSAPP_DISPLAY = 'wa.me/390808407861'

// Tel: link form (no plus stripped on some clients; include for safety).
export const WHATSAPP_TEL = '+39 080 840 7861'

// Email addresses by function.
export const CONTACT_EMAILS = {
  general: 'hello@ayromex.com',
  privacy: 'privacy@ayromex.com',
  legal: 'legal@ayromex.com',
} as const

/**
 * Intent codes for WhatsApp deep-links. Each intent maps to a
 * pre-filled message that frames the inbound conversation.
 *
 * Adding a new intent: add the key here, add its Italian prefill
 * to PREFILL_MESSAGES below, and call `whatsappLink('your-intent')`
 * from your CTA. Unknown intents fall back to `general`.
 */
export type WhatsAppIntent =
  | 'general'
  | 'demo'
  | 'product-fit'
  | 'services'
  | 'consultation'
  | 'journal'
  | 'business'
  | 'portal-advice'
  | 'newsletter'
  | 'web-quote'

const PREFILL_MESSAGES: Record<WhatsAppIntent, string> = {
  general:
    'Ciao AYROMEX, vorrei avere maggiori informazioni.',
  demo:
    'Ciao AYROMEX, vorrei prenotare una demo.',
  'product-fit':
    'Ciao AYROMEX, vorrei capire quale sistema AI fa al caso mio.',
  services:
    'Ciao AYROMEX, vorrei informazioni sui vostri servizi.',
  consultation:
    'Ciao AYROMEX, vorrei una consulenza gratuita per capire cosa automatizzare.',
  journal:
    'Ciao AYROMEX, ho letto il journal e vorrei parlare del mio caso.',
  business:
    'Ciao AYROMEX, vorrei sapere come potete aiutare il mio business.',
  'portal-advice':
    'Ciao AYROMEX, vorrei parlare del portale prodotto più adatto alla mia azienda.',
  newsletter:
    'Ciao AYROMEX, vorrei iscrivermi agli aggiornamenti.',
  'web-quote':
    'Ciao AYROMEX, vorrei un preventivo gratuito per il mio sito web.',
}

/**
 * Build a wa.me deep-link with a URL-encoded prefilled message.
 * Pass an intent code to pick the canned message; defaults to
 * 'general'. Use this everywhere instead of hardcoding wa.me URLs.
 */
export function whatsappLink(intent: WhatsAppIntent = 'general'): string {
  const message = PREFILL_MESSAGES[intent] ?? PREFILL_MESSAGES.general
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Bare wa.me link with no prefill — for footers / inline mentions. */
export const WHATSAPP_LINK_BARE = `https://wa.me/${WHATSAPP_NUMBER}`
