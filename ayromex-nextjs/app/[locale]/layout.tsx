import '../globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import CustomCursor from '@/components/CustomCursor'
import ThemeProvider from '@/components/ThemeProvider'
import CookieBanner from '@/components/CookieBanner'

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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: { url: '/favicon-180.png', sizes: '180x180', type: 'image/png' },
    shortcut: '/favicon-32.png',
  },
  openGraph: {
    title: 'AYROMEX — Branding e Design Premium a Bari',
    description:
      'Creiamo identità visive complete per ristoranti, hotel e attività locali a Bari e in Puglia.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'AYROMEX',
    images: [{ url: '/favicon-512.png', width: 512, height: 512 }],
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'AYROMEX S.R.L.',
    url: 'https://www.ayromex.com',
    logo: 'https://www.ayromex.com/logo.png',
    image: 'https://www.ayromex.com/favicon-512.png',
    description: 'Branding e design per attività locali a Bari e in Puglia.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bari',
      addressRegion: 'Puglia',
      addressCountry: 'IT',
    },
    telephone: '+390808407861',
    email: 'info@ayromex.com',
    sameAs: [
      'https://www.facebook.com/profile.php?id=61586097166352',
      'https://www.instagram.com/ayromex_srl/',
    ],
  }

  return (
    <html
      lang={locale}
      className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <CustomCursor />
            {children}
            <CookieBanner />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
