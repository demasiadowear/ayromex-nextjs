'use client'

import {
  FiPhoneCall,
  FiSend,
  FiRefreshCcw,
  FiShare2,
  FiBarChart2,
  FiGitBranch,
} from 'react-icons/fi'
import ProductDeepDiveSection, {
  type ProductDeepDiveFeature,
} from './ProductDeepDiveSection'

const FEATURES: ProductDeepDiveFeature[] = [
  { key: 'voice', Icon: FiPhoneCall },
  { key: 'whatsapp', Icon: FiSend },
  { key: 'reactivation', Icon: FiRefreshCcw },
  { key: 'network', Icon: FiShare2 },
  { key: 'crm', Icon: FiBarChart2 },
  { key: 'workflow', Icon: FiGitBranch },
]

export default function AyroHubDeepDiveSection() {
  return (
    <ProductDeepDiveSection productId="ayrohub" features={FEATURES} />
  )
}
