'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * AyromexCoreVisual — hero orchestration frame.
 *
 * Children-based wrapper that turns the existing Ayro chat card
 * into the literal AYROMEX CORE of the product ecosystem.
 * Renders three layers around the children:
 *
 *   1. A small "AYROMEX CORE / live" chip anchored at the top edge
 *      of the children (mobile + desktop).
 *   2. An orbital infrastructure layer (lg+ only): three glass
 *      product modules (AyroDesk24, AyroHub, AyroStay) flanking the
 *      chat card with short architectural connection lines + an
 *      occasional orange comet pulse.
 *   3. A compact mobile fallback (<lg): product pill row + capability
 *      pill row stacked below the children. No orbital geometry on
 *      narrow viewports.
 *
 * Constraints:
 * - No new dependencies. Pure Tailwind + framer-motion + SVG.
 * - Children width controlled by parent — wrapper inherits its max
 *   width from the children, orbital extends laterally only with
 *   absolute negative offsets capped at 180px each side so the lg
 *   layout always fits inside 1024px viewports.
 * - prefers-reduced-motion short-circuits every motion animate prop.
 * - Decorative only. No role, no interactive elements outside the
 *   children themselves.
 */
interface AyromexCoreVisualProps {
  children: ReactNode
}

const ORANGE = '#FF6A00'
const BLUE = '#00A6F4'
const BASELINE = 'rgba(255,255,255,0.08)'

const MODULES = [
  { id: 'desk24', name: 'AyroDesk24', role: 'WhatsApp AI · PMI', caps: ['WhatsApp AI', 'CRM Sync'] },
  { id: 'hub',    name: 'AyroHub',    role: 'Voice · ADM',       caps: ['Voice Agents', 'Automation'] },
  { id: 'stay',   name: 'AyroStay',   role: 'Hospitality OS',    caps: ['Dashboards'] },
] as const

