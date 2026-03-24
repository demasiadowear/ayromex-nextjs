import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termini e Condizioni — AYROMEX S.R.L.',
  description: 'Termini e Condizioni di utilizzo dei servizi AYROMEX S.R.L. — AyroHub, AyroDesk24 e servizi di AI Automation.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-black uppercase tracking-widest text-[#FF4D00] mb-4">{title}</h2>
      <div className="text-[#0a0a0a]/70 dark:text-white/70 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}

export default function TermsPage() {
  return (
    <main className="overflow-x-hidden pt-28 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">Condizioni legali</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white mt-3 mb-4">
            Termini e Condizioni
          </h1>
          <p className="text-[#0a0a0a]/50 dark:text-white/50 text-sm">
            Ultimo aggiornamento: Marzo 2026
          </p>
        </div>

        <Section title="1. Fornitore del Servizio">
          <p><strong className="text-[#0a0a0a] dark:text-white">AYROMEX S.R.L.</strong></p>
          <p>P.IVA VIES: RO52014564 | Reg. Com: J2025044424001</p>
          <p>București, Sectorul 4 — Romania</p>
          <p>Email: <a href="mailto:legal@ayromex.com" className="text-[#FF4D00] hover:underline">legal@ayromex.com</a></p>
        </Section>

        <Section title="2. Servizi Offerti">
          <p>AYROMEX S.R.L. sviluppa e distribuisce prodotti software SaaS per imprese europee, tra cui:</p>
          <ul className="space-y-1 list-none mt-2">
            <li className="flex gap-2"><span className="text-[#FF4D00] flex-shrink-0">—</span><span><strong className="text-[#0a0a0a] dark:text-white">AyroHub:</strong> sistema operativo AI per concessionari ADM italiani</span></li>
            <li className="flex gap-2"><span className="text-[#FF4D00] flex-shrink-0">—</span><span><strong className="text-[#0a0a0a] dark:text-white">AyroDesk24:</strong> AI receptionist per PMI</span></li>
            <li className="flex gap-2"><span className="text-[#FF4D00] flex-shrink-0">—</span>Servizi di AI Automation e automazioni n8n su misura</li>
          </ul>
        </Section>

        <Section title="3. Accettazione dei Termini">
          <p>
            L&apos;utilizzo dei servizi AYROMEX implica l&apos;accettazione integrale dei presenti termini e condizioni.
            L&apos;utente che non accetti i presenti termini è tenuto ad interrompere immediatamente l&apos;utilizzo del servizio.
          </p>
        </Section>

        <Section title="4. Limitazione di Responsabilità">
          <p>
            I prodotti AYROMEX utilizzano tecnologie di intelligenza artificiale di natura probabilistica.
            I risultati generati possono variare in funzione del contesto e dei dati forniti.
          </p>
          <p>
            AYROMEX S.R.L. non garantisce risultati specifici. L&apos;utente è responsabile della supervisione
            e validazione degli output prodotti dai sistemi AI.
          </p>
        </Section>

        <Section title="5. Proprietà Intellettuale">
          <p>
            Tutti i prodotti, marchi, interfacce e codici sorgente sviluppati da AYROMEX S.R.L. sono
            di proprietà esclusiva della società. È vietata qualsiasi riproduzione, copia o distribuzione
            non autorizzata.
          </p>
        </Section>

        <Section title="6. Regime Fiscale — Reverse Charge">
          <p>
            AYROMEX S.R.L. è iscritta al VIES con numero <strong className="text-[#0a0a0a] dark:text-white">RO52014564</strong>.
          </p>
          <p>
            Le transazioni B2B verso clienti UE applicano il meccanismo del Reverse Charge
            ai sensi dell&apos;Art. 196 della Direttiva 2006/112/CE.
            Le fatture sono emesse senza addebito di IVA; l&apos;imposta è assolta dal destinatario
            nel proprio paese di stabilimento.
          </p>
        </Section>

        <Section title="7. Legge Applicabile e Foro Competente">
          <p>
            I presenti termini sono regolati dalla legge rumena e dalla normativa europea applicabile.
          </p>
          <p>
            Per qualsiasi controversia, il foro competente è il <strong className="text-[#0a0a0a] dark:text-white">Tribunale di București</strong>,
            salvo diverso accordo scritto tra le parti.
          </p>
        </Section>

        <Section title="8. Contatti Legali">
          <p>
            Per qualsiasi comunicazione di natura legale o contrattuale:
          </p>
          <p>
            <a href="mailto:legal@ayromex.com" className="text-[#FF4D00] hover:underline">legal@ayromex.com</a>
          </p>
        </Section>

        <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
          <p className="text-xs text-[#0a0a0a]/40 dark:text-white/40">
            AYROMEX S.R.L. — RO52014564 — București, Romania<br />
            Per qualsiasi richiesta: <a href="mailto:legal@ayromex.com" className="text-[#FF4D00] hover:underline">legal@ayromex.com</a>
          </p>
        </div>

      </div>
    </main>
  )
}
