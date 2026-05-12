import { whatsappLink } from '@/lib/contact'

const ARTICLES = [
  {
    id: 1,
    tag: 'Case Study',
    title: 'Come una piccola attività ha smesso di perdere clienti per telefono',
    hook: 'Marco, titolare di un centro estetico a Bari, perdeva 8-10 potenziali clienti ogni giorno. Non per colpa sua — semplicemente non riusciva a rispondere al telefono mentre faceva i trattamenti.',
    story: `Era il problema classico del piccolo imprenditore italiano: troppo impegnato a lavorare per rispondere ai clienti che vogliono prenotare.

Ogni chiamata persa era un appuntamento che andava dalla concorrenza. Marco lo sapeva, ma non aveva tempo per stare al telefono H24 né budget per assumere una receptionist.

Abbiamo implementato AI Secretary in 48 ore. Da quel momento, ogni messaggio WhatsApp riceve una risposta entro 30 secondi, a qualsiasi ora. L'AI prenota, gestisce i disdetti, invia promemoria il giorno prima dell'appuntamento.

Marco ora risponde solo alle richieste che richiedono davvero la sua presenza. Il resto è automatico.`,
    result: 'Zero clienti persi per mancata risposta. +34% appuntamenti prenotati nel primo mese. 3 ore al giorno risparmiate.',
    cta: 'Vuoi lo stesso risultato per la tua attività?',
  },
  {
    id: 2,
    tag: 'Settore Gaming',
    title: 'Il sistema che riattiva i clienti dormienti nei concessionari ADM',
    hook: 'Il 60% dei giocatori registrati in un concessionario ADM non torna dopo il terzo mese. Non è disinteresse — è dimenticanza. E dimenticanza è fatturato che evapora.',
    story: `I concessionari ADM investono tantissimo per acquisire nuovi clienti. Poi li perdono in silenzio, senza nemmeno sapere quando se ne sono andati.

Il problema è semplice: nessuno parla a quei clienti dopo la prima registrazione. Nessun follow-up, nessuna promozione personalizzata, nessun motivo per tornare.

AyroHub identifica automaticamente chi non è tornato negli ultimi 30, 60 o 90 giorni. Manda un messaggio personalizzato via WhatsApp con un'offerta rilevante, nel momento giusto, con il tono giusto.

Non un SMS generico. Un messaggio che sembra scritto a mano, che ricorda al cliente perché gli piaceva quel posto.`,
    result: 'Tasso di reattivazione del 28% nei primi 30 giorni di attivazione. ROI positivo dalla seconda settimana.',
    cta: 'Scopri AyroHub per il tuo concessionario',
  },
  {
    id: 3,
    tag: 'Tendenze 2026',
    title: 'Perché nel 2026 ogni PMI italiana ha bisogno di un sistema AI',
    hook: 'Il tuo competitor più piccolo di te sta già usando AI. Non per fare bella figura su LinkedIn — per servire il doppio dei clienti con la stessa squadra. E tu stai perdendo terreno ogni giorno.',
    story: `Parliamo di dati concreti. Le PMI che hanno integrato automazioni AI nel corso del 2024-2025 hanno in media:

— Ridotto i costi operativi del 30-40% nei processi ripetitivi
— Aumentato la capacità di gestione clienti del 200-300%
— Eliminato quasi completamente gli errori umani nei flussi documentali

Non parliamo di grandi aziende con budget milionari. Parliamo di parrucchieri, agenzie, officine, studi medici.

La barriera tecnologica è crollata. Quello che 3 anni fa costava 50.000€ oggi costa meno di 500€ al mese. E funziona meglio.

La domanda non è più "posso permettermelo". La domanda è "posso permettermi di non farlo".`,
    result: 'Non è una questione di tecnologia. È una questione di sopravvivenza competitiva nel mercato italiano.',
    cta: 'Scopri cosa possiamo automatizzare nella tua azienda',
  },
  {
    id: 4,
    tag: 'Cultura Aziendale',
    title: 'Automatizzare non significa licenziare — significa crescere',
    hook: 'La domanda che ci fanno quasi tutti i nuovi clienti, prima ancora di chiederci il prezzo: "Devo licenziare qualcuno?" La risposta è sempre no. E ti spieghiamo perché.',
    story: `La paura è comprensibile. L'AI fa paura perché sembra che "rubi" lavoro. Ma quello che abbiamo visto in tutti i progetti che abbiamo seguito racconta un'altra storia.

Quando automatizzi le attività ripetitive — le email di risposta, i promemoria, i report, le prenotazioni — il tuo team si libera. Non resta senza lavoro. Fa finalmente il lavoro per cui lo paghi.

Il receptionist smette di rispondere per la centesima volta alla stessa domanda sugli orari e inizia a occuparsi delle relazioni con i clienti più importanti.

Il commerciale smette di inserire dati nel CRM e inizia a chiudere contratti.

L'amministrativo smette di fare copia-incolla tra fogli Excel e inizia a fare analisi strategiche.

Il personale non sparisce — sale di livello. E l'azienda cresce senza dover assumere per ogni picco operativo.`,
    result: 'Più fatturato con le stesse persone. Non meno persone con lo stesso fatturato. La differenza è tutto.',
    cta: 'Parliamo del tuo caso specifico',
  },
]

export default function JournalPage() {
  return (
    <main className="overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">Journal</span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-4 mb-6 max-w-3xl leading-tight">
            Storie reali,<br />
            <span className="text-ay-accent">risultati concreti</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl">
            Case study, analisi di mercato e riflessioni su AI e automazione per le PMI italiane.
            Niente tecnicismi, solo quello che ti serve sapere.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {ARTICLES.map((a) => (
            <article
              key={a.id}
              className="border-t border-white/10 pt-12"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-ay-accent/10 text-ay-accent mb-4">
                {a.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-6 leading-tight">
                {a.title}
              </h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed mb-8 italic">
                &ldquo;{a.hook}&rdquo;
              </p>
              <div className="text-white/65 leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                {a.story}
              </div>
              <div className="p-5 rounded-xl border border-ay-accent/20 bg-ay-accent/5 mb-8">
                <p className="text-ay-accent font-semibold text-sm leading-relaxed">
                  → <strong>Risultato:</strong> {a.result}
                </p>
              </div>
              <a
                href={whatsappLink('journal')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 text-xs min-h-[44px] inline-flex"
              >
                {a.cta} →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-20 px-6 md:px-12 bg-ay-surface text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">
            Vuoi altri contenuti<br /><span className="text-ay-accent">come questi?</span>
          </h2>
          <p className="text-white/60 mb-8">
            Seguici su Instagram per aggiornamenti settimanali su AI e automazione per PMI italiane.
          </p>
          <a
            href="https://www.instagram.com/ayromex_srl/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-sm min-h-[44px] inline-flex"
          >
            Seguici su Instagram →
          </a>
        </div>
      </section>

    </main>
  )
}
