'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { HiArrowLeft, HiSparkles, HiRocketLaunch, HiUserGroup, HiCheckCircle } from 'react-icons/hi2'

export default function ChiSiamo() {
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
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeInUp}
              className="text-orange-500 text-sm font-semibold uppercase tracking-wider block mb-4"
            >
              Chi Siamo
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="text-hero-lg font-display font-bold mb-6"
            >
              Start-up creativa con mentalità da studio serio
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-light-50/80 leading-relaxed"
            >
              Siamo AYROMEX: un team giovane ma con le idee chiare. 
              Niente "agenzia creativa qualsiasi". Facciamo <strong>digital creations</strong> che reggono: 
              branding solido, social coerenti, materiali pronti. Roba seria, senza fronzoli.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-display font-display font-bold mb-8"
            >
              La nostra storia
            </motion.h2>

            <div className="space-y-6 text-light-50/80 leading-relaxed">
              <motion.p variants={fadeInUp}>
                AYROMEX nasce dall'esigenza di portare ordine nel caos del branding per piccole e medie attività. 
                Abbiamo visto troppi business locali con loghi improvvisati, social senza direzione, 
                materiali di stampa che "più o meno vanno bene".
              </motion.p>

              <motion.p variants={fadeInUp}>
                Il problema? Non è mancanza di creatività. È mancanza di <strong>sistema</strong>. 
                Di coerenza. Di file che funzionano davvero quando li mandi in stampa o li pubblichi online.
              </motion.p>

              <motion.p variants={fadeInUp}>
                Così abbiamo creato AYROMEX: una digital creation studio che lavora come un'agenzia strutturata, 
                ma mantiene l'agilità di una start-up. <strong>Zero fuffa, solo output concreti.</strong>
              </motion.p>

              <motion.p variants={fadeInUp}>
                Oggi serviamo ristoranti, hotel, poker room, retail, B&B e professionisti in tutta Puglia 
                (e oltre, grazie al lavoro da remoto). Dal logo alle campagne social, dalla segnaletica 
                al pitch deck: se ha a che fare con l'identità visiva, lo facciamo.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="card"
            >
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                <HiSparkles className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-title font-display font-bold mb-4">Mission</h3>
              <p className="text-light-50/80 leading-relaxed">
                Trasformare idee in brand memorabili attraverso <strong>design strategico</strong> e 
                <strong> comunicazione visiva d'impatto</strong>. Aiutiamo le attività locali a sembrare 
                più grandi, più credibili, più professionali — senza perdere autenticità.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                <HiRocketLaunch className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-title font-display font-bold mb-4">Vision</h3>
              <p className="text-light-50/80 leading-relaxed">
                Diventare il <strong>riferimento per branding e design</strong> nel Sud Italia, 
                aiutando centinaia di attività locali a distinguersi, crescere e competere 
                con player più grandi grazie a identità visive forti e sistemi di comunicazione coerenti.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-display font-display font-bold mb-6">
              I nostri valori
            </h2>
            <p className="text-xl text-light-50/70 max-w-3xl mx-auto">
              Principi che guidano ogni progetto, ogni decisione, ogni file che consegnamo.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-light-50/70 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cosa ci rende diversi */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display font-display font-bold mb-8">
              Cosa ci rende diversi
            </h2>

            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <HiCheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">{item.title}</h4>
                    <p className="text-light-50/70 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Come lavoriamo */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display font-display font-bold mb-8">
              Come lavoriamo
            </h2>

            <div className="bg-dark-800/50 border border-gray-700/30 rounded-2xl p-8 space-y-6">
              <div>
                <h4 className="font-bold mb-2 text-orange-500">🎯 Brief chiaro</h4>
                <p className="text-light-50/70 text-sm">
                  Niente giri di parole. Call rapida o questionario strutturato per capire obiettivi, 
                  target, budget e tempistiche. Zero tempo perso.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-orange-500">💡 Concept + direzione</h4>
                <p className="text-light-50/70 text-sm">
                  Ti presentiamo 2-3 direzioni creative con mood board, riferimenti visivi e prime bozze. 
                  Scegli quella giusta e affiniamo insieme.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-orange-500">⚙️ Produzione ordinata</h4>
                <p className="text-light-50/70 text-sm">
                  File vettoriali, export print-ready, template riutilizzabili. Tutto organizzato, 
                  etichettato, pronto all'uso. Niente cartelle caotiche.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2 text-orange-500">🚀 Consegna + supporto</h4>
                <p className="text-light-50/70 text-sm">
                  Ricevi tutti i file con istruzioni d'uso. E non sparisci: supporto post-delivery 
                  incluso per revisioni e dubbi.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Settori serviti */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display font-display font-bold mb-8">
              Settori che serviamo
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className="bg-dark-800/30 border border-gray-700/20 rounded-lg p-4 text-center hover:border-orange-500/50 transition-colors"
                >
                  <span className="text-2xl mb-2 block">{sector.emoji}</span>
                  <p className="text-sm font-semibold">{sector.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-display font-display font-bold mb-6">
              Pronto a lavorare insieme?
            </h2>
            <p className="text-xl text-light-50/80 mb-8">
              Se cerchi un partner creativo serio (ma non noioso), parliamone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="btn-primary">
                Contattaci
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Guarda i progetti
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Data
const values = [
  {
    icon: <HiSparkles className="w-8 h-8 text-orange-500" />,
    title: 'Creatività senza compromessi',
    description: 'Ogni progetto è originale. Zero template, zero "già visto".'
  },
  {
    icon: <HiUserGroup className="w-8 h-8 text-orange-500" />,
    title: 'Partnership, non clienti',
    description: 'Lavoriamo con te, non solo per te. Il tuo successo è il nostro.'
  },
  {
    icon: <HiCheckCircle className="w-8 h-8 text-orange-500" />,
    title: 'Qualità prima di tutto',
    description: 'File perfetti, pronti, riutilizzabili. Niente "aggiustiamo dopo".'
  },
  {
    icon: <HiRocketLaunch className="w-8 h-8 text-orange-500" />,
    title: 'Trasparenza totale',
    description: 'Tempi chiari, costi chiari, revisioni chiare. Zero sorprese.'
  },
]

const differentiators = [
  {
    title: 'Output ordinati, sempre',
    description: 'Ricevi cartelle strutturate, file etichettati, istruzioni d\'uso. Niente caos digitale.'
  },
  {
    title: 'Print-ready garantito',
    description: 'Tutto quello che consegniamo va in stampa senza problemi. CMYK, abbondanze, risoluzione: fatto bene.'
  },
  {
    title: 'Template riutilizzabili',
    description: 'Template Canva modificabili da te, griglie social pronte, sistemi che ti danno autonomia.'
  },
  {
    title: 'Revisioni illimitate (entro ragione)',
    description: 'Affiniamo insieme finché non è perfetto. Niente "massimo 2 revisioni".'
  },
  {
    title: 'Supporto post-delivery',
    description: 'Non sparisci dopo la consegna. Hai bisogno di un\'esportazione diversa? Una variante? Ci siamo.'
  },
  {
    title: 'Business-first approach',
    description: 'Il design è mezzo, non fine. L\'obiettivo è farti vendere, crescere, distinguerti.'
  },
]

const sectors = [
  { emoji: '🍕', name: 'Ristorazione' },
  { emoji: '🏨', name: 'Hotel & B&B' },
  { emoji: '🃏', name: 'Poker Room' },
  { emoji: '👗', name: 'Retail & Fashion' },
  { emoji: '💼', name: 'Professionisti' },
  { emoji: '🎯', name: 'Marketing Agency' },
  { emoji: '🏋️', name: 'Sport & Wellness' },
  { emoji: '🎨', name: 'Arte & Cultura' },
  { emoji: '🏪', name: 'Negozi locali' },
]
