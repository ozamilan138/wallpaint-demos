import { ContactButton } from './ContactButton'

/**
 * A fixed WhatsApp and Call bar on phones. The page has matching bottom padding
 * (the .pb-action-bar class on the footer), so the bar never covers content.
 */
export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 bg-paper px-3 pt-2.5 md:hidden"
      style={{ paddingBottom: 'calc(10px + env(safe-area-inset-bottom))', boxShadow: '0 -1px 0 rgba(37,46,41,0.12)' }}
    >
      <nav aria-label="Quick contact" className="grid grid-cols-2 gap-2.5">
        <ContactButton kind="whatsapp" className="btn btn-accent min-h-[52px] w-full">
          WhatsApp
        </ContactButton>
        <ContactButton kind="phone" className="btn btn-dark min-h-[52px] w-full">
          Call Now
        </ContactButton>
      </nav>
    </div>
  )
}
