'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import AyromexAnimatedBackground from '@/components/cinema/AyromexAnimatedBackground';
import AyromexCoreVisual from '@/components/cinema/AyromexCoreVisual';
import TaskTicker from '@/components/hero/TaskTicker';
import FinalCtaSection from '@/components/sections/FinalCtaSection';
import HubSection from '@/components/sections/HubSection';
import PmiSection from '@/components/sections/PmiSection';
import { RotatingText } from '@/components/RotatingText';
import { WHATSAPP_DISPLAY, WHATSAPP_LINK_BARE } from '@/lib/contact';
import { EASE_OUT } from '@/lib/motion';

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
    <>
      <main id="main" className="relative overflow-x-hidden text-ay-text w-full max-w-full">

      {/* Animated AYROMEX CORE background — replaces the legacy
          MP4 video system. Pure CSS + Framer Motion, mobile-safe. */}
      <AyromexAnimatedBackground />

      {/* Live system log, pinned across the scroll */}
      <TaskTicker />

      {/* ══════════════════════════════════════════
          HERO
          ══════════════════════════════════════════ */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center pt-28 pb-24 px-4 sm:px-6 overflow-hidden"
      >

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center min-w-0">

          {/* Top: copy stack centered */}
          <div className="flex flex-col items-center text-center w-full max-w-full md:max-w-5xl mx-auto min-w-0">

            {/* Hero logo lockup — centered above eyebrow.
                Mobile: compact 140px box so the symbol fits with
                generous side breathing room and never clips with
                its drop-shadow. md+ keeps the cinematic size. */}
            <motion.img
              {...heroAnim(0.5)}
              src="/brand/logos/symbol/AYROLOGO.svg"
              alt="AYROMEX"
              className="h-[140px] w-[140px] max-w-full md:h-[360px] md:w-[360px] lg:h-[440px] lg:w-[440px] mb-2 md:mb-4 object-contain"
              style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.85))' }}
            />

            {/* Eyebrow */}
            <motion.span
              {...heroAnim(1.0)}
              className="block font-body text-[11px] md:text-[12px] font-medium uppercase tracking-[0.08em] text-ay-text-muted mb-3 md:mb-6"
            >
              {tHero('eyebrow')}
            </motion.span>

            {/* Headline — cinema size */}
            <motion.h1
              {...heroAnim(1.3, 1.0)}
              className="font-display font-extrabold text-ay-text leading-[0.95] tracking-[-0.025em] mb-6 md:mb-8 break-words w-full max-w-full mx-auto md:max-w-[1180px] [font-size:clamp(34px,9.5vw,44px)] md:[font-size:clamp(72px,7vw,112px)]"
            >
              {tHero('headlineStart')}
              {/* Accent span: always `inline` so the long word can
                  wrap naturally with the rest of the sentence and
                  never produce horizontal overflow. The cinematic
                  underline that used to anchor to an inline-block
                  parent is dropped — the orange colour already
                  carries the emphasis. */}
              <span className="text-ay-accent">
                {tHero('headlineAccent')}
              </span>
              <span>{tHero('headlineRest')}</span>
            </motion.h1>

            {/* Rotating text */}
            <motion.p
              {...heroAnim(2.0)}
              className="font-body text-[16px] md:text-[24px] text-ay-text mb-3 md:mb-4 max-w-full"
            >
              {tHero('rotatingPrefix')}
              <RotatingText words={rotatingWords} showUnderline />
            </motion.p>

            {/* Supporting paragraph */}
            <motion.p
              {...heroAnim(2.3)}
              className="font-body text-[14px] md:text-[17px] text-ay-text-muted max-w-full md:max-w-[640px] leading-relaxed mb-6 md:mb-10"
            >
              {tHero('paragraph')}
            </motion.p>
          </div>

          {/* Ayro chat card — wrapped in AyromexCoreVisual so the
              card becomes the literal AYROMEX CORE inside the
              product orchestration frame (CORE chip, orbital
              product modules, capability tags). The wrapper folds
              the previous glow halo internally and adds the
              orbital infrastructure layer above lg. */}
          <div className="flex justify-center w-full">
            <AyromexCoreVisual>
              <motion.div
                {...chatAnim}
                className="w-full max-w-full h-[300px] md:h-[360px] lg:h-[400px] rounded-2xl border border-ay-border bg-ay-surface flex flex-col overflow-hidden text-left min-w-0"
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
                    className="inline-block w-2 h-2 rounded-full bg-ay-lime animate-pulse"
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
                      href={WHATSAPP_LINK_BARE}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ay-accent hover:underline"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </AyromexCoreVisual>
          </div>

          {/* CTAs */}
          <motion.div
            {...heroAnim(3.0)}
            className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4 justify-center mt-8 md:mt-12 mb-16 md:mb-20 w-full max-w-[420px] md:max-w-none"
          >
            <a
              href="#cassetti"
              className="w-full md:w-auto inline-flex items-center justify-center font-display font-bold uppercase tracking-widest text-sm rounded-full bg-ay-accent text-ay-bg px-7 py-[14px] hover:bg-ay-accent-hover hover:scale-[1.02] transition-all duration-200 text-center"
            >
              {tHero('ctaPrimary')}
            </a>
            <a
              href="#contatti"
              className="w-full md:w-auto inline-flex items-center justify-center font-display font-bold uppercase tracking-widest text-sm rounded-full border border-ay-border text-ay-text px-7 py-[14px] hover:border-ay-accent hover:text-ay-accent transition-all duration-200 text-center"
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
              className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 pointer-events-none z-10"
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
          HUB — six navigable drawers (entry to the whole ecosystem)
          ══════════════════════════════════════════ */}
      <HubSection />

      {/* ══════════════════════════════════════════
          PMI ITALIANE — deep dive for drawer 04 (siti web)
          ══════════════════════════════════════════ */}
      <PmiSection />

      {/* ══════════════════════════════════════════
          FINAL CTA — closing surface
          ══════════════════════════════════════════ */}
      <FinalCtaSection />

      </main>
    </>
  );
}
