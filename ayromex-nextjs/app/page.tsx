'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { HiSparkles, HiArrowRight } from 'react-icons/hi2'
import { FaUtensils, FaHotel, FaStore, FaUserTie } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="overflow-hidden bg-dark-950">
      <Navbar />
      <WhatsAppButton />
      
      {/* 1. HERO SECTION: VIDEO BACKGROUND */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        
        {/* VIDEO BACKGROUND */}
        <div className="absolute inset-0 z-0 bg-black">
           <video 
             autoPlay 
             loop 
             muted 
             playsInline 
             className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
           >
             <source src="/hero-video.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/50 to-dark-950"></div>
        </div>
        
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            {/* Logo Big Animato - FIXATO */}
            <motion.div 
              variants={fadeInUp} 
              className="relative w-full max-w-[300px] md:max-w-[500px] h-auto mx-auto mb-10"
            >
               <Image 
                  src="/logo.svg" 
                  alt="Ayromex" 
                  width={500} 
                  height={300}
                  className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.6)]" 
                  priority
               />
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-none">
              MAKE IT <span className="text-orange-500">REAL.</span>
            </motion.h1>

            {/* Sottotitolo (Qui mancava il tag di apertura!) */}
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Il tuo brand merita di più di una grafichetta fatta con Canva. 
              Costruiamo identità, siti web e strategie che portano fatturato.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contatti" className="btn-primary w-full sm:w-auto shadow-xl shadow-orange-500/20 px-8 py-4 text-lg">
                Inizia il Progetto
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. MARQUEE SCORREVOLE */}
      <div className="bg-orange-500 py-3 relative z-20 overflow-hidden">
        <div className="flex whitespace-nowrap gap-8 text-black font-black text-xl uppercase tracking-widest animate-marquee">
            {[...Array(10)].map((_, i) => (
               <span key={i}>AYROMEX DIGITAL • BRANDING • SOCIAL MEDIA • WEB DESIGN • </span>
            ))}
        </div>
      </div>

      {/* 3. CASE STUDIES */}
      <section className="py-24 bg-dark-900">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
             <div>
                <span className="text-orange-500 font-bold uppercase tracking-widest text-sm">Portfolio</span>
                <h2 className="text-4xl font-display font-bold text-white mt-2">Lavori in evidenza</h2>
             </div>
             <Link href="/portfolio" className="hidden md:flex items-center gap-2 text-white hover:text-orange-500 transition-colors">
                Tutti i progetti <HiArrowRight />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              category="Food & Beverage" 
              title="Rilancio Pizzeria" 
              desc="Rebranding completo e gestione social per locale storico."
            />
            <ProjectCard 
              category="Corporate" 
              title="Studio Legale" 
              desc="Sito web istituzionale e immagine coordinata."
            />
            <ProjectCard 
              category="Retail" 
              title="E-commerce Moda" 
              desc="Shopify store e campagne advertising."
            />
          </div>
        </div>
      </section>

      {/* 4. TARGET SECTION */}
      <section className="py-24 bg-dark-950 border-t border-white/5">
        <div className="section-container text-center">
           <h2 className="text-3xl font-display font-bold text-white mb-16">Chi aiutiamo a crescere</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <TargetCard icon={<FaUtensils />} title="Ristorazione" />
              <TargetCard icon={<FaHotel />} title="Hotel & B&B" />
              <TargetCard icon={<FaStore />} title="Negozi" />
              <TargetCard icon={<FaUserTie />} title="Professionisti" />
           </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

function ProjectCard({ category, title, desc }: any) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[4/3] bg-dark-800 rounded-2xl border border-white/5 relative overflow-hidden mb-6 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
         <div className="w-24 h-24 relative opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
            {/* Usa logo.svg anche qui per coerenza */}
            <Image src="/logo.svg" alt="Project" fill className="object-contain" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">{category}</span>
      <h3 className="text-2xl font-bold text-white mt-2 mb-1 group-hover:text-orange-500 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  )
}

function TargetCard({ icon, title }: any) {
  return (
    <div className="bg-dark-900 p-6 rounded-xl border border-white/5 hover:bg-orange-500 hover:text-white transition-all duration-300 group">
      <div className="text-3xl text-orange-500 mb-4 flex justify-center group-hover:text-white">{icon}</div>
      <h4 className="text-lg font-bold">{title}</h4>
    </div>
  )
}