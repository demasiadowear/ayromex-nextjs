'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 0.8, // Abbassato da 1.2 a 0.8 (più veloce)
        smoothWheel: true,
        wheelMultiplier: 1.2, // Scrolla un po' più pixel per ogni tocco (meno faticoso)
        touchMultiplier: 2, // Reattivo su mobile
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}