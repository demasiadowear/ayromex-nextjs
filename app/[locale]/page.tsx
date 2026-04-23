'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import TaskTicker from '@/components/hero/TaskTicker';
import { RotatingText } from '@/components/RotatingText';
import { EASE_OUT } from '@/lib/motion';

// HeroScene carries the entire R3F + three.js tree (Canvas, drei
// text, custom shaders). Keep it out of the SSR bundle so Next
// never tries to render <canvas> server-side and so troika-text's
// SDF worker never boots during hydration. The loading fallback
// is null — the body bg-ay-bg shows through and the rest of the
// hero layout renders over it without a reserved placeholder.
const HeroScene = dynamic(() => import('@/components/hero/HeroScene'), {
  ssr: false,
  loading: () => null,
});

/* ─── Animation Variants ─────────────────────────────────────── */
const fadeUp = {
  initial:    { opacity: 0, y: 36 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};
const stagger = (i: number) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
});

/* ─── Static Data ────────────────────────────────────────────── */
const MARQUEE_ITEMS = [
  'Voice AI', '★ AyroDesk24', 'WhatsApp AI', '★ AyroHub',
  'Lead Generation', '★ AYROMEX', 'AI Agents', 'ADM Compliance',
  'Voice AI', '★ AyroDesk24', 'WhatsApp AI', '★ AyroHub',
  'Lead Generation', '★ AYROMEX', 'AI Agents', 'ADM Compliance',
];

const AGENTS = [
  { name: 'Scout',   role: 'Lead Intelligence',    desc: 'Trova, qualifica e segmenta lead in tempo reale. Non dorme, non sbaglia.',        icon: '🔍' },
  { name: 'Closer',  role: 'Sales Automation',     desc: 'Gestisce obiezioni, manda follow-up e chiude trattative in autonomia.',             icon: '🎯' },
  { name: 'Builder', role: 'Delivery Engine',      desc: 'Onboarding clienti, setup sistemi, documentazione. Zero intervento umano.',         icon: '⚙️' },
  { name: 'Media',   role: 'Content Factory',      desc: 'Post, email, copy brandizzati su ogni canale. Sempre attivo, sempre consistente.',   icon: '📡' },
  { name: 'Analyst', role: 'Revenue Intelligence', desc: 'Dashboard live, alert anomalie e report settimanali consegnati automaticamente.',    icon: '📊' },
];

const WHY_ITEMS = [
  { stat: 'H24',   label: 'Senza pause',      desc: 'I tuoi sistemi non dormono, non si ammalano, non vanno in ferie. Sempre operativi.' },
  { stat: '30gg',  label: 'ROI garantito',    desc: 'I clienti vedono il ritorno entro 30 giorni. Non è una promessa — è il modello.' },
  { stat: 'Zero',  label: 'Tecnica richiesta', desc: 'Plug-and-play. Il tuo team usa lo strumento, non lo gestisce.' },
];

const PRODUCTS = [
  {
    badge:    'SaaS Enterprise',
    tagline:  'OS per Concessionari ADM',
    name:     'AyroHub',
    desc:     'Sistema operativo AI per concessionari gaming ADM. Voice AI outbound H24, customer service WhatsApp, compliance automatica, rete Master/PVR.',
    features: ['Voice AI outbound non-stop', 'WhatsApp AI customer service', 'Compliance ADM monitorata', 'Rete Master/PVR gestita'],
    price:    'da €2.950/mese',
    cta:      'Prenota una demo →',
    featured: true,
  },
  {
    badge:    'SaaS PMI',
    tagline:  'Receptionist AI per PMI',
    name:     'AyroDesk24',
    desc:     'Segreteria AI su WhatsApp per saloni, studi, ristoranti e PMI. Appuntamenti, lead qualification e risposte H24 senza personale aggiuntivo.',
    features: ['Risposta WhatsApp H24', 'Gestione appuntamenti', 'Lead qualification automatica', 'Dashboard multi-operatore'],
    price:    'da €199/mese',
    cta:      'Scopri AyroDesk24 →',
    featured: false,
  },
];

