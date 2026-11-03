import { MessageCircle, Phone } from 'lucide-react'
import { generalMessage } from '../lib/whatsapp'
import { CallAction, WhatsAppAction } from './contact/ContactActions'

/**
 * The fixed contact bar on small screens.
 * The footer has extra bottom padding of the same height, so the bar does not cover content.
 */
export function MobileActionBar() {
  return (
    <div
      role="region"
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-30 bg-ground/97 px-3 pb-[calc(0.6rem+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-1px_0_rgba(38,51,45,0.1),0_-8px_24px_rgba(38,51,45,0.08)] lg:hidden" /* The bar is fixed over the page. taste-skill-ignore */
    >
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2.5">
        <WhatsAppAction message={generalMessage} className="btn btn-primary min-h-[3.25rem]">
          <MessageCircle aria-hidden size={20} />
          WhatsApp
        </WhatsAppAction>
        <CallAction className="btn btn-dark min-h-[3.25rem]">
          <Phone aria-hidden size={20} />
          Call Now
        </CallAction>
      </div>
    </div>
  )
}
