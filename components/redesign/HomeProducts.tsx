'use client'

import { useTranslations } from 'next-intl'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import SectionTransition from '@/components/sections/SectionTransition'

/**
 * Prodotti — AyroDesk24 in evidenza (PMI), AyroHub (gaming ADM).
 * Immagini placeholder swappabili 1:1 (stesso path, ratio 4:3).
 */
export default function HomeProducts() {
  const t = useTranslations('homeProducts')

  const products = [
    {
      key: 'desk' as const,
      featured: true,
      img: '/images/placeholders/salone.svg',
      href: '/prodotti#ayrodesk24',
      badge: true,
    },
    {
      key: 'hub' as const,
      featured: false,
      img: '/images/placeholders/negozio.svg',
      href: '/prodotti#ayrohub',
      badge: false,
    },
  ]

  return (
    <section
      id="prodotti-home"
      className="bg-ay-cream/50 border-y border-ay-border"
      aria-labelledby="products-heading"
    >
      <SectionTransition
        id="prodotti-home-inner"
        variant="fade-up"
        stagger={0.1}
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24"
      >
        <div className="max-w-2xl">
          <span className="font-body text-[13px] font-semibold text-ay-accent block mb-3">
            {t('eyebrow')}
          </span>
          <h2
            id="products-heading"
            className="font-display font-extrabold text-ay-text tracking-[-0.02em] leading-[1.12] [font-size:clamp(28px,6vw,34px)] md:[font-size:clamp(34px,3vw,46px)]"
          >
            {t('title')}
          </h2>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map(({ key, featured, img, href, badge }) => (
            <Card
              key={key}
              className={`overflow-hidden border-ay-border bg-ay-surface shadow-none transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                featured ? 'ring-1 ring-ay-accent/30' : ''
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt=""
                width={400}
                height={295}
                loading="lazy"
                className="w-full h-44 md:h-52 object-cover"
              />
              <CardContent className="p-6 md:p-8">
                <p className="font-body text-[13px] font-semibold text-ay-accent mb-1.5">
                  {t(`${key}.for`)}
                </p>
                <h3 className="font-display font-extrabold text-ay-text text-[24px] md:text-[28px] leading-tight">
                  {t(`${key}.name`)}
                </h3>
                <p className="mt-3 font-body text-[15.5px] leading-relaxed text-ay-text-muted">
                  {t(`${key}.desc`)}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {(['b1', 'b2', 'b3'] as const).map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-body text-[14.5px] text-ay-text">
                      <Check className="w-4 h-4 text-ay-lime shrink-0 mt-0.5" aria-hidden="true" />
                      {t(`${key}.${b}`)}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <Button
                    asChild
                    className="w-fit rounded-full bg-ay-text text-ay-bg hover:bg-ay-accent font-semibold px-6 py-5 transition-colors"
                  >
                    <Link href={href}>
                      {t(`${key}.cta`)}
                      <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                    </Link>
                  </Button>
                  {badge && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src="/brand/logos/primary/tech-light.svg"
                      alt="Meta Tech Provider — Business API Official"
                      width={1036}
                      height={295}
                      loading="lazy"
                      className="h-12 w-auto"
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionTransition>
    </section>
  )
}
