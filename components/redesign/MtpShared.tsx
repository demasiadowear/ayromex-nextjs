'use client'

import { useTranslations } from 'next-intl'
import {
  ShieldCheck,
  BadgeCheck,
  MessageSquareText,
  TrendingUp,
  Check,
  X,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

/**
 * Blocchi condivisi Meta Tech Provider (namespace i18n `mtp`):
 * griglia 4 benefici + tabella comparativa. Usati sia nella trust
 * section della home sia nella pagina /meta-tech-provider.
 */

const BENEFITS = [
  { key: 'noBan', Icon: ShieldCheck },
  { key: 'verified', Icon: BadgeCheck },
  { key: 'templates', Icon: MessageSquareText },
  { key: 'scale', Icon: TrendingUp },
] as const

export function MtpBenefitsGrid() {
  const t = useTranslations('mtp')
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
      {BENEFITS.map(({ key, Icon }) => (
        <Card
          key={key}
          className="border-ay-border bg-ay-surface shadow-none transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
        >
          <CardContent className="p-6 flex flex-col gap-3">
            <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-ay-accent-tint">
              <Icon className="w-5 h-5 text-ay-accent" aria-hidden="true" />
            </div>
            <h3 className="font-display font-extrabold text-ay-text text-[17px] leading-snug">
              {t(`benefits.${key}.title`)}
            </h3>
            <p className="font-body text-[14.5px] leading-relaxed text-ay-text-muted">
              {t(`benefits.${key}.description`)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const ROWS = ['ban', 'badge', 'templates', 'scale', 'support'] as const

export function MtpComparisonTable() {
  const t = useTranslations('mtp')
  return (
    <div className="overflow-x-auto rounded-2xl border border-ay-border bg-ay-surface">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="border-b border-ay-border bg-ay-bg/60">
            <th scope="col" className="text-left font-body font-semibold text-[13px] text-ay-text-muted px-5 py-4">
              {t('colCriterion')}
            </th>
            <th scope="col" className="text-left font-body font-semibold text-[13px] text-ay-accent px-5 py-4">
              {t('colOfficial')}
            </th>
            <th scope="col" className="text-left font-body font-semibold text-[13px] text-ay-text-muted px-5 py-4">
              {t('colUnofficial')}
            </th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row, i) => (
            <tr key={row} className={i < ROWS.length - 1 ? 'border-b border-ay-border' : ''}>
              <th scope="row" className="text-left font-body font-semibold text-[14.5px] text-ay-text px-5 py-4 align-top">
                {t(`rows.${row}.label`)}
              </th>
              <td className="px-5 py-4 align-top">
                <span className="flex items-start gap-2 font-body text-[14.5px] text-ay-text">
                  <Check className="w-4 h-4 text-ay-lime shrink-0 mt-0.5" aria-hidden="true" />
                  {t(`rows.${row}.official`)}
                </span>
              </td>
              <td className="px-5 py-4 align-top">
                <span className="flex items-start gap-2 font-body text-[14.5px] text-ay-text-muted">
                  <X className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                  {t(`rows.${row}.unofficial`)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
