export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center font-display font-extrabold tracking-[-0.02em] ${className ?? ''}`}
    >
      <span className="text-orange-400">AYRO</span>
      <span className="text-white">MEX</span>
    </span>
  )
}
