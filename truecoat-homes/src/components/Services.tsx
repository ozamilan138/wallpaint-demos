import { useState } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { services } from '../data/services'
import { messages } from '../utils/contact'
import { ContactButton } from './ContactButton'
import { Picture } from './Picture'

/**
 * A sticky photograph beside a list of services. Selecting a service opens its
 * description and shows its photograph. On phones the photograph sits above the list.
 */
export function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" aria-labelledby="services-title" className="py-24 md:py-36">
      <div className="shell grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <div className="sticky top-[88px]">
            <div className="relative aspect-[4/3] overflow-hidden bg-mist md:aspect-[4/5]">
              {services.map((s, i) => (
                <Picture
                  key={s.id}
                  photo={s.photo}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${i === active ? 'opacity-100' : 'opacity-0'}`}
                  aria-hidden={i === active ? undefined : true}
                />
              ))}
              <span className="demo-tag top-3 left-3">Demo image</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:pl-4 lg:col-span-6 lg:col-start-7">
          <h2
            id="services-title"
            className="text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em]"
            data-reveal
          >
            Our Painting Services
          </h2>
          <p className="mt-5 max-w-[48ch] text-[18px]" data-reveal style={{ ['--i' as string]: 1 }}>
            Select a service to read more. Each enquiry button sends a WhatsApp message with the service name, so we know
            what you need.
          </p>

          <ul className="mt-10">
            {services.map((s, i) => {
              const open = i === active
              return (
                <li key={s.id} className={`transition-colors duration-200 ${open ? 'bg-mist' : ''}`}>
                  <h3>
                    <button
                      type="button"
                      id={`svc-btn-${s.id}`}
                      aria-expanded={open}
                      aria-controls={`svc-panel-${s.id}`}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}
                      className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 px-4 text-left font-display text-[clamp(21px,1.9vw,26px)] font-bold tracking-[-0.015em]"
                    >
                      <span className={open ? 'text-ink' : 'text-ink/80'}>{s.name}</span>
                      <ChevronDown
                        className={`size-5 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={`svc-panel-${s.id}`}
                    role="region"
                    aria-labelledby={`svc-btn-${s.id}`}
                    hidden={!open}
                    className="px-4 pb-6"
                  >
                    <p className="max-w-[52ch] text-[17px]">{s.description}</p>
                    <div className="mt-3">
                      <ContactButton kind="whatsapp" plain message={messages.service(s.name)} className="link-arrow">
                        Ask about {s.name.toLowerCase()}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </ContactButton>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <p className="mt-8 px-4 text-[15px] text-muted">
            Demo service list. The final website shows only the services that TrueCoat offers.
          </p>
        </div>
      </div>
    </section>
  )
}
