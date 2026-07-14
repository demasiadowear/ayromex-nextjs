import { preload } from 'react-dom'
import HomeHero from '@/components/redesign/HomeHero'
import HomeTrust from '@/components/redesign/HomeTrust'
import HomeProducts from '@/components/redesign/HomeProducts'
import HomeHow from '@/components/redesign/HomeHow'
import HomeProof from '@/components/redesign/HomeProof'
import HomeCta from '@/components/redesign/HomeCta'

/**
 * Home — redesign 2026 "chiaro, caldo, umano". Sei sezioni, zero
 * logica: hero, trust Meta Tech Provider, prodotti, come funziona,
 * prova sociale, CTA finale.
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
      <HomeHero />
      <HomeTrust />
      <HomeProducts />
      <HomeHow />
      <HomeProof />
      <HomeCta />
    </main>
  )
}
