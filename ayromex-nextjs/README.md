# AYROMEX WEBSITE - Next.js Premium

Sito web premium per AYROMEX con Next.js 14, Tailwind CSS e Framer Motion.

## 🎨 Design System

### Palette Colori
- **Orange 500** (`#FF6B35`): Primary accent, CTA, highlights
- **Dark 950** (`#0B0F14`): Main background
- **Dark 900** (`#151A21`): Elevated surfaces
- **Dark 800** (`#1F2937`): Cards, modals
- **Light 50** (`#F9FAFB`): Primary text

### Typography
- **Display**: Space Grotesk (bold, headings)
- **Body**: Inter (text, UI)

---

## 🚀 Quick Start

### 1. Installazione

```bash
# Clone o scarica il progetto
cd ayromex-nextjs

# Installa dipendenze
npm install

# Avvia development server
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### 2. Build Production

```bash
npm run build
npm start
```

---

## 📁 Struttura Progetto

```
ayromex-nextjs/
├── app/
│   ├── page.tsx              # Home page completa
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles + Tailwind
│   └── servizi/              # Pagina Servizi (da creare)
│   └── portfolio/            # Pagina Portfolio (da creare)
│   └── chi-siamo/            # Pagina Chi Siamo (da creare)
│   └── contatti/             # Pagina Contatti (da creare)
├── components/
│   ├── Navbar.tsx            # Navbar sticky con glass effect
│   └── WhatsAppButton.tsx    # Floating WhatsApp button
├── lib/
│   └── animations.ts         # Framer Motion variants
├── tailwind.config.js        # Tailwind configuration
├── package.json
└── README.md
```

---

## ⚙️ Personalizzazione

### 1. Numero WhatsApp

**File**: `components/WhatsAppButton.tsx`

```typescript
const whatsappNumber = '393XXXXXXXXX' // Sostituisci con il tuo
```

### 2. Colori Brand

Se vuoi cambiare la tonalità di arancione:

**File**: `tailwind.config.js`

```javascript
orange: {
  500: '#FF6B35',  // Cambia questo HEX
}
```

### 3. Font

Per cambiare font:

**File**: `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=TUO_FONT&display=swap');
```

**File**: `tailwind.config.js`

```javascript
fontFamily: {
  display: ['Tuo Font', 'sans-serif'],
}
```

### 4. Copy & Testi

Tutti i testi sono in `app/page.tsx`. Cerca le sezioni:
- Hero headline/subheadline
- USP cards
- Services array
- Portfolio projects array
- Process steps array
- AI benefits array

### 5. Immagini Portfolio

Sostituisci i placeholder gradient con immagini reali:

```typescript
// Invece di:
gradient: 'bg-gradient-to-br from-blue-600 to-blue-800'

// Usa:
image: '/images/portfolio/oceanis.jpg'
```

E nel componente:
```tsx
<div style={{ backgroundImage: `url(${project.image})` }} />
```

---

## 📄 Pagine da Creare

### Servizi (`app/servizi/page.tsx`)
Dettaglio completo di tutti i servizi con:
- Grid espansa (6 servizi)
- Pricing indicativo (opzionale)
- Process per ogni servizio
- CTA contatto

### Portfolio (`app/portfolio/page.tsx`)
Gallery completa progetti con:
- Filtri per categoria (Branding, Social, Print, Web)
- Grid masonry
- Modal detail con case study
- Client info + risultati

### Chi Siamo (`app/chi-siamo/page.tsx`)
About page con:
- Storia AYROMEX
- Team (opzionale)
- Valori e mission
- Perché sceglierci

### Contatti (`app/contatti/page.tsx`)
Contact page con:
- Form completo (nome, email, tel, servizio, messaggio)
- Info contatto (indirizzo, email, tel)
- Mappa (Google Maps embed)
- CTA WhatsApp

**Template base per nuove pagine:**

```typescript
'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { fadeInUp } from '@/lib/animations'

