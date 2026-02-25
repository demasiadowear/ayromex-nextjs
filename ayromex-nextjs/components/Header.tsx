'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { HiBars3, HiXMark, HiArrowRight } from 'react-icons/hi2'

const navLinks = [
  { name: 'Servizi',    href: '/servizi'    },
  { name: 'Portfolio',  href: '/portfolio'  },
  { name: 'Chi Siamo',  href: '/chi-siamo'  },
  { name: 'Contatti',   href: '/contatti'   },
]

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-[#07090d]/92 backdrop-blur-2xl border-b border-white/8'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 flex items-center justify-between h-[76px]">

          {/* Logo */}
          <Link href="/" className="font-display font-extrabold text-xl tracking-[-0.02em]">
            <span className="text-orange-400">AYRO</span>
            <span className="text-white">MEX</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/55 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+390808407861"
              className="text-sm text-white/40 hover:text-white/70 transition font-medium tracking-wide"
            >
              080 840 7861
            </a>
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
            >
              Preventivo gratuito
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Menu"
          >
            {mobileOpen
              ? <HiXMark   className="w-6 h-6" />
              : <HiBars3   className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#07090d] flex flex-col lg:hidden">
          {/* Close bar */}
          <div className="flex justify-between items-center px-6 h-[76px] border-b border-white/8">
            <span className="font-display font-extrabold text-xl">
              <span className="text-orange-400">AYRO</span>
              <span className="text-white">MEX</span>
            </span>
            <button onClick={() => setMobileOpen(false)} className="text-white p-2 -mr-2">
              <HiXMark className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ transitionDelay: `${i * 40}ms` }}
                className="font-display font-extrabold text-[clamp(2rem,8vw,3.5rem)] tracking-[-0.03em] text-white/80 hover:text-orange-400 transition py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="px-8 pb-10 border-t border-white/8 pt-8 space-y-3">
            <Link
              href="/contatti"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-black hover:bg-orange-400 transition"
            >
              Preventivo gratuito
              <HiArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+390808407861"
              className="block text-center text-sm text-white/40 hover:text-white transition py-2"
            >
              +39 080 840 7861
            </a>
          </div>
        </div>
      )}
    </>
  )
}
