import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Link } from '@/i18n/navigation'
import {
  HiArrowRight,
  HiOutlineSwatch,
  HiOutlineCamera,
  HiOutlinePrinter,
  HiOutlinePresentationChartBar,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineCheckCircle,
} from 'react-icons/hi2'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servizi - AYROMEX | Branding, Social Design, Stampa',
  description:
    'Scopri i servizi AYROMEX: branding e identità visiva, social design, materiali stampa, presentazioni. Per ristoranti, hotel e attività locali a Bari.',
}

type ServiceItem = {
  id: string
  title: string
  subtitle: string
  desc: string
  deliverables: string[]
  ideal: string
  productUrl?: string
}

const iconMap: Record<string, React.ReactNode> = {
  branding: <HiOutlineSwatch className="w-7 h-7" />,
  social: <HiOutlineCamera className="w-7 h-7" />,
  stampa: <HiOutlinePrinter className="w-7 h-7" />,
  pitch: <HiOutlinePresentationChartBar className="w-7 h-7" />,
  visual: <HiOutlineSparkles className="w-7 h-7" />,
  automazioni: <HiOutlineBolt className="w-7 h-7" />,
}

export default async function ServiziPage() {
  const t = await getTranslations('servizi')
  const items = t.raw('items') as unknown as ServiceItem[]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#07090d] text-slate-900 dark:text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-sm text-orange-500 dark:text-orange-400 font-semibold">{t('hero_label')}</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
            {t('hero_h1')}
          </h1>
          <p className="mt-4 text-slate-600 dark:text-white/60 max-w-2xl text-lg">
            {t('hero_sub')}
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 space-y-8">
          {items.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-8 md:p-10 scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-orange-100 dark:bg-orange-500/15 text-orange-600 dark:text-orange-300 flex items-center justify-center">
                      {iconMap[s.id]}
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold">{s.title}</h2>
                      <div className="text-sm text-orange-500 dark:text-orange-400">{s.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-white/60 leading-relaxed">{s.desc}</p>
                  <div className="mt-4 text-sm text-slate-500 dark:text-white/50">
                    <strong className="text-slate-700 dark:text-white/70">{t('ideal_label')}</strong> {s.ideal}
                  </div>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white/80 mb-3">{t('deliverables_title')}</h3>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-slate-600 dark:text-white/60">
                        <HiOutlineCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-400 mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              {s.productUrl ? (
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                  <div className="rounded-xl border border-orange-300 dark:border-orange-500/20 bg-orange-50 dark:bg-orange-500/5 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-orange-500 dark:text-orange-400 font-semibold uppercase tracking-widest mb-1">
                        {t('product_badge')}
                      </div>
                      <div className="font-display font-bold text-lg text-slate-900 dark:text-white">StudioPilot</div>
                      <p className="text-sm text-slate-500 dark:text-white/50 mt-0.5">
                        {t('product_tagline')}
                      </p>
                    </div>
                    <a
                      href={s.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
                    >
                      {t('product_cta')}
                      <HiArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5">
                  <Link
                    href="/contatti"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
                  >
                    {t('quote_cta')}
                    <HiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            {t('cta_h2')}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-white/60 max-w-lg mx-auto">
            {t('cta_sub')}
          </p>
          <Link
            href="/contatti"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
          >
            {t('cta_btn')}
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
