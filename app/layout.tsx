import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import AnimatedBackground from '@/components/AnimatedBackground'
import { ThemeProvider } from '@/components/ThemeProvider'

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
    <html lang="it" className="dark">
      <body className="relative min-h-screen bg-[#f8f6f2] dark:bg-[#070707] text-[#0a0a0a] dark:text-[#f0ece4]">
        <ThemeProvider>
          {/* Halftone layer */}
          <div className="halftone-bg" />

          {/* Animated background */}
          <AnimatedBackground />

          {/* Custom cursor */}
          <CustomCursor />

          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
