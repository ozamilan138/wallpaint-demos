import { ArrowRight, MessageCircle } from 'lucide-react'
import { services } from '../data/content'
import { ResponsiveImage } from './ResponsiveImage'
import { WhatsAppAction } from './contact/ContactActions'
import { estimateMessage, serviceMessage } from '../lib/contact'

/* The rows alternate the photograph shape so that the list does not read as a grid of equal cards. */
const shapes = [
  'sm:aspect-[4/5]',
  'sm:aspect-[3/2]',
  'sm:aspect-square',
  'sm:aspect-[3/2]',
  'sm:aspect-[4/5]',
  'sm:aspect-[3/2]',
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-linen">
      <div className="page-x mx-auto max-w-page py-24 sm:py-32 lg:py-40">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[120px]">
              <h2 id="services-title" data-reveal className="text-[clamp(2.4rem,1.5rem+3vw,4.25rem)] leading-[1.02]">
                Our Services
              </h2>
              <p
                data-reveal
                style={{ ['--reveal-delay' as string]: '80ms' }}
                className="mt-6 max-w-[30rem] text-[18px] leading-[1.6]"
              >
                Painting for homes and apartments, inside and out. Each project starts with a conversation about the
                rooms, the light and the look you want.
              </p>
              <div data-reveal style={{ ['--reveal-delay' as string]: '140ms' }} className="mt-8">
                <WhatsAppAction message={estimateMessage} className="btn btn-dark">
                  <MessageCircle aria-hidden size={18} />
                  Request a Free Estimate
                </WhatsAppAction>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-16 sm:gap-20 lg:col-span-7 lg:col-start-6 lg:gap-24">
            {services.map((service, index) => (
              <li key={service.title} className="group grid items-start gap-6 sm:grid-cols-12 sm:gap-8">
                <div
                  data-reveal
                  className={`img-zoom relative aspect-[4/3] overflow-hidden bg-paper sm:col-span-6 ${shapes[index]} ${
                    index % 2 === 1 ? 'sm:order-2 sm:col-start-7' : ''
                  }`}
                >
                  <ResponsiveImage
                    image={service.image}
                    alt={service.alt}
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                    objectPosition={service.objectPosition}
                  />
                </div>
                <div
                  data-reveal
                  style={{ ['--reveal-delay' as string]: '100ms' }}
                  className={`sm:col-span-6 sm:pt-4 ${index % 2 === 1 ? 'sm:order-1 sm:col-start-1' : ''}`}
                >
                  <h3 className="text-[clamp(1.9rem,1.5rem+1.2vw,2.6rem)] leading-[1.05]">{service.title}</h3>
                  <p className="mt-4 max-w-[34ch] text-[17px] leading-[1.65] text-ink">{service.description}</p>
                  <WhatsAppAction
                    message={serviceMessage(service.title)}
                    className="text-link mt-4"
                    ariaLabel={`Ask about ${service.title} on WhatsApp`}
                  >
                    <span>Ask about this service</span>
                    <ArrowRight aria-hidden size={16} />
                  </WhatsAppAction>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
