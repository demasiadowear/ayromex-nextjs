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
  | 'prodotti'
  | 'servizi'
  | 'chiSiamo'
  | 'journal'
  | 'contatti'
  | 'privacy'
  | 'terms'
  | 'whatsappApi'

export const LOCALES: readonly Locale[] = ['it', 'en', 'ro'] as const
export const DEFAULT_LOCALE: Locale = 'it'

export const SITE_URL = 'https://www.ayromex.com'
export const SITE_NAME = 'AYROMEX'

// Open Graph images are generated at build time via the file
// convention: app/opengraph-image.tsx (brand, 1200x630) plus a
// dedicated app/[locale]/prodotti/opengraph-image.tsx. The root
// file does NOT cascade into the [locale] segment (verified on the
// built output), so pageMetadata() references the brand image
// explicitly; on /prodotti the segment's own file-based image
// takes priority over this config value.
export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'AYROMEX — AI systems that automate business operations',
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
      title: 'AYROMEX — Automazione AI per PMI italiane e gaming ADM',
      description:
        'AYROMEX, Meta Tech Provider per WhatsApp Business Platform, costruisce assistenti WhatsApp su API ufficiali, voice agents e automazioni AI per PMI italiane e operatori gaming ADM.',
    },
    en: {
      title: 'AYROMEX — AI automation for Italian SMEs and ADM gaming',
      description:
        'AYROMEX, Meta Tech Provider for the WhatsApp Business Platform, builds WhatsApp assistants on official APIs, voice agents and AI automation for Italian SMEs and ADM gaming operators.',
    },
    ro: {
      title:
        'AYROMEX — Automatizare AI pentru IMM-uri italiene și gaming ADM',
      description:
        'AYROMEX, Meta Tech Provider pentru WhatsApp Business Platform, construiește asistenți WhatsApp pe API-uri oficiale, voice agents și automatizări AI pentru IMM-uri și operatori de gaming ADM.',
    },
  },
  prodotti: {
    it: {
      title: 'Prodotti — AyroDesk24, AyroHub, AyroStay | AYROMEX',
      description:
        'I tre prodotti AI di AYROMEX: AyroDesk24 (receptionist WhatsApp per PMI), AyroHub (voice + WhatsApp AI per concessionari gaming) e AyroStay (ospitalità automatizzata).',
    },
    en: {
      title: 'Products — AyroDesk24, AyroHub, AyroStay | AYROMEX',
      description:
        'The three AYROMEX AI products: AyroDesk24 (WhatsApp receptionist for SMEs), AyroHub (voice + WhatsApp AI for gaming operators) and AyroStay (automated hospitality).',
    },
    ro: {
      title: 'Produse — AyroDesk24, AyroHub, AyroStay | AYROMEX',
      description:
        'Cele trei produse AI AYROMEX: AyroDesk24 (recepționer WhatsApp pentru IMM-uri), AyroHub (voice + WhatsApp AI pentru operatori de gaming) și AyroStay (ospitalitate automatizată).',
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
  contatti: {
    it: {
      title: 'Contatti — AYROMEX',
      description:
        'Parla con AYROMEX: WhatsApp diretto, email o form. Rispondiamo entro 24 ore. Consulenza gratuita per capire cosa automatizzare nel tuo business.',
    },
    en: {
      title: 'Contact — AYROMEX',
      description:
        'Talk to AYROMEX: direct WhatsApp, email or form. We reply within 24 hours. Free consultation to understand what to automate in your business.',
    },
    ro: {
      title: 'Contact — AYROMEX',
      description:
        'Vorbește cu AYROMEX: WhatsApp direct, email sau formular. Răspundem în 24 de ore. Consultanță gratuită pentru a înțelege ce poți automatiza.',
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
  whatsappApi: {
    it: {
      title: 'WhatsApp Business API ufficiale Italia | AYROMEX',
      description:
        'AYROMEX è Tech Provider approvato da Meta: WhatsApp Business API ufficiale per PMI italiane e gaming ADM. Zero rischio ban, spunta verde, template approvati, già in produzione.',
    },
    en: {
      title: 'Official WhatsApp Business API in Italy | AYROMEX',
      description:
        'AYROMEX is a Meta-approved Tech Provider: official WhatsApp Business API for Italian SMEs and ADM gaming. No ban risk, green checkmark, approved templates, live in production.',
    },
    ro: {
      title: 'WhatsApp Business API oficial în Italia | AYROMEX',
      description:
        'AYROMEX este Tech Provider aprobat de Meta: WhatsApp Business API oficial pentru IMM-uri și gaming ADM. Zero risc de ban, bifă verde, template-uri aprobate, deja în producție.',
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
    prodotti: '/prodotti',
    servizi: '/servizi',
    chiSiamo: '/chi-siamo',
    journal: '/journal',
    contatti: '/contatti',
    privacy: '/privacy',
    terms: '/terms',
    whatsappApi: '/whatsapp-business-api',
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

  // /prodotti ha una OG image dedicata generata dal file convention
  // del suo segmento; le immagini config-based qui sotto vincono
  // sul file (verificato sull'output buildato), quindi puntiamo
  // esplicitamente alla route del segmento.
  const ogImage =
    page === 'prodotti'
      ? {
          url: `${canonical}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: 'AYROMEX Products — AyroDesk24, AyroHub, AyroStay',
        }
      : OG_IMAGE

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
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: [ogImage.url],
    },
  }
}
