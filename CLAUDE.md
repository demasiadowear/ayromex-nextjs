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
| `ay-accent` | `#FF6A00` | Brand Orange — primary accent, CTAs, highlights |
| `ay-accent-hover` | `#E65C00` | hover state on accent |
| `ay-accent-tint` | `#FFF1E6` | very light accent fills |
| `ay-bg` | `#0D0D0D` | Ink — page background |
| `ay-surface` | `#141414` | elevated cards / sections |
| `ay-text` | `#FAFAFA` | primary text |
| `ay-text-muted` | `#A1A1AA` | secondary text |
| `ay-border` | `#27272A` | borders / dividers |
| `ay-cream` | `#FFF4EC` | Cream — warm surface tint (use sparingly for contrast bands) |
| `ay-blue` | `#00A6F4` | Electric Blue — tech / data accent only |
| `ay-lime` | `#A8FF3E` | success / live status indicators only |

The ONLY orange is `#FF6A00`. `#FF6B00`, `#FF4D00`, `#FF8533`,
`#CC5500` are forbidden — always use `ay-accent` and derivatives.
The ONLY base background is `#0D0D0D` via `ay-bg`. `#0A0A0A`,
`#070707`, `#050505` are forbidden as base backgrounds.

### 4.2 Typography

Loaded once in `app/layout.tsx` via `next/font/google`.

| Family | Weights | CSS variable | Tailwind class |
|---|---|---|---|
| Gugi | 400 | `--font-gugi` | `font-brand` |
| Syne | 800 | `--font-syne` | `font-display` |
| DM Sans | 400 / 500 / 600 | `--font-dm-sans` | `font-body` (+ `sans` default) |
| JetBrains Mono | 400 / 500 | `--font-jetbrains-mono` | `font-mono` |

Usage: `font-brand` for brand/logo lockups ONLY. `font-display` for
editorial headlines (h1/h2/h3). `font-body` for body, UI, caption,
nav (it is also the default `sans`). `font-mono` for code, legal IDs,
and terminal/tool-name elements.

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
4. **Accent color is `#FF6A00`** — enforced via `ay-accent` token.
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

### Client confidentiality — ironclad rule

Never mention real client names anywhere on the public site. Use
generic verticals ('Concessionario ADM', 'Studio professionale',
'Boutique hotel') instead. This includes code comments, i18n strings,
page content, and metadata. If a feature seems to require a client
name, ask before proceeding.

Safe generic verticals:
- Concessionario ADM / Operatore gaming
- Studio professionale / Studio estetico / Salone
- Boutique hotel / Struttura ricettiva
- PMI italiana / Azienda di servizi
- Retail multi-sede

