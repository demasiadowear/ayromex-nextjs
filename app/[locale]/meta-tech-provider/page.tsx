import type { Metadata } from 'next'
import MtpContent from '@/components/redesign/MtpContent'
import { serviceJsonLd } from '@/lib/jsonld'
import { pageMetadata, pagePath, SEO, SITE_URL, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('metaTechProvider', locale as Locale)
}

/**
 * /meta-tech-provider — approfondimento certificazione Meta Tech
 * Provider / WhatsApp Business API ufficiale. Contenuto client in
 * MtpContent; qui metadata + JSON-LD Service.
 */
export default async function MetaTechProviderPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const copy = SEO.metaTechProvider[locale as Locale]

  const jsonLd = serviceJsonLd({
    name: copy.title,
    description: copy.description,
    url: `${SITE_URL}${pagePath('metaTechProvider', locale as Locale)}`,
    locale,
  })

  return (
    <main id="main" className="overflow-x-hidden pt-20 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MtpContent />
    </main>
  )
}
