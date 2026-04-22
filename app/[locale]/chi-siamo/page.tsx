import { FaCheck, FaArrowRight } from 'react-icons/fa'

const STEPS = [
  { n: '01', title: 'Ascoltiamo', desc: 'Analizziamo il tuo business, i tuoi processi e i tuoi obiettivi. Gratis, senza impegno.' },
  { n: '02', title: 'Progettiamo', desc: 'Disegniamo il sistema su misura per te. Nessuna soluzione standard, tutto custom.' },
  { n: '03', title: 'Costruiamo', desc: 'Sviluppiamo e testiamo. Tu vedi ogni passaggio, niente scatole nere.' },
  { n: '04', title: 'Consegniamo', desc: 'Il sistema è live. Formiamo il tuo team in meno di 2 ore.' },
  { n: '05', title: 'Supportiamo', desc: 'Siamo operativi H24 per supporto. Il sistema evolve con il tuo business.' },
]

const SECTORS = [
  { name: 'Hospitality', desc: 'Hotel, B&B, ristoranti' },
  { name: 'Gaming ADM', desc: 'Concessionari, poker room, betting' },
  { name: 'F&B', desc: 'Pizzerie, bar, locali' },
  { name: 'Retail', desc: 'Negozi, e-commerce, showroom' },
  { name: 'PMI', desc: 'Studi professionali, agenzie, officine' },
  { name: 'Salute & Benessere', desc: 'Centri estetici, parrucchieri, studi medici' },
]

const VALUES = [
  { title: 'Risultati concreti', desc: 'Misuriamo tutto. Se non si vede in fatturato o in tempo risparmiato, non lo facciamo.' },
  { title: 'Zero consulenze vuote', desc: 'Non vendiamo documenti. Consegniamo sistemi attivi che funzionano dal giorno uno.' },
  { title: 'Trasparenza totale', desc: 'Sai sempre cosa stiamo costruendo, perché e quanto costa. Nessuna sorpresa.' },
  { title: 'Prodotti che durano', desc: 'Costruiamo per la scalabilità. I sistemi che creiamo crescono con la tua azienda.' },
]

export default function ChiSiamoPage() {
  return (
    <main className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">Chi siamo</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-8 max-w-4xl leading-tight">
            L&apos;agenzia che costruisce<br />
            <span className="text-[#FF6B00]">sistemi AI vendibili</span>
          </h1>
          <p className="text-xl text-[#0a0a0a]/60 dark:text-white/60 max-w-2xl leading-relaxed mb-8">
            AYROMEX S.R.L. è un&apos;AI Automation Agency europea con base in Puglia e sede legale a Bucarest.
            La nostra missione è una sola: eliminare il lavoro manuale dalle PMI italiane attraverso
            sistemi AI che funzionano davvero.
          </p>
          <a href="#contatti" className="btn-primary px-7 py-3.5 text-sm min-h-[44px] inline-flex">
            Lavoriamo insieme
            <FaArrowRight className="ml-2 w-3 h-3" />
          </a>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 md:px-12 bg-[#070707] dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">La nostra missione</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-4 mb-6">
              Ogni PMI italiana<br />
              <span className="text-[#FF6B00]">merita un sistema AI</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Troppe piccole e medie imprese italiane perdono clienti, fatturato e tempo
              per processi manuali che si possono automatizzare. Noi risolviamo questo problema
              costruendo sistemi concreti, non presentazioni PowerPoint.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: '90%', label: 'riduzione lavoro manuale' },
              { n: '72h', label: 'analisi gratuita' },
              { n: 'H24', label: 'sistemi attivi' },
              { n: '5+', label: 'clienti attivi' },
            ].map((s) => (
              <div key={s.n} className="p-6 rounded-xl border border-white/10 bg-white/5 text-center">
                <p className="text-4xl font-black text-[#FF6B00] mb-1">{s.n}</p>
                <p className="text-white/50 text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">Come lavoriamo</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-16 max-w-xl">
            Dal primo contatto<br />al sistema live
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-[#FF6B00]/30 transition-all">
                <span className="text-[#FF6B00] font-black text-3xl block mb-3">{s.n}</span>
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
          <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">Settori che serviamo</span>
          <h2 className="text-4xl font-black uppercase tracking-tight text-white mt-4 mb-12">
            Verticali in cui<br /><span className="text-[#FF6B00]">siamo specializzati</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {SECTORS.map((s) => (
              <div key={s.name} className="p-5 rounded-xl border border-white/10 bg-white/5 hover:border-[#FF6B00]/30 transition-all">
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
          <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-widest">I nostri valori</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-12">
            Quello in cui<br /><span className="text-[#FF6B00]">crediamo davvero</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FF6B00]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaCheck className="w-3 h-3 text-[#FF6B00]" />
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
            Lavoriamo<br /><span className="text-[#FF6B00]">insieme</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Raccontaci il tuo business. In 72 ore ti diciamo cosa possiamo automatizzare.
          </p>
          <a
            href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20sapere%20come%20potete%20aiutare%20il%20mio%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm min-h-[44px] inline-flex"
          >
            Parliamo su WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}
