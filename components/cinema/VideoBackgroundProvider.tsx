'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type VideoSectionId =
  | 'hero'
  | 'products'
  | 'process'
  | 'cta'
  | 'empty'

interface VideoBackgroundContextValue {
  activeId: VideoSectionId
  setActiveId: (id: VideoSectionId) => void
}

const VideoBackgroundContext = createContext<VideoBackgroundContextValue | null>(
  null,
)

interface ProviderProps {
  children: ReactNode
  defaultId?: VideoSectionId
}

// Wraps the homepage so every section below can report itself as
// the current video background target. The currently active
// section id lives in a single state and is broadcast to the
// VideoBackground component that sits at the top of the tree.
export function VideoBackgroundProvider({
  children,
  defaultId = 'hero',
}: ProviderProps) {
  const [activeId, setActiveId] = useState<VideoSectionId>(defaultId)

  const value = useMemo(
    () => ({ activeId, setActiveId }),
    [activeId],
  )

  return (
    <VideoBackgroundContext.Provider value={value}>
      {children}
    </VideoBackgroundContext.Provider>
  )
}

export function useVideoBackground() {
  const ctx = useContext(VideoBackgroundContext)
  if (!ctx) {
    throw new Error(
      'useVideoBackground must be used inside <VideoBackgroundProvider>',
    )
  }
  return ctx
}
