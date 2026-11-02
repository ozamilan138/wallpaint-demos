import { benefits } from '../data/content'
import { images } from '../data/images'
import { ResponsiveImage } from './ResponsiveImage'

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="bg-ink py-20 text-white lg:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 id="why-title" data-reveal className="max-w-[18ch] text-[1.75rem] leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            Good Work Should Come With Peace of Mind.
          </h2>
          <p data-reveal className="mt-5 max-w-xl text-lg text-white/80">
            What we aim for on every job, large or small.
          </p>

          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {benefits.map(({ title, text, icon: Icon }, index) => (
              <li key={title} data-reveal style={{ '--reveal-i': index } as React.CSSProperties} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-amber text-ink">
                  <Icon aria-hidden size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="lg:col-span-5">
          <div className="overflow-hidden rounded-[1.75rem]">
            <ResponsiveImage
              image={images.whyTray}
              sizes="(min-width: 1216px) 470px, (min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
