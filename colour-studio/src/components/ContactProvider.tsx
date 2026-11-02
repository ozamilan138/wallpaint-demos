import { useCallback, useRef, useState, type ReactNode } from 'react'
import { Check, Copy, X } from 'lucide-react'
import { business } from '../config/business'
import { DemoNoticeContext, type Notice } from '../lib/demoNotice'

export function ContactProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [notice, setNotice] = useState<Notice | null>(null)
  const [copied, setCopied] = useState(false)

  const open = useCallback((n: Notice) => {
    setNotice(n)
    setCopied(false)
    dialogRef.current?.showModal()
  }, [])

  const close = () => dialogRef.current?.close()

  const copy = async () => {
    if (!notice?.message) return
    try {
      await navigator.clipboard.writeText(notice.message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const isWhatsApp = notice?.kind === 'whatsapp'

  return (
    <DemoNoticeContext.Provider value={open}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="demo-notice-title"
        className="m-auto max-h-[calc(100dvh-2rem)] w-[min(34rem,calc(100vw-2rem))] overflow-y-auto overscroll-contain rounded-3xl bg-white p-0 text-ink overlay-dialog backdrop:bg-ink/50"
        onClick={(e) => {
          if (e.target === dialogRef.current) close()
        }}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="demo-notice-title" className="text-2xl font-bold tracking-tight">
              {isWhatsApp ? 'WhatsApp is not set up yet' : 'The phone number is not set up yet'}
            </h2>
            <button
              type="button"
              onClick={close}
              className="-mt-1 -mr-2 inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full hover:bg-paper"
              aria-label="Close notice"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <p className="mt-3 text-muted">
            This is a demo of the {business.name} website. When the business adds its{' '}
            {isWhatsApp ? 'WhatsApp number' : 'phone number'}, this button will{' '}
            {isWhatsApp ? 'open WhatsApp with the message below.' : 'start a phone call.'}
          </p>

          {isWhatsApp && notice?.message && (
            <>
              <p className="mt-5 text-sm font-semibold">Message that will be sent</p>
              <blockquote className="mt-2 rounded-2xl bg-paper p-4 text-[15px] leading-relaxed whitespace-pre-line">
                {notice.message}
              </blockquote>
            </>
          )}

          <p className="mt-5 text-sm text-muted">
            Owner: add the details in <code className="rounded bg-paper px-1.5 py-0.5 text-[13px]">src/config/business.ts</code>.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {isWhatsApp && notice?.message && (
              <button type="button" className="btn btn-secondary" onClick={copy}>
                {copied ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
                {copied ? 'Message Copied' : 'Copy Message'}
              </button>
            )}
            <button type="button" className="btn btn-primary" onClick={close}>
              Close
            </button>
          </div>
          <p className="sr-only" aria-live="polite">
            {copied ? 'Message copied' : ''}
          </p>
        </div>
      </dialog>
    </DemoNoticeContext.Provider>
  )
}
