'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { HiGlobeEuropeAfrica, HiSparkles, HiBolt, HiUserGroup } from 'react-icons/hi2'

export default function ChiSiamo() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  
  // Effetto rotazione logo mentre scrolli
  const rotateLogo = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <main ref={containerRef} className="bg-[#030303] min-h-screen">
      <Navbar />
      
      {/* 1. HERO MANIFESTO */}
      <section className="pt-40 pb-20 px-6 min-h-[80vh] flex flex-col justify-center items-center relative overflow-hidden">
         {/* Sfondo Noise */}
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

         <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center z-10"
         >
           <span className="text-orange-500 font-mono text-sm tracking-[0.4em] uppercase mb-6 block">The Agency</span>
           <h1 className="text-[10vw] leading-[0.8] font-display font-bold text-white tracking-tighter mix-blend-difference mb-8">
             WE ARE <br /> AYROMEX.
           </h1>
           <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
             Non siamo "creativi pazzi". Siamo <strong className="text-white">strateghi ossessionati</strong> dal risultato.
             Costruiamo brand che non passano inosservati.
           </p>
         </motion.div>
      </section>

      {/* 2. STATS & VISION (Bento Grid Style) */}
      <section className="py-20 px-6">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-2 bg-[#0a0a0a] border border-white/5 p-10 rounded-3xl flex flex-col justify-between min-h-[300px]"
            >
               <HiSparkles className="text-4xl text-orange-500 mb-6" />
               <div>
                 <h3 className="text-3xl font-display font-bold text-white mb-4">Visione Olistica</h3>
                 <p className="text-gray-400">Non facciamo solo "il logo". Curiamo l'intero ecosistema digitale. Se il logo è bello ma il sito non vende, abbiamo fallito. Noi non falliamo.</p>
               </div>
            </motion.div>

            {/* Card 2: Sedi */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl text-center flex flex-col items-center justify-center"
            >
               <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 text-orange-500">
                 <HiGlobeEuropeAfrica className="text-3xl" />
               </div>
               <h4 className="text-4xl font-bold text-white mb-1">2</h4>
               <p className="text-sm font-mono uppercase tracking-widest text-gray-500">SEDI (IT / RO)</p>
            </motion.div>

            {/* Card 3: Anni/Exp */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#0f0f0f] border border-white/5 p-8 rounded-3xl text-center flex flex-col items-center justify-center relative overflow-hidden"
            >
               {/* Logo rotante in background */}
               <motion.div style={{ rotate: rotateLogo }} className="absolute opacity-5 w-40 h-40">
                  <Image src="/logo.svg" alt="logo bg" width={160} height={160} />
               </motion.div>
               
               <h4 className="text-4xl font-bold text-white mb-1 z-10">100%</h4>
               <p className="text-sm font-mono uppercase tracking-widest text-gray-500 z-10">DIGITAL FOCUS</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. IL NOSTRO DNA (Valori) */}
      <section className="py-32 border-t border-white/5">
         <div className="section-container">
            <h2 className="text-sm font-mono text-orange-500 mb-12 uppercase tracking-widest">Il nostro DNA</h2>
            
            <div className="space-y-12">
               <ValueRow 
                 num="01" 
                 title="NO BULLSH*T." 
                 desc="Odiamo le riunioni inutili e le parole complicate. Parliamo chiaro, lavoriamo sodo, consegniamo puntuali." 
               />
               <ValueRow 
                 num="02" 
                 title="QUALITY OVER QUANTITY." 
                 desc="Non accettiamo 100 clienti al mese. Ne prendiamo pochi e li seguiamo come se fossero la nostra azienda." 
               />
               <ValueRow 
                 num="03" 
                 title="DESIGN IS BUSINESS." 
                 desc="Non facciamo arte per musei. Facciamo design che deve fatturare, convertire e portare clienti alla tua porta." 
               />
            </div>
         </div>
      </section>

      {/* 4. TEAM CTA */}
      <section className="py-20 bg-orange-600 text-black text-center">
         <div className="section-container">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Vuoi entrare nel team?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-medium opacity-80">
              Cerchiamo sempre talenti. Se sei un designer, developer o strategist con la "cazzimma", scrivici.
            </p>
            <Link href="/contatti" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center gap-2">
               <HiUserGroup /> Candidati o Collabora
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  )
}

function ValueRow({ num, title, desc }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-6 md:gap-20 items-start md:items-center border-b border-white/10 pb-12 group hover:border-orange-500/50 transition-colors"
    >
       <span className="text-orange-500 font-mono text-xl md:text-2xl">{num}</span>
       <h3 className="text-4xl md:text-6xl font-display font-bold text-white group-hover:text-orange-500 transition-colors">{title}</h3>
       <p className="text-gray-400 max-w-md md:ml-auto leading-relaxed">{desc}</p>
    </motion.div>
  )
}