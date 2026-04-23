'use client'

import { useEffect, useMemo, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import {
  useVideoBackground,
  type VideoSectionId,
} from './VideoBackgroundProvider'

export interface VideoSource {
  id: VideoSectionId
  src: string
  poster?: string
}

interface Props {
  videos: VideoSource[]
  // Fade duration in seconds. Default 1.0.
  fadeSeconds?: number
}

// Fullscreen fixed crossfading video layer. Every source in
// `videos` is mounted once and kept alive; only the one matching
// the active section id is visible. Neighbours are faded to 0
// via CSS transition so the active video swap reads as a 1s
// ease-in-out crossfade rather than a cut.
//
// The entire layer is pointer-events-none and sits at z-index 0;
// it is expected to live at the top of a page that has its
// content at z-index >= 10. A dark gradient overlay is painted
// on top so large type in the sections stays legible.
export default function VideoBackground({ videos, fadeSeconds = 1 }: Props) {
  const { activeId } = useVideoBackground()
  const reduceMotion = useReducedMotion() ?? false
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})

  // Ensure the active video is playing and inactive ones pause to
  // save decode cycles. Browsers may also throttle hidden videos;
  // this still helps with multiple large sources mounted at once.
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (!video) return
      if (id === activeId) {
        const playPromise = video.play()
        if (playPromise && typeof playPromise.catch === 'function') {
          // Swallow the "play() interrupted" promise rejections that
          // happen on rapid autoplay + pause cycles.
          playPromise.catch(() => undefined)
        }
      } else {
        video.pause()
      }
    })
  }, [activeId])

  // When activeId === 'empty' we hide every video, letting the
  // page body background show through for the footer "calm
  // landing" moment.
  const showVideos = activeId !== 'empty'

  const fadeStyle = useMemo(
    () => ({
      transition: `opacity ${fadeSeconds}s ease-in-out`,
    }),
    [fadeSeconds],
  )

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {videos.map((video) => {
        const isActive = showVideos && video.id === activeId
        return (
          <video
            key={video.id}
            ref={(el) => {
              videoRefs.current[video.id] = el
            }}
            src={video.src}
            poster={video.poster}
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            preload={video.id === 'hero' ? 'auto' : 'metadata'}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: isActive ? 1 : 0,
              ...(reduceMotion ? { transition: 'none' } : fadeStyle),
            }}
          />
        )
      })}

      {/* Dark gradient overlay so large type stays legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.25) 50%, rgba(10,10,10,0.75) 100%)',
          opacity: showVideos ? 1 : 0,
          transition: reduceMotion ? 'none' : `opacity ${fadeSeconds}s ease-in-out`,
        }}
      />
    </div>
  )
}
