/**
 * AYROMEX — single source of truth for the product ecosystem.
 *
 * Every component that lists, links to, or describes a product
 * MUST read from this file. Locale strings (name, tagline, bullets,
 * pricing, CTA label) live in messages/{it,en,ro}.json under the
 * `productsSection.<id>` namespace keyed by `i18nKey`.
 *
 * Portal URLs are the canonical AYROMEX subdomains. If a working
 * production URL differs from the canonical one (e.g. AyroHub today
 * answers on app.ayromex.com instead of ayrohub.ayromex.com), keep
 * the working URL here and document the difference inline.
 */

export type ProductId = 'ayrodesk24' | 'ayrohub' | 'ayrostay'

export interface Product {
  /** Stable identifier — used for analytics, hover events, data attrs. */
  id: ProductId
  /** Key prefix under `productsSection.*` in messages/*.json. */
  i18nKey: ProductId
  /** Non-localized brand display name (e.g. "AyroDesk24"). */
  displayName: string
  /** Canonical product subdomain (or current working URL). */
  portalUrl: string
  /**
   * Visual accent role on the product card.
   * - 'orange' = AYROMEX brand orange (primary)
   * - 'blue'   = Electric Blue — reserved for technical/data accents
   * All three products use 'orange' to remain visually equal; the
   * 'blue' option exists for future ecosystem differentiation.
   */
  accent: 'orange' | 'blue'
}

export const PRODUCTS: readonly Product[] = [
  {
    id: 'ayrodesk24',
    i18nKey: 'ayrodesk24',
    displayName: 'AyroDesk24',
    // Canonical and live.
    portalUrl: 'https://ayrodesk24.ayromex.com',
    accent: 'orange',
  },
  {
    id: 'ayrohub',
    i18nKey: 'ayrohub',
    displayName: 'AyroHub',
    // Working production URL is app.ayromex.com. The canonical
    // subdomain ayrohub.ayromex.com is not yet wired to the live
    // app — switch this string once DNS + Vercel project are set.
    portalUrl: 'https://app.ayromex.com',
    accent: 'orange',
  },
  {
    id: 'ayrostay',
    i18nKey: 'ayrostay',
    displayName: 'AyroStay',
    // Canonical subdomain. The Vercel preview lives at
    // ayrostay.vercel.app; DNS cutover to ayrostay.ayromex.com
    // is in progress — keep this URL once the subdomain is active.
    portalUrl: 'https://ayrostay.ayromex.com',
    accent: 'orange',
  },
] as const

/** Lookup helper used by Footer, Navbar, etc. */
export function getProduct(id: ProductId): Product {
  const found = PRODUCTS.find((p) => p.id === id)
  if (!found) {
    throw new Error(`Unknown product id: ${id}`)
  }
  return found
}
