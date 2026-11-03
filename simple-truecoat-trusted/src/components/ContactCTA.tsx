import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/config'
import { emailUrl, isPhoneConfigured, isWhatsAppConfigured } from '../utils/whatsapp'
import { CallButton, WhatsAppButton } from './contact/ContactActions'
import { EnquiryForm } from './EnquiryForm'

export function ContactCTA() {
  const email = emailUrl()
  const numbers = [business.phone, business.whatsapp].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i)
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-16 lg:py-20">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 id="contact-title" className="section-title">
            Planning to Refresh Your Home?
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/85">
            Tell us what you have in mind. We will discuss your painting needs and find the right solution.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <WhatsAppButton className="btn btn-primary">
              <MessageCircle aria-hidden size={20} />
              WhatsApp Us
            </WhatsAppButton>
            <CallButton className="btn btn-secondary">
              <Phone aria-hidden size={20} />
              Call Now
            </CallButton>
          </div>

          <dl className="mt-10 grid gap-4 text-ink/85">
            <div className="flex items-start gap-3">
              <Phone aria-hidden size={20} className="mt-0.5 shrink-0 text-green-deep" />
              <div>
                <dt className="font-semibold text-ink">Phone and WhatsApp</dt>
                <dd>
                  {isPhoneConfigured() || isWhatsAppConfigured() ? numbers.join(' / ') : 'Not added yet. This is a demo website.'}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail aria-hidden size={20} className="mt-0.5 shrink-0 text-green-deep" />
              <div>
                <dt className="font-semibold text-ink">Email</dt>
                <dd>
                  {email ? (
                    <a href={email} className="underline underline-offset-4 hover:text-green-deep">
                      {business.email}
                    </a>
                  ) : (
                    'Not added yet.'
                  )}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin aria-hidden size={20} className="mt-0.5 shrink-0 text-green-deep" />
              <div>
                <dt className="font-semibold text-ink">Service areas</dt>
                <dd>{business.serviceLocations.length > 0 ? business.serviceLocations.join(', ') : 'To be confirmed.'}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div id="estimate" className="scroll-mt-24 rounded-3xl bg-field p-6 sm:p-8 lg:col-span-7">
          <h3 id="estimate-title" className="text-2xl font-extrabold">
            Get a Free Estimate
          </h3>
          <p className="mt-1.5 mb-6 text-muted-strong">
            Fill in the details. We turn them into a WhatsApp message, so you only need to press send.
          </p>
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
