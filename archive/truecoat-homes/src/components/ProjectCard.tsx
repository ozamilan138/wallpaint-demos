import { ArrowRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { messages } from '../utils/contact'
import { ContactButton } from './ContactButton'
import type { CardSpan } from './ProjectGallery'
import { Picture } from './Picture'

/** Image heights on desktop, so the cards in one row line up. Phones use a 4:3 crop. */
const imageHeight: Record<CardSpan, string> = {
  7: 'md:aspect-auto md:h-[clamp(320px,36vw,540px)]',
  5: 'md:aspect-auto md:h-[clamp(320px,36vw,540px)]',
  4: 'md:aspect-auto md:h-[clamp(260px,27vw,400px)]',
  12: 'md:aspect-auto md:h-[clamp(320px,40vw,600px)]',
}

const sizes: Record<CardSpan, string> = {
  7: '(min-width: 768px) 58vw, (min-width: 640px) 100vw, 100vw',
  5: '(min-width: 768px) 42vw, (min-width: 640px) 50vw, 100vw',
  4: '(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw',
  12: '100vw',
}

export function ProjectCard({ project, span }: { project: Project; span: CardSpan }) {
  return (
    <article className="group flex h-full flex-col">
      <div className={`relative aspect-[4/3] overflow-hidden bg-paper ${imageHeight[span]}`}>
        <Picture
          photo={project.photo}
          sizes={sizes[span]}
          className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.035]"
        />
        {project.source === 'demo' && <span className="demo-tag top-3 left-3">Demo image</span>}
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <p className="font-ui text-[15px] font-medium text-accent-deep">{project.category}</p>
        <h3 className="mt-1 text-[22px] leading-tight font-bold tracking-[-0.015em]">{project.title}</h3>
        <p className="mt-2 max-w-[52ch] text-[16px] text-muted">{project.description}</p>
        <div className="mt-2">
          <ContactButton
            kind="whatsapp"
            plain
            message={messages.project(project.title, project.category)}
            className="link-arrow"
          >
            Ask about a project like this
            <ArrowRight className="size-4" aria-hidden="true" />
          </ContactButton>
        </div>
      </div>
    </article>
  )
}
