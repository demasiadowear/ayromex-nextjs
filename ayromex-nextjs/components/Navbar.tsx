'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
        
        {/* LOGO AYROMEX (SVG) */}
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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-light-50/80 hover:text-orange-500 transition-colors uppercase tracking-wider"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contatti" className="btn-primary text-xs px-6 py-2.5">
            Lavora con noi
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-white"
        >
          {isOpen ? <HiXMark className="w-8 h-8" /> : <HiBars3BottomRight className="w-8 h-8" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute inset-0 h-screen bg-dark-950 flex flex-col items-center justify-center space-y-8 md:hidden"
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
              <Link href="/contatti" onClick={() => setIsOpen(false)} className="btn-primary mt-4">
                Richiedi Preventivo
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

// LINK AGGIORNATI: Journal al posto di Portfolio
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Journal', href: '/blog' }, 
]