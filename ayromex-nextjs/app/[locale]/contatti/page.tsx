'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import {
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelope,
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center">
        <HiOutlineCheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
        <h4 className="text-lg font-semibold text-white">Richiesta inviata</h4>
        <p className="mt-2 text-sm text-white/60">
          Ti rispondiamo entro 24 ore. Controlla anche WhatsApp.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Il tuo nome"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Telefono (opzionale)"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition"
        />
        <select
          name="service"
          required
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-orange-500/50 transition appearance-none"
          defaultValue=""
        >
          <option value="" disabled>Di cosa hai bisogno?</option>
          <option value="branding">Branding &amp; Identità visiva</option>
          <option value="social">Social Design &amp; Template</option>
          <option value="stampa">Stampa &amp; Materiali</option>
          <option value="presentazioni">Presentazioni &amp; Pitch</option>
          <option value="altro">Altro / Non sono sicuro</option>
        </select>
      </div>
      <select
        name="budget"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 focus:outline-none focus:border-orange-500/50 transition appearance-none"
        defaultValue=""
      >
        <option value="" disabled>Budget indicativo (opzionale)</option>
        <option value="500-1000">500 - 1.000 EUR</option>
        <option value="1000-2500">1.000 - 2.500 EUR</option>
        <option value="2500-5000">2.500 - 5.000 EUR</option>
        <option value="5000+">5.000+ EUR</option>
        <option value="non-so">Non lo so ancora</option>
      </select>
      <textarea
        name="message"
        rows={5}
        required
        placeholder="Raccontaci il tuo progetto: cosa fai, cosa ti serve, eventuali tempistiche..."
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-orange-500/50 transition resize-none"
      />
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
      >
        Invia richiesta
        <HiArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-white/40 text-center">
        Preventivo gratuito e senza impegno. Risposta entro 24h.
      </p>
    </form>
  )
}

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-sm text-orange-400 font-semibold">Contatti</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
            Parliamo del tuo progetto.
          </h1>
          <p className="mt-4 text-white/60 max-w-xl text-lg">
            Compila il form, scrivici su WhatsApp o chiamaci. Ti rispondiamo
            entro 24 ore con un preventivo gratuito.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-semibold mb-4">Contatti diretti</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <HiOutlinePhone className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <a href="tel:+390808407861" className="hover:text-orange-400 transition font-medium">
                        +39 080 840 7861
                      </a>
                      <div className="text-xs text-white/40 mt-1">Lun-Ven, 9:00-18:00</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaWhatsapp className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <div>
                      <a
                        href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20un%20preventivo."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition font-medium"
                      >
                        WhatsApp
                      </a>
                      <div className="text-xs text-white/40 mt-1">Risposta rapida</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiOutlineEnvelope className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <a href="mailto:info@ayromex.com" className="hover:text-orange-400 transition font-medium">
                        info@ayromex.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiOutlineMapPin className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Bari, Italia</span>
                      <div className="text-xs text-white/40 mt-1">Operiamo anche da remoto in tutta Italia</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-semibold mb-3">Cosa succede dopo?</h3>
                <ol className="space-y-3 text-sm text-white/60">
                  <li className="flex gap-3">
                    <span className="text-orange-400 font-bold shrink-0">1.</span>
                    Riceviamo la tua richiesta e la analizziamo.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400 font-bold shrink-0">2.</span>
                    Ti rispondiamo entro 24h con domande o un preventivo.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400 font-bold shrink-0">3.</span>
                    Fissiamo una call gratuita di 30 min per il briefing.
                  </li>
                  <li className="flex gap-3">
                    <span className="text-orange-400 font-bold shrink-0">4.</span>
                    Se ci piace lavorare insieme, si parte.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
