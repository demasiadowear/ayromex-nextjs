import Image from 'next/image'

export function AyromexLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/logos/symbol/ayromex-symbol.svg"
        alt="AYROMEX"
        width={36}
        height={36}
        className="flex-shrink-0"
        unoptimized
      />
      <span className="font-black text-xl tracking-tight leading-none">
        <span className="text-[#FF4D00]">AYRO</span>
        <span className="text-[#0a0a0a] dark:text-[#f0ece4]">MEX</span>
      </span>
    </div>
  )
}
