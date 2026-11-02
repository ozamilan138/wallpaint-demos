import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { business } from '../data/config'
import { emailUrl, generalMessage } from '../lib/whatsapp'
import { delay } from '../lib/reveal'
import { CallAction, WhatsAppAction } from './contact/ContactActions'
import { EnquiryForm } from './EnquiryForm'

export function ContactCTA() {
  const email = emailUrl()
  const locations = business.serviceLocations
  return (
    <section id="contact" aria-labelledby="contact-title" className="section bg-ground-2">
      <div id="estimate" className="container-page scroll-mt-24">
        <h2 id="contact-title" className="h2 lg:max-w-[26ch]" data-reveal>
          Let’s Find the Right Painting Solution for Your Home.
        </h2>
        <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="lead text-ink/80" data-reveal style={delay(1)}>
              Whether you are refreshing one room or planning a complete home makeover, tell us what you have in mind.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal style={delay(2)}>
              <WhatsAppAction message={generalMessage} className="btn btn-primary">
                <MessageCircle aria-hidden size={20} />
                Discuss on WhatsApp
              </WhatsAppAction>
              <CallAction className="btn btn-dark">
                <Phone aria-hidden size={20} />
                Call Now
              </CallAction>
            </div>

            <dl className="mt-10 grid gap-5" data-reveal style={delay(3)}>
              <div className="flex gap-4">
                <dt>
                  <span className="sr-only">Email</span>
                  <Mail aria-hidden size={22} className="mt-0.5 text-green-ink" />
                </dt>
                <dd>
                  {email ? (
                    <a href={email} className="text-link min-h-0">
                      {business.email}
                    </a>
                  ) : (
                    <span className="text-muted">Email address to be added</span>
                  )}
                </dd>
              </div>
              <div className="flex gap-4">
                <dt>
                  <span className="sr-only">Service locations</span>
                  <MapPin aria-hidden size={22} className="mt-0.5 text-green-ink" />
                </dt>
                <dd className={locations.length ? '' : 'text-muted'}>
                  {locations.length ? locations.join(', ') : 'Service areas to be confirmed'}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7" data-reveal style={delay(1)}>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
