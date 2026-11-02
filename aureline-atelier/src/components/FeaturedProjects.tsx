import { Info, MessageCircle } from 'lucide-react'
import type { Project } from '../data/content'
import { projects } from '../data/content'
import { ResponsiveImage } from './ResponsiveImage'
import { DemoTag } from './DemoTag'
import { WhatsAppAction } from './contact/ContactActions'
import { business } from '../config/business'

/*
 * The layout of each project in the asymmetric 12-column grid.
 * Each entry gives the grid position on desktop, the photograph shape and the width on a phone.
 */
const layout = [
  { grid: 'lg:col-span-7', shape: 'aspect-[5/6]', mobile: 'w-full', sizes: '(min-width: 1024px) 56vw, (min-width: 768px) 48vw, 100vw' },
  { grid: 'md:mt-28 lg:col-span-4 lg:col-start-9 lg:mt-48', shape: 'aspect-[4/5]', mobile: 'w-[82%] ml-auto', sizes: '(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 82vw' },
  { grid: 'md:col-span-2 lg:col-span-10 lg:col-start-2', shape: 'aspect-[16/9]', mobile: 'w-full', sizes: '(min-width: 1024px) 80vw, 100vw' },
  { grid: 'lg:col-span-5', shape: 'aspect-[4/5]', mobile: 'w-[82%]', sizes: '(min-width: 1024px) 40vw, (min-width: 768px) 48vw, 82vw' },
  { grid: 'md:mt-28 lg:col-span-6 lg:col-start-7 lg:mt-36', shape: 'aspect-[4/3]', mobile: 'w-full', sizes: '(min-width: 1024px) 48vw, (min-width: 768px) 48vw, 100vw' },
  { grid: 'lg:col-span-4 lg:col-start-2', shape: 'aspect-[3/4]', mobile: 'w-[82%] ml-auto', sizes: '(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 82vw' },
]

function ProjectFigure({ project, index }: { project: Project; index: number }) {
  const place = layout[index]
  return (
    <li className={`${place.mobile} md:ml-0 md:w-auto ${place.grid}`}>
      <figure className="group">
        <div data-reveal className={`img-zoom relative overflow-hidden bg-linen ${place.shape}`}>
          <ResponsiveImage image={project.image} alt={project.alt} sizes={place.sizes} objectPosition={project.objectPosition} />
          <DemoTag className="left-3 top-3 sm:left-4 sm:top-4" />
        </div>
        <figcaption data-reveal style={{ ['--reveal-delay' as string]: '90ms' }} className="mt-5 max-w-[36rem]">
          <h3 className="text-[clamp(1.75rem,1.4rem+1vw,2.4rem)] leading-[1.08]">{project.title}</h3>
          <p className="mt-2 text-[16px] leading-[1.6] text-ink">{project.description}</p>
          <p className="mt-2 text-[14px] text-bronze-deep">
            {project.room}, {project.category.toLowerCase()}
          </p>
        </figcaption>
      </figure>
    </li>
  )
}

export function FeaturedProjects() {
  return (
    <section id="work" aria-labelledby="work-title" className="page-x mx-auto max-w-page py-24 sm:py-32 lg:py-44">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <h2 id="work-title" data-reveal className="text-[clamp(2.4rem,1.5rem+3vw,4.5rem)] leading-[1.02] lg:col-span-6">
          Our Work
        </h2>
        <p
          data-reveal
          style={{ ['--reveal-delay' as string]: '80ms' }}
          className="max-w-[34rem] text-[18px] leading-[1.6] lg:col-span-5 lg:col-start-8"
        >
          A look at the rooms, colours and finishes we love to create, from calm bedrooms to bold feature walls and
          crisp exteriors.
        </p>
      </div>

      {/* Demo content marker. Remove this note when verified client photographs replace the samples. */}
      <div
        data-reveal
        role="note"
        className="mt-10 flex max-w-[44rem] gap-3 bg-linen p-4 text-[15px] leading-[1.55] text-ink sm:p-5"
      >
        <Info aria-hidden size={20} className="mt-0.5 shrink-0 text-bronze-deep" />
        <p>
          <strong className="font-semibold">Demo content.</strong> These photographs are royalty-free sample images
          that show the intended style. They are not completed projects by {business.name}, and verified client
          photographs will replace them before launch.
        </p>
      </div>

      <ul className="mt-16 grid gap-16 sm:gap-20 md:grid-cols-2 md:gap-x-6 lg:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-32">
        {projects.map((project, index) => (
          <ProjectFigure key={project.title} project={project} index={index} />
        ))}
        <li className="flex flex-col justify-end lg:col-span-5 lg:col-start-8 lg:pb-4">
          <div data-reveal className="bg-night p-8 text-paper sm:p-10">
            <h3 className="text-[clamp(1.9rem,1.5rem+1.2vw,2.6rem)] leading-[1.08]">See a room you love?</h3>
            <p className="mt-4 max-w-[30rem] text-[17px] leading-[1.6] text-mist">
              Send us a photo of your space and tell us the look you have in mind. We will help you plan the colours
              and finish.
            </p>
            <WhatsAppAction
              message={`Hello ${business.name}, I saw your work on the website and would like to discuss a similar look for my home.`}
              className="btn btn-light mt-7"
            >
              <MessageCircle aria-hidden size={18} />
              Discuss Your Project
            </WhatsAppAction>
          </div>
        </li>
      </ul>
    </section>
  )
}
