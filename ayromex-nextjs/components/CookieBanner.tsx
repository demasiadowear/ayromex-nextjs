'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { HiXMark } from 'react-icons/hi2'

const STORAGE_KEY = 'ayromex_cookie_consent'

export default function CookieBanner() {
  const t = useTranslations('cookie_banner')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) setVisible(true)
    } catch {
      // localStorage not available (SSR / privacy mode)
    }
  }, [])

  const save = (value: 'all' | 'necessary') => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
      // Also set a cookie for SSR awareness (1 year)
      document.cookie = `${STORAGE_KEY}=${value}; max-age=31536000; path=/; SameSite=Lax`
    } catch {
      // ignore
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#111318] shadow-2xl shadow-black/20 p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-600 dark:text-white/70 leading-relaxed">
              {t('text')}{' '}
              <Link
                href="/privacy"
                className="text-orange-500 hover:text-orange-400 transition underline underline-offset-2"
              >
                {t('learn_more')}
              </Link>
              .
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => save('necessary')}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-white/60 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition"
            >
              {t('reject')}
            </button>
            <button
              onClick={() => save('all')}
              className="px-4 py-2 rounded-xl text-sm font-semibold bg-orange-500 text-black hover:bg-orange-400 transition"
            >
              {t('accept')}
            </button>
            <button
              onClick={() => save('necessary')}
              className="p-2 rounded-xl text-slate-400 dark:text-white/30 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition"
              aria-label="Chiudi"
            >
              <HiXMark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
