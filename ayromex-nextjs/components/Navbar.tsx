'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3BottomRight, HiXMark, HiGlobeAlt, HiChevronDown } from 'react-icons/hi2'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  
  // Gestione Lingua
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(languages[0]) // Default IT

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-dark-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="section-container flex items-center justify-between">
        
        {/* LOGO AYROMEX */}
        <Link href="/" className="relative z-50">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-40 md:h-12"> 
              <Image 
                src="/logo.svg" 
                alt="AYROMEX Logo" 
                width={160}
                height={50}
                className="object-contain object-left"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Menu & Language */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-light-50/80 hover:text-orange-500 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
          
          {/* SEPARATORE */}
          <div className="h-4 w-px bg-white/20 mx-2"></div>

          {/* LANGUAGE SWITCHER (Desktop) */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-sm font-medium text-white hover:text-orange-500 transition-colors uppercase tracking-wider px-3 py-2 rounded-lg hover:bg-white/5"
            >
              <span className="text-lg">{currentLang.flag}</span>
              <span>{currentLang.code}</span>
              <HiChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-2"
                >
                  <div className="px-4 py-2 text-xs text-gray-500 font-bold uppercase tracking-widest border-b border-white/5 mb-2">
                    Select Language
                  </div>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang)
                        setIsLangOpen(false)
                      }}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 text-sm hover:bg-white/5 transition-colors ${
                        currentLang.code === lang.code ? 'text-orange-500 bg-orange-500/5' : 'text-gray-300'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.label}</span>
                      {currentLang.code === lang.code && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
                      )}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contatti" className="btn-primary text-xs px-6 py-2.5 ml-4">
            Lavora con noi
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Language Icon */}
            <button 
                onClick={() => setIsLangOpen(!isLangOpen)} // Riutilizziamo lo stato per semplicità o creiamo modale mobile
                className="p-2 text-white/80"
            >
                <span className="text-xl">{currentLang.flag}</span>
            </button>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-50 p-2 text-white"
            >
                {isOpen ? <HiXMark className="w-8 h-8" /> : <HiBars3BottomRight className="w-8 h-8" />}
            </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 h-screen bg-dark-950 flex flex-col items-center justify-center space-y-8 md:hidden z-40"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold text-white hover:text-orange-500"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Language List */}
              <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
                 {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang)
                        setIsOpen(false)
                      }}
                      className={`flex flex-col items-center gap-1 p-2 rounded-lg ${
                        currentLang.code === lang.code ? 'bg-orange-500/10 text-orange-500' : 'text-gray-400'
                      }`}
                    >
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="text-[10px] font-bold uppercase">{lang.code}</span>
                    </button>
                 ))}
              </div>

              <Link href="/contatti" onClick={() => setIsOpen(false)} className="btn-primary mt-8">
                Richiedi Preventivo
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

// Configurazione Link
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Journal', href: '/blog' },
]

// Configurazione Lingue
const languages = [
  { code: 'IT', label: 'Italiano', flag: '🇮🇹' },
  { code: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'RO', label: 'Română', flag: '🇷🇴' },
  { code: 'ES', label: 'Español', flag: '🇪🇸' },
  { code: 'PT', label: 'Português', flag: '🇵🇹' },
  { code: 'DE', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'FR', label: 'Français', flag: '🇫🇷' },
]