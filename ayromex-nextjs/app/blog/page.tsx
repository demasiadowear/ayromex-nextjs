'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { HiArrowLeft, HiClock, HiTag } from 'react-icons/hi2'

export default function Blog() {
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
              Blog
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="text-hero-lg font-display font-bold mb-6"
            >
              Insights su branding, design e business
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-light-50/80 leading-relaxed"
            >
              Guide pratiche, case study, trend e consigli per costruire brand forti. 
              Zero teoria, solo roba applicabile.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon / Empty State */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h2 className="text-display font-display font-bold mb-6">
              Blog in arrivo
            </h2>
            
            <p className="text-xl text-light-50/80 mb-8">
              Stiamo preparando contenuti di qualità su branding, design strategico, 
              social media e business growth. <strong>Stay tuned.</strong>
            </p>

            <div className="bg-dark-800/50 border border-orange-500/30 rounded-2xl p-8">
              <h3 className="font-bold mb-4">Argomenti in cantiere:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-light-50/80 text-left">
                <ul className="space-y-2">
                  <li>• Come costruire un brand da zero</li>
                  <li>• Errori comuni nel logo design</li>
                  <li>• Social media: coerenza visiva</li>
                  <li>• Print-ready: guida definitiva</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Branding per ristoranti</li>
                  <li>• Template Canva: pro e contro</li>
                  <li>• Case study: rebranding AUREA</li>
                  <li>• Automazioni AI per PMI</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup (Opzionale) */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="card text-center"
          >
            <h3 className="text-title font-display font-bold mb-4">
              Resta aggiornato
            </h3>
            <p className="text-light-50/80 mb-6">
              Vuoi ricevere notifica quando pubblichiamo nuovi articoli? 
              Lasciaci la tua email.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-light-50 placeholder:text-light-50/40 focus:outline-none focus:border-orange-500"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Iscriviti
              </button>
            </form>
            
            <p className="text-xs text-light-50/50 mt-4">
              Zero spam. Solo contenuti di valore. Cancellati quando vuoi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Articles (quando saranno pronti) */}
      <section className="section-spacing bg-dark-900" style={{ display: 'none' }}>
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {placeholderArticles.map((article, index) => (
              <motion.article
                key={index}
                variants={staggerItem}
                className="card group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
                
                <div className="flex items-center space-x-4 text-xs text-light-50/60 mb-4">
                  <span className="flex items-center">
                    <HiClock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center">
                    <HiTag className="w-4 h-4 mr-1" />
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-light-50/70 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <Link href={`/blog/${article.slug}`} className="text-orange-500 text-sm font-semibold inline-flex items-center">
                  Leggi articolo
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Placeholder articles (per quando il blog sarà attivo)
const placeholderArticles = [
  {
    slug: 'come-costruire-brand-da-zero',
    title: 'Come costruire un brand da zero (senza fare errori)',
    excerpt: 'Guida step-by-step per creare un\'identità visiva forte partendo da zero. Logo, palette, font: tutto quello che serve.',
    category: 'Branding',
    readTime: '8 min',
  },
  {
    slug: 'errori-logo-design',
    title: '7 errori comuni nel logo design (e come evitarli)',
    excerpt: 'Font illeggibili, troppi colori, no vettoriale: gli errori che vediamo più spesso nei loghi fai-da-te.',
    category: 'Design',
    readTime: '6 min',
  },
  {
    slug: 'social-coerenza-visiva',
    title: 'Social media: perché la coerenza visiva è tutto',
    excerpt: 'Feed Instagram che sembrano un puzzle casuale? Ecco come creare un sistema visivo coerente che converte.',
    category: 'Social Media',
    readTime: '10 min',
  },
]
