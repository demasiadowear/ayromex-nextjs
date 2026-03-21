'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeProvider'

interface Particle {
  x: number; y: number; vx: number; vy: number; size: number; opacity: number
}
interface Streak {
  x: number; y: number; length: number; speed: number; opacity: number
  angle: number; life: number; maxLife: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const themeRef = useRef(theme)

  useEffect(() => { themeRef.current = theme }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 55
    const CONNECT_DIST = 160

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.84,
      vy: (Math.random() - 0.5) * 0.84,
      size: Math.random() * 2.2 + 0.8,
      opacity: Math.random() * 0.5 + 0.2,
    }))

    const streaks: Streak[] = []
    const spawnStreak = () => {
      const edge = Math.random()
      const x = edge < 0.5 ? Math.random() * canvas.width : -20
      const y = edge < 0.5 ? -20 : Math.random() * canvas.height
      streaks.push({
        x, y,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 5.6 + 2.8,
        opacity: Math.random() * 0.35 + 0.15,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
        life: 0,
        maxLife: Math.random() * 60 + 40,
      })
    }

    let streakTimer = 0
    let animId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const isDark = themeRef.current === 'dark'
      const baseAlpha = isDark ? 1 : 0.5

      // Streaks
      streakTimer++
      if (streakTimer >= 18) { spawnStreak(); streakTimer = 0 }

      for (let i = streaks.length - 1; i >= 0; i--) {
        const s = streaks[i]
        s.x += Math.cos(s.angle) * s.speed
        s.y += Math.sin(s.angle) * s.speed
        s.life++
        const alpha = s.opacity * (1 - s.life / s.maxLife) * baseAlpha
        const grad = ctx.createLinearGradient(s.x, s.y, s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length)
        grad.addColorStop(0, `rgba(255,77,0,${alpha})`)
        grad.addColorStop(1, 'rgba(255,77,0,0)')
        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length)
        ctx.strokeStyle = grad
        ctx.lineWidth = 1.2
        ctx.stroke()
        if (s.life >= s.maxLife || s.x > canvas.width + 200 || s.y > canvas.height + 200) {
          streaks.splice(i, 1)
        }
      }

      // Particles
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,77,0,${p.opacity * baseAlpha})`
        ctx.fill()
      }

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const lineOpacity = (1 - dist / CONNECT_DIST) * 0.225 * baseAlpha
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(255,77,0,${lineOpacity})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <div className="ay-orb ay-orb-1" />
      <div className="ay-orb ay-orb-2" />
      <div className="ay-orb ay-orb-3" />
      <div className="ay-orb ay-orb-4" />
      <div className="ay-orb ay-orb-5" />
      <div className="ay-orb ay-orb-6" />
      <div className="ay-orb-sm ay-orb-sm-1" />
      <div className="ay-orb-sm ay-orb-sm-2" />
      <div className="ay-orb-sm ay-orb-sm-3" />
      <div className="ay-orb-sm ay-orb-sm-4" />
      <div className="ay-orb-sm ay-orb-sm-5" />
      <div className="ay-orb-sm ay-orb-sm-6" />
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
    </>
  )
}
