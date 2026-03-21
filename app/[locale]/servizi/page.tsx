import { getTranslations } from 'next-intl/server'
import { FaRobot, FaCogs, FaWhatsapp, FaLayerGroup, FaGlobe, FaPaintBrush } from 'react-icons/fa'

export default async function ServiziPage() {
  const t = await getTranslations('servizi')

  const SERVICES = [
    {
      icon: FaRobot,
      title: t('s1title'),
      tagline: t('s1tagline'),
      benefit: t('s1benefit'),
      details: [t('s1d1'), t('s1d2'), t('s1d3'), t('s1d4')],
      result: t('s1result'),
    },
    {
      icon: FaCogs,
      title: t('s2title'),
      tagline: t('s2tagline'),
      benefit: t('s2benefit'),
      details: [t('s2d1'), t('s2d2'), t('s2d3'), t('s2d4')],
      result: t('s2result'),
    },
    {
      icon: FaWhatsapp,
      title: t('s3title'),
      tagline: t('s3tagline'),
      benefit: t('s3benefit'),
      details: [t('s3d1'), t('s3d2'), t('s3d3'), t('s3d4')],
      result: t('s3result'),
    },
    {
      icon: FaLayerGroup,
      title: t('s4title'),
      tagline: t('s4tagline'),
      benefit: t('s4benefit'),
      details: [t('s4d1'), t('s4d2'), t('s4d3'), t('s4d4')],
      result: t('s4result'),
    },
    {
      icon: FaGlobe,
      title: t('s5title'),
      tagline: t('s5tagline'),
      benefit: t('s5benefit'),
      details: [t('s5d1'), t('s5d2'), t('s5d3'), t('s5d4')],
      result: t('s5result'),
    },
    {
      icon: FaPaintBrush,
      title: t('s6title'),
      tagline: t('s6tagline'),
      benefit: t('s6benefit'),
      details: [t('s6d1'), t('s6d2'), t('s6d3'), t('s6d4')],
      result: t('s6result'),
    },
  ]

  return (
    <main className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('heroLabel')}</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-6 max-w-3xl leading-tight">
            {t('heroTitle1')}<br />
            <span className="text-[#FF4D00]">{t('heroTitle2')}</span>
          </h1>
          <p className="text-xl text-[#0a0a0a]/60 dark:text-white/60 max-w-xl">
            {t('heroSubtitle')}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`p-8 md:p-10 rounded-2xl border border-black/10 dark:border-white/10 hover:border-[#FF4D00]/30 transition-all ${i % 2 === 0 ? 'bg-black/5 dark:bg-white/5' : 'bg-[#070707] dark:bg-[#050505]'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#FF4D00]/10 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-[#FF4D00]" />
                    </div>
                    <h2 className={`text-2xl font-black ${i % 2 === 0 ? 'text-[#0a0a0a] dark:text-white' : 'text-white'}`}>{s.title}</h2>
                  </div>
                  <p className="text-[#FF4D00] font-semibold text-lg mb-3">{s.tagline}</p>
                  <p className={`text-base leading-relaxed mb-4 ${i % 2 === 0 ? 'text-[#0a0a0a]/60 dark:text-white/60' : 'text-white/60'}`}>{s.benefit}</p>
                  <div className="text-sm font-semibold px-4 py-3 rounded-xl border border-[#FF4D00]/20 bg-[#FF4D00]/5 text-[#FF4D00]">
                    → {s.result}
                  </div>
                </div>
                <div>
                  <ul className="space-y-3 mb-7">
                    {s.details.map((d) => (
                      <li key={d} className={`flex items-start gap-3 text-sm ${i % 2 === 0 ? 'text-[#0a0a0a]/70 dark:text-white/70' : 'text-white/70'}`}>
                        <span className="text-[#FF4D00] mt-0.5 flex-shrink-0">✓</span>
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
                    {t('serviceBtn')}
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
            {t('ctaTitle1')}<br /><span className="text-[#FF4D00]">{t('ctaTitle2')}</span>
          </h2>
          <p className="text-white/60 mb-8">
            {t('ctaDesc')}
          </p>
          <a
            href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20una%20consulenza%20gratuita%20per%20capire%20cosa%20automatizzare."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm min-h-[44px] inline-flex"
          >
            {t('ctaBtn')}
          </a>
        </div>
      </section>

    </main>
  )
}
