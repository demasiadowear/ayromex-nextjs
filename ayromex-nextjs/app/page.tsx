'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
} from '@/lib/animations'
import { 
  HiSparkles,
  HiPaintBrush,
  HiPhoto,
  HiDocumentText,
  HiPresentationChartLine,
  HiPrinter,
  HiCog,
  HiArrowRight,
} from 'react-icons/hi2'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <WhatsAppButton />
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge Pulito */}
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-5 py-2 mb-8">
              <HiSparkles className="w-4 h-4 text-orange-500" />
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">AYROMEX Creative Studio</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-hero-xl font-display font-bold text-light-50 mb-6"
            >
              Design che fa sembrare grande{' '}
              <span className="text-gradient">il tuo brand</span>
            </motion.h1>

            {/* Subheadline - Più leggibile */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-light-50/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Niente "grafichette". Creiamo sistemi visivi coerenti per stampa e digitale.
              Identità solide per chi vuole smettere di giocare e iniziare a competere.
            </motion.p>

            {/* CTAs - Senza distrazioni sotto */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contatti" className="btn-primary w-full sm:w-auto">
                Richiedi preventivo
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
                Guarda i lavori
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-24"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-light-50/30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* USP CARDS - Semplificate */}
      <section className="py-12 bg-dark-900 border-y border-white/5">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={staggerItem} className="text-center">
              <h3 className="text-lg font-bold text-white mb-1">Sistemi</h3>
              <p className="text-light-50/50 text-sm">Identità coerenti</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <h3 className="text-lg font-bold text-white mb-1">Output</h3>
              <p className="text-light-50/50 text-sm">Stampa + Web</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <h3 className="text-lg font-bold text-white mb-1">Focus</h3>
              <p className="text-light-50/50 text-sm">Business first</p>
            </motion.div>
            <motion.div variants={staggerItem} className="text-center">
              <h3 className="text-lg font-bold text-white mb-1">Approccio</h3>
              <p className="text-light-50/50 text-sm">Serio ma agile</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* METODO SECTION */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-display font-display font-bold mb-6">
              Mentalità da studio, agilità da startup.
            </h2>
            <p className="text-xl text-light-50/80 mb-12">
              Ti portiamo ordine: direzione visiva, regole, consistenza. 
              Così non sembri "uno che ci prova", ma un brand che sa dove sta andando.
            </p>

            <div className="bg-dark-900 rounded-2xl p-8 border border-white/5">
              <h3 className="text-title font-display font-bold mb-8 text-orange-500">Come lavoriamo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {metodSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-light-50/60 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI SECTION - PULITA */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3 block">
              Servizi
            </span>
            <h2 className="text-display font-display font-bold mb-6">
              Cosa facciamo (bene)
            </h2>
            <p className="text-xl text-light-50/70 max-w-2xl mx-auto">
              Poche cose, fatte con criterio. <br />
              <span className="text-orange-500">Output garantito:</span> file ordinati, pronti per la stampa e riutilizzabili.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="card group hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-light-50/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link href="/servizi" className="text-light-50 hover:text-orange-500 transition-colors inline-flex items-center space-x-2 font-medium">
              <span>Esplora tutti i dettagli</span>
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-display font-display font-bold mb-4">
              Case Studies
            </h2>
            <p className="text-light-50/70">
              Progetti reali. Risultati tangibili.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {portfolioCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 ${category.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-display font-bold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {category.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mt-12"
          >
            <Link href="/portfolio" className="btn-secondary">
              Vedi portfolio completo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-display font-display font-bold mb-6"
            >
              Facciamolo bene, una volta sola.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-light-50/80 mb-10"
            >
              Se vuoi un'identità visiva che non sembri improvvisata, siamo qui.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contatti" className="btn-primary w-full sm:w-auto">
                Parliamone
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Data Arrays
const metodSteps = [
  {
    title: 'Brief rapido',
    description: 'Capiamo cosa ti serve senza call infinite.'
  },
  {
    title: 'Concept & Direzione',
    description: 'Definiamo una lingua visiva unica.'
  },
  {
    title: 'Produzione',
    description: 'Creiamo gli asset (scelte precise, non caos).'
  },
  {
    title: 'Consegna ordinata',
    description: 'Ricevi tutto pronto per stampa e web.'
  },
]

// NOTA: Ho rimosso la riga "output" ripetitiva da qui
const services = [
  {
    icon: <HiPaintBrush className="w-6 h-6" />,
    title: 'Branding & Identità',
    description: 'Logo, palette, font, linee guida. Un sistema completo per essere riconosciuti.',
  },
  {
    icon: <HiPhoto className="w-6 h-6" />,
    title: 'Social Design',
    description: 'Post, caroselli, reel cover e template Canva per renderti autonomo.',
  },
  {
    icon: <HiPrinter className="w-6 h-6" />,
    title: 'Stampa & Materiali',
    description: 'Menu, insegne, packaging, biglietti da visita. Tutto print-ready.',
  },
  {
    icon: <HiPresentationChartLine className="w-6 h-6" />,
    title: 'Pitch & Slide',
    description: 'Presentazioni aziendali che non addormentano i clienti.',
  },
  {
    icon: <HiDocumentText className="w-6 h-6" />,
    title: 'Visual Content',
    description: 'Mockup e impaginazione per cataloghi e brochure.',
  },
  {
    icon: <HiCog className="w-6 h-6" />,
    title: 'Automazioni',
    description: '(Coming Soon) Integrazioni per gestire i lead senza stress.',
  },
]

const portfolioCategories = [
  {
    title: 'Brand Identity',
    subtitle: 'Loghi e Sistemi',
    gradient: 'bg-gradient-to-br from-orange-600 to-orange-800'
  },
  {
    title: 'Social Pack',
    subtitle: 'Template e Feed',
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800'
  },
  {
    title: 'Print',
    subtitle: 'Materiali stampati',
    gradient: 'bg-gradient-to-br from-purple-600 to-purple-800'
  },
]