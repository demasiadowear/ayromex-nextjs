import './globals.css'
import { ReactLenis } from '@/lib/lenis' // Creeremo questo file tra poco, aspetta!
import { Inter, Space_Grotesk } from 'next/font/google'

// Font: Inter per testi lunghi, Space Grotesk per titoli "Tech"
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata = {
  title: 'AYROMEX | Digital Creations',
  description: 'Agenzia creativa per brand che vogliono fare sul serio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#030303] text-white antialiased selection:bg-orange-500 selection:text-black">
        {/* Texture sovrapposta a tutto il sito */}
        <div className="noise-overlay" />
        
        {/* Smooth Scroll Wrapper */}
        <ClientSmoothScroll>
          {children}
        </ClientSmoothScroll>
      </body>
    </html>
  )
}

// Componente Client per lo scroll (definito qui per velocità)
'use client'
import { ReactLenis as Lenis } from '@studio-freight/react-lenis'

function ClientSmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <Lenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </Lenis>
  )
}