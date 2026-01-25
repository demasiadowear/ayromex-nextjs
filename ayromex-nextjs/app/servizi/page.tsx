'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { 
  HiArrowLeft, 
  HiCheck,
  HiPaintBrush,
  HiPhoto,
  HiPrinter,
  HiPresentationChartLine,
  HiDocumentText,
  HiCog,
  HiArrowRight
} from 'react-icons/hi2'

export default function Servizi() {
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
              Servizi
            </motion.span>
            
            <motion.h1
              variants={fadeInUp}
              className="text-hero-lg font-display font-bold mb-6"
            >
              Tutto quello che serve per un brand forte
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl text-light-50/80 leading-relaxed"
            >
              Dalla strategia alla consegna. Ogni servizio include revisioni illimitate, 
              file print-ready e supporto continuativo. <strong>Poche cose, fatte con criterio.</strong>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Servizi Dettagliati */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container">
          <div className="space-y-16">
            {servicesDetailed.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                id={service.slug}
                className="scroll-mt-32"
              >
                <div className="card lg:flex items-start gap-12">
                  {/* Icon + Number */}
                  <div className="flex-shrink-0 mb-6 lg:mb-0">
                    <div className="w-20 h-20 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <span className="text-sm text-orange-500 font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-title font-display font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-light-50/80 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Cosa Include */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-4">Cosa include:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.includes.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <HiCheck className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-light-50/80 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-sm pt-4 border-t border-gray-700/30">
                      <div>
                        <span className="text-light-50/60">Tempo medio: </span>
                        <span className="text-orange-500 font-semibold">{service.timing}</span>
                      </div>
                      <div>
                        <span className="text-light-50/60">Ideale per: </span>
                        <span className="text-light-50">{service.idealFor}</span>
                      </div>
                      {service.pricing && (
                        <div>
                          <span className="text-light-50/60">Indicativo: </span>
                          <span className="text-light-50">{service.pricing}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section className="section-spacing bg-dark-950">
        <div className="section-container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display font-display font-bold mb-8 text-center">
              Come funziona
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-500/10 border-2 border-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-orange-500">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-light-50/70">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Servizi */}
      <section className="section-spacing bg-dark-900">
        <div className="section-container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-display font-display font-bold mb-12 text-center">
              Domande frequenti
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.05 }}
                  className="bg-dark-800/50 border border-gray-700/30 rounded-lg p-6"
                >
                  <h4 className="font-bold mb-3 text-lg">{faq.question}</h4>
                  <p className="text-light-50/70 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              Pronto a iniziare?
            </h2>
            <p className="text-xl text-light-50/80 mb-8">
              Richiedi un preventivo personalizzato. Risposta in 24 ore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contatti" className="btn-primary inline-flex items-center space-x-2">
                <span>Richiedi preventivo</span>
                <HiArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20un%20preventivo." 
                className="btn-secondary"
              >
                Scrivici su WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// Data
const servicesDetailed = [
  {
    slug: 'branding-identita',
    icon: <HiPaintBrush className="w-10 h-10 text-orange-500" />,
    title: 'Branding & Identità Visiva Completa',
    description: 'Costruiamo l\'identità del tuo brand da zero o lo rinnoviamo completamente. Logo, palette, tipografia, linee guida: tutto quello che serve per sembrare un brand vero.',
    includes: [
      'Logo professionale vettoriale (AI + SVG)',
      'Varianti logo (colore, B/N, monocromatico, icona)',
      'Palette colori branded (primari + secondari)',
      'Sistema tipografico (font primari e secondari)',
      'Brand guidelines PDF (manuale d\'uso)',
      'Biglietti da visita design',
      'Carta intestata e buste coordinate',
      'Template email firma professionale',
      'File sorgenti modificabili',
      'Export print-ready (CMYK, 300dpi)'
    ],
    timing: '3-4 settimane',
    idealFor: 'Nuove aperture, rebranding totale',
    pricing: 'Da €1.200'
  },
  {
    slug: 'social-design',
    icon: <HiPhoto className="w-10 h-10 text-orange-500" />,
    title: 'Social Media Design',
    description: 'Post, caroselli, reel cover, stories: tutto coordinato e brandizzato. Template Canva riutilizzabili per darti autonomia. Zero improvvisazione, solo feed coerenti.',
    includes: [
      'Griglia visiva social (layout + stile)',
      'Template post Instagram/Facebook (5-10 varianti)',
      'Template caroselli multipage',
      'Reel cover design coordinate',
      'Template stories brandizzate',
      'Kit Canva modificabile da te',
      'Palette e font preimpostati',
      'Istruzioni d\'uso complete',
      'Export ottimizzati per social',
      'Supporto revisioni template'
    ],
    timing: '1-2 settimane',
    idealFor: 'Attività con social attivi',
    pricing: 'Da €600'
  },
  {
    slug: 'stampa-materiali',
    icon: <HiPrinter className="w-10 h-10 text-orange-500" />,
    title: 'Stampa & Materiali Print',
    description: 'Menu, insegne, packaging, flyer, locandine: tutto print-ready con abbondanze, CMYK e risoluzione corretta. Mandi in stampa e funziona. Sempre.',
    includes: [
      'Design menu completo (A4, A5, tris-fold)',
      'Insegne e segnaletica esterna/interna',
      'Packaging brandizzato (box, buste, etichette)',
      'Flyer e locandine promozionali',
      'Poster eventi e campagne',
      'Voucher e gift card design',
      'File PDF print-ready (abbondanze 3mm)',
      'Profilo colore CMYK corretto',
      'Risoluzione 300dpi garantita',
      'Supporto tipografia (se necessario)'
    ],
    timing: '1-2 settimane',
    idealFor: 'Ristoranti, retail, eventi',
    pricing: 'Da €400'
  },
  {
    slug: 'pitch-presentazioni',
    icon: <HiPresentationChartLine className="w-10 h-10 text-orange-500" />,
    title: 'Pitch Deck & Presentazioni',
    description: 'Slide pulite, chiare, credibili. Zero cringe, zero WordArt. Ideale per investitori, clienti corporate, presentazioni business serie.',
    includes: [
      'Deck PowerPoint/Keynote professionale',
      'Template slide riutilizzabile',
      'Copertina + agenda + grazie',
      'Slide contenuti (15-30 slide)',
      'Grafici e infografiche custom',
      'Icone e visual elements',
      'Palette brandizzata',
      'Export PDF presentazione',
      'File modificabile (PPTX/KEY)',
      'Guida uso template'
    ],
    timing: '1 settimana',
    idealFor: 'Startup, professionisti, pitch',
    pricing: 'Da €500'
  },
  {
    slug: 'visual-content',
    icon: <HiDocumentText className="w-10 h-10 text-orange-500" />,
    title: 'Visual Content & Mockup',
    description: 'Mockup prodotto, visual brandizzati, layout editoriali, grafiche promozionali. Tutto quello che serve per comunicare in modo premium.',
    includes: [
      'Mockup prodotto realistici',
      'Visual ads social/web',
      'Layout editoriali (magazine style)',
      'Grafiche evento coordinate',
      'Visual brochure digitali',
      'Banner web ottimizzati',
      'Immagini copertina social',
      'Pattern e texture custom',
      'Export multi-formato',
      'Libreria asset riutilizzabili'
    ],
    timing: '5-10 giorni',
    idealFor: 'E-commerce, campagne, eventi',
    pricing: 'Da €350'
  },
  {
    slug: 'automazioni-ai',
    icon: <HiCog className="w-10 h-10 text-orange-500" />,
    title: 'Automazioni AI (Coming Soon)',
    description: 'Lead generation automatizzata, WhatsApp Business automatico, CRM leggero e intelligente. In arrivo prossimamente.',
    includes: [
      'WhatsApp Business Bot (FAQ automatiche)',
      'Risposte automatiche Instagram DM',
      'Lead collection da form + follow-up',
      'Preventivi semi-automatici',
      'Reminder appuntamenti via messaggio',
      'Report settimanali automatici',
      'Integrazione CRM base',
      'Dashboard analytics semplice',
      'Setup completo flussi',
      'Formazione uso sistema'
    ],
    timing: 'Coming soon',
    idealFor: 'Attività con alto volume richieste',
    pricing: 'Da annunciare'
  },
]

const processSteps = [
  {
    title: 'Brief',
    description: '10 min call o form per capire obiettivi, stile, budget.'
  },
  {
    title: 'Concept',
    description: '2-3 proposte creative con mood board.'
  },
  {
    title: 'Revisione',
    description: 'Affiniamo insieme fino alla perfezione.'
  },
  {
    title: 'Consegna',
    description: 'File ordinati + supporto continuativo.'
  },
]

const faqs = [
  {
    question: 'Quali sono i tempi di consegna medi?',
    answer: 'Dipende dal servizio: logo 7-10 giorni, contenuti social 3-5 giorni, branding completo 3-4 settimane. Offriamo anche opzioni express con supplemento.'
  },
  {
    question: 'Cosa mi serve per iniziare?',
    answer: 'Nome dell\'attività, settore, obiettivi, preferenze estetiche e alcuni esempi di stile che ti piacciono. Il resto lo capiamo insieme nel brief.'
  },
  {
    question: 'I file sono pronti per la stampa?',
    answer: 'Sì, sempre. PDF ad alta risoluzione con abbondanze, profilo colore CMYK, specifiche tecniche corrette. Mandi in tipografia e funziona.'
  },
  {
    question: 'Posso modificare i template Canva da solo?',
    answer: 'Assolutamente. Ti consegniamo template Canva completamente modificabili con palette e font preimpostati. Autonomia totale.'
  },
  {
    question: 'Come funzionano le automazioni AI?',
    answer: 'Sono flussi che collegano WhatsApp Business, Instagram, il tuo CRM e i form del sito. Automatizzi risposte FAQ, lead follow-up e reminder. Lancio previsto Q2 2025.'
  },
  {
    question: 'Offrite gestione social completa?',
    answer: 'Sì, abbiamo pacchetti mensili che includono strategia, calendario editoriale, creazione contenuti e pubblicazione programmata. Contattaci per info.'
  },
  {
    question: 'Le revisioni sono davvero illimitate?',
    answer: 'Sì, entro ragione. Affiniamo insieme finché non sei soddisfatto. Non mettiamo limiti rigidi tipo "massimo 2 revisioni".'
  },
  {
    question: 'Lavorate solo in Puglia?',
    answer: 'No, lavoriamo da remoto con clienti in tutta Italia. Base operativa a Bari, ma nessun limite geografico.'
  },
]
