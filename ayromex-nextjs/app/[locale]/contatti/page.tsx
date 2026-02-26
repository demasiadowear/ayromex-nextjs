'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import {
  HiArrowRight,
  HiOutlineCheckCircle,
  HiOutlinePhone,
  HiOutlineMapPin,
  HiOutlineEnvelope,
} from 'react-icons/hi2'
import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

function ContactForm() {
  const t = useTranslations('contatti')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center">
        <HiOutlineCheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{t('sent_title')}</h4>
        <p className="mt-2 text-sm text-slate-600 dark:text-white/60">{t('sent_sub')}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder={t('form_name')}
          className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/40 focus:outline-none focus:border-orange-500/50 transition"
        />
        <input
          type="email"
          name="email"
          required
          placeholder={t('form_email')}
          className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/40 focus:outline-none focus:border-orange-500/50 transition"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder={t('form_phone')}
          className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/40 focus:outline-none focus:border-orange-500/50 transition"
        />
        <select
          name="service"
          required
          className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-3 text-sm text-slate-700 dark:text-white/70 focus:outline-none focus:border-orange-500/50 transition appearance-none"
          defaultValue=""
        >
          <option value="" disabled>{t('form_service')}</option>
          <option value="branding">{t('form_opt_branding')}</option>
          <option value="social">{t('form_opt_social')}</option>
          <option value="stampa">{t('form_opt_stampa')}</option>
          <option value="pitch">{t('form_opt_pitch')}</option>
          <option value="altro">{t('form_opt_altro')}</option>
        </select>
      </div>
      <select
        name="budget"
        className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-3 text-sm text-slate-700 dark:text-white/70 focus:outline-none focus:border-orange-500/50 transition appearance-none"
        defaultValue=""
      >
        <option value="" disabled>{t('form_budget')}</option>
        <option value="500-1000">{t('form_budget_500')}</option>
        <option value="1000-2500">{t('form_budget_1000')}</option>
        <option value="2500-5000">{t('form_budget_2500')}</option>
        <option value="5000+">{t('form_budget_5000')}</option>
        <option value="non-so">{t('form_budget_no')}</option>
      </select>
      <textarea
        name="message"
        rows={5}
        required
        placeholder={t('form_message')}
        className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:text-white/40 focus:outline-none focus:border-orange-500/50 transition resize-none"
      />
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 text-sm font-semibold text-black hover:bg-orange-400 transition"
      >
        {t('form_submit')}
        <HiArrowRight className="w-4 h-4" />
      </button>
      <p className="text-xs text-slate-400 dark:text-white/40 text-center">
        {t('form_note')}
      </p>
    </form>
  )
}

export default function ContattiPage() {
  const t = useTranslations('contatti')
  const nextSteps = t.raw('next_steps') as string[]

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#07090d] text-slate-900 dark:text-white">
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-sm text-orange-500 dark:text-orange-400 font-semibold">{t('hero_label')}</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
            {t('hero_h1')}
          </h1>
          <p className="mt-4 text-slate-600 dark:text-white/60 max-w-xl text-lg">
            {t('hero_sub')}
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-8">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-6">
                <h3 className="font-semibold mb-4">{t('direct_h3')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <HiOutlinePhone className="w-5 h-5 text-orange-500 dark:text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <a href="tel:+390808407861" className="hover:text-orange-500 dark:text-orange-400 transition font-medium">
                        +39 080 840 7861
                      </a>
                      <div className="text-xs text-slate-400 dark:text-white/40 mt-1">{t('phone_hours')}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaWhatsapp className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <div>
                      <a
                        href="https://wa.me/390808407861?text=Ciao%20AYROMEX%2C%20vorrei%20un%20preventivo."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-400 transition font-medium"
                      >
                        {t('wa_label')}
                      </a>
                      <div className="text-xs text-slate-400 dark:text-white/40 mt-1">{t('wa_sub')}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiOutlineEnvelope className="w-5 h-5 text-orange-500 dark:text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <a href="mailto:info@ayromex.com" className="hover:text-orange-500 dark:text-orange-400 transition font-medium">
                        info@ayromex.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <HiOutlineMapPin className="w-5 h-5 text-orange-500 dark:text-orange-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">{t('city')}</span>
                      <div className="text-xs text-slate-400 dark:text-white/40 mt-1">{t('city_sub')}</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/[0.03] p-6">
                <h3 className="font-semibold mb-3">{t('next_h3')}</h3>
                <ol className="space-y-3 text-sm text-slate-600 dark:text-white/60">
                  {nextSteps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-orange-500 dark:text-orange-400 font-bold shrink-0">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
