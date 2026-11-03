import { MessageCircle } from 'lucide-react'
import { services } from '../data/services'
import { serviceMessage } from '../utils/whatsapp'
import { WhatsAppButton } from './contact/ContactActions'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-field py-16 lg:py-20">
      <div className="wrap">
        <h2 id="services-title" className="section-title">
          Our Services
        </h2>
        <p className="mt-3 max-w-xl text-lg text-muted-strong">
          Not sure what you need? Tell us about the room and we will help you decide.
        </p>

        <ul className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, description, icon: Icon }) => (
            <li key={id} className="flex gap-4 rounded-2xl bg-white p-5 sm:flex-col sm:gap-0 sm:p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-field text-green-deep">
                <Icon aria-hidden size={22} />
              </span>
              <div className="flex flex-1 flex-col sm:mt-4">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1 flex-1 leading-relaxed text-ink/80">{description}</p>
                <WhatsAppButton
                  message={serviceMessage(title)}
                  className="text-link mt-1 self-start"
                  ariaLabel={`Ask about ${title} on WhatsApp`}
                >
                  <MessageCircle aria-hidden size={17} />
                  Ask About This
                </WhatsAppButton>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-muted-strong">
          These services are examples for this demo. The final list will match the work that TrueCoat offers.
        </p>
      </div>
    </section>
  )
}
