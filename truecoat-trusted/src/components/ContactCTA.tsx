import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/config'
import { emailUrl, isPhoneConfigured, isWhatsAppConfigured } from '../utils/whatsapp'
import { CallButton, WhatsAppButton } from './contact/ContactActions'
import { EnquiryForm } from './EnquiryForm'

export function ContactCTA() {
  const email = emailUrl()
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-green-dark py-20 text-white lg:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="contact-title" data-reveal className="text-[1.75rem] leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            Planning to Refresh Your Home?
          </h2>
          <p data-reveal className="mt-6 max-w-md text-lg leading-relaxed text-white/85">
            Tell us what you have in mind. Let's discuss your painting requirements and find the right solution.
          </p>
          <div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <WhatsAppButton className="btn btn-amber text-base">
              <MessageCircle aria-hidden size={20} />
              WhatsApp Us
            </WhatsAppButton>
            <CallButton className="btn btn-light text-base">
              <Phone aria-hidden size={20} />
              Call Now
            </CallButton>
          </div>

          <dl className="mt-12 grid gap-5 text-white/85">
            <div className="flex items-start gap-3">
              <Phone aria-hidden size={20} className="mt-1 shrink-0 text-amber" />
              <div>
                <dt className="font-semibold text-white">Phone and WhatsApp</dt>
                <dd>
                  {isPhoneConfigured() || isWhatsAppConfigured()
                    ? [business.phone, business.whatsapp].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).join(' / ')
                    : 'Not added yet. This is a demo website.'}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail aria-hidden size={20} className="mt-1 shrink-0 text-amber" />
              <div>
                <dt className="font-semibold text-white">Email</dt>
                <dd>
                  {email ? (
                    <a href={email} className="underline underline-offset-4 hover:text-white">
                      {business.email}
                    </a>
                  ) : (
                    'Not added yet.'
                  )}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin aria-hidden size={20} className="mt-1 shrink-0 text-amber" />
              <div>
                <dt className="font-semibold text-white">Service areas</dt>
                <dd>{business.serviceLocations.length > 0 ? business.serviceLocations.join(', ') : 'To be confirmed.'}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div id="estimate" data-reveal className="scroll-mt-24 rounded-[1.75rem] bg-white p-6 text-ink sm:p-8 lg:col-span-7">
          <h3 id="estimate-title" className="text-2xl font-extrabold sm:text-3xl">
            Get a Free Estimate
          </h3>
          <p className="mt-2 mb-7 text-muted">
            Fill in the details. We turn them into a WhatsApp message, so you only need to press send.
          </p>
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
