export function AyromexLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Orange circle with A */}
      <div className="w-9 h-9 rounded-full bg-[#FF4D00] flex items-center justify-center flex-shrink-0 shadow-[0_0_16px_rgba(255,77,0,0.4)]">
        <span className="text-white font-black text-lg leading-none select-none">A</span>
      </div>
      {/* Wordmark */}
      <span className="font-black text-xl tracking-tight leading-none">
        <span className="text-[#FF4D00]">AYRO</span>
        <span className="text-[#0a0a0a] dark:text-[#f0ece4]">MEX</span>
      </span>
    </div>
  )
}
