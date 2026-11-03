import { ArrowRight } from 'lucide-react'
import { services } from '../data/content'
import { WhatsAppAction } from './contact/ContactActions'
import { serviceMessage } from '../lib/contact'
import { SectionHeading } from './SectionHeading'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-linen">
      <div className="page-x mx-auto max-w-page py-16 sm:py-24">
        <SectionHeading id="services-title" title="Our Services">
          Painting for homes and apartments, inside and out.
        </SectionHeading>

        <ul className="mt-10 grid gap-px overflow-hidden bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="flex flex-col bg-linen py-6 sm:p-7">
              <h3 className="text-[26px] leading-[1.15]">{service.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.6]">{service.description}</p>
              <WhatsAppAction
                message={serviceMessage(service.title)}
                className="text-link mt-auto pt-3"
                ariaLabel={`Ask about ${service.title} on WhatsApp`}
              >
                <span>Ask about this</span>
                <ArrowRight aria-hidden size={16} />
              </WhatsAppAction>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
