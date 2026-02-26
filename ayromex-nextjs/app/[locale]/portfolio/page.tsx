import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Link } from '@/i18n/navigation'
import { HiArrowRight } from 'react-icons/hi2'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - AYROMEX | Lavori di Branding e Design',
  description:
    'Guarda i lavori di AYROMEX: identità visive, social design, materiali stampa e presentazioni per attività locali a Bari e in Puglia.',
}

const projectColors = [
  'from-orange-500/20 to-orange-600/5',
  'from-blue-500/15 to-blue-600/5',
  'from-emerald-500/15 to-emerald-600/5',
  'from-pink-500/15 to-pink-600/5',
  'from-yellow-500/15 to-yellow-600/5',
  'from-violet-500/15 to-violet-600/5',
]

type Project = {
  title: string
  category: string
  tags: string
  desc: string
  results: string[]
}

export default async function PortfolioPage() {
  const t = await getTranslations('portfolio')
  const projects = t.raw('projects') as unknown as Project[]

  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-sm text-orange-400 font-semibold">{t('hero_label')}</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
            {t('hero_h1')}
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl text-lg">
            {t('hero_sub')}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 space-y-6">
          {projects.map((p, i) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                <div className={`md:col-span-2 aspect-[4/3] md:aspect-auto bg-gradient-to-br ${projectColors[i] ?? projectColors[0]} flex items-center justify-center min-h-[240px]`}>
                  <span className="text-white/20 text-sm font-display">{t('placeholder')}</span>
                </div>
                <div className="md:col-span-3 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-orange-500/15 text-orange-300 font-medium">
                      {p.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-display font-bold">{p.title}</h2>
                  <p className="mt-2 text-sm text-white/50">{p.tags}</p>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{p.desc}</p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">{t('results_label')}</h3>
                    <ul className="space-y-1">
                      {p.results.map((r) => (
                        <li key={r} className="text-xs text-white/50 flex gap-2">
                          <span className="text-orange-400">→</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            {t('cta_h2')}
          </h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
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
