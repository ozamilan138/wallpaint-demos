import type { ReactNode } from 'react'
import { phoneHref, whatsappHref } from '../lib/contact'
import { useDemoNotice } from './ContactProvider'

type Props = {
  kind: 'whatsapp' | 'phone'
  /** The prefilled WhatsApp message. Not used for phone calls. */
  message?: string
  className?: string
  children: ReactNode
  'aria-label'?: string
}

/**
 * A WhatsApp or phone call action. When the contact detail is configured, it is a real link.
 * When it is not configured, it is a button that opens the demo notice.
 */
export function ContactAction({ kind, message = '', className, children, ...aria }: Props) {
  const showNotice = useDemoNotice()
  const href = kind === 'whatsapp' ? whatsappHref(message) : phoneHref()

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(kind === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...aria}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => showNotice({ kind, message: kind === 'whatsapp' ? message : undefined })}
      {...aria}
    >
      {children}
    </button>
  )
}
