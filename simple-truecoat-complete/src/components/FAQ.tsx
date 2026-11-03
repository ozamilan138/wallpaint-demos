import { useId, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { faqs } from '../data/content'
import { generalMessage } from '../lib/whatsapp'
import { WhatsAppAction } from './contact/ContactActions'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" aria-labelledby="faq-title" className="section">
      <div className="container-page">
        <div className="max-w-3xl">
          <h2 id="faq-title" className="h2">
            Questions We Often Hear.
          </h2>

          <ul className="mt-8 flex flex-col gap-3">
            {faqs.map((item, i) => {
              const open = openIndex === i
              const buttonId = `${baseId}-q${i}`
              const panelId = `${baseId}-a${i}`
              return (
                <li key={item.q} className="rounded-2xl bg-ground-2">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-display text-lg font-bold leading-snug sm:px-6"
                    >
                      {item.q}
                      <ChevronDown
                        aria-hidden
                        size={22}
                        className={`shrink-0 text-green-ink transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
                    <p className="px-5 pb-5 text-ink/80 sm:px-6">{item.a}</p>
                  </div>
                </li>
              )
            })}
          </ul>

          <p className="mt-6 text-ink/80">
            Have a question about your own home?{' '}
            <WhatsAppAction message={generalMessage} className="text-link">
              <MessageCircle aria-hidden size={18} />
              Ask Us on WhatsApp
            </WhatsAppAction>
        </p>
        </div>
      </div>
    </section>
  )
}
