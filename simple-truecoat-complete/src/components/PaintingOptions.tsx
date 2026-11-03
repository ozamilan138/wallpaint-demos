import { Check, MessageCircle } from 'lucide-react'
import { paintingOptions } from '../data/options'
import { optionMessage } from '../lib/whatsapp'
import { WhatsAppAction } from './contact/ContactActions'

/**
 * Three ways to describe a project. They are not packages, and they show no prices.
 */
export function PaintingOptions() {
  return (
    <section id="options" aria-labelledby="options-title" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 id="options-title" className="h2">
            Different Homes. Different Needs. The Right Approach.
          </h2>
          <p className="lead mt-4 text-ink/80">
            These are not fixed packages. Tell us what you need, and we will suggest a plan and an estimate that suit
            your home and budget.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {paintingOptions.map((o) => (
            <li key={o.id} className="flex flex-col overflow-hidden rounded-2xl border border-[#dfe4dd] bg-white">
              <span aria-hidden className="h-2" style={{ background: o.chip }} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-snug">{o.title}</h3>
                <p className="mt-2 text-ink/80">{o.description}</p>
                <p className="mt-5 text-sm font-semibold text-muted">Suits you if you have:</p>
                <ul className="mt-2 grid gap-2">
                  {o.needs.map((n) => (
                    <li key={n} className="flex gap-2.5">
                      <Check aria-hidden size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-green" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <WhatsAppAction
                    message={optionMessage(o.title)}
                    label={`Discuss your requirements: ${o.title}`}
                    className="text-link"
                  >
                    <MessageCircle aria-hidden size={18} />
                    Discuss Your Requirements
                  </WhatsAppAction>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
