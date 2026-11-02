import type { ReactNode } from 'react'
import { Phone } from 'lucide-react'
import { messages, phoneHref, whatsappHref } from '../utils/whatsapp'
import { useDemoNotice } from './ContactProvider'
import { WhatsAppIcon } from './WhatsAppIcon'

type Props = {
  kind: 'whatsapp' | 'phone'
  /** The prefilled WhatsApp message. The phone button ignores it. */
  message?: string
  className?: string
  children?: ReactNode
  /** Set to false to hide the icon. */
  icon?: boolean
  'aria-label'?: string
}

/**
 * A WhatsApp or call button. With a configured number it is a real link.
 * Without one it is a button that opens the demo notice.
 */
export function ContactButton({ kind, message = messages.general, className = 'btn btn-green', children, icon = true, ...rest }: Props) {
  const notice = useDemoNotice()
  const href = kind === 'whatsapp' ? whatsappHref(message) : phoneHref()
  const content = (
    <>
      {icon && (kind === 'whatsapp' ? <WhatsAppIcon className="size-5 shrink-0" /> : <Phone className="size-5 shrink-0" aria-hidden="true" />)}
      {children ?? (kind === 'whatsapp' ? 'WhatsApp Us' : 'Call Now')}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={className}
        aria-label={rest['aria-label']}
        {...(kind === 'whatsapp' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      aria-label={rest['aria-label']}
      aria-haspopup="dialog"
      onClick={() => notice({ kind, message: kind === 'whatsapp' ? message : undefined })}
    >
      {content}
    </button>
  )
}
