import { getTranslations } from 'next-intl/server'
import { FaCheck, FaArrowRight } from 'react-icons/fa'

export default async function ChiSiamoPage() {
  const t = await getTranslations('chiSiamo')

  const steps = [
    { n: '01', title: t('step1t'), desc: t('step1d') },
    { n: '02', title: t('step2t'), desc: t('step2d') },
    { n: '03', title: t('step3t'), desc: t('step3d') },
    { n: '04', title: t('step4t'), desc: t('step4d') },
    { n: '05', title: t('step5t'), desc: t('step5d') },
  ]

  const sectors = [
    { name: t('sector1n'), desc: t('sector1d') },
    { name: t('sector2n'), desc: t('sector2d') },
    { name: t('sector3n'), desc: t('sector3d') },
    { name: t('sector4n'), desc: t('sector4d') },
    { name: t('sector5n'), desc: t('sector5d') },
    { name: t('sector6n'), desc: t('sector6d') },
  ]

  const values = [
    { title: t('value1t'), desc: t('value1d') },
    { title: t('value2t'), desc: t('value2d') },
    { title: t('value3t'), desc: t('value3d') },
    { title: t('value4t'), desc: t('value4d') },
  ]

  const stats = [
    { n: t('stat1n'), label: t('stat1l') },
    { n: t('stat2n'), label: t('stat2l') },
    { n: t('stat3n'), label: t('stat3l') },
    { n: t('stat4n'), label: t('stat4l') },
  ]

  return (
    <main className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('heroLabel')}</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-8 max-w-4xl leading-tight">
            {t('heroTitle1')}<br />
            <span className="text-[#FF4D00]">{t('heroTitle2')}</span>
          </h1>
          <p className="text-xl text-[#0a0a0a]/60 dark:text-white/60 max-w-2xl leading-relaxed mb-8">
            {t('heroSubtitle')}
          </p>
          <a href="#contatti" className="btn-primary px-7 py-3.5 text-sm min-h-[44px] inline-flex">
            {t('heroCta')}
            <FaArrowRight className="ml-2 w-3 h-3" />
          </a>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 md:px-12 bg-[#070707] dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('missionLabel')}</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-4 mb-6">
              {t('missionTitle1')}<br />
              <span className="text-[#FF4D00]">{t('missionTitle2')}</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              {t('missionDesc')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.n} className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
                <p className="text-4xl font-black text-[#FF4D00] mb-1">{s.n}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('howLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-16 max-w-xl">
            {t('howTitle1')}<br />{t('howTitle2')}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-[#FF4D00]/30 transition-all">
                <span className="text-[#FF4D00] font-black text-3xl block mb-3">{s.n}</span>
                <h3 className="text-[#0a0a0a] dark:text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-[#0a0a0a]/60 dark:text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-20 px-6 md:px-12 bg-[#070707] dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('sectorsLabel')}</span>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mt-4 mb-12">
            {t('sectorsTitle1')}<br /><span className="text-[#FF4D00]">{t('sectorsTitle2')}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {sectors.map((s) => (
              <div key={s.name} className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-[#FF4D00]/30 transition-all">
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
          <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('valuesLabel')}</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-12">
            {t('valuesTitle1')}<br /><span className="text-[#FF4D00]">{t('valuesTitle2')}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF4D00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaCheck className="w-3 h-3 text-[#FF4D00]" />
                </div>
                <div>
                  <h3 className="text-[#0a0a0a] dark:text-white font-bold mb-1">{v.title}</h3>
                  <p className="text-[#0a0a0a]/60 dark:text-white/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contatti" className="py-24 px-6 md:px-12 bg-[#070707] dark:bg-[#050505] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            {t('ctaTitle1')}<br /><span className="text-[#FF4D00]">{t('ctaTitle2')}</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            {t('ctaDesc')}
          </p>
          <a
            href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20sapere%20come%20potete%20aiutare%20il%20mio%20business."
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
