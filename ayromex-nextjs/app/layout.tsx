import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { Inter, Space_Grotesk } from 'next/font/google'

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
        
        {/* Usiamo il componente separato che abbiamo appena creato */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}