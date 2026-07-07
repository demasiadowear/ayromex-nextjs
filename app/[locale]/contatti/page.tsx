import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi'
import ContactForm from '@/components/ContactForm'
import {
  CONTACT_EMAILS,
  WHATSAPP_TEL,
  whatsappLink,
} from '@/lib/contact'
import { pageMetadata, type Locale } from '@/lib/seo'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return pageMetadata('contatti', locale as Locale)
}

/**
 * /contatti — pagina contatti dedicata (sostituisce le àncore
 * #contatti in navbar/footer). WhatsApp è il canale primario,
 * come da funnel del sito; il form apre WhatsApp precompilato.
 * I dati societari sono gli stessi di privacy/terms (statici,
 * identici per tutte le lingue).
 */
export default async function ContattiPage() {
  const t = await getTranslations('contattiPage')

  return (
    <main id="main" className="overflow-x-hidden pt-20">
      {/* HERO */}
      <section className="py-24 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-ay-accent text-xs font-bold uppercase tracking-widest">
            {t('eyebrow')}
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white mt-4 mb-6 max-w-3xl leading-tight">
            {t('title1')}
            <br />
            <span className="text-ay-accent">{t('title2')}</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl">{t('desc')}</p>
        </div>
      </section>

      {/* CANALI */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp — primario */}
          <a
            href={whatsappLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-ay-accent/40 bg-ay-accent/10 p-8 flex flex-col gap-4 transition-all duration-300 hover:border-ay-accent/70 hover:bg-ay-accent/15"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ay-accent/15 border border-ay-accent/30">
              <FaWhatsapp className="w-6 h-6 text-ay-accent" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-ay-text">
              {t('whatsappTitle')}
            </h2>
            <p className="font-body text-[15px] text-ay-text-muted leading-relaxed">
              {t('whatsappDesc')}
            </p>
            <p className="font-mono text-[13px] text-ay-text">{WHATSAPP_TEL}</p>
            <span className="inline-flex items-center gap-1.5 font-body text-[14px] font-semibold text-ay-accent group-hover:underline underline-offset-4">
              {t('whatsappCta')} <FiExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${CONTACT_EMAILS.general}`}
            className="group rounded-2xl border border-ay-border bg-ay-surface p-8 flex flex-col gap-4 transition-all duration-300 hover:border-ay-accent/40"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-ay-surface border border-ay-border">
              <FiMail className="w-6 h-6 text-ay-text-muted" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-ay-text">
              {t('emailTitle')}
            </h2>
            <p className="font-body text-[15px] text-ay-text-muted leading-relaxed">
              {t('emailDesc')}
            </p>
            <p className="font-mono text-[13px] text-ay-text">
              {CONTACT_EMAILS.general}
            </p>
          </a>
        </div>
      </section>

      {/* FORM */}
      <section className="pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto rounded-2xl border border-ay-border bg-ay-surface/60 p-8 md:p-10">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-ay-text mb-2">
            {t('formTitle')}
          </h2>
          <p className="font-body text-[14px] text-ay-text-muted mb-8">
            {t('responseNote')}
          </p>
          <ContactForm />
        </div>
      </section>

      {/* DATI SOCIETARI */}
      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto rounded-2xl border border-ay-border bg-ay-surface p-8 flex items-start gap-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-ay-surface border border-ay-border shrink-0">
            <FiMapPin className="w-5 h-5 text-ay-text-muted" />
          </div>
          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-ay-accent mb-3">
              {t('legalTitle')}
            </h2>
            <p className="font-display font-bold text-ay-text mb-2">
              AYROMEX S.R.L.
            </p>
            <p className="font-body text-[13px] text-ay-text-muted leading-relaxed">
              CUI: RO52014564 · Reg. Com.: J2025044424001
              <br />
              EUID: ROONRC.J2025044424001
              <br />
              Aleea Izvorul Oltului, Nr. 6, Bl. 29, Sc. B, Et. 2, Ap. 24
              <br />
              București Sectorul 4 — România
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
