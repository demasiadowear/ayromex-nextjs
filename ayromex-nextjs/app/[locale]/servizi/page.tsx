import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Link } from '@/i18n/navigation'
import {
  HiArrowRight,
  HiOutlineSwatch,
  HiOutlineCamera,
  HiOutlinePrinter,
  HiOutlinePresentationChartBar,
  HiOutlineSparkles,
  HiOutlineBolt,
  HiOutlineCheckCircle,
} from 'react-icons/hi2'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servizi - AYROMEX | Branding, Social Design, Stampa',
  description:
    'Scopri i servizi AYROMEX: branding e identità visiva, social design, materiali stampa, presentazioni. Per ristoranti, hotel e attività locali a Bari.',
}

type Service = {
  id: string
  icon: React.ReactNode
  title: string
  subtitle: string
  desc: string
  deliverables: string[]
  ideal: string
  comingSoon?: boolean
  productUrl?: string
}

const services: Service[] = [
  {
    id: 'branding',
    icon: <HiOutlineSwatch className="w-7 h-7" />,
    title: 'Branding & Identità Visiva',
    subtitle: 'Il fondamento di tutto',
    desc: 'Creiamo un sistema visivo completo che rende il tuo brand riconoscibile e professionale su ogni canale. Non solo un logo: un linguaggio visivo coerente.',
    deliverables: [
      'Logo principale + varianti (monocromo, compatto, icona)',
      'Palette colori primari e secondari',
      'Tipografia e regole di utilizzo',
      'Brand Guidelines PDF completo',
      'File sorgente editabili (AI/EPS/SVG/PNG)',
    ],
    ideal: 'Attività nuove, rebranding, chi vuole fare il salto di qualità.',
  },
  {
    id: 'social',
    icon: <HiOutlineCamera className="w-7 h-7" />,
    title: 'Social Design & Template',
    subtitle: 'Contenuti che funzionano',
    desc: 'Template riutilizzabili per Instagram, Facebook e LinkedIn. Li personalizzi tu con testo e foto: il risultato resta sempre professionale.',
    deliverables: [
      'Template post feed (6-12 varianti)',
      'Template stories e reel cover',
      'Griglia feed coordinata',
      'Template Canva editabili',
      "Guida all'uso dei template",
    ],
    ideal: 'Chi pubblica sui social ma vuole un look professionale senza grafico fisso.',
  },
  {
    id: 'stampa',
    icon: <HiOutlinePrinter className="w-7 h-7" />,
    title: 'Stampa & Materiali',
    subtitle: 'Dal digitale al fisico',
    desc: "Menu, biglietti da visita, insegne, packaging, materiale promozionale. Tutto progettato in coerenza con la tua identità visiva e pronto per la tipografia.",
    deliverables: [
      'Layout grafico professionale',
      'File print-ready (PDF/AI con abbondanze)',
      'Mockup di anteprima realistici',
      'Coordinamento con tipografia (se necessario)',
      'Versione digitale per web/social',
    ],
    ideal: 'Ristoranti, bar, hotel, negozi, studi professionali.',
  },
  {
    id: 'pitch',
    icon: <HiOutlinePresentationChartBar className="w-7 h-7" />,
    title: 'Presentazioni & Pitch Deck',
    subtitle: 'Convincere con stile',
    desc: 'Presentazioni professionali per banche, investitori, clienti, partner. Design pulito, struttura chiara, contenuti che comunicano.',
    deliverables: [
      'Deck PowerPoint o Keynote editabile',
      'Versione PDF per invio',
      'Grafici e infografiche personalizzate',
      'Coerenza con brand identity',
      'Fino a 20 slide incluse',
    ],
    ideal: 'Startup, professionisti, aziende che devono presentarsi.',
  },
  {
    id: 'visual',
    icon: <HiOutlineSparkles className="w-7 h-7" />,
    title: 'Visual Content',
    subtitle: 'Immagine coordinata ovunque',
    desc: 'Grafiche per sito web, ads, mockup, foto prodotto stilizzate. Ogni asset visivo coerente con il tuo brand.',
    deliverables: [
      'Banner e grafiche web',
      'Asset per campagne ads',
      'Mockup prodotto/ambiente',
      'Immagini social coordinate',
      'File in tutti i formati necessari',
    ],
    ideal: 'Chi vende online, e-commerce, attività con forte presenza digitale.',
  },
  {
    id: 'automazioni',
    icon: <HiOutlineBolt className="w-7 h-7" />,
    title: 'Automazioni AI',
    subtitle: 'Powered by StudioPilot',
    desc: 'Automatizziamo prenotazioni, risposte WhatsApp, gestione contatti e CRM leggero per attività locali — con StudioPilot, il nostro prodotto dedicato.',
    deliverables: [
      'Risposte automatiche WhatsApp',
      'Sistema prenotazioni semplice',
      'CRM leggero per gestire contatti',
      'Integrazione con social e sito',
    ],
    ideal: 'Attività locali che vogliono automatizzare senza complicarsi.',
    productUrl: 'https://www.studiopilot.pro/',
  },
]

export default function ServiziPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-sm text-orange-400 font-semibold">Servizi</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
            Ogni servizio, un sistema completo.
          </h1>
          <p className="mt-4 text-white/60 max-w-2xl text-lg">
            Non vendiamo &ldquo;grafichette&rdquo;. Ogni progetto include file
            pronti, linee guida e supporto. Scegli il servizio che ti serve o
            contattaci per un pacchetto su misura.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 space-y-8">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 scroll-mt-24"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-orange-500/15 text-orange-300 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold">{s.title}</h2>
                      <div className="text-sm text-orange-400">{s.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed">{s.desc}</p>
                  <div className="mt-4 text-sm text-white/50">
                    <strong className="text-white/70">Ideale per:</strong> {s.ideal}
                  </div>
                </div>
                <div className="md:w-1/3">
                  <h3 className="text-sm font-semibold text-white/80 mb-3">Cosa ricevi:</h3>
                  <ul className="space-y-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-white/60">
                        <HiOutlineCheckCircle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA — StudioPilot featured card or standard quote button */}
              {s.productUrl ? (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-orange-400 font-semibold uppercase tracking-widest mb-1">
                        Prodotto AYROMEX
                      </div>
                      <div className="font-display font-bold text-lg text-white">StudioPilot</div>
                      <p className="text-sm text-white/50 mt-0.5">
                        La piattaforma di automazione per attività locali.
                      </p>
                    </div>
                    <a
                      href={s.productUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
                    >
                      Scopri StudioPilot
                      <HiArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="mt-6 pt-6 border-t border-white/5">
                  <Link
                    href="/contatti"
                    className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
                  >
                    Richiedi preventivo per {s.title.split(' &')[0]}
                    <HiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold">
            Non sai quale servizio ti serve?
          </h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Raccontaci il tuo progetto. Ti aiutiamo a capire cosa ti serve e ti
            facciamo un preventivo su misura.
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
