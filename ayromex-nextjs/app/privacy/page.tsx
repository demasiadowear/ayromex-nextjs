'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { fadeInUp } from '@/lib/animations'
import { HiArrowLeft } from 'react-icons/hi2'

export default function Privacy() {
  return (
    <main>
      <Navbar />
      
      <section className="section-spacing pt-32 bg-dark-950">
        <div className="section-container max-w-4xl">
          {/* Breadcrumb */}
          <Link href="/" className="inline-flex items-center text-light-50/60 hover:text-orange-500 mb-8 transition-colors">
            <HiArrowLeft className="w-4 h-4 mr-2" />
            Torna alla home
          </Link>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-hero-lg font-display font-bold mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-light-50/70 mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose prose-invert prose-orange max-w-none space-y-8">
              {/* Introduzione */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">1. Introduzione</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  AYROMEX S.R.L. (di seguito "AYROMEX", "noi", "nostro") si impegna a proteggere la privacy dei propri utenti. 
                  La presente Privacy Policy descrive come raccogliamo, utilizziamo, conserviamo e proteggiamo i dati personali 
                  degli utenti del sito web <strong>ayromex.com</strong> (il "Sito").
                </p>
                <p className="text-light-50/80 leading-relaxed">
                  Questa Policy è redatta in conformità con il Regolamento (UE) 2016/679 (GDPR) e con il D.Lgs. 196/2003 
                  come modificato dal D.Lgs. 101/2018 (Codice Privacy italiano).
                </p>
              </section>

              {/* Titolare del trattamento */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">2. Titolare del Trattamento</h2>
                <div className="bg-dark-800/50 border border-gray-700/30 rounded-lg p-6">
                  <p className="text-light-50/90 leading-relaxed mb-2">
                    <strong>AYROMEX S.R.L.</strong>
                  </p>
                  <p className="text-light-50/70 text-sm">
                    Sede legale: [Indirizzo completo da inserire]<br />
                    P.IVA: [Numero P.IVA]<br />
                    Email: info@ayromex.com<br />
                    Tel: +39 080 840 7861
                  </p>
                </div>
              </section>

              {/* Dati raccolti */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">3. Dati Personali Raccolti</h2>
                
                <h3 className="text-xl font-semibold mb-3">3.1 Dati forniti volontariamente</h3>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Quando compili i form di contatto sul nostro Sito, potremmo raccogliere le seguenti informazioni:
                </p>
                <ul className="list-disc list-inside space-y-2 text-light-50/80 ml-4">
                  <li>Nome e cognome</li>
                  <li>Nome dell'attività/azienda</li>
                  <li>Indirizzo email</li>
                  <li>Numero di telefono</li>
                  <li>Città di provenienza</li>
                  <li>Messaggio e richieste specifiche</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Dati raccolti automaticamente</h3>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Durante la navigazione sul Sito, raccogliamo automaticamente:
                </p>
                <ul className="list-disc list-inside space-y-2 text-light-50/80 ml-4">
                  <li>Indirizzo IP</li>
                  <li>Tipo di browser e dispositivo</li>
                  <li>Sistema operativo</li>
                  <li>Pagine visitate e durata della visita</li>
                  <li>Fonte di riferimento (da dove provieni)</li>
                  <li>Cookie tecnici e di analytics (vedi Cookie Policy)</li>
                </ul>
              </section>

              {/* Finalità del trattamento */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">4. Finalità del Trattamento</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  I tuoi dati personali vengono trattati per le seguenti finalità:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-dark-800/30 border-l-4 border-orange-500 p-4">
                    <h4 className="font-semibold mb-2">a) Risposta alle richieste di contatto</h4>
                    <p className="text-sm text-light-50/70">
                      Base giuridica: Esecuzione di misure precontrattuali (Art. 6(1)(b) GDPR)
                    </p>
                  </div>

                  <div className="bg-dark-800/30 border-l-4 border-orange-500 p-4">
                    <h4 className="font-semibold mb-2">b) Invio di preventivi e proposte commerciali</h4>
                    <p className="text-sm text-light-50/70">
                      Base giuridica: Esecuzione di misure precontrattuali (Art. 6(1)(b) GDPR)
                    </p>
                  </div>

                  <div className="bg-dark-800/30 border-l-4 border-orange-500 p-4">
                    <h4 className="font-semibold mb-2">c) Adempimenti fiscali e contabili</h4>
                    <p className="text-sm text-light-50/70">
                      Base giuridica: Obblighi legali (Art. 6(1)(c) GDPR)
                    </p>
                  </div>

                  <div className="bg-dark-800/30 border-l-4 border-orange-500 p-4">
                    <h4 className="font-semibold mb-2">d) Miglioramento dei servizi e analytics</h4>
                    <p className="text-sm text-light-50/70">
                      Base giuridica: Legittimo interesse (Art. 6(1)(f) GDPR)
                    </p>
                  </div>

                  <div className="bg-dark-800/30 border-l-4 border-gray-500 p-4">
                    <h4 className="font-semibold mb-2">e) Marketing diretto (solo con consenso esplicito)</h4>
                    <p className="text-sm text-light-50/70">
                      Base giuridica: Consenso (Art. 6(1)(a) GDPR) - Puoi revocarlo in qualsiasi momento
                    </p>
                  </div>
                </div>
              </section>

              {/* Conservazione dati */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">5. Conservazione dei Dati</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  I tuoi dati personali saranno conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:
                </p>
                <ul className="list-disc list-inside space-y-2 text-light-50/80 ml-4">
                  <li><strong>Richieste di contatto:</strong> 12 mesi dalla ricezione della richiesta</li>
                  <li><strong>Clienti attivi:</strong> Per tutta la durata del rapporto commerciale + 10 anni (obblighi fiscali)</li>
                  <li><strong>Marketing:</strong> Fino alla revoca del consenso o 24 mesi dall'ultima interazione</li>
                  <li><strong>Dati di navigazione:</strong> Massimo 12 mesi</li>
                </ul>
              </section>

              {/* Condivisione dati */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">6. Condivisione dei Dati</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  AYROMEX non vende né cede i tuoi dati a terzi. I dati possono essere condivisi solo con:
                </p>
                <ul className="list-disc list-inside space-y-2 text-light-50/80 ml-4">
                  <li><strong>Fornitori di servizi:</strong> Hosting, email, analytics (es. Vercel, Google Analytics) - in qualità di Responsabili del Trattamento</li>
                  <li><strong>Autorità competenti:</strong> Solo in caso di obbligo legale</li>
                  <li><strong>Professionisti:</strong> Commercialisti, consulenti legali (sotto vincolo di riservatezza)</li>
                </ul>
              </section>

              {/* Diritti dell'utente */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">7. Diritti dell'Interessato</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  In conformità con il GDPR, hai i seguenti diritti:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="card">
                    <h4 className="font-semibold mb-2 text-orange-500">Diritto di accesso</h4>
                    <p className="text-sm text-light-50/70">Ottenere conferma che sia in corso un trattamento dei tuoi dati</p>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-2 text-orange-500">Diritto di rettifica</h4>
                    <p className="text-sm text-light-50/70">Correggere dati inesatti o incompleti</p>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-2 text-orange-500">Diritto alla cancellazione</h4>
                    <p className="text-sm text-light-50/70">Richiedere la cancellazione dei tuoi dati ("diritto all'oblio")</p>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-2 text-orange-500">Diritto di limitazione</h4>
                    <p className="text-sm text-light-50/70">Limitare il trattamento in determinate circostanze</p>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-2 text-orange-500">Diritto di portabilità</h4>
                    <p className="text-sm text-light-50/70">Ricevere i dati in formato strutturato e trasferirli ad altro titolare</p>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-2 text-orange-500">Diritto di opposizione</h4>
                    <p className="text-sm text-light-50/70">Opporti al trattamento per motivi legittimi</p>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold mb-2 text-orange-500">Come esercitare i tuoi diritti</h4>
                  <p className="text-sm text-light-50/80 mb-3">
                    Per esercitare uno qualsiasi dei tuoi diritti, contattaci a:
                  </p>
                  <p className="text-sm text-light-50/90">
                    <strong>Email:</strong> info@ayromex.com<br />
                    <strong>Oggetto:</strong> "Esercizio diritti privacy GDPR"
                  </p>
                  <p className="text-xs text-light-50/60 mt-3">
                    Ti risponderemo entro 30 giorni dalla ricezione della richiesta.
                  </p>
                </div>
              </section>

              {/* Sicurezza */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">8. Sicurezza dei Dati</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  AYROMEX adotta misure tecniche e organizzative adeguate per proteggere i dati personali, tra cui:
                </p>
                <ul className="list-disc list-inside space-y-2 text-light-50/80 ml-4">
                  <li>Crittografia SSL/TLS per tutte le comunicazioni</li>
                  <li>Accesso ai dati limitato al personale autorizzato</li>
                  <li>Backup regolari e sistemi di disaster recovery</li>
                  <li>Firewall e sistemi di protezione contro accessi non autorizzati</li>
                  <li>Formazione continua del personale sulla protezione dei dati</li>
                </ul>
              </section>

              {/* Cookie */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">9. Cookie</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Il Sito utilizza cookie tecnici e, previo consenso, cookie di analytics e marketing. 
                  Per maggiori informazioni, consulta la nostra <Link href="/cookie" className="text-orange-500 hover:underline">Cookie Policy</Link>.
                </p>
              </section>

              {/* Modifiche */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">10. Modifiche alla Privacy Policy</h2>
                <p className="text-light-50/80 leading-relaxed">
                  AYROMEX si riserva il diritto di modificare questa Privacy Policy in qualsiasi momento. 
                  Le modifiche sostanziali saranno comunicate tramite avviso sul Sito. 
                  Ti invitiamo a consultare regolarmente questa pagina per restare aggiornato.
                </p>
              </section>

              {/* Reclami */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">11. Reclami</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Se ritieni che il trattamento dei tuoi dati personali violi la normativa applicabile, 
                  hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali:
                </p>
                <div className="bg-dark-800/50 border border-gray-700/30 rounded-lg p-6">
                  <p className="text-light-50/90 leading-relaxed">
                    <strong>Garante per la protezione dei dati personali</strong><br />
                    <span className="text-sm text-light-50/70">
                      Piazza Venezia, 11 - 00187 Roma<br />
                      Tel: +39 06 696771<br />
                      Email: garante@gpdp.it<br />
                      Sito: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">www.garanteprivacy.it</a>
                    </span>
                  </p>
                </div>
              </section>

              {/* Contatti */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">12. Contatti</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Per qualsiasi domanda o chiarimento in merito a questa Privacy Policy, contattaci:
                </p>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                  <p className="text-light-50/90 leading-relaxed">
                    <strong>AYROMEX S.R.L.</strong><br />
                    <span className="text-sm text-light-50/80">
                      Email: info@ayromex.com<br />
                      Tel: +39 080 840 7861<br />
                      WhatsApp: +39 080 840 7861
                    </span>
                  </p>
                </div>
              </section>

            </div>

            {/* CTA Back */}
            <div className="mt-12 pt-8 border-t border-gray-700/30">
              <Link 
                href="/" 
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <HiArrowLeft className="w-5 h-5" />
                <span>Torna alla home</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
