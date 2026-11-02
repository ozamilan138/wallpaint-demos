import { Info, MessageCircle } from 'lucide-react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { projectMessage } from '../utils/whatsapp'
import { WhatsAppButton } from './contact/ContactActions'
import { ResponsiveImage } from './ResponsiveImage'

/**
 * The grid position of each card on wide screens. The first card is large.
 * With more than six projects, the extra cards use the last pattern.
 */
const layout = [
  { cell: 'lg:col-span-7 lg:row-span-2', image: 'lg:aspect-auto lg:h-full' },
  { cell: 'lg:col-span-5', image: 'lg:aspect-[16/10]' },
  { cell: 'lg:col-span-5', image: 'lg:aspect-[16/10]' },
  { cell: 'lg:col-span-4', image: 'lg:aspect-[4/3]' },
  { cell: 'lg:col-span-4', image: 'lg:aspect-[4/3]' },
  { cell: 'lg:col-span-4', image: 'lg:aspect-[4/3]' },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const slot = layout[Math.min(index, layout.length - 1)]
  const large = index === 0
  return (
    <li data-reveal style={{ '--reveal-i': index % 3 } as React.CSSProperties} className={`flex flex-col ${slot.cell}`}>
      <figure className="group relative flex min-h-0 flex-1 flex-col">
        <div className={`relative min-h-0 overflow-hidden rounded-3xl bg-field ${large ? 'flex-1' : ''}`}>
          <ResponsiveImage
            image={project.image}
            sizes={large ? '(min-width: 1024px) 700px, 100vw' : '(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw'}
            className={`aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${slot.image}`}
          />
          {project.isDemo && (
            <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-sm font-medium text-ink">
              Demo image
            </span>
          )}
        </div>
        <figcaption className="flex items-start justify-between gap-4 pt-4">
          <span>
            <span className="block text-sm font-medium text-green-deep">{project.category}</span>
            <span className={`mt-1 block font-display font-bold leading-snug ${large ? 'text-lg lg:text-2xl' : 'text-lg'}`}>
              {project.title}
            </span>
          </span>
          <WhatsAppButton
            message={projectMessage(project.category, project.title)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-field text-green-deep transition-colors hover:bg-green hover:text-white"
            ariaLabel={`Ask about a look like “${project.title}” on WhatsApp`}
          >
            <MessageCircle aria-hidden size={19} />
          </WhatsAppButton>
        </figcaption>
      </figure>
    </li>
  )
}

export function ProjectGallery() {
  const hasDemo = projects.some((project) => project.isDemo)
  return (
    <section id="work" aria-labelledby="work-title" className="bg-white py-20 lg:py-28">
      <div className="wrap">
        <h2 id="work-title" data-reveal className="max-w-[20ch] text-[1.75rem] leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
          Take a Look at What a Fresh Coat Can Do.
        </h2>

        {hasDemo && (
          <p data-reveal className="mt-6 flex max-w-3xl items-start gap-3 rounded-2xl bg-amber-soft px-5 py-4 text-base leading-relaxed">
            <Info aria-hidden size={20} className="mt-0.5 shrink-0" />
            <span>
              <strong className="font-semibold">Demo content.</strong> These are sample photos to show the style of
              the gallery. They are not TrueCoat projects. Real project photos will replace them before launch.
            </span>
          </p>
        )}

        <ul className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </ul>

        <div data-reveal className="mt-14 flex flex-col items-start gap-4 rounded-3xl bg-field p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-lg">
            <span className="font-semibold">Like one of these looks?</span> Send us a photo of your room and we will
            talk about the options.
          </p>
          <WhatsAppButton className="btn btn-primary">
            <MessageCircle aria-hidden size={19} />
            Send a Photo on WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
