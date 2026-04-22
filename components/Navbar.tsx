'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3BottomRight, HiXMark, HiChevronDown } from 'react-icons/hi2'
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { IT, GB, RO } from 'country-flag-icons/react/3x2'
import { AyromexLogo } from './AyromexLogo'

const languages = [
  { code: 'it', label: 'Italiano', FlagComponent: IT },
  { code: 'en', label: 'English', FlagComponent: GB },
  { code: 'ro', label: 'Română', FlagComponent: RO },
] as const

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  const t = useTranslations('nav')
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
  useEffect(() => { setIsOpen(false); setIsLangOpen(false) }, [pathname])

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
    { label: t('clients'), href: anchorHref('#clienti'), isAnchor: true },
    { label: t('contact'), href: anchorHref('#contatti'), isAnchor: true },
  ]

  const navBg = isScrolled || isOpen
    ? 'bg-white/90 dark:bg-[#070707]/90 backdrop-blur-md border-b border-black/10 dark:border-white/5 py-3'
    : 'bg-transparent py-5'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="section-container flex items-center justify-between">

        {/* LOGO */}
        <a href={`/${locale}`} className="relative z-50">
          <AyromexLogo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-widest text-[#0a0a0a]/70 dark:text-white/70 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-3 pl-2 border-l border-black/10 dark:border-white/10">
            <a href="https://www.instagram.com/ayromex_srl/" target="_blank" rel="noopener noreferrer"
              className="text-[#0a0a0a]/50 dark:text-white/50 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61586097166352" target="_blank" rel="noopener noreferrer"
              className="text-[#0a0a0a]/50 dark:text-white/50 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="https://share.google/Ed5CLO4Nn3BgQZHW4" target="_blank" rel="noopener noreferrer"
              className="text-[#0a0a0a]/50 dark:text-white/50 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
              <FaGoogle className="w-4 h-4" />
            </a>
          </div>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#0a0a0a]/70 dark:text-white/70 hover:text-[#FF4D00] dark:hover:text-[#FF4D00] transition-colors px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 min-h-[44px]"
            >
              <div className="w-5 h-3.5 overflow-hidden rounded-sm shadow-sm">
                <currentLang.FlagComponent />
              </div>
              <span>{currentLang.code.toUpperCase()}</span>
              <HiChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  className="absolute top-full right-0 mt-2 w-44 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden py-2"
                >
                  <div className="px-4 py-2 text-[10px] text-black/40 dark:text-white/40 font-bold uppercase tracking-widest border-b border-black/5 dark:border-white/5 mb-1">
                    {t('translateTo')}
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${locale === lang.code ? 'text-[#FF4D00] bg-orange-50 dark:bg-orange-500/5' : 'text-[#0a0a0a]/80 dark:text-gray-300'}`}
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

          {/* AyroHub CTA */}
          <a
            href="https://app.ayromex.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold min-h-[44px] border border-[#FF4D00]/50 text-[#FF4D00] hover:bg-[#FF4D00] hover:text-white transition-all duration-200"
          >
            {t('ayrohubCta')}
          </a>

          {/* CTA */}
          <a href={anchorHref('#contatti')} className="btn-primary px-5 py-2.5 ml-1 min-h-[44px]">
            {t('cta')}
          </a>
        </div>

        {/* Mobile: lang flag + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setIsLangOpen(!isLangOpen)} className="min-h-[44px] min-w-[44px] flex items-center justify-center">
            <div className="w-6 h-4 overflow-hidden rounded-sm shadow-sm">
              <currentLang.FlagComponent />
            </div>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-50 min-h-[44px] min-w-[44px] flex items-center justify-center text-[#0a0a0a] dark:text-white">
            {isOpen ? <HiXMark className="w-7 h-7" /> : <HiBars3BottomRight className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile fullscreen menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="absolute inset-0 h-screen bg-white dark:bg-[#070707] flex flex-col items-center justify-center gap-8 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black uppercase tracking-tight text-[#0a0a0a] dark:text-white hover:text-[#FF4D00] transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile social icons */}
              <div className="flex gap-6 mt-4">
                <a href="https://www.instagram.com/ayromex_srl/" target="_blank" rel="noopener noreferrer"
                  className="text-[#0a0a0a]/60 dark:text-white/60 hover:text-[#FF4D00] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61586097166352" target="_blank" rel="noopener noreferrer"
                  className="text-[#0a0a0a]/60 dark:text-white/60 hover:text-[#FF4D00] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="https://share.google/Ed5CLO4Nn3BgQZHW4" target="_blank" rel="noopener noreferrer"
                  className="text-[#0a0a0a]/60 dark:text-white/60 hover:text-[#FF4D00] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center">
                  <FaGoogle className="w-6 h-6" />
                </a>
              </div>

              {/* Mobile language switcher */}
              <div className="flex gap-4 pt-6 border-t border-black/10 dark:border-white/10 w-full justify-center">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`flex flex-col items-center gap-2 p-2 rounded-lg min-h-[44px] min-w-[44px] ${locale === lang.code ? 'text-[#FF4D00]' : 'text-[#0a0a0a]/50 dark:text-white/50'}`}
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
              className="absolute top-full right-4 mt-2 w-44 bg-white dark:bg-[#111] border border-black/10 dark:border-white/10 rounded-xl shadow-2xl overflow-hidden py-2 md:hidden z-50"
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 text-sm hover:bg-black/5 dark:hover:bg-white/5 min-h-[44px] ${locale === lang.code ? 'text-[#FF4D00]' : 'text-[#0a0a0a]/80 dark:text-gray-300'}`}
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
