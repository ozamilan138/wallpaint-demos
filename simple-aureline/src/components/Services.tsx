import { ArrowRight } from 'lucide-react'
import { WhatsAppAction } from './contact/ContactActions'
import { useLanguage } from '../i18n/context'
import { SectionHeading } from './SectionHeading'

export function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" aria-labelledby="services-title" className="bg-linen">
      <div className="page-x mx-auto max-w-page py-16 sm:py-24">
        <SectionHeading id="services-title" title={t.services.title}>
          {t.services.intro}
        </SectionHeading>

        <ul className="mt-10 grid gap-px overflow-hidden bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service) => (
            <li key={service.title} className="flex flex-col bg-linen py-6 sm:p-7">
              <h3 className="text-[26px] leading-[1.15]">{service.title}</h3>
              <p className="mt-2 text-[16px] leading-[1.6]">{service.description}</p>
              <WhatsAppAction
                message={t.messages.service(t.businessName, service.title)}
                className="text-link mt-auto pt-3"
                ariaLabel={t.services.askAria(service.title)}
              >
                <span>{t.services.ask}</span>
                <ArrowRight aria-hidden size={16} />
              </WhatsAppAction>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
