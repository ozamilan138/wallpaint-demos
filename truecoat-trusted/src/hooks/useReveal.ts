import { useEffect } from 'react'

/**
 * Shows each element with a `data-reveal` attribute when it enters the screen.
 * The hook adds the `reveal-ready` class only when script runs, so the content
 * stays visible if the script fails. Reduced motion is handled in the CSS.
 */
export function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!('IntersectionObserver' in window) || items.length === 0) return

    document.documentElement.classList.add('reveal-ready')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}
