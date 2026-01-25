import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'

// Font ottimizzati (Google Fonts)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' })

// SEO CONFIGURATION (Awwwards + Google friendly)
export const metadata: Metadata = {
  title: {
    default: 'AYROMEX | Creative Digital Studio',
    template: '%s | AYROMEX'
  },
  description: 'Agenzia creativa specializzata in Branding, Siti Web e Social Media Marketing per aziende che vogliono dominare il mercato. Sedi a Bari e Bucarest.',
  keywords: ['Agenzia Creativa', 'Web Design Bari', 'Branding Studio', 'Social Media Marketing', 'Siti Web Next.js', 'Grafica Pubblicitaria'],
  authors: [{ name: 'AYROMEX Team' }],
  creator: 'AYROMEX S.R.L.',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://ayromex.com',
    siteName: 'AYROMEX Digital Creations',
    title: 'AYROMEX | Make It Real.',
    description: 'Trasformiamo aziende locali in brand internazionali. Design, Strategia, Codice.',
    images: [
      {
        url: '/og-image.jpg', // Ricordati di creare un'immagine 1200x630 e chiamarla così in public!
        width: 1200,
        height: 630,
        alt: 'Ayromex Creative Studio',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="bg-[#030303] text-white antialiased selection:bg-orange-500 selection:text-black overflow-x-hidden">
        {/* Texture Noise Cinematografica */}
        <div className="noise-overlay fixed inset-0 z-[9999] pointer-events-none opacity-[0.03]" />
        
        {/* Smooth Scroll Engine */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}