import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { CallButton, WhatsAppButton } from './ContactButtons'
import { Logo } from './Logo'
import { usePlanner } from '../lib/planner'
import { generalMessage, plannerMessage } from '../lib/messages'

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#explore', label: 'Explore Colours' },
  { href: '#services', label: 'Services' },
  { href: '#inspiration', label: 'Our Work' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const { state, count } = usePlanner()
  const message = () => (count > 0 ? plannerMessage(state) : generalMessage())

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu on Escape, keep focus inside it, and stop the page from scrolling under it.
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const focusables = () =>
      Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])
    focusables()[0]?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      const items = [toggleRef.current, ...focusables()].filter(Boolean) as HTMLElement[]
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const close = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('resize', close)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', close)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-40 bg-ground transition-shadow duration-200 ${scrolled || open ? 'shadow-[0_1px_0_rgb(40_51_45/0.08)]' : ''}`} /* taste-skill-ignore: the sticky bar after scroll. */
    >
      <a
        href="#main"
        className="font-ui sr-only rounded-full bg-ink px-5 py-3 font-semibold text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="container-page flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#top" className="shrink-0 rounded-md" aria-label="TrueCoat Painting Co., back to top">
          <Logo />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.slice(1).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-ui rounded-full px-3 py-2.5 text-[15px] font-semibold text-ink/80 transition-colors hover:bg-surface hover:text-ink xl:px-4"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-primary hidden min-h-11 px-5 sm:inline-flex">
            Get an Estimate
          </a>
          <WhatsAppButton
            message={message}
            className="btn btn-secondary size-12 px-0 lg:hidden"
            aria-label="Message TrueCoat on WhatsApp"
          >
            {null}
          </WhatsAppButton>
          <button
            ref={toggleRef}
            type="button"
            className="btn btn-ink size-12 px-0 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto overscroll-contain bg-ground lg:hidden"
      >
        <div className="container-page flex min-h-full flex-col pt-4 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display flex min-h-14 items-center rounded-xl px-2 text-[1.6rem] font-bold tracking-tight hover:bg-surface"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3 pt-8">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Get an Estimate
            </a>
            <div className="grid grid-cols-2 gap-3">
              <WhatsAppButton message={message} className="btn btn-secondary w-full">
                WhatsApp
              </WhatsAppButton>
              <CallButton className="btn btn-secondary w-full" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
