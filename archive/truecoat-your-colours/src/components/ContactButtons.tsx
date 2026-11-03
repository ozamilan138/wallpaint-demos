import type { ReactNode } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { hasPhone, hasWhatsApp, phoneUrl, whatsappUrl } from '../lib/contact'
import { useDemoNotice } from './ContactProvider'

interface ButtonProps {
  className?: string
  children?: ReactNode
  /** Hide the icon, for example in a text link. */
  noIcon?: boolean
  'aria-label'?: string
}

/**
 * A WhatsApp button. With a configured number it is a real wa.me link.
 * Without a number it opens the demo notice. The message is read when the
 * user clicks, so that it always contains the latest choices.
 */
export function WhatsAppButton({
  message,
  className = 'btn btn-primary',
  children = 'WhatsApp Us',
  noIcon,
  ...rest
}: ButtonProps & { message: string | (() => string) }) {
  const notify = useDemoNotice()
  const text = () => (typeof message === 'function' ? message() : message)
  const icon = noIcon ? null : <MessageCircle className="size-5 shrink-0" aria-hidden />

  if (hasWhatsApp) {
    return (
      <a
        href={whatsappUrl(text())}
        onClick={(e) => {
          // Rebuild the link on click, so that it contains the latest choices.
          e.currentTarget.href = whatsappUrl(text())
        }}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={rest['aria-label']}
      >
        {icon}
        {children}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      onClick={() => notify({ kind: 'whatsapp', message: text() })}
      aria-label={rest['aria-label']}
      aria-haspopup="dialog"
    >
      {icon}
      {children}
    </button>
  )
}

export function CallButton({ className = 'btn btn-secondary', children = 'Call Now', noIcon, ...rest }: ButtonProps) {
  const notify = useDemoNotice()
  const icon = noIcon ? null : <Phone className="size-5 shrink-0" aria-hidden />
  if (hasPhone) {
    return (
      <a href={phoneUrl} className={className} aria-label={rest['aria-label']}>
        {icon}
        {children}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      onClick={() => notify({ kind: 'phone' })}
      aria-label={rest['aria-label']}
      aria-haspopup="dialog"
    >
      {icon}
      {children}
    </button>
  )
}
