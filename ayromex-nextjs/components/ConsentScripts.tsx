'use client'

/**
 * ConsentScripts — carica GA4 e Meta Pixel SOLO dopo il consenso esplicito.
 *
 * Per attivare gli script, aggiungi le env vars su Vercel:
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID     = 1234567890
 *
 * Senza queste variabili gli script non vengono caricati (sicuro in dev/staging).
 */

import { useEffect, useState } from 'react'
import Script from 'next/script'
import type { CookieConsent } from './CookieBanner'

const STORAGE_KEY = 'ayromex_cookie_consent'

function readConsent(): CookieConsent {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { analytics: false, marketing: false }
    if (raw === 'all') return { analytics: true, marketing: true }
    if (raw === 'necessary') return { analytics: false, marketing: false }
    const parsed = JSON.parse(raw)
    if (typeof parsed === 'object' && parsed !== null) return parsed as CookieConsent
  } catch {}
  return { analytics: false, marketing: false }
}

export default function ConsentScripts() {
  const [consent, setConsent] = useState<CookieConsent>({ analytics: false, marketing: false })

  useEffect(() => {
    // Load current consent on mount
    setConsent(readConsent())

    // Listen for consent updates (when user changes preferences in banner)
    const onUpdate = () => setConsent(readConsent())
    window.addEventListener('ayromex_consent_updated', onUpdate)
    return () => window.removeEventListener('ayromex_consent_updated', onUpdate)
  }, [])

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID

  return (
    <>
      {/* ── Google Analytics 4 ── only if analytics consent + env var set */}
      {consent.analytics && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* ── Meta Pixel ── only if marketing consent + env var set */}
      {consent.marketing && pixelId && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){
                n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','${pixelId}');
            fbq('track','PageView');
          `}
        </Script>
      )}
    </>
  )
}
