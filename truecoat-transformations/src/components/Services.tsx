import { services } from '../data/services'
import { useReveal } from '../hooks/useReveal'
import { messages } from '../utils/whatsapp'
import { ContactButton } from './ContactButton'
import { Picture } from './Picture'

/** The first two services show large. The other services show as compact rows. */
export function Services() {
  const ref = useReveal<HTMLElement>()
  const [first, second, ...rest] = services

  return (
    <section ref={ref} id="services" aria-labelledby="services-title" className="bg-mist py-24 sm:py-32 lg:py-40">
      <div className="frame">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="services-title" className="reveal text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[1.02] font-extrabold md:col-span-8">
            Painting Services for Every Space.
          </h2>
          <p className="reveal text-[18px] leading-relaxed md:col-span-4 md:pb-2" style={{ ['--d' as string]: '80ms' }}>
            From one tired wall to the outside of the whole house. Tell us what you need, and we suggest the right approach.
          </p>
        </div>

        <div className="mt-14 grid gap-14 md:grid-cols-12 md:gap-8 lg:mt-20 lg:gap-10">
          {[first, second].map((s, i) => (
            <article
              key={s.id}
              className={`reveal ${i === 0 ? 'md:col-span-7' : 'md:col-span-5 md:mt-28'}`}
              style={{ ['--d' as string]: `${i * 90}ms` }}
            >
              <div className={`overflow-hidden bg-white ${i === 0 ? 'aspect-[4/3]' : 'aspect-[4/3] md:aspect-[4/5]'}`}>
                <Picture photo={s.photo} sizes={i === 0 ? '(min-width: 768px) 56vw, 100vw' : '(min-width: 768px) 40vw, 100vw'} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 text-[30px] leading-tight font-extrabold">{s.title}</h3>
              <p className="mt-2 max-w-[44ch] text-[18px] leading-relaxed text-ink">{s.description}</p>
              <ContactButton kind="whatsapp" message={messages.service(s.title)} className="text-link mt-2 text-[16px] text-green-deep">
                Ask About {s.title}
              </ContactButton>
            </article>
          ))}
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:mt-24">
          {rest.map((s, i) => (
            <li key={s.id} className="reveal flex gap-5 sm:gap-6" style={{ ['--d' as string]: `${i * 70}ms` }}>
              <div className="size-28 shrink-0 overflow-hidden bg-white sm:size-36">
                <Picture photo={s.photo} sizes="144px" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <h3 className="text-[22px] leading-snug font-bold">{s.title}</h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-soft-ink">{s.description}</p>
                <ContactButton kind="whatsapp" message={messages.service(s.title)} className="text-link text-[15px] text-green-deep" aria-label={`Ask about ${s.title} on WhatsApp`}>
                  Ask About This
                </ContactButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
