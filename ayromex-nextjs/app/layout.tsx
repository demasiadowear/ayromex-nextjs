import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-ay-bg text-ay-black antialiased overflow-x-hidden">
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-8 md:px-12 backdrop-blur-sm">
          <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-ay-orange transition-colors">
            AYROMEX<span className="text-ay-orange">.</span>
          </Link>
          <div className="space-x-8 uppercase text-xs tracking-[0.2em] font-bold">
            <Link href="/servizi" className="hover:text-ay-orange transition-colors">Servizi</Link>
            <Link href="/about" className="hover:text-ay-orange transition-colors">About</Link>
            <Link href="/contatti" className="bg-ay-black text-white px-5 py-2 hover:bg-ay-orange transition-all">Start</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}
