import { MessageCircle, Phone } from 'lucide-react'
import { CallAction, WhatsAppAction } from './contact/ContactActions'

// A faint edge on a fixed bar that floats over the page.
const barEdge = 'shadow-[0_-1px_0_rgba(40,39,34,0.1)]' // taste-skill-ignore

/** A fixed contact bar for phones and small tablets. The main element adds bottom padding of the same height. */
export function MobileActionBar() {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 bg-paper px-3 pt-2 lg:hidden ${barEdge}`}
      style={{ paddingBottom: 'calc(0.5rem + env(safe-area-inset-bottom))' }}
    >
      <WhatsAppAction className="btn btn-dark min-h-[52px] w-full px-3" ariaLabel="Contact us on WhatsApp">
        <MessageCircle aria-hidden size={19} />
        WhatsApp
      </WhatsAppAction>
      <CallAction className="btn btn-outline min-h-[52px] w-full px-3" ariaLabel="Call us now">
        <Phone aria-hidden size={19} />
        Call Now
      </CallAction>
    </div>
  )
}
