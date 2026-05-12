'use client'

import {
  FiMessageSquare,
  FiKey,
  FiGlobe,
  FiCheckSquare,
  FiStar,
  FiTrendingUp,
} from 'react-icons/fi'
import ProductDeepDiveSection, {
  type ProductDeepDiveFeature,
} from './ProductDeepDiveSection'

const FEATURES: ProductDeepDiveFeature[] = [
  { key: 'messaging', Icon: FiMessageSquare },
  { key: 'checkin', Icon: FiKey },
  { key: 'multilingual', Icon: FiGlobe },
  { key: 'cleaning', Icon: FiCheckSquare },
  { key: 'reviews', Icon: FiStar },
  { key: 'upsell', Icon: FiTrendingUp },
]

export default function AyroStayDeepDiveSection() {
  return (
    <ProductDeepDiveSection productId="ayrostay" features={FEATURES} />
  )
}
