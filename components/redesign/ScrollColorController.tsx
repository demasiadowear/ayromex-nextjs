'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**
 * Transizione colore durante lo scroll. Ogni sezione con
 * data-surface (ink | orange) aggiorna la theme-color della barra
 * del browser mentre attraversa il centro del viewport, e lascia un
 * accento sottile sulla barra di avanzamento. Movimento discreto,
 * niente parallax pesanti. Rispetta prefers-reduced-motion (la
 * theme-color cambia comunque, ma senza scrub).
 */
const COLORS: Record<string, string> = {
  light: '#FAFAF7',
  ink: '#1A1712',
  orange: '#FF6A00',
}

export default function ScrollColorController() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'theme-color'
      document.head.appendChild(meta)
    }

    const setColor = (key: string) => {
      meta!.setAttribute('content', COLORS[key] ?? COLORS.light)
    }

    const sections = gsap.utils.toArray<HTMLElement>('[data-surface]')
    const triggers = sections.map((el) => {
      const key = el.dataset.surface || 'light'
      return ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setColor(key),
        onEnterBack: () => setColor(key),
        onLeave: () => setColor('light'),
        onLeaveBack: () => setColor('light'),
      })
    })

    return () => {
      triggers.forEach((t) => t.kill())
      setColor('light')
    }
  }, [])

  return null
}
