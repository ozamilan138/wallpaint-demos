import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, defaultWhatsAppMessage } from '../config/business'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { emailUrl } from '../lib/contact'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const email = emailUrl()

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-night text-paper">
      <div className="page-x mx-auto grid max-w-page gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-end">
        <div>
          <SectionHeading id="contact-title" title="Your Home Deserves a Beautiful Finish." tone="light">
            Let’s discuss how we can bring your walls to life.
          </SectionHeading>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppAction message={defaultWhatsAppMessage} className="btn btn-light w-full sm:w-auto">
              <MessageCircle aria-hidden size={18} />
              Talk on WhatsApp
            </WhatsAppAction>
            <CallAction className="btn btn-outline-light w-full sm:w-auto">
              <Phone aria-hidden size={18} />
              Call Now
            </CallAction>
          </div>
        </div>

        <ul className="grid gap-3 text-[16px] text-mist lg:justify-self-end">
          <li className="flex items-center gap-3">
            <Phone aria-hidden size={18} className="shrink-0 text-sand" />
            {business.phone || 'Phone number to be added'}
          </li>
          <li className="flex items-center gap-3">
            <MessageCircle aria-hidden size={18} className="shrink-0 text-sand" />
            {business.whatsapp || 'WhatsApp number to be added'}
          </li>
          <li className="flex items-center gap-3">
            <Mail aria-hidden size={18} className="shrink-0 text-sand" />
            {email ? (
              <a href={email} className="underline underline-offset-4 hover:text-paper">
                {business.email}
              </a>
            ) : (
              'Email to be added'
            )}
          </li>
          <li className="flex items-center gap-3">
            <MapPin aria-hidden size={18} className="shrink-0 text-sand" />
            {business.serviceLocations.length > 0
              ? `Serving ${business.serviceLocations.join(', ')}`
              : 'Service areas to be added'}
          </li>
        </ul>
      </div>
    </section>
  )
}
