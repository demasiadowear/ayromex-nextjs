'use client';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-[12vw] font-bold leading-[0.8] tracking-[ -0.05em] uppercase">
            Build <br /> 
            <span className="text-ay-orange italic leading-none">Authority</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row justify-between items-end">
            <p className="max-w-md text-xl md:text-2xl opacity-60 leading-tight">
              L'intelligenza artificiale non ti serve se non sai come dominarla. Noi creiamo l'arsenale.
            </p>
            <div className="mt-8 md:mt-0">
              <div className="w-20 h-20 rounded-full border border-ay-black flex items-center justify-center hover:bg-ay-orange hover:border-ay-orange transition-all cursor-pointer group">
                <span className="group-hover:text-white transition-colors">→</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEZIONE FILOSOFIA - Accento Arancione */}
      <section className="py-40 bg-ay-black text-white px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <h2 className="text-5xl font-bold uppercase tracking-tighter">
            Perché <br /><span className="text-ay-orange">Ayromex?</span>
          </h2>
          <div className="space-y-12 opacity-80 text-xl font-light">
            <p>Il design non è decorazione. È comunicazione di potere. Shah Design parla di emozioni, noi parliamo di **risultati brutali**.</p>
            <p>Ogni pixel del tuo brand deve gridare autorità. Se non sei il primo nella tua nicchia, sei invisibile.</p>
            <button className="border-b-2 border-ay-orange pb-2 text-ay-orange hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm font-bold">
              Scopri il metodo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
