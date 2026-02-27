import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy - AYROMEX',
  description: 'Informativa sulla privacy e sui cookie di AYROMEX S.R.L., ai sensi del GDPR.',
  robots: { index: false, follow: false },
}

type S3Item = { title: string; body: string }
type S5Item = { name: string; country: string; role: string; guarantee: string }
type CookieRow = { name: string; provider: string; purpose: string; duration: string; type: string }
type Browser = { name: string; url: string }

export default async function PrivacyPage() {
  const t = await getTranslations('privacy')

  const s2Items = t.raw('s2_items') as string[]
  const s3Items = t.raw('s3_items') as S3Item[]
  const s5Items = t.raw('s5_items') as S5Item[]
  const s6Items = t.raw('s6_items') as string[]
  const s7Cookies = t.raw('s7_cookies') as CookieRow[]
  const s8Browsers = t.raw('s8_browsers') as Browser[]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#07090d] text-slate-900 dark:text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-sm text-orange-500 dark:text-orange-400 font-semibold mb-2">
            Legal
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            {t('title')}
          </h1>
          <p className="mt-3 text-slate-500 dark:text-white/50 text-sm">{t('updated')}</p>
          <p className="mt-4 text-slate-600 dark:text-white/60 leading-relaxed">{t('intro')}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-5 space-y-12">

          {/* S1 — Titolare */}
          <div>
            <h2 className="text-xl font-display font-bold mb-3">{t('s1_title')}</h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed">{t('s1_body')}</p>
          </div>

          {/* S2 — Tipologie dati */}
          <div>
            <h2 className="text-xl font-display font-bold mb-3">{t('s2_title')}</h2>
            <ul className="space-y-2">
              {s2Items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-white/60 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* S3 — Finalità */}
          <div>
            <h2 className="text-xl font-display font-bold mb-4">{t('s3_title')}</h2>
            <div className="space-y-4">
              {s3Items.map((item, i) => (
                <div key={i} className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-5">
                  <div className="font-semibold text-slate-800 dark:text-white/90 mb-1">{item.title}</div>
                  <p className="text-sm text-slate-600 dark:text-white/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* S4 — Conservazione */}
          <div>
            <h2 className="text-xl font-display font-bold mb-3">{t('s4_title')}</h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed">{t('s4_body')}</p>
          </div>

          {/* S5 — Destinatari */}
          <div>
            <h2 className="text-xl font-display font-bold mb-3">{t('s5_title')}</h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-4">{t('s5_intro')}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10">
                    <th className="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-white/80">Provider</th>
                    <th className="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-white/80">Paese</th>
                    <th className="text-left py-2 pr-4 font-semibold text-slate-700 dark:text-white/80">Ruolo</th>
                    <th className="text-left py-2 font-semibold text-slate-700 dark:text-white/80">Garanzie</th>
                  </tr>
                </thead>
                <tbody>
                  {s5Items.map((item, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-white/5">
                      <td className="py-3 pr-4 font-medium text-slate-800 dark:text-white/90">{item.name}</td>
                      <td className="py-3 pr-4 text-slate-600 dark:text-white/60">{item.country}</td>
                      <td className="py-3 pr-4 text-slate-600 dark:text-white/60">{item.role}</td>
                      <td className="py-3 text-slate-600 dark:text-white/60">{item.guarantee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* S6 — Diritti */}
          <div>
            <h2 className="text-xl font-display font-bold mb-3">{t('s6_title')}</h2>
            <p className="text-slate-600 dark:text-white/60 mb-3">{t('s6_intro')}</p>
            <ul className="space-y-2 mb-4">
              {s6Items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-white/60">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="rounded-xl bg-orange-500/10 border border-orange-500/20 p-4 text-sm text-slate-700 dark:text-white/70">
              {t('s6_footer')}
            </div>
          </div>

          {/* S7 — Cookie Policy */}
          <div id={t('s7_anchor')}>
            <div className="text-xs text-orange-500 font-semibold uppercase tracking-widest mb-1">Cookie Policy</div>
            <h2 className="text-xl font-display font-bold mb-3">{t('s7_title')}</h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-4">{t('s7_intro')}</p>

            {/* Zero tracking callout */}
            <div className="mb-6 rounded-xl border border-green-200 dark:border-green-900/40 bg-green-50 dark:bg-green-900/10 p-4">
              <div className="font-semibold text-green-800 dark:text-green-400 text-sm mb-1">
                ✓ {t('s7_no_tracking_title')}
              </div>
              <p className="text-sm text-green-700 dark:text-green-300/80">{t('s7_no_tracking_body')}</p>
            </div>

            {/* Cookie table */}
            <h3 className="font-semibold text-slate-800 dark:text-white/90 mb-3">{t('s7_table_title')}</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-white/10">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-slate-100 dark:bg-white/5">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-white/80">{t('s7_th_name')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-white/80">{t('s7_th_provider')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-white/80">{t('s7_th_purpose')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-white/80">{t('s7_th_duration')}</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700 dark:text-white/80">{t('s7_th_type')}</th>
                  </tr>
                </thead>
                <tbody>
                  {s7Cookies.map((row, i) => (
                    <tr key={i} className="border-t border-slate-200 dark:border-white/10">
                      <td className="py-3 px-4 font-mono text-xs text-orange-600 dark:text-orange-400">{row.name}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-white/60">{row.provider}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-white/60">{row.purpose}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-white/60">{row.duration}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                          {row.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* localStorage note */}
            <div className="mt-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-4">
              <div className="font-semibold text-slate-800 dark:text-white/90 text-sm mb-1">{t('s7_local_title')}</div>
              <p className="text-sm text-slate-600 dark:text-white/60">{t('s7_local_body')}</p>
            </div>
          </div>

          {/* S8 — Gestione consensi */}
          <div>
            <h2 className="text-xl font-display font-bold mb-3">{t('s8_title')}</h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-4">{t('s8_body')}</p>
            <div className="font-semibold text-slate-800 dark:text-white/90 text-sm mb-2">{t('s8_browser_title')}</div>
            <div className="flex flex-wrap gap-2">
              {s8Browsers.map((b) => (
                <a
                  key={b.name}
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition"
                >
                  {b.name} ↗
                </a>
              ))}
            </div>
          </div>

          {/* S9 — Modifiche */}
          <div className="pb-4 border-b border-slate-200 dark:border-white/10">
            <h2 className="text-xl font-display font-bold mb-3">{t('s9_title')}</h2>
            <p className="text-slate-600 dark:text-white/60 leading-relaxed">{t('s9_body')}</p>
          </div>

          {/* Contact block */}
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-6 text-sm text-slate-600 dark:text-white/60">
            <span className="font-semibold text-slate-800 dark:text-white/90">AYROMEX S.R.L.</span>
            {' · '}CUI: RO52014564
            {' · '}Nr. Reg. Com.: J2025044424001
            {' · '}
            <a href="mailto:privacy@ayromex.com" className="text-orange-500 hover:text-orange-400 transition">
              privacy@ayromex.com
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
