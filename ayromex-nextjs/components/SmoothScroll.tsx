'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        duration: 1.2, // Era troppo alto. 1.2 è il giusto compromesso "Apple style"
        smoothWheel: true,
        wheelMultiplier: 1, // Risposta 1:1 col dito/mouse
        touchMultiplier: 2, // Più reattivo su mobile
      }}
    >
      {children}
    </ReactLenis>
  )
}