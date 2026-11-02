import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { generalEnquiry } from '../lib/messages'
import { WhatsAppButton } from './ContactButtons'

export function Logo() {
  return (
    <a href="#home" className="inline-flex min-h-11 items-center gap-2.5 rounded-lg" aria-label="Aureline Painting Co., back to top">
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#292B27" />
        <rect x="7" y="7" width="5" height="18" rx="2" fill="#A7B69B" />
        <rect x="13.5" y="7" width="5" height="18" rx="2" fill="#C98168" />
        <rect x="20" y="7" width="5" height="18" rx="2" fill="#D9C5A8" />
      </svg>
      <span className="font-display text-[1.15rem] leading-none font-extrabold tracking-[-0.02em] whitespace-nowrap" translate="no">
        Aureline
        <span className="ml-1.5 font-semibold text-muted">Painting Co.</span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1280 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className={`sticky top-0 z-40 bg-cream transition-shadow duration-300 ${scrolled || open ? 'overlay-bar-top' : ''}`}>
      <nav aria-label="Main" className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.slice(1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-full px-3.5 text-[15px] font-medium text-ink/80 transition-colors duration-200 hover:bg-paper hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppButton message={generalEnquiry()} className="btn btn-primary hidden min-h-11 px-5 text-[15px] sm:inline-flex">
            Get an Estimate
          </WhatsAppButton>
          <button
            type="button"
            className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full hover:bg-paper xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="absolute inset-x-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto bg-cream overlay-menu xl:hidden">
        <ul className="container-page flex flex-col py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center text-xl font-semibold tracking-tight"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-page pb-6">
          <WhatsAppButton message={generalEnquiry()} className="btn btn-primary w-full">
            Get an Estimate
          </WhatsAppButton>
        </div>
      </div>
    </header>
  )
}
