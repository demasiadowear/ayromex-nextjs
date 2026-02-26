import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Link } from '@/i18n/navigation'
import { HiArrowRight } from 'react-icons/hi2'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - AYROMEX | Lavori di Branding e Design',
  description:
    'Guarda i lavori di AYROMEX: identità visive, social design, materiali stampa e presentazioni per attività locali a Bari e in Puglia.',
}

const projects = [
  {
    title: 'Ristorante La Brace',
    category: 'Brand Identity',
    tags: 'Logo, menu, insegna, social pack',
    desc: 'Identità visiva completa per un ristorante di pesce a Bari. Dal logo al menu, dalle insegne ai template social.',
    color: 'from-orange-500/20 to-orange-600/5',
    results: [
      'Brand riconoscibile su tutti i canali',
      'Menu professionale stampato in 500 copie',
      'Template social riutilizzabili ogni settimana',
    ],
  },
  {
    title: 'Hotel Adriatico',
    category: 'Social Pack',
    tags: 'Template Instagram, Stories, Ads',
    desc: 'Pack completo di template social per un hotel sulla costa adriatica. Feed coordinato, stories e grafiche per le campagne ads.',
    color: 'from-blue-500/15 to-blue-600/5',
    results: [
      'Feed Instagram coerente e professionale',
      '12 template riutilizzabili su Canva',
      'Grafiche ads per stagione estiva',
    ],
  },
  {
    title: 'Studio Legale Rossi',
    category: 'Rebranding',
    tags: 'Logo, biglietti, presentazione, carta intestata',
    desc: 'Rebranding completo per uno studio legale. Immagine moderna e autorevole, coerente dal biglietto da visita alla presentazione per i clienti.',
    color: 'from-emerald-500/15 to-emerald-600/5',
    results: [
      'Immagine professionale e moderna',
      'Deck presentazione per nuovi clienti',
      'Materiali coordinati stampa + digitale',
    ],
  },
  {
    title: 'Boutique Moda Donna',
    category: 'Brand Identity + Social',
    tags: 'Logo, packaging, template social, ads',
    desc: 'Identità visiva e social design per una boutique di moda femminile. Look elegante e contemporaneo che rispecchia il posizionamento del brand.',
    color: 'from-pink-500/15 to-pink-600/5',
    results: [
      'Brand premium percepito dai clienti',
      'Packaging coordinato con logo',
      'Engagement social aumentato',
    ],
  },
  {
    title: 'Pizzeria Da Michele',
    category: 'Stampa & Materiali',
    tags: 'Menu, tovagliette, insegna, biglietti',
    desc: 'Materiali stampati completi per una pizzeria storica. Design che rispetta la tradizione ma con un tocco moderno e pulito.',
    color: 'from-yellow-500/15 to-yellow-600/5',
    results: [
      'Menu leggibile e attraente',
      'Tovagliette brandizzate',
      'Insegna esterna coordinata',
    ],
  },
  {
    title: 'Tech Startup InnovaHub',
    category: 'Pitch Deck',
    tags: 'Presentazione investitori, brand guidelines',
    desc: 'Pitch deck professionale per una startup tech in fase di fundraising. 18 slide chiare, dati visualizzati in modo efficace, design credibile.',
    color: 'from-violet-500/15 to-violet-600/5',
    results: [
      'Presentazione per round seed',
      'Infografiche dati chiare',
      'Brand guidelines incluse',
    ],
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-sm text-orange-400 font-semibold">Portfolio</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
            Lavori selezionati.
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl text-lg">
            Ogni progetto racconta una trasformazione: dal brief iniziale alla
            consegna finale. Ecco alcuni dei brand che abbiamo creato.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 space-y-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                <div className={`md:col-span-2 aspect-[4/3] md:aspect-auto bg-gradient-to-br ${p.color} flex items-center justify-center min-h-[240px]`}>
                  <span className="text-white/20 text-sm font-display">Immagine progetto</span>
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
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Risultati</h3>
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
            Il tuo progetto potrebbe essere il prossimo.
          </h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Raccontaci cosa hai in mente. Ti facciamo un preventivo gratuito entro 24 ore.
          </p>
          <Link
            href="/contatti"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
          >
            Richiedi preventivo
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
