'use client'

import { useState, useEffect } from 'react'
import { HiBars3, HiXMark, HiArrowRight } from 'react-icons/hi2'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import Logo from '@/components/Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()

  const navLinks = [
    { key: 'servizi' as const, href: '/servizi' as const },
    { key: 'portfolio' as const, href: '/portfolio' as const },
    { key: 'chiSiamo' as const, href: '/chi-siamo' as const },
    { key: 'contatti' as const, href: '/contatti' as const },
  ]

  const locales = ['it', 'en', 'ro'] as const

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
          <Link href="/" aria-label="AYROMEX">
            <Logo height={26} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-white/55 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Phone + Language switcher */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language switcher */}
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              {locales.map((l, i) => (
                <span key={l} className="flex items-center gap-1.5">
                  <Link
                    href={pathname}
                    locale={l}
                    className={`transition ${
                      l === locale ? 'text-white' : 'text-white/35 hover:text-white/70'
                    }`}
                  >
                    {l.toUpperCase()}
                  </Link>
                  {i < locales.length - 1 && (
                    <span className="text-white/20">·</span>
                  )}
                </span>
              ))}
            </div>

            <a
              href="tel:+390808407861"
              className="text-sm text-white/40 hover:text-white/70 transition font-medium tracking-wide"
            >
              {t('phone')}
            </a>
            <Link
              href="/contatti"
              className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
            >
              {t('cta')}
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Menu"
          >
            {mobileOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#07090d] flex flex-col lg:hidden">
          {/* Close bar */}
          <div className="flex justify-between items-center px-6 h-[76px] border-b border-white/8">
            <Logo height={26} />
            <button onClick={() => setMobileOpen(false)} className="text-white p-2 -mr-2">
              <HiXMark className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ transitionDelay: `${i * 40}ms` }}
                className="font-display font-extrabold text-[clamp(2rem,8vw,3.5rem)] tracking-[-0.03em] text-white/80 hover:text-orange-400 transition py-1"
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          <div className="px-8 pb-10 border-t border-white/8 pt-8 space-y-3">
            <Link
              href="/contatti"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 text-base font-semibold text-black hover:bg-orange-400 transition"
            >
              {t('cta')}
              <HiArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+390808407861"
              className="block text-center text-sm text-white/40 hover:text-white transition py-2"
            >
              +39 {t('phone')}
            </a>

            {/* Language switcher mobile */}
            <div className="flex items-center justify-center gap-4 pt-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={pathname}
                  locale={l}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-semibold transition ${
                    l === locale ? 'text-orange-400' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
