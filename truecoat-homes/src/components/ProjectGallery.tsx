import { useMemo, useState } from 'react'
import { galleryProjects, projectCategories, type ProjectCategory } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectFilters } from './ProjectFilters'

export type Filter = 'All Projects' | ProjectCategory

export type CardSpan = 4 | 5 | 7 | 12

/**
 * Column spans for the asymmetric desktop grid (12 columns). Every row is filled.
 * All projects: rows of 7 + 5, then 4 + 4 + 4. A filtered view: rows of 7 + 5 and 5 + 7.
 * A single card left at the end spans the full width.
 */
export function spansFor(count: number, all: boolean): CardSpan[] {
  const out: CardSpan[] = []
  if (all) {
    const cycle: CardSpan[] = [7, 5, 4, 4, 4]
    for (let i = 0; i < count; i++) out.push(cycle[i % 5])
    const rest = count % 5
    if (rest === 1) out[count - 1] = 12
    if (rest === 3) out.splice(count - 1, 1, 12)
    if (rest === 4) out.splice(count - 2, 2, 7, 5)
  } else {
    for (let i = 0; i < count; i++) out.push(Math.floor(i / 2) % 2 === 0 ? (i % 2 ? 5 : 7) : i % 2 ? 7 : 5)
    if (count % 2) out[count - 1] = 12
  }
  return out
}

const spanClass: Record<CardSpan, string> = {
  4: 'md:col-span-4',
  5: 'md:col-span-5',
  7: 'md:col-span-7',
  12: 'sm:col-span-2 md:col-span-12',
}

export function ProjectGallery() {
  // The filter is kept in the address (?projects=Kitchens), so a filtered view can be shared.
  const [filter, setFilterState] = useState<Filter>(() => {
    const value = new URLSearchParams(window.location.search).get('projects')
    return (projectCategories as readonly string[]).includes(value ?? '') ? (value as Filter) : 'All Projects'
  })
  const setFilter = (value: Filter) => {
    setFilterState(value)
    const url = new URL(window.location.href)
    if (value === 'All Projects') url.searchParams.delete('projects')
    else url.searchParams.set('projects', value)
    window.history.replaceState(null, '', url)
  }
  // On phones the full list is long, so it starts with six cards and a button to show the rest.
  const [expanded, setExpanded] = useState(false)
  const PHONE_LIMIT = 6
  const isDemo = galleryProjects.some((p) => p.source === 'demo')

  const counts = useMemo(() => {
    const c: Record<string, number> = { 'All Projects': galleryProjects.length }
    for (const cat of projectCategories) c[cat] = galleryProjects.filter((p) => p.category === cat).length
    return c
  }, [])

  const visible = filter === 'All Projects' ? galleryProjects : galleryProjects.filter((p) => p.category === filter)
  const spans = spansFor(visible.length, filter === 'All Projects')

  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-mist py-24 md:py-36">
      <div className="shell">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="projects-title"
            className="text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em] md:col-span-7"
            data-reveal
          >
            Explore Different Spaces and Styles.
          </h2>
          {isDemo && (
            <p className="max-w-[46ch] text-[16px] text-muted md:col-span-5 md:justify-self-end" data-reveal style={{ ['--i' as string]: 1 }}>
              These are sample photographs that show the kind of work we discuss with customers. They are not TrueCoat
              projects. Real project photos will replace them.
            </p>
          )}
        </div>

        <ProjectFilters
          options={['All Projects', ...projectCategories]}
          counts={counts}
          value={filter}
          onChange={setFilter}
        />

        <p className="sr-only" aria-live="polite">
          {`Showing ${visible.length} ${visible.length === 1 ? 'project' : 'projects'}${filter === 'All Projects' ? '' : ` in ${filter}`}`}
        </p>

        <ul key={filter} className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-12 md:gap-y-14">
          {visible.map((project, i) => (
            <li key={project.id} className={`gallery-in ${spanClass[spans[i]]} ${!expanded && i >= PHONE_LIMIT ? 'max-sm:hidden' : ''}`} style={{ ['--i' as string]: Math.min(i, 6) }}>
              <ProjectCard project={project} span={spans[i]} />
            </li>
          ))}
        </ul>

        {!expanded && visible.length > PHONE_LIMIT && (
          <button type="button" onClick={() => setExpanded(true)} className="btn btn-dark mt-10 w-full sm:hidden">
            Show All {visible.length} Projects
          </button>
        )}
      </div>
    </section>
  )
}
