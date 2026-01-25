'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-950 border-t border-gray-700/30 py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-orange-500">AYRO</span>
              <span className="text-light-50">MEX</span>
            </div>
            <p className="text-light-50/70 text-sm mb-4 leading-relaxed">
              Start-up creativa specializzata in <strong>branding</strong>, <strong>grafica</strong> e <strong>social design</strong>.
            </p>
            <p className="text-light-50/60 text-xs">
              Automazioni: coming soon.
            </p>
          </div>
          
          {/* Col 2: Sezioni */}
          <div>
            <h4 className="font-semibold text-light-50 mb-4">Sezioni</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/servizi" 
                  className="text-sm text-light-50/70 hover:text-orange-500 transition-colors"
                >
                  Servizi
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="text-sm text-light-50/70 hover:text-orange-500 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/chi-siamo" 
                  className="text-sm text-light-50/70 hover:text-orange-500 transition-colors"
                >
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-sm text-light-50/70 hover:text-orange-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contatti" 
                  className="text-sm text-light-50/70 hover:text-orange-500 transition-colors"
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Col 3: Contatti */}
          <div>
            <h4 className="font-semibold text-light-50 mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+390808407861" 
                  className="text-sm text-light-50/70 hover:text-orange-500 transition-colors flex items-center"
                >
                  <span className="mr-2">📞</span>
                  +39 080 840 7861
                </a>
                <p className="text-xs text-light-50/50 mt-1 ml-6">Numero voce AYROMEX</p>
              </li>
              <li>
                <a 
                  href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20un%20preventivo." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-light-50/70 hover:text-orange-500 transition-colors flex items-center"
                >
                  <FaWhatsapp className="mr-2 text-green-500" />
                  WhatsApp: +39 080 840 7861
                </a>
              </li>
              <li className="text-sm text-light-50/70 pt-2">
                <span className="mr-2">📍</span>
                Bari (IT)
                <p className="text-xs text-light-50/50 mt-1 ml-6">Operiamo anche da remoto</p>
              </li>
            </ul>
          </div>
          
          {/* Col 4: Social */}
          <div>
            <h4 className="font-semibold text-light-50 mb-4">Social</h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61586097166352"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500/10 hover:bg-orange-500/20 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook AYROMEX"
              >
                <FaFacebook className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </a>
              
              <a
                href="https://www.instagram.com/ayromex_srl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-orange-500/10 hover:bg-orange-500/20 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram AYROMEX"
              >
                <FaInstagram className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
              </a>
            </div>
            
            <p className="text-xs text-light-50/50 mt-6 leading-relaxed">
              Seguici per aggiornamenti, progetti e insights sul branding.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700/30 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-light-50/60">
          <p>
            © {currentYear} AYROMEX — Digital Creations
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/privacy" 
              className="hover:text-orange-500 transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/cookie" 
              className="hover:text-orange-500 transition-colors"
            >
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
