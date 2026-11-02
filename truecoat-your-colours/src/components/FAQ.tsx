import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { WhatsAppButton } from './ContactButtons'
import { faqs } from '../data/faqs'
import { generalMessage } from '../lib/messages'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-gap bg-surface">
      <div className="container-page grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 id="faq-title" className="h2">
            Questions People Ask
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/85">Do you have a different question? Ask us directly.</p>
          <WhatsAppButton message={generalMessage()} className="btn btn-secondary mt-6">
            Ask on WhatsApp
          </WhatsAppButton>
        </div>

        <ul className="grid gap-3 lg:col-span-8">
          {faqs.map((f, i) => {
            const expanded = open === i
            const btnId = `${baseId}-q${i}`
            const panelId = `${baseId}-a${i}`
            return (
              <li key={f.question} className="rounded-2xl bg-white">
                <h3 className="text-[1.1rem] sm:text-[1.2rem]">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? null : i)}
                    className="flex min-h-16 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-extrabold tracking-[-0.01em] sm:px-6"
                  >
                    {f.question}
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-surface transition-transform duration-300 ${expanded ? 'rotate-45' : ''}`}
                      aria-hidden
                    >
                      <Plus className="size-5" />
                    </span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={btnId} hidden={!expanded} className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <p className="max-w-[44rem] text-[16px] leading-relaxed text-ink/85">{f.answer}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
