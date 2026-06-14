import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Next.js internals and the middleware-resolved infrastructure
        // routes don't serve user-facing content; keep crawl budget
        // focused on real pages.
        disallow: ['/_next/', '/_vercel/', '/api/'],
      },
    ],
    // Two sitemaps under the same domain: the marketing site's own, and the
    // AYROSEO blog mounted at /blog (served via rewrite, its own sitemap).
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/blog/sitemap.xml`],
    host: SITE_URL,
  }
}
