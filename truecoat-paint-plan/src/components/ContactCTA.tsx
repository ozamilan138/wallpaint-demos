import { Mail, MapPin } from 'lucide-react'
import { business } from '../config/business'
import { usePlan } from '../lib/plan'
import { defaultMessage, plannerMessage } from '../lib/whatsapp'
import { CallButton, WhatsAppButton } from './ContactButtons'
import { Img } from './Img'

/** The final call to action: a reply card on a dark field. */
export function ContactCTA() {
  const plan = usePlan()
  const message = plan.count > 0 ? plannerMessage(plan) : defaultMessage
  return (
    <section id="contact" aria-labelledby="contact-title" className="overflow-hidden bg-ink pt-20 text-paper sm:pt-28">
      <div className="wrap grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-14">
        <div className="pb-0 lg:pb-20">
          <Img
            name="cta-roller"
            alt="A paint tray and roller with white paint on a table near a window"
            sizes="(min-width: 1024px) 36vw, 100vw"
            className="aspect-[16/10] w-full rounded-card"
          />
          <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-sage-soft">
            One message is enough to start. Tell us the rooms and the look you want, and we will reply with the next
            steps.
          </p>
        </div>
        {/* The reply card. Its lower edge runs past the section, so the section cuts it. */}
        <div className="relative -mb-10 rounded-card bg-paper p-7 text-ink sm:rotate-[1.5deg] sm:p-12">
          <h2 id="contact-title" className="h-section max-w-[16ch]">
            Have an Idea for Your Home?
          </h2>
          <p className="mt-5 max-w-[34rem] text-lg leading-relaxed">
            Whether you already know your colours or need a little guidance, let’s discuss your painting requirements.
          </p>
          <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <WhatsAppButton message={message} className="btn btn-primary min-h-14 px-7 text-[1.0625rem]" />
            <CallButton className="btn btn-soft min-h-14 px-7 text-[1.0625rem]" />
          </div>
          {plan.count > 0 && (
            <p className="mt-4 text-base text-muted">Your colour plan is added to the WhatsApp message.</p>
          )}
          {(business.email || business.serviceLocations.length > 0) && (
            <ul className="mt-8 grid gap-2 text-base">
              {business.email && (
                <li className="flex items-center gap-2">
                  <Mail aria-hidden="true" className="size-5 text-sage-deep" />
                  <a href={`mailto:${business.email}`} className="underline underline-offset-2">
                    {business.email}
                  </a>
                </li>
              )}
              {business.serviceLocations.length > 0 && (
                <li className="flex items-center gap-2">
                  <MapPin aria-hidden="true" className="size-5 text-sage-deep" />
                  Serving {business.serviceLocations.join(', ')}
                </li>
              )}
            </ul>
          )}
          <div className="h-10" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
