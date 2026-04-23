'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import AyroGuide from '@/components/hero/AyroGuide';
import SceneDirector from '@/components/hero/SceneDirector';
import TaskTicker from '@/components/hero/TaskTicker';
import CtaSection from '@/components/sections/CtaSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ProductsSection from '@/components/sections/ProductsSection';
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
    <main className="relative overflow-x-hidden text-ay-text">

      {/* Drives the global sceneProgress singleton from scroll */}
      <SceneDirector />

      {/* Narrative follower — appears when scrolling past the hero */}
      <AyroGuide />

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
              style={{ fontSize: 'clamp(64px, 11vw, 160px)' }}
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
          01 — PRODOTTI
          ══════════════════════════════════════════ */}
      <ProductsSection />

      {/* ══════════════════════════════════════════
          02 — PROCESSO
          ══════════════════════════════════════════ */}
      <ProcessSection />

      {/* ══════════════════════════════════════════
          03 — CTA
          ══════════════════════════════════════════ */}
      <CtaSection />

    </main>
  );
}
