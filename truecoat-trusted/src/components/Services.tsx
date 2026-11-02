import { MessageCircle } from 'lucide-react'
import { services } from '../data/services'
import { serviceMessage } from '../utils/whatsapp'
import { WhatsAppButton } from './contact/ContactActions'
import { ResponsiveImage } from './ResponsiveImage'

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-field py-20 lg:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="services-title" data-reveal className="text-[1.75rem] leading-tight font-extrabold sm:text-4xl lg:col-span-7 lg:text-[2.75rem]">
            Painting Services for Every Room
          </h2>
          <p data-reveal className="max-w-xl text-lg text-muted-strong lg:col-span-5">
            Choose a service to ask about it on WhatsApp. Not sure what you need? Tell us about the room and we
            will help you decide.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <li
              key={service.id}
              data-reveal
              style={{ '--reveal-i': index % 3 } as React.CSSProperties}
              className="group flex gap-4 rounded-3xl bg-white p-3 md:flex-col md:gap-0 md:p-0"
            >
              <div className="w-28 shrink-0 overflow-hidden rounded-2xl sm:w-36 md:w-full md:rounded-t-3xl md:rounded-b-none">
                <ResponsiveImage
                  image={service.image}
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 144px"
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] md:aspect-[3/2]"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col py-1 pr-1 md:p-6">
                <h3 className="text-lg leading-snug font-bold md:text-xl">{service.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/80">{service.description}</p>
                <WhatsAppButton
                  message={serviceMessage(service.title)}
                  className="text-link mt-auto self-start pt-2 text-base"
                  ariaLabel={`Ask about ${service.title} on WhatsApp`}
                >
                  <MessageCircle aria-hidden size={17} />
                  Ask About This
                </WhatsAppButton>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-strong">
          These services are examples for this demo. The final list will match the work that TrueCoat offers.
        </p>
      </div>
    </section>
  )
}
