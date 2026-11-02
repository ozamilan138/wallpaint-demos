import { useEffect } from 'react'

/**
 * Adds the class "is-visible" to each [data-reveal] element when it enters the viewport.
 * The hidden start state applies only after this hook runs, so content stays visible without JavaScript.
 */
export function useReveal(): void {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    // Elements that are already on screen do not animate. This prevents a flash at load.
    const viewportBottom = window.innerHeight
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < viewportBottom * 0.9) el.classList.add('is-visible')
    })
    root.classList.add('js-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    elements.forEach((el) => {
      if (!el.classList.contains('is-visible')) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
}
