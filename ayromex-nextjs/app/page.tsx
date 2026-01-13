'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineSwatch,
  HiOutlineCamera,
  HiOutlinePresentationChartBar,
  HiOutlinePrinter,
  HiOutlineBolt,
} from 'react-icons/hi2'

const services = [
  { icon: <HiOutlineSwatch className="w-6 h-6" />, title: 'Branding & Identità', desc: 'Logo, palette, font, linee guida e sistema completo.' },
  { icon: <HiOutlineCamera className="w-6 h-6" />, title: 'Social Design', desc: 'Post, caroselli, reel cover, template Canva riutilizzabili.' },
  { icon: <HiOutlinePrinter className="w-6 h-6" />, title: 'Stampa & Materiali', desc: 'Menu, insegne, packaging, promo: tutto print-ready.' },
  { icon: <HiOutlinePresentationChartBar className="w-6 h-6" />, title: 'Pitch & Presentazioni', desc: 'Deck puliti, chiari, credibili. Zero cringe.' },
  { icon: <HiOutlineSparkles className="w-6 h-6" />, title: 'Visual Content', desc: 'Mockup, layout, immagini coerenti e premium.' },
  { icon: <HiOutlineBolt className="w-6 h-6" />, title: 'Automazioni (Coming soon)', desc: 'Lead, WhatsApp, CRM leggero: in arrivo.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Header />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* base */}
          <div className="absolute inset-0 bg-[#07090d]" />

          {/* subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
              backgroundPosition: 'center',
            }}
          />

          {/* glow blobs */}
          <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute -bottom-56 -right-56 h-[620px] w-[620px] rounded-full bg-orange-500/15 blur-[140px]" />

          {/* vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />

          {/* grain (cheap but effective) */}
          <div
            className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pt-20 md:pt-28 pb-14 md:pb-20">
          <motion.div initial="hidden" animate="show" className="max-w-3xl">
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
            >
              <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_24px_rgba(251,146,60,0.65)]" />
              AYROMEX • Creative Studio • Branding • Visual • Social
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-6 font-semibold tracking-tight leading-[1.02] text-4xl md:text-6xl"
            >
              Design che fa sembrare
              <span className="text-orange-400"> grande</span> il tuo brand.
              <span className="block text-white/70 text-base md:text-lg mt-4 font-normal leading-relaxed">
                Niente “grafichette”. Sistemi visivi coerenti: identità, social, materiali, presentazioni.
                Roba che regge quando la stampi, quando la pubblichi, quando la vendi.
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contatti"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black
                           shadow-[0_12px_40px_rgba(249,115,22,0.25)] hover:brightness-110 transition"
              >
                Richiedi preventivo <HiArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold
                           hover:bg-white/10 transition"
              >
                Guarda lavori
              </a>
              <a
                href="tel:+390808407861"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 px-5 py-3 text-sm text-white/80
                           hover:border-white/20 hover:text-white transition"
              >
                +39 080 840 7861
              </a>
            </motion.div>

            <motion.div variants={fadeUp} custom={3} className="mt-5 text-xs text-white/55">
              Risposta rapida • Print-ready • Template riutilizzabili • Zero caos
            </motion.div>
          </motion.div>

          {/* Mini stats / trust */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { k: 'Sistemi', v: 'Identità coerenti' },
              { k: 'Output', v: 'Stampa + digitale' },
              { k: 'Focus', v: 'Business first' },
            ].map((x) => (
              <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <div className="text-xs text-white/55">{x.k}</div>
                <div className="mt-1 font-semibold">{x.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION: Metodo / Split */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="text-sm text-orange-400 font-semibold">Approccio</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">
              Start-up creativa, ma con mentalità da studio serio.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Ti porto ordine: direzione visiva, regole, consistenza. Così non sembri “uno che prova”.
              Sembri un brand che sa dove sta andando.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <div className="text-xs text-white/55">Metodo AYROMEX</div>
              <ul className="mt-4 space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-orange-400" />
                  <span><b>Brief rapido</b> e chiaro (niente romanzi).</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-orange-400" />
                  <span><b>Concept</b> + direzione visiva (una sola lingua).</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-orange-400" />
                  <span><b>Produzione</b> + varianti (scelte, non caos).</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-[3px] h-2 w-2 rounded-full bg-orange-400" />
                  <span><b>Consegna ordinata</b> (stampa + digitale).</span>
                </li>
              </ul>
              <div className="mt-6 text-xs text-white/55">
                Obiettivo: farti sembrare più grande di quello che sei. In senso buono.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION: Servizi */}
      <section className="py-16 md:py-20 border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-sm text-orange-400 font-semibold">Servizi</div>
              <h3 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Cosa facciamo (bene)</h3>
              <p className="mt-3 text-white/70 max-w-[720px]">
                Poche cose, fatte con criterio. Il resto è fuffa.
              </p>
            </div>
            <a
              href="/servizi"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold
                         hover:bg-white/10 transition"
            >
              Apri tutti i servizi
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.06 * i }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 hover:bg-white/[0.06] transition"
              >
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-2xl bg-orange-500/15 text-orange-300 flex items-center justify-center
                                  shadow-[0_0_40px_rgba(249,115,22,0.15)]">
                    {s.icon}
                  </div>
                  <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center opacity-0
                                  group-hover:opacity-100 transition">
                    <HiArrowRight className="w-5 h-5 text-white/70" />
                  </div>
                </div>

                <div className="mt-4 font-semibold text-lg">{s.title}</div>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="mt-4 text-xs text-white/50">
                  Output: file ordinati, pronti, riutilizzabili.
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Portfolio teaser */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-sm text-orange-400 font-semibold">Portfolio</div>
              <h3 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Case studies (selezionati)</h3>
              <p className="mt-3 text-white/70 max-w-[720px]">
                Pochi progetti, chiari. “Prima / dopo”, risultati, applicazioni reali.
              </p>
            </div>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black
                         hover:brightness-110 transition"
            >
              Vedi portfolio
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: 'Brand Identity', s: 'Sistema completo • Logo • Guidelines' },
              { t: 'Social Pack', s: 'Template + griglia • Reels cover • Ads' },
              { t: 'Print & Signage', s: 'Insegne • Menu • Packaging • Promo' },
            ].map((x, i) => (
              <motion.div
                key={x.t}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.06 * i }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10" />
                <div className="mt-4 font-semibold">{x.t}</div>
                <div className="text-sm text-white/60 mt-1">{x.s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="text-sm text-orange-400 font-semibold">Pronti?</div>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">Facciamolo bene, una volta sola.</h3>
              <p className="mt-3 text-white/70 max-w-[720px]">
                Se vuoi un’identità visiva che non sembri improvvisata, parliamone.
              </p>
            </div>
            <div className="flex gap-3 flex-col sm:flex-row">
              <a
                href="/contatti"
                className="inline-flex items-center justify-center rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-black
                           hover:brightness-110 transition"
              >
                Contattaci
              </a>
              <a
                href="tel:+390808407861"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold
                           hover:bg-white/10 transition"
              >
                +39 080 840 7861
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
