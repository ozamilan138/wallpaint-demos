import { useEffect, useMemo, useState } from 'react'
import { projectCategories, projects, type Project } from '../data/content'
import { ProjectCard } from './ProjectCard'

type Filter = (typeof projectCategories)[number]

/** The number of masonry columns for the current viewport width. */
function useColumnCount() {
  const query = () => (window.matchMedia('(min-width: 1024px)').matches ? 3 : window.matchMedia('(min-width: 640px)').matches ? 2 : 1)
  const [count, setCount] = useState(query)
  useEffect(() => {
    const onResize = () => setCount(query())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return count
}

/**
 * Puts each card in the shortest column, so that the columns end at almost the same height.
 * Every third card is tall (4:5); the others are 4:3.
 */
function balance(items: Project[], columns: number) {
  const cols = Array.from({ length: columns }, () => ({ height: 0, items: [] as Array<{ project: Project; tall: boolean }> }))
  items.forEach((project, i) => {
    const tall = i % 3 === 1
    const target = cols.reduce((a, b) => (b.height < a.height ? b : a))
    target.items.push({ project, tall })
    target.height += tall ? 1.25 : 0.75
  })
  return cols
}

export function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>('All Projects')
  const columnCount = useColumnCount()
  const visible = useMemo(
    () => (filter === 'All Projects' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )
  const columns = useMemo(() => balance(visible, Math.min(columnCount, Math.max(1, visible.length))), [visible, columnCount])

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-32 lg:py-40">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <h2
            id="work-title"
            data-reveal
            className="text-[clamp(2.6rem,6.5vw,5.75rem)] leading-[0.95] font-extrabold tracking-[-0.05em] md:col-span-6 lg:col-span-7"
          >
            Our Work
          </h2>
          <p data-reveal style={{ ['--d' as string]: 1 }} className="max-w-lg text-[17px] leading-relaxed md:col-span-6 md:justify-self-end lg:col-span-5">
            Living rooms, bedrooms, exteriors, feature walls and whole apartments. Filter by room to find
            a look close to yours, then ask about it on WhatsApp.
          </p>
        </div>

        <p className="mt-6 rounded-xl bg-paper-2 px-4 py-3 text-[14px] leading-relaxed text-muted-ink">
          <strong className="font-semibold text-ink">Demo content.</strong> These are sample Unsplash
          photographs that show the style of the portfolio. They are not completed Aureline projects and
          must be replaced with verified project photographs before launch.
        </p>

        <div role="group" aria-label="Filter projects by category" className="mt-10 flex flex-wrap gap-2">
          {projectCategories.map((category) => {
            const active = category === filter
            const count = category === 'All Projects' ? projects.length : projects.filter((p) => p.category === category).length
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-[15px] font-semibold whitespace-nowrap transition-colors duration-200 ${
                  active ? 'bg-dark text-white' : 'bg-paper-2 text-ink hover:bg-[#e2dfd9]'
                }`}
              >
                {category}
                <span className={`text-[13px] font-medium ${active ? 'text-white/70' : 'text-muted-ink'}`}>{count}</span>
              </button>
            )
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          {filter === 'All Projects' ? '' : ` in ${filter}`}
        </p>

        <div
          key={filter}
          className="mt-8 grid gap-5 md:gap-6 motion-safe:animate-[gallery-in_500ms_var(--ease-out-soft)]"
          style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
        >
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-5 md:gap-6">
              {col.items.map(({ project, tall }) => (
                <ProjectCard key={project.id} project={project} tall={tall} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
