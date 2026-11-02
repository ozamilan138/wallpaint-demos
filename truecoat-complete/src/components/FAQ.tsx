import { useId, useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { faqs } from '../data/content'
import { generalMessage } from '../lib/whatsapp'
import { delay } from '../lib/reveal'
import { WhatsAppAction } from './contact/ContactActions'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-ground-2">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 id="faq-title" className="h2" data-reveal>
              Questions We Often Hear.
            </h2>
            <p className="lead mt-6 text-ink/80" data-reveal style={delay(1)}>
              Short answers to common questions. For anything about your own home, send us a message.
            </p>
            <div className="mt-8" data-reveal style={delay(2)}>
              <WhatsAppAction message={generalMessage} className="btn btn-dark">
                <MessageCircle aria-hidden size={18} />
                Ask Your Question
              </WhatsAppAction>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="flex flex-col gap-3">
            {faqs.map((item, i) => {
              const open = openIndex === i
              const buttonId = `${baseId}-q${i}`
              const panelId = `${baseId}-a${i}`
              return (
                <li key={item.q} className="rounded-2xl bg-white">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex min-h-16 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-display text-lg font-bold leading-snug sm:px-7"
                    >
                      {item.q}
                      <ChevronDown
                        aria-hidden
                        size={22}
                        className={`shrink-0 text-green-ink transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
                    <p className="px-5 pb-6 text-ink/80 sm:px-7">{item.a}</p>
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
