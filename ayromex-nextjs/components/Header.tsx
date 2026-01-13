'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi2'

const services = [
  { label: 'Branding & Identità Visiva', href: '/servizi#branding' },
  { label: 'Social & Content Design', href: '/servizi#social' },
  { label: 'Stampa & Materiali', href: '/servizi#stampa' },
  { label: 'Presentazioni & Pitch', href: '/servizi#pitch' },
  { label: 'Coming Soon: Automazioni', href: '/servizi#automazioni' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
      <div className="mx-auto max-w-[1200px] px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-lg tracking-wide flex items-center gap-2">
          <span className="font-bold">AYROMEX</span>
          <span className="text-xs px-2 py-1 rounded-full bg-black/5 text-black/70">
            Creative Studio
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-black/70">
          <Link className="hover:text-black transition" href="/chi-siamo">Chi siamo</Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-black transition"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              Servizi <HiChevronDown className="w-4 h-4" />
            </button>

            {open && (
              <div className="absolute left-0 mt-3 w-[320px] rounded-2xl border border-black/10 bg-white shadow-xl p-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-3 rounded-xl hover:bg-black/5 transition text-black/80"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className="hover:text-black transition" href="/portfolio">Portfolio</Link>
          <Link className="hover:text-black transition" href="/blog">Blog</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+390808407861"
            className="hidden sm:inline-flex text-sm text-black/70 hover:text-black transition"
            aria-label="Chiama AYROMEX"
          >
            +39 080 840 7861
          </a>

          <Link
            href="/contatti"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            Contattaci
          </Link>
        </div>
      </div>
    </header>
  )
}
