'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { HiArrowUpRight, HiSparkles } from 'react-icons/hi2'
import { useRef } from 'react'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Parallax Effect per il testo
  const yText = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <main ref={containerRef} className="bg-[#030303] relative">
      <Navbar />
      <WhatsAppButton />
      
      {/* 1. HERO: LESS IS MORE */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
         {/* Video Background Sfumato */}
         <div className="absolute inset-0 z-0">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 scale-105">
               <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent" />
         </div>

         <motion.div 
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           className="relative z-10 text-center"
         >
            {/* Logo SVG Pulito */}
            <div className="mb-8 w-48 md:w-64 mx-auto">
               <Image src="/logo.svg" alt="Ayromex" width={300} height={100} className="w-full h-auto drop-shadow-2xl" priority />
            </div>

            <h1 className="text-[12vw] leading-[0.85] font-display font-bold tracking-tighter text-white mix-blend-difference">
              MAKE IT <br /> <span className="text-orange-500">REAL.</span>
            </h1>
         </motion.div>

         <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-0 right-0 text-center"
         >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 animate-pulse">Scroll to explore</p>
         </motion.div>
      </section>

      {/* 2. MANIFESTO (Testo Gigante SEO friendly) */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.p 
          style={{ y: yText }}
          className="text-3xl md:text-6xl font-display font-medium leading-tight text-gray-300"
        >
          Non siamo la solita agenzia. <span className="text-white">Costruiamo ecosistemi digitali</span> per brand che non si accontentano. 
          Dal branding strategico allo sviluppo web performante. 
          <span className="text-orange-500 block mt-4">Niente fuffa, solo ROI.</span>
        </motion.p>
      </section>

      {/* 3. BENTO GRID (I Servizi Visivi) */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto">
           <div className="flex justify-between items-end mb-12 px-2">
              <h2 className="text-sm font-mono text-orange-500 uppercase tracking-widest">Selected Services</h2>
              <Link href="/servizi" className="hidden md:flex items-center gap-2 text-white hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-wider">
                 View All <HiArrowUpRight />
              </Link>
           </div>

           {/* GRIGLIA BENTO */}
           <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
              
              {/* Box 1: BRANDING (Grande Verticale) */}
              <BentoCard 
                className="md:col-span-1 md:row-span-2 bg-[#0a0a0a]"
                title="BRAND IDENTITY"
                subtitle="Il volto del tuo business"
                tags={['Logo Design', 'Guidelines', 'Typography']}
                image="/grid-brand.jpg" // Se non hai img, userà un gradiente
                gradient="from-orange-500/20 to-transparent"
              />

              {/* Box 2: SOCIAL (Orizzontale) */}
              <BentoCard 
                className="md:col-span-2 md:row-span-1 bg-[#0f0f0f]"
                title="SOCIAL STRATEGY"
                subtitle="Contenuti che convertono"
                tags={['Content Creation', 'Reels', 'Advertising']}
                gradient="from-blue-500/20 to-transparent"
              />

              {/* Box 3: WEB (Piccolo) */}
              <BentoCard 
                className="md:col-span-1 md:row-span-1 bg-[#0a0a0a]"
                title="WEB DEVELOPMENT"
                subtitle="Next.js & Performance"
                tags={['SEO', 'E-commerce', 'Speed']}
                gradient="from-purple-500/20 to-transparent"
              />

              {/* Box 4: PRINT (Piccolo) */}
              <BentoCard 
                className="md:col-span-1 md:row-span-1 bg-[#0f0f0f]"
                title="PRINT & PACKAGING"
                subtitle="Esperienza tattile"
                tags={['Menu', 'Brochure', 'Insegne']}
                gradient="from-green-500/20 to-transparent"
              />

           </div>
           
           <div className="mt-8 text-center md:hidden">
              <Link href="/servizi" className="inline-flex items-center gap-2 text-white border-b border-orange-500 pb-1">
                 Tutti i servizi <HiArrowUpRight />
              </Link>
           </div>
        </div>
      </section>

      {/* 4. MARQUEE INFINITO (Separatore) */}
      <div className="py-20 overflow-hidden">
        <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
           className="flex whitespace-nowrap text-[10vw] font-black uppercase text-[#1a1a1a] leading-none select-none"
        >
           Ayromex • Strategy • Design • Code • Ayromex • Strategy • Design • Code •
        </motion.div>
      </div>

      {/* 5. CTA FINALE IMPATTANTE */}
      <section className="h-[80vh] flex flex-col items-center justify-center bg-orange-600 text-black px-4 text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
         
         <motion.h2 
           initial={{ y: 50, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8 z-10"
         >
            LET'S TALK.
         </motion.h2>
         
         <Link href="/contatti" className="z-10 bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-300 flex items-center gap-3">
            Inizia il progetto <HiSparkles className="text-orange-500" />
         </Link>
      </section>

      <Footer />
    </main>
  )
}

// Componente Card "Bento" Riutilizzabile
function BentoCard({ className, title, subtitle, tags, gradient }: any) {
  return (
    <div className={`${className} rounded-3xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col justify-between`}>
       {/* Background Gradient on Hover */}
       <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
       
       <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
             {tags.map((tag: string, i: number) => (
                <span key={i} className="text-[10px] font-mono uppercase bg-white/10 px-2 py-1 rounded text-white/70">{tag}</span>
             ))}
          </div>
       </div>

       <div className="relative z-10">
          <h3 className="text-3xl font-display font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm">{subtitle}</p>
       </div>

       {/* Icona Arrow che appare */}
       <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <HiArrowUpRight className="text-2xl text-white" />
       </div>
    </div>
  )
}