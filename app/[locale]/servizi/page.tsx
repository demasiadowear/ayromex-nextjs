import { getTranslations } from 'next-intl/server'
import { FaRobot, FaCogs, FaWhatsapp, FaLayerGroup, FaGlobe } from 'react-icons/fa'

const ICONS = [FaRobot, FaCogs, FaWhatsapp, FaLayerGroup, FaGlobe]

export default async function ServiziPage() {
  const t = await getTranslations('serviziPage')

  const SERVICES = [1, 2, 3, 4, 5].map((n, i) => ({
    icon: ICONS[i],
    title: t(`s${n}title`),
    tagline: t(`s${n}tagline`),
    benefit: t(`s${n}benefit`),
    details: [t(`s${n}d1`), t(`s${n}d2`), t(`s${n}d3`), t(`s${n}d4`)],
    result: t(`s${n}result`),
  }))

  return (
    <main className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">{t('label')}</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-6 max-w-3xl leading-tight">
            {t('title1')}<br />
            <span className="text-[#FF6B00]">{t('title2')}</span>
          </h1>
          <p className="text-xl text-[#0a0a0a]/60 dark:text-white/60 max-w-xl">
            {t('desc')}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`p-8 md:p-10 rounded-2xl border border-black/10 dark:border-white/10 hover:border-[#FF6B00]/30 transition-all ${i % 2 === 0 ? 'bg-black/5 dark:bg-white/5' : 'bg-[#070707] dark:bg-[#050505]'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-[#FF6B00]" />
                    </div>
                    <h2 className={`text-2xl font-black ${i % 2 === 0 ? 'text-[#0a0a0a] dark:text-white' : 'text-white'}`}>{s.title}</h2>
                  </div>
                  <p className="text-[#FF6B00] font-semibold text-lg mb-3">{s.tagline}</p>
                  <p className={`text-base leading-relaxed mb-4 ${i % 2 === 0 ? 'text-[#0a0a0a]/60 dark:text-white/60' : 'text-white/60'}`}>{s.benefit}</p>
                  <div className="text-sm font-semibold px-4 py-3 rounded-xl border border-[#FF6B00]/20 bg-[#FF6B00]/5 text-[#FF6B00]">
                    → {s.result}
                  </div>
                </div>
                <div>
                  <ul className="space-y-3 mb-7">
                    {s.details.map((d) => (
                      <li key={d} className={`flex items-start gap-3 text-sm ${i % 2 === 0 ? 'text-[#0a0a0a]/70 dark:text-white/70' : 'text-white/70'}`}>
                        <span className="text-[#FF6B00] mt-0.5 flex-shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20informazioni%20sui%20vostri%20servizi."
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
      <section className="py-20 px-6 md:px-12 bg-[#070707] dark:bg-[#050505] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-4">
            {t('ctaTitle1')}<br /><span className="text-[#FF6B00]">{t('ctaTitle2')}</span>
          </h2>
          <p className="text-white/60 mb-8">{t('ctaDesc')}</p>
          <a
            href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20una%20consulenza%20gratuita%20per%20capire%20cosa%20automatizzare."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm min-h-[44px] inline-flex"
          >
            {t('ctaFinal')}
          </a>
        </div>
      </section>

    </main>
  )
}
