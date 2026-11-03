import { projects } from '../data/projects'
import { DemoTag, Picture } from './Picture'

export function ProjectGallery() {
  const hasDemo = projects.some((p) => p.isDemo)

  return (
    <section id="work" aria-labelledby="work-title" className="section bg-ground-2">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="work-title" className="h2">
            Good Work Is Meant to Be Seen.
          </h2>
          <p className="lead mt-4 text-ink/80">A few of the kinds of spaces we paint, inside and outside.</p>
          {hasDemo && (
            <p className="mt-4 rounded-xl bg-white px-4 py-3 text-muted">
              <strong className="font-semibold text-ink">Demo content.</strong> These are sample photographs, not
              completed TrueCoat projects. Real project photographs replace them before launch.
            </p>
          )}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <li key={p.id}>
              <div className="relative overflow-hidden rounded-2xl">
                <Picture
                  name={p.image}
                  alt={p.alt}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover sm:aspect-square"
                />
                {p.isDemo && <DemoTag className="absolute left-3 top-3" />}
              </div>
              <p className="mt-3 text-sm font-semibold text-green-ink">{p.category}</p>
              <h3 className="mt-0.5 text-lg font-bold leading-snug">{p.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
