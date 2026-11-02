import type { CSSProperties } from 'react'
import type { Project } from '../data/projects'
import { messages } from '../utils/whatsapp'
import { ContactButton } from './ContactButton'
import { Picture } from './Picture'

type Props = {
  project: Project
  /** The classes that place the card in the grid and set the photo shape. */
  layout: { cell: string; media: string }
  sizes: string
  animate?: boolean
  style?: CSSProperties
}

export function ProjectCard({ project, layout, sizes, animate = false, style }: Props) {
  return (
    <li className={`${layout.cell} ${animate ? 'hero-fade' : ''}`} style={style}>
      <article className="group outline-offset-8" tabIndex={-1} aria-label={project.title}>
        <div className={`relative overflow-hidden bg-mist ${layout.media}`}>
          <Picture
            photo={project.photo}
            sizes={sizes}
            className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-strong)] group-hover:scale-[1.035] motion-reduce:transition-none"
          />
          {project.isDemo && <span className="demo-tag">Sample photo</span>}
        </div>
        <div className="mt-4 max-w-[46ch]">
          <p className="font-ui text-[15px] font-semibold text-green-deep">{project.category}</p>
          <h3 className="mt-1 text-[22px] leading-snug font-bold">{project.title}</h3>
          {project.description && <p className="mt-1.5 text-[16px] leading-relaxed text-soft-ink">{project.description}</p>}
          <ContactButton
            kind="whatsapp"
            message={messages.project(project.category, project.title)}
            className="text-link mt-1 text-[15px] text-ink"
            aria-label={`Ask about a project like ${project.title} on WhatsApp`}
          >
            Ask About a Project Like This
          </ContactButton>
        </div>
      </article>
    </li>
  )
}
