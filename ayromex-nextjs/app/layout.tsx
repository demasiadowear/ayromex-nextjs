import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor' // Importiamo il nuovo file
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'AYROMEX | Creative Digital Studio',
    template: '%s | AYROMEX'
  },
  description: 'Agenzia creativa specializzata in Branding, Siti Web e Social Media Marketing.',
  keywords: ['Agenzia Creativa', 'Web Design Bari', 'Branding Studio'],
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://ayromex.com',
    siteName: 'AYROMEX',
    title: 'AYROMEX | Make It Real.',
    description: 'Design, Strategia, Codice.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#030303] text-white antialiased selection:bg-orange-500 selection:text-black overflow-x-hidden">
        {/* Texture Sfondo */}
        <div className="noise-overlay fixed inset-0 z-[9999] pointer-events-none opacity-[0.03]" />
        
        {/* Cursore Custom Globale */}
        <CustomCursor />
        
        {/* Smooth Scroll */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}