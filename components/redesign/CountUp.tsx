'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Numero che conta all'ingresso in viewport. Estrae la parte numerica
 * dal valore (es. "200+", "< 1 min", "12.000") e anima solo quella,
 * preservando prefissi/suffissi. Rispetta prefers-reduced-motion.
 */
export default function CountUp({
  value,
  className = '',
  duration = 1400,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState<string>(value)
  const done = useRef(false)

  // Scompone "12.000+" -> pre="", num=12000, sep=".", suf="+"
  const match = value.match(/^(\D*)([\d.]+)(\D*)$/)
  const hasNumber = !!match

  useEffect(() => {
    if (!hasNumber || !ref.current) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }

    const pre = match![1]
    const rawNum = match![2]
    const suf = match![3]
    const usesDot = rawNum.includes('.')
    const target = parseInt(rawNum.replace(/\./g, ''), 10)
    const fmt = (n: number) =>
      usesDot ? n.toLocaleString('it-IT') : String(n)

    setDisplay(`${pre}${fmt(0)}${suf}`)

    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || done.current) return
          done.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(`${pre}${fmt(Math.round(target * eased))}${suf}`)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, hasNumber, duration, match])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
