import { Img } from './Img'
import { finishes } from '../data/content'
import { useReveal } from '../lib/useReveal'

/** A four-step sheen meter. It shows the level with filled bars and with text. */
function SheenMeter({ level, label }: { level: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex items-end gap-1" aria-hidden>
        {[1, 2, 3, 4].map((n) => (
          <span
            key={n}
            className={`w-2.5 rounded-sm ${n <= level ? 'bg-green' : 'bg-ink/12'}`}
            style={{ height: `${8 + n * 4}px` }}
          />
        ))}
      </span>
      <span className="font-ui text-[15px] font-semibold">
        <span className="sr-only">Sheen: </span>
        {label}
      </span>
    </div>
  )
}

export function PaintFinishes() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="finishes" aria-labelledby="finishes-title" className="section-gap">
      <div className="container-page">
        <div ref={ref} className="reveal grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2 id="finishes-title" className="h2 lg:col-span-5">
            Explore Different Finishes
          </h2>
          <p className="text-lg leading-relaxed text-ink/85 lg:col-span-6 lg:col-start-7">
            The finish is how much the paint shines when it is dry. Here is a simple guide to the common options. We can
            tell you which finishes are available for your project.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {finishes.map((f, i) => (
            <li key={f.id} className={`flex flex-col ${i % 2 === 1 ? 'lg:mt-12' : ''}`}>
              <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-photo)] bg-surface">
                <Img name={f.image} alt={f.imageAlt} sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw" className="size-full object-cover" />
              </div>
              <h3 className="mt-4 text-[1.35rem] font-extrabold tracking-[-0.015em]">{f.name}</h3>
              <div className="mt-2">
                <SheenMeter level={f.sheen} label={f.sheenLabel} />
              </div>
              <p className="mt-3 text-[16px] leading-relaxed text-ink/85">{f.description}</p>
              <p className="mt-3 text-[15px] text-ink">
                <span className="font-semibold">Often considered for:</span> {f.oftenFor}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
