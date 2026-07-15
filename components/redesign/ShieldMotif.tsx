/**
 * Motivo grafico AYROMEX — richiama lo scudo del badge Tech Provider.
 * Usato sia come filigrana grande tra le sezioni sia come icona (le
 * icone del bivio nascono dalla stessa silhouette: motivo coerente,
 * non icone prese a caso). Decorativo, colore ereditato.
 *
 * glyph: check (default) · chat (l'AI che risponde) · window (il sito)
 */
type Glyph = 'check' | 'chat' | 'window'

const GLYPHS: Record<Glyph, (solid: boolean) => React.ReactNode> = {
  check: (solid) => (
    <path
      d="M66 108 L90 132 L138 78"
      stroke="currentColor"
      strokeWidth={solid ? 12 : 7}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity={solid ? 0.9 : 1}
    />
  ),
  chat: (solid) => (
    <>
      <path
        d="M60 78 H140 A10 10 0 0 1 150 88 V126 A10 10 0 0 1 140 136 H96 L74 154 V136 H60 A10 10 0 0 1 50 126 V88 A10 10 0 0 1 60 78 Z"
        stroke="currentColor"
        strokeWidth={solid ? 8 : 6}
        strokeLinejoin="round"
        fill="none"
        opacity={solid ? 0.9 : 1}
      />
      <circle cx="78" cy="107" r="5" fill="currentColor" />
      <circle cx="100" cy="107" r="5" fill="currentColor" />
      <circle cx="122" cy="107" r="5" fill="currentColor" />
    </>
  ),
  window: (solid) => (
    <>
      <rect
        x="52"
        y="76"
        width="96"
        height="76"
        rx="10"
        stroke="currentColor"
        strokeWidth={solid ? 8 : 6}
        fill="none"
        opacity={solid ? 0.9 : 1}
      />
      <path
        d="M52 100 H148"
        stroke="currentColor"
        strokeWidth={solid ? 8 : 6}
        strokeLinecap="round"
      />
      <circle cx="68" cy="88" r="4" fill="currentColor" />
      <circle cx="84" cy="88" r="4" fill="currentColor" />
    </>
  ),
}

export default function ShieldMotif({
  className = '',
  variant = 'outline',
  glyph = 'check',
}: {
  className?: string
  variant?: 'outline' | 'solid'
  glyph?: Glyph
}) {
  const solid = variant === 'solid'
  return (
    <svg viewBox="0 0 200 220" fill="none" aria-hidden="true" className={className}>
      {/* Silhouette scudo: spalle arrotondate + punta in basso */}
      <path
        d="M100 8 C130 26 165 34 188 36 L188 112 C188 168 150 200 100 214 C50 200 12 168 12 112 L12 36 C35 34 70 26 100 8 Z"
        stroke={solid ? 'none' : 'currentColor'}
        strokeWidth={solid ? 0 : 6}
        fill={solid ? 'currentColor' : 'none'}
      />
      {GLYPHS[glyph](solid)}
    </svg>
  )
}
