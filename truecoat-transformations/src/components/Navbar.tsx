import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { messages } from '../utils/whatsapp'
import { ContactButton } from './ContactButton'
import { Logo } from './Logo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu when the screen becomes wide enough for the full navigation.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const on = () => mq.matches && setOpen(false)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (e.key === 'Tab' && panelRef.current) {
        const items = [toggleRef.current, ...Array.from(panelRef.current.querySelectorAll<HTMLElement>('a, button'))].filter(Boolean) as HTMLElement[]
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
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-200 ${scrolled || open ? 'bg-white' : 'bg-paper'}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-dark focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to Content
      </a>
      <nav aria-label="Main" className="frame flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#home" className="-ml-1 flex min-h-11 items-center rounded-lg px-1" aria-label="TrueCoat Painting Co., back to the top">
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center rounded-full px-3.5 font-ui text-[16px] font-medium text-ink transition-colors hover:bg-mist xl:px-4"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-green hidden min-h-11 px-5 text-[15px] sm:inline-flex">
            Get an Estimate
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid size-12 cursor-pointer place-items-center rounded-full text-ink hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close the menu' : 'Open the menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto overscroll-contain bg-white lg:hidden"
        >
          <div className="frame flex min-h-full flex-col pt-4 pb-[calc(2rem+env(safe-area-inset-bottom))]">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-center font-display text-[26px] font-bold tracking-tight text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto grid gap-3 pt-8">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-dark w-full">
                Get an Estimate
              </a>
              <div className="grid grid-cols-2 gap-3">
                <ContactButton kind="whatsapp" message={messages.general} className="btn btn-green w-full">
                  WhatsApp
                </ContactButton>
                <ContactButton kind="phone" className="btn btn-outline w-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
