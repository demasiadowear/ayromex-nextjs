'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3BottomRight, HiXMark, HiChevronDown } from 'react-icons/hi2'
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { IT, GB, RO } from 'country-flag-icons/react/3x2'
import { PRODUCTS, type ProductId } from '@/lib/products'

// Per-product i18n key for the "Access {product}" mobile CTA.
// Keys preserve Italian grammar ("Accedi ad" before vowels), so
// they stay individually authored rather than composed from a
// template.
const ACCESS_KEY: Record<ProductId, string> = {
  ayrodesk24: 'accessAyroDesk24',
  ayrohub: 'accessAyroHub',
  ayrostay: 'accessAyroStay',
}

const languages = [
  { code: 'it', label: 'Italiano', FlagComponent: IT },
  { code: 'en', label: 'English', FlagComponent: GB },
  { code: 'ro', label: 'Română', FlagComponent: RO },
] as const

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isAccessOpen, setIsAccessOpen] = useState(false)

  const t = useTranslations('nav')
  const ta = useTranslations('a11y')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const currentLang = languages.find((l) => l.code === locale) ?? languages[0]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false)
    setIsLangOpen(false)
    setIsAccessOpen(false)
  }, [pathname])

  const handleLanguageChange = (langCode: string) => {
    router.replace(pathname, { locale: langCode })
    setIsLangOpen(false)
    setIsOpen(false)
  }

  // Anchor links go in-page if on home, else navigate home + anchor
  const anchorHref = (hash: string) => pathname === '/' ? hash : `/${locale}${hash}`

  const navLinks = [
    { label: t('home'), href: `/${locale}`, isAnchor: false },
    { label: t('services'), href: `/${locale}/servizi`, isAnchor: false },
    { label: t('products'), href: anchorHref('#prodotti'), isAnchor: true },
    // Blog (AYROSEO zone): NON localizzato, vive sotto /blog/:tenant fuori dal
    // routing [locale]. Link assoluto uguale per tutte le lingue.
    { label: t('blog'), href: '/blog/ayromex', isAnchor: false },
    { label: t('contact'), href: anchorHref('#contatti'), isAnchor: true },
  ]

  const navBg = isScrolled || isOpen
    ? 'bg-ay-bg/90 backdrop-blur-md border-b border-ay-border py-4'
    : 'bg-transparent py-6'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="section-container flex items-center justify-between">

        {/* Desktop nav links on the left */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-ay-text/70 hover:text-ay-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Menu right cluster */}
        <div className="hidden md:flex items-center gap-5">

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/ayromex_srl/" target="_blank" rel="noopener noreferrer"
              aria-label={ta('socialInstagram')}
              className="text-ay-text-muted hover:text-ay-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <FaInstagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61586097166352" target="_blank" rel="noopener noreferrer"
              aria-label={ta('socialFacebook')}
              className="text-ay-text-muted hover:text-ay-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <FaFacebook className="w-4 h-4" aria-hidden="true" />
            </a>
            <a href="https://share.google/Ed5CLO4Nn3BgQZHW4" target="_blank" rel="noopener noreferrer"
              aria-label={ta('socialGoogle')}
              className="text-ay-text-muted hover:text-ay-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <FaGoogle className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label={ta('openLanguageMenu')}
              aria-expanded={isLangOpen}
              aria-haspopup="menu"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ay-text/70 hover:text-ay-accent transition-colors px-3 py-2 rounded-lg hover:bg-white/5 min-h-[44px]"
            >
              <div className="w-5 h-3.5 overflow-hidden rounded-sm shadow-sm" aria-hidden="true">
                <currentLang.FlagComponent />
              </div>
              <span>{currentLang.code.toUpperCase()}</span>
              <HiChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  className="absolute top-full right-0 mt-2 w-44 bg-ay-surface border border-ay-border rounded-xl shadow-2xl overflow-hidden py-2"
                >
                  <div className="px-4 py-2 text-[10px] text-ay-text-muted font-bold uppercase tracking-widest border-b border-ay-border mb-1">
                    {t('translateTo')}
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 text-sm hover:bg-white/5 transition-colors ${locale === lang.code ? 'text-ay-accent bg-ay-accent/10' : 'text-ay-text/80'}`}
                    >
                      <div className="w-5 h-3.5 overflow-hidden rounded-sm shadow-sm">
                        <lang.FlagComponent />
                      </div>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Access dropdown — single entry point for all product portals.
              Replaces the prior hardcoded per-product buttons; product
              URLs come from lib/products.ts. */}
          <div className="relative">
            <button
              onClick={() => setIsAccessOpen(!isAccessOpen)}
              aria-label={ta('openAccessMenu')}
              aria-expanded={isAccessOpen}
              aria-haspopup="menu"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold min-h-[44px] border border-ay-accent/50 text-ay-accent hover:bg-ay-accent hover:text-ay-bg transition-all duration-200"
            >
              {t('access')}
              <HiChevronDown
                className={`w-3 h-3 transition-transform ${isAccessOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {isAccessOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  className="absolute top-full right-0 mt-2 w-64 bg-ay-surface border border-ay-border rounded-xl shadow-2xl overflow-hidden py-2"
                >
                  <div className="px-4 py-2 text-[10px] text-ay-text-muted font-bold uppercase tracking-widest border-b border-ay-border mb-1">
                    {t('access')}
                  </div>
                  {PRODUCTS.map((p) => (
                    <a
                      key={p.id}
                      href={p.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsAccessOpen(false)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 text-sm hover:bg-white/5 transition-colors text-ay-text/80 hover:text-ay-accent"
                    >
                      <span className="font-display font-bold">
                        {p.displayName}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-ay-lime" aria-hidden="true" />
                    </a>
                  ))}
                  <div className="px-4 pt-2 pb-1 text-[10px] text-ay-text-muted leading-relaxed border-t border-ay-border mt-1">
                    {t('accessHint')}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Prenota demo — primary CTA */}
          <a href={anchorHref('#contatti')} className="btn-primary px-5 py-2.5 ml-1 min-h-[44px]">
            {t('cta')}
          </a>
        </div>

        {/* Mobile: lang flag + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label={ta('openLanguageMenu')}
            aria-expanded={isLangOpen}
            aria-haspopup="menu"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <div className="w-6 h-4 overflow-hidden rounded-sm shadow-sm" aria-hidden="true">
              <currentLang.FlagComponent />
            </div>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? ta('closeMenu') : ta('openMenu')}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="relative z-50 min-h-[44px] min-w-[44px] flex items-center justify-center text-ay-text"
          >
            {isOpen ? <HiXMark className="w-7 h-7" aria-hidden="true" /> : <HiBars3BottomRight className="w-7 h-7" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile fullscreen menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label={ta('openMenu')}
              className="absolute inset-0 h-screen bg-ay-bg flex flex-col items-center justify-center gap-8 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black uppercase tracking-tight text-ay-text hover:text-ay-accent transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile access CTAs — driven by lib/products.ts */}
              <div className="flex flex-col items-center gap-3 mt-4 w-full px-12">
                {PRODUCTS.map((p) => (
                  <a
                    key={p.id}
                    href={p.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center rounded-xl border border-ay-accent/50 text-ay-accent px-5 py-3 text-sm font-bold uppercase tracking-widest hover:bg-ay-accent hover:text-ay-bg transition-colors"
                  >
                    {t(ACCESS_KEY[p.id])}
                  </a>
                ))}
                <a
                  href={anchorHref('#contatti')}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center btn-primary py-3 text-sm"
                >
                  {t('cta')}
                </a>
              </div>

              {/* Mobile social icons */}
              <div className="flex gap-6 mt-4">
                <a href="https://www.instagram.com/ayromex_srl/" target="_blank" rel="noopener noreferrer"
                  aria-label={ta('socialInstagram')}
                  className="text-ay-text/60 hover:text-ay-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <FaInstagram className="w-6 h-6" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61586097166352" target="_blank" rel="noopener noreferrer"
                  aria-label={ta('socialFacebook')}
                  className="text-ay-text/60 hover:text-ay-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <FaFacebook className="w-6 h-6" aria-hidden="true" />
                </a>
                <a href="https://share.google/Ed5CLO4Nn3BgQZHW4" target="_blank" rel="noopener noreferrer"
                  aria-label={ta('socialGoogle')}
                  className="text-ay-text/60 hover:text-ay-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <FaGoogle className="w-6 h-6" aria-hidden="true" />
                </a>
              </div>

              {/* Mobile language switcher */}
              <div className="flex gap-4 pt-6 border-t border-ay-border w-full justify-center">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex flex-col items-center gap-2 p-2 rounded-lg min-h-[44px] min-w-[44px] ${locale === lang.code ? 'text-ay-accent' : 'text-ay-text-muted'}`}
                  >
                    <div className="w-8 h-5 overflow-hidden rounded shadow-md">
                      <lang.FlagComponent />
                    </div>
                    <span className="text-[10px] font-bold uppercase">{lang.code}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile lang dropdown (outside hamburger menu) */}
        <AnimatePresence>
          {isLangOpen && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="absolute top-full right-4 mt-2 w-44 bg-ay-surface border border-ay-border rounded-xl shadow-2xl overflow-hidden py-2 md:hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 text-sm hover:bg-white/5 min-h-[44px] ${locale === lang.code ? 'text-ay-accent' : 'text-ay-text/80'}`}
                >
                  <div className="w-5 h-3.5 overflow-hidden rounded-sm">
                    <lang.FlagComponent />
                  </div>
                  <span>{lang.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
