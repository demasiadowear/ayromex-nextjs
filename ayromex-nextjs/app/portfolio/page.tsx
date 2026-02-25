'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { HiArrowLeft } from 'react-icons/hi2'

const categories = ['Tutti', 'Branding', 'Social Media', 'Stampa', 'Presentazioni']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Tutti')
  
  const filteredProjects = activeFilter === 'Tutti'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <main>
      <Navbar />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="section-spacing pt-32 bg-gradient-hero">
        <div className="section-container">
          <Link href="/" className="inline-flex items-center text-light-50/60 hover:text-orange-500 mb-8 transition-colors">
            <HiArrowLeft className="w-4 h-4 mr-2" />
            Torna alla home
          </Link>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeInUp}
              className="text-orange-500 text-sm font-semibold uppercase tracking-wider block mb-4"
            >
              Portfolio
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="text-hero-lg font-display font-bold mb-6"
            >
              Progetti reali. Risultati concreti.
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-light-50/80 leading-relaxed"
            >
              Dalle poker room agli hotel luxury, dai ristoranti al retail. 
              Ogni progetto racconta un brand che <strong>sa dove sta andando</strong>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-dark-900 sticky top-20 z-40 border-b border-gray-700/30">
        <div className="section-container">
          <div className="flex items-center space-x-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-dark-800 text-light-50 hover:bg-dark-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  layout
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Gradient Background (placeholder) */}
                  <div className={`absolute inset-0 ${project.gradient}`} />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Category Badge */}
                    <div>
                      <span className="inline-block bg-orange-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Project Info */}
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {project.client}
                      </h3>
                      <p className="text-white/80 text-sm mb-2">
                        {project.title}
                      </p>
                      {project.description && (
                        <p className="text-white/60 text-xs">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Arrow */}
                  <div className="absolute top-8 right-8 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-light-50/60">
                Nessun progetto trovato in questa categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Case Study Notice */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-dark-800/50 border border-orange-500/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-title font-display font-bold mb-4">
              Vuoi vedere case study completi?
            </h3>
            <p className="text-light-50/80 mb-6">
              Portfolio dettagliato con "prima/dopo", processo creativo e risultati disponibile su richiesta.
            </p>
            <Link href="/contatti" className="btn-primary inline-block">
              Richiedi portfolio completo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-display font-display font-bold mb-6">
              Vuoi vedere il tuo progetto qui?
            </h2>
            <p className="text-xl text-light-50/80 mb-8">
              Iniziamo a costruire la tua identità visiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="btn-primary">
                Contattaci
              </Link>
              <Link href="/servizi" className="btn-secondary">
                Scopri i servizi
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Projects Data (usa immagini reali quando disponibili)
const projects = [
  {
    id: 1,
    client: 'Oceanis Retail',
    title: 'Brand Identity Completa',
    category: 'Branding',
    description: 'Logo, palette, insegne, packaging',
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800',
    // image: '/portfolio/oceanis.jpg' // quando disponibile
  },
  {
    id: 2,
    client: 'AUREA Hotel',
    title: 'Visual Identity System',
    category: 'Branding',
    description: 'Logo luxury con palette oro',
    gradient: 'bg-gradient-to-br from-amber-600 to-amber-800',
  },
  {
    id: 3,
    client: 'CIKO Pizzeria',
    title: 'Full Branding Package',
    category: 'Branding',
    description: 'Logo, menu, insegne, packaging',
    gradient: 'bg-gradient-to-br from-red-600 to-red-800',
  },
  {
    id: 4,
    client: 'APEX Card Room',
    title: 'Naming & Brand Identity',
    category: 'Branding',
    description: 'Nome, logo, sistema visivo completo',
    gradient: 'bg-gradient-to-br from-purple-600 to-purple-800',
  },
  {
    id: 5,
    client: 'THE HUB HOTEL',
    title: 'Boutique Hotel Branding',
    category: 'Branding',
    description: 'Logo, guidelines, materiali',
    gradient: 'bg-gradient-to-br from-teal-600 to-teal-800',
  },
  {
    id: 6,
    client: 'Poker Room Events',
    title: 'Tournament Graphics Package',
    category: 'Social Media',
    description: 'Post, stories, reel cover tornei',
    gradient: 'bg-gradient-to-br from-green-600 to-green-800',
  },
  {
    id: 7,
    client: 'Le Dimore B&B',
    title: 'Social Strategy & Templates',
    category: 'Social Media',
    description: 'Griglia visiva + template Canva',
    gradient: 'bg-gradient-to-br from-pink-600 to-pink-800',
  },
  {
    id: 8,
    client: 'Fashion Boutique',
    title: 'Feed Instagram Coordinato',
    category: 'Social Media',
    description: 'Layout premium + reel cover',
    gradient: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
  },
  {
    id: 9,
    client: 'Ristorante Locale',
    title: 'Menu & Signage Design',
    category: 'Stampa',
    description: 'Menu tri-fold + insegne esterne',
    gradient: 'bg-gradient-to-br from-orange-600 to-orange-800',
  },
  {
    id: 10,
    client: 'Retail Store',
    title: 'Packaging & Labels',
    category: 'Stampa',
    description: 'Box, etichette, shopping bag',
    gradient: 'bg-gradient-to-br from-cyan-600 to-cyan-800',
  },
  {
    id: 11,
    client: 'Evento Corporate',
    title: 'Locandine & Materiali Promo',
    category: 'Stampa',
    description: 'Poster, flyer, badge eventi',
    gradient: 'bg-gradient-to-br from-violet-600 to-violet-800',
  },
  {
    id: 12,
    client: 'Tech Startup',
    title: 'Investor Pitch Deck',
    category: 'Presentazioni',
    description: 'Slide professionali per funding round',
    gradient: 'bg-gradient-to-br from-slate-600 to-slate-800',
  },
]
