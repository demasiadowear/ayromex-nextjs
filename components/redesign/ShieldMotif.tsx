/**
 * Motivo grafico AYROMEX — richiama lo scudo del badge Tech Provider.
 * Arco/scudo stilizzato usato come elemento ricorrente e discreto tra
 * le sezioni. Puramente decorativo (aria-hidden), colore ereditato.
 */
export default function ShieldMotif({
  className = '',
  variant = 'outline',
}: {
  className?: string
  variant?: 'outline' | 'solid'
}) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Silhouette scudo: spalle arrotondate + punta in basso */}
      <path
        d="M100 8 C130 26 165 34 188 36 L188 112 C188 168 150 200 100 214 C50 200 12 168 12 112 L12 36 C35 34 70 26 100 8 Z"
        stroke={variant === 'outline' ? 'currentColor' : 'none'}
        strokeWidth={variant === 'outline' ? 6 : 0}
        fill={variant === 'solid' ? 'currentColor' : 'none'}
      />
      {/* Spunta interna — eco del checkmark del badge */}
      <path
        d="M66 108 L90 132 L138 78"
        stroke="currentColor"
        strokeWidth={variant === 'solid' ? 12 : 7}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={variant === 'solid' ? 0.9 : 1}
      />
    </svg>
  )
}
