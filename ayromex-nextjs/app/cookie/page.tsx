'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { fadeInUp } from '@/lib/animations'
import { HiArrowLeft } from 'react-icons/hi2'

export default function Cookie() {
  return (
    <main>
      <Navbar />
      
      <section className="section-spacing pt-32 bg-dark-950">
        <div className="section-container max-w-4xl">
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
              Cookie Policy
            </h1>
            
            <p className="text-light-50/70 mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <div className="prose prose-invert prose-orange max-w-none space-y-8">
              
              {/* Introduzione */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">1. Cosa sono i Cookie</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell'utente, 
                  dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.
                </p>
                <p className="text-light-50/80 leading-relaxed">
                  Questo sito utilizza cookie tecnici necessari per il funzionamento e, previo consenso, 
                  cookie analitici per migliorare l'esperienza utente.
                </p>
              </section>

              {/* Tipologie Cookie */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">2. Tipologie di Cookie Utilizzati</h2>
                
                <h3 className="text-xl font-semibold mb-3">2.1 Cookie Tecnici (Necessari)</h3>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Questi cookie sono <strong>strettamente necessari</strong> per il funzionamento del sito e 
                  non richiedono consenso. Non possono essere disabilitati.
                </p>
                
                <div className="bg-dark-800/50 border border-gray-700/30 rounded-lg p-6 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700/30">
                        <th className="text-left py-2 text-light-50">Nome</th>
                        <th className="text-left py-2 text-light-50">Scopo</th>
                        <th className="text-left py-2 text-light-50">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="text-light-50/70">
                      <tr className="border-b border-gray-700/20">
                        <td className="py-3">cookie_consent</td>
                        <td className="py-3">Memorizza le preferenze cookie</td>
                        <td className="py-3">12 mesi</td>
                      </tr>
                      <tr>
                        <td className="py-3">session_id</td>
                        <td className="py-3">Mantiene la sessione attiva</td>
                        <td className="py-3">Sessione</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">2.2 Cookie Analitici (Google Analytics)</h3>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Utilizziamo Google Analytics per comprendere come i visitatori utilizzano il sito. 
                  Questi cookie <strong>richiedono il tuo consenso</strong>.
                </p>
                
                <div className="bg-dark-800/50 border border-gray-700/30 rounded-lg p-6 mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700/30">
                        <th className="text-left py-2 text-light-50">Nome</th>
                        <th className="text-left py-2 text-light-50">Scopo</th>
                        <th className="text-left py-2 text-light-50">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="text-light-50/70">
                      <tr className="border-b border-gray-700/20">
                        <td className="py-3">_ga</td>
                        <td className="py-3">Distingue gli utenti</td>
                        <td className="py-3">2 anni</td>
                      </tr>
                      <tr className="border-b border-gray-700/20">
                        <td className="py-3">_gid</td>
                        <td className="py-3">Distingue gli utenti</td>
                        <td className="py-3">24 ore</td>
                      </tr>
                      <tr>
                        <td className="py-3">_gat</td>
                        <td className="py-3">Limita richieste</td>
                        <td className="py-3">1 minuto</td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <p className="text-xs text-light-50/60 mt-4">
                    Google Analytics è configurato in modalità anonima (IP mascherato).
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">2.3 Cookie di Marketing (Opzionali)</h3>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Attualmente <strong>non utilizziamo</strong> cookie di marketing o remarketing. 
                  Se in futuro dovessimo implementarli, richiederemo il consenso esplicito.
                </p>
              </section>

              {/* Gestione Cookie */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">3. Come Gestire i Cookie</h2>
                
                <h3 className="text-xl font-semibold mb-3">3.1 Pannello Consensi</h3>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Al primo accesso al sito, ti viene mostrato un banner che ti permette di:
                </p>
                <ul className="list-disc list-inside space-y-2 text-light-50/80 ml-4 mb-6">
                  <li>Accettare tutti i cookie</li>
                  <li>Rifiutare i cookie non necessari</li>
                  <li>Personalizzare le tue preferenze</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">3.2 Impostazioni Browser</h3>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Puoi gestire i cookie direttamente dal tuo browser:
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-dark-800/30 border-l-4 border-orange-500 p-4">
                    <h4 className="font-semibold mb-2">Chrome</h4>
                    <p className="text-sm text-light-50/70">
                      Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti
                    </p>
                  </div>

                  <div className="bg-dark-800/30 border-l-4 border-orange-500 p-4">
                    <h4 className="font-semibold mb-2">Firefox</h4>
                    <p className="text-sm text-light-50/70">
                      Opzioni → Privacy e sicurezza → Cookie e dati dei siti web
                    </p>
                  </div>

                  <div className="bg-dark-800/30 border-l-4 border-orange-500 p-4">
                    <h4 className="font-semibold mb-2">Safari</h4>
                    <p className="text-sm text-light-50/70">
                      Preferenze → Privacy → Gestisci dati siti web
                    </p>
                  </div>

                  <div className="bg-dark-800/30 border-l-4 border-orange-500 p-4">
                    <h4 className="font-semibold mb-2">Edge</h4>
                    <p className="text-sm text-light-50/70">
                      Impostazioni → Cookie e autorizzazioni sito → Cookie e dati dei siti
                    </p>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                  <p className="text-sm text-light-50/80">
                    <strong>Nota:</strong> Disabilitando tutti i cookie, alcune funzionalità del sito potrebbero non funzionare correttamente.
                  </p>
                </div>
              </section>

              {/* Cookie di Terze Parti */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">4. Cookie di Terze Parti</h2>
                
                <h3 className="text-xl font-semibold mb-3">4.1 Google Analytics</h3>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Utilizziamo Google Analytics per analizzare l'utilizzo del sito. Google può utilizzare i dati raccolti per contestualizzare e personalizzare gli annunci della propria rete pubblicitaria.
                </p>
                <p className="text-sm text-light-50/70 mb-4">
                  Informativa Google Analytics: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">https://policies.google.com/privacy</a>
                </p>
                
                <p className="text-sm text-light-50/70">
                  Opt-out Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">https://tools.google.com/dlpage/gaoptout</a>
                </p>
              </section>

              {/* Base Giuridica */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">5. Base Giuridica</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Il trattamento dei dati tramite cookie si basa su:
                </p>
                <ul className="list-disc list-inside space-y-2 text-light-50/80 ml-4">
                  <li><strong>Cookie tecnici:</strong> Legittimo interesse (Art. 6(1)(f) GDPR)</li>
                  <li><strong>Cookie analitici:</strong> Consenso esplicito (Art. 6(1)(a) GDPR)</li>
                  <li><strong>Cookie marketing:</strong> Consenso esplicito (Art. 6(1)(a) GDPR)</li>
                </ul>
              </section>

              {/* Modifiche */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">6. Modifiche alla Cookie Policy</h2>
                <p className="text-light-50/80 leading-relaxed">
                  AYROMEX si riserva il diritto di modificare questa Cookie Policy in qualsiasi momento. 
                  Le modifiche sostanziali saranno comunicate tramite banner sul sito.
                </p>
              </section>

              {/* Contatti */}
              <section>
                <h2 className="text-title font-display font-bold mb-4">7. Contatti</h2>
                <p className="text-light-50/80 leading-relaxed mb-4">
                  Per domande sui cookie o per esercitare i tuoi diritti:
                </p>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-6">
                  <p className="text-light-50/90 leading-relaxed">
                    <strong>AYROMEX S.R.L.</strong><br />
                    <span className="text-sm text-light-50/80">
                      Email: info@ayromex.com<br />
                      Tel: +39 080 840 7861
                    </span>
                  </p>
                </div>
              </section>

            </div>

            {/* CTA Back */}
            <div className="mt-12 pt-8 border-t border-gray-700/30 flex items-center justify-between">
              <Link 
                href="/" 
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <HiArrowLeft className="w-5 h-5" />
                <span>Torna alla home</span>
              </Link>

              <Link 
                href="/privacy" 
                className="text-sm text-light-50/60 hover:text-orange-500 transition-colors"
              >
                Leggi la Privacy Policy →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
