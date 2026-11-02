import { messages } from '../utils/whatsapp'
import { ContactButton } from './ContactButton'

/**
 * The fixed contact bar on phones. The footer has bottom padding of the same height,
 * so the bar never covers the end of the page.
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 bg-white px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(32,40,36,0.12)] md:hidden" /* taste-skill-ignore: the bar floats over the page */
      role="region"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-2.5">
        <ContactButton kind="whatsapp" message={messages.general} className="btn btn-green min-h-13 w-full text-[18px]" />
        <ContactButton kind="phone" className="btn btn-dark min-h-13 w-full text-[18px]" />
      </div>
    </div>
  )
}
