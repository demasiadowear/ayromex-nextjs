export function AyromexLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logos/symbol/AYROLOGO.svg"
        alt="AYROMEX"
        className="h-10 w-10 flex-shrink-0"
      />
    </div>
  )
}
