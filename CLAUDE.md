# CLAUDE.md — AYROMEX Website Engineering Handbook

This is the AI onboarding manual for the AYROMEX marketing site.
Read it before touching code. It encodes conventions, not history.

---

## 1. Project purpose

Marketing + lead-gen site for **AYROMEX S.R.L.** — AI automation
agency, registered in Romania, operating from Puglia (Italy).
Three locales: IT (default), EN, RO. Production deploy on Vercel
at ayromex.com. Current working branch: `restyling-2026`.

---

## 2. Tech stack (pinned in package.json)

| Layer | Tech | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.x |
| Runtime | React | 19.x |
| Styling | Tailwind CSS | 3.4 |
| i18n | next-intl | 4.8 |
| Animation (declarative) | framer-motion | 11 |
| Animation (timeline) | gsap + @gsap/react | latest |
| Smooth scroll | lenis | 1.3 |
| 3D (optional flourish) | three + @react-three/fiber + @react-three/drei | 0.183 / 9 / 10 |
| Icons | react-icons, country-flag-icons | — |
| Types | TypeScript | 5 |

GSAP and Three.js are performance-sensitive — reserve them for
the 5 signature moves in §8. Never use them for trivial effects
framer-motion already covers.

---

## 3. Project structure

```
app/
  layout.tsx             ← fonts, providers, CustomCursor, GrainOverlay
  globals.css            ← tokens + shared styles only
  [locale]/
    layout.tsx           ← next-intl provider, Navbar, Footer, SmoothScroll
    page.tsx             ← home
    servizi/page.tsx
    chi-siamo/page.tsx
    journal/page.tsx
    privacy/page.tsx
    terms/page.tsx

components/              ← PascalCase, one default export per file
hooks/                   ← camelCase, "use" prefix
lib/                     ← framework-agnostic utilities
messages/                ← i18n: it.json, en.json, ro.json
i18n/                    ← next-intl routing + request
public/brand/logos/      ← brand assets (DO NOT restyle)
```

If a component is not imported anywhere, delete it.
Don't keep dead code "for later".

---

## 4. Design system

### 4.1 Colors — single source of truth: `tailwind.config.js`

| Token | Hex | Usage |
|---|---|---|
| `ay-accent` | `#FF6B00` | primary accent, CTAs, highlights |
| `ay-accent-hover` | `#E65C00` | hover state on accent |
| `ay-accent-tint` | `#FFF1E6` | very light accent fills |
| `ay-bg` | `#0A0A0A` | page background |
| `ay-surface` | `#141414` | elevated cards / sections |
| `ay-text` | `#FAFAFA` | primary text |
| `ay-text-muted` | `#A1A1AA` | secondary text |
| `ay-border` | `#27272A` | borders / dividers |

The ONLY orange is `#FF6B00`. `#FF4D00`, `#FF6A00`, `#FF8533`,
`#CC5500` are forbidden — always use `ay-accent` and derivatives.

### 4.2 Typography

Loaded once in `app/layout.tsx` via `next/font/google`.

| Family | Weights | Tailwind class | Usage |
|---|---|---|---|
| Gugi | 400 | `font-brand` | brand/logo lockups ONLY |
| Syne | 800 | `font-display` | editorial headlines (h1/h2/h3) |
| DM Sans | 400 / 500 / 600 | `font-body` (= default `sans`) | body, UI, caption, nav |
| JetBrains Mono | 400 / 500 | `font-mono` | code, legal IDs, terminals |

Never use Gugi outside the logo lockup. Never mix Syne with
DM Sans in the same line.

### 4.3 Spacing & layout

- Tailwind default 4px scale.
- Breakpoints (target — enforced from STEP 2.D onwards; until then
  the config still uses Tailwind defaults):
  - `sm`: 375px (mobile baseline)
  - `md`: 768px (tablet)
  - `lg`: 1440px (desktop)
- Container: use `.section-container` utility
  (`max-w-7xl mx-auto px-6 md:px-12`). Do not redefine inline.

### 4.4 Motion

- Default easing: `[0.22, 1, 0.36, 1]` (expo-out).
- Default duration: 0.55–0.65s for reveals, 0.2–0.3s for UI feedback.
- Every animation gated by `prefers-reduced-motion`.
  Use `useReducedMotion()` from framer-motion or the CSS query.

---

## 5. Code conventions

### 5.1 Components

- One component per file, PascalCase filename matches default export.
- `'use client'` only when necessary (hooks, events, browser APIs).
- Props typed via `interface Props { ... }`.
- Server components by default for route pages.

### 5.2 Import order (fixed)

