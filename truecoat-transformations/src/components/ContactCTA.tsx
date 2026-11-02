import { Mail, MapPin } from 'lucide-react'
import { business } from '../data/config'
import { photos } from '../data/photos'
import { useReveal } from '../hooks/useReveal'
import { emailHref, messages } from '../utils/whatsapp'
import { ContactButton } from './ContactButton'
import { ContactForm } from './ContactForm'
import { Picture } from './Picture'

export function ContactCTA() {
  const ref = useReveal<HTMLElement>()
  const mail = emailHref('Painting enquiry')
  return (
    <section ref={ref} id="contact" aria-labelledby="contact-title" className="bg-green py-24 text-white sm:py-32 lg:py-36">
      <div className="frame grid gap-12 xl:grid-cols-12 xl:gap-10">
        <div className="xl:col-span-5">
          <h2 id="contact-title" className="reveal text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[1] font-extrabold">
            Have a Project in Mind?
          </h2>
          <p className="reveal mt-6 max-w-[40ch] text-[18px] leading-relaxed text-white" style={{ ['--d' as string]: '80ms' }}>
            Tell us about your home and what you would like to improve. We&rsquo;ll help you discuss the next steps.
          </p>
          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row" style={{ ['--d' as string]: '140ms' }}>
            <ContactButton kind="whatsapp" message={messages.estimate} className="btn btn-light" />
            <ContactButton kind="phone" className="btn btn-outline-light" />
          </div>

          <div className="reveal mt-12 flex items-start gap-5" style={{ ['--d' as string]: '200ms' }}>
            <div className="size-24 shrink-0 overflow-hidden bg-green-deep sm:size-32">
              <Picture photo={photos.contactTray} sizes="128px" className="h-full w-full object-cover" />
            </div>
            <ul className="grid gap-3 text-[16px] leading-snug">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <span>
                  {business.serviceLocations.length > 0 ? `We work in ${business.serviceLocations.join(', ')}.` : 'Service areas: to be confirmed by the owner.'}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                {mail ? (
                  <a href={mail} className="underline underline-offset-4">
                    {business.email}
                  </a>
                ) : (
                  <span>Email: to be added.</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="reveal xl:col-span-7" style={{ ['--d' as string]: '120ms' }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
