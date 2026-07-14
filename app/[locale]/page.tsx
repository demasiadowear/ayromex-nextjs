import { preload } from 'react-dom'
import HomeHero from '@/components/redesign/HomeHero'
import HomeTrust from '@/components/redesign/HomeTrust'
import HomeServiziWeb from '@/components/redesign/HomeServiziWeb'
import HomeProducts from '@/components/redesign/HomeProducts'
import HomeHow from '@/components/redesign/HomeHow'
import HomeProof from '@/components/redesign/HomeProof'
import HomeCta from '@/components/redesign/HomeCta'
import ScrollColorController from '@/components/redesign/ScrollColorController'

/**
 * Home — redesign 2026 "chiaro, caldo, umano", con profondità e
 * movimento. Due anime commerciali: prodotti (AyroDesk24/AyroHub) e
 * web agency (Siti web). Ordine: hero → trust Meta Tech Provider →
 * siti web ("prima lo vedi, poi decidi") → prodotti → come funziona
 * → prova sociale → CTA. Sezioni alternate chiaro/scuro/arancio.
 */
export default function HomePage() {
  // Il badge nel hero è candidato LCP: preload con priorità alta
  // così non accoda dietro a font e chunk JS.
  preload('/brand/logos/primary/tech-light.svg', {
    as: 'image',
    fetchPriority: 'high',
  })
  return (
    <main id="main" className="overflow-x-hidden">
      <ScrollColorController />
      <HomeHero />
      <HomeTrust />
      <HomeServiziWeb />
      <HomeProducts />
      <HomeHow />
      <HomeProof />
      <HomeCta />
    </main>
  )
}
