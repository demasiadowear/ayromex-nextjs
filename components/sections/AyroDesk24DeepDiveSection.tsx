'use client'

import {
  FiMessageCircle,
  FiCalendar,
  FiBookmark,
  FiUsers,
  FiBell,
  FiList,
} from 'react-icons/fi'
import ProductDeepDiveSection, {
  type ProductDeepDiveFeature,
} from './ProductDeepDiveSection'

const FEATURES: ProductDeepDiveFeature[] = [
  { key: 'conversations', Icon: FiMessageCircle },
  { key: 'bookings', Icon: FiCalendar },
  { key: 'memory', Icon: FiBookmark },
  { key: 'escalation', Icon: FiUsers },
  { key: 'reminders', Icon: FiBell },
  { key: 'crm', Icon: FiList },
]

export default function AyroDesk24DeepDiveSection() {
  return (
    <ProductDeepDiveSection productId="ayrodesk24" features={FEATURES} />
  )
}
