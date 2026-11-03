import { useId, useState } from 'react'
import { MessageCircle, Plus } from 'lucide-react'
import { faqs } from '../data/content'
import { WhatsAppButton } from './contact/ContactActions'

function FaqItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  const buttonId = `${id}-button`
  const panelId = `${id}-panel`
  return (
    <li className="rounded-2xl bg-white">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-base font-semibold sm:text-lg transition-colors hover:text-green-deep sm:px-6"
        >
          {question}
          <span
            aria-hidden
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-field text-green-deep transition-transform duration-300 ${
              open ? 'rotate-45' : ''
            }`}
          >
            <Plus size={20} />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="px-5 pb-5 leading-relaxed text-ink/80 sm:px-6 sm:pb-6"
      >
        <p className="max-w-[60ch]">{answer}</p>
      </div>
    </li>
  )
}

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-field py-16 lg:py-20">
      <div className="wrap grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="faq-title" className="section-title">
            Questions Before You Start
          </h2>
          <p className="mt-3 max-w-md text-lg text-muted-strong">
            If your question is not here, send it to us.
          </p>
          <WhatsAppButton
            message="Hello TrueCoat Painting Co., I have a question about painting my home."
            className="btn btn-secondary mt-6"
          >
            <MessageCircle aria-hidden size={19} />
            Ask a Question
          </WhatsAppButton>
        </div>
        <ul className="flex flex-col gap-3 lg:col-span-7">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
          ))}
        </ul>
      </div>
    </section>
  )
}