```ts
// 1. react / next
import { useState } from 'react'
import Image from 'next/image'

// 2. third-party
import { motion } from 'framer-motion'

// 3. internal (@/components, @/hooks, @/lib, @/i18n)
import Navbar from '@/components/Navbar'

// 4. types
import type { Locale } from '@/i18n/routing'

// 5. styles (rare)
import styles from './thing.module.css'
```

### 5.3 i18n — ZERO hardcoded user-facing strings

Every visible string comes from `messages/[locale].json`.
Legal IDs, email addresses, phone numbers are the only exceptions.

```tsx
// OK
const t = useTranslations('hero')
return <h1>{t('headline')}</h1>

// never
return <h1>Sistemi AI che lavorano</h1>
```

When adding a new key: update `it.json`, `en.json` AND `ro.json`
in the same commit. Never ship a locale missing a key.

### 5.4 Styling

- Prefer Tailwind utilities.
- Custom CSS only for things Tailwind cannot express cleanly
  (complex keyframes, canvas overlays). Put them in `globals.css`
  under a labelled section.
- No inline `style={{}}` for colors — always use tokens.

---

## 6. Git workflow

- Branches:
  - `main` — production, auto-deploys to Vercel.
  - `restyling-2026` — current redesign branch.
- Commit convention: **Conventional Commits**, English.
  - `feat:` new user-visible feature
  - `fix:` bug fix
  - `chore:` tooling / deps / config
  - `refactor:` code restructure, no behavior change
  - `style:` formatting, CSS, no logic change
  - `docs:` documentation only
- **Atomic commits**: one commit = one logical change. No mega-commits.
- Commit author: `Christian <info@demasiadowear.com>` (see §7).
- Never `--no-verify`. Never force-push `main`.
- Vercel deploys on push to `main`. PR previews on all branches.

---

## 7. Mandatory rules

1. **Zero hardcoded user-facing strings.** See §5.3.
2. **Mobile-first.** Code the 375px layout first, scale up with
   `md:` / `lg:` prefixes.
3. **`prefers-reduced-motion` is not optional.** Every non-trivial
   animation (orbs, cursor, lenis, char reveals, grain) must degrade
   gracefully.
4. **Accent color is `#FF6B00`** — enforced via `ay-accent` token.
5. **Never redesign the logo.** Use SVGs in `public/brand/logos/`.
6. **No emojis** in UI copy, commits, or comments unless explicitly
   requested.
7. **Commit author**: `Christian <info@demasiadowear.com>`.
   Locked to `info@demasiadowear.com` — Vercel deploy guard on the
   parent team (demasiadowear). Any other email fails the build.
   DO NOT change without coordinating with the infrastructure owner.

---

## 8. Signature moves (the DNA of the site)

Each has one canonical file. Don't duplicate them inline elsewhere.
Files marked (STEP 3) are created during the 2026 redesign refactor
and do not yet exist in the repo.

| # | Move | File | Tech |
|---|---|---|---|
| 1 | **Dual custom cursor** — 6px white dot + 40px inertia ring, accent-tint shift over interactive elements | `components/CustomCursor.tsx` | framer-motion `useSpring` |
| 2 | **Smooth scroll** — lenis at root, 0.8s, reduced-motion aware | `components/SmoothScroll.tsx` mounted in `app/[locale]/layout.tsx` | `lenis` |
| 3 | **Character-by-character headline reveal** — staggered per-glyph fade/translate on scroll (STEP 3) | `components/CharReveal.tsx` | GSAP + ScrollTrigger |
| 4 | **Grain overlay** — ~3% fixed film-grain noise on the whole viewport (STEP 3) | `components/GrainOverlay.tsx` | SVG feTurbulence |
| 5 | **Section transitions** — fade + 24–36px slide on `whileInView`, 80–120ms stagger (STEP 3) | inline via helpers in `lib/motion.ts` | framer-motion |

If a visual effect doesn't fit one of these 5 categories, question
whether it's actually needed before building it.

---

## 9. Commands

```bash
# dev server
npm run dev                    # http://localhost:3000/it

# production build — run before every PR to main
npm run build

# lint
npm run lint

# adding deps (React 19 peer deps are strict)
npm install <pkg> --legacy-peer-deps
```

---

## 10. Out of scope (what NOT to do)

- No CMS. Content lives in `messages/` and page files.
- No blog engine. Journal is static, hand-curated.
- No analytics without explicit approval.
- No cookie-banner framework — current policy is technical cookies only.
- No additional animation library. If framer-motion + GSAP can't
  do it, reconsider the feature.
