import { services } from '../data/content'
import { serviceMessage } from '../lib/whatsapp'
import { WhatsAppButton } from './ContactButtons'
import { Img } from './Img'

/** The painting services. Each card has an enquiry button that names the service in the message. */
export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 sm:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="services-title" className="h-section max-w-[14ch]" data-reveal>
            Painting Services for Every Room.
          </h2>
          <p className="lede lg:justify-self-end" data-reveal style={{ ['--d' as string]: 1 }}>
            From one bedroom to the outside of the house. Tell us what you need and we will suggest a simple plan.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => (
            <li key={s.id} data-reveal style={{ ['--d' as string]: i % 3 }} className="flex flex-col overflow-hidden rounded-card">
              <div className="overflow-hidden">
                <Img
                  name={s.image}
                  alt={s.alt}
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
                  className="aspect-[3/2] w-full transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6" style={{ background: s.strip }}>
                <h3 className="text-[1.375rem] font-extrabold leading-tight">{s.name}</h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-ink">{s.description}</p>
                <WhatsAppButton
                  message={serviceMessage(s.name.toLowerCase())}
                  className="btn btn-paper mt-5 self-start"
                >
                  Ask About {s.name}
                </WhatsAppButton>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">Demo service list. The owner will confirm the services offered.</p>
      </div>
    </section>
  )
}
