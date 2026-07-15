'use client'

import { useTranslations } from 'next-intl'
import { Check } from 'lucide-react'

/**
 * Mockup di una conversazione WhatsApp gestita dall'AI. Serve a far
 * capire in due secondi cosa fa AyroDesk24, senza spiegarlo a parole.
 * Statico e accessibile (è una lista di messaggi, non un'immagine).
 * Verde WhatsApp coerente col badge Tech Provider; l'arancio resta
 * sull'avatar, accento puntuale.
 */
const MESSAGES = [
  { key: 'm1', from: 'client' as const, time: '23:47' },
  { key: 'm2', from: 'ai' as const, time: '23:47' },
  { key: 'm3', from: 'client' as const, time: '23:48' },
  { key: 'm4', from: 'ai' as const, time: '23:48' },
]

export default function WhatsAppChatMock() {
  const t = useTranslations('homeProducts.chat')

  return (
    <figure className="m-0">
      <figcaption className="mb-3 font-body text-[13px] font-semibold text-ay-text-muted">
        {t('label')}
      </figcaption>

      <div className="overflow-hidden rounded-3xl border border-ay-border bg-ay-surface shadow-[0_20px_60px_-24px_rgba(28,27,22,0.28)]">
        {/* Header conversazione */}
        <div className="flex items-center gap-3 border-b border-ay-border bg-ay-bg/70 px-5 py-3.5">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ay-accent font-display text-[15px] font-extrabold text-white"
            aria-hidden="true"
          >
            A
          </span>
          <div className="min-w-0">
            <p className="font-body text-[14px] font-semibold leading-tight text-ay-text">
              AyroDesk24
            </p>
            <p className="flex items-center gap-1.5 font-body text-[11.5px] leading-tight text-ay-text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#25D366]" aria-hidden="true" />
              online
            </p>
          </div>
        </div>

        {/* Messaggi */}
        <ol className="flex list-none flex-col gap-2.5 px-4 py-5 [background:linear-gradient(180deg,#FBF8F3_0%,#F7F3EC_100%)]">
          {MESSAGES.map(({ key, from, time }) => {
            const isAi = from === 'ai'
            return (
              <li
                key={key}
                className={`flex ${isAi ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 ${
                    isAi
                      ? 'rounded-br-sm bg-[#DCF8C6]'
                      : 'rounded-bl-sm border border-ay-border bg-white'
                  }`}
                >
                  <p className="font-body text-[14.5px] leading-relaxed text-[#1C1B16]">
                    {t(key)}
                  </p>
                  <p className="mt-1 flex items-center justify-end gap-0.5 font-body text-[10.5px] text-[#6E6B60]">
                    {time}
                    {isAi && (
                      <>
                        <Check className="h-3 w-3 text-[#34B7F1]" aria-hidden="true" />
                        <Check className="-ml-2 h-3 w-3 text-[#34B7F1]" aria-hidden="true" />
                      </>
                    )}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        {/* Meta: il punto della dimostrazione */}
        <p className="border-t border-ay-border bg-ay-surface px-5 py-3.5 font-body text-[13px] font-semibold text-ay-text">
          {t('meta')}
        </p>
      </div>
    </figure>
  )
}
