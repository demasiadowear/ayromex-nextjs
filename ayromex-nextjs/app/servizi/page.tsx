'use client'; // Necessario per le animazioni di Framer Motion

import React from 'react';
import { motion } from 'framer-motion';

// 1. Definiamo i dati dei servizi (stile Ayromex/Shah)
const services = [
  {
    id: 1,
    title: "AI Strategy & Prompt Engineering",
    description: "Trasformiamo l'Intelligenza Artificiale nel tuo miglior consulente strategico per dominare il mercato.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Viral Video & Reels Production",
    description: "Scripting ad alta retention e montaggio magnetico per fermare lo scroll e creare autorità istantanea.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Brand & Business Building",
    description: "Costruiamo identità di marca forti che sfidano lo status quo e comunicano eccellenza.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Persuasive Copywriting",
    description: "Testi scritti per vendere, progettati con la psicologia applicata per convertire i lettori in fan accaniti.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
  },
];

// 2. Definiamo le FAQ
const faqs = [
  {
    q: "Quanto costa un progetto con Ayromex?",
    a: "Ogni progetto è unico. Calcoliamo il prezzo in base al valore generato e alla complessità strategica, non a ore."
  },
  {
    q: "Quanto dura mediamente una collaborazione?",
    a: "Dalle 4 alle 12 settimane per i setup strategici, mentre le produzioni editoriali seguono cicli mensili."
  },
  {
    q: "Offrite anche consulenza singola?",
    a: "Prediligiamo pacchetti completi perché crediamo nel risultato finale, ma valutiamo singole consulenze strategiche per l'AI."
  }
];

export default function ServicePage() {
  return (
    <main className="bg-[#f9f9f9] text-[#1a1a1a] selection:bg-black selection:text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="px-6 pt-32 pb-20 md:px-20 md:pt-48">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-sm uppercase tracking-widest"
        >
          Service — What we do best
        </motion.span>
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter uppercase"
        >
          Less Theory,<br />Better Results.
        </motion.h1>
        <p className="mt-10 max-w-2xl text-xl md:text-2xl leading-relaxed opacity-70 font-light">
          Non vendiamo fuffa. Progettiamo l'arsenale digitale necessario per scalare la tua presenza online con l'AI.
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-20 py-20 border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {services.map((s) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className="overflow-hidden mb-6 bg-gray-200 aspect-video">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100" 
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-lg opacity-60 leading-snug max-w-md">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-20 py-32 bg-white">
        <h2 className="text-4xl font-bold mb-16 tracking-tighter uppercase">Domande Frequenti</h2>
        <div className="max-w-4xl divide-y divide-black/10">
          {faqs.map((faq, index) => (
            <details key={index} className="group py-8 cursor-pointer">
              <summary className="flex justify-between items-center text-2xl font-medium list-none outline-none">
                {faq.q}
                <span className="text-3xl transition-transform group-open:rotate-45 font-light">+</span>
              </summary>
              <p className="mt-6 text-xl opacity-60 max-w-2xl leading-relaxed font-light">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="px-6 md:px-20 py-40 bg-black text-white text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 uppercase">Pronto a dominare?</h2>
        <a 
          href="mailto:info@ayromex.com" 
          className="text-2xl md:text-3xl underline underline-offset-8 hover:opacity-70 transition-opacity font-light"
        >
          info@ayromex.com
        </a>
      </footer>
    </main>
  );
}
