'use client'

import { useTranslations, useLocale } from 'next-intl'
import { FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa'
import { IT, GB, RO } from 'country-flag-icons/react/3x2'
import { useRouter, usePathname } from '@/i18n/navigation'
import { AyromexLogo } from './AyromexLogo'
import { PRODUCTS } from '@/lib/products'

const LANGUAGES = [
  { code: 'it', label: 'Italiano', Flag: IT },
  { code: 'en', label: 'English', Flag: GB },
  { code: 'ro', label: 'Română', Flag: RO },
] as const

const SOCIAL_LINKS = [
  { href: 'https://www.instagram.com/ayromex_srl/', Icon: FaInstagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=61586097166352', Icon: FaFacebook, label: 'Facebook' },
  { href: 'https://share.google/Ed5CLO4Nn3BgQZHW4', Icon: FaGoogle, label: 'Google' },
]

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onLangChange = (code: string) => {
    router.replace(pathname, { locale: code })
  }

  return (
    <footer
      className="relative mt-24 pt-20 pb-10 px-6"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.6) 20%, rgba(10,10,10,0.92) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <AyromexLogo />
            <p className="font-body text-[14px] text-ay-text-muted leading-relaxed max-w-[260px]">
              {t('brandTagline')}
            </p>
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-ay-border text-ay-text-muted hover:border-ay-accent hover:text-ay-accent transition-colors duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-ay-accent">
              {t('productsTitle')}
            </h4>
            <ul className="flex flex-col gap-2 font-body text-[14px]">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ay-text-muted hover:text-ay-accent transition-colors"
                  >
                    {p.displayName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-ay-accent">
              {t('companyTitle')}
            </h4>
            <ul className="flex flex-col gap-2 font-body text-[14px]">
              <li>
                <a
                  href={`/${locale}/chi-siamo`}
                  className="text-ay-text-muted hover:text-ay-accent transition-colors"
                >
                  {t('companyAbout')}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/servizi`}
                  className="text-ay-text-muted hover:text-ay-accent transition-colors"
                >
                  {t('companyServices')}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/journal`}
                  className="text-ay-text-muted hover:text-ay-accent transition-colors"
                >
                  {t('companyJournal')}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-ay-accent">
              {t('legalTitle')}
            </h4>
            <ul className="flex flex-col gap-2 font-body text-[14px]">
              <li>
                <a
                  href={`/${locale}/privacy`}
                  className="text-ay-text-muted hover:text-ay-accent transition-colors"
                >
                  {t('legalPrivacy')}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/privacy`}
                  className="text-ay-text-muted hover:text-ay-accent transition-colors"
                >
                  {t('legalCookie')}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/terms`}
                  className="text-ay-text-muted hover:text-ay-accent transition-colors"
                >
                  {t('legalTerms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-16 pt-8 border-t border-ay-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="font-mono text-[12px] text-ay-text-muted">
            {t('copyright')}
          </span>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ay-text-muted">
              {t('languageLabel')}
            </span>
            <div className="flex items-center gap-2">
              {LANGUAGES.map(({ code, label, Flag }) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => onLangChange(code)}
                  aria-label={label}
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-body transition-all duration-200 ${
                    locale === code
                      ? 'border-ay-accent text-ay-accent'
                      : 'border-ay-border text-ay-text-muted hover:border-ay-accent/50 hover:text-ay-text'
                  }`}
                >
                  <span className="block w-4 h-3 overflow-hidden rounded-sm">
                    <Flag />
                  </span>
                  <span className="uppercase">{code}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
