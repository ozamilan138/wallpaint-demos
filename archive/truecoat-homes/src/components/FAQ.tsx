import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faqs } from '../data/faqs'
import { photos } from '../data/photos'
import { ContactButton } from './ContactButton'
import { Picture } from './Picture'

/** An accessible accordion beside a tall photograph. More than one answer can be open. */
export function FAQ() {
  const [open, setOpen] = useState<number[]>([0])
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]))

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-sand-soft py-24 md:py-36">
      <div className="shell grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-6">
          <h2
            id="faq-title"
            className="text-[clamp(32px,4.4vw,60px)] leading-[1.04] font-extrabold tracking-[-0.03em]"
            data-reveal
          >
            Questions Homeowners Ask
          </h2>

          <div className="mt-10">
            {faqs.map((f, i) => {
              const isOpen = open.includes(i)
              return (
                <div key={f.question} className="border-b-0">
                  <h3>
                    <button
                      type="button"
                      id={`faq-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => toggle(i)}
                      className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-4 py-3 text-left font-display text-[19px] leading-snug font-bold tracking-[-0.01em] md:text-[20px]"
                    >
                      {f.question}
                      <span className={`grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-150 ${isOpen ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
                        <Plus className={`size-4 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="pr-12 pb-5">
                    <p className="max-w-[56ch] text-[17px]">{f.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ContactButton kind="whatsapp" className="btn btn-accent">
              Ask Your Question on WhatsApp
            </ContactButton>
            <a href="#contact" className="link-arrow px-2">
              Or use the enquiry form
            </a>
          </div>
        </div>

        <div className="relative md:col-span-5 md:col-start-8">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
            <Picture photo={photos.faqTall} sizes="(min-width: 768px) 40vw, 100vw" className="h-full w-full object-cover object-[30%_50%]" />
            <span className="demo-tag top-3 left-3">Demo image</span>
          </div>
          <div className="absolute right-4 -bottom-10 aspect-square w-[38%] overflow-hidden bg-sand-soft p-2 md:right-auto md:-left-10 md:w-[40%]">
            <Picture photo={photos.faqSquare} sizes="(min-width: 768px) 16vw, 38vw" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
