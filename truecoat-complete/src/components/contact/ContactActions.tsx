import type { ReactNode } from 'react'
import { phoneUrl, whatsAppUrl } from '../../lib/whatsapp'
import { useContactNotice } from './ContactProvider'

interface ActionProps {
  className?: string
  children: ReactNode
  /** Accessible name, for buttons that show only an icon. */
  label?: string
}

/**
 * Opens WhatsApp with a prefilled message.
 * If the number is not configured, it is a button that opens the demo notice.
 */
export function WhatsAppAction({ message, className, children, label }: ActionProps & { message: string }) {
  const { showWhatsAppNotice } = useContactNotice()
  const url = whatsAppUrl(message)
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className} aria-label={label}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={() => showWhatsAppNotice(message)} className={className} aria-label={label}>
      {children}
    </button>
  )
}

/**
 * Calls the business.
 * If the number is not configured, it is a button that opens the demo notice.
 */
export function CallAction({ className, children, label }: ActionProps) {
  const { showPhoneNotice } = useContactNotice()
  const url = phoneUrl()
  if (url) {
    return (
      <a href={url} className={className} aria-label={label}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" onClick={showPhoneNotice} className={className} aria-label={label}>
      {children}
    </button>
  )
}
