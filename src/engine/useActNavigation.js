export function nextAct(current, max) {
  if (current < max) return current + 1
  return current
}

export function prevAct(current) {
  if (current > 0) return current - 1
  return current
}
