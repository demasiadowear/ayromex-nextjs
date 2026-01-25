'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { 
  HiSparkles, HiPaintBrush, HiCommandLine, HiMegaphone, 
  HiShoppingBag, HiArrowRight, HiCheckBadge 
} from 'react-icons/hi2'
import { FaUtensils, FaHotel, FaStore, FaUserTie } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="overflow-hidden bg-dark-950">
      <Navbar />
      <WhatsAppButton />
      
      {/* 1. HERO SECTION: IMPATTO REALE */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-hero pt-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div> {/* Opzionale se hai il pattern */}
        
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            {/* Badge "No Fuffa" */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Ayromex Digital Creations
            </motion.div>

            {/* Headline Potente */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Design e Marketing <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                per chi fa sul serio.
              </span>
            </motion.h1>

            {/* Subhead Concreta */}
            <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Aiutiamo attività locali e PMI a crescere con un'immagine professionale e social che funzionano. 
              Niente teorie complesse, solo risultati pratici.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contatti" className="btn-primary w-full sm:w-auto shadow-lg shadow-orange-500/20">
                Richiedi Preventivo
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
                Guarda i Lavori
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. SCROLLING MARQUEE (Effetto Studio Pro) */}
      <div className="bg-orange-600 overflow-hidden py-4 rotate-1 scale-105 border-y-4 border-black relative z-20">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 text-black font-black text-2xl uppercase tracking-tighter"
        >
          {/* Ripetiamo tante volte per coprire lo schermo */}
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              Digital Creations <HiSparkles /> Branding <HiSparkles /> Social Media <HiSparkles /> Websites <HiSparkles />
            </span>
          ))}
        </motion.div>
      </div>

      {/* 3. CHI SERVIAMO (Target Locali) */}
      <section className="py-24 bg-dark-900">
        <div className="section-container text-center">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Target</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-12">Specialisti in attività locali</h3>
           </motion.div>

           <motion.div 
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
             className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
           >
              <TargetCard icon={<FaUtensils />} title="Ristorazione" desc="Menu, Social, Foto" />
              <TargetCard icon={<FaHotel />} title="Hotel & B&B" desc="Booking, Sito, Brand" />
              <TargetCard icon={<FaStore />} title="Retail & Negozi" desc="Promo, Vetrine, Ads" />
              <TargetCard icon={<FaUserTie />} title="Professionisti" desc="Personal Brand, LinkedIn" />
           </motion.div>
        </div>
      </section>

      {/* 4. SERVIZI REALI */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-2xl">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Cosa Facciamo</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2">
                Soluzioni complete <br /> per il tuo business.
              </h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Link href="/servizi" className="text-white border-b border-orange-500 pb-1 hover:text-orange-500 transition-colors inline-flex items-center gap-2">
                Scopri tutti i servizi <HiArrowRight />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ServiceCard 
              icon={<HiPaintBrush className="w-8 h-8" />}
              title="Branding & Identità"
              desc="Dal logo ai colori aziendali. Costruiamo un'immagine che ti fa preferire alla concorrenza."
              tags={['Logo', 'Brand Kit', 'Rebranding']}
            />
            <ServiceCard 
              icon={<HiMegaphone className="w-8 h-8" />}
              title="Social Media"
              desc="Gestione pagine, creazione contenuti, reel e piani editoriali che portano interazioni vere."
              tags={['Instagram', 'Facebook', 'Content']}
            />
             <ServiceCard 
              icon={<HiCommandLine className="w-8 h-8" />}
              title="Siti Web & E-Comm"
              desc="Siti vetrina veloci o e-commerce per vendere. Ottimizzati per Google e per il mobile."
              tags={['Wordpress', 'Next.js', 'SEO']}
            />
             <ServiceCard 
              icon={<HiShoppingBag className="w-8 h-8" />}
              title="Stampa & Offline"
              desc="Tutto ciò che si tocca: Menu, bigliettini, packaging, insegne e vetrofanie."
              tags={['Print Ready', 'Packaging', 'Flyer']}
            />
            <ServiceCard 
              icon={<HiCheckBadge className="w-8 h-8" />}
              title="Consulenza Strategica"
              desc="Analizziamo il tuo mercato e ti diciamo esattamente cosa fare per crescere."
              tags={['Audit', 'Strategia', 'Growth']}
            />
            <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 flex flex-col justify-center items-center text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Hai un progetto specifico?</h3>
              <p className="mb-6 opacity-90">Parliamo delle tue esigenze e troviamo la soluzione su misura.</p>
              <Link href="/contatti" className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Contattaci ora
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CTA FINALE */}
      <section className="py-24 bg-dark-900 border-t border-white/5">
        <div className="section-container text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Pronto a fare il salto di qualità?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Che tu sia una pizzeria, un negozio o una startup, <br />
            abbiamo gli strumenti per farti notare.
          </p>
          <div className="flex justify-center gap-6">
             <Link href="https://wa.me/390808407861" target="_blank" className="btn-primary flex items-center gap-2">
               <span className="text-xl">💬</span> Scrivici su WhatsApp
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// COMPONENTI DI SUPPORTO (Per tenere il codice pulito)

function TargetCard({ icon, title, desc }: any) {
  return (
    <motion.div variants={staggerItem} className="bg-dark-800/50 p-6 rounded-xl border border-white/5 hover:border-orange-500/50 transition-colors text-center group">
      <div className="text-4xl text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-500">{desc}</p>
    </motion.div>
  )
}

function ServiceCard({ icon, title, desc, tags }: any) {
  return (
    <motion.div variants={staggerItem} className="bg-dark-900 p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-all group">
      <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string, i: number) => (
          <span key={i} className="text-xs bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}