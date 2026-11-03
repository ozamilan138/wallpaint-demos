import type { CSSProperties } from 'react'

/** Gives an element with data-reveal a stagger position. Each step adds 80 ms of delay. */
export function delay(i: number): CSSProperties {
  return { '--reveal-i': i } as CSSProperties
}
