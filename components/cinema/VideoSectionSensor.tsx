'use client'

import { useEffect, useRef } from 'react'
import {
  useVideoBackground,
  type VideoSectionId,
} from './VideoBackgroundProvider'

interface Props {
  id: VideoSectionId
  // Intersection ratio threshold at which this section takes over.
  threshold?: number
  children: React.ReactNode
  className?: string
}

// Wraps a section with an IntersectionObserver and reports itself
// as the active video-background target once it crosses the given
// threshold. Simpler than having each section re-implement the
// observer boilerplate.
export default function VideoSectionSensor({
  id,
  threshold = 0.45,
  children,
  className = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { setActiveId } = useVideoBackground()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setActiveId(id)
          }
        })
      },
      { threshold: [threshold] },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [id, setActiveId, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
