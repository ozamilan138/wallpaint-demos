// The demo notice. The WhatsApp and call buttons open it when the config has no number.
// It shows the message that the button will send, so the visitor can see that the button works.

import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react'
import { Check, Copy, Info, X } from 'lucide-react'
import { business } from '../config/business'

type NoticeKind = 'whatsapp' | 'phone'

interface NoticeState {
  show: (kind: NoticeKind, message?: string) => void
}

const NoticeContext = createContext<NoticeState | null>(null)

export function NoticeProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const [kind, setKind] = useState<NoticeKind>('whatsapp')
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const show = useCallback((k: NoticeKind, msg = '') => {
    returnFocus.current = document.activeElement as HTMLElement | null
    setKind(k)
    setMessage(msg)
    setCopied(false)
    dialogRef.current?.showModal()
  }, [])

  const close = () => dialogRef.current?.close()

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const title = kind === 'whatsapp' ? 'WhatsApp is not set up yet' : 'The phone number is not set up yet'

  return (
    <NoticeContext.Provider value={{ show }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="notice-title"
        className="notice m-auto w-[min(34rem,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] overflow-y-auto overscroll-contain rounded-card bg-paper p-0 text-ink overlay-dialog backdrop:bg-ink/55"
        onClose={() => returnFocus.current?.focus()}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          {['#8FA98F', '#DCE7DB', '#E9DCC7', '#C78269', '#A9BDC9'].map((c) => (
            <span key={c} className="h-3 flex-1" style={{ background: c }} />
          ))}
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="notice-title" className="font-heading text-2xl font-bold leading-tight">
              {title}
            </h2>
            <button
              type="button"
              onClick={close}
              className="-mr-2 -mt-1 grid size-11 shrink-0 place-items-center rounded-full text-ink hover:bg-sage-soft"
              aria-label="Close"
            >
              <X aria-hidden="true" className="size-6" />
            </button>
          </div>
          <p className="mt-3 flex gap-2 text-base text-muted">
            <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-sage-deep" />
            <span>
              This is a demo website. When {business.name} adds{' '}
              {kind === 'whatsapp' ? 'its WhatsApp number' : 'its phone number'} to the settings, this button{' '}
              {kind === 'whatsapp' ? 'opens WhatsApp with the message below.' : 'starts a phone call.'}
            </span>
          </p>
          {kind === 'whatsapp' && message && (
            <>
              <p className="mt-6 font-ui text-sm font-semibold text-ink">The message that WhatsApp will show</p>
              <pre className="mt-2 max-h-64 overflow-auto whitespace-pre-wrap rounded-card bg-ground p-4 font-body text-base leading-relaxed text-ink">
                {message}
              </pre>
            </>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {kind === 'whatsapp' && message && (
              <button type="button" onClick={copy} className="btn btn-primary">
                {copied ? <Check aria-hidden="true" className="size-5" /> : <Copy aria-hidden="true" className="size-5" />}
                {copied ? 'Message Copied' : 'Copy Message'}
              </button>
            )}
            <button type="button" onClick={close} className="btn btn-soft">
              Close
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? 'The message is copied.' : ''}
          </p>
        </div>
      </dialog>
    </NoticeContext.Provider>
  )
}

export function useNotice(): NoticeState {
  const ctx = useContext(NoticeContext)
  if (!ctx) throw new Error('useNotice must be inside NoticeProvider')
  return ctx
}
