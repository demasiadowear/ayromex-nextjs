'use client'

import { FaWhatsapp } from 'react-icons/fa'

const PHONE_E164 = '390808407861'

export default function WhatsAppButton() {
  const waLink = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(
    'Ciao AYROMEX, vorrei informazioni su branding e grafica.'
  )}`

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
      aria-label="Scrivi su WhatsApp"
      style={{ background: '#25D366' }}
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  )
}
