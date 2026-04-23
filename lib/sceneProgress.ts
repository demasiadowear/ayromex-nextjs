// Shared mutable ref for the current global scene progress (0..1)
// written by SceneDirector from a GSAP ScrollTrigger scrub and
// read from R3F useFrame loops that need to animate per frame
// without triggering React re-renders.
//
// The plain object wrapper lets consumers dereference `.current`
// exactly like a React ref, but without being tied to React's
// render cycle — crucial because the scroll scrub updates at
// ~60fps and we don't want every node in the constellation to
// re-render on every scroll tick.
export const sceneProgress = { current: 0 }
