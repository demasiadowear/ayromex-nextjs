'use client'; // Necessario per le animazioni di Framer Motion in Next.js

import React from 'react';
import { motion } from 'framer-motion';

// --- DATI DEI SERVIZI (Stile Ayromex / Shah Design) ---
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
    description: "Testi progettati con la psicologia applicata per convertire i lettori in fan accaniti del tuo brand.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
  },
];

// --- DATI DELLE FAQ ---
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
    <main className="bg-[#f9f9f9] text-[#1a1a1a] selection:bg-black selection:text-white min-h-screen font-sans">
      
      {/* HERO SECTION - Stile Minimal Shah */}
      <section className="px-6 pt-32 pb-20 md:px-20 md:pt-48">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-xs uppercase tracking-[0.3em] font-bold"
        >
          Service — What we do best
        </motion.span>
        
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-6xl md:text-[9rem] font-bold leading-[0.85] tracking-tighter uppercase"
        >
          Less Theory,<br />Better Results.
        </motion.h1>
        
        <p className="mt-12 max-w-2xl text-xl md:text-2xl leading-relaxed opacity-70 font-light italic">
          "Non vendiamo fuffa. Progettiamo l'arsenale digitale necessario per scalare la tua presenza online con l'AI."
        </p>
      </section>

      {/* SERVICES GRID - Griglia pulita con hover colorato */}
      <section className="px-6 md:px-20 py-24 border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {services.map((s) => (
            <motion.div 
              key={s.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden mb-8 bg-gray-200 aspect-[16/9]">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" 
                />
              </div>
              <h3 className="text-4xl font-bold mb-4 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-xl opacity-60 leading-snug max-w-md font-light">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION - Accordion Minimalista */}
      <section className="px-6 md:px-20 py-40 bg-white">
        <h2 className="text-sm uppercase tracking-widest opacity-40 mb-16 font-bold text-center">Questions & Answers</h2>
        <div className="max-w-4xl mx-auto divide-y divide-black/10">
          {faqs.map((faq, index) => (
            <details key={index} className="group py-10 cursor-pointer outline-none">
              <summary className="flex justify-between items-center text-2xl md:text-3xl font-medium list-none outline-none group-hover:opacity-60 transition-opacity">
                <span className="tracking-tight">{faq.q}</span>
                <span className="text-4xl transition-transform group-open:rotate-45 font-light">+</span>
              </summary>
              <p className="mt-8 text-xl opacity-60 max-w-2xl leading-relaxed font-light">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER CTA - Grande impatto */}
      <footer className="px-6 md:px-20 py-40 bg-black text-white text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-[10rem] font-bold tracking-tighter mb-12 uppercase leading-none"
        >
          Ready to<br />dominate?
        </motion.h2>
        <a 
          href="mailto:info@ayromex.com" 
          className="text-2xl md:text-4xl underline underline-offset-12 hover:text-gray-400 transition-colors font-light tracking-tight"
        >
          info@ayromex.com
        </a>
      </footer>
    </main>
  );
}
