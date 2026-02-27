'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const STORAGE_KEY = 'ayromex_cookie_consent'

export interface CookieConsent {
  analytics: boolean
  marketing: boolean
}

function readConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    // Legacy string format from previous banner version
    if (raw === 'all') return { analytics: true, marketing: true }
    if (raw === 'necessary') return { analytics: false, marketing: false }
    const parsed = JSON.parse(raw)
    if (typeof parsed === 'object' && parsed !== null) return parsed as CookieConsent
  } catch {}
  return null
}

export function writeConsent(consent: CookieConsent) {
  try {
    const value = JSON.stringify(consent)
    localStorage.setItem(STORAGE_KEY, value)
    document.cookie = `${STORAGE_KEY}=${encodeURIComponent(value)}; max-age=31536000; path=/; SameSite=Lax`
    window.dispatchEvent(new Event('ayromex_consent_updated'))
  } catch {}
}

export default function CookieBanner() {
  const t = useTranslations('cookie_banner')
  const [visible, setVisible] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const saved = readConsent()
    if (!saved) {
      setVisible(true)
    } else {
      setAnalytics(saved.analytics)
      setMarketing(saved.marketing)
    }
  }, [])

  const accept = (consent: CookieConsent) => {
    writeConsent(consent)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-3 md:p-5"
    >
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111318] shadow-2xl shadow-black/25 overflow-hidden">

        {/* Header */}
        <div className="px-5 pt-5 pb-3">
          <div className="font-display font-bold text-slate-900 dark:text-white text-base mb-1">
            🍪 {t('title')}
          </div>
          <p className="text-xs text-slate-500 dark:text-white/55 leading-relaxed">
            {t('text')}{' '}
            <Link href="/privacy" className="text-orange-500 hover:text-orange-400 underline underline-offset-2 transition">
              {t('learn_more')}
            </Link>.
          </p>
        </div>

        {/* Categories */}
        <div className="px-5 pb-4 space-y-2">

          {/* Necessari — always on */}
          <div className="flex items-start justify-between gap-3 rounded-xl border border-slate-100 dark:border-white/8 bg-slate-50 dark:bg-white/[0.03] px-4 py-3">
            <div className="min-w-0">
              <div className="text-xs font-semibold text-slate-800 dark:text-white/90">{t('necessary_label')}</div>
              <div className="text-xs text-slate-500 dark:text-white/45 mt-0.5">{t('necessary_desc')}</div>
            </div>
            <div className="shrink-0 mt-0.5">
              <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full">ON</span>
            </div>
          </div>

          {/* Statistici */}
          <label className="flex items-start justify-between gap-3 rounded-xl border border-slate-100 dark:border-white/8 bg-slate-50 dark:bg-white/[0.03] px-4 py-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5 transition">
            <div className="min-w-0">
              <div className="text-xs font-semibold text-slate-800 dark:text-white/90">{t('analytics_label')}</div>
              <div className="text-xs text-slate-500 dark:text-white/45 mt-0.5">{t('analytics_desc')}</div>
            </div>
            <div className="shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={analytics}
                onChange={e => setAnalytics(e.target.checked)}
                className="w-4 h-4 rounded accent-orange-500 cursor-pointer"
              />
            </div>
          </label>

          {/* Marketing */}
          <label className="flex items-start justify-between gap-3 rounded-xl border border-slate-100 dark:border-white/8 bg-slate-50 dark:bg-white/[0.03] px-4 py-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5 transition">
            <div className="min-w-0">
              <div className="text-xs font-semibold text-slate-800 dark:text-white/90">{t('marketing_label')}</div>
              <div className="text-xs text-slate-500 dark:text-white/45 mt-0.5">{t('marketing_desc')}</div>
            </div>
            <div className="shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={marketing}
                onChange={e => setMarketing(e.target.checked)}
                className="w-4 h-4 rounded accent-orange-500 cursor-pointer"
              />
            </div>
          </label>
        </div>

        {/* Buttons */}
        <div className="px-5 pb-5 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => accept({ analytics: false, marketing: false })}
            className="flex-1 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-600 dark:text-white/60 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition"
          >
            {t('reject_all')}
          </button>
          <button
            onClick={() => accept({ analytics, marketing })}
            className="flex-1 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-700 dark:text-white/80 border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/8 transition"
          >
            {t('save')}
          </button>
          <button
            onClick={() => accept({ analytics: true, marketing: true })}
            className="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold bg-orange-500 text-black hover:bg-orange-400 transition"
          >
            {t('accept_all')}
          </button>
        </div>
      </div>
    </div>
  )
}
