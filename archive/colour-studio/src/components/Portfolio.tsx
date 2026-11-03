import { portfolio } from '../data/content'
import { images } from '../data/images'
import { Img } from './Img'
import { SectionHeading } from './Section'

/**
 * The portfolio grid. It reads the items from src/data/content.ts.
 * To show real projects, replace the items there with real photos.
 */
export function Portfolio() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-paper py-20 sm:py-28 lg:py-36">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <SectionHeading id="work-title" title="From Ideas to Beautiful Spaces." className="lg:col-span-7" />
          <p className="text-base text-muted lg:col-span-5 lg:pb-2">
            These are inspiration images for this demo. They are not projects by Aureline Painting Co. Real project photos will
            replace them.
          </p>
        </div>

        <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:mt-16 lg:columns-3 lg:gap-6">
          {portfolio.map((item) => {
            const ratio = images[item.image].ratio
            return (
              <li key={item.image} className="mb-8 break-inside-avoid">
                <figure className="group">
                  <div className="photo-zoom relative overflow-hidden rounded-[var(--radius-photo)]" style={{ aspectRatio: String(ratio) }}>
                    <Img
                      name={item.image}
                      alt={item.alt}
                      sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                      className="absolute inset-0 size-full object-cover"
                    />
                    <span className="demo-tag absolute top-3 left-3">Demo image</span>
                  </div>
                  <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="text-lg font-semibold tracking-tight">{item.title}</span>
                    <span className="text-[15px] text-muted">
                      {item.room}, {item.category.toLowerCase()}
                    </span>
                  </figcaption>
                </figure>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
