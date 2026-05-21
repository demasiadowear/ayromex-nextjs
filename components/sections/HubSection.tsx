'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import gsap from 'gsap'
import { Link } from '@/i18n/navigation'
import { initScrollTrigger } from '@/lib/scroll'
import { whatsappLink } from '@/lib/contact'

type StandardKey = 'ayrohub' | 'ayrodesk24' | 'ayrostay' | 'automazioni' | 'branding'

interface StandardCassetto {
  key: StandardKey
  number: string
  href: string
}

const ROW1: StandardCassetto[] = [
  { key: 'ayrohub',    number: '01', href: '/prodotti#ayrohub' },
  { key: 'ayrodesk24', number: '02', href: '/prodotti#ayrodesk24' },
  { key: 'ayrostay',   number: '03', href: '/prodotti#ayrostay' },
]

const ROW3: StandardCassetto[] = [
  { key: 'automazioni', number: '05', href: '/servizi#automazioni' },
  { key: 'branding',    number: '06', href: '/servizi#branding' },
]

// Magnetic CTA used inside the prominent 04 drawer. Framer Motion
// spring keeps the button gently following the cursor on hover and
// snaps back on leave. Skipped under prefers-reduced-motion.
function MagneticCta({
  href,
  label,
}: {
  href: string
  label: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18 })
  const springY = useSpring(y, { stiffness: 200, damping: 18 })

  const onMove = (e: React.MouseEvent) => {
    if (reduceMotion) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-flex items-center justify-center bg-ay-accent text-white font-display font-bold uppercase tracking-widest text-sm rounded-full px-8 py-4 transition-colors duration-200 hover:bg-ay-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ay-bg"
    >
      <span>{label}</span>
    </motion.a>
  )
}

export default function HubSection() {
  const t  = useTranslations('hubSection')
  const tC = useTranslations('hubSection.cassetti')

  const sectionRef   = useRef<HTMLElement>(null)
  const prominentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const prom    = prominentRef.current
    if (!section || !prom) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) return

    initScrollTrigger()

    const cells = section.querySelectorAll<HTMLElement>('[data-hub-cell]')

    const tweens: gsap.core.Tween[] = []

    // Five standard cassetti — stagger from below
    tweens.push(
      gsap.fromTo(
        cells,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      ),
    )

    // Prominent 04 — enters last with a scale beat
    tweens.push(
      gsap.fromTo(
        prom,
        { opacity: 0, scale: 0.97 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: prom,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        },
      ),
    )

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill()
        tween.kill()
      })
    }
  }, [])

  // Tile rendering — shared between rows 1 and 3
  const renderTile = ({ key, number, href }: StandardCassetto) => (
    <Link
      key={key}
      href={href}
      data-hub-cell
      className="group relative rounded-[4px] border border-ay-border bg-ay-surface p-6 md:p-8 flex flex-col text-left transition-all duration-300 hover:border-ay-accent/40 hover:bg-ay-surface/80 focus-visible:outline-none focus-visible:border-ay-accent"
    >
      <header className="flex items-baseline justify-between">
        <span className="font-mono text-xs text-ay-text-muted/40">
          {number}
        </span>
        <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ay-accent/60">
          {tC(`${key}.tag`)}
        </span>
      </header>

      <h3 className="font-display text-2xl text-ay-text mt-4">
        {tC(`${key}.title`)}
      </h3>

      <p className="font-body text-ay-text-muted text-sm leading-relaxed mt-2">
        {tC(`${key}.tagline`)}
      </p>

      <p className="font-body text-ay-text-muted/70 text-xs mt-3 leading-relaxed">
        {tC(`${key}.description`)}
      </p>

      <span
        className="mt-6 inline-flex items-center text-ay-accent transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        <FiArrowUpRight className="w-5 h-5" />
      </span>
    </Link>
  )

  return (
    <section
      id="cassetti"
      ref={sectionRef}
      className="relative px-4 sm:px-6 py-20 md:py-32"
      aria-labelledby="hub-heading"
    >
      <div className="max-w-7xl mx-auto w-full space-y-6">
        <h2 id="hub-heading" className="sr-only">
          {t('heading')}
        </h2>

        {/* Row 1 — three equal cassetti */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROW1.map(renderTile)}
        </div>

        {/* Row 2 — prominent 04 SITI WEB. NOT a single <a> wrapper:
            the magnetic WhatsApp CTA inside is itself an anchor, so
            nesting <a> in <a> would break hydration. Navigation
            primary surface is the magnetic CTA. The PmiSection deep
            dive sits directly below in the page — no need for an
            internal #pmi jump from here. */}
        <div
          ref={prominentRef}
          className="group relative block rounded-2xl border border-ay-accent/40 bg-ay-accent/10 p-8 md:p-12 transition-all duration-300 hover:border-ay-accent/70 hover:bg-ay-accent/15"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start md:items-center">

            {/* Left — text stack */}
            <div className="flex flex-col">
              <header className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-ay-text-muted/40">
                  04
                </span>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-ay-accent">
                  {tC('siti.tag')}
                </span>
              </header>

              <h3 className="font-display font-bold text-ay-text leading-[1.0] tracking-[-0.02em] mt-4 [font-size:clamp(36px,5.4vw,56px)]">
                {tC('siti.title')}
              </h3>

              <p className="font-display italic text-ay-accent leading-tight mt-3 [font-size:clamp(20px,2.4vw,28px)]">
                {tC('siti.tagline')}
              </p>

              <p className="font-display italic text-ay-text/80 text-base md:text-lg mt-3">
                {tC('siti.subtitle')}
              </p>

              <p className="font-body text-ay-text-muted text-sm md:text-base mt-5 leading-relaxed whitespace-pre-line max-w-[60ch]">
                {tC('siti.description')}
              </p>
            </div>

            {/* Right — badge + magnetic CTA */}
            <div className="flex flex-col items-start md:items-end gap-5 md:min-w-[260px]">
              <span className="inline-block bg-ay-accent text-white font-mono text-[0.6rem] tracking-widest uppercase px-3 py-1 rounded-full">
                {tC('siti.badge')}
              </span>

              <MagneticCta
                href={whatsappLink('web-quote')}
                label={tC('siti.cta')}
              />
            </div>
          </div>
        </div>

        {/* Row 3 — two secondary cassetti */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ROW3.map(renderTile)}
        </div>
      </div>
    </section>
  )
}
