import { CallButton, WhatsAppButton } from './ContactButtons'
import { EnquiryForm } from './EnquiryForm'
import { Img } from './Img'
import { usePlanner } from '../lib/planner'
import { generalMessage, plannerMessage } from '../lib/messages'
import { useReveal } from '../lib/useReveal'

export function ContactCTA() {
  const { state, count } = usePlanner()
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-gap bg-beige-soft">
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <div ref={ref} className="reveal">
            <h2 id="contact-title" className="h2 max-w-[40rem]">
              Whatever Your Style, Let’s Find the Right Solution
            </h2>
            <p className="lead">Share your ideas and requirements. We’ll help you discuss your next painting project.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message={() => (count > 0 ? plannerMessage(state) : generalMessage())}
                className="btn btn-primary min-h-14 px-7 text-[17px]"
              >
                WhatsApp Us
              </WhatsAppButton>
              <CallButton className="btn btn-secondary min-h-14 px-7 text-[17px]" />
            </div>
          </div>
          <div className="mt-10 aspect-[16/10] overflow-hidden rounded-[var(--radius-photo)] bg-surface">
            <Img
              name="cta-living"
              alt="A warm living room with white walls, a gallery of photos, plants and a leather sofa"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
