'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { RotatingText } from '@/components/RotatingText'
import { FaRobot, FaCogs, FaWhatsapp, FaLayerGroup, FaGlobe, FaPaintBrush, FaArrowRight, FaCheck } from 'react-icons/fa'

const CLIENTS = [
  { name: 'Halvion Hotel', sector: 'Hospitality' },
  { name: 'Le Dimore del Garibaldi', sector: 'Hospitality' },
  { name: 'CIKO Pizzeria', sector: 'F&B' },
  { name: 'APEX Card Room', sector: 'Gaming' },
  { name: 'Bonega Poker Room', sector: 'Gaming' },
]

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export default function HomePage() {
  const t = useTranslations()
  const locale = useLocale()

  const words = [t('hero.word0'), t('hero.word1'), t('hero.word2'), t('hero.word3')]

  const SERVICES = [
    { icon: FaRobot, title: t('services.s1title'), desc: t('services.s1desc') },
    { icon: FaCogs, title: t('services.s2title'), desc: t('services.s2desc') },
    { icon: FaWhatsapp, title: t('services.s3title'), desc: t('services.s3desc') },
    { icon: FaLayerGroup, title: t('services.s4title'), desc: t('services.s4desc') },
    { icon: FaGlobe, title: t('services.s5title'), desc: t('services.s5desc') },
    { icon: FaPaintBrush, title: t('services.s6title'), desc: t('services.s6desc') },
  ]

  const PRODUCTS = [
    {
      name: 'AyroDesk24',
      badge: t('products.p1badge'),
      tagline: t('products.p1tagline'),
      desc: t('products.p1desc'),
      features: [t('products.p1f1'), t('products.p1f2'), t('products.p1f3'), t('products.p1f4')],
    },
    {
      name: 'AyroHub',
      badge: t('products.p2badge'),
      tagline: t('products.p2tagline'),
      desc: t('products.p2desc'),
      features: [t('products.p2f1'), t('products.p2f2'), t('products.p2f3'), t('products.p2f4')],
    },
  ]

  return (
    <main className="overflow-x-hidden">

      {/* ===================== HERO ===================== */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF4D00]/30 bg-[#FF4D00]/5 text-[#FF4D00] text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-1.5 h-1.5 bg-[#FF4D00] rounded-full animate-pulse" />
            {t('hero.badge')}
          </div>

          {/* Title */}
          <h1 className="text-[10vw] md:text-[7vw] font-black leading-[0.9] tracking-[-0.04em] uppercase mb-4">
            {t('hero.title1')} <br />
            <span className="text-[#FF4D00]">{t('hero.title2')}</span>
          </h1>

          {/* Rotating words */}
          <div className="flex items-center gap-3 mb-10 text-xl md:text-2xl font-medium text-[#0a0a0a]/50 dark:text-white/50">
            <span>→</span>
            <RotatingText words={words} />
          </div>

          {/* Subtitle + CTAs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-lg text-lg md:text-xl text-[#0a0a0a]/60 dark:text-white/60 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={`#contatti`}
                className="btn-primary px-7 py-3.5 text-sm min-h-[44px]"
              >
                {t('hero.cta')}
              </a>
              <a
                href={`/${locale}/servizi`}
                className="btn-ghost px-7 py-3.5 text-sm min-h-[44px] text-[#0a0a0a] dark:text-white"
              >
                {t('hero.ctaSecondary')}
                <FaArrowRight className="ml-2 w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section id="servizi" className="py-24 md:py-32 px-6 md:px-12 bg-[#070707] dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('servicesSection.label')}</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-3">
              {t('servicesSection.title1')}<br />
              <span className="text-[#FF4D00]">{t('servicesSection.title2')}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#FF4D00]/40 hover:bg-[#FF4D00]/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF4D00]/10 flex items-center justify-center mb-5 group-hover:bg-[#FF4D00]/20 transition-colors">
                  <s.icon className="w-5 h-5 text-[#FF4D00]" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS ===================== */}
      <section id="prodotti" className="py-24 md:py-32 px-6 md:px-12 bg-[#070707] dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('productsSection.label')}</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-3">
              {t('productsSection.title1')}<br />
              <span className="text-[#FF4D00]">{t('productsSection.title2')}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-[#1e1e1e] bg-[#111111] hover:border-[#FF4D00]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#FF4D00]/10 text-[#FF4D00] mb-3">
                      {p.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white">{p.name}</h3>
                    <p className="text-[#FF4D00] text-sm font-medium mt-1">{p.tagline}</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6">{p.desc}</p>
                <ul className="space-y-2 mb-7">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                      <FaCheck className="w-3 h-3 text-[#FF4D00] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contatti" className="btn-primary px-6 py-3 text-xs min-h-[44px]">
                  {t('productsSection.cta')}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY ===================== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#070707] dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('why.label')}</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mt-3 leading-tight">
                {t('why.title1')}<br />
                <span className="text-[#FF4D00]">{t('why.title2')}</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed">
                {t('why.desc')}
              </p>
              <ul className="space-y-3 text-white/60 text-sm">
                {[t('why.item1'), t('why.item2'), t('why.item3'), t('why.item4')].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <FaCheck className="w-3 h-3 text-[#FF4D00] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contatti" className="btn-primary px-6 py-3 text-xs inline-flex min-h-[44px]">
                {t('why.cta')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== CLIENTS ===================== */}
      <section id="clienti" className="py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('clientsSection.label')}</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-3">
              {t('clientsSection.title1')}{' '}
              <span className="text-[#FF4D00]">{t('clientsSection.title2')}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLIENTS.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-[#FF4D00]/30 transition-all text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF4D00]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[#FF4D00] font-black text-sm">{c.name[0]}</span>
                </div>
                <p className="text-[#0a0a0a] dark:text-white font-semibold text-xs leading-tight">{c.name}</p>
                <p className="text-[#0a0a0a]/40 dark:text-white/40 text-[10px] mt-1 uppercase tracking-widest">{c.sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contatti" className="py-24 md:py-32 px-6 md:px-12 bg-[#070707] dark:bg-[#050505]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">{t('contactSection.label')}</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mt-3 mb-4">
              {t('contactSection.title1')}<br />
              <span className="text-[#FF4D00]">{t('contactSection.title2')}</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              {t('contactSection.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20informazioni%20sui%20vostri%20sistemi%20AI%20e%20automazioni."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-sm min-h-[44px] gap-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                {t('contactSection.ctaWa')}
              </a>
              <a
                href="mailto:info@ayromex.com?subject=Richiesta%20informazioni%20AI"
                className="btn-ghost px-8 py-4 text-sm min-h-[44px] text-white border-white/30 hover:border-[#FF4D00]"
              >
                {t('contactSection.ctaEmail')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
