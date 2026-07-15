import type { Metadata, Viewport } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import { getLocale, getTranslations } from 'next-intl/server'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator'
import { SITE_NAME, SITE_URL } from '@/lib/seo'
import { cn } from '@/lib/utils'


// SISTEMA A DUE FONT — nessun terzo font, nessun fallback di sistema
// visibile. Syne (display, 600/700/800) per i titoli, DM Sans
// (400/500/600/700) per body, UI e le vecchie label ex-mono.
const syne = Syne({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
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
  // og:image / twitter:image arrivano dalla file convention
  // (app/opengraph-image.tsx) — non impostarle qui.
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  // referrer policy is conservative-friendly for cross-origin
  // analytics on Vercel without leaking full URLs.
  referrer: 'origin-when-cross-origin',
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

// Viewport (split from metadata per Next 16 convention). Theme
// color = paper caldo del redesign 2026, colorScheme light.
export const viewport: Viewport = {
  themeColor: '#FAFAF7',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
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
      className={cn(syne.variable, dmSans.variable, 'font-sans')}
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

        {/* Scroll progress bar */}
        <ScrollProgressIndicator />

        {/* Content */}
        <div className="relative z-10">{children}</div>

        {/* Vercel Analytics — cookieless, nessun consenso richiesto */}
        <Analytics />
      </body>
    </html>
  )
}
