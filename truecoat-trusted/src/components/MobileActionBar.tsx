import { MessageCircle, Phone } from 'lucide-react'
import { CallButton, WhatsAppButton } from './contact/ContactActions'

/**
 * The fixed contact bar on phones. The footer has a bottom padding that is taller than
 * the bar (see Footer.tsx), so the bar never covers the page content.
 */
export function MobileActionBar() {
  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-30 bg-white px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-bar md:hidden"
    >
      <div className="grid grid-cols-2 gap-3">
        <WhatsAppButton className="btn btn-primary w-full">
          <MessageCircle aria-hidden size={20} />
          WhatsApp
        </WhatsAppButton>
        <CallButton className="btn btn-secondary w-full">
          <Phone aria-hidden size={20} />
          Call Now
        </CallButton>
      </div>
    </div>
  )
}
