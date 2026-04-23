export function AyromexLogo({ className = '' }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-lg bg-ay-bg/60 backdrop-blur-sm px-3 py-2 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logos/symbol/AYROLOGO.svg"
        alt="AYROMEX"
        className="h-[110px] w-[110px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px] flex-shrink-0"
        style={{ filter: 'drop-shadow(0 2px 12px rgba(0,0,0,0.85))' }}
      />
    </div>
  )
}
