import { projects } from '../data/content'
import { projectMessage } from '../lib/whatsapp'
import { WhatsAppButton } from './ContactButtons'
import { Img } from './Img'

// The column spans of the cards on a wide screen: three, then two, then three.
const spans = ['lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-7', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4']

/** The project gallery. Each project has a "demo" flag, so real TrueCoat projects can be added later. */
export function ProjectGallery() {
  const hasDemo = projects.some((p) => p.demo)
  return (
    <section id="our-work" aria-labelledby="work-title" className="py-20 sm:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="work-title" className="h-section" data-reveal>
            See What’s Possible.
          </h2>
          <p className="lede lg:justify-self-end" data-reveal style={{ ['--d' as string]: 1 }}>
            Ideas for colours, feature walls and finishes in real homes. Find a look you like and ask us about it.
          </p>
        </div>
        {hasDemo && (
          <p className="mt-6 inline-flex max-w-[60ch] rounded-card bg-beige px-4 py-3 text-base text-ink">
            These are sample inspiration photos, not projects by TrueCoat Painting Co. Real project photos will replace
            them.
          </p>
        )}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {projects.map((p, i) => {
            const wide = spans[i % spans.length].includes('7')
            return (
              <li key={p.id} data-reveal style={{ ['--d' as string]: i % 3 }} className={`flex flex-col ${spans[i % spans.length]}`}>
                <div className="group relative overflow-hidden rounded-card">
                  <Img
                    name={p.image}
                    alt={p.alt}
                    sizes={wide ? '(min-width: 1024px) 56vw, (min-width: 640px) 46vw, 100vw' : '(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw'}
                    className={`w-full transition-transform duration-700 group-hover:scale-[1.03] ${wide ? 'aspect-[4/3] lg:aspect-[16/10]' : 'aspect-[4/3]'}`}
                  />
                  <span className="demo-tag absolute left-3 top-3">{p.demo ? 'Sample image' : 'TrueCoat project'}</span>
                </div>
                <div className="flex flex-1 flex-col pt-4">
                  <p className="font-ui text-sm font-semibold text-sage-deep">
                    {p.room} <span aria-hidden="true">·</span> <span className="sr-only">, style: </span>
                    {p.style}
                  </p>
                  <h3 className="mt-1 text-[1.375rem] font-extrabold leading-snug">{p.title}</h3>
                  <p className="mt-1 flex-1 text-base text-ink">{p.description}</p>
                  <WhatsAppButton
                    message={projectMessage(p.title, p.room)}
                    icon={false}
                    className="mt-3 inline-flex min-h-11 items-center self-start font-ui text-base font-semibold text-ink underline decoration-sage decoration-2 underline-offset-4 hover:text-sage-deep"
                  >
                    Ask About This Look
                  </WhatsAppButton>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
