'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: any;
  }
}

export default function GoogleTranslate() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'it',
          includedLanguages: 'en,ro,es,pt,de,fr', // Le lingue che volevi
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
      setIsLoaded(true)
    }
  }, [])

  return (
    <div className="hidden"> {/* Nascondiamo il widget brutto di default */}
      <div id="google_translate_element"></div>
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  )
}