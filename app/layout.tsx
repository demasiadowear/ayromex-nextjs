import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import AnimatedBackground from '@/components/AnimatedBackground'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata = {
  title: 'AYROMEX — AI Automation Agency',
  description: 'Costruiamo sistemi AI che lavorano per te. Automazioni reali. Prodotti vendibili. Zero lavoro manuale.',
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
