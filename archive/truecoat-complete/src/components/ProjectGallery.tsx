import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { allProjects, projectCategories, type ProjectCategory } from '../data/projects'
import { projectMessage } from '../lib/whatsapp'
import { delay } from '../lib/reveal'
import { WhatsAppAction } from './contact/ContactActions'
import { DemoTag, Picture } from './Picture'

type Filter = 'All' | ProjectCategory

/** Column spans for a balanced, uneven grid on large screens: a 7 and 5 row, then a 4, 4, 4 row. */
const pattern = [
  { span: 'lg:col-span-7', height: 'lg:h-[30rem]' },
  { span: 'lg:col-span-5', height: 'lg:h-[30rem]' },
  { span: 'lg:col-span-4', height: 'lg:h-[22rem]' },
  { span: 'lg:col-span-4', height: 'lg:h-[22rem]' },
  { span: 'lg:col-span-4', height: 'lg:h-[22rem]' },
]

export function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>('All')
  const items = filter === 'All' ? allProjects : allProjects.filter((p) => p.category === filter)
  const hasDemo = allProjects.some((p) => p.isDemo)
  const filters: Filter[] = ['All', ...projectCategories]

  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="work-title" className="h2 lg:col-span-6" data-reveal>
            Good Work Is Meant to Be Seen.
          </h2>
          <div className="lg:col-span-6" data-reveal style={delay(1)}>
            <p className="lead text-ink/80">
              A look at the kinds of spaces we paint, from calm bedrooms to bold feature walls and fresh exteriors.
            </p>
            {hasDemo && (
              <p className="mt-4 rounded-xl bg-ground-2 px-4 py-3 text-base text-muted">
                <strong className="font-semibold text-ink">Demo content.</strong> These are sample photographs, not
                completed TrueCoat projects. Real project photographs replace them before launch.
              </p>
            )}
          </div>
        </div>

        <div
          role="group"
          aria-label="Filter projects by category"
          className="mt-10 flex flex-wrap gap-2"
        >
          {filters.map((f) => {
            const on = filter === f
            return (
              <button
                key={f}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f)}
                className={`min-h-11 shrink-0 rounded-full px-5 text-base font-semibold transition-colors duration-200 ${
                  on ? 'bg-ink text-white' : 'bg-ground-2 text-ink hover:bg-[#e2e7df]'
                }`}
              >
                {f === 'All' ? 'All Projects' : f}
              </button>
            )
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          {items.length} {items.length === 1 ? 'project' : 'projects'} shown
        </p>

        <ul className="mt-8 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-12">
          {items.map((p, i) => {
            const cell = pattern[i % pattern.length]
            return (
              <li key={p.id} className={`group flex flex-col ${cell.span}`}>
                <div className={`relative overflow-hidden rounded-2xl ${cell.height}`}>
                  <Picture
                    name={p.image}
                    alt={p.alt}
                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] lg:aspect-auto"
                  />
                  {p.isDemo && <DemoTag className="absolute left-3 top-3" />}
                </div>
                <div className="mt-4 flex flex-col items-start">
                  <div>
                    <p className="text-sm font-semibold text-green-ink">{p.category}</p>
                    <h3 className="mt-1 text-xl font-bold leading-snug">{p.title}</h3>
                    <p className="mt-1 text-ink/80">{p.description}</p>
                  </div>
                  <WhatsAppAction message={projectMessage(p.category, p.title)} className="text-link mt-1">
                    <MessageCircle aria-hidden size={18} />
                    Ask About a Similar Project
                  </WhatsAppAction>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
