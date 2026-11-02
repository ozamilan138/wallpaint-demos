import { useMemo, useRef, useState } from 'react'
import { galleryProjects, projectCategories, type ProjectCategory } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import { ProjectCard } from './ProjectCard'

type Filter = 'All' | ProjectCategory

/**
 * The grid places the cards like prints on a wall. Each card gets its width, offset
 * and photo shape from its position:
 * - phone: one column, all 4:3;
 * - tablet: four positions repeat, two cards in each row;
 * - wide screen: five positions repeat, a row of two large cards, then a row of three.
 */
const tablet = [
  { cell: 'md:col-span-7 md:col-start-1 md:mt-0', media: 'md:aspect-[4/3]' },
  { cell: 'md:col-span-5 md:col-start-8 md:mt-20', media: 'md:aspect-[4/5]' },
  { cell: 'md:col-span-5 md:col-start-1 md:mt-0', media: 'md:aspect-[4/5]' },
  { cell: 'md:col-span-7 md:col-start-6 md:mt-28', media: 'md:aspect-[3/2]' },
]
const wide = [
  { cell: 'lg:col-span-7 lg:col-start-1 lg:mt-0', media: 'lg:aspect-[4/3]', sizes: '56vw' },
  { cell: 'lg:col-span-4 lg:col-start-9 lg:mt-20', media: 'lg:aspect-[4/5]', sizes: '32vw' },
  { cell: 'lg:col-span-4 lg:col-start-1 lg:mt-0', media: 'lg:aspect-[4/5]', sizes: '32vw' },
  { cell: 'lg:col-span-4 lg:col-start-5 lg:mt-28', media: 'lg:aspect-square', sizes: '32vw' },
  { cell: 'lg:col-span-4 lg:col-start-9 lg:mt-12', media: 'lg:aspect-[4/5]', sizes: '32vw' },
]

const layoutFor = (i: number) => {
  const t = tablet[i % tablet.length]
  const w = wide[i % wide.length]
  return {
    cell: `${t.cell} ${w.cell}`,
    media: `aspect-[4/3] ${t.media} ${w.media}`,
    sizes: `(min-width: 1024px) ${w.sizes}, (min-width: 768px) 56vw, 100vw`,
  }
}

/** The number of cards that "All" shows before the visitor asks for more. */
const FIRST_COUNT = 9

/** The filter is kept in the URL (for example ?projects=bedrooms), so a filtered view can be shared. */
const slug = (f: string) => f.toLowerCase().replace(/\s+/g, '-')
const PARAM = 'projects'

function filterFromUrl(): Filter {
  if (typeof window === 'undefined') return 'All'
  const value = new URLSearchParams(window.location.search).get(PARAM)
  return projectCategories.find((c) => slug(c) === value) ?? 'All'
}

function filterToUrl(f: Filter) {
  const url = new URL(window.location.href)
  if (f === 'All') url.searchParams.delete(PARAM)
  else url.searchParams.set(PARAM, slug(f))
  window.history.replaceState(null, '', url)
}

export function ProjectGallery() {
  const ref = useReveal<HTMLElement>()
  const [filter, setFilter] = useState<Filter>(filterFromUrl)
  const [expanded, setExpanded] = useState(false)
  const changed = useRef(false)
  const listRef = useRef<HTMLUListElement>(null)

  const counts = useMemo(() => {
    const c = new Map<Filter, number>([['All', galleryProjects.length]])
    for (const cat of projectCategories) c.set(cat, galleryProjects.filter((p) => p.category === cat).length)
    return c
  }, [])

  const matching = filter === 'All' ? galleryProjects : galleryProjects.filter((p) => p.category === filter)
  const limited = filter === 'All' && !expanded && matching.length > FIRST_COUNT
  const visible = limited ? matching.slice(0, FIRST_COUNT) : matching
  const filters: Filter[] = ['All', ...projectCategories.filter((c) => (counts.get(c) ?? 0) > 0)]
  const hasDemo = visible.some((p) => p.isDemo)

  const choose = (f: Filter) => {
    changed.current = true
    setFilter(f)
    filterToUrl(f)
  }

  const showAll = () => {
    changed.current = true
    setExpanded(true)
    // Move focus to the first new card, so keyboard users continue from there.
    requestAnimationFrame(() => listRef.current?.querySelectorAll<HTMLElement>('article')[FIRST_COUNT]?.focus())
  }

  return (
    <section ref={ref} id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32 lg:py-40">
      <div className="frame">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2 id="projects-title" className="reveal text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[1] font-extrabold md:col-span-7">
            Explore the Work.
          </h2>
          <div className="reveal md:col-span-5 md:pb-2" style={{ ['--d' as string]: '80ms' }}>
            <p className="text-[18px] leading-relaxed">Living rooms, bedrooms, apartments, house fronts and feature walls. Choose a type of room to filter.</p>
            {hasDemo && (
              <p className="mt-3 text-[15px] leading-relaxed text-soft-ink">
                These are sample photos for this demo, not TrueCoat projects. Photos of real TrueCoat jobs replace them before launch.
              </p>
            )}
          </div>
        </div>

        <div role="group" aria-label="Filter the projects by type" className="reveal mt-10 flex flex-wrap gap-2 sm:mt-12" style={{ ['--d' as string]: '140ms' }}>
          {filters.map((f) => {
            const active = f === filter
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                onClick={() => choose(f)}
                className={`inline-flex min-h-11 cursor-pointer touch-manipulation items-center gap-2 rounded-full px-4 font-ui text-[15px] font-semibold transition-colors duration-150 sm:px-5 sm:text-[16px] ${
                  active ? 'bg-ink text-white' : 'bg-mist text-ink hover:bg-[#dbe4d8]'
                }`}
              >
                {f === 'All' ? 'All' : f}
                <span className={`text-[14px] font-medium tabular-nums ${active ? 'text-white/70' : 'text-soft-ink'}`}>{counts.get(f)}</span>
              </button>
            )
          })}
        </div>
        <p className="sr-only" aria-live="polite">
          {changed.current ? `Showing ${visible.length} ${visible.length === 1 ? 'project' : 'projects'}${filter === 'All' ? '' : ` in ${filter}`}.` : ''}
        </p>

        <ul ref={listRef} key={filter} className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:mt-14 md:grid-cols-12 md:gap-x-8 md:gap-y-16 lg:gap-x-10">
          {visible.map((project, i) => {
            const layout = layoutFor(i)
            return (
              <ProjectCard
                key={project.id}
                project={project}
                layout={layout}
                sizes={layout.sizes}
                animate={changed.current}
                style={{ ['--d' as string]: `${Math.min(i % FIRST_COUNT, 5) * 60}ms` }}
              />
            )
          })}
        </ul>

        {limited && (
          <div className="mt-14 lg:mt-20">
            <button type="button" onClick={showAll} className="btn btn-outline">
              Show All {matching.length} Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
