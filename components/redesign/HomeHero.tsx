import { getTranslations } from 'next-intl/server'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/contact'
import ShieldMotif from './ShieldMotif'

/**
 * Hero redesign 2026 — chiaro, caldo, umano, ma con presenza.
 * Sfondo con gradiente caldo (pesca → paper), non bianco piatto.
 * Entrata decisa in CSS puro (translate-only sul claim per non
 * spostare l'LCP), underline animato sulla parola chiave, badge in
 * scale+fade. Server component: zero JS d'ingresso; `motion-safe:`
 * rispetta prefers-reduced-motion.
 */
export default async function HomeHero() {
  const t = await getTranslations('homeHero')

  return (
    <section
      className="surface-hero relative overflow-hidden px-6 md:px-12 pt-28 md:pt-36 pb-20 md:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Motivo scudo — grande, tenue, in alto a destra */}
      <ShieldMotif className="shield-arc w-[280px] md:w-[440px] -top-16 -right-10 md:-right-4" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1
          id="hero-heading"
          className="font-display font-extrabold tracking-[-0.02em] text-ay-text leading-[1.08] break-words [font-size:clamp(27px,7.2vw,44px)] md:[font-size:clamp(48px,4.8vw,72px)]"
        >
          <span className="block motion-safe:animate-rise-in">
            {t.rich('line1', {
              u: (chunks) => (
                <span className="claim-underline text-ay-accent">{chunks}</span>
              ),
            })}
          </span>
          <span className="block text-ay-text-muted motion-safe:animate-rise-in motion-safe:[animation-delay:0.14s]">
            {t('line2')}
          </span>
        </h1>

        <p className="mt-6 md:mt-8 font-body text-[17px] md:text-[20px] leading-relaxed text-ay-text-muted max-w-[640px] mx-auto motion-safe:animate-fade-up-soft motion-safe:[animation-delay:0.5s]">
          {t('sub')}
        </p>

        {/* Badge Meta Tech Provider — asset brand, sempre in inglese */}
        <div className="mt-9 md:mt-12 flex justify-center motion-safe:animate-pop-in motion-safe:[animation-delay:0.7s]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logos/primary/tech-light.svg"
            alt={t('badgeAlt')}
            width={1036}
            height={295}
            fetchPriority="high"
            className="h-auto w-full max-w-[340px] md:max-w-none md:h-[168px] drop-shadow-[0_18px_40px_rgba(255,106,0,0.18)]"
          />
        </div>

        <div className="mt-9 md:mt-12 flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center motion-safe:animate-fade-up-soft motion-safe:[animation-delay:0.9s]">
          <Button
            asChild
            size="lg"
            className="w-full md:w-auto rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold text-[16px] px-8 py-6 shadow-[0_10px_30px_-8px_rgba(255,106,0,0.6)] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_16px_40px_-8px_rgba(255,106,0,0.7)]"
          >
            <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer">
              {t('ctaWhatsApp')}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full md:w-auto rounded-full border-ay-text/20 bg-white/60 backdrop-blur text-ay-text font-semibold text-[16px] px-8 py-6 hover:bg-white hover:border-ay-accent hover:text-ay-accent transition-all"
          >
            <a href="#come-funziona">{t('ctaHow')}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