export default function PaginaNome() {
  return (
    <main>
      <Navbar />
      
      <section className="section-spacing pt-32">
        <div className="section-container">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-display font-display font-bold"
          >
            Titolo Pagina
          </motion.h1>
        </div>
      </section>
    </main>
  )
}
```

---

## 🎬 Animazioni

### Variants Disponibili

Tutte le animazioni sono in `lib/animations.ts`:

- **fadeInUp**: Fade + slide up
- **fadeIn**: Solo fade
- **staggerContainer**: Container con stagger children
- **staggerItem**: Item da usare dentro stagger
- **scaleIn**: Scale + fade
- **slideInLeft/Right**: Slide laterali
- **glowPulse**: Pulsazione glow effect

### Uso Base

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeInUp}
>
  Content
</motion.div>
```

### Stagger (per liste)

```tsx
<motion.div variants={staggerContainer}>
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 🚢 Deployment

### Vercel (Consigliato)

**Metodo 1: Dashboard**
1. Push su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. "New Project" → Import repo
4. Deploy automatico ✅

**Metodo 2: CLI**
```bash
npm i -g vercel
vercel --prod
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Variabili Ambiente (se necessarie)

Crea `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=393XXXXXXXXX
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

Usa in codice:
```typescript
const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
```

---

## 🔧 Integrazioni

### Google Analytics

**File**: `app/layout.tsx`

Aggiungi prima del `</head>`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Form Contact

Per form funzionante, integra:

**Opzione A: Formspree**
```tsx
<form action="https://formspree.io/f/YOUR_ID" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Invia</button>
</form>
```

**Opzione B: API Route Next.js**

Crea `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  
  // Invia email con nodemailer o servizio email
  
  return NextResponse.json({ success: true })
}
```

---

## 🎨 Componenti Utility

### Card Base

```tsx
<div className="card">
  <h3>Titolo</h3>
  <p>Content</p>
</div>
```

### Button Primary

```tsx
<button className="btn-primary">
  Click Me
</button>
```

### Button Secondary

```tsx
<button className="btn-secondary">
  Learn More
</button>
```

### Section Container

```tsx
<section className="section-spacing bg-dark-900">
  <div className="section-container">
    {/* Content */}
  </div>
</section>
```

---

## 📊 Performance

### Lighthouse Targets
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >95

### Optimization Tips

1. **Immagini**: Usa Next.js Image component
```tsx
import Image from 'next/image'

<Image
  src="/images/project.jpg"
  width={800}
  height={600}
  alt="Project"
/>
```

2. **Lazy Loading**: Già implementato con `whileInView`

3. **Fonts**: Già ottimizzati con Google Fonts display=swap

---

## 🐛 Troubleshooting

**Errore: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Animazioni non funzionano**
- Verifica import Framer Motion
- Check variants spelling

**Styles non applicati**
- Verifica Tailwind config paths
- Build: `npm run build`

**WhatsApp button non appare**
- Check z-index in `WhatsAppButton.tsx`
- Verifica `fixed` positioning

---

## 📞 Support

**Issues**: Apri issue su GitHub  
**Custom dev**: Contatta team AYROMEX

---

## 📄 License

© 2025 AYROMEX S.R.L. - All Rights Reserved

---

## ✅ Checklist Pre-Launch

- [ ] Sostituito numero WhatsApp reale
- [ ] Aggiornati tutti i testi/copy
- [ ] Caricate immagini portfolio
- [ ] Create pagine Servizi, Portfolio, Chi Siamo, Contatti
- [ ] Form contatti funzionante
- [ ] Google Analytics installato
- [ ] Meta tags SEO personalizzati
- [ ] Favicon aggiunti
- [ ] Test responsive mobile
- [ ] Lighthouse score verificato
- [ ] Deploy su Vercel/Netlify
- [ ] Custom domain configurato
- [ ] SSL attivo (HTTPS)

---

**Versione**: 1.0.0  
**Stack**: Next.js 14 + Tailwind CSS + Framer Motion  
**Ultimo Update**: Gennaio 2025
