'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const pathname = usePathname() // Per resettare quando cambi pagina

  useEffect(() => {
    // 1. Muovi il cursore
    const moveCursor = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    // 2. Rileva se sei sopra un link o un bottone
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Se l'elemento (o il suo genitore) è cliccabile...
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [pathname])

  return (
    <>
      {/* Cursore Desktop (Nascosto su Mobile) */}
      <motion.div
        className="custom-cursor hidden md:block"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isHovering ? 2.5 : 1, // Diventa grande sui link
          opacity: isHovering ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
    </>
  )
}