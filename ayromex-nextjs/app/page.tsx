'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { FaUtensils, FaHotel, FaStore, FaUserTie } from 'react-icons/fa'

export default function Home() {
  // Effetto Mouse Spotlight
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <main className="bg-[#030303]">
      <Navbar />
      <WhatsAppButton />
      
      {/* 1. HERO SECTION CON SPOTLIGHT */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden group"
        onMouseMove={handleMouseMove}
      >
        {/* Spotlight Effect (Luce che segue il mouse) */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(249, 115, 22, 0.10),
                transparent 80%
              )
            `,
          }}
        />

        {/* Griglia di sfondo molto sottile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Sfondo Video Opzionale */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
             <source src="/hero-video.mp4" type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]"></div>
        </div>
        
        <div className="section-container relative z-10 text-center mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            {/* Logo Gigante */}
            <motion.div variants={fadeInUp} className="relative w-full max-w-[600px] mx-auto mb-12">
               <Image 
                  src="/logo.svg" 
                  alt="Ayromex" 
                  width={600} 
                  height={300}
                  className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(249,115,22,0.4)]" 
                  priority
               />
            </motion.div>

            {/* Testo stile "Manifesto" */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter leading-[0.9]">
              MAKE IT <span className="text-orange-500 italic">REAL.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Il branding non è un gioco. Costruiamo identità digitali che <span className="text-white font-medium">dominano il mercato locale</span>.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contatti" className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform">
                <span className="relative z-10">INIZIA ORA</span>
                <div className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. MARQUEE STILIZZATO */}
      <div className="bg-white py-4 relative z-20 overflow-hidden -rotate-1 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
        <div className="flex whitespace-nowrap gap-12 text-black font-black text-3xl uppercase tracking-tighter animate-marquee">
            {[...Array(8)].map((_, i) => (
               <span key={i} className="flex items-center gap-4">
                 AYROMEX <span className="text-orange-600">●</span> DIGITAL <span className="text-orange-600">●</span> CREATIONS <span className="text-orange-600">●</span>
               </span>
            ))}
        </div>
      </div>

      {/* 3. TARGET MINIMAL */}
      <section className="py-32 bg-[#030303]">
        <div className="section-container">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
              <TargetCard icon={<FaUtensils />} title="RISTORAZIONE" />
              <TargetCard icon={<FaHotel />} title="HOSPITALITY" />
              <TargetCard icon={<FaStore />} title="RETAIL" />
              <TargetCard icon={<FaUserTie />} title="PERSONAL BRAND" />
           </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

function TargetCard({ icon, title }: any) {
  return (
    <div className="aspect-square bg-[#0a0a0a] rounded-3xl border border-white/5 flex flex-col items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-500 group cursor-default">
      <div className="text-4xl text-gray-500 mb-4 group-hover:text-white group-hover:scale-110 transition-transform">{icon}</div>
      <h4 className="text-sm font-bold tracking-widest text-gray-500 group-hover:text-white">{title}</h4>
    </div>
  )
}