import { business } from '../config/business'
import { principles } from '../data/content'
import { Reveal } from './Section'

export function WhyChooseUs() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-sage py-20 sm:py-28 lg:py-36">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <h2 id="about-title" className="text-[2rem] leading-[1.08] font-bold tracking-[-0.03em] sm:text-[2.6rem] lg:text-[3.25rem]">
            Why Choose Us.
          </h2>
          <p className="mt-5 max-w-md text-lg sm:text-xl">
            {business.name} paints homes and apartments. We help you choose colours with confidence, then take care of the work.
          </p>
          <p className="mt-6 max-w-md text-base">
            {business.serviceAreas.length > 0
              ? `We work in ${business.serviceAreas.join(', ')}.`
              : 'Service areas will be listed here when the business confirms them.'}
          </p>
        </Reveal>

        <Reveal as="ul" className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-7">
          {principles.map((p, i) => (
            <li key={p.title} className={i === principles.length - 1 ? 'sm:col-span-2 sm:max-w-[calc(50%-1.25rem)]' : ''}>
              <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-base">{p.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
