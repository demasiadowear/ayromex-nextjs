interface MarqueeTickerProps {
  items: string[]
  separator?: string
  className?: string
  speed?: string
}

export default function MarqueeTicker({
  items,
  separator = '·',
  className = '',
  speed = '32s',
}: MarqueeTickerProps) {
  // duplicate items so the track loops seamlessly
  const doubled = [...items, ...items]

  return (
    <div
      className={`overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="marquee-track"
        style={{ animationDuration: speed }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 whitespace-nowrap"
          >
            <span>{item}</span>
            <span className="text-orange-500 text-xs">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
