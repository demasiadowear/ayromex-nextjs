import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Link } from '@/i18n/navigation'
import { HiArrowRight } from 'react-icons/hi2'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Siamo - AYROMEX | Agenzia Creativa a Bari',
  description:
    "Scopri chi c'è dietro AYROMEX: agenzia creativa specializzata in branding e design per attività locali a Bari e in Puglia.",
}

type Stat = { value: string; label: string }
type Value = { title: string; desc: string }

export default async function ChiSiamoPage() {
  const t = await getTranslations('chiSiamo')
  const stats = t.raw('stats') as unknown as Stat[]
  const values = t.raw('values') as unknown as Value[]
  const percheItems = t.raw('perche_items') as unknown as string[]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#07090d] text-slate-900 dark:text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-sm text-orange-500 dark:text-orange-400 font-semibold">{t('hero_label')}</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight max-w-3xl">
            {t('hero_h1')}
          </h1>
          <p className="mt-5 text-slate-600 dark:text-white/60 max-w-2xl text-lg leading-relaxed">
            {t('hero_sub')}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-8">
              <h2 className="text-xl font-display font-bold mb-4">{t('mission_h2')}</h2>
              <p className="text-slate-600 dark:text-white/60 leading-relaxed">{t('mission_p1')}</p>
              <p className="mt-4 text-slate-600 dark:text-white/60 leading-relaxed">{t('mission_p2')}</p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-8">
              <h2 className="text-xl font-display font-bold mb-4">{t('perche_h2')}</h2>
              <ul className="space-y-3 text-slate-600 dark:text-white/60">
                {percheItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-orange-500 dark:text-orange-400 font-bold shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-orange-500 dark:text-orange-400">{s.value}</div>
                <div className="mt-1 text-sm text-slate-500 dark:text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center mb-14">
            <div className="text-sm text-orange-500 dark:text-orange-400 font-semibold">{t('values_label')}</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight">
              {t('values_h2')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-6">
                <h3 className="font-display font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-white/60 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold">{t('cta_h2')}</h2>
          <p className="mt-3 text-slate-600 dark:text-white/60 max-w-lg mx-auto">{t('cta_sub')}</p>
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
