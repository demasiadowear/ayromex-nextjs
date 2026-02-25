import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AYROMEX - Branding e Design per Attività Locali | Bari',
  description: 'Agenzia creativa specializzata in branding, logo design, social media e contenuti visivi. Per ristoranti, hotel, retail e professionisti. Bari e provincia.',
  keywords: 'branding bari, logo design, social media design, grafica ristoranti, design hotel, agenzia creativa puglia',
  authors: [{ name: 'AYROMEX' }],
  openGraph: {
    title: 'AYROMEX - Branding e Design Premium',
    description: 'Trasformiamo idee in brand memorabili',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
