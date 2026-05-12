/**
 * AYROMEX — SEO source of truth.
 *
 * Holds the canonical production URL, the typed page → locale →
 * copy map used by every generateMetadata call, and the helpers
 * that build path strings and alternate-language maps consistent
 * with the next-intl routing config (i18n/routing.ts).
 *
 * Locales: it (default), en, ro
 * URL pattern: /{locale}{path}  — IT is NOT served at /, it lives at /it.
 */

import type { Metadata } from 'next'

export type Locale = 'it' | 'en' | 'ro'
export type PageKey =
  | 'home'
  | 'servizi'
  | 'chiSiamo'
  | 'journal'
  | 'privacy'
  | 'terms'

export const LOCALES: readonly Locale[] = ['it', 'en', 'ro'] as const
export const DEFAULT_LOCALE: Locale = 'it'

export const SITE_URL = 'https://www.ayromex.com'
export const SITE_NAME = 'AYROMEX'

// TODO(og): commission a proper 1200x630 Open Graph image and
// drop it at /public/brand/og/ayromex-og.png. Until then we
// reuse the square symbol PNG — most platforms center-crop it,
// LinkedIn/X may show it letterboxed. Functional, not optimal.
export const OG_IMAGE = {
  url: '/brand/logos/symbol/ayromex-symbol-1024.png',
  width: 1024,
  height: 1024,
  alt: 'AYROMEX',
} as const

// Twitter handle is intentionally absent until the account exists.
// Setting twitter.site/creator without an active handle produces
// broken "via @null" footers on shared cards.

interface SeoCopy {
  title: string
  description: string
}

/**
 * Per-page, per-locale title and description. Titles are short
 * enough to render fully in SERPs (<= 60 chars where possible).
 * Descriptions stay under 160 chars.
 */
export const SEO: Record<PageKey, Record<Locale, SeoCopy>> = {
  home: {
    it: {
      title: 'AYROMEX — Sistemi AI che automatizzano le operazioni aziendali',
      description:
        'AYROMEX costruisce prodotti AI verticali, assistenti WhatsApp, voice agents, dashboard e automazioni che aiutano le aziende a ridurre il lavoro manuale e aumentare il controllo operativo.',
    },
    en: {
      title: 'AYROMEX — AI systems that automate business operations',
      description:
        'AYROMEX builds vertical AI products, WhatsApp assistants, voice agents, dashboards and automation systems that help companies reduce manual work and increase operational control.',
    },
    ro: {
      title:
        'AYROMEX — Sisteme AI care automatizează operațiunile de business',
      description:
        'AYROMEX construiește produse AI verticale, asistenți WhatsApp, voice agents, dashboard-uri și automatizări care ajută companiile să reducă munca manuală și să crească controlul operațional.',
    },
  },
  servizi: {
    it: {
      title: 'Servizi — AYROMEX',
      description:
        'Sviluppo di prodotti AI verticali, assistenti WhatsApp, voice agents, dashboard e automazioni su misura per ridurre il lavoro manuale e aumentare il controllo operativo.',
    },
    en: {
      title: 'Services — AYROMEX',
      description:
        'Vertical AI product development, WhatsApp assistants, voice agents, dashboards and custom automation built to reduce manual work and increase operational control.',
    },
    ro: {
      title: 'Servicii — AYROMEX',
      description:
        'Dezvoltare de produse AI verticale, asistenți WhatsApp, voice agents, dashboard-uri și automatizări la cheie pentru a reduce munca manuală și a crește controlul operațional.',
    },
  },
  chiSiamo: {
    it: {
      title: 'Chi siamo — AYROMEX',
      description:
        "AYROMEX è un'agenzia AI europea che progetta sistemi di automazione operativa per PMI, operatori ADM e strutture ricettive.",
    },
    en: {
      title: 'About — AYROMEX',
      description:
        'AYROMEX is a European AI agency designing operational automation systems for SMEs, gaming operators and hospitality businesses.',
    },
    ro: {
      title: 'Despre noi — AYROMEX',
      description:
        'AYROMEX este o agenție AI europeană care proiectează sisteme de automatizare operațională pentru IMM-uri, operatori de gaming și unități de cazare.',
    },
  },
  journal: {
    it: {
      title: 'Journal — AYROMEX',
      description:
        'Case study, analisi di mercato e riflessioni su AI e automazione per le PMI italiane.',
    },
    en: {
      title: 'Journal — AYROMEX',
      description:
        'Case studies, market analyses and reflections on AI and automation for Italian SMEs.',
    },
    ro: {
      title: 'Journal — AYROMEX',
      description:
        'Studii de caz, analize de piață și reflecții despre AI și automatizare pentru IMM-urile italiene.',
    },
  },
  privacy: {
    it: {
      title: 'Privacy Policy — AYROMEX',
      description:
        'Informativa sul trattamento dei dati personali ai sensi del GDPR — AYROMEX S.R.L., società europea con sede a Bucarest.',
    },
    en: {
      title: 'Privacy Policy — AYROMEX',
      description:
        'GDPR personal data processing notice — AYROMEX S.R.L., a European company based in Bucharest.',
    },
    ro: {
      title: 'Politica de confidențialitate — AYROMEX',
      description:
        'Informare privind prelucrarea datelor cu caracter personal conform GDPR — AYROMEX S.R.L., companie europeană cu sediul în București.',
    },
  },
  terms: {
    it: {
      title: 'Termini e Condizioni — AYROMEX',
      description:
        'Termini e Condizioni di utilizzo dei servizi AYROMEX S.R.L. — prodotti SaaS e servizi di AI Automation.',
    },
    en: {
      title: 'Terms & Conditions — AYROMEX',
      description:
        'Terms and Conditions for AYROMEX S.R.L. services — SaaS products and AI Automation.',
    },
    ro: {
      title: 'Termeni și Condiții — AYROMEX',
      description:
        'Termeni și Condiții pentru serviciile AYROMEX S.R.L. — produse SaaS și servicii de AI Automation.',
    },
  },
}

/**
 * URL path under the site root for a given page in a given locale.
 * Examples:
 *   pagePath('home', 'it')      -> '/it'
 *   pagePath('servizi', 'en')   -> '/en/servizi'
 *   pagePath('chiSiamo', 'ro')  -> '/ro/chi-siamo'
 */
export function pagePath(page: PageKey, locale: Locale): string {
  const slug: Record<PageKey, string> = {
    home: '',
    servizi: '/servizi',
    chiSiamo: '/chi-siamo',
    journal: '/journal',
    privacy: '/privacy',
    terms: '/terms',
  }
  return `/${locale}${slug[page]}`
}

/**
 * hreflang alternates map for a given page, plus an x-default
 * pointing to the default locale.
 */
export function alternatesFor(page: PageKey): Record<string, string> {
  const map: Record<string, string> = {}
  for (const loc of LOCALES) {
    map[loc] = pagePath(page, loc)
  }
  map['x-default'] = pagePath(page, DEFAULT_LOCALE)
  return map
}

/**
 * Build a Next.js Metadata object for a given page + locale.
 * Includes title, description, OG, Twitter card, canonical and
 * hreflang alternates. metadataBase is set globally in the root
 * layout, so the relative paths returned here resolve correctly.
 */
export function pageMetadata(page: PageKey, locale: Locale): Metadata {
  const copy = SEO[page][locale]
  const canonical = pagePath(page, locale)

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: alternatesFor(page),
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: copy.title,
      description: copy.description,
      url: canonical,
      locale,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [OG_IMAGE.url],
    },
  }
}
