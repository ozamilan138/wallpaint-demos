import { Check } from 'lucide-react'
import { reasons, steps } from '../data/content'

/** The four steps of a project, and a short list of reasons to choose the business. */
export function HowWeWork() {
  return (
    <section id="how" aria-labelledby="how-title" className="section">
      <div className="container-page">
        <h2 id="how-title" className="h2 max-w-2xl">
          Getting Started Is Simple.
        </h2>

        <ol className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-green pt-5">
              <span className="text-sm font-bold text-green-ink">Step {i + 1}</span>
              <h3 className="mt-1 text-lg font-bold leading-snug">{s.title}</h3>
              <p className="mt-1.5 text-ink/80">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-2xl border border-[#dfe4dd] bg-white p-6 sm:p-8">
          <h3 className="text-xl font-bold">Why homeowners choose TrueCoat</h3>
          <ul className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-2.5">
                <Check aria-hidden size={18} strokeWidth={2.5} className="mt-1 shrink-0 text-green" />
                <span>
                  {r.title}
                  {r.pending && <span className="text-muted"> (to be confirmed by the owner)</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
