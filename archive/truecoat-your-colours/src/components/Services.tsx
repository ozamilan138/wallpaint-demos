import { Img } from './Img'
import { WhatsAppButton } from './ContactButtons'
import { services } from '../data/services'
import { serviceMessage } from '../lib/messages'
import { useReveal } from '../lib/useReveal'

export function Services() {
  const ref = useReveal<HTMLDivElement>()
  const [first, second, ...rest] = services

  return (
    <section id="services" aria-labelledby="services-title" className="section-gap bg-beige-soft">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-[46rem]">
          <h2 id="services-title" className="h2">
            From Small Updates to Complete Home Painting
          </h2>
          <p className="lead">
            Whether you want to refresh one wall or paint the whole house, tell us what you need. We can talk through the
            work and the options that suit it.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {[first, second].map((s) => (
            <li key={s.id} className="lg:col-span-6">
              <ServiceCard service={s} large />
            </li>
          ))}
          {rest.map((s) => (
            <li key={s.id} className="lg:col-span-3">
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ServiceCard({ service, large = false }: { service: (typeof services)[number]; large?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-photo)] bg-white">
      <div className={`photo-zoom overflow-hidden bg-surface ${large ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <Img
          name={service.image}
          alt={service.imageAlt}
          sizes={large ? '(min-width: 1024px) 48vw, (min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 24vw, (min-width: 768px) 50vw, 100vw'}
          className="size-full object-cover"
        />
      </div>
      <div className={`flex flex-1 flex-col ${large ? 'p-6 sm:p-7' : 'p-5'}`}>
        <h3 className={`font-extrabold tracking-[-0.015em] ${large ? 'text-[1.55rem]' : 'text-[1.2rem]'}`}>{service.name}</h3>
        <p className="mt-2 text-[16px] leading-relaxed text-ink/80">{service.description}</p>
        <div className="mt-auto pt-4">
          <WhatsAppButton
            message={serviceMessage(service.name)}
            className="link inline-flex min-h-11 items-center gap-2 text-[15px]"
            aria-label={`Ask About This Service: ${service.name}`}
          >
            Ask About This Service
          </WhatsAppButton>
        </div>
      </div>
    </article>
  )
}
