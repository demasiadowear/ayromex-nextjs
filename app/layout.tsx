// app/layout.tsx
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="relative min-h-screen">
        {/* Layer Halftone fisso sullo sfondo */}
        <div className="halftone-bg" />
        
        {/* Cursore personalizzato */}
        <CustomCursor />

        {/* Contenuto del sito */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
