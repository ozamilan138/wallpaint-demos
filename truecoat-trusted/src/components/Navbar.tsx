import { useEffect, useRef, useState } from 'react'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { Logo } from './Logo'
import { CallButton, WhatsAppButton } from './contact/ContactActions'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The open menu locks the page scroll, closes with Escape and moves the focus to the first link.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the menu if the screen becomes wide.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = () => query.matches && setOpen(false)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-white shadow-nav' : 'bg-ground'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="wrap flex h-[4.5rem] items-center justify-between gap-4">
        <a href="#home" className="rounded-lg" aria-label="TrueCoat Painting Co., back to the top">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2.5 text-base font-medium text-ink transition-colors hover:bg-field hover:text-green-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#estimate" className="btn btn-primary hidden sm:inline-flex">
            Get a Free Estimate
          </a>
          <CallButton
            className="grid h-12 w-12 place-items-center rounded-full bg-field text-green-deep transition-colors hover:bg-amber-soft lg:hidden"
            ariaLabel="Call TrueCoat"
          >
            <Phone aria-hidden size={20} />
          </CallButton>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-12 w-12 place-items-center rounded-full text-ink transition-colors hover:bg-field lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden size={26} /> : <Menu aria-hidden size={26} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 overflow-y-auto overscroll-contain bg-white lg:hidden"
      >
        <div className="wrap flex min-h-full flex-col pt-4 pb-[calc(2rem+env(safe-area-inset-bottom))]">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-16 items-center rounded-2xl px-3 font-display text-2xl font-bold text-ink transition-colors hover:bg-field"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <a href="#estimate" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Get a Free Estimate
            </a>
            <div className="grid grid-cols-2 gap-3">
              <WhatsAppButton className="btn btn-secondary w-full">
                <MessageCircle aria-hidden size={20} />
                WhatsApp
              </WhatsAppButton>
              <CallButton className="btn btn-secondary w-full">
                <Phone aria-hidden size={20} />
                Call Now
              </CallButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
