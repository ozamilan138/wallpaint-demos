import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Check, Copy, X } from 'lucide-react'
import type { ContactKind } from '../utils/contact'

type Notice = { kind: ContactKind; message?: string }

const NoticeContext = createContext<(notice: Notice) => void>(() => {})

export const useDemoNotice = () => useContext(NoticeContext)

const titles: Record<ContactKind, string> = {
  whatsapp: 'WhatsApp is not connected yet',
  phone: 'The phone number is not added yet',
  email: 'The email address is not added yet',
}

/**
 * Shows a friendly dialog when a visitor uses a contact action and the business
 * has not configured that contact detail. No broken link opens.
 */
export function ContactProvider({ children }: { children: ReactNode }) {
  const [notice, setNotice] = useState<Notice | null>(null)
  const [copied, setCopied] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)

  const open = useCallback((n: Notice) => {
    returnFocus.current = document.activeElement as HTMLElement | null
    setCopied(false)
    setNotice(n)
  }, [])

  const close = useCallback(() => {
    setNotice(null)
    returnFocus.current?.focus()
  }, [])

  useEffect(() => {
    if (!notice) return
    closeRef.current?.focus()
    const html = document.documentElement
    const previous = html.style.overflow
    html.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      // Keep keyboard focus inside the dialog.
      if (e.key === 'Tab' && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll<HTMLElement>('button')
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
      html.style.overflow = previous
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
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
          <div className="absolute inset-0 bg-ink/60" onClick={close} aria-hidden="true" />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-notice-title"
            aria-describedby="demo-notice-text"
            className="relative max-h-[calc(100svh-24px)] w-full max-w-md overflow-y-auto overscroll-contain rounded-2xl bg-paper p-6 text-ink sm:p-8"
            style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="absolute top-3 right-3 grid size-11 cursor-pointer place-items-center rounded-full hover:bg-ink/5"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
            <p className="font-ui text-[15px] font-semibold text-accent-deep">Demo website</p>
            <h2 id="demo-notice-title" className="mt-1 pr-10 text-[24px] leading-tight font-bold">
              {titles[notice.kind]}
            </h2>
            <p id="demo-notice-text" className="mt-3 text-[16px] text-muted">
              This is a demonstration website, so no contact detail is connected. The owner adds the{' '}
              <strong className="text-ink">{notice.kind}</strong> value in{' '}
              <code className="rounded bg-mist px-1.5 py-0.5 text-[14px]">src/data/config.ts</code>, and then this
              button opens {notice.kind === 'whatsapp' ? 'WhatsApp with the message below' : 'the phone app'}.
            </p>
            {notice.message && (
              <>
                <p className="mt-5 font-ui text-[15px] font-semibold">The message that this button sends:</p>
                <blockquote className="mt-2 rounded-xl bg-mist p-4 text-[15px] whitespace-pre-line">
                  {notice.message}
                </blockquote>
              </>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              {notice.message && (
                <button type="button" onClick={copy} className="btn btn-dark">
                  {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy Message'}
                </button>
              )}
              <button type="button" onClick={close} className="btn btn-outline-dark">
                Close
              </button>
            </div>
            <p className="sr-only" aria-live="polite">
              {copied ? 'Message copied to the clipboard' : ''}
            </p>
          </div>
        </div>
      )}
    </NoticeContext.Provider>
  )
}
