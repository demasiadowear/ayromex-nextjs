'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import MarqueeTicker from '@/components/MarqueeTicker'
import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from 'react-icons/hi2'
import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

/* ─── Case study colors (visual, not translatable) ─── */
const caseColors = [
  'from-orange-500/25 via-orange-600/10 to-transparent',
  'from-blue-500/20 via-blue-600/8 to-transparent',
  'from-emerald-500/20 via-emerald-600/8 to-transparent',
]
const caseSizes = ['large', 'small', 'small']

/* ─── Service hrefs (structural, not translatable) ─── */
const serviceHrefs = [
  '/servizi#branding',
  '/servizi#social',
  '/servizi#stampa',
  '/servizi#pitch',
  '/servizi#visual',
]

/* ─── Animation ─────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ─── Sub-components ────────────────────────────────── */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 dark:border-white/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-display font-semibold text-lg text-white/90 group-hover:text-slate-900 dark:hover:text-white transition pr-6">
          {q}
        </span>
        {open ? (
          <HiOutlineChevronUp className="w-5 h-5 text-orange-500 dark:text-orange-400 shrink-0" />
        ) : (
          <HiOutlineChevronDown className="w-5 h-5 text-slate-400 dark:text-white/30 shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-6 text-base text-slate-600 dark:text-white/55 leading-relaxed">{a}</p>
      )}
    </div>
  )
}

function ContactForm() {
  const t = useTranslations('home')
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-10 text-center">
        <HiOutlineCheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
        <h4 className="text-xl font-display font-semibold text-slate-900 dark:text-white">{t('cta.sent_title')}</h4>
        <p className="mt-2 text-slate-600 dark:text-white/55">{t('cta.sent_sub')}</p>
      </div>
    )
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder={t('cta.form_name')}
          className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/35 focus:outline-none focus:border-orange-500/60 transition"
        />
        <input
          type="text"
          name="contact"
          required
          placeholder={t('cta.form_contact')}
          className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/35 focus:outline-none focus:border-orange-500/60 transition"
        />
      </div>
      <select
        name="service"
        required
        defaultValue=""
        className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-white/65 focus:outline-none focus:border-orange-500/60 transition appearance-none"
      >
        <option value="" disabled>{t('cta.form_service')}</option>
        <option value="branding">{t('cta.form_opt_branding')}</option>
        <option value="social">{t('cta.form_opt_social')}</option>
        <option value="stampa">{t('cta.form_opt_stampa')}</option>
        <option value="pitch">{t('cta.form_opt_pitch')}</option>
        <option value="altro">{t('cta.form_opt_altro')}</option>
      </select>
      <textarea
        name="message"
        rows={3}
        placeholder={t('cta.form_message')}
        className="w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/35 focus:outline-none focus:border-orange-500/60 transition resize-none"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 text-sm font-semibold text-black hover:bg-orange-400 transition"
      >
        {t('cta.form_submit')} <HiArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-slate-400 dark:text-white/30">{t('cta.form_note')}</p>
    </form>
  )
}

/* ─── Page ──────────────────────────────────────────── */

