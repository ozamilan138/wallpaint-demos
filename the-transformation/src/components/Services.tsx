import { useState } from 'react'
import { messages } from '../config/business'
import { services } from '../data/content'
import { ContactAction } from './ContactAction'
import { Picture } from './Picture'
import { WhatsAppIcon } from './WhatsAppIcon'

/**
 * Services as a list. On large screens a sticky photograph at the left shows the
 * service that the visitor points at or focuses. On small screens each service has its own photograph.
 */
export function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" aria-labelledby="services-title" className="bg-dark py-24 text-white md:py-32 lg:py-40">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2
            id="services-title"
            data-reveal
            className="text-[clamp(2.6rem,6.5vw,5.75rem)] leading-[0.95] font-extrabold tracking-[-0.05em] lg:col-span-7"
          >
            Our Services
          </h2>
          <p data-reveal style={{ ['--d' as string]: 1 }} className="max-w-lg text-[17px] leading-relaxed text-white/85 lg:col-span-5 lg:justify-self-end">
            From a single feature wall to a full exterior. Each service starts with a conversation about
            your space. (Demo categories: the final list is confirmed with the owner.)
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-dark-2">
              {services.map((service, i) => (
                <Picture
                  key={service.title}
                  photo={service.photo}
                  sizes="40vw"
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                  style={{ opacity: i === active ? 1 : 0 }}
                  aria-hidden={i !== active}
                />
              ))}
              <span className="demo-tag absolute top-4 left-4">Demo image</span>
            </div>
          </div>

          <ol className="lg:col-span-7">
            {services.map((service, i) => (
              <li
                key={service.title}
                data-reveal
                onPointerEnter={() => setActive(i)}
                onFocusCapture={() => setActive(i)}
                className="group py-6 first:pt-0 lg:py-8"
              >
                <div className="grid grid-cols-[96px_1fr] gap-5 sm:grid-cols-[140px_1fr] sm:gap-7 lg:grid-cols-1">
                  <div className="aspect-square overflow-hidden bg-dark-2 lg:hidden">
                    <Picture photo={service.photo} sizes="140px" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3
                      className={`text-[clamp(1.5rem,3vw,2.6rem)] leading-tight font-bold tracking-[-0.035em] transition-colors duration-300 ${
                        i === active ? 'lg:text-white' : 'lg:text-white/80'
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-[16px] leading-relaxed text-white/80">{service.description}</p>
                    <ContactAction
                      kind="whatsapp"
                      message={messages.service(service.title)}
                      className="mt-4 inline-flex min-h-11 cursor-pointer items-center gap-2 text-[15px] font-semibold text-accent underline decoration-accent/50 decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      <WhatsAppIcon className="size-4" />
                      Enquire on WhatsApp
                    </ContactAction>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
