import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { FaRobot, FaCogs, FaWhatsapp, FaLayerGroup, FaGlobe } from 'react-icons/fa'
import { whatsappLink } from '@/lib/contact'
import { pageMetadata, type Locale } from '@/lib/seo'

const ICONS = [FaRobot, FaCogs, FaWhatsapp, FaLayerGroup, FaGlobe]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('servizi', locale as Locale)
}

export default async function ServiziPage() {
  const t = await getTranslations('serviziPage')
  const tw = await getTranslations('serviziWeb')

  // Àncore pubbliche linkate dai drawer 05/06 della home
  // (HubSection → /servizi#automazioni, /servizi#branding).
  const ANCHOR_IDS: (string | undefined)[] = [
    'automazioni',
    undefined,
    undefined,
    undefined,
    'branding',
  ]

  const SERVICES = [1, 2, 3, 4, 5].map((n, i) => ({
    icon: ICONS[i],
    anchorId: ANCHOR_IDS[i],
    title: t(`s${n}title`),
    tagline: t(`s${n}tagline`),
    benefit: t(`s${n}benefit`),
    details: [t(`s${n}d1`), t(`s${n}d2`), t(`s${n}d3`), t(`s${n}d4`)],
    result: t(`s${n}result`),
  }))

  const steps = ['s1', 's2', 's3'] as const

  return (
    <main id="main" className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="surface-hero py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 text-ay-accent text-[13px] font-semibold mb-5">
            <span className="w-6 h-px bg-ay-accent" aria-hidden="true" />
            {t('label')}
          </span>
          <h1 className="font-display font-extrabold tracking-[-0.02em] text-ay-text mt-2 mb-6 max-w-3xl leading-[1.05] [font-size:clamp(38px,9vw,48px)] md:[font-size:clamp(52px,5vw,72px)]">
            {t('title1')}{' '}
            <span className="text-ay-accent">{t('title2')}</span>
          </h1>
          <p className="text-xl text-ay-text-muted max-w-xl leading-relaxed">
            {t('desc')}
          </p>
        </div>
      </section>

      {/* SITI WEB & E-COMMERCE — anima web agency, "prima lo vedi, poi decidi" */}
      <section id="web" className="surface-cream scroll-mt-24 border-y border-ay-border px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 text-ay-accent text-[13px] font-semibold mb-8">
            <span className="w-6 h-px bg-ay-accent" aria-hidden="true" />
            {tw('eyebrow')}
          </span>
          <h2 className="font-display font-extrabold text-ay-text tracking-[-0.025em] leading-[0.98] [font-size:clamp(36px,10vw,54px)] md:[font-size:clamp(54px,6vw,88px)]">
            {tw('promiseLead')}{' '}
            <span className="text-ay-accent">{tw('promiseAccent')}</span>
          </h2>
          <p className="mt-6 md:mt-8 font-body text-[18px] md:text-[21px] leading-relaxed text-ay-text max-w-[680px]">
            {tw('promiseBody')}
          </p>

          <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 list-none">
            {steps.map((s, i) => (
              <li key={s} className="card-lift rounded-2xl border border-ay-border bg-ay-surface p-7">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-ay-accent text-white font-display font-extrabold text-[18px]" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display font-extrabold text-ay-text text-[20px] leading-snug">
                  {tw(`steps.${s}title`)}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-ay-text-muted">
                  {tw(`steps.${s}desc`)}
                </p>
              </li>
            ))}
          </ol>

          <a
            href={whatsappLink('web-quote')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold text-[16px] px-8 py-5 shadow-[0_10px_30px_-8px_rgba(255,106,0,0.6)] transition-all hover:scale-[1.03]"
          >
            {tw('cta')}
          </a>
        </div>
      </section>

      {/* SERVICES — AI, automazioni, branding */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              id={s.anchorId}
              className="card-lift scroll-mt-28 p-8 md:p-10 rounded-2xl border border-ay-border bg-ay-surface"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-ay-accent/10 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-ay-accent" />
                    </div>
                    <h2 className="font-display font-extrabold text-[24px] text-ay-text">{s.title}</h2>
                  </div>
                  <p className="text-ay-accent font-semibold text-lg mb-3">{s.tagline}</p>
                  <p className="text-base leading-relaxed mb-4 text-ay-text-muted">{s.benefit}</p>
                  <div className="text-sm font-semibold px-4 py-3 rounded-xl border border-ay-accent/20 bg-ay-accent/5 text-ay-accent">
                    → {s.result}
                  </div>
                </div>
                <div>
                  <ul className="space-y-3 mb-7">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-ay-text">
                        <span className="text-ay-accent mt-0.5 flex-shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink('services')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 text-xs min-h-[44px] inline-flex"
                  >
                    {t('cta')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="surface-orange text-center px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-white tracking-[-0.02em] leading-[1.05] [font-size:clamp(30px,7vw,40px)] md:[font-size:clamp(40px,4vw,56px)] mb-4">
            {t('ctaTitle1')} <span className="text-white">{t('ctaTitle2')}</span>
          </h2>
          <p className="text-white/85 text-lg mb-8">{t('ctaDesc')}</p>
          <a
            href={whatsappLink('consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-white !text-[#FF6A00] font-semibold text-[16px] px-9 py-5 shadow-[0_16px_44px_-12px_rgba(0,0,0,0.35)] transition-all hover:scale-[1.04]"
          >
            {t('ctaFinal')}
          </a>
        </div>
      </section>

    </main>
  )
}
