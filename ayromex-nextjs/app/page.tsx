'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineSparkles, HiOutlineSwatch, HiOutlineCamera, HiOutlinePresentationChartBar, HiOutlinePrinter, HiOutlineBolt } from 'react-icons/hi2'

const services = [
  { icon: <HiOutlineSwatch className="w-6 h-6" />, title: 'Branding & Identità', desc: 'Logo, palette, font, linee guida e coordinato.' },
  { icon: <HiOutlineCamera className="w-6 h-6" />, title: 'Social Design', desc: 'Post, caroselli, copertine reel, template Canva.' },
  { icon: <HiOutlinePrinter className="w-6 h-6" />, title: 'Stampa & Materiali', desc: 'Menu, insegne, packaging, promo, print-ready.' },
  { icon: <HiOutlinePresentationChartBar className="w-6 h-6" />, title: 'Pitch & Presentazioni', desc: 'Deck puliti che sembrano da “azienda grossa”.' },
  { icon: <HiOutlineSparkles className="w-6 h-6" />, title: 'Visual Content', desc: 'Mockup, layout, immagini coerenti e premium.' },
  { icon: <HiOutlineBolt className="w-6 h-6" />, title: 'Automazioni (Coming soon)', desc: 'Lead, WhatsApp, CRM leggero: in arrivo.' },
]

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          {/* Sostituisci questa URL con una tua immagine (meglio editoriale / mockup) */}
          <div
            className="h-[520px] md:h-[640px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/20" />
        </div>

        <div className="relative container pt-20 md:pt-28 pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[650px]"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-xs text-black/70 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Start-up creativa • Branding • Social • Visual
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              AYROMEX <br />
              <span className="text-orange-600">Creative Studio</span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-black/70 leading-relaxed">
              Identità visiva, grafica e social design per attività che vogliono sembrare
              <b> più solide, più premium, più memorabili</b>.
              <br />
              Automazioni: <b>coming soon</b>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a className="btn-primary" href="/contatti">
                Richiedi preventivo <HiArrowRight className="w-5 h-5 ml-2" />
              </a>

              <a className="btn-secondary" href="tel:+390808407861">
                Chiama: +39 080 840 7861
              </a>
            </div>

            <div className="mt-4 text-xs text-black/50">
              Risposta rapida • Materiale pronto per stampa • Template riutilizzabili
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="section">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Start-up creativa, ma con mentalità da “studio serio”.
            </h2>
            <p className="mt-4 text-black/70 leading-relaxed">
              Niente caos, niente “grafichette”. Costruiamo sistemi visivi coerenti:
              logo, identità, social, materiali, presentazioni. Tutto parla la stessa lingua.
            </p>

            <div className="mt-6 flex gap-3">
              <a className="btn-primary" href="/servizi">Vedi i servizi</a>
              <a className="btn-secondary" href="/portfolio">Guarda lavori</a>
            </div>
          </div>

          <div className="card-light p-8">
            <div className="text-sm text-black/60 mb-3">Il metodo AYROMEX</div>
            <ul className="space-y-3 text-black/80">
              <li>1) Brief rapido e chiaro</li>
              <li>2) Concept e direzione visiva</li>
              <li>3) Produzione + varianti</li>
              <li>4) Consegna ordinata (stampa + digitale)</li>
            </ul>
            <div className="mt-6 text-xs text-black/50">
              Obiettivo: farti sembrare più grande di quello che sei. In senso buono.
            </div>
          </div>
        </div>
      </section>

      {/* SERVIZI */}
      <section className="section bg-black/[0.02]">
        <div className="container">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-sm text-orange-600 font-semibold">Servizi</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mt-2">Cosa facciamo (bene)</h3>
              <p className="mt-3 text-black/70 max-w-[720px]">
                Poche cose, fatte con criterio. Il resto è fuffa da menu a tendina infinito.
              </p>
            </div>
            <a className="btn-secondary" href="/servizi">Apri tutti i servizi</a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-light p-7">
                <div className="w-11 h-11 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="mt-4 font-semibold text-lg">{s.title}</div>
                <p className="mt-2 text-sm text-black/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="section">
        <div className="container">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-sm text-orange-600 font-semibold">Portfolio</div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mt-2">Lavori selezionati</h3>
              <p className="mt-3 text-black/70 max-w-[720px]">
                Qui ci mettiamo i tuoi casi reali. Pochi, belli, chiari.
              </p>
            </div>
            <a className="btn-primary" href="/portfolio">Vedi portfolio</a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Brand Identity', 'Social Pack', 'Print & Signage'].map((item) => (
              <div key={item} className="card-light p-6">
                <div className="aspect-[4/3] rounded-xl bg-black/5" />
                <div className="mt-4 font-semibold">{item}</div>
                <div className="text-sm text-black/60 mt-1">Case study / progetto</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-black/[0.02]">
        <div className="container">
          <div className="card-light p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-3xl font-bold">Facciamolo bene, una volta sola.</h3>
              <p className="mt-3 text-black/70 max-w-[720px]">
                Se vuoi un’identità visiva che non sembri “improvvisata”, parliamone.
              </p>
            </div>
            <div className="flex gap-3 flex-col sm:flex-row">
              <a className="btn-primary" href="/contatti">Contattaci</a>
              <a className="btn-secondary" href="tel:+390808407861">+39 080 840 7861</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
