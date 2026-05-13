import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { pageMetadata, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('terms', locale as Locale)
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-black uppercase tracking-widest text-ay-accent mb-4">{title}</h2>
      <div className="text-white/70 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}

export default async function TermsPage() {
  const t = await getTranslations('termsPage')

  return (
    <main id="main" className="overflow-x-hidden pt-28 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">{t('eyebrow')}</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-3 mb-4">
            {t('h1')}
          </h1>
          <p className="text-white/50 text-sm">
            {t('lastUpdated')}
          </p>
        </div>

        <Section title={t('s1title')}>
          <p><strong className="text-white">{t('s1company')}</strong></p>
          <p>{t('s1vat')}</p>
          <p>{t('s1address')}</p>
          <p>{t('s1emailLabel')} <a href="mailto:legal@ayromex.com" className="text-ay-accent hover:underline">legal@ayromex.com</a></p>
        </Section>

        <Section title={t('s2title')}>
          <p>{t('s2intro')}</p>
          <ul className="space-y-1 list-none mt-2">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span><span><strong className="text-white">{t('s2i1label')}</strong> {t('s2i1text')}</span></li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span><span><strong className="text-white">{t('s2i2label')}</strong> {t('s2i2text')}</span></li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s2i3')}</li>
          </ul>
        </Section>

        <Section title={t('s3title')}>
          <p>{t('s3body')}</p>
        </Section>

        <Section title={t('s4title')}>
          <p>{t('s4body1')}</p>
          <p>{t('s4body2')}</p>
        </Section>

        <Section title={t('s5title')}>
          <p>{t('s5body')}</p>
        </Section>

        <Section title={t('s6title')}>
          <p>
            {t('s6body1Part1')}{' '}
            <strong className="text-white">{t('s6body1Highlight')}</strong>
            {t('s6body1Part2')}
          </p>
          <p>{t('s6body2')}</p>
        </Section>

        <Section title={t('s7title')}>
          <p>{t('s7body1')}</p>
          <p>
            {t('s7body2Part1')}{' '}
            <strong className="text-white">{t('s7body2Highlight')}</strong>
            {t('s7body2Part2')}
          </p>
        </Section>

        <Section title={t('s8title')}>
          <p>{t('s8intro')}</p>
          <p>
            <a href="mailto:legal@ayromex.com" className="text-ay-accent hover:underline">legal@ayromex.com</a>
          </p>
        </Section>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            {t('footerCompany')}<br />
            {t('footerContact')} <a href="mailto:legal@ayromex.com" className="text-ay-accent hover:underline">legal@ayromex.com</a>
          </p>
        </div>

      </div>
    </main>
  )
}
