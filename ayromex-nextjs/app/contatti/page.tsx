'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { HiPhone, HiEnvelope, HiMapPin, HiCheckCircle } from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contatti() {
  return (
    <main className="bg-dark-950 min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Contatti</span>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mt-4 mb-6">
            Parliamo del tuo <br/> <span className="text-orange-500">Business.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Siamo pronti. Tu hai l'idea, noi abbiamo gli strumenti.
            Scegli come contattarci.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Sinitra: Info dirette */}
          <div className="space-y-8">
            <ContactCard 
              icon={<HiPhone className="w-6 h-6" />}
              title="Chiamaci ora"
              value="+39 080 840 7861"
              href="tel:+390808407861"
              cta="Chiama"
            />
            <ContactCard 
              icon={<FaWhatsapp className="w-6 h-6" />}
              title="Chatta su WhatsApp"
              value="+39 080 840 7861"
              href="https://wa.me/390808407861"
              cta="Apri Chat"
              highlight
            />
             <div className="bg-dark-900 p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <HiMapPin className="text-orange-500" /> Sedi Operative
                </h3>
                <div className="space-y-4 text-gray-400 text-sm">
                  <p><strong className="text-white">ITALIA:</strong> Bari (BA)</p>
                  <p><strong className="text-white">ROMANIA:</strong> București, Sector 4</p>
                  <div className="h-px bg-white/10 my-4"></div>
                  <p className="text-xs opacity-60">
                    AYROMEX S.R.L. <br/> P.IVA / CUI: 52014564
                  </p>
                </div>
             </div>
          </div>

          {/* Destra: Form */}
          <div className="bg-dark-900 p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Scrivici una mail</h3>
            <ContactForm />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

function ContactCard({ icon, title, value, href, cta, highlight }: any) {
  return (
    <div className={`p-8 rounded-2xl border transition-all ${highlight ? 'bg-orange-500 border-orange-500 text-white' : 'bg-dark-900 border-white/5 text-white'}`}>
      <div className="flex items-start justify-between">
        <div>
           <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${highlight ? 'bg-white/20 text-white' : 'bg-orange-500/10 text-orange-500'}`}>
             {icon}
           </div>
           <h4 className={`text-lg font-bold mb-1 ${highlight ? 'text-white' : 'text-white'}`}>{title}</h4>
           <p className={`text-sm mb-6 ${highlight ? 'text-white/90' : 'text-gray-400'}`}>{value}</p>
        </div>
      </div>
      <a href={href} className={`block w-full text-center py-3 rounded-lg font-bold transition-colors ${highlight ? 'bg-white text-orange-600 hover:bg-gray-100' : 'bg-dark-800 hover:bg-dark-700 text-white border border-white/10'}`}>
        {cta}
      </a>
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    // 1. Estraiamo i dati dai campi del form
    const formData = new FormData(e.currentTarget)
    const leadData = {
      nome: `${formData.get('nome')} ${formData.get('cognome')}`,
      email: formData.get('email'),
      azienda: "N/A", // Puoi aggiungere un campo Azienda se vuoi
      servizio: "Richiesta da Sito", // O mappare un selettore
      descrizione: formData.get('messaggio')
    }

    try {
      // 2. Invio reale al tuo URL di Google Apps Script
      await fetch("https://script.google.com/macros/s/AKfycbzZY0zx30qnS_4FD54F3HwjIhsHEF7WHPgjYHon3OL3M1f1rthx8i1tOhadWoUdpLnTSg/exec", {
        method: "POST",
        mode: "no-cors", // Evita errori di sicurezza cross-origin
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData)
      })
      
      setStatus('success')
    } catch (error) {
      console.error("Errore invio Autopilot:", error)
      alert("Errore nell'invio. Riprova più tardi.")
      setStatus('idle')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <HiCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h4 className="text-xl font-bold text-white">Richiesta Ricevuta!</h4>
        <p className="text-gray-400 mt-2">Ayromex Autopilot ha preso in carico la tua richiesta. <br/> Controlla la tua email, ti risponderemo tra pochi minuti.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-orange-500 underline text-sm">Invia un altro</button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Nome</label>
          <input name="nome" required type="text" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors" placeholder="Mario" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Cognome</label>
          <input name="cognome" required type="text" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors" placeholder="Rossi" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
        <input name="email" required type="email" className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors" placeholder="mario@azienda.com" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Messaggio</label>
        <textarea name="messaggio" required rows={4} className="w-full bg-dark-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-orange-500 outline-none transition-colors" placeholder="Vorrei informazioni su..."></textarea>
      </div>
      <button disabled={status === 'submitting'} type="submit" className="btn-primary w-full py-4 mt-2">
        {status === 'submitting' ? 'Invio in corso...' : 'Invia Messaggio'}
      </button>
    </form>
  )
}
