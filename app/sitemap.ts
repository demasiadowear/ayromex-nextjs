import type { MetadataRoute } from 'next'
import { LOCALES, SITE_URL, alternatesFor, pagePath, type PageKey } from '@/lib/seo'

interface PageEntry {
  page: PageKey
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
  priority: number
}

const PAGES: PageEntry[] = [
  { page: 'home', changeFrequency: 'weekly', priority: 1.0 },
  { page: 'servizi', changeFrequency: 'monthly', priority: 0.8 },
  { page: 'chiSiamo', changeFrequency: 'monthly', priority: 0.7 },
  { page: 'journal', changeFrequency: 'monthly', priority: 0.6 },
  { page: 'privacy', changeFrequency: 'yearly', priority: 0.3 },
  { page: 'terms', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = []

  for (const { page, changeFrequency, priority } of PAGES) {
    const alternates = alternatesFor(page)
    // Build absolute URLs for the alternates map (Next.js sitemap
    // requires absolute URLs in `languages`).
    const languages = Object.fromEntries(
      Object.entries(alternates).map(([code, path]) => [code, `${SITE_URL}${path}`]),
    )

    for (const locale of LOCALES) {
      entries.push({
        url: `${SITE_URL}${pagePath(page, locale)}`,
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages },
      })
    }
  }

  return entries
}
