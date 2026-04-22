import { Gugi, Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import AnimatedBackground from '@/components/AnimatedBackground'
import GrainOverlay from '@/components/GrainOverlay'

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

export const metadata = {
  title: 'AYROMEX — AI Products & SaaS per l\'Europa',
  description: 'Costruiamo prodotti AI che fatturano. Agenti AI, automazioni e SaaS verticali per il mercato europeo. Sistemi reali. Zero lavoro manuale.',
  openGraph: {
    title: 'AYROMEX — AI Products & SaaS per l\'Europa',
    description: 'Agenti AI, automazioni e SaaS verticali per il mercato europeo. AyroHub e AyroDesk24.',
    siteName: 'AYROMEX',
    type: 'website',
  },
  icons: {
    icon: '/brand/logos/symbol/ayromex-symbol.svg',
    apple: '/brand/logos/symbol/ayromex-symbol-1024.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="it"
      className={`dark ${gugi.variable} ${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="relative min-h-screen bg-ay-bg text-ay-text font-body antialiased">
        {/* Halftone layer */}
        <div className="halftone-bg" />

        {/* Animated background */}
        <AnimatedBackground />

        {/* Film grain overlay */}
        <GrainOverlay />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
