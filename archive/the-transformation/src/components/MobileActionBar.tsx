import { Phone } from 'lucide-react'
import { messages } from '../config/business'
import { ContactAction } from './ContactAction'
import { WhatsAppIcon } from './WhatsAppIcon'

/**
 * A fixed contact bar for small screens. The page body has bottom padding of the same
 * height (the "has-action-bar" class), so the bar never covers the footer.
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 bg-paper px-3 pt-2.5 shadow-[0_-1px_0_rgba(23,25,24,0.1)] md:hidden" /* taste-skill-ignore: sticky bar */
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
    >
      <div className="grid grid-cols-2 gap-2.5" role="group" aria-label="Contact Aureline">
        <ContactAction kind="whatsapp" message={messages.general} className="btn btn-accent min-h-[52px] w-full text-[16px]">
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </ContactAction>
        <ContactAction kind="phone" className="btn btn-dark min-h-[52px] w-full text-[16px]">
          <Phone className="size-5" aria-hidden="true" />
          Call Now
        </ContactAction>
      </div>
    </div>
  )
}
