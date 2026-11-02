import { createContext, useCallback, useContext, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Check, Copy, MessageCircle, Phone, X } from 'lucide-react'

type Channel = 'whatsapp' | 'phone'

interface Notice {
  channel: Channel
  message?: string
}

interface ContactContextValue {
  showDemoNotice: (notice: Notice) => void
}

const ContactContext = createContext<ContactContextValue | null>(null)

export function useContactNotice(): ContactContextValue {
  const value = useContext(ContactContext)
  if (!value) throw new Error('useContactNotice must be used inside ContactProvider')
  return value
}

/**
 * Shows a friendly notice when a contact channel is not configured.
 * The native dialog element keeps the focus inside and closes with the Escape key.
 */
export function ContactProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [notice, setNotice] = useState<Notice | null>(null)
  const [copied, setCopied] = useState(false)

  const showDemoNotice = useCallback((next: Notice) => {
    setNotice(next)
    setCopied(false)
    dialogRef.current?.showModal()
  }, [])

  const close = () => dialogRef.current?.close()

  const copyMessage = async () => {
    if (!notice?.message) return
    try {
      await navigator.clipboard.writeText(notice.message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const isWhatsApp = notice?.channel === 'whatsapp'

  return (
    <ContactContext.Provider value={{ showDemoNotice }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="demo-notice-title"
        aria-describedby="demo-notice-text"
        className="demo-dialog m-auto w-[min(32rem,calc(100vw-2rem))] bg-white p-0 text-ink shadow-dialog"
        onClick={(event) => {
          // A click on the backdrop closes the dialog.
          if (event.target === dialogRef.current) close()
        }}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-field text-green-deep">
              {isWhatsApp ? <MessageCircle aria-hidden size={24} /> : <Phone aria-hidden size={24} />}
            </span>
            <button
              type="button"
              onClick={close}
              className="-m-1 grid h-11 w-11 place-items-center rounded-full text-ink transition-colors hover:bg-field"
              aria-label="Close"
            >
              <X aria-hidden size={22} />
            </button>
          </div>
          <h2 id="demo-notice-title" className="mt-5 text-2xl font-bold leading-tight">
            {isWhatsApp ? 'WhatsApp is not connected yet' : 'The phone number is not added yet'}
          </h2>
          <p id="demo-notice-text" className="mt-3 text-muted">
            This is a demo website. The business owner adds the{' '}
            {isWhatsApp ? 'WhatsApp number' : 'phone number'} in <code className="text-[0.92em] text-ink">src/data/config.ts</code>.
            After that, this button {isWhatsApp ? 'opens WhatsApp with the message below.' : 'starts a phone call.'}
          </p>

          {isWhatsApp && notice?.message && (
            <div className="mt-6">
              <p className="text-sm font-medium text-ink">Your message</p>
              <p className="mt-2 max-h-56 overflow-y-auto rounded-2xl bg-field p-4 text-base leading-relaxed whitespace-pre-line text-ink">
                {notice.message}
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {isWhatsApp && notice?.message && (
              <button type="button" onClick={copyMessage} className="btn btn-primary">
                {copied ? <Check aria-hidden size={18} /> : <Copy aria-hidden size={18} />}
                {copied ? 'Message Copied' : 'Copy Message'}
              </button>
            )}
            <button type="button" onClick={close} className="btn btn-secondary">
              Close
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? 'The message is copied.' : ''}
          </p>
        </div>
      </dialog>
    </ContactContext.Provider>
  )
}
