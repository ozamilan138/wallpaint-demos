import { MapPin } from 'lucide-react'
import { business } from '../data/config'
import { benefits } from '../data/content'

/** About Us and the four benefits in one plain section. */
export function WhyChooseUs() {
  const areas = business.serviceLocations
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 lg:py-20">
      <div className="wrap">
        <h2 id="about-title" className="section-title max-w-[24ch]">
          Your Home Deserves the Right People for the Job.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/85">
          Painting your home should make it feel fresh and welcoming. We keep the process simple, with clear
          communication and attention to the details that matter.
        </p>

        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon }) => (
            <li key={title}>
              <Icon aria-hidden size={26} className="text-green-deep" />
              <h3 className="mt-3 text-lg font-bold">{title}</h3>
              <p className="mt-1.5 leading-relaxed text-ink/80">{text}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 flex items-start gap-2.5 text-muted">
          <MapPin aria-hidden size={20} className="mt-0.5 shrink-0 text-green-deep" />
          <span>
            <span className="font-medium text-ink">Areas we serve: </span>
            {areas.length > 0 ? areas.join(', ') : 'to be confirmed by the owner.'}
          </span>
        </p>
      </div>
    </section>
  )
}
