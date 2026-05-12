import type { Metadata } from 'next'
import { pageMetadata, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('privacy', locale as Locale)
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-black uppercase tracking-widest text-ay-accent mb-4">{title}</h2>
      <div className="text-white/70 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <main id="main" className="overflow-x-hidden pt-28 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">Informativa GDPR</span>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white mt-3 mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm">
            Ultimo aggiornamento: Marzo 2026
          </p>
        </div>

        <Section title="1. Titolare del Trattamento">
          <p><strong className="text-white">AYROMEX S.R.L.</strong></p>
          <p>P.IVA VIES: RO52014564</p>
          <p>Aleea Izvorul Oltului 6, Bl. 29, Sc. B, Et. 2, Ap. 24 — București, Romania</p>
          <p>Email: <a href="mailto:privacy@ayromex.com" className="text-ay-accent hover:underline">privacy@ayromex.com</a></p>
        </Section>

        <Section title="2. Dati Raccolti">
          <ul className="space-y-1 list-none">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span><span><strong className="text-white">Dati di contatto:</strong> nome, email, telefono (solo tramite form di contatto)</span></li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span><span><strong className="text-white">Dati di navigazione:</strong> IP, browser, pagine visitate (tramite cookie tecnici)</span></li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span><span><strong className="text-white">Dati aziendali:</strong> P.IVA, ragione sociale (solo per clienti B2B)</span></li>
          </ul>
        </Section>

        <Section title="3. Finalità del Trattamento">
          <ul className="space-y-1 list-none">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Rispondere alle richieste di contatto</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Erogare i servizi contrattualizzati</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Adempimenti fiscali e contabili</li>
          </ul>
        </Section>

        <Section title="4. Base Giuridica">
          <ul className="space-y-1 list-none">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Esecuzione del contratto (Art. 6.1.b GDPR)</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Legittimo interesse (Art. 6.1.f GDPR)</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Consenso (Art. 6.1.a GDPR) per cookie analitici</li>
          </ul>
        </Section>

        <Section title="5. Conservazione dei Dati">
          <p>
            I dati sono conservati per il tempo strettamente necessario alle finalità indicate e comunque
            non oltre <strong className="text-white">10 anni</strong> per obblighi fiscali.
          </p>
        </Section>

        <Section title="6. Diritti dell'Interessato">
          <p>Ai sensi degli Art. 15–22 GDPR hai diritto a:</p>
          <ul className="space-y-1 list-none mt-2">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Accesso ai tuoi dati</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Rettifica dei dati inesatti</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Cancellazione (diritto all&apos;oblio)</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Portabilità dei dati</li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>Opposizione al trattamento</li>
          </ul>
          <p className="mt-3">Per esercitare i diritti: <a href="mailto:privacy@ayromex.com" className="text-ay-accent hover:underline">privacy@ayromex.com</a></p>
        </Section>

        <Section title="7. Trasferimento Dati">
          <p>
            AYROMEX S.R.L. è una società europea con sede in Romania (UE).
            I dati non vengono trasferiti al di fuori dell&apos;Unione Europea.
          </p>
        </Section>

        <Section title="8. Cookie">
          <p>Utilizziamo solo cookie tecnici necessari al funzionamento del sito.</p>
          <p>Cookie analitici vengono attivati solo previo consenso esplicito dell&apos;utente.</p>
        </Section>

        <Section title="9. Autorità di Controllo">
          <ul className="space-y-1 list-none">
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>
              <span>
                <strong className="text-white">Romania:</strong>{' '}
                ANSPDCP —{' '}
                <a href="https://www.anspdcp.ro" target="_blank" rel="noopener noreferrer" className="text-ay-accent hover:underline">anspdcp.ro</a>
              </span>
            </li>
            <li className="flex gap-2"><span className="text-ay-accent flex-shrink-0">—</span>
              <span>
                <strong className="text-white">Italia:</strong>{' '}
                Garante per la Protezione dei Dati Personali —{' '}
                <a href="https://www.gpdp.it" target="_blank" rel="noopener noreferrer" className="text-ay-accent hover:underline">gpdp.it</a>
              </span>
            </li>
          </ul>
        </Section>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            AYROMEX S.R.L. — RO52014564 — București, Romania<br />
            Per qualsiasi richiesta: <a href="mailto:privacy@ayromex.com" className="text-ay-accent hover:underline">privacy@ayromex.com</a>
          </p>
        </div>

      </div>
    </main>
  )
}
