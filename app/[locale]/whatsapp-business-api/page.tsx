import type { Metadata } from 'next'
import WhatsAppApiContent from '@/components/sections/WhatsAppApiContent'
import { serviceJsonLd } from '@/lib/jsonld'
import { pageMetadata, pagePath, SEO, SITE_URL, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('whatsappApi', locale as Locale)
}

/**
 * /whatsapp-business-api — pagina Meta Tech Provider / WhatsApp
 * Business API ufficiale. Contenuto client in WhatsAppApiContent;
 * qui solo metadata + JSON-LD Service.
 */
export default async function WhatsAppApiPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const copy = SEO.whatsappApi[locale as Locale]

  const jsonLd = serviceJsonLd({
    name: copy.title,
    description: copy.description,
    url: `${SITE_URL}${pagePath('whatsappApi', locale as Locale)}`,
    locale,
  })

  return (
    <main id="main" className="overflow-x-hidden pt-20 pb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhatsAppApiContent />
    </main>
  )
}
