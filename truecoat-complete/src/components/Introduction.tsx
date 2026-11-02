import { introHighlights } from '../data/content'
import { delay } from '../lib/reveal'
import { Picture } from './Picture'

export function Introduction() {
  return (
    <section id="about" aria-labelledby="intro-title" className="section">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5" data-reveal>
          <div className="relative">
            <Picture
              name="intro-tools"
              alt="A paint tray with a roller and white paint, ready for work"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[16/11] lg:aspect-[4/5]"
            />
            <p className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 text-base leading-snug sm:right-auto sm:max-w-[18rem]">
              <span className="block font-display font-bold">One room or the whole home</span>
              <span className="text-muted">The same care and attention, whatever the size of the project.</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <h2 id="intro-title" className="h2 lg:max-w-[18ch]" data-reveal>
            Every Home Has Different Painting Needs.
          </h2>
          <p className="lead mt-6 max-w-2xl" data-reveal style={delay(1)}>
            Some projects need a simple refresh. Others call for a complete change in colour and finish. We aim to make
            professional painting services accessible through clear communication, suitable options and careful
            attention to each project.
          </p>
          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-3">
            {introHighlights.map((h, i) => (
              <li key={h.title} data-reveal style={delay(i + 2)} className="border-t-4 border-oat pt-4">
                <h3 className="text-lg font-bold leading-snug">{h.title}</h3>
                <p className="mt-2 text-ink/80">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
