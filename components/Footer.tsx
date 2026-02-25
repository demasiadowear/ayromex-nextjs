import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const PHONE = '+39 080 840 7861'
const PHONE_E164 = '390808407861'

// TODO: sostituisci con i link ufficiali AYROMEX
const SOCIAL = {
  facebook: '#',
  instagram: '#',
}

export default function Footer() {
  const waLink = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
    'Ciao AYROMEX, vorrei un preventivo.'
  )}`

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-xl mb-3">AYROMEX</div>
            <p className="text-sm text-black/70 leading-relaxed">
              Start-up creativa specializzata in <b>branding</b>, <b>grafica</b> e <b>social design</b>.
              <br />
              <span className="inline-block mt-2 text-orange-600 font-semibold">
                Automazioni: coming soon.
              </span>
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="font-semibold mb-3">Sezioni</div>
            <ul className="space-y-2 text-sm text-black/70">
              <li><Link className="hover:text-black" href="/servizi">Servizi</Link></li>
              <li><Link className="hover:text-black" href="/portfolio">Portfolio</Link></li>
              <li><Link className="hover:text-black" href="/chi-siamo">Chi siamo</Link></li>
              <li><Link className="hover:text-black" href="/contatti">Contatti</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <div className="font-semibold mb-3">Contatti</div>
            <ul className="space-y-2 text-sm text-black/70">
              <li>
                <a className="hover:text-black" href="tel:+390808407861">{PHONE}</a>
                <div className="text-xs text-black/50 mt-1">Numero voce AYROMEX</div>
              </li>
              <li>
                <a className="hover:text-black" href={waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {PHONE}
                </a>
              </li>
              <li className="text-black/60">Bari (IT) • Operiamo anche da remoto</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="font-semibold mb-3">Social</div>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>

              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-black/50 mt-3">
              Inserisci i link reali in <code>components/Footer.tsx</code> (SOCIAL).
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-black/50">
          <div>© {new Date().getFullYear()} AYROMEX — Creative Studio</div>
          <div className="flex gap-4">
            <Link className="hover:text-black" href="/privacy">Privacy</Link>
            <Link className="hover:text-black" href="/cookie">Cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
