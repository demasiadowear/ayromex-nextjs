import type { Metadata } from 'next'
import { Gugi, Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { getLocale, getTranslations } from 'next-intl/server'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import GrainOverlay from '@/components/GrainOverlay'
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator'
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/seo'

const gugi = Gugi({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gugi',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin', 'latin-ext'],
  weight: ['800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

// Root-level metadata. Per-locale title/description/alternates are
// generated in app/[locale]/layout.tsx and on each page via
// pageMetadata(). metadataBase MUST live here so relative URLs in
// nested generateMetadata calls resolve to the production domain.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AYROMEX — AI systems that automate business operations',
    template: '%s',
  },
  description:
    'AYROMEX builds vertical AI products, WhatsApp assistants, voice agents, dashboards and automation systems that help businesses reduce manual work and increase operational control.',
  keywords: [
    'AYROMEX',
    'AI automation',
    'business automation',
    'AI agents',
    'WhatsApp AI assistant',
    'voice AI agents',
    'AI infrastructure',
    'business operating system',
    'vertical SaaS',
    'AyroDesk24',
    'AyroHub',
    'AyroStay',
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: '/brand/logos/symbol/ayromex-symbol.svg',
    apple: '/brand/logos/symbol/ayromex-symbol-1024.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Resolve the active locale from the request context populated
  // by the next-intl middleware. This makes <html lang> match the
  // route (it/en/ro) instead of being hardcoded.
  const locale = await getLocale()
  const t = await getTranslations('a11y')

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`dark ${gugi.variable} ${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen bg-ay-bg text-ay-text font-body antialiased">
        {/* Skip-to-content link — visually hidden until focused.
            First focusable element on every page (WCAG 2.4.1). */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-ay-accent focus:px-5 focus:py-3 focus:font-display focus:font-bold focus:uppercase focus:tracking-widest focus:text-sm focus:text-ay-bg focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-ay-accent focus:ring-offset-2 focus:ring-offset-ay-bg"
        >
          {t('skipToContent')}
        </a>

        {/* Film grain overlay */}
        <GrainOverlay />

        {/* Scroll progress bar */}
        <ScrollProgressIndicator />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
