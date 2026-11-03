import { finishes } from '../data/content'
import { finishMessage } from '../lib/whatsapp'
import { WhatsAppButton } from './ContactButtons'
import { Img } from './Img'

/** How much shine each finish has, on a scale of 0 to 3. Texture has no shine level. */
const shine: Record<string, number | null> = { matte: 0, satin: 1, 'semi-gloss': 3, texture: null }

/** A simple guide to paint finishes, for customers who are new to painting words. */
export function PaintFinishes() {
  return (
    <section id="finishes" aria-labelledby="finishes-title" className="bg-sage-soft py-20 sm:py-28">
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 id="finishes-title" className="h-section max-w-[15ch]" data-reveal>
            Choose a Finish That Suits Your Space.
          </h2>
          <p className="lede lg:justify-self-end" data-reveal style={{ ['--d' as string]: 1 }}>
            The finish is how shiny or textured the paint looks when it is dry. Here is a simple guide.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {finishes.map((f, i) => {
            const level = shine[f.id]
            return (
              <li key={f.id} data-reveal style={{ ['--d' as string]: i }} className="flex flex-col overflow-hidden rounded-card bg-paper">
                <Img
                  name={f.image}
                  alt={f.alt}
                  sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 100vw"
                  className="aspect-[4/3] w-full lg:aspect-[3/4]"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[1.375rem] font-extrabold leading-tight">{f.name}</h3>
                  <p className="mt-2 flex items-center gap-3 font-ui text-base font-semibold text-ink">
                    {level !== null && (
                      <span aria-hidden="true" className="flex gap-1">
                        {[0, 1, 2, 3].map((n) => (
                          <span
                            key={n}
                            className={`h-2.5 w-4 rounded-full ${n <= level ? 'bg-sage-deep' : 'bg-sage-soft'}`}
                          />
                        ))}
                      </span>
                    )}
                    {f.looks}
                  </p>
                  <p className="mt-3 text-base leading-relaxed">{f.description}</p>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-ink">{f.usedFor}</p>
                  <WhatsAppButton
                    message={finishMessage(f.name.toLowerCase())}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-full font-ui text-base font-semibold text-sage-deep underline decoration-2 underline-offset-4 hover:text-sage-deeper"
                    icon={false}
                  >
                    Ask About {f.name}
                  </WhatsAppButton>
                </div>
              </li>
            )
          })}
        </ul>
        <p className="mt-6 max-w-[34rem] text-sm text-muted">
          Demo guide. The owner will show only the finishes that the business offers. Results depend on the paint, the
          surface and the room.
        </p>
      </div>
    </section>
  )
}
