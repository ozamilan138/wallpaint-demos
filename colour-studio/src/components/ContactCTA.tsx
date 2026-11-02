import { business } from '../config/business'
import { CallButton, PhoneIcon, WhatsAppButton, WhatsAppIcon } from './ContactButtons'
import { Img } from './Img'
import { Reveal } from './Section'

export function ContactCTA({ message }: { message: string }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="pb-20 sm:pb-28 lg:pb-36">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-[2rem] bg-terracotta lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
            <h2 id="contact-title" className="text-[2rem] leading-[1.06] font-extrabold tracking-[-0.035em] sm:text-[2.6rem] lg:text-[3.25rem]">
              Have a Colour in Mind? Let’s Bring It to Life.
            </h2>
            <p className="mt-5 max-w-md text-lg sm:text-xl">Tell us about your space and the look you want to create.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <WhatsAppButton message={message} className="btn btn-primary">
                <WhatsAppIcon />
                Share Your Ideas on WhatsApp
              </WhatsAppButton>
              <CallButton className="btn btn-light">
                <PhoneIcon className="size-5" aria-hidden />
                Call Now
              </CallButton>
            </div>
            {business.email && (
              <p className="mt-6 text-base">
                Or email{' '}
                <a className="font-semibold underline underline-offset-4" href={`mailto:${business.email}`}>
                  {business.email}
                </a>
              </p>
            )}
          </Reveal>
          <div className="relative min-h-72 sm:min-h-96">
            <Img
              name="cta-room"
              alt="Calm grey living room with a sofa, a round coffee table and soft daylight"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
