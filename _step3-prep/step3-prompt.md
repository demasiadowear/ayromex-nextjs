# STEP 3 - Homepage Refactor + Signature Moves + Hero Ayro-Ready

## CONTESTO

STEP 2 e completato (8 commit atomici, React 19 + Next 16, design tokens unificati, lenis attivo, dead code rimosso).

STEP 3 e il refactor visivo della homepage + implementazione dei 5 signature moves + predisposizione hero per accogliere l'agente Ayro (che verra wireato in STEP 4).

Branch di lavoro: restyling-2026.
Commit author: Christian <info@demasiadowear.com> (gia configurato).

## DECISIONI DESIGN (GIA PRESE DA CHRISTIAN)

1. AnimatedBackground: LASCIO A TE DECIDERE. Criteri: ridurre rumore visivo, mantenere identita. Proponi cosa tenere/semplificare/sostituire PRIMA di modificare.
2. Hero headline: 140-180px su desktop (editoriale elegante, tipo Anthropic Labs). Syne ExtraBold 800. Kerning -2%%. Line-height 0.95.
3. Dosaggio arancione: FORTE. Uso generoso di #FF6B00 su accent, underline, highlights, CTA, hover. Brand recognition marcata.
4. Cursor doppio: LASCIO A TE DECIDERE (signature standard, spec in CLAUDE.md õ8).
5. Character-by-character reveal: LASCIO A TE DECIDERE (spec in CLAUDE.md õ8).
6. Grain noise: SI. SVG feTurbulence 3%% opacity, animato 60fps.
7. Chat Ayro nella hero: INTEGRATA nel layout hero, visibile subito (non fluttuante a destra, non overlay, non bottom-fixed). Elemento centrale della hero insieme alla headline.
8. Sezione Clienti: RIMOSSA. Niente card con nomi reali, niente sostituzione con "Verticali Serviti". Homepage ultra-focalizzata.

## NUOVA STRUTTURA HOMEPAGE (definitiva)

1. Navbar (trasparente -> glass on scroll)
2. HERO full-viewport (100vh) con headline + chat Ayro placeholder + CTA
3. PRODOTTI (2 card grandi: AyroHub + AyroDesk24)
4. PROCESSO (4 step: Scoperta -> Prototipo -> Build -> Scale)
5. CTA FINALE
6. Footer

Totale: 6 blocchi. No sezioni Servizi separate, no Clienti, no Journal teaser. Sito ultra-focalizzato su conversione verso Ayro chat.

## CLEANUP DA FARE (da STEP 1 audit)

