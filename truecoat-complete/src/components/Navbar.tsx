import { useEffect, useRef, useState } from 'react'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { navLinks } from '../data/content'
import { generalMessage } from '../lib/whatsapp'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { Wordmark } from './Wordmark'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // While the menu is open: lock the page scroll, close on Escape, and keep focus inside the menu.
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    document.body.style.overflow = 'hidden'
    panel?.querySelector<HTMLElement>('a, button')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || !panel) return
      const items = [menuButtonRef.current, ...panel.querySelectorAll<HTMLElement>('a, button')].filter(
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
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled || open ? 'bg-ground shadow-[0_1px_0_rgba(38,51,45,0.08)]' : 'bg-ground' // The sticky bar floats over the page. taste-skill-ignore
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <nav aria-label="Main" className="container-page flex h-[4.25rem] items-center justify-between gap-4 lg:h-20">
        <a href="#home" className="shrink-0 rounded-md" aria-label="TrueCoat Painting Co., back to the top">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap rounded-full px-2.5 py-2.5 text-base font-medium xl:px-3.5 text-ink/85 transition-colors hover:bg-ground-2 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppAction
            message={generalMessage}
            label="Message us on WhatsApp"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ground-2 px-3 text-green-ink transition-colors hover:bg-[#e2e7df] sm:px-4"
          >
            <MessageCircle aria-hidden size={20} />
            <span className="hidden text-base font-semibold sm:inline lg:hidden xl:inline">WhatsApp</span>
          </WhatsAppAction>
          <a href="#estimate" className="btn btn-primary hidden min-h-11 whitespace-nowrap px-5 py-2.5 text-base lg:inline-flex">
            Request an Estimate
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-ground-2 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[4.25rem] overflow-y-auto overscroll-contain bg-ground lg:hidden"
      >
        <div className="container-page flex min-h-full flex-col pb-[calc(2rem+env(safe-area-inset-bottom))] pt-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center rounded-xl px-2 font-display text-2xl font-bold text-ink hover:bg-ground-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a href="#estimate" onClick={() => setOpen(false)} className="btn btn-primary">
              Request an Estimate
            </a>
            <div className="grid grid-cols-2 gap-3">
              <WhatsAppAction message={generalMessage} className="btn btn-secondary">
                <MessageCircle aria-hidden size={20} /> WhatsApp
              </WhatsAppAction>
              <CallAction className="btn btn-secondary">
                <Phone aria-hidden size={20} /> Call Now
              </CallAction>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
