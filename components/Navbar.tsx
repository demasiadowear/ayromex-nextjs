'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Servizi', href: '/servizi' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Chi Siamo', href: '/chi-siamo' },
  { name: 'Contatti', href: '/contatti' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: 'rgba(11, 15, 20, 0)' }}
        animate={{
          backgroundColor: isScrolled ? 'rgba(11, 15, 20, 0.95)' : 'rgba(11, 15, 20, 0)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-700/30"
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-bold"
                >
                  <span className="text-orange-500">AYRO</span>
                  <span className="text-light-50">MEX</span>
                </motion.div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-light-50/80 hover:text-orange-500 transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              ))}
              
              <Link href="/contatti" className="btn-primary">
                Richiedi Preventivo
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-light-50 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiXMark className="w-6 h-6" />
              ) : (
                <HiBars3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? '0%' : '100%',
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 lg:hidden bg-dark-950/98 backdrop-blur-xl"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-bold text-light-50 hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              y: isMobileMenuOpen ? 0 : 20,
            }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/contatti"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-lg"
            >
              Richiedi Preventivo
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
