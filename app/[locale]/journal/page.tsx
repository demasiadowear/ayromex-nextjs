import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { whatsappLink } from '@/lib/contact'
import { pageMetadata, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('journal', locale as Locale)
}

export default async function JournalPage() {
  const t = await getTranslations('journalPage')

  const ARTICLES = [1, 2, 3, 4].map((n) => ({
    id: n,
    tag: t(`a${n}tag`),
    title: t(`a${n}title`),
    hook: t(`a${n}hook`),
    story: t(`a${n}story`),
    result: t(`a${n}result`),
    cta: t(`a${n}cta`),
  }))

  return (
    <main id="main" className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">{t('eyebrow')}</span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-6 max-w-3xl leading-tight">
            {t('title1')}<br />
            <span className="text-ay-accent">{t('title2')}</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl">
            {t('desc')}
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {ARTICLES.map((a) => (
            <article
              key={a.id}
              className="border-t border-white/10 pt-12"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-ay-accent/10 text-ay-accent mb-4">
                {a.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6 leading-tight">
                {a.title}
              </h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed mb-8 italic">
                &ldquo;{a.hook}&rdquo;
              </p>
              <div className="text-white/65 leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                {a.story}
              </div>
              <div className="p-5 rounded-xl border border-ay-accent/20 bg-ay-accent/5 mb-8">
                <p className="text-ay-accent font-semibold text-sm leading-relaxed">
                  → <strong>{t('resultLabel')}:</strong> {a.result}
                </p>
              </div>
              <a
                href={whatsappLink('journal')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 text-xs min-h-[44px] inline-flex"
              >
                {a.cta} →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 px-6 md:px-12 bg-ay-surface text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
            {t('newsletterTitle1')}<br /><span className="text-ay-accent">{t('newsletterTitle2')}</span>
          </h2>
          <p className="text-white/60 mb-8">
            {t('newsletterDesc')}
          </p>
          <a
            href="https://www.instagram.com/ayromex_srl/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm min-h-[44px] inline-flex"
          >
            {t('newsletterButton')}
          </a>
        </div>
      </section>

    </main>
  )
}
