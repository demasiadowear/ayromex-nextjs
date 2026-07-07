import { ImageResponse } from 'next/og'

/**
 * Brand Open Graph image (site-wide default), generated at build
 * time via the metadata file convention. 1200x630, Ink background,
 * Brand Orange accent — closes the old TODO(og) in lib/seo.ts.
 * Route segments can override it with their own opengraph-image
 * (see app/[locale]/prodotti/).
 */
export const alt = 'AYROMEX — AI systems that automate business operations'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          backgroundColor: '#0D0D0D',
          backgroundImage:
            'radial-gradient(ellipse at 85% 10%, rgba(255,106,0,0.22) 0%, rgba(13,13,13,0) 55%)',
          color: '#FAFAFA',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              backgroundColor: '#FF6A00',
            }}
          />
          <div
            style={{
              fontSize: 30,
              letterSpacing: 10,
              color: '#A1A1AA',
              textTransform: 'uppercase',
            }}
          >
            AI Automation
          </div>
        </div>

        <div
          style={{
            fontSize: 148,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          AYROMEX
        </div>

        <div
          style={{
            marginTop: 36,
            fontSize: 38,
            lineHeight: 1.3,
            color: '#E5E5E5',
            maxWidth: 900,
          }}
        >
          Sistemi AI che automatizzano le operazioni aziendali.
        </div>

        <div
          style={{
            marginTop: 56,
            width: 220,
            height: 8,
            borderRadius: 9999,
            backgroundColor: '#FF6A00',
          }}
        />
      </div>
    ),
    size,
  )
}
