import { projects } from '../data/projects'
import { ResponsiveImage } from './ResponsiveImage'

export function ProjectGallery() {
  const hasDemo = projects.some((project) => project.isDemo)
  return (
    <section id="work" aria-labelledby="work-title" className="bg-white py-16 lg:py-20">
      <div className="wrap">
        <h2 id="work-title" className="section-title">
          Our Work
        </h2>
        {hasDemo && (
          <p className="mt-3 max-w-2xl text-muted">
            Demo content: these are sample photos, not TrueCoat projects. Real project photos will replace them
            before launch.
          </p>
        )}

        <ul className="mt-10 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <li key={project.id}>
              <figure>
                <div className="relative overflow-hidden rounded-2xl bg-field">
                  <ResponsiveImage
                    image={project.image}
                    sizes="(min-width: 1216px) 280px, (min-width: 1024px) 23vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  {project.isDemo && (
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-sm font-medium text-ink">
                      Demo image
                    </span>
                  )}
                </div>
                <figcaption className="pt-3">
                  <span className="block text-sm font-medium text-green-deep">{project.category}</span>
                  <span className="mt-0.5 block font-semibold leading-snug">{project.title}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
