// The WhatsApp and call buttons that the whole website uses.
// With a number in the config, they are real links. Without a number, they open the demo notice.

import type { ReactNode } from 'react'
import { MessageCircle, Phone } from 'lucide-react'
import { useNotice } from '../lib/notice'
import { telUrl, whatsappUrl } from '../lib/whatsapp'

interface ButtonProps {
  className?: string
  children?: ReactNode
  /** Set to false to hide the icon. */
  icon?: boolean
}

export function WhatsAppButton({
  message,
  className = 'btn btn-primary',
  children = 'WhatsApp Us',
  icon = true,
}: ButtonProps & { message: string }) {
  const { show } = useNotice()
  const url = whatsappUrl(message)
  const content = (
    <>
      {icon && <MessageCircle aria-hidden="true" className="size-5 shrink-0" />}
      {children}
    </>
  )
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={className} onClick={() => show('whatsapp', message)}>
      {content}
    </button>
  )
}

export function CallButton({ className = 'btn btn-soft', children = 'Call Now', icon = true }: ButtonProps) {
  const { show } = useNotice()
  const url = telUrl()
  const content = (
    <>
      {icon && <Phone aria-hidden="true" className="size-5 shrink-0" />}
      {children}
    </>
  )
  if (url) {
    return (
      <a href={url} className={className}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={className} onClick={() => show('phone')}>
      {content}
    </button>
  )
}
