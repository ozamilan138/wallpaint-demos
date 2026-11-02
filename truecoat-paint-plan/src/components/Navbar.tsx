import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { defaultMessage } from '../lib/whatsapp'
import { CallButton, WhatsAppButton } from './ContactButtons'
import { Logo } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu with Escape, and keep the focus inside the open menu.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && panelRef.current) {
        const items = [toggleRef.current, ...panelRef.current.querySelectorAll<HTMLElement>('a, button')].filter(
          Boolean,
        ) as HTMLElement[]
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
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the menu first, then scroll. The page layout changes when the menu closes,
  // so a scroll that starts while the menu is open can stop at the wrong place.
  const goTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        document.querySelector(href)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
        history.pushState(null, '', href)
      }),
    )
  }

  // Close the menu if the window becomes wide.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 bg-ground/97 transition-shadow duration-200 ${scrolled || open ? 'overlay-bar-down' : ''}`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-ui focus:text-paper"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#home" className="flex min-h-11 shrink-0 items-center rounded-md" aria-label="TrueCoat Painting Co., go to the top">
          <Logo />
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2.5 font-ui text-[1rem] font-medium text-ink transition-colors hover:bg-sage-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#estimate" className="btn btn-primary hidden min-h-11 px-5 sm:inline-flex">
            Get an Estimate
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-12 place-items-center rounded-full bg-sage-soft text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close the menu' : 'Open the menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" className="size-6" /> : <Menu aria-hidden="true" className="size-6" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto overscroll-contain bg-ground lg:hidden"
      >
        <div className="paint-strip" aria-hidden="true">
          <span className="bg-sage-deep" />
          <span className="bg-sage" />
          <span className="bg-sage-soft" />
          <span className="bg-beige" />
          <span className="bg-terracotta" />
          <span className="bg-blue" />
        </div>
        <ul className="wrap flex flex-col py-4">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => goTo(e, l.href)}
                className="flex min-h-14 items-center rounded-card px-2 font-heading text-2xl font-bold text-ink hover:bg-sage-soft"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="wrap flex flex-col gap-3 pb-10">
          <a href="#estimate" onClick={(e) => goTo(e, '#estimate')} className="btn btn-dark w-full">
            Get an Estimate
          </a>
          <div className="grid grid-cols-2 gap-3">
            <WhatsAppButton message={defaultMessage} className="btn btn-primary w-full">
              WhatsApp
            </WhatsAppButton>
            <CallButton className="btn btn-soft w-full" />
          </div>
        </div>
      </div>
    </header>
  )
}
