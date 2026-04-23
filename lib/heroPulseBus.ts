// Tiny in-memory event bus that bridges the WebGL hero scene to
// the DOM TaskTicker overlay. Both components live as siblings
// under the same hero section but communicate via this singleton
// instead of lifting state through the page tree.

export interface HeroPulseEvent {
  from: string
  to: string
}

type Listener = (event: HeroPulseEvent) => void

const listeners = new Set<Listener>()

export const heroPulseBus = {
  emit(event: HeroPulseEvent) {
    listeners.forEach((fn) => fn(event))
  },
  subscribe(fn: Listener) {
    listeners.add(fn)
    return () => {
      listeners.delete(fn)
    }
  },
}
