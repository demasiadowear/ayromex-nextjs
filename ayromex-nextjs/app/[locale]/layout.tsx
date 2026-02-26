import '../globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import CustomCursor from '@/components/CustomCursor'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AYROMEX — Branding e Design per Attività Locali | Bari',
  description:
    "Creiamo identità visive complete per ristoranti, hotel e attività locali a Bari e in Puglia. Logo, social media, materiali stampati. Tutto coerente, tutto pronto all'uso.",
  keywords:
    'branding bari, logo design bari, social media design, grafica ristoranti, design hotel, agenzia creativa puglia, identità visiva',
  authors: [{ name: 'AYROMEX' }],
  openGraph: {
    title: 'AYROMEX — Branding e Design Premium a Bari',
    description:
      'Creiamo identità visive complete per ristoranti, hotel e attività locali a Bari e in Puglia.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'AYROMEX',
  },
  robots: { index: true, follow: true },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  if (!routing.locales.includes(locale as 'it' | 'en' | 'ro')) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-body antialiased">
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
