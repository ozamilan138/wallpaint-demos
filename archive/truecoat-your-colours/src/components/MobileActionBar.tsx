import { CallButton, WhatsAppButton } from './ContactButtons'
import { usePlanner } from '../lib/planner'
import { generalMessage, plannerMessage } from '../lib/messages'

/**
 * A fixed WhatsApp and Call bar on small screens. The footer has bottom
 * padding of the same height, so the bar never covers content.
 */
export function MobileActionBar() {
  const { state, count } = usePlanner()
  return (
    <div data-mobile-bar className="fixed inset-x-0 bottom-0 z-30 bg-white/95 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-6px_24px_-12px_rgb(40_51_45/0.35)] lg:hidden" /* taste-skill-ignore: the fixed bar floats over the page. */>
      <div className="mx-auto grid max-w-xl grid-cols-2 gap-2.5">
        <WhatsAppButton
          message={() => (count > 0 ? plannerMessage(state) : generalMessage())}
          className="btn btn-primary min-h-13 w-full px-3"
        >
          WhatsApp
        </WhatsAppButton>
        <CallButton className="btn btn-ink min-h-13 w-full px-3" />
      </div>
    </div>
  )
}
