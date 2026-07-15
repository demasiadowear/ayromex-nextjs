export function AyromexLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logos/symbol/AYROLOGO.webp"
        alt="AYROMEX"
        width={880}
        height={320}
        className="h-[140px] w-[140px] md:h-[180px] md:w-[180px] lg:h-[220px] lg:w-[220px] flex-shrink-0 object-contain"
      />
    </div>
  )
}
