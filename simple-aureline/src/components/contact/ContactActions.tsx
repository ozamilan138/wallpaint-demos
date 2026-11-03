import type { ReactNode } from 'react'
import { phoneUrl, whatsAppUrl } from '../../lib/contact'
import { defaultWhatsAppMessage } from '../../config/business'
import { useContactNotice } from './ContactProvider'

interface ActionProps {
  children: ReactNode
  className?: string
  ariaLabel?: string
}

/**
 * Opens WhatsApp with a prefilled message.
 * If the number is not configured, it shows the demo notice instead.
 */
export function WhatsAppAction({
  message = defaultWhatsAppMessage,
  children,
  className,
  ariaLabel,
}: ActionProps & { message?: string }) {
  const { showDemoNotice } = useContactNotice()
  const href = whatsAppUrl(message)

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      onClick={() => showDemoNotice({ channel: 'whatsapp', message })}
    >
      {children}
    </button>
  )
}

/** Starts a phone call. If the number is not configured, it shows the demo notice instead. */
export function CallAction({ children, className, ariaLabel }: ActionProps) {
  const { showDemoNotice } = useContactNotice()
  const href = phoneUrl()

  if (href) {
    return (
      <a href={href} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      aria-haspopup="dialog"
      onClick={() => showDemoNotice({ channel: 'phone' })}
    >
      {children}
    </button>
  )
}
