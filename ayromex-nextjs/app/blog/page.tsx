'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function Blog() {
  return (
    <main className="bg-[#030303] min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 section-container">
        {/* Intestazione Editoriale */}
        <div className="mb-24 border-b border-white/10 pb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-display font-bold text-white tracking-tighter mb-6"
          >
            INSIGHTS
          </motion.h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
             <p className="text-gray-400 max-w-xl text-lg">
               Pensieri sparsi su design, branding e come sopravvivere al digitale senza impazzire.
             </p>
             <span className="text-orange-500 font-mono text-xs tracking-widest uppercase">
               Archivio Editoriale • 2026
             </span>
          </div>
        </div>

        {/* Griglia Articoli Magazine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          
          {/* Articolo 1 (Grande) */}
          <BlogCard 
            category="BRANDING"
            date="12 GEN"
            title="Perché il tuo logo non vende (e mai lo farà)"
            excerpt="Spoiler: il problema non è il colore, è che nessuno capisce chi sei. Analisi spietata."
            slug="logo-che-non-vende"
            big
          />

          {/* Articolo 2 */}
          <BlogCard 
            category="STRATEGIA"
            date="05 GEN"
            title="Smetti di postare ogni giorno."
            excerpt="La quantità ha ucciso la qualità. Come pubblicare meno e fatturare di più."
            slug="smetti-di-postare"
          />

          {/* Articolo 3 */}
          <BlogCard 
            category="DESIGN"
            date="28 DIC"
            title="Il Minimalismo è morto?"
            excerpt="No, si è solo evoluto. Scopri il trend 'Brutalist' che sta conquistando i brand di lusso."
            slug="minimalismo-morto"
          />

           {/* Articolo 4 */}
           <BlogCard 
            category="AI & TECH"
            date="15 DIC"
            title="L'AI non ti ruberà il lavoro"
            excerpt="Ma chi la sa usare ti ruberà i clienti. Guida pratica per creativi spaventati."
            slug="ai-lavoro"
          />

        </div>
      </section>

      <Footer />
    </main>
  )
}

function BlogCard({ category, date, title, excerpt, slug, big }: any) {
  return (
    <Link href={`/blog/${slug}`} className={`group block ${big ? 'md:col-span-2' : ''}`}>
      <div className="border-t border-white/20 pt-6 flex flex-col h-full relative">
        <div className="flex justify-between items-center mb-6 text-xs font-mono tracking-widest text-gray-500">
          <span className="text-orange-500">{category}</span>
          <span>{date}</span>
        </div>
        
        <h3 className={`${big ? 'text-5xl md:text-7xl' : 'text-3xl md:text-4xl'} font-display font-bold text-white mb-4 group-hover:text-orange-500 transition-colors leading-tight`}>
          {title}
        </h3>
        
        <p className={`${big ? 'text-xl' : 'text-base'} text-gray-400 max-w-2xl mb-8 leading-relaxed`}>
          {excerpt}
        </p>

        <div className="mt-auto flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
          LEGGI <HiArrowUpRight />
        </div>
      </div>
    </Link>
  )
}