export default function AyromexCoreVisual({ children }: AyromexCoreVisualProps) {
  const reduce = useReducedMotion() ?? false

  return (
    <div className="relative w-full max-w-[620px] mx-auto flex flex-col">
      {/* CORE chip — small notch above the chat card. Visible on
          every viewport; on mobile it sits directly above, on
          desktop it visually anchors the top of the orchestration
          frame. */}
      <CoreChip reduce={reduce} />

      {/* Orbital layer — lg only. Glass modules + connection lines
          extend laterally past the wrapper bounds. Hero <section>
          uses overflow-hidden so anything that runs past the
          viewport is clipped cleanly. */}
      <OrbitalLayer reduce={reduce} />

      {/* The children (chat card + tooltip) — preserved exactly as
          received. Wrapped in a relative div so the CORE chip and
          orbital lines can render around them without affecting
          their layout. The orange/blue halo of the previous
          AyromexGlowingShadow is folded into this layer below. */}
      <div className="relative">
        <Halo reduce={reduce} />
        <div className="relative z-10">{children}</div>
      </div>

      {/* Mobile fallback — compact product + capability pill rows
          below the chat card. Hidden at lg+ because the orbital
          layer carries the same information visually. */}
      <MobileEcosystem />
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────
   CORE chip
   ────────────────────────────────────────────────────────────── */

function CoreChip({ reduce }: { reduce: boolean }) {
  return (
    <div className="flex justify-center mb-2 md:mb-3 lg:mb-0 lg:absolute lg:-top-3 lg:left-1/2 lg:-translate-x-1/2 lg:z-30">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ay-border bg-ay-bg/80 backdrop-blur-sm">
        <motion.span
          aria-hidden="true"
          className="inline-block w-1.5 h-1.5 rounded-full bg-ay-lime"
          style={{ boxShadow: '0 0 8px rgba(168,255,62,0.7)' }}
          animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ay-text-muted">
          AYROMEX CORE
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ay-lime">live</span>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────
   Halo — folded-in glow (replaces AyromexGlowingShadow usage)
   ────────────────────────────────────────────────────────────── */

function Halo({ reduce }: { reduce: boolean }) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-22%] rounded-[28px] pointer-events-none"
        style={{
          background: `radial-gradient(closest-side, rgba(255,106,0,0.30), rgba(255,106,0,0.10) 45%, transparent 75%)`,
          filter: 'blur(58px)',
          zIndex: 0,
        }}
        animate={reduce ? undefined : { opacity: [0.78, 1, 0.78] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-16%] rounded-[28px] pointer-events-none"
        style={{
          background: `radial-gradient(closest-side at 30% 70%, rgba(0,166,244,0.14), transparent 70%)`,
          filter: 'blur(50px)',
          zIndex: 0,
        }}
        animate={reduce ? undefined : { opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
    </>
  )
}

/* ────────────────────────────────────────────────────────────────
   Orbital layer (lg+ only)
   ────────────────────────────────────────────────────────────── */

function OrbitalLayer({ reduce }: { reduce: boolean }) {
  // Geometry in a 980x480 design space. Children chat card occupies
  // the central 620x400 region (centred). Modules anchor on the
  // outer flanks; connection lines bridge the 40px gap to the card.
  const W = 980
  const H = 480
  const lines = [
    { id: 'l-desk24', x1: 140, y1: 120, x2: 180, y2: 120, color: ORANGE, dur: 9,  delay: 0   },
    { id: 'l-hub',    x1: 840, y1: 120, x2: 800, y2: 120, color: ORANGE, dur: 9,  delay: 4.5 },
    { id: 'l-stay',   x1: 140, y1: 360, x2: 180, y2: 360, color: BLUE,   dur: 11, delay: 2.2 },
  ]

  return (
    <div
      aria-hidden="true"
      className="hidden lg:block pointer-events-none absolute -left-[180px] -right-[180px] -top-[40px] -bottom-[40px]"
    >
      {/* Connection lines — dotted baseline + occasional comet */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
      >
        <g stroke={BASELINE} strokeWidth={1} strokeDasharray="2 5" fill="none">
          {lines.map((l) => (
            <line key={`base-${l.id}`} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} />
          ))}
        </g>
        <g fill="none" strokeLinecap="round">
          {lines.map((l) => (
            <motion.line
              key={`pulse-${l.id}`}
              x1={l.x1}
              y1={l.y1}
              x2={l.x2}
              y2={l.y2}
              stroke={l.color}
              strokeWidth={1.4}
              strokeDasharray="14 80"
              style={{
                filter: `drop-shadow(0 0 4px ${l.color}aa)`,
                opacity: reduce ? 0 : 0.9,
              }}
              initial={{ strokeDashoffset: 80 }}
              animate={reduce ? undefined : { strokeDashoffset: -80 }}
              transition={{
                duration: l.dur,
                repeat: Infinity,
                ease: 'linear',
                delay: l.delay,
              }}
            />
          ))}
        </g>
      </svg>

      {/* Modules — absolutely positioned using the same 980x480
          coordinate space, expressed as percentages so they stay
          anchored if the orbital area's actual rendered size shifts
          slightly between 1024 and 1920 viewports. */}
      <ModuleCard
        idx={0}
        module={MODULES[0]}
        style={{ left: `${(0 / W) * 100}%`,    top: `${(80  / H) * 100}%`, width: 140 }}
        reduce={reduce}
      />
      <ModuleCard
        idx={1}
        module={MODULES[1]}
        style={{ right: `${(0 / W) * 100}%`,   top: `${(80  / H) * 100}%`, width: 140 }}
        reduce={reduce}
      />
      <ModuleCard
        idx={2}
        module={MODULES[2]}
        style={{ left: `${(0 / W) * 100}%`,    top: `${(320 / H) * 100}%`, width: 140 }}
        reduce={reduce}
      />
    </div>
  )
}

interface ModuleCardProps {
  idx: number
  module: typeof MODULES[number]
  style: React.CSSProperties
  reduce: boolean
}

function ModuleCard({ idx, module, style, reduce }: ModuleCardProps) {
  return (
    <motion.div
      className="absolute rounded-xl border border-ay-border bg-ay-surface/70 backdrop-blur-md px-3 py-2.5"
      style={style}
      initial={reduce ? undefined : { opacity: 0, y: 10 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-2 mb-1.5">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-ay-accent" />
        <span className="font-brand text-[12px] text-ay-text leading-none">{module.name}</span>
      </div>
      <p className="font-body text-[10px] text-ay-text-muted leading-tight mb-2">{module.role}</p>
      <div className="flex flex-wrap gap-1">
        {module.caps.map((cap) => (
          <span
            key={cap}
            className="font-mono text-[9px] uppercase tracking-wider text-ay-text-muted bg-ay-bg/60 border border-ay-border rounded-full px-1.5 py-[2px]"
          >
            {cap}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

/* ────────────────────────────────────────────────────────────────
   Mobile / tablet ecosystem strip (<lg)
   ────────────────────────────────────────────────────────────── */

function MobileEcosystem() {
  const allCaps = ['WhatsApp AI', 'Voice Agents', 'Dashboards', 'Automation', 'CRM Sync']

  return (
    <div className="lg:hidden mt-4 flex flex-col gap-2.5">
      {/* Product pills row */}
      <div className="grid grid-cols-3 gap-2">
        {MODULES.map((m) => (
          <div
            key={m.id}
            className="flex items-center gap-1.5 rounded-lg border border-ay-border bg-ay-surface/70 px-2.5 py-2 min-w-0"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-ay-accent shrink-0" />
            <span className="font-brand text-[11px] text-ay-text truncate">{m.name}</span>
          </div>
        ))}
      </div>
      {/* Capability pills */}
      <div className="flex flex-wrap gap-1.5">
        {allCaps.map((c) => (
          <span
            key={c}
            className="font-mono text-[9px] uppercase tracking-wider text-ay-text-muted bg-ay-bg/60 border border-ay-border rounded-full px-2 py-[3px]"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
