import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/content'
import { serviceEnquiry } from '../lib/messages'
import { WhatsAppButton } from './ContactButtons'
import { Img } from './Img'
import { Reveal, SectionHeading } from './Section'

/** Column spans for the six cards: a wide pair, a row of three, then one wide card. */
const layout = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-12']

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="services-title" title="Painting Services for Every Room.">
            From one feature wall to a whole apartment. Tell us what you need and we will plan it with you.
          </SectionHeading>
        </div>

        <Reveal as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {services.map((s, i) => {
            const wide = i === services.length - 1
            return (
              <li key={s.title} className={`${layout[i]} ${wide ? 'sm:col-span-2' : ''}`}>
                <article className={`group flex h-full flex-col overflow-hidden rounded-3xl bg-cream ${wide ? 'lg:flex-row' : ''}`}>
                  <div className={`photo-zoom overflow-hidden ${wide ? 'aspect-[16/9] lg:aspect-auto lg:h-80 lg:w-7/12' : i < 2 ? 'aspect-[16/10] lg:aspect-auto lg:h-80' : 'aspect-[4/3]'}`}>
                    <Img
                      name={s.image}
                      alt={s.alt}
                      sizes={i < 2 || wide ? '(min-width: 1024px) 55vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw'}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className={`flex flex-1 flex-col p-6 sm:p-7 ${wide ? 'lg:justify-center lg:p-12' : ''}`}>
                    <h3 className={`font-bold tracking-tight ${wide ? 'text-2xl lg:text-3xl' : 'text-xl sm:text-2xl'}`}>{s.title}</h3>
                    <p className="mt-2.5 max-w-md text-base text-ink/80">{s.description}</p>
                    <div className={wide ? 'mt-auto pt-5 lg:mt-0 lg:pt-6' : 'mt-auto pt-5'}>
                      <WhatsAppButton message={serviceEnquiry(s.title)} className="text-link">
                        Ask About {s.title}
                        <ArrowUpRight className="size-4" aria-hidden />
                      </WhatsAppButton>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </Reveal>
        <p className="mt-8 text-[15px] text-muted">The services on this page are examples. The final list depends on what the business offers.</p>
      </div>
    </section>
  )
}
