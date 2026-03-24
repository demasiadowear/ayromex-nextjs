export function AyromexLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logos/symbol/AYROLOGO.svg"
        alt="AYROMEX"
        className="h-10 w-10 flex-shrink-0"
      />
      <span className="font-black text-xl tracking-tight text-[#0a0a0a] dark:text-white leading-none">
        AYROMEX
      </span>
    </div>
  )
}
