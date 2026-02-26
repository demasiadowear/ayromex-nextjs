// Root layout — minimal shell required by Next.js.
// All rendering (html, body, fonts, cursor) is handled in app/[locale]/layout.tsx
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
