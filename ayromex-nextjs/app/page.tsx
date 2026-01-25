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
  HiRocketLaunch, 
  HiUserGroup,
  HiPaintBrush,
  HiPhoto,
  HiDocumentText,
  HiPresentationChartLine,
  HiPrinter,
  HiCog,
  HiArrowRight,
  HiCheckCircle
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
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <HiSparkles className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-orange-500">AYROMEX • Digital Creations • Branding • Visual • Social</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-hero-xl font-display font-bold text-light-50 mb-6"
            >
              Design che fa sembrare grande{' '}
              <span className="text-gradient">il tuo brand</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-light-50/80 max-w-3xl mx-auto mb-12"
            >
              Niente "grafichette". Sistemi visivi coerenti: identità, social, materiali, presentazioni. 
              Roba che regge quando la stampi, quando la pubblichi, quando la vendi.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            >
              <Link href="/contatti" className="btn-primary w-full sm:w-auto">
                Richiedi preventivo
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full sm:w-auto">
                Guarda lavori
              </Link>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-light-50/60 text-sm"
            >
              Risposta rapida • Print-ready • Template riutilizzabili • Zero caos
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-20"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-light-50/50"
              >
                <span className="text-sm mb-2">Scopri di più</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* USP CARDS */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {/* USP 1 */}
            <motion.div variants={staggerItem} className="text-center">
              <h3 className="text-lg font-bold mb-2">Sistemi</h3>
              <p className="text-light-50/70 text-sm">Identità coerenti</p>
            </motion.div>

            {/* USP 2 */}
            <motion.div variants={staggerItem} className="text-center">
              <h3 className="text-lg font-bold mb-2">Output</h3>
              <p className="text-light-50/70 text-sm">Stampa + digitale</p>
            </motion.div>

            {/* USP 3 */}
            <motion.div variants={staggerItem} className="text-center">
              <h3 className="text-lg font-bold mb-2">Focus</h3>
              <p className="text-light-50/70 text-sm">Business first</p>
            </motion.div>

            {/* USP 4 */}
            <motion.div variants={staggerItem} className="text-center">
              <h3 className="text-lg font-bold mb-2">Approccio</h3>
              <p className="text-light-50/70 text-sm">Serio ma agile</p>
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
              Start-up creativa, ma con mentalità da studio serio.
            </h2>
            <p className="text-xl text-light-50/80 mb-12">
              Ti porto ordine: direzione visiva, regole, consistenza. 
              Così non sembri "uno che prova". Sembri un brand che sa dove sta andando.
            </p>

            <div className="space-y-6">
              <h3 className="text-title font-display font-bold mb-6">Metodo AYROMEX</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {metodSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-500 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{step.title}</h4>
                      <p className="text-light-50/70 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="text-light-50/60 mt-12 text-center">
              Obiettivo: farti sembrare più grande di quello che sei. In senso buono.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVIZI SECTION */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Servizi
            </span>
            <h2 className="text-display font-display font-bold mb-6">
              Cosa facciamo (bene)
            </h2>
            <p className="text-xl text-light-50/70 max-w-3xl mx-auto">
              Poche cose, fatte con criterio. Il resto è fuffa.
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
                className="card group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    {service.icon}
                  </div>
                  <HiArrowRight className="w-6 h-6 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-light-50/70 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <p className="text-xs text-orange-500 font-semibold">
                  {service.output}
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
            <Link href="/servizi" className="btn-secondary inline-flex items-center space-x-2">
              <span>Apri tutti i servizi</span>
              <HiArrowRight className="w-5 h-5" />
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
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Portfolio
            </span>
            <h2 className="text-display font-display font-bold mb-6">
              Case studies (selezionati)
            </h2>
            <p className="text-xl text-light-50/70 max-w-3xl mx-auto">
              Pochi progetti, chiari. "Prima / dopo", risultati, applicazioni reali.
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
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 ${category.gradient}`} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/80 text-sm">
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
            <Link href="/portfolio" className="btn-primary inline-flex items-center space-x-2">
              <span>Vedi portfolio</span>
              <HiArrowRight className="w-5 h-5" />
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
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="text-orange-500 text-sm font-semibold uppercase tracking-wider mb-4 block"
            >
              Pronti?
            </motion.span>
            
            <motion.h2
              variants={fadeInUp}
              className="text-hero-lg font-display font-bold mb-6"
            >
              Facciamolo bene, una volta sola.
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-light-50/80 mb-12"
            >
              Se vuoi un'identità visiva che non sembri improvvisata, parliamone.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contatti" className="btn-primary w-full sm:w-auto">
                Contattaci
              </Link>
              <a
                href="tel:+390808407861"
                className="btn-secondary w-full sm:w-auto"
              >
                +39 080 840 7861
              </a>
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
    description: 'e chiaro (niente romanzi).'
  },
  {
    title: 'Concept',
    description: '+ direzione visiva (una sola lingua).'
  },
  {
    title: 'Produzione',
    description: '+ varianti (scelte, non caos).'
  },
  {
    title: 'Consegna ordinata',
    description: '(stampa + digitale).'
  },
]

const services = [
  {
    icon: <HiPaintBrush className="w-7 h-7 text-orange-500" />,
    title: 'Branding & Identità',
    description: 'Logo, palette, font, linee guida e sistema completo.',
    output: 'Output: file ordinati, pronti, riutilizzabili.'
  },
  {
    icon: <HiPhoto className="w-7 h-7 text-orange-500" />,
    title: 'Social Design',
    description: 'Post, caroselli, reel cover, template Canva riutilizzabili.',
    output: 'Output: file ordinati, pronti, riutilizzabili.'
  },
  {
    icon: <HiPrinter className="w-7 h-7 text-orange-500" />,
    title: 'Stampa & Materiali',
    description: 'Menu, insegne, packaging, promo: tutto print-ready.',
    output: 'Output: file ordinati, pronti, riutilizzabili.'
  },
  {
    icon: <HiPresentationChartLine className="w-7 h-7 text-orange-500" />,
    title: 'Pitch & Presentazioni',
    description: 'Deck puliti, chiari, credibili. Zero cringe.',
    output: 'Output: file ordinati, pronti, riutilizzabili.'
  },
  {
    icon: <HiDocumentText className="w-7 h-7 text-orange-500" />,
    title: 'Visual Content',
    description: 'Mockup, layout, immagini coerenti e premium.',
    output: 'Output: file ordinati, pronti, riutilizzabili.'
  },
  {
    icon: <HiCog className="w-7 h-7 text-orange-500" />,
    title: 'Automazioni (Coming soon)',
    description: 'Lead, WhatsApp, CRM leggero: in arrivo.',
    output: 'Output: flussi automatici e integrati.'
  },
]

const portfolioCategories = [
  {
    title: 'Brand Identity',
    subtitle: 'Sistema completo • Logo • Guidelines',
    gradient: 'bg-gradient-to-br from-orange-600 to-orange-800'
  },
  {
    title: 'Social Pack',
    subtitle: 'Template + griglia • Reels cover • Ads',
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800'
  },
  {
    title: 'Print & Signage',
    subtitle: 'Insegne • Menu • Packaging • Promo',
    gradient: 'bg-gradient-to-br from-purple-600 to-purple-800'
  },
]
