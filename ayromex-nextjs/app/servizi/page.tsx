'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp } from '@/lib/animations'
import { HiPaintBrush, HiMegaphone, HiPrinter, HiPresentationChartLine, HiCommandLine, HiCheck } from 'react-icons/hi2'

export default function Servizi() {
  return (
    <main className="bg-[#030303] min-h-screen">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-40 pb-20 section-container">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Tutto quello che serve per <span className="text-orange-500">un brand forte.</span>
          </motion.h1>
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl text-gray-400"
          >
            Dalla strategia alla consegna. Ogni servizio include revisioni illimitate, file print-ready e supporto continuativo. <strong className="text-white">Poche cose, fatte con criterio.</strong>
          </motion.p>
        </div>

        {/* Services List - SENZA PREZZI */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <ServiceSection key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center p-12 bg-dark-900 rounded-3xl border border-white/5">
            <h2 className="text-3xl font-bold text-white mb-6">Non sai cosa ti serve?</h2>
            <p className="text-gray-400 mb-8">Parliamone. Analizziamo la tua situazione e decidiamo insieme.</p>
            <Link href="/contatti" className="btn-primary inline-flex px-8 py-4">Richiedi Consulenza Gratuita</Link>
        </div>

      </section>

      <Footer />
    </main>
  )
}

function ServiceSection({ service, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-12 items-start p-8 md:p-12 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-orange-500/30 transition-colors group"
    >
      {/* Icon Area */}
      <div className="w-16 h-16 md:w-24 md:h-24 bg-orange-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-orange-500 text-3xl md:text-4xl group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
        {service.icon}
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          {service.title}
        </h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-3xl">
          {service.description}
        </p>
        
        <div className="bg-white/5 rounded-2xl p-6 md:p-8">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-500 rounded-full"></span> Cosa include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {service.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                <HiCheck className="text-orange-500 text-lg flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
                </div>
            ))}
            </div>
        </div>
      </div>
    </motion.div>
  )
}

const services = [
  {
    title: 'Branding & Identità Visiva',
    description: 'Costruiamo l\'identità del tuo brand da zero o lo rinnoviamo completamente. Logo, palette, tipografia, linee guida: tutto quello che serve per sembrare un brand vero, non un hobby.',
    icon: <HiPaintBrush />,
    features: [
      'Logo professionale vettoriale (AI + SVG)',
      'Varianti logo (colore, B/N, icona)',
      'Palette colori branded',
      'Sistema tipografico font',
      'Brand guidelines PDF (Manuale)',
      'Biglietti da visita design',
      'Export print-ready (CMYK, 300dpi)',
      'Cessione diritti completa'
    ]
  },
  {
    title: 'Social Media Design',
    description: 'Post, caroselli, reel cover e stories: tutto coordinato e brandizzato. Creiamo template Canva riutilizzabili per darti autonomia, oppure gestiamo noi la creatività mensile.',
    icon: <HiMegaphone />,
    features: [
      'Griglia visiva social (Layout + Stile)',
      'Template caroselli multipage',
      'Reel cover design coordinate',
      'Kit Canva modificabile da te',
      'Palette e font preimpostati',
      'Istruzioni d\'uso',
      'Export ottimizzati per mobile',
      'Revisioni illimitate'
    ]
  },
  {
    title: 'Stampa & Materiali Print',
    description: 'Menu, insegne, packaging, flyer, locandine: tutto print-ready con abbondanze, CMYK e risoluzione corretta. Mandi in stampa e funziona. Sempre.',
    icon: <HiPrinter />,
    features: [
      'Design menu completo',
      'Insegne e segnaletica',
      'Packaging brandizzato',
      'Flyer e locandine',
      'Poster eventi',
      'Voucher e gift card',
      'File PDF print-ready',
      'Gestione profili colore'
    ]
  },
  {
    title: 'Siti Web & Landing Page',
    description: 'Siti web che vendono, non solo vetrine. Veloci, ottimizzati per Google e perfetti su cellulare. Dal sito one-page all\'e-commerce strutturato.',
    icon: <HiCommandLine />,
    features: [
      'Sito web responsive (Mobile friendly)',
      'Ottimizzazione SEO base',
      'Copywriting persuasivo',
      'Integrazione WhatsApp/Contatti',
      'Dominio e Hosting setup',
      'CMS facile da gestire',
      'Form cattura contatti',
      'Analytics installazione'
    ]
  },
  {
    title: 'Pitch Deck & Presentazioni',
    description: 'Slide pulite, chiare, credibili. Zero cringe, zero WordArt. Ideale per investitori, clienti corporate o presentazioni business serie.',
    icon: <HiPresentationChartLine />,
    features: [
      'Design slide master',
      'Infografiche e grafici dati',
      'Selezione immagini stock premium',
      'Animazioni sobrie',
      'Export PDF e PPT modificabile',
      'Copywriting titoli',
      'Stile coerente col brand',
      'Consegna rapida'
    ]
  }
]