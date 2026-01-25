'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function Home() {
  // --- LOGICA CURSORE CUSTOM ---
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", mouseMove)
    return () => window.removeEventListener("mousemove", mouseMove)
  }, [])

  const cursorEnter = () => setCursorVariant("hovered")
  const cursorLeave = () => setCursorVariant("default")

  // --- LOGICA PARALLAX HERO ---
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <main ref={containerRef} className="bg-[#030303] relative selection:bg-orange-500 selection:text-black">
      <Navbar />
      <WhatsAppButton />

      {/* CURSORE FLUIDO */}
      <motion.div 
        className={`custom-cursor hidden md:block ${cursorVariant}`}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* 1. HERO SECTION: VIDEO MASK (Il video scorre DENTRO il testo) */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
         {/* Video di sfondo (Nascosto sotto, visibile solo nella mask) */}
         <video 
            autoPlay loop muted playsInline 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
         >
            <source src="/hero-video.mp4" type="video/mp4" />
         </video>

         {/* Maschera Nera che copre il video tranne dove c'è il testo */}
         <div className="absolute inset-0 bg-[#030303] mix-blend-multiply z-10"></div>
         
         {/* Testo Bianco che "buca" la maschera (tecnica mix-blend) */}
         <div className="relative z-20 text-center mix-blend-screen bg-[#030303] w-full h-full flex flex-col items-center justify-center pt-20">
             <motion.h1 
               style={{ y: yHero }}
               onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}
               className="text-[15vw] font-black uppercase text-white leading-none tracking-tighter select-none"
             >
               AYROMEX
             </motion.h1>
             <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                className="text-white text-xl md:text-2xl mt-8 font-light tracking-[0.2em] uppercase"
             >
                Digital Creations
             </motion.p>
         </div>

         {/* Overlay Gradiente per pulizia */}
         <div className="absolute inset-0 z-30 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none"></div>
      </section>

      {/* 2. MANIFESTO (Testo Gigante) */}
      <section className="py-40 px-6 relative z-40 bg-[#030303]">
         <div className="max-w-7xl mx-auto">
            <h2 
              onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}
              className="text-4xl md:text-7xl font-display font-bold text-white leading-[1.1]"
            >
               Smetti di essere invisibile. <br/>
               <span className="text-gray-600">Costruiamo ecosistemi digitali</span> <br/>
               che portano il tuo business nel <span className="text-orange-500">futuro.</span>
            </h2>
         </div>
      </section>

      {/* 3. STICKY CARDS (Effetto "Mazzo di carte" che si impila) */}
      <div className="bg-[#030303] relative pb-40 px-4 md:px-10">
         <div className="text-center mb-32">
            <span className="text-orange-500 font-mono tracking-widest uppercase text-sm">Selected Services</span>
            <h3 className="text-5xl md:text-6xl text-white font-bold mt-4">Cosa facciamo</h3>
         </div>

         {/* SERVICE 01 */}
         <StickyCard 
            i={0} 
            title="BRAND IDENTITY" 
            desc="Il tuo marchio non è solo un logo. È la storia che racconti. Naming, Logo Design, Linee Guida e Tono di Voce." 
            num="01" 
            color="bg-[#111]"
            onEnter={cursorEnter} onLeave={cursorLeave}
         />

         {/* SERVICE 02 */}
         <StickyCard 
            i={1} 
            title="WEB EXPERIENCE" 
            desc="Siti web fluidi, veloci e ottimizzati SEO. Next.js, 3D Interactions ed E-commerce Shopify." 
            num="02" 
            color="bg-[#161616]"
            onEnter={cursorEnter} onLeave={cursorLeave}
         />

         {/* SERVICE 03 */}
         <StickyCard 
            i={2} 
            title="SOCIAL MEDIA" 
            desc="Content creation, Reels virali e gestione community. Trasformiamo i follower in clienti paganti." 
            num="03" 
            color="bg-[#1a1a1a]"
            onEnter={cursorEnter} onLeave={cursorLeave}
         />

         {/* SERVICE 04 (Orange Pop) */}
         <StickyCard 
            i={3} 
            title="ADVERTISING" 
            desc="Campagne Meta & Google Ads chirurgiche. Portiamo traffico qualificato, non click a caso." 
            num="04" 
            color="bg-orange-600" 
            textColor="text-black"
            onEnter={cursorEnter} onLeave={cursorLeave}
         />
      </div>

      {/* 4. CTA FINALE GIGANTE */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black text-center relative overflow-hidden group">
         <Link href="/contatti" 
               onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}
               className="relative z-10 flex flex-col items-center"
         >
            <span className="text-sm font-bold uppercase tracking-widest mb-4 opacity-50">Sei pronto?</span>
            <h2 className="text-[12vw] font-black leading-[0.85] tracking-tighter hover:text-orange-600 transition-colors duration-300">
               START
            </h2>
            <h2 className="text-[12vw] font-black leading-[0.85] tracking-tighter hover:text-orange-600 transition-colors duration-300">
               PROJECT
            </h2>
            <div className="mt-12 inline-flex items-center gap-4 text-xl md:text-2xl font-bold uppercase tracking-widest border-b-2 border-black pb-2 group-hover:border-orange-600">
               Contattaci <HiArrowUpRight />
            </div>
         </Link>
      </section>

      <Footer />
    </main>
  )
}

// Componente Card che si "Incolla" (Sticky)
function StickyCard({ i, title, desc, num, color, textColor = "text-white", onEnter, onLeave }: any) {
   // Calcolo "top" dinamico per impilarle leggermente sfalsate
   const topOffset = 100 + (i * 20); 

   return (
     <div className={`sticky h-[60vh] flex items-start justify-center mb-12`} style={{ top: topOffset }}>
       <motion.div 
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6 }}
         onMouseEnter={onEnter} 
         onMouseLeave={onLeave}
         className={`${color} ${textColor} w-full max-w-5xl rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl flex flex-col md:flex-row justify-between gap-8 md:items-center relative overflow-hidden hover:scale-[1.02] transition-transform duration-500`}
       >
          <div className="flex-1 relative z-10">
             <div className="flex items-center gap-4 mb-6 opacity-50 font-mono text-sm">
                <span className="w-2 h-2 rounded-full bg-current"></span>
                SERVICE {num}
             </div>
             <h3 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">{title}</h3>
             <p className="text-lg md:text-2xl opacity-80 leading-relaxed max-w-xl">{desc}</p>
          </div>
          
          <div className="relative z-10">
             <div className="w-20 h-20 rounded-full border border-current flex items-center justify-center opacity-50 group-hover:bg-white group-hover:text-black transition-all">
                <HiArrowUpRight className="text-4xl" />
             </div>
          </div>
       </motion.div>
     </div>
   )
}