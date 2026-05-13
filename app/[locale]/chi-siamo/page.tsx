import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { FaCheck, FaArrowRight } from 'react-icons/fa'
import { whatsappLink } from '@/lib/contact'
import { pageMetadata, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('chiSiamo', locale as Locale)
}

export default async function ChiSiamoPage() {
  const t = await getTranslations('chiSiamoPage')

  const STEPS = [1, 2, 3, 4, 5].map((n) => ({
    n: String(n).padStart(2, '0'),
    title: t(`step${n}title`),
    desc: t(`step${n}desc`),
  }))

  const SECTORS = [1, 2, 3, 4, 5, 6].map((n) => ({
    name: t(`s${n}name`),
    desc: t(`s${n}desc`),
  }))

  const VALUES = [1, 2, 3, 4].map((n) => ({
    title: t(`v${n}title`),
    desc: t(`v${n}desc`),
  }))

  const STATS = [1, 2, 3, 4].map((n) => ({
    n: t(`stat${n}n`),
    label: t(`stat${n}label`),
  }))

  return (
    <main id="main" className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">{t('eyebrow')}</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mt-4 mb-8 max-w-4xl leading-tight">
            {t('title1')}<br />
            <span className="text-ay-accent">{t('title2')}</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
            {t('desc')}
          </p>
          <a href="#contatti" className="btn-primary px-7 py-3.5 text-sm min-h-[44px] inline-flex">
            {t('mainCta')}
            <FaArrowRight className="ml-2 w-3 h-3" />
          </a>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 md:px-12 bg-ay-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">{t('missionEyebrow')}</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-4 mb-6">
              {t('missionTitle1')}<br />
              <span className="text-ay-accent">{t('missionTitle2')}</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('missionDesc')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
                <p className="text-4xl font-black text-ay-accent mb-1">{s.n}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">{t('howEyebrow')}</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-4 mb-16 max-w-xl">
            {t('howTitle1')}<br />{t('howTitle2')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-ay-accent/30 transition-all">
                <span className="text-ay-accent font-black text-3xl block mb-3">{s.n}</span>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-20 px-6 md:px-12 bg-ay-surface">
        <div className="max-w-7xl mx-auto">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">{t('sectorsEyebrow')}</span>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mt-4 mb-12">
            {t('sectorsTitle1')}<br /><span className="text-ay-accent">{t('sectorsTitle2')}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {SECTORS.map((s) => (
              <div key={s.name} className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-ay-accent/30 transition-all">
                <h3 className="text-white font-bold mb-1">{s.name}</h3>
                <p className="text-white/50 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">{t('valuesEyebrow')}</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-4 mb-12">
            {t('valuesTitle1')}<br /><span className="text-ay-accent">{t('valuesTitle2')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-white/10 bg-white/5 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-ay-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaCheck className="w-3 h-3 text-ay-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{v.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contatti" className="py-24 px-6 md:px-12 bg-ay-surface text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            {t('ctaTitle1')}<br /><span className="text-ay-accent">{t('ctaTitle2')}</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            {t('ctaDesc')}
          </p>
          <a
            href={whatsappLink('business')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm min-h-[44px] inline-flex"
          >
            {t('ctaButton')}
          </a>
        </div>
      </section>

    </main>
  )
}