export default function Home() {
  const t = useTranslations('home')

  const ticker = t.raw('ticker') as string[]
  const caseStudies = t.raw('cases.items') as { title: string; category: string; year: string; desc: string }[]
  const services = t.raw('services.items') as { num: string; title: string; desc: string; deliverables: string }[]
  const stats = t.raw('stats.items') as { value: string; label: string }[]
  const processSteps = t.raw('process.items') as { step: string; title: string; desc: string }[]
  const faqs = t.raw('faq.items') as { q: string; a: string }[]
  const bullets = t.raw('cta.bullets') as string[]
  const trust = t.raw('hero.trust') as string[]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#07090d] text-slate-900 dark:text-white overflow-x-hidden">
      <Header />
      <WhatsAppButton />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right,rgba(255,255,255,0.08) 1px,transparent 1px),' +
              'linear-gradient(to bottom,rgba(255,255,255,0.08) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="absolute top-0 left-0 w-[640px] h-[640px] rounded-full bg-orange-500/10 blur-[140px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full bg-orange-500/8 blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] halftone-br pointer-events-none" aria-hidden />
        <div className="absolute top-0 left-0 w-[260px] h-[260px] halftone-tl pointer-events-none opacity-60" aria-hidden />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10 pt-32 pb-20">
          <motion.div initial="hidden" animate="show">

            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-2 text-xs font-medium text-slate-600 dark:text-white/60 mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.7)]" />
              {t('hero.badge')}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display font-extrabold tracking-[-0.035em] leading-[0.95] text-[clamp(3.8rem,11vw,9rem)]"
            >
              <span className="block text-orange-500">{t('hero.h1_1')}</span>
              <span className="block text-orange-500">{t('hero.h1_2')}</span>
              <span className="block mt-3">
                <Image
                  src="/logo.png"
                  alt="AYROMEX"
                  width={1735}
                  height={755}
                  priority
                  className="invert dark:invert-0 h-[clamp(3.8rem,11vw,9rem)] w-auto"
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-8 text-lg md:text-xl text-slate-600 dark:text-white/55 leading-relaxed max-w-xl"
            >
              {t('hero.sub_1')}
              <br />
              {t('hero.sub_2')}
              <br className="hidden md:block" />
              {t('hero.sub_3')}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-7 py-4 text-base font-semibold text-black shadow-[0_16px_48px_rgba(255,107,53,0.28)] hover:bg-orange-400 transition"
              >
                {t('hero.cta1')}
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-base font-semibold hover:bg-white/[0.08] transition"
              >
                {t('hero.cta2')}
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-10 flex flex-wrap gap-3"
            >
              {trust.map((item) => (
                <span key={item} className="text-xs text-slate-400 dark:text-white/40 border border-slate-200 dark:border-white/8 rounded-full px-3.5 py-1.5">
                  {item}
                </span>
              ))}
            </motion.div>

          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 halftone-fade-down pointer-events-none opacity-40" aria-hidden />
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE TICKER
      ══════════════════════════════════════════ */}
      <section className="border-y border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/[0.02] py-5">
        <MarqueeTicker
          items={ticker}
          className="text-sm font-display font-semibold text-white/45 uppercase tracking-[0.12em]"
        />
      </section>

      {/* ══════════════════════════════════════════
          CASE STUDIES
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-3">
                {t('cases.label')}
              </div>
              <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] text-[clamp(2.4rem,5vw,4.5rem)]">
                {t('cases.h2')}
                <br />
                <span className="text-slate-400 dark:text-white/40">{t('cases.h2_muted')}</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition shrink-0"
            >
              {t('cases.link')}
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {caseStudies[0] && (() => {
              const p = caseStudies[0]
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] overflow-hidden group hover:border-orange-500/30 transition-colors"
                >
                  <div className="absolute top-0 right-0 w-[160px] h-[160px] halftone-br pointer-events-none opacity-70" aria-hidden />
                  <div className={`aspect-[16/10] bg-gradient-to-br ${caseColors[0]} flex items-end p-8`}>
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-wider">{p.category}</div>
                      <div className="text-white/25 text-xs">{p.year}</div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display font-bold text-2xl tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/55 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              )
            })()}

            <div className="flex flex-col gap-4">
              {caseStudies.slice(1).map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (i + 1), ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] overflow-hidden group hover:border-orange-500/30 transition-colors flex-1"
                >
                  <div className="absolute top-0 right-0 w-[100px] h-[100px] halftone-br pointer-events-none opacity-50" aria-hidden />
                  <div className={`aspect-[16/7] bg-gradient-to-br ${caseColors[i + 1]}`} />
                  <div className="p-6">
                    <div className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-wider mb-1">{p.category}</div>
                    <h3 className="font-display font-bold text-lg tracking-tight">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-white/50 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVIZI
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-slate-200 dark:border-white/8 relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg pointer-events-none opacity-30" aria-hidden />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">

            <div className="md:w-64 shrink-0">
              <div className="md:sticky md:top-32">
                <div className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-4">
                  {t('services.label')}
                </div>
                <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,4vw,3.5rem)]">
                  {t('services.h2')}<br />
                  <span className="text-slate-400 dark:text-white/35">{t('services.h2_muted')}</span>
                </h2>
                <p className="mt-5 text-sm text-slate-500 dark:text-white/50 leading-relaxed">
                  {t('services.sub')}
                </p>
                <Link
                  href="/servizi"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:text-orange-300 transition"
                >
                  {t('services.link')}
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="flex-1 divide-y divide-white/8">
              {services.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="group py-8 flex gap-8 items-start hover:pl-3 transition-all duration-300"
                >
                  <div className="font-display font-extrabold text-4xl text-orange-500/20 w-14 shrink-0 leading-none pt-1">
                    {s.num}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight group-hover:text-orange-500 dark:text-orange-400 transition">
                        {s.title}
                      </h3>
                      <Link href={serviceHrefs[i] as '/servizi'}>
                        <HiArrowRight className="w-5 h-5 text-slate-300 dark:text-white/20 group-hover:text-orange-500 dark:text-orange-400 group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    </div>
                    <p className="mt-2 text-sm text-slate-600 dark:text-white/55 leading-relaxed max-w-lg">{s.desc}</p>
                    <div className="mt-3 text-xs text-slate-400 dark:text-white/30 font-medium">{s.deliverables}</div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS
      ══════════════════════════════════════════ */}
      <section className="py-20 border-t border-slate-200 dark:border-white/8 bg-white/[0.015]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="px-0 md:px-12 py-12 first:pl-0 last:pr-0 text-center md:text-left"
              >
                <div className="font-display font-extrabold text-[clamp(3.5rem,7vw,5.5rem)] text-orange-500 dark:text-orange-400 tracking-[-0.04em] leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/45 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESSO
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-slate-200 dark:border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-3">
              {t('process.label')}
            </div>
            <h2 className="font-display font-extrabold tracking-[-0.03em] leading-tight text-[clamp(2rem,4.5vw,4rem)]">
              {t('process.h2')}<br />
              <span className="text-slate-400 dark:text-white/35">{t('process.h2_muted')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {processSteps.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-7 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-[80px] h-[80px] halftone-br pointer-events-none opacity-50" aria-hidden />
                <div className="font-display font-extrabold text-5xl text-orange-500/15 leading-none mb-4">{p.step}</div>
                <h3 className="font-display font-bold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-white/50 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TESTIMONIAL
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-slate-200 dark:border-white/8 bg-white/[0.015] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-[300px] halftone-br pointer-events-none opacity-25" aria-hidden />
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-10">
              {t('testimonial.label')}
            </div>
            <blockquote>
              <p className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.8rem)] tracking-[-0.02em] leading-[1.15] text-white/90">
                &ldquo;{t('testimonial.quote')}&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 dark:text-orange-400 font-display font-bold text-sm">
                  {t('testimonial.author').charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t('testimonial.author')}</div>
                  <div className="text-xs text-slate-400 dark:text-white/40">{t('testimonial.role')}</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-slate-200 dark:border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div className="md:sticky md:top-32">
              <div className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-3">{t('faq.label')}</div>
              <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,4vw,3.5rem)]">
                {t('faq.h2')}<br />
                <span className="text-slate-400 dark:text-white/35">{t('faq.h2_muted')}</span>
              </h2>
              <p className="mt-5 text-sm text-slate-500 dark:text-white/50 leading-relaxed whitespace-pre-line">
                {t('faq.sub')}
              </p>
              <a
                href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20ho%20una%20domanda."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:text-orange-300 transition"
              >
                {t('faq.wa_cta')}
                <HiArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div>
              {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINALE
      ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 border-t border-slate-200 dark:border-white/8 bg-white/[0.015] relative overflow-hidden">
        <div className="absolute inset-0 halftone-bg pointer-events-none opacity-20" aria-hidden />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] halftone-tl pointer-events-none opacity-50" aria-hidden />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] halftone-br pointer-events-none opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <div className="text-xs font-semibold text-orange-500 dark:text-orange-400 uppercase tracking-widest mb-4">{t('cta.label')}</div>
              <h2 className="font-display font-extrabold tracking-[-0.035em] leading-[0.92] text-[clamp(2.8rem,6vw,5rem)]">
                {t('cta.h2_1')}<br />
                <span className="text-slate-400 dark:text-white/35">{t('cta.h2_2')}</span><br />
                {t('cta.h2_3')}
              </h2>
              <p className="mt-6 text-base text-slate-600 dark:text-white/55 leading-relaxed max-w-md">
                {t('cta.sub')}
              </p>

              <div className="mt-8 space-y-3.5">
                {bullets.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/55">
                    <HiOutlineCheckCircle className="w-4 h-4 text-orange-500 dark:text-orange-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20un%20preventivo."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-slate-200 dark:bg-white/10 transition"
                >
                  {t('cta.wa')}
                </a>
                <a
                  href="tel:+390808407861"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-slate-200 dark:bg-white/10 transition"
                >
                  {t('cta.tel')}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-8 md:p-10">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
