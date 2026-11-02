import { Plus } from 'lucide-react'
import { faqs } from '../data/faqs'
import { useReveal } from '../hooks/useReveal'

/** An accordion that uses the native details element, so it works with a keyboard and without script. */
export function Faq() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="faq" aria-labelledby="faq-title" className="bg-mist py-24 sm:py-32 lg:py-36">
      <div className="frame grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="reveal text-[clamp(2.2rem,5vw,3.75rem)] leading-[1.02] font-extrabold">
            Common Questions.
          </h2>
          <p className="reveal mt-5 max-w-[34ch] text-[18px] leading-relaxed" style={{ ['--d' as string]: '80ms' }}>
            Still not sure? Send us a message. We are happy to explain.
          </p>
        </div>
        <div className="grid gap-3 lg:col-span-7 lg:col-start-6">
          {faqs.map((f, i) => (
            <details key={f.question} className="reveal group rounded-3xl bg-white" style={{ ['--d' as string]: `${i * 50}ms` }}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-[18px] leading-snug font-semibold sm:px-7 [&::-webkit-details-marker]:hidden">
                {f.question}
                <Plus className="size-5 shrink-0 text-green-deep transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-[68ch] px-6 pb-6 text-[16px] leading-relaxed text-soft-ink sm:px-7">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
