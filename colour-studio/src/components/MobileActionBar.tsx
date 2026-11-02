import { CallButton, PhoneIcon, WhatsAppButton, WhatsAppIcon } from './ContactButtons'

/**
 * A fixed bar with WhatsApp and call actions on small screens.
 * A spacer of the same height at the end of the page keeps the footer visible.
 */
export function MobileActionBar({ message }: { message: string }) {
  return (
    <>
      <div aria-hidden className="h-[calc(5rem+env(safe-area-inset-bottom))] bg-ink lg:hidden" />
      <div
        role="region"
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-30 bg-cream px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] overlay-bar-bottom lg:hidden"
      >
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-3">
          <WhatsAppButton message={message} className="btn btn-primary min-h-13 w-full px-3">
            <WhatsAppIcon />
            WhatsApp
          </WhatsAppButton>
          <CallButton className="btn btn-secondary min-h-13 w-full px-3">
            <PhoneIcon className="size-5" aria-hidden />
            Call Now
          </CallButton>
        </div>
      </div>
    </>
  )
}
