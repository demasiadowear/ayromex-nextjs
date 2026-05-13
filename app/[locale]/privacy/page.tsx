import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { pageMetadata, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('privacy', locale as Locale)
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

export default async function PrivacyPage() {
  const t = await getTranslations('privacyPage')

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
          <p>{t('s1emailLabel')} <a href="mailto:privacy@ayromex.com" className="text-ay-accent hover:underline">privacy@ayromex.com</a></p>
        </Section>

        <Section title={t('s2title')}>
          <ul className="space-y-1 list-none">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span><span><strong className="text-white">{t('s2i1label')}</strong> {t('s2i1text')}</span></li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span><span><strong className="text-white">{t('s2i2label')}</strong> {t('s2i2text')}</span></li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span><span><strong className="text-white">{t('s2i3label')}</strong> {t('s2i3text')}</span></li>
          </ul>
        </Section>

        <Section title={t('s3title')}>
          <ul className="space-y-1 list-none">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s3i1')}</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s3i2')}</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s3i3')}</li>
          </ul>
        </Section>

        <Section title={t('s4title')}>
          <ul className="space-y-1 list-none">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s4i1')}</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s4i2')}</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s4i3')}</li>
          </ul>
        </Section>

        <Section title={t('s5title')}>
          <p>
            {t('s5bodyPart1')}{' '}
            <strong className="text-white">{t('s5bodyHighlight')}</strong>{' '}
            {t('s5bodyPart2')}
          </p>
        </Section>

        <Section title={t('s6title')}>
          <p>{t('s6intro')}</p>
          <ul className="space-y-1 list-none mt-2">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s6i1')}</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s6i2')}</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s6i3')}</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s6i4')}</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>{t('s6i5')}</li>
          </ul>
          <p className="mt-3">{t('s6contact')} <a href="mailto:privacy@ayromex.com" className="text-ay-accent hover:underline">privacy@ayromex.com</a></p>
        </Section>

        <Section title={t('s7title')}>
          <p>{t('s7body')}</p>
        </Section>

        <Section title={t('s8title')}>
          <p>{t('s8body1')}</p>
          <p>{t('s8body2')}</p>
        </Section>

        <Section title={t('s9title')}>
          <ul className="space-y-1 list-none">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>
              <span>
                <strong className="text-white">{t('s9roLabel')}</strong>{' '}
                {t('s9roBody')}{' '}
                <a href="https://www.anspdcp.ro" target="_blank" rel="noopener noreferrer" className="text-ay-accent hover:underline">anspdcp.ro</a>
              </span>
            </li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>
              <span>
                <strong className="text-white">{t('s9itLabel')}</strong>{' '}
                {t('s9itBody')}{' '}
                <a href="https://www.gpdp.it" target="_blank" rel="noopener noreferrer" className="text-ay-accent hover:underline">gpdp.it</a>
              </span>
            </li>
          </ul>
        </Section>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            {t('footerCompany')}<br />
            {t('footerContact')} <a href="mailto:privacy@ayromex.com" className="text-ay-accent hover:underline">privacy@ayromex.com</a>
          </p>
        </div>

      </div>
    </main>
  )
}
