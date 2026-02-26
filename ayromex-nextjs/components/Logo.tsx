import Image from 'next/image'

type LogoProps = {
  height?: number
  className?: string
}

export default function Logo({ height = 28, className }: LogoProps) {
  const width = Math.round(height * (1735 / 755))
  return (
    <Image
      src="/logo.png"
      alt="AYROMEX"
      width={width}
      height={height}
      priority
      // invert in light mode (white→dark), keep white in dark mode
      className={`invert dark:invert-0 ${className ?? ''}`}
      style={{ objectFit: 'contain' }}
    />
  )
}
