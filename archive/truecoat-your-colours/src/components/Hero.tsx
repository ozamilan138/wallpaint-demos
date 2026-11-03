import { ArrowDown, Check } from 'lucide-react'
import { Img } from './Img'
import { WhatsAppButton } from './ContactButtons'
import { palettes } from '../data/palettes'
import { usePlanner } from '../lib/planner'
import { generalMessage, plannerMessage } from '../lib/messages'

const heroPalettes = palettes.slice(0, 6)

export function Hero() {
  const { state, count, choose, goTo } = usePlanner()

  const startFrom = (id: string) => {
    choose('palette', id)
    goTo('palette', { scroll: true })
  }

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-6 pb-16 sm:pt-10 lg:pt-12 lg:pb-24">
      <div className="container-page">
        <h1
          id="hero-title"
          className="text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.035em] sm:text-[3.4rem] md:text-[2.95rem] lg:text-[4rem] xl:text-[5.1rem]"
        >
          <span className="md:block">Imagine Your Home.</span> <span className="md:block">Discover the Right Colours.</span>
        </h1>

        <div className="mt-6 grid gap-6 lg:mt-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-8">
          <div className="lg:col-span-4 lg:row-start-1">
            <p className="max-w-[32rem] text-lg leading-relaxed text-ink/85 sm:text-xl">
              Explore painting ideas, discover colour combinations and find professional solutions for your home and
              budget.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="#explore" className="btn btn-primary min-h-14 px-7 text-[17px]">
                Explore Colour Ideas
                <ArrowDown className="size-5" aria-hidden />
              </a>
              <WhatsAppButton
                message={() => (count > 0 ? plannerMessage(state) : generalMessage())}
                className="btn btn-secondary min-h-14 px-7 text-[17px]"
              >
                Discuss Your Project
              </WhatsAppButton>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-photo)] bg-surface sm:aspect-[16/10] lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1 lg:aspect-auto lg:min-h-[34rem]">
            <Img
              name="hero-living"
              alt="A living room with soft sage walls, rattan pendant lights, a grey sofa and plants"
              sizes="(min-width: 1024px) 64vw, 100vw"
              priority
              className="hero-drift size-full object-cover"
            />
          </div>

          {/* The paint chip strip: each chip starts the planner with a palette. */}
          <div className="rounded-2xl bg-white p-4 sm:p-5 lg:col-span-4 lg:row-start-2 lg:self-start">
            <h2 id="chips-title" className="font-ui text-base font-bold text-ink">
              Start From a Palette
            </h2>
            <ul aria-labelledby="chips-title" className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
              {heroPalettes.map((p) => {
                const selected = state.palette === p.id
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => startFrom(p.id)}
                      aria-pressed={selected}
                      className={`group w-full overflow-hidden rounded-[var(--radius-chip)] bg-ground text-left -outline-offset-2 transition-transform duration-200 hover:-translate-y-0.5 ${selected ? 'outline-2 outline-green' : 'outline-0 hover:outline-2 hover:outline-ink/20'}`}
                    >
                      <span className="flex h-9" aria-hidden>
                        {p.swatches.map((s) => (
                          <span key={s.hex} className="flex-1" style={{ background: s.hex }} />
                        ))}
                      </span>
                      <span className="font-ui flex min-h-11 items-center justify-between gap-1 px-2.5 py-1.5 text-[14px] leading-tight font-semibold">
                        {p.name}
                        {selected && <Check className="size-4 shrink-0 text-green-deep" aria-hidden />}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
