import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Check, Copy, X } from 'lucide-react'
import type { ContactKind } from '../utils/whatsapp'

type Notice = { kind: ContactKind; message?: string }

const NoticeContext = createContext<(notice: Notice) => void>(() => {})

/** Opens the demo notice. Contact buttons call it when a contact detail is not configured. */
export const useDemoNotice = () => useContext(NoticeContext)

const titles: Record<ContactKind, string> = {
  whatsapp: 'WhatsApp is not connected yet',
  phone: 'The phone number is not added yet',
  email: 'The email address is not added yet',
}
const fields: Record<ContactKind, string> = { whatsapp: 'whatsapp', phone: 'phone', email: 'email' }

/**
 * A friendly dialog for the demo. It opens when a visitor uses a contact button
 * and the business has not configured that contact detail. No broken link opens.
 */
export function ContactProvider({ children }: { children: ReactNode }) {
  const [notice, setNotice] = useState<Notice | null>(null)
  const [copied, setCopied] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)

  const open = useCallback((n: Notice) => {
    returnFocus.current = document.activeElement as HTMLElement | null
    setCopied(false)
    setNotice(n)
  }, [])

  const close = useCallback(() => {
    setNotice(null)
    returnFocus.current?.focus({ preventScroll: true })
  }, [])

  useEffect(() => {
    if (!notice) return
    closeRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        close()
        return
      }
      // Keep keyboard focus inside the dialog.
      if (e.key === 'Tab' && dialogRef.current) {
        const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button, [href]'))
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
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [notice, close])

  const copy = async () => {
    if (!notice?.message) return
    try {
      await navigator.clipboard.writeText(notice.message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <NoticeContext.Provider value={open}>
      {children}
      {notice && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
          <div className="absolute inset-0 bg-dark/65" onClick={close} aria-hidden="true" />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="notice-title"
            aria-describedby="notice-text"
            className="relative max-h-[92svh] w-full max-w-lg overflow-y-auto overscroll-contain rounded-t-3xl bg-white p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] text-ink shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:p-8" /* taste-skill-ignore: a real dialog floats */
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute top-3 right-3 grid size-12 cursor-pointer place-items-center rounded-full text-ink hover:bg-mist"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <p className="font-ui text-[15px] font-semibold text-green-deep">This is a demo website</p>
            <h2 id="notice-title" className="mt-1 pr-10 text-[26px] leading-tight font-extrabold">
              {titles[notice.kind]}
            </h2>
            <p id="notice-text" className="mt-3 text-[16px] leading-relaxed text-soft-ink">
              No real contact detail is connected, so this button does not open {notice.kind === 'whatsapp' ? 'WhatsApp' : 'a call'}. To make it work, add the{' '}
              <strong className="text-ink">{fields[notice.kind]}</strong> value in{' '}
              <code className="rounded bg-mist px-1.5 py-0.5 text-[14px] text-ink">src/data/config.ts</code>.
            </p>
            {notice.message && (
              <>
                <p className="mt-5 font-ui text-[15px] font-semibold">The message that this button sends:</p>
                <blockquote className="mt-2 rounded-2xl bg-mist p-4 text-[15px] leading-relaxed whitespace-pre-line">{notice.message}</blockquote>
              </>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              {notice.message && (
                <button type="button" onClick={copy} className="btn btn-green">
                  {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy Message'}
                </button>
              )}
              <button type="button" onClick={close} className="btn btn-outline">
                Close
              </button>
            </div>
            <p className="sr-only" aria-live="polite">
              {copied ? 'The message is copied to the clipboard.' : ''}
            </p>
          </div>
        </div>
      )}
    </NoticeContext.Provider>
  )
}