/* ─── Component ──────────────────────────────────────────────── */
export default function HomePage() {
  const t = useTranslations();
  const tHero = useTranslations('hero');
  const reduceMotion = useReducedMotion();
  const rotatingWords = tHero.raw('rotatingWords') as string[];

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    if (!tooltipVisible) return;
    const timer = setTimeout(() => setTooltipVisible(false), 4000);
    return () => clearTimeout(timer);
  }, [tooltipVisible]);

  useEffect(() => {
    const onScroll = () => setShowScrollHint(window.scrollY < 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showTooltip = () => setTooltipVisible(true);

  // Cinematic hero pacing: total entrance ~3.8s.
  const heroAnim = (delay: number, duration = 0.8) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration, ease: EASE_OUT, delay },
        };

  const chatAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 1.0, ease: EASE_OUT, delay: 2.6 },
      };

  const sceneAnim = reduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1.5, ease: EASE_OUT },
      };

  return (
    <main className="relative overflow-x-hidden bg-ay-bg text-ay-text">

      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 px-6 overflow-hidden">

        {/* Live system log */}
        <TaskTicker />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">

          {/* Top: copy stack centered over the grid */}
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

            {/* Eyebrow */}
            <motion.span
              {...heroAnim(1.0)}
              className="block font-body text-[12px] font-medium uppercase tracking-[0.08em] text-ay-text-muted mb-6"
            >
              {tHero('eyebrow')}
            </motion.span>

            {/* Headline */}
            <motion.h1
              {...heroAnim(1.3, 1.0)}
              className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.02em] mb-8"
              style={{ fontSize: 'clamp(48px, 9vw, 120px)' }}
            >
              {tHero('headlineStart')}
              <span className="relative inline-block text-ay-accent">
                {tHero('headlineAccent')}
                <motion.span
                  aria-hidden="true"
                  initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.0, ease: EASE_OUT, delay: reduceMotion ? 0 : 2.5 }}
                  className="absolute left-0 right-0 bottom-0 h-[5px] bg-ay-accent origin-left"
                />
              </span>
              <span className="opacity-55">{tHero('headlineRest')}</span>
            </motion.h1>

            {/* Rotating text */}
            <motion.p
              {...heroAnim(2.0)}
              className="font-body text-[20px] md:text-[24px] text-ay-text mb-4"
            >
              {tHero('rotatingPrefix')}
              <RotatingText words={rotatingWords} showUnderline />
            </motion.p>

            {/* Supporting paragraph */}
            <motion.p
              {...heroAnim(2.3)}
              className="font-body text-base md:text-[17px] text-ay-text-muted max-w-[640px] leading-relaxed mb-10"
            >
              {tHero('paragraph')}
            </motion.p>
          </div>

          {/* Split grid: constellation (60%) + chat (40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 w-full">

            {/* Left: constellation stage */}
            <div className="relative h-[300px] lg:h-[520px] rounded-2xl overflow-hidden">
              <motion.div
                {...sceneAnim}
                className="absolute inset-0 pointer-events-none"
              >
                <HeroScene reduceMotion={!!reduceMotion} />
              </motion.div>
            </div>

            {/* Right: Ayro chat placeholder + tooltip */}
            <div className="flex flex-col">
              <motion.div
                {...chatAnim}
                className="w-full h-[320px] lg:h-[520px] rounded-2xl border border-ay-border bg-ay-surface flex flex-col overflow-hidden text-left"
              >
                {/* Card header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-ay-border">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-ay-accent text-ay-bg font-brand text-sm leading-none">
                    A
                  </div>
                  <div className="flex-1">
                    <p className="font-brand text-sm text-ay-text leading-none">Ayro</p>
                    <p className="font-body text-[11px] text-ay-text-muted leading-none mt-1">
                      {tHero('chatRole')}
                    </p>
                  </div>
                  <span
                    className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"
                    title="online"
                    aria-label="online"
                  />
                </div>

                {/* Card body */}
                <div className="flex-1 px-5 py-5 overflow-hidden">
                  <div className="max-w-[85%] bg-ay-bg/60 border border-ay-border rounded-2xl rounded-tl-sm px-4 py-3">
                    <p className="font-body text-[15px] text-ay-text leading-relaxed">
                      {tHero('chatGreeting')}
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="flex items-center gap-2 border-t border-ay-border px-3 py-2">
                  <input
                    type="text"
                    placeholder={tHero('chatInputPlaceholder')}
                    onFocus={showTooltip}
                    className="flex-1 bg-transparent outline-none font-body text-[14px] text-ay-text placeholder:text-ay-text-muted px-2 py-2"
                  />
                  <button
                    type="button"
                    onClick={showTooltip}
                    className="shrink-0 w-8 h-8 rounded-full bg-ay-accent hover:bg-ay-accent-hover transition-transform duration-200 hover:scale-105 flex items-center justify-center text-ay-bg"
                    aria-label="send"
                  >
                    <FiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              {/* Tooltip (on input focus / send click) */}
              <AnimatePresence>
                {tooltipVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 w-full bg-ay-surface border border-ay-border rounded-lg px-3 py-2 font-body text-[13px] text-ay-text-muted text-center"
                  >
                    {tHero('tooltipMessage')}
                    <a
                      href="https://wa.me/390808407861"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ay-accent hover:underline"
                    >
                      wa.me/390808407861
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTAs */}
          <motion.div
            {...heroAnim(3.0)}
            className="flex flex-wrap gap-4 justify-center mt-12 mb-20"
          >
            <a
              href="#prodotti"
              className="inline-flex items-center justify-center font-display font-bold uppercase tracking-widest text-sm rounded-full bg-ay-accent text-ay-bg px-7 py-[14px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200"
            >
              {tHero('ctaPrimary')}
            </a>
            <a
              href="#contatti"
              className="inline-flex items-center justify-center font-display font-bold uppercase tracking-widest text-sm rounded-full border border-ay-border text-ay-text px-7 py-[14px] hover:border-ay-accent hover:text-ay-accent transition-all duration-200"
            >
              {tHero('ctaGhost')}
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <AnimatePresence>
          {showScrollHint && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT, delay: reduceMotion ? 0 : 3.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-10"
            >
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-ay-text-muted">
                {tHero('scrollHint')}
              </span>
              <div className="relative w-px h-10 bg-ay-border overflow-hidden">
                <span className="absolute inset-x-0 top-0 h-3 bg-ay-accent motion-safe:animate-scroll-pulse" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE
          ══════════════════════════════════════════ */}
      <section className="py-6 bg-[#050505] border-y border-white/5 overflow-hidden">
        <div className="relative flex">
          <div className="marquee-track">
            {MARQUEE_ITEMS.map((item, i) => (
              <span
                key={i}
                className={`px-8 text-sm font-semibold uppercase tracking-widest whitespace-nowrap ${
                  item.startsWith('★')
                    ? 'text-[#FF6A00]'
                    : 'text-white/30'
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PRODOTTI
          ══════════════════════════════════════════ */}
      <section id="prodotti" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div className="text-center mb-16" {...fadeUp}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3 block">
              I nostri prodotti
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Sistemi pronti al deploy
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {PRODUCTS.map((p, i) => (
              <motion.div
                key={p.name}
                {...stagger(i)}
                className="product-card card-dark rounded-2xl p-8 flex flex-col gap-6"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Badge + tagline */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6A00] bg-[rgba(255,106,0,0.1)] border border-[rgba(255,106,0,0.2)] px-2.5 py-1 rounded-full">
                      {p.badge}
                    </span>
                    <p className="text-white/40 text-xs mt-2 font-medium">{p.tagline}</p>
                  </div>
                  {p.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-[#FF6A00] text-black px-2.5 py-1 rounded-full shrink-0">
                      Flagship
                    </span>
                  )}
                </div>

                {/* Icon + Name */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(255,106,0,0.1)] border border-[rgba(255,106,0,0.2)] flex items-center justify-center text-xl font-black text-[#FF6A00]">
                    {p.name[0]}
                  </div>
                  <h3 className="text-2xl font-extrabold">{p.name}</h3>
                </div>

                {/* Description */}
                <p className="text-white/55 text-sm leading-relaxed">{p.desc}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/70">
                      <FiCheck className="text-[#FF6A00] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
                  <span className="text-[#FF6A00] font-bold text-sm">{p.price}</span>
                  <a
                    href="https://wa.me/393926936833"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-5 py-2.5 text-xs gap-1.5"
                  >
                    {p.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          AGENTI AI
          ══════════════════════════════════════════ */}
      <section className="py-28 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">

          <motion.div className="text-center mb-16" {...fadeUp}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3 block">
              AI Agents
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Il tuo team AI è già al lavoro
            </h2>
            <p className="text-white/45 mt-4 max-w-xl mx-auto text-base">
              Cinque agenti specializzati. Ogni giorno, tutto il giorno.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {AGENTS.map((agent, i) => (
              <motion.div
                key={agent.name}
                {...stagger(i)}
                className="agent-card card-dark rounded-2xl p-6 flex flex-col gap-4"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Status */}
                <div className="flex items-center gap-2">
                  <span className="status-dot" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF6A00]">
                    Attivo
                  </span>
                </div>

                {/* Icon */}
                <div className="text-3xl">{agent.icon}</div>

                {/* Name + Role */}
                <div>
                  <h3 className="text-lg font-extrabold">{agent.name}</h3>
                  <p className="text-[11px] text-white/40 font-semibold uppercase tracking-wider mt-0.5">
                    {agent.role}
                  </p>
                </div>

                {/* Desc */}
                <p className="text-white/50 text-xs leading-relaxed flex-1">
                  {agent.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PERCHÉ AYROMEX
          ══════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          <motion.div className="text-center mb-16" {...fadeUp}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-3 block">
              Perché noi
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              La tua azienda al 90%<br />
              <span className="text-[#FF6A00]">automatizzata</span>
            </h2>
            <p className="text-white/45 mt-4 max-w-xl mx-auto">
              Non vendiamo consulenza. Costruiamo sistemi che lavorano mentre dormi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.stat}
                {...stagger(i)}
                className="card-dark rounded-2xl p-8 text-center"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="text-5xl font-extrabold text-[#FF6A00] mb-2">
                  {item.stat}
                </div>
                <div className="text-base font-bold mb-3">{item.label}</div>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINALE
          ══════════════════════════════════════════ */}
      <section className="py-32 px-6 relative overflow-hidden">

        {/* Glow centrale */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(255,106,0,0.1) 0%, transparent 60%)' }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div {...fadeUp}>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6A00] mb-4 block">
              Inizia ora
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Parliamo del<br />
              <span className="text-[#FF6A00]">tuo progetto</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Analizziamo la tua azienda gratuitamente e ti diciamo cosa automatizzare in 72 ore.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/393926936833"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-sm gap-2"
              >
                <FaWhatsapp size={16} />
                Scrivici su WhatsApp
              </a>
              <a
                href="mailto:tools@ayromex.com"
                className="btn-ghost px-8 py-4 text-sm gap-2"
              >
                <FiMail size={15} />
                tools@ayromex.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
