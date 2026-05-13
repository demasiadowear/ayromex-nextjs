'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * NetworkPulseBeams — AYROMEX orchestration network.
 *
 * Decorative SVG layer rendered inside AyromexAnimatedBackground.
 * Visualises the AYROMEX product thesis (AyroHub + AyroDesk24 +
 * AyroStay + core) as a sparse network of nodes connected by
 * thin baseline strokes, with a small number of animated "comet"
 * pulses traveling along selected paths.
 *
 * - Pure SVG. No canvas, no WebGL, no new deps.
 * - Framer Motion drives stroke-dashoffset for the comet pulses
 *   and opacity for the node pulses. Everything else is static.
 * - viewBox 1000x600 + preserveAspectRatio="xMidYMid slice" so it
 *   fills any viewport without horizontal scroll.
 * - Mobile (<md) hides 4 of the 7 nodes and 3 of the 5 beams via
 *   the .nb-desktop CSS class (md: prefix is not available inside
 *   SVG attributes, so we toggle via Tailwind on a wrapping <g>).
 * - prefers-reduced-motion short-circuits every animate prop.
 */
export default function NetworkPulseBeams() {
  const reduce = useReducedMotion() ?? false

  // Palette
  const ORANGE = '#FF6A00'
  const BLUE = '#00A6F4'
  const LIME = '#A8FF3E'
  const BASELINE = 'rgba(255,255,255,0.06)'

  // 7 anchor points across the 1000x600 viewBox. Coordinates picked
  // to keep beams clear of the centre hero text band (y ~220-380).
  const N = {
    a: { x: 120, y: 90 }, // top-left
    b: { x: 500, y: 60 }, // top-centre (above headline)
    c: { x: 880, y: 110 }, // top-right
    d: { x: 80, y: 320 }, // mid-left edge
    e: { x: 920, y: 300 }, // mid-right edge
    f: { x: 240, y: 520 }, // bottom-left
    g: { x: 760, y: 540 }, // bottom-right
  } as const

  // Beam definitions. Curved with quadratic Beziers for organic feel.
  const beams = [
    { id: 'b1', d: `M${N.a.x},${N.a.y} Q 300 200 ${N.b.x},${N.b.y}`, color: ORANGE, dur: 6, delay: 0, desktop: false },
    { id: 'b2', d: `M${N.b.x},${N.b.y} Q 700 200 ${N.c.x},${N.c.y}`, color: BLUE, dur: 7, delay: 1.4, desktop: false },
    { id: 'b3', d: `M${N.d.x},${N.d.y} Q 200 440 ${N.f.x},${N.f.y}`, color: ORANGE, dur: 8, delay: 3, desktop: true },
    { id: 'b4', d: `M${N.e.x},${N.e.y} Q 820 440 ${N.g.x},${N.g.y}`, color: ORANGE, dur: 7.5, delay: 2.2, desktop: true },
    { id: 'b5', d: `M${N.f.x},${N.f.y} Q 500 580 ${N.g.x},${N.g.y}`, color: BLUE, dur: 9, delay: 4, desktop: true },
  ]

  // Comet length and full path length proxy. We use a generous
  // dash array so the gap dominates and only a short bright comet
  // is ever visible along the stroke.
  const COMET = 110
  const GAP = 1400

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
      style={{ pointerEvents: 'none' }}
    >
      {/* Baseline strokes — always visible, very low opacity */}
      <g stroke={BASELINE} strokeWidth={1} fill="none">
        {beams.map((b) =>
          b.desktop ? (
            <path key={`base-${b.id}`} d={b.d} className="hidden md:block" />
          ) : (
            <path key={`base-${b.id}`} d={b.d} />
          ),
        )}
      </g>

      {/* Animated comet beams */}
      <g fill="none" strokeLinecap="round">
        {beams.map((b) => {
          const path = (
            <motion.path
              key={`beam-${b.id}`}
              d={b.d}
              stroke={b.color}
              strokeWidth={1.5}
              strokeDasharray={`${COMET} ${GAP}`}
              style={{
                filter: `drop-shadow(0 0 6px ${b.color}aa)`,
                opacity: reduce ? 0 : 0.9,
              }}
              initial={{ strokeDashoffset: GAP + COMET }}
              animate={
                reduce
                  ? undefined
                  : { strokeDashoffset: -(GAP + COMET) }
              }
              transition={{
                duration: b.dur,
                repeat: Infinity,
                ease: 'linear',
                delay: b.delay,
              }}
            />
          )
          return b.desktop ? (
            <g key={`wrap-${b.id}`} className="hidden md:block">
              {path}
            </g>
          ) : (
            path
          )
        })}
      </g>

      {/* Nodes — 3 always visible, 4 desktop-only */}
      <Node x={N.a.x} y={N.a.y} color={ORANGE} size={4} reduce={reduce} delay={0} />
      <Node x={N.b.x} y={N.b.y} color={ORANGE} size={5} reduce={reduce} delay={0.6} />
      <Node x={N.c.x} y={N.c.y} color={BLUE} size={4} reduce={reduce} delay={1.2} />

      <g className="hidden md:block">
        <Node x={N.d.x} y={N.d.y} color={ORANGE} size={3.5} reduce={reduce} delay={1.8} />
        <Node x={N.e.x} y={N.e.y} color={BLUE} size={3.5} reduce={reduce} delay={2.4} />
        <Node x={N.f.x} y={N.f.y} color={LIME} size={3} reduce={reduce} delay={3} />
        <Node x={N.g.x} y={N.g.y} color={ORANGE} size={3.5} reduce={reduce} delay={3.6} />
      </g>
    </svg>
  )
}

interface NodeProps {
  x: number
  y: number
  color: string
  size: number
  reduce: boolean
  delay: number
}

function Node({ x, y, color, size, reduce, delay }: NodeProps) {
  return (
    <g>
      {/* Outer halo */}
      <motion.circle
        cx={x}
        cy={y}
        r={size * 2.6}
        fill={color}
        style={{ opacity: 0.12, filter: `blur(4px)` }}
        animate={reduce ? undefined : { opacity: [0.08, 0.22, 0.08] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
      />
      {/* Solid core */}
      <motion.circle
        cx={x}
        cy={y}
        r={size}
        fill={color}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
      />
    </g>
  )
}
