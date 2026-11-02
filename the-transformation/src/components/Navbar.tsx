import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { business, messages } from '../config/business'
import { ContactAction } from './ContactAction'
import { WhatsAppIcon } from './WhatsAppIcon'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-baseline gap-1.5 font-display leading-none" translate="no">
      <span className={`text-[22px] font-extrabold tracking-[-0.04em] ${light ? 'text-white' : 'text-ink'}`}>
        Aureline
      </span>
      <span className={`text-[13px] font-semibold tracking-[-0.01em] ${light ? 'text-white/80' : 'text-muted-ink'}`}>
        Painting Co.
      </span>
    </span>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll, move focus into the menu, and close it with Escape.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector<HTMLElement>('a, button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
      if (e.key === 'Tab' && panel.current) {
        const items = panel.current.querySelectorAll<HTMLElement>('a, button')
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
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled || open
  const linkTone = solid ? 'text-ink hover:text-accent-strong' : 'text-white/90 hover:text-white'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        solid ? 'bg-paper shadow-[0_1px_0_rgba(23,25,24,0.08)]' : 'bg-transparent' /* taste-skill-ignore: sticky bar */
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-[72px] items-center justify-between gap-6">
        <a href="#home" className="relative z-10 rounded-sm" aria-label={`${business.name}, back to top`}>
          <Wordmark light={!solid} />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`text-[15px] font-medium transition-colors ${linkTone}`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ContactAction kind="whatsapp" message={messages.estimate} className="btn btn-accent hidden min-h-11 px-5 sm:inline-flex">
            Get an Estimate
          </ContactAction>
          <button
            ref={menuButton}
            type="button"
            className={`relative z-10 grid size-11 cursor-pointer place-items-center rounded-full lg:hidden ${
              solid ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          ref={panel}
          className="fixed inset-x-0 top-[72px] bottom-0 overflow-y-auto overscroll-contain bg-paper lg:hidden"
        >
          <div className="container-page flex min-h-full flex-col pt-6 pb-[calc(2rem+env(safe-area-inset-bottom))]">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-center font-display text-[30px] font-bold tracking-[-0.03em] text-ink hover:text-accent-strong"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3 pt-10">
              <ContactAction kind="whatsapp" message={messages.estimate} className="btn btn-accent w-full">
                <WhatsAppIcon className="size-5" />
                Get an Estimate on WhatsApp
              </ContactAction>
              <ContactAction kind="phone" className="btn btn-ghost-dark w-full">
                <Phone className="size-5" aria-hidden="true" />
                Call Now
              </ContactAction>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
