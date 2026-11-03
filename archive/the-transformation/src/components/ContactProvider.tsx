import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Check, Copy, X } from 'lucide-react'
import type { ContactKind } from '../lib/contact'

type Notice = { kind: ContactKind; message?: string }

const NoticeContext = createContext<(notice: Notice) => void>(() => {})

export const useDemoNotice = () => useContext(NoticeContext)

const labels: Record<ContactKind, { title: string; field: string }> = {
  whatsapp: { title: 'WhatsApp is not set up yet', field: 'whatsapp' },
  phone: { title: 'The phone number is not set up yet', field: 'phone' },
  email: { title: 'The email address is not set up yet', field: 'email' },
}

/**
 * Shows a friendly dialog when a visitor uses a contact action and the
 * business has not configured that contact detail. No broken link opens.
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
    return () => window.removeEventListener('keydown', onKey)
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
          <div className="absolute inset-0 bg-dark/60" onClick={close} aria-hidden="true" />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-notice-title"
            aria-describedby="demo-notice-text"
            className="relative w-full max-w-md rounded-2xl bg-paper p-6 text-ink shadow-2xl sm:p-8" /* taste-skill-ignore: real dialog overlay */
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
            <p className="text-[15px] font-semibold text-accent-deep">Demo site</p>
            <h2 id="demo-notice-title" className="mt-1 pr-8 text-2xl font-bold tracking-tight">
              {labels[notice.kind].title}
            </h2>
            <p id="demo-notice-text" className="mt-3 text-[16px] leading-relaxed text-muted-ink">
              This is a demonstration website, so no contact detail is connected. To make this button
              work, add the <strong className="text-ink">{labels[notice.kind].field}</strong> value in{' '}
              <code className="rounded bg-paper-2 px-1.5 py-0.5 text-[14px]">src/config/business.ts</code>.
            </p>
            {notice.message && (
              <>
                <p className="mt-5 text-[14px] font-semibold">The message that would be sent:</p>
                <blockquote className="mt-2 rounded-xl bg-paper-2 p-4 text-[15px] leading-relaxed">
                  {notice.message}
                </blockquote>
              </>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              {notice.message && (
                <button type="button" onClick={copy} className="btn btn-dark">
                  {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
                  {copied ? 'Copied' : 'Copy message'}
                </button>
              )}
              <button type="button" onClick={close} className="btn btn-ghost-dark">
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
