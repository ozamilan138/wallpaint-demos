import { MessageCircle } from 'lucide-react'
import { services } from '../data/services'
import { serviceMessage } from '../lib/whatsapp'
import { delay } from '../lib/reveal'
import { WhatsAppAction } from './contact/ContactActions'
import { Picture } from './Picture'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section bg-ground-2">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="services-title" className="h2 lg:col-span-7" data-reveal>
            Painting Solutions for Every Space.
          </h2>
          <p className="lead text-ink/80 lg:col-span-5" data-reveal style={delay(1)}>
            Inside or outside, a single wall or every room. Choose a service to ask about it on WhatsApp, or send us a
            general enquiry.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">
          {services.map((s, i) => {
            const large = i < 2
            return (
              <li
                key={s.id}
                data-reveal
                style={delay(i % 3)}
                className={`group flex flex-col ${large ? 'lg:col-span-6' : 'lg:col-span-3'}`}
              >
                <div className="overflow-hidden rounded-2xl">
                  <Picture
                    name={s.image}
                    alt={s.alt}
                    sizes={large ? '(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw'}
                    className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                      large ? 'aspect-[16/10]' : 'aspect-[4/3] lg:aspect-[4/5]'
                    }`}
                  />
                </div>
                <h3 className={`mt-5 font-bold leading-snug ${large ? 'text-2xl' : 'text-xl'}`}>{s.title}</h3>
                <p className="mt-2 max-w-prose text-ink/80">{s.description}</p>
                <div className="mt-auto pt-3">
                  <WhatsAppAction
                    message={serviceMessage(s.title)}
                    label={`Ask about this service: ${s.title}`}
                    className="text-link"
                  >
                    <MessageCircle aria-hidden size={18} />
                    Ask About This Service
                  </WhatsAppAction>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
