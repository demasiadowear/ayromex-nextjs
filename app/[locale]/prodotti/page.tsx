import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ProductsSection from '@/components/sections/ProductsSection'
import AyroDesk24DeepDiveSection from '@/components/sections/AyroDesk24DeepDiveSection'
import AyroHubDeepDiveSection from '@/components/sections/AyroHubDeepDiveSection'
import AyroStayDeepDiveSection from '@/components/sections/AyroStayDeepDiveSection'
import { PRODUCTS } from '@/lib/products'
import { productJsonLd } from '@/lib/jsonld'
import { pageMetadata, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('prodotti', locale as Locale)
}

/**
 * /prodotti — vetrina dell'ecosistema. Monta la ProductsSection
 * (overview a 3 card, id="prodotti") e i tre deep dive già
 * tradotti in it/en/ro. I wrapper con id piatto (#ayrodesk24,
 * #ayrohub, #ayrostay) sono le àncore linkate dai drawer della
 * home e dai redirect legacy — i deep dive internamente usano
 * id="{productId}-deep", non toccarli.
 */
export default async function ProdottiPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const jsonLd = await Promise.all(
    PRODUCTS.map(async (p) => {
      const tDeep = await getTranslations(`${p.id}DeepDive`)
      return productJsonLd({
        name: p.displayName,
        description: tDeep('focus'),
        url: p.portalUrl,
        pageAnchor: `#${p.id}`,
        locale,
      })
    }),
  )

  return (
    <main id="main" className="overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Overview — 3 card prodotto */}
      <ProductsSection />

      {/* Deep dive per prodotto, con àncora pubblica */}
      <div id="ayrodesk24" className="scroll-mt-24">
        <AyroDesk24DeepDiveSection />
      </div>
      <div id="ayrohub" className="scroll-mt-24">
        <AyroHubDeepDiveSection />
      </div>
      <div id="ayrostay" className="scroll-mt-24">
        <AyroStayDeepDiveSection />
      </div>
    </main>
  )
}
