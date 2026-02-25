'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const PHONE_E164 = '390808407861' // +39 080 840 7861 (senza + e spazi)

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
    'Ciao AYROMEX, vorrei informazioni su branding e grafica.'
  )}`

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      aria-label="Scrivi su WhatsApp"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        boxShadow: [
          '0 10px 25px rgba(0,0,0,0.15)',
          '0 10px 35px rgba(0,0,0,0.22)',
          '0 10px 25px rgba(0,0,0,0.15)',
        ],
      }}
      transition={{ duration: 2.2, repeat: Infinity }}
      style={{ background: '#25D366' }}
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </motion.a>
  )
}
