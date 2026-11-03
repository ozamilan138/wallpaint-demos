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
          className="flex min-h-16 w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left text-lg font-semibold transition-colors hover:text-green-deep sm:px-6"
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
    <section id="faq" aria-labelledby="faq-title" className="bg-field py-20 lg:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 id="faq-title" data-reveal className="text-[1.75rem] leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
            Questions Before You Start
          </h2>
          <p data-reveal className="mt-5 max-w-md text-lg text-muted-strong">
            Short answers to the questions that people often ask. If your question is not here, send it to us.
          </p>
          <WhatsAppButton
            message="Hello TrueCoat Painting Co., I have a question about painting my home."
            className="btn btn-secondary mt-8"
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
