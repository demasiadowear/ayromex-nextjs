import { getTranslations } from 'next-intl/server'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/contact'

/**
 * Hero redesign 2026 — chiaro, caldo, umano. Una sola entrata ben
 * fatta, in CSS puro: le righe del claim salgono con stagger
 * (translate-only: un h1 nascosto via JS/opacity sposta l'LCP alla
 * fine dell'entrance — misurato ~3.4s di render delay), badge e CTA
 * seguono in fade. Server component: zero JS per l'entrata,
 * `motion-safe:` rispetta prefers-reduced-motion.
 */
export default async function HomeHero() {
  const t = await getTranslations('homeHero')

  return (
    <section
      className="relative px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          id="hero-heading"
          className="font-display font-extrabold tracking-[-0.02em] text-ay-text leading-[1.08] [font-size:clamp(34px,8vw,44px)] md:[font-size:clamp(48px,4.6vw,68px)]"
        >
          <span className="block motion-safe:animate-rise-in">
            {t('line1')}
          </span>
          <span className="block text-ay-text-muted motion-safe:animate-rise-in motion-safe:[animation-delay:0.14s]">
            {t('line2')}
          </span>
        </h1>

        <p className="mt-6 md:mt-8 font-body text-[17px] md:text-[20px] leading-relaxed text-ay-text-muted max-w-[620px] mx-auto motion-safe:animate-fade-up-soft motion-safe:[animation-delay:0.45s]">
          {t('sub')}
        </p>

        {/* Badge Meta Tech Provider — asset brand, sempre in inglese */}
        <div className="mt-9 md:mt-12 flex justify-center motion-safe:animate-fade-up-soft motion-safe:[animation-delay:0.65s]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logos/primary/tech-light.svg"
            alt={t('badgeAlt')}
            width={720}
            height={300}
            fetchPriority="high"
            className="h-[120px] md:h-[160px] w-auto"
          />
        </div>

        <div className="mt-9 md:mt-12 flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center motion-safe:animate-fade-up-soft motion-safe:[animation-delay:0.85s]">
          <Button
            asChild
            size="lg"
            className="w-full md:w-auto rounded-full bg-ay-accent hover:bg-ay-accent-hover text-white font-semibold text-[16px] px-8 py-6 transition-transform duration-200 hover:scale-[1.02]"
          >
            <a href={whatsappLink('general')} target="_blank" rel="noopener noreferrer">
              {t('ctaWhatsApp')}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full md:w-auto rounded-full border-ay-border bg-transparent text-ay-text font-semibold text-[16px] px-8 py-6 hover:bg-ay-surface hover:border-ay-text-muted"
          >
            <a href="#come-funziona">{t('ctaHow')}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
