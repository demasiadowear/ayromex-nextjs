import { ImageResponse } from 'next/og'

/**
 * Open Graph image dedicata alla pagina /prodotti — i tre prodotti
 * dell'ecosistema in evidenza. Sovrascrive la brand image di root
 * per questo segmento. Stessa immagine per tutte le lingue (i nomi
 * prodotto non sono localizzati).
 */
export const alt = 'AYROMEX Products — AyroDesk24, AyroHub, AyroStay'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PRODUCTS = [
  { name: 'AyroDesk24', tag: 'AI receptionist WhatsApp · PMI' },
  { name: 'AyroHub', tag: 'Voice + WhatsApp AI · Gaming ADM' },
  { name: 'AyroStay', tag: 'Guest experience AI · Hospitality' },
]

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
          padding: '64px 96px',
          backgroundColor: '#0D0D0D',
          backgroundImage:
            'radial-gradient(ellipse at 15% 0%, rgba(255,106,0,0.20) 0%, rgba(13,13,13,0) 55%)',
          color: '#FAFAFA',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 24,
            marginBottom: 44,
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -2 }}>
            AYROMEX
          </div>
          <div
            style={{
              fontSize: 28,
              letterSpacing: 8,
              color: '#FF6A00',
              textTransform: 'uppercase',
            }}
          >
            Products
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 28,
                border: '2px solid #27272A',
                borderRadius: 24,
                backgroundColor: '#141414',
                padding: '26px 40px',
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 9999,
                  backgroundColor: '#FF6A00',
                }}
              />
              <div style={{ fontSize: 46, fontWeight: 800 }}>{p.name}</div>
              <div style={{ fontSize: 26, color: '#A1A1AA', marginLeft: 'auto' }}>
                {p.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
