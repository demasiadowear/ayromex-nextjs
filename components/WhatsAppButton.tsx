'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const PHONE_E164 = '390808407861'

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
    'Ciao AYROMEX, vorrei informazioni sui vostri sistemi AI e automazioni.'
  )}`

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      aria-label="Scrivi su WhatsApp"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          '0 8px 24px rgba(37,211,102,0.25)',
          '0 8px 36px rgba(37,211,102,0.45)',
          '0 8px 24px rgba(37,211,102,0.25)',
        ],
      }}
      transition={{ duration: 2.4, repeat: Infinity }}
      style={{ background: '#25D366' }}
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </motion.a>
  )
}
