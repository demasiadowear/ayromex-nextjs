'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-gray-800 pt-16 pb-8 text-sm">
      <div className="section-container">
        
        {/* GRIGLIA PRINCIPALE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. BRAND & MISSION */}
          <div>
            <div className="text-2xl font-bold mb-6 tracking-tight">
              <span className="text-orange-500">AYRO</span>
              <span className="text-light-50">MEX</span>
            </div>
            <p className="text-light-50/70 mb-6 leading-relaxed">
              Agenzia creativa e digitale. Uniamo design, social media e strategie concrete per far crescere PMI, attività locali e brand che vogliono fare sul serio.
            </p>
            <div className="flex items-center space-x-4">
              <SocialIcon href="https://www.facebook.com/profile.php?id=61586097166352" icon={<FaFacebook />} />
              <SocialIcon href="https://www.instagram.com/ayromex_srl/" icon={<FaInstagram />} />
              <SocialIcon href="https://wa.me/390808407861" icon={<FaWhatsapp />} />
            </div>
          </div>

          {/* 2. SERVIZI RAPIDI */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Cosa Facciamo</h4>
            <ul className="space-y-3 text-light-50/70">
              <li><Link href="/servizi" className="hover:text-orange-500 transition-colors">Identità Visiva & Logo</Link></li>
              <li><Link href="/servizi" className="hover:text-orange-500 transition-colors">Gestione Social Media</Link></li>
              <li><Link href="/servizi" className="hover:text-orange-500 transition-colors">Siti Web & E-commerce</Link></li>
              <li><Link href="/servizi" className="hover:text-orange-500 transition-colors">Materiale Stampa & Menu</Link></li>
              <li><Link href="/servizi" className="hover:text-orange-500 transition-colors">Marketing Locale</Link></li>
            </ul>
          </div>

          {/* 3. DATI AZIENDALI (Legale) */}
          <div className="lg:col-span-2 bg-dark-900/50 p-6 rounded-xl border border-gray-800">
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Dati Societari & Legali
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-light-50/60 leading-relaxed font-mono">
              <div>
                <strong className="text-light-50 block mb-1">AYROMEX S.R.L.</strong>
                <p>CUI: 52014564</p>
                <p>Reg. Com: J2025044424001</p>
                <p>EUID: ROONRC.J2025044424001</p>
                <p className="mt-2 text-green-500/80">Società abilitata VIES</p>
              </div>
              <div>
                <strong className="text-light-50 block mb-1">Sede Legale</strong>
                <p>București Sectorul 4, Aleea Izvorul Oltului, Nr. 6</p>
                <p>Bl. 29, Sc. B, Et. 2, Ap. 24</p>
                <p>Romania</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: CONTATTI & COPYRIGHT */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-light-50/50">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="flex items-center gap-2">
              <FaPhoneAlt /> +39 080 840 7861
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope /> info@ayromex.com
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> Bari (IT) / Bucharest (RO)
            </span>
          </div>
          
          <div className="text-center md:text-right">
             © {currentYear} Ayromex Digital Creations. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/5 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 text-light-50/70"
    >
      {icon}
    </a>
  )
}