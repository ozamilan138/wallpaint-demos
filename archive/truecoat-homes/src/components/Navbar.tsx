import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business } from '../data/config'
import { ContactButton } from './ContactButton'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Our Process' },
  { href: '#contact', label: 'Contact' },
]

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span translate="no" className={`flex items-center gap-2.5 font-display text-[19px] font-extrabold tracking-[-0.02em] ${light ? 'text-white' : 'text-ink'}`}>
      <svg viewBox="0 0 32 32" className="size-8 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill={light ? '#F7F8F6' : '#252E29'} />
        <rect x="7" y="8" width="18" height="7" rx="2" fill="#527D62" />
        <rect x="14" y="15" width="4" height="10" rx="1.5" fill="#D49A61" />
      </svg>
      <span>
        TrueCoat<span className="sr-only"> Painting Co.</span>
        <span aria-hidden="true" className={`ml-1.5 hidden font-ui text-[15px] font-medium tracking-normal sm:inline ${light ? 'text-white/85' : 'text-muted'}`}>
          Painting Co.
        </span>
      </span>
    </span>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The mobile menu: lock the page, close with Escape and keep focus inside.
  useEffect(() => {
    if (!open) return
    const html = document.documentElement
    html.style.overflow = 'hidden'
    menuRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && menuRef.current) {
        const items = [toggleRef.current, ...menuRef.current.querySelectorAll<HTMLElement>('a, button')].filter(Boolean) as HTMLElement[]
        const i = items.indexOf(document.activeElement as HTMLElement)
        if (e.shiftKey && i <= 0) {
          e.preventDefault()
          items[items.length - 1].focus()
        } else if (!e.shiftKey && i === items.length - 1) {
          e.preventDefault()
          items[0].focus()
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      html.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const solid = scrolled || open
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color] duration-200 ${
        solid ? 'bg-paper text-ink' : 'on-photo bg-transparent text-white'
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-10 focus:rounded-lg focus:bg-paper focus:px-4 focus:py-3 focus:text-ink">
        Skip to content
      </a>
      <nav className="shell flex h-[68px] items-center justify-between gap-4" aria-label="Main">
        <a href="#top" className="shrink-0 rounded-md" aria-label={`${business.name}, back to top`} onClick={() => setOpen(false)}>
          <Logo light={!solid} />
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-3.5 py-2.5 font-ui text-[16px] font-medium transition-colors duration-150 ${
                  solid ? 'text-ink hover:bg-ink/5' : 'text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ContactButton
            kind="whatsapp"
            className={`btn min-h-11 px-3 sm:px-4 ${solid ? 'text-ink ring-2 ring-ink/15 ring-inset hover:bg-ink/5' : 'bg-white/10 text-white ring-2 ring-white/50 ring-inset hover:bg-white/20'}`}
            ariaLabel="WhatsApp us"
          >
            <span className="hidden xl:inline">WhatsApp</span>
          </ContactButton>
          <a href="#contact" className="btn btn-accent hidden min-h-11 px-5 sm:inline-flex">
            Request an Estimate
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={`grid size-11 cursor-pointer place-items-center rounded-full lg:hidden ${solid ? 'hover:bg-ink/5' : 'hover:bg-white/10'}`}
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
          ref={menuRef}
          id="mobile-menu"
          className="fixed inset-x-0 top-[68px] bottom-0 overflow-y-auto overscroll-contain bg-paper text-ink lg:hidden"
        >
          <div className="shell flex min-h-full flex-col pt-4 pb-[calc(24px+env(safe-area-inset-bottom))]">
            <ul>
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-center rounded-lg font-display text-[26px] font-bold tracking-[-0.02em] hover:text-accent-deep"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3 pt-8">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-accent w-full">
                Request an Estimate
              </a>
              <div className="grid grid-cols-2 gap-3">
                <ContactButton kind="whatsapp" className="btn btn-outline-dark w-full">
                  WhatsApp
                </ContactButton>
                <ContactButton kind="phone" className="btn btn-outline-dark w-full">
                  Call
                </ContactButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
