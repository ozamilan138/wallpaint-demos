const INK = '#28332D'
const WHITE = '#FFFFFF'
/** A darker ink for mid-tone swatches where the normal ink is below 4.5:1. */
const DEEP_INK = '#111814'

function channel(value: number) {
  const c = value / 255
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
}

/** Relative luminance as WCAG 2 defines it. */
export function luminance(hex: string) {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = (n >> 16) & 255
  const g = (n >> 8) & 255
  const b = n & 255
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b)
}

export function contrastRatio(a: string, b: string) {
  const la = luminance(a)
  const lb = luminance(b)
  const [hi, lo] = la > lb ? [la, lb] : [lb, la]
  return (hi + 0.05) / (lo + 0.05)
}

/**
 * Returns a text colour for a swatch label with at least 4.5:1 contrast where
 * possible: the ink colour first, then white, then a darker ink.
 */
export function readableTextOn(hex: string) {
  if (contrastRatio(hex, INK) >= 4.5) return INK
  if (contrastRatio(hex, WHITE) >= 4.5) return WHITE
  return contrastRatio(hex, DEEP_INK) >= contrastRatio(hex, WHITE) ? DEEP_INK : WHITE
}
