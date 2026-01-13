# 🚀 DEPLOYMENT RAPIDO - AYROMEX Next.js

## Setup Locale (5 minuti)

```bash
# 1. Entra nella directory
cd ayromex-nextjs

# 2. Installa dipendenze
npm install

# 3. Avvia development
npm run dev

# Apri http://localhost:3000
```

---

## Deploy su Vercel (3 minuti)

### Metodo 1: GitHub + Vercel Dashboard

```bash
# 1. Push su GitHub
git init
git add .
git commit -m "feat: initial commit AYROMEX Next.js site"
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/ayromex-nextjs.git
git push -u origin main

# 2. Vai su vercel.com
# 3. "New Project" → Import da GitHub
# 4. Seleziona repo → Deploy ✅
```

### Metodo 2: Vercel CLI (1 minuto)

```bash
npm i -g vercel
vercel --prod

# Segui wizard
# Done! ✅
```

---

## Personalizzazioni IMMEDIATE

### 1. WhatsApp Number (30 sec)
**File**: `components/WhatsAppButton.tsx`
```typescript
const whatsappNumber = '393XXXXXXXXX' // ← TUO NUMERO
```

### 2. Hero Headline (1 min)
**File**: `app/page.tsx` (riga ~50)
```typescript
<h1>
  Il tuo headline personalizzato qui
</h1>
```

### 3. Footer Info (2 min)
Crea `components/Footer.tsx` e aggiungi in `app/page.tsx`

---

## Checklist Pre-Launch

- [ ] npm install funziona
- [ ] npm run dev funziona
- [ ] Sostituito numero WhatsApp
- [ ] Test responsive mobile (F12 DevTools)
- [ ] Build production: `npm run build`
- [ ] Deploy su Vercel
- [ ] Test sito live
- [ ] Custom domain (opzionale)

---

## Troubleshooting Rapido

**Errore durante install:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 già in uso:**
```bash
npm run dev -- -p 3001
```

**Errori TypeScript:**
- Ignora per ora, il sito funziona lo stesso
- Fix dopo con: `npm run build`

---

## Next Steps

1. **Settimana 1**: Setup locale + deploy base
2. **Settimana 2**: Personalizza copy + immagini
3. **Settimana 3**: Crea pagine Servizi, Portfolio
4. **Settimana 4**: Form contatti + Analytics

---

**Tempo totale setup: ~15 minuti**  
**Deploy live: ~5 minuti**

Good luck! 🚀