For social proof, use aggregate anonymous metrics (e.g. "200+ hours
saved per month", "15+ verticals covered"), never specific numbers
that could identify a client.

### Scope boundaries

- No CMS. Content lives in `messages/` and page files.
- No blog engine. Journal is static, hand-curated.
- No analytics without explicit approval.
- No cookie-banner framework — current policy is technical cookies only.
- No additional animation library. If framer-motion + GSAP can't
  do it, reconsider the feature.
- No light mode. AYROMEX is dark-only (brand decision dated
  2026-04-22). Reference aesthetic: Anthropic Labs / Linear /
  Vercel. ThemeProvider component and light/dark toggle in
  Navbar will be REMOVED in STEP 3 alongside page refactor —
  not in STEP 2 to avoid visual regressions on the live site.
  Users who need light contrast will rely on OS-level reader
  modes or browser accessibility settings.

---

## 11. Live Agent Backend (Ayro) - MVP Architecture

### 11.1 What Ayro is

Ayro is the conversational AI agent embedded in the hero section of ayromex.com. He is the site's primary interactive demo and lead capture surface.

Ayro lives behind a Next.js API route at /app/api/chat/route.ts, is invoked from a React chat UI in the hero, and runs on Google Gemini 2.0 Flash. He is stateless per request - conversation history is passed in by the client. No separate service, no external orchestrator, no queue. All server-side logic runs inside the Next.js app on Vercel.

Ayro is the thesis of the site: AYROMEX builds thinking systems, not toys. Visiting the homepage and talking to Ayro is the proof.

### 11.2 MVP scope

MVP ships ONE agent. No multi-agent orchestration at launch. The architecture is designed to scale into a multi-agent system post-launch, but only after real conversation data justifies the added complexity.

### 11.3 Identity

- Name: Ayro
- Role: Sales and Discovery Specialist at AYROMEX
- Primary language: Italian
- Secondary: English, Romanian (switches automatically if user switches)
- Personality: expert, direct, cordial, non-pushy
- Reference tone: founder Christian (persona details captured in lib/ayro/tone.md in STEP 4)

### 11.4 Responsibilities

Ayro has five responsibilities in order of conversational priority:

- Qualify: identifies industry vertical, role, pain point, scale or volume of the visitor's business
- Route: directs the conversation to the correct product (AyroHub for ADM/gaming operators, AyroDesk24 for WhatsApp receptionist on SMBs) or to a CUSTOM build request if the need is outside the standard catalog
- Inform: answers technical and commercial questions using the knowledge base (products, pricing, use cases, FAQ, limits)
- Capture: collects email and context when the lead is warm; records the conversation in Supabase
- Trigger: fires downstream actions (Cal.com booking embed, Slack alert to #leads-ayromex, email summary to info@demasiadowear.com)

### 11.5 Technical stack

- LLM: Google Gemini 2.0 Flash (free tier primary; paid fallback same model)
- SDK: @google/generative-ai (installed in STEP 4)
- API route: /app/api/chat/route.ts with streaming SSE response
- Client state: React useState (active conversation in browser, not persisted client-side)
- Persistence: Supabase free tier (leads table; fallback Vercel KV if Supabase unavailable)
- Rate limiting: Upstash Redis (fallback: in-memory)

Rate limits: 8 messages per IP per hour, 200 messages per IP per day.

### 11.6 Knowledge base

Local JSON and Markdown files read at runtime. No vector DB in MVP - all content fits in the Gemini context window. Location: lib/ayro/

- system-prompt.md: personality, mission, guardrails
- products.json: AyroHub and AyroDesk24 full specs
- pricing.json: tiers, setup fees, extras
- use-cases.json: verticals served (estetica, hotel, ADM, retail)
- faq.json: frequently asked questions and curated answers
- limits.json: explicit boundaries (what we do NOT do)
- qualifiers.json: lead quality criteria

These files are authored in STEP 4. Updating any of them takes effect on the next request, no retraining and no redeploy required.

### 11.7 Outcome detection

Pattern matching on user input triggers backend actions in parallel with the streamed response:

- Email regex match: save lead record in Supabase
- Keywords "prenotare", "call", "meeting", "incontro": inject Cal.com inline embed into the chat UI
- Requirements outside the standard catalog: tag the lead CUSTOM and Slack alert to #leads-ayromex
- Conversation end (timeout or explicit goodbye): email summary to info@demasiadowear.com

### 11.8 Boundaries Ayro must enforce

- NEVER mention real client names (inherits from section 10 rule)
- NEVER promise features not declared in products.json (products.json is the absolute source of truth)
- NEVER give fixed prices before minimum qualification
- NEVER claim to be human if asked directly - honest disclosure with elegance
- ALWAYS say "I don't know" before inventing
- ALWAYS propose a discovery call for custom requests above 5000 euro

### 11.9 Rate limit UX

When a user hits the rate limit, Ayro shows (in Italian by default, localized per active locale):

"Ti ho dato un buon assaggio di come lavoriamo. Ora e il momento di parlare seriamente. Christian ti risponde entro 24h se gli scrivi qui: [WhatsApp link]"

Technical error screens are never surfaced to the user. If the Gemini API fails, Ayro shows a graceful fallback with the WhatsApp link.

### 11.10 Future evolution (post-launch only)

Once MVP is live and producing real conversations, the architecture scales to multi-agent. Planned agents:

- Orchestrator: routes incoming messages to specialist agents
- Scout: deep qualification (industry, budget, urgency)
- Product Expert: catalog deep knowledge, likely with RAG over a vector DB
- Builder: custom requirements gathering and rough estimation
- Closer: call booking, CRM handoff, contract initiation

Migration trigger: more than 50 qualified conversations per week OR a clear pattern of user questions that exceed a single-agent context window.
