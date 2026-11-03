import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/content'
import { WhatsAppAction, CallAction } from './contact/ContactActions'
import { estimateMessage } from '../lib/contact'
import { Wordmark } from './Wordmark'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Lock the page scroll and listen for Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the mobile menu if the viewport becomes wide.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const onChange = () => query.matches && setOpen(false)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper">
      <nav aria-label="Main" className="page-x mx-auto flex h-[68px] max-w-page items-center justify-between gap-6">
        <a href="#top" className="shrink-0" aria-label="Aureline Painting Co., back to top" onClick={() => setOpen(false)}>
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="py-2 text-[15px] text-muted transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <WhatsAppAction message={estimateMessage} className="btn btn-dark hidden min-h-[44px] whitespace-nowrap px-5 sm:inline-flex">
            Get a Free Estimate
          </WhatsAppAction>
          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 grid h-11 w-11 place-items-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[68px] z-40 overflow-y-auto overscroll-contain bg-paper lg:hidden"
      >
        <div className="page-x flex min-h-full flex-col pb-[calc(2rem+env(safe-area-inset-bottom))] pt-4">
          <ul className="flex flex-col divide-y divide-ink/10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(event) => {
                    // Release the scroll lock before the page scrolls to the section.
                    event.preventDefault()
                    document.body.style.overflow = ''
                    setOpen(false)
                    const target = document.getElementById(item.href.slice(1))
                    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
                    target?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
                    history.replaceState(null, '', item.href)
                  }}
                  className="flex min-h-[56px] items-center text-[20px] font-medium text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto grid gap-3 pt-10">
            <WhatsAppAction message={estimateMessage} className="btn btn-dark w-full">
              Get a Free Estimate
            </WhatsAppAction>
            <CallAction className="btn btn-outline w-full">Call Now</CallAction>
          </div>
        </div>
      </div>
    </header>
  )
}
