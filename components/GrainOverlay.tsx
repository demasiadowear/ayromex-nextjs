export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden opacity-[0.035] mix-blend-overlay"
    >
      <svg
        className="absolute -top-[20%] -left-[20%] h-[140%] w-[140%] motion-safe:animate-grain"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="ay-grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 0 1
                    0 0 0 0.6 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#ay-grain-noise)" />
      </svg>
    </div>
  )
}
