'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let raf: number
    let rx = -100, ry = -100  // ring position (lagged)
    let mx = -100, my = -100  // mouse position

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left  = mx + 'px'
      dot.style.top   = my + 'px'
    }

    const animate = () => {
      // ring follows with slight lag
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      dot.classList.add('is-hovering')
      ring.classList.add('is-hovering')
    }
    const onLeave = () => {
      dot.classList.remove('is-hovering')
      ring.classList.remove('is-hovering')
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)

    // apply hover class on interactive elements
    const interactive = 'a, button, [role="button"], input, textarea, select, label'
    document.querySelectorAll<HTMLElement>(interactive).forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // observe DOM for new interactive elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(interactive).forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  )
}
