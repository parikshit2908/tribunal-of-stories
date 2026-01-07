export default function useDeviceTier() {
  const memory = navigator.deviceMemory || 4
  const isFinePointer = window.matchMedia("(pointer: fine)").matches
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  if (reducedMotion) return "survival"
  if (isFinePointer && memory >= 8) return "cinema"
  if (memory >= 4) return "theatre"
  return "handheld"
}
