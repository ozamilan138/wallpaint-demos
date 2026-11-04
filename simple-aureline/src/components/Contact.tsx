import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business, defaultWhatsAppMessage } from '../config/business'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { emailUrl } from '../lib/contact'
import { SectionHeading } from './SectionHeading'
import { ArchMark } from './Wordmark'

const digits = (value: string) => value.replace(/\D/g, '')
// When one number is used for calls and WhatsApp, the site shows it once.
const sameNumber = business.phone !== '' && digits(business.phone) === digits(business.whatsapp)

const rowLabel = 'text-[12px] font-semibold uppercase tracking-[0.18em] text-sand'
const rowValue = 'mt-1 block text-[20px] text-paper'

export function Contact() {
  const email = emailUrl()

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-night text-paper">
      {/* A large, faint brand arch behind the content. */}
      <ArchMark className="pointer-events-none absolute -bottom-16 -right-10 h-[22rem] w-[22rem] text-paper/[0.04] sm:h-[30rem] sm:w-[30rem]" />

      <div className="page-x relative mx-auto grid max-w-page gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:items-end">
        <div>
          <SectionHeading id="contact-title" title="Your Home Deserves a Beautiful Finish." tone="light">
            Tell us about your rooms on WhatsApp, or give us a call. We reply with a free estimate.
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

        <ul className="grid gap-7 lg:justify-self-end">
          {sameNumber ? (
            <li className="flex items-start gap-4">
              <Phone aria-hidden size={20} className="mt-1 shrink-0 text-sand" />
              <div>
                <span className={rowLabel}>Call or WhatsApp</span>
                <CallAction className={`${rowValue} font-medium underline decoration-paper/25 underline-offset-[6px] transition-colors hover:decoration-paper`}>
                  {business.phone}
                </CallAction>
              </div>
            </li>
          ) : (
            <>
              {business.phone && (
                <li className="flex items-start gap-4">
                  <Phone aria-hidden size={20} className="mt-1 shrink-0 text-sand" />
                  <div>
                    <span className={rowLabel}>Call</span>
                    <CallAction className={`${rowValue} font-medium`}>{business.phone}</CallAction>
                  </div>
                </li>
              )}
              {business.whatsapp && (
                <li className="flex items-start gap-4">
                  <MessageCircle aria-hidden size={20} className="mt-1 shrink-0 text-sand" />
                  <div>
                    <span className={rowLabel}>WhatsApp</span>
                    <WhatsAppAction className={`${rowValue} font-medium`}>{business.whatsapp}</WhatsAppAction>
                  </div>
                </li>
              )}
            </>
          )}
          {email && (
            <li className="flex items-start gap-4">
              <Mail aria-hidden size={20} className="mt-1 shrink-0 text-sand" />
              <div>
                <span className={rowLabel}>Email</span>
                <a href={email} className={`${rowValue} underline underline-offset-4 hover:text-sand`}>
                  {business.email}
                </a>
              </div>
            </li>
          )}
          {business.serviceLocations.length > 0 && (
            <li className="flex items-start gap-4">
              <MapPin aria-hidden size={20} className="mt-1 shrink-0 text-sand" />
              <div>
                <span className={rowLabel}>Service areas</span>
                <span className={rowValue}>{business.serviceLocations.join(', ')}</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}
