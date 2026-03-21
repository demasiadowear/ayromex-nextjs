import { FaRobot, FaCogs, FaWhatsapp, FaLayerGroup, FaGlobe, FaPaintBrush } from 'react-icons/fa'

const SERVICES = [
  {
    icon: FaRobot,
    title: 'AI Agents',
    tagline: 'Il tuo business risponde, vende e gestisce clienti H24',
    benefit: 'Senza assumere personale aggiuntivo. Senza straordinari. Senza errori.',
    details: [
      'Qualificazione lead automatica in tempo reale',
      'Gestione obiezioni e FAQ senza intervento umano',
      'Escalation intelligente ai tuoi operatori quando serve',
      'Reportistica automatica su ogni interazione',
    ],
    result: 'I nostri clienti riducono in media del 70% le richieste non gestite.',
  },
  {
    icon: FaCogs,
    title: 'Automazioni n8n',
    tagline: 'Dal primo contatto alla fattura, tutto automatico',
    benefit: 'Ogni processo ripetitivo nella tua azienda può essere automatizzato.',
    details: [
      'Flussi di onboarding clienti completamente automatici',
      'Sincronizzazione CRM, email, WhatsApp in un unico sistema',
      'Notifiche e alert intelligenti al tuo team',
      'Reportistica e dashboard aggiornate in tempo reale',
    ],
    result: 'Media 15 ore di lavoro manuale risparmiate ogni settimana per cliente.',
  },
  {
    icon: FaWhatsapp,
    title: 'AI Secretary',
    tagline: 'Il tuo cliente scrive o chiama — risponde la tua AI',
    benefit: 'In italiano perfetto, 24 ore su 24, anche il sabato e la domenica.',
    details: [
      'Prenotazioni e appuntamenti gestiti automaticamente',
      'Risposta istantanea su WhatsApp Business',
      'Voice AI per chiamate in entrata',
      'Promemoria e follow-up automatici ai clienti',
    ],
    result: 'Zero clienti persi per mancata risposta. Mai più.',
  },
  {
    icon: FaLayerGroup,
    title: 'SaaS Verticali',
    tagline: 'Prodotti digitali costruiti per il tuo settore specifico',
    benefit: 'Non soluzioni generiche — sistemi progettati per il tuo mercato.',
    details: [
      'AyroDesk24 per PMI e professionisti italiani',
      'AyroHub per concessionari gaming e ADM',
      'Personalizzazione completa su ogni verticale',
      'Deploy in produzione entro 2 settimane',
    ],
    result: 'Prodotti usabili dal giorno uno, senza formazione tecnica.',
  },
  {
    icon: FaGlobe,
    title: 'Web & Digital',
    tagline: 'Presenze online che convertono',
    benefit: 'Non siti vetrina — macchine di acquisizione clienti.',
    details: [
      'Landing page ottimizzate per conversione',
      'Integrazione con sistemi AI e automazioni',
      'SEO e performance ottimizzati',
      'Analytics e tracking configurato',
    ],
    result: 'Siti che portano richieste, non solo visite.',
  },
  {
    icon: FaPaintBrush,
    title: 'Branding',
    tagline: 'Identità che posiziona',
    benefit: 'Design che comunica autorità prima ancora che il cliente legga una parola.',
    details: [
      'Logo e identità visiva completa',
      'Brand guidelines e manuali d\'uso',
      'Materiali stampa e digitali coordinati',
      'Posizionamento strategico nel tuo mercato',
    ],
    result: 'Brand che si ricordano e si scelgono.',
  },
]

export default function ServiziPage() {
  return (
    <main className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">I nostri servizi</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-4 mb-6 max-w-3xl leading-tight">
            Tutto quello che<br />
            <span className="text-[#FF4D00]">costruiamo per te</span>
          </h1>
          <p className="text-xl text-[#0a0a0a]/60 dark:text-white/60 max-w-xl">
            Ogni servizio è progettato per un risultato misurabile. Nessuna teoria, nessuna consulenza vuota.
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
                      <s.icon className={`w-5 h-5 text-[#FF4D00]`} />
                    </div>
                    <h2 className={`text-2xl font-black ${i % 2 === 0 ? 'text-[#0a0a0a] dark:text-white' : 'text-white'}`}>{s.title}</h2>
                  </div>
                  <p className="text-[#FF4D00] font-semibold text-lg mb-3">{s.tagline}</p>
                  <p className={`text-base leading-relaxed mb-4 ${i % 2 === 0 ? 'text-[#0a0a0a]/60 dark:text-white/60' : 'text-white/60'}`}>{s.benefit}</p>
                  <div className={`text-sm font-semibold px-4 py-3 rounded-xl border ${i % 2 === 0 ? 'border-[#FF4D00]/20 bg-[#FF4D00]/5 text-[#FF4D00]' : 'border-[#FF4D00]/20 bg-[#FF4D00]/5 text-[#FF4D00]'}`}>
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
                    Parliamo di questo servizio
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
            Non sai quale servizio<br /><span className="text-[#FF4D00]">fa per te?</span>
          </h2>
          <p className="text-white/60 mb-8">
            Analizziamo il tuo business gratuitamente e ti diciamo esattamente cosa automatizzare prima.
          </p>
          <a
            href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20una%20consulenza%20gratuita%20per%20capire%20cosa%20automatizzare."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm min-h-[44px] inline-flex"
          >
            Consulenza gratuita →
          </a>
        </div>
      </section>

    </main>
  )
}
