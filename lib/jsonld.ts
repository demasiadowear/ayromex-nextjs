/**
 * AYROMEX — JSON-LD (Schema.org) builders.
 *
 * Pure functions that return plain objects; pages serialize them
 * into <script type="application/ld+json"> via JSON.stringify.
 * Keep every builder in sync with lib/seo.ts (URLs) and
 * lib/contact.ts (contact surface) — no hardcoded duplicates
 * outside this file.
 */

import { SITE_NAME, SITE_URL } from './seo'
import { CONTACT_EMAILS, WHATSAPP_TEL } from './contact'

const SOCIAL_PROFILES = [
  'https://www.instagram.com/ayromex_srl/',
  'https://www.facebook.com/profile.php?id=61586097166352',
]

/** Organization — montata su ogni pagina via app/[locale]/layout.tsx. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: `${SITE_NAME} S.R.L.`,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    description:
      'AI automation agency for Italian SMEs and ADM gaming operators. Meta Tech Provider for the WhatsApp Business Platform (official APIs, live in production).',
    knowsAbout: [
      'WhatsApp Business Platform',
      'AI automation',
      'Voice agents',
    ],
    email: CONTACT_EMAILS.general,
    telephone: WHATSAPP_TEL,
    sameAs: SOCIAL_PROFILES,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aleea Izvorul Oltului, Nr. 6, Bl. 29, Sc. B, Et. 2, Ap. 24',
      addressLocality: 'București',
      addressRegion: 'Sectorul 4',
      addressCountry: 'RO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: CONTACT_EMAILS.general,
      telephone: WHATSAPP_TEL,
      availableLanguage: ['it', 'en', 'ro'],
    },
  }
}

export interface ProductJsonLdInput {
  name: string
  description: string
  url: string
  /** Àncora del deep dive sulla pagina /prodotti (es. '#ayrodesk24'). */
  pageAnchor: string
  locale: string
}

/** SoftwareApplication per ciascun prodotto sulla pagina /prodotti. */
export function productJsonLd(p: ProductJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.name,
    description: p.description,
    url: p.url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: p.locale,
    mainEntityOfPage: `${SITE_URL}/${p.locale}/prodotti${p.pageAnchor}`,
    provider: { '@id': `${SITE_URL}/#organization` },
  }
}

export interface ServiceJsonLdInput {
  name: string
  description: string
  url: string
  locale: string
}

/** Service — pagina WhatsApp Business API ufficiale. */
export function serviceJsonLd(s: ServiceJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: s.url,
    serviceType: 'WhatsApp Business Platform integration',
    areaServed: { '@type': 'Country', name: 'Italy' },
    inLanguage: s.locale,
    provider: { '@id': `${SITE_URL}/#organization` },
  }
}

export interface ArticleJsonLdInput {
  headline: string
  description: string
  locale: string
}

/** Article per i post inline del Journal (niente date: non le inventiamo). */
export function articleJsonLd(a: ArticleJsonLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.headline,
    description: a.description,
    inLanguage: a.locale,
    mainEntityOfPage: `${SITE_URL}/${a.locale}/journal`,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}
