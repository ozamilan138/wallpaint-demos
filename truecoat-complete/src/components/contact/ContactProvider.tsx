import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { Check, Copy, MessageCircle, Phone, X } from 'lucide-react'
import { business } from '../../data/config'

/**
 * The demo notice.
 * When the WhatsApp number or the phone number is not configured, the contact buttons open this dialog.
 * The dialog shows the message that the button will send after the owner adds the number.
 */
type Notice = { kind: 'whatsapp'; message: string } | { kind: 'phone' }

interface ContactContextValue {
  showWhatsAppNotice: (message: string) => void
  showPhoneNotice: () => void
}

const ContactContext = createContext<ContactContextValue | null>(null)

export function useContactNotice(): ContactContextValue {
  const ctx = useContext(ContactContext)
  if (!ctx) throw new Error('useContactNotice must be used inside ContactProvider')
  return ctx
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const [notice, setNotice] = useState<Notice | null>(null)
  const [copied, setCopied] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const returnFocusRef = useRef<HTMLElement | null>(null)

  const open = useCallback((n: Notice) => {
    returnFocusRef.current = document.activeElement as HTMLElement | null
    setCopied(false)
    setNotice(n)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (notice && !dialog.open) dialog.showModal()
  }, [notice])

  const close = useCallback(() => {
    dialogRef.current?.close()
  }, [])

  const onClose = useCallback(() => {
    setNotice(null)
    returnFocusRef.current?.focus()
  }, [])

  const copy = useCallback(async () => {
    if (notice?.kind !== 'whatsapp') return
    try {
      await navigator.clipboard.writeText(notice.message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }, [notice])

  const value: ContactContextValue = {
    showWhatsAppNotice: (message) => open({ kind: 'whatsapp', message }),
    showPhoneNotice: () => open({ kind: 'phone' }),
  }

  return (
    <ContactContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={onClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
        aria-labelledby="notice-title"
        /* The dialog is a real overlay, so it keeps its shadow. taste-skill-ignore */
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(34rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-2xl bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/55" /* taste-skill-ignore */
      >
        {notice && (
          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-ground-2 text-green-ink">
                {notice.kind === 'whatsapp' ? <MessageCircle aria-hidden size={22} /> : <Phone aria-hidden size={22} />}
              </span>
              <button
                type="button"
                onClick={close}
                className="-mr-2 -mt-2 inline-flex size-11 items-center justify-center rounded-full text-muted hover:bg-ground-2"
                aria-label="Close"
              >
                <X aria-hidden size={22} />
              </button>
            </div>
            <h2 id="notice-title" className="mt-4 text-2xl font-extrabold leading-tight">
              This is a demo website
            </h2>
            {notice.kind === 'whatsapp' ? (
              <>
                <p className="mt-3 text-muted">
                  The WhatsApp number of {business.name} is not added yet. After the owner adds it, this button opens
                  WhatsApp with the message below, ready to send.
                </p>
                <p className="mt-5 text-sm font-semibold">Message preview</p>
                <pre className="mt-2 max-h-64 overflow-y-auto whitespace-pre-wrap break-words rounded-xl bg-ground-2 p-4 font-sans text-base leading-relaxed">
                  {notice.message}
                </pre>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={copy} className="btn btn-secondary">
                    {copied ? <Check aria-hidden size={18} /> : <Copy aria-hidden size={18} />}
                    {copied ? 'Message Copied' : 'Copy Message'}
                  </button>
                  <button type="button" onClick={close} className="btn btn-primary">
                    Close
                  </button>
                </div>
                <p className="sr-only" aria-live="polite">
                  {copied ? 'The message is copied to the clipboard.' : ''}
                </p>
              </>
            ) : (
              <>
                <p className="mt-3 text-muted">
                  The phone number of {business.name} is not added yet. After the owner adds it, this button calls the
                  business directly.
                </p>
                <div className="mt-6">
                  <button type="button" onClick={close} className="btn btn-primary">
                    Close
                  </button>
                </div>
              </>
            )}
            <p className="mt-6 text-sm text-muted">
              Owner: add the numbers in <code className="font-mono text-[0.85em]">src/data/config.ts</code>.
            </p>
          </div>
        )}
      </dialog>
    </ContactContext.Provider>
  )
}
