import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi2'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chi Siamo - AYROMEX | Agenzia Creativa a Bari',
  description:
    'Scopri chi c\'e dietro AYROMEX: agenzia creativa specializzata in branding e design per attivita locali a Bari e in Puglia.',
}

const values = [
  {
    title: 'Chiarezza',
    desc: 'Niente giri di parole. Ti diciamo cosa facciamo, quanto costa e quanto ci vuole. Sempre.',
  },
  {
    title: 'Coerenza',
    desc: 'Ogni elemento visivo che creiamo parla la stessa lingua. Il tuo brand risulta solido e riconoscibile.',
  },
  {
    title: 'Qualita',
    desc: 'Pochi progetti, fatti bene. Preferiamo dire di no piuttosto che consegnare qualcosa di mediocre.',
  },
  {
    title: 'Praticita',
    desc: 'I file che ti consegniamo sono pronti all\'uso. Niente formati strani, niente sorprese in tipografia.',
  },
]

const stats = [
  { value: '40+', label: 'Brand creati' },
  { value: '98%', label: 'Clienti soddisfatti' },
  { value: '24h', label: 'Tempo medio di risposta' },
  { value: '2-3', label: 'Settimane per progetto' },
]

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-sm text-orange-400 font-semibold">
            Chi siamo
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight max-w-3xl">
            Un team creativo con mentalita da studio serio.
          </h1>
          <p className="mt-5 text-white/60 max-w-2xl text-lg leading-relaxed">
            AYROMEX nasce a Bari con un obiettivo semplice: dare alle attivita
            locali la stessa qualita visiva delle grandi aziende. Senza
            complicazioni, senza costi assurdi, senza tempi infiniti.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-xl font-display font-bold mb-4">
                La nostra missione
              </h2>
              <p className="text-white/60 leading-relaxed">
                Troppe attivita locali — ristoranti, hotel, negozi, studi
                professionali — hanno un prodotto eccellente ma un&apos;immagine
                che non lo rappresenta. Noi risolviamo questo problema.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Creiamo sistemi visivi completi: dal logo ai social, dalla
                stampa alle presentazioni. Ogni elemento e coerente, pronto
                all&apos;uso, e fatto per durare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="text-xl font-display font-bold mb-4">
                Perche sceglierci
              </h2>
              <ul className="space-y-3 text-white/60">
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold shrink-0">→</span>
                  Siamo specializzati in attivita locali: capiamo il tuo mercato.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold shrink-0">→</span>
                  Consegniamo file pronti all&apos;uso, non bozze da interpretare.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold shrink-0">→</span>
                  Prezzi chiari e fissi: sai quanto spendi prima di iniziare.
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold shrink-0">→</span>
                  Rispondiamo in 24h. Sempre.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-orange-400">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center mb-14">
            <div className="text-sm text-orange-400 font-semibold">
              I nostri valori
            </div>
            <h2 className="mt-2 text-3xl md:text-4xl font-display font-bold tracking-tight">
              Come lavoriamo, ogni giorno
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="font-display font-bold text-lg">{v.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            Vuoi lavorare con noi?
          </h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Raccontaci il tuo progetto. La prima call e gratuita e senza
            impegno.
          </p>
          <Link
            href="/contatti"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
          >
            Contattaci
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
