// app/service/page.tsx
import { motion } from 'framer-motion';

export default function ServicePage() {
  return (
    <main className="bg-[#f9f9f9] text-[#1a1a1a] selection:bg-black selection:text-white">
      {/* Hero Section - Stile Shah */}
      <section className="px-6 pt-32 pb-20 md:px-20 md:pt-48">
        <span className="text-sm uppercase tracking-widest opacity-50">Service — What we do best</span>
        <h1 className="mt-8 text-5xl md:text-8xl font-bold leading-tight tracking-tighter">
          LESS THEORY,<br />BETTER RESULTS.
        </h1>
        <p className="mt-10 max-w-2xl text-xl md:text-2xl leading-relaxed opacity-70">
          Non è un PDFino da quattro soldi. È una lama affilata per squarciare la mediocrità del mercato digitale attraverso l'AI strategica. 
        </p>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-20 py-20 border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {services.map((s) => (
            <div key={s.id} className="group cursor-default">
              <div className="overflow-hidden mb-6">
                <img src={s.image} alt={s.title} className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter">{s.title}</h3>
              <p className="text-lg opacity-60 leading-snug">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section - Tipica di Shah Design */}
      <section className="px-6 md:px-20 py-32 bg-white">
        <h2 className="text-4xl font-bold mb-16 tracking-tighter uppercase">Domande Frequenti</h2>
        <div className="max-w-4xl divide-y divide-black/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-8 cursor-pointer">
              <summary className="flex justify-between items-center text-2xl font-medium list-none">
                {faq.q}
                <span className="text-3xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-6 text-xl opacity-60 max-w-2xl">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="px-6 md:px-20 py-40 bg-black text-white text-center">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10">PRONTO A DOMINARE?</h2>
        <a href="mailto:info@ayromex.com" className="text-2xl md:text-3xl underline underline-offset-8 hover:opacity-70 transition-opacity">
          info@ayromex.com 
        </a>
      </footer>
    </main>
  );
}
