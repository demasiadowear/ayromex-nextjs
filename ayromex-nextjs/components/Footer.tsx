'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Logo from '@/components/Logo'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi2'

const PHONE = '+39 080 840 7861'
const PHONE_E164 = '390808407861'
const FACEBOOK = 'https://www.facebook.com/profile.php?id=61586097166352'
const INSTAGRAM = 'https://www.instagram.com/ayromex_srl/'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')

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
              {t('cta_title')}
            </h3>
            <p className="mt-2 text-white/60 text-sm">{t('cta_sub')}</p>
          </div>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-black hover:bg-orange-400 transition shrink-0"
          >
            {t('cta_btn')}
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Logo height={30} className="mb-3" />
            <p className="text-sm text-white/60 leading-relaxed">
              {t('brand_desc')}
            </p>
          </div>

          {/* Pagine */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">{t('col_pages')}</div>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <Link className="hover:text-white transition" href="/servizi">
                  {tNav('servizi')}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/portfolio">
                  {tNav('portfolio')}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/chi-siamo">
                  {tNav('chiSiamo')}
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/contatti">
                  {tNav('contatti')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">{t('col_contacts')}</div>
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
                <a className="hover:text-white transition" href="mailto:info@ayromex.com">
                  info@ayromex.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="font-semibold text-white mb-3 text-sm">{t('col_social')}</div>
            <div className="flex items-center gap-3">
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4 text-white/70" />
              </a>
              <a
                href={INSTAGRAM}
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

        {/* Bottom — copyright + legal */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-2 text-xs text-white/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>&copy; {new Date().getFullYear()} {t('copyright')}</span>
              <span className="text-white/20">·</span>
              <span>{t('legal_vat')}</span>
              <span className="text-white/20">·</span>
              <span>{t('legal_reg')}</span>
            </div>
            <div className="flex gap-4 shrink-0">
              <Link className="hover:text-white transition" href="/privacy">
                {t('privacy')}
              </Link>
              <Link className="hover:text-white transition" href="/cookie">
                {t('cookie')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
