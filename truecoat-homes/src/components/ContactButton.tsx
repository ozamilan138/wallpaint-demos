import type { ReactNode } from 'react'
import { Phone } from 'lucide-react'
import { messages, phoneHref, whatsappHref } from '../utils/contact'
import { useDemoNotice } from './ContactProvider'
import { WhatsAppIcon } from './WhatsAppIcon'

type Props = {
  kind: 'whatsapp' | 'phone'
  /** The prefilled WhatsApp message. The default is the general enquiry message. */
  message?: string
  className?: string
  children?: ReactNode
  /** Hide the icon, for text links. */
  plain?: boolean
  ariaLabel?: string
}

/**
 * A WhatsApp or call action. When the number is configured it is a real link.
 * When it is not, it is a button that opens the demo notice, so no broken link opens.
 */
export function ContactButton({ kind, message = messages.general, className = 'btn btn-accent', children, plain, ariaLabel }: Props) {
  const notify = useDemoNotice()
  const href = kind === 'whatsapp' ? whatsappHref(message) : phoneHref()
  const icon = plain ? null : kind === 'whatsapp' ? <WhatsAppIcon className="size-5 shrink-0" /> : <Phone className="size-5 shrink-0" aria-hidden="true" />
  const label = children ?? (kind === 'whatsapp' ? 'WhatsApp Us' : 'Call Now')

  if (href) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        {...(kind === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {icon}
        {label}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      data-demo-contact={kind}
      onClick={() => notify({ kind, message: kind === 'whatsapp' ? message : undefined })}
    >
      {icon}
      {label}
    </button>
  )
}
