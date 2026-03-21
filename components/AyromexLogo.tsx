export function AyromexLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logos/primary/ayromex-logo-horizontal-clean.png"
        alt="AYROMEX Digital Creations"
        className="h-8 w-auto flex-shrink-0"
      />
    </div>
  )
}
