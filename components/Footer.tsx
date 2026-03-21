'use client'

import { useTranslations, useLocale } from 'next-intl'
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { AyromexLogo } from './AyromexLogo'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] dark:bg-[#050505] border-t border-white/10 pt-16 pb-8 text-sm">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div>
            <div className="mb-6">
              <AyromexLogo />
            </div>
            <p className="text-white/60 mb-6 leading-relaxed text-sm">
              {t('description')}
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://www.facebook.com/profile.php?id=61586097166352" icon={<FaFacebook />} />
              <SocialIcon href="https://www.instagram.com/ayromex_srl/" icon={<FaInstagram />} />
              <SocialIcon href="https://www.linkedin.com/company/ayromex" icon={<FaLinkedin />} />
              <SocialIcon href="https://wa.me/390808407861" icon={<FaWhatsapp />} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase tracking-widest text-xs">{t('servicesTitle')}</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              {(['service1','service2','service3','service4','service5'] as const).map((k) => (
                <li key={k}>
                  <a href={`/${locale}/servizi`} className="hover:text-[#FF4D00] transition-colors">{t(k)}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-bold text-white mb-5 uppercase tracking-widest text-xs">{t('pagesTitle')}</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href={`/${locale}`} className="hover:text-[#FF4D00] transition-colors">Home</a></li>
              <li><a href={`/${locale}/chi-siamo`} className="hover:text-[#FF4D00] transition-colors">{t('chiSiamo')}</a></li>
              <li><a href={`/${locale}/servizi`} className="hover:text-[#FF4D00] transition-colors">{t('servicesTitle')}</a></li>
              <li><a href={`/${locale}/journal`} className="hover:text-[#FF4D00] transition-colors">{t('journal')}</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              {t('legalTitle')}
            </h4>
            <div className="space-y-3 text-xs text-white/50 font-mono leading-relaxed">
              <div>
                <strong className="text-white/80 block mb-1">AYROMEX S.R.L.</strong>
                <p>CUI: 52014564</p>
                <p>Reg. Com: J2025044424001</p>
                <p>EUID: ROONRC.J2025044424001</p>
                <p className="mt-1 text-green-400/70">Societate VIES</p>
              </div>
              <div>
                <strong className="text-white/80 block mb-1">{t('legalAddress')}</strong>
                <p>București Sectorul 4</p>
                <p>Aleea Izvorul Oltului, Nr. 6</p>
                <p>Bl. 29, Sc. B, Et. 2, Ap. 24 — Romania</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
            <span className="flex items-center gap-2 min-h-[44px]"><FaPhoneAlt /> +39 080 840 7861</span>
            <span className="flex items-center gap-2 min-h-[44px]"><FaEnvelope /> info@ayromex.com</span>
            <span className="flex items-center gap-2 min-h-[44px]"><FaMapMarkerAlt /> Bari (IT) / Bucharest (RO)</span>
          </div>
          <div className="text-center md:text-right">
            © {currentYear} {t('copyright')}
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-white/5 hover:bg-[#FF4D00] hover:text-white rounded-full flex items-center justify-center transition-all duration-200 text-white/60 min-h-[44px] min-w-[44px]"
    >
      {icon}
    </a>
  )
}
