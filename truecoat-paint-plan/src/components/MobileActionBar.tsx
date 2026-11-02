import { usePlan } from '../lib/plan'
import { defaultMessage, plannerMessage } from '../lib/whatsapp'
import { CallButton, WhatsAppButton } from './ContactButtons'

/**
 * The fixed WhatsApp and call bar on a phone. The body has a bottom padding of the same
 * height (see index.css), so the bar never covers the end of the page.
 */
export function MobileActionBar() {
  const plan = usePlan()
  const message = plan.count > 0 ? plannerMessage(plan) : defaultMessage
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 bg-paper/97 px-3 pt-2.5 overlay-bar-up md:hidden"
      style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
      role="region"
      aria-label="Quick contact"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
        <WhatsAppButton message={message} className="btn btn-primary min-h-13 w-full px-3">
          WhatsApp
        </WhatsAppButton>
        <CallButton className="btn btn-dark min-h-13 w-full px-3" />
      </div>
    </div>
  )
}