- Rimuovi ThemeProvider + toggle dark/light da Navbar (decisione: dark-only)
- Fix anchor rotti (#clienti, #contatti che linkano a id inesistenti)
- Fix servizi/page.tsx bug s1-s6 (messages ha solo s1-s5)
- Unifica AnimatedBackground a #FF6B00 (oggi e #FF4D00 hardcoded)
- Rimuovi nomi clienti reali da codice, i18n, commenti (regola õ10 CLAUDE.md)
- Fix i18n ignorato su homepage (oggi 100%% hardcoded IT, deve funzionare IT/EN/RO)

## SIGNATURE MOVES DA IMPLEMENTARE

### Move 1: Custom Cursor (decidi tu)
File: components/CustomCursor.tsx (gia esistente, aggiornalo)
Attuale: dot 24px arancio con mix-blend-difference
Target (se decidi di farlo): dot bianco 6px + follower ring 40px white/10%% con inertia, spring Framer Motion 150/15, grow a 80px su elementi interattivi, i-beam su testi.
Desktop only, mobile nascosto.
Se preferisci mantenere cursor singolo migliorato, vai di quello ma con palette aggiornata #FF6B00.

### Move 2: Lenis Smooth Scroll (gia fatto in STEP 2)
Verifica che SmoothScroll sia mounted in app/[locale]/layout.tsx e che prefers-reduced-motion sia gated.

### Move 3: Char-by-char Headline Reveal (decidi tu)
File nuovo: components/CharReveal.tsx
GSAP + ScrollTrigger. Split manuale JS (no SplitText premium). Stagger 0.03s. Mask clip-path. Ease power3.out.
Applicala SOLO alla hero H1 o a tutte le H2 sezione, decidi tu in base al feel.

### Move 4: Grain Noise Animato (SI, conferma Christian)
File nuovo: components/GrainOverlay.tsx
SVG feTurbulence 3%% opacity fixed overlay viewport intera. Animazione CSS 60fps, transform translate random subliminale. Pointer-events none.
Monta in app/layout.tsx (root) dopo il body, prima di children.

### Move 5: Section Transitions (decidi tu)
File nuovo: lib/motion.ts
Helpers framer-motion per whileInView con fade + slide 24-36px, stagger 80-120ms. Ogni sezione della homepage entra con questo pattern.
Scroll-linked background color shift molto sottile: #0A0A0A -> #0C0808 -> #0A0A0A percepibile solo in movimento.

## HERO: COMPOSIZIONE DETTAGLIATA

Layout desktop 1440px:
- Top: Navbar 64px (glass on scroll)
- Eyebrow (12px DM Sans uppercase letter-spacing +8%%): "AI DIGITAL AGENCY ú BARI, IT"
- Headline H1 gigante (160px Syne 800 desktop, 64px mobile): "AI che [lavora]. Non chiacchiera."
  - "lavora" ha underline arancio animato (CharReveal entry)
  - "Non chiacchiera." al 55%% opacity per contrasto retorico
- Rotating text sotto (28px DM Sans): "Costruiamo [Agenti AI / Automazioni / Prodotti Digitali / Sistemi Reali]"
  - 3s per parola, transizione con underline pulse #FF6B00 1.5px 0.5s
  - Usa component RotatingText (gia nel repo, non toccarlo)
- Paragrafo (16px DM Sans): "Agenti, automazioni e prodotti digitali per PMI italiane e operatori ADM. Spediamo sistemi in produzione, non slide."
- AYRO CHAT PLACEHOLDER (elemento nuovo, IMPORTANTE):
  - Card bg #141414, border #27272A, border-radius 16px
  - Desktop: width 580px, height 400px, allineata sotto il paragrafo ma within hero viewport
  - Mobile: full-width, height 320px
  - Header card: "Ayro" (Gugi 14px) + status dot verde "online" + subtitle "Agente AI di AYROMEX"
  - Body card: area messaggi vuota con placeholder centrato "Ciao, sono Ayro. Cosa vuoi automatizzare nel tuo business?"
  - Footer card: input field full-width placeholder "Scrivi qui..." + send button icon 
  - IMPORTANTE: input NON deve funzionare ancora. E placeholder visivo. Il wiring a Gemini avviene in STEP 4.
  - Quando user clicca input: mostra tooltip "Stiamo mettendo gli ultimi ritocchi ad Ayro. Intanto puoi scriverci su WhatsApp." con link
- KPI strip sotto hero (opzionale, decidi tu se tenere): "+18%% revenue" ú "7 alert" ú "3.4x conversion"
- 2 CTA secondarie sotto KPI: "Esplora i prodotti" ghost + "Parliamone in call" primary

Obiettivo hero: il visitatore in 3 secondi capisce 1) chi siamo 2) che facciamo AI vera 3) puo interagire subito (quando Ayro sara wire).

## PRODOTTI: 2 CARD GRANDI

AyroHub card:
- Badge "LIVE" top-left arancione
- Logo lockup "AyroHub" (Syne Bold 32px)
- Tagline: "AI OS per concessionari ADM gaming"
- 3 bullet features: "Compliance ADM automatizzata", "Reactivator outbound voice", "Insight strategici AI"
- Pricing: "da 1.500 euro/mese"
- CTA: "Scopri AyroHub "
- Visual destra: mockup astratto (griglia dati + KPI cards + grafico), NO screenshot reali

