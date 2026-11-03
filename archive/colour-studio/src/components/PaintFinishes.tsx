import { finishes } from '../data/content'
import { Img } from './Img'
import { Reveal, SectionHeading } from './Section'

const sheenLabel = ['Varies', 'Low sheen', 'Soft sheen', 'Clear shine']

function SheenMeter({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex gap-1" aria-hidden>
        {[1, 2, 3].map((n) => (
          <span key={n} className={`h-2 w-7 rounded-full ${level === 0 ? 'bg-ink/25' : n <= level ? 'bg-ink' : 'bg-ink/15'}`} />
        ))}
      </span>
      <span className="text-[15px] font-medium text-muted">{sheenLabel[level]}</span>
    </div>
  )
}

export function PaintFinishes() {
  return (
    <section id="finishes" aria-labelledby="finishes-title" className="py-20 sm:py-28 lg:py-36">
      <div className="container-page">
        <SectionHeading id="finishes-title" title="Choose a Finish That Suits the Room.">
          The finish is how much the dry paint shines. It changes how a colour looks and how easy the wall is to clean.
        </SectionHeading>

        <Reveal as="ul" className="mt-12 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {finishes.map((f, i) => (
            <li key={f.name} className={i % 2 === 1 ? 'lg:mt-16' : ''}>
              <article>
                <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-photo)]">
                  <Img
                    name={f.image}
                    alt={f.alt}
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                    className="size-full scale-[1.35] object-cover"
                    style={{ objectPosition: f.position }}
                  />
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-tight">{f.name}</h3>
                <div className="mt-2">
                  <SheenMeter level={f.sheen} />
                </div>
                <p className="mt-3 text-base text-ink/85">{f.summary}</p>
                <p className="mt-2 text-base text-muted">{f.usedFor}</p>
              </article>
            </li>
          ))}
        </Reveal>

        <p className="mt-12 max-w-2xl text-[15px] text-muted">
          The finishes that are possible depend on the paint, the surface and the room. We confirm the options when we see your space.
        </p>
      </div>
    </section>
  )
}
