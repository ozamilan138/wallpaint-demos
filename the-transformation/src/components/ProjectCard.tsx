import { messages } from '../config/business'
import type { Project } from '../data/content'
import { ContactAction } from './ContactAction'
import { Picture } from './Picture'
import { WhatsAppIcon } from './WhatsAppIcon'

/**
 * A portfolio card. On a device with a mouse, the details show in an overlay on hover or focus.
 * On a touch device, the details always show below the photograph.
 */
export function ProjectCard({ project, tall }: { project: Project; tall: boolean }) {
  return (
    <article className="group relative">
      <div className={`relative overflow-hidden bg-paper-2 ${tall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
        <Picture
          photo={project.photo}
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 47vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-soft)] group-hover:scale-[1.04]"
        />
        <span className="demo-tag absolute top-3 left-3">Demo image</span>

        {/* Hover overlay: only on devices that can hover. */}
        <div className="pointer-events-none absolute inset-0 hidden flex-col justify-end bg-gradient-to-t from-dark/90 via-dark/60 to-dark/10 p-6 text-white opacity-0 transition-opacity duration-300 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 [@media(hover:hover)]:flex" /* taste-skill-ignore: neutral scrim over photo */>
          <p className="text-[14px] font-medium text-white/85">
            {project.category} <span aria-hidden="true">/</span> {project.room}
          </p>
          <h3 className="mt-1 text-[22px] leading-tight font-bold tracking-[-0.02em]">{project.title}</h3>
          <p className="mt-2 max-w-sm text-[15px] leading-snug text-white/85">{project.description}</p>
          <ContactAction
            kind="whatsapp"
            message={messages.project(project.category, project.title)}
            className="btn btn-light mt-4 min-h-11 self-start px-5 text-[14px]"
            aria-label={`Enquire about a project like ${project.title}`}
          >
            <WhatsAppIcon className="size-4" />
            Enquire about this
          </ContactAction>
        </div>
      </div>

      {/* Details below the photo for touch devices. */}
      <div className="pt-4 [@media(hover:hover)]:hidden">
        <p className="text-[14px] font-medium text-accent-deep">
          {project.category} <span aria-hidden="true">/</span> {project.room}
        </p>
        <h3 className="mt-1 text-[20px] leading-tight font-bold tracking-[-0.02em]">{project.title}</h3>
        <p className="mt-1.5 text-[15px] leading-snug text-muted-ink">{project.description}</p>
        <ContactAction
          kind="whatsapp"
          message={messages.project(project.category, project.title)}
          className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-2 text-[15px] font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
          aria-label={`Enquire about a project like ${project.title}`}
        >
          <WhatsAppIcon className="size-4" />
          Enquire about this
        </ContactAction>
      </div>
    </article>
  )
}
