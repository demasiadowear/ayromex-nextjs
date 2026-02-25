import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'

const PHONE = '+39 080 840 7861'
const PHONE_E164 = '390808407861'

export default function Footer() {
  const waLink = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
    'Ciao AYROMEX, vorrei un preventivo.'
  )}`

  return (
    <footer className="border-t border-white/10 bg-[#0a0a0e]">
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-8">
        {/* Top CTA strip */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">
          <div>
            <h3 className="text-xl font-display font-semibold text-white">
              Pronto a dare un volto al tuo brand?
            </h3>
            <p className="mt-2 text-white/60 text-sm">
              Raccontaci il tuo progetto. Risposta entro 24 ore.
            </p>
          </div>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black hover:bg-orange-400 transition shrink-0"
          >
            Richiedi preventivo
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-xl text-white mb-3">
              <span className="text-orange-500">AYRO</span>MEX
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Agenzia creativa specializzata in branding, grafica e social
              design per attivita locali a Bari e in Puglia.
            </p>
          </div>

          {/* Link */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">Pagine</div>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link className="hover:text-white transition" href="/servizi">
                  Servizi
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/chi-siamo">
                  Chi siamo
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/contatti">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">
              Contatti
            </div>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a className="hover:text-white transition" href={`tel:${PHONE}`}>
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition"
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition"
                  href="mailto:info@ayromex.com"
                >
                  info@ayromex.com
                </a>
              </li>
              <li className="text-white/40">Bari, Italia</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">Social</div>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-white/70" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-white/70" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <div>
            &copy; {new Date().getFullYear()} AYROMEX Creative Studio — P.IVA:
            00000000000
          </div>
          <div className="flex gap-4">
            <Link className="hover:text-white transition" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-white transition" href="/cookie">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
