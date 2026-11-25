import { createContext, useCallback, useContext, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { MessageCircle, Phone, X } from 'lucide-react'

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
 * The native dialog element gives focus containment and the Escape key.
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
        className="demo-dialog w-[min(34rem,calc(100vw-2rem))] bg-paper p-0 text-ink"
        onClick={(event) => {
          // A click on the backdrop closes the dialog.
          if (event.target === dialogRef.current) close()
        }}
      >
        {/* The content renders only when the notice opens. Then search engines do not read the demo text as page text. */}
        {notice && (
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-center gap-3 text-bronze-deep">
              {isWhatsApp ? <MessageCircle aria-hidden size={22} /> : <Phone aria-hidden size={22} />}
              <span className="text-sm font-medium">Demo website</span>
            </div>
            <button
              type="button"
              onClick={close}
              className="-m-2 grid h-11 w-11 place-items-center text-ink transition-colors hover:text-bronze-deep"
              aria-label="Close notice"
            >
              <X aria-hidden size={20} />
            </button>
          </div>
          <h2 id="demo-notice-title" className="mt-4 font-serif text-3xl font-semibold leading-tight">
            {isWhatsApp ? 'WhatsApp is not connected yet' : 'The phone number is not set yet'}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink">
            {isWhatsApp
              ? 'This is a demo version of the website. When the business adds its WhatsApp number, this button opens a chat with the message below already written.'
              : 'This is a demo version of the website. When the business adds its phone number, this button starts a call on your phone.'}
          </p>
          {notice?.message && (
            <>
              <blockquote className="mt-5 bg-linen p-4 text-[15px] leading-relaxed text-ink">
                {notice.message}
              </blockquote>
              <p className="sr-only" aria-live="polite">
                {copied ? 'Message copied' : ''}
              </p>
            </>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {notice?.message && (
              <button type="button" onClick={copyMessage} className="btn btn-dark">
                {copied ? 'Message copied' : 'Copy message'}
              </button>
            )}
            <button type="button" onClick={close} className="btn btn-outline">
              Close
            </button>
          </div>
          <p className="mt-5 text-sm text-muted">
            For the site owner: add the details in <code className="text-ink">src/config/business.ts</code>.
          </p>
        </div>
        )}
      </dialog>
    </ContactContext.Provider>
  )
}
