import { MessageCircle } from 'lucide-react'
import { services } from '../data/services'
import { serviceMessage } from '../lib/whatsapp'
import { WhatsAppAction } from './contact/ContactActions'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section bg-ground-2">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="services-title" className="h2">
            Painting Solutions for Every Space.
          </h2>
          <p className="lead mt-4 text-ink/80">
            Every home has different painting needs. Some rooms need a simple refresh, others a new colour and finish.
            Here is what we can help with.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, title, description, icon: Icon }) => (
            <li key={id} className="flex gap-4 rounded-2xl bg-white p-5 sm:flex-col sm:gap-0 sm:p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-ground-2 text-green-ink">
                <Icon aria-hidden size={22} />
              </span>
              <div className="flex flex-1 flex-col">
                <h3 className="text-lg font-bold leading-snug sm:mt-4">{title}</h3>
                <p className="mt-1.5 text-ink/80">{description}</p>
                <div className="mt-auto pt-2">
                  <WhatsAppAction message={serviceMessage(title)} label={`Ask about this service: ${title}`} className="text-link">
                    <MessageCircle aria-hidden size={18} />
                    Ask About This Service
                  </WhatsAppAction>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
