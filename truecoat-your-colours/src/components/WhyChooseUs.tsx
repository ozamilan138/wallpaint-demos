import { ClipboardCheck, Layers, MessagesSquare, Paintbrush, Send, SlidersHorizontal } from 'lucide-react'
import { Img } from './Img'
import { principles } from '../data/content'
import { useReveal } from '../lib/useReveal'

const icons = [Layers, ClipboardCheck, Paintbrush, MessagesSquare, SlidersHorizontal, Send]

export function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>()
  return (
    <section id="about" aria-labelledby="about-title" className="section-gap bg-green text-white">
      <div className="container-page">
        <div ref={ref} className="reveal grid gap-5 lg:grid-cols-12 lg:items-end">
          <h2 id="about-title" className="h2 text-white lg:col-span-7">
            Professional Service That Understands Your Needs
          </h2>
          <p className="max-w-[34rem] text-lg leading-relaxed text-white lg:col-span-5">
            TrueCoat Painting Co. offers residential and apartment painting for different project sizes and budgets.
            These are the principles we work to.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:items-center">
          <div className="hidden aspect-[4/5] overflow-hidden rounded-[var(--radius-photo)] bg-green-deep md:block md:aspect-[16/9] lg:col-span-5 lg:aspect-[4/5]">
            <Img
              name="why-prep"
              alt="Hands smoothing filler on a wall before it is painted"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="size-full object-cover"
            />
          </div>

          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:col-span-7">
            {principles.map((p, i) => {
              const Icon = icons[i]
              return (
                <li key={p.title} className="flex gap-4 py-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-green-deep" aria-hidden>
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-[1.2rem] leading-snug font-extrabold tracking-[-0.01em] text-white">{p.title}</h3>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-white">{p.text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