AyroDesk24 card (stessa struttura):
- Badge "LIVE"
- Logo lockup "AyroDesk24"
- Tagline: "AI receptionist WhatsApp per SMB italiane"
- Bullet: "Prenotazioni 24/7", "Multi-operatore", "Google Calendar sync"
- Pricing: "da 199 euro/mese"
- CTA: "Scopri AyroDesk24 "
- Visual: mockup WhatsApp chat stilizzato con bubble conversazione Sara

## PROCESSO: 4 STEP

Scoperta (1-2 settimane) -> Prototipo (2-3 settimane) -> Build (4-8 settimane) -> Scale (continuo)

Numero grande Syne 800 96px #27272A. Titolo DM Sans Medium 18px #FAFAFA. Durata DM Sans 13px #A1A1AA. Descrizione DM Sans 14px #A1A1AA.
Linea di connessione #27272A con punto #FF6B00 che scorre in 8s loop.

## CTA FINALE

Headline centrata Syne 800 96px desktop/48px mobile: "Hai un'idea che vuoi trasformare in sistema?"
Sottotitolo DM Sans 18px #A1A1AA: "Parliamone in call di 30 minuti. Niente slide, solo domande e risposte."
Form: input email + button "Prenota call " (placeholder per ora, wiring Cal.com in STEP 6)
Link secondario sotto: "...o scrivici su WhatsApp" con icona

## FOOTER

4 colonne desktop:
- Col 1 Brand: logo + tagline + "Bari ú Puglia ú Italia"
- Col 2 Prodotti: AyroHub, AyroDesk24, (Ayrolabs disabled, coming soon)
- Col 3 Azienda: Servizi, Chi siamo, Contatti
- Col 4 Legale + Social: Privacy, Cookie, Termini, social icons

Bottom strip (border-top #27272A):
- ¸ 2026 AYROMEX S.R.L. ú P.IVA RO45XXXXXXX
- Language switcher IT/EN/RO con country-flag-icons (gia installato)

## I18N: OBBLIGATORIO

Tutti i testi di questa homepage vanno in messages/it.json, en.json, ro.json. Zero hardcoded.
Aggiungi chiavi mancanti in TUTTI E TRE i file simultaneamente.
Verifica che navigando /it, /en, /ro il contenuto cambi correttamente.

## WORKFLOW STEP 3

1. Esplora componenti esistenti (hero attuale, product cards, CTA) e capisci cosa riusare vs riscrivere
2. Mostrami piano di esecuzione prima di toccare codice (ordine dei file, breaking changes attesi)
3. Procedi per blocchi logici, mostra PATCH PREVIEW per cambi strutturali
4. Commit atomici per ogni blocco significativo (conventional commits)
5. Dopo ogni blocco verifica npm run build e descrivi cosa appare su localhost:3000

Ordine di esecuzione suggerito (proponi modifiche se preferisci):
A. Cleanup preliminare (ThemeProvider, anchor rotti, i18n keys mancanti, AnimatedBackground color fix o decisione sostituzione)
B. Grain overlay + lib/motion.ts (signature globali)
C. Hero refactor con Ayro chat placeholder
D. Prodotti 2 card
E. Processo 4 step
F. CTA finale
G. Footer refactor + language switcher
H. i18n sweep (tutte le chiavi in 3 lingue)
I. Cursor + CharReveal (se decidi di implementarli)
J. QA mobile 375px + tablet 768px + desktop 1440px
K. npm run build final + report

## OUTPUT FINALE

Alla fine di STEP 3, mandami:
1. git log --oneline -30
2. Output completo npm run build
3. Descrizione testuale dettagliata di cosa vedo su localhost:3000 sezione per sezione
4. Lista TODO emersi che vanno affrontati in STEP 4 (wiring Ayro), STEP 5 (frontend chat), STEP 6 (outcome layer)

Poi aspetta "GO STEP 4" per il wiring backend di Ayro.

FINE STEP 3 PROMPT
