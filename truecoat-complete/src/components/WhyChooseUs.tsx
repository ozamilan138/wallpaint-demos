import { MessageCircle } from 'lucide-react'
import { reasons } from '../data/content'
import { generalMessage } from '../lib/whatsapp'
import { delay } from '../lib/reveal'
import { WhatsAppAction } from './contact/ContactActions'

/** The reasons are a list in large type: a title on the left and its explanation on the right. */
export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-title" className="section">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 id="why-title" className="h2 lg:col-span-7" data-reveal>
            Quality and Flexibility Should Go Together.
          </h2>
          <p className="lead text-ink/80 lg:col-span-5" data-reveal style={delay(1)}>
            You should not have to choose between careful work and a plan that suits your budget. This is how we intend
            to work on every project.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:mt-16 xl:grid-cols-12 xl:gap-16">
          <div className="order-last xl:order-none xl:col-span-4">
            <div className="xl:sticky xl:top-28">
              <div className="rounded-2xl bg-green p-6 text-white sm:p-8" data-reveal style={delay(2)}>
                <p className="font-display text-xl font-bold leading-snug">Not sure where to start?</p>
                <p className="mt-1 text-white/85">Ask us a question. There is no obligation.</p>
                <WhatsAppAction message={generalMessage} className="btn btn-light mt-5 w-full sm:w-auto">
                  <MessageCircle aria-hidden size={18} />
                  Message Us on WhatsApp
                </WhatsAppAction>
              </div>
            </div>
          </div>

          <ul className="flex flex-col gap-3 xl:col-span-8">
            {reasons.map((r, i) => (
              <li
                key={r.title}
                data-reveal
                style={delay(i % 2)}
                className={`grid gap-3 rounded-2xl p-6 sm:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] sm:gap-8 sm:p-8 ${
                  r.pending
                    ? 'bg-white outline-2 -outline-offset-2 outline-dashed outline-[#cfd6ce]'
                    : i % 2
                      ? 'bg-white'
                      : 'bg-ground-2'
                }`}
              >
                <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-[1.75rem]">{r.title}</h3>
                <div>
                  <p className="text-lg text-ink/80">{r.text}</p>
                  {r.pending && (
                    <p className="mt-3 inline-flex rounded-full bg-ground-2 px-3 py-1 text-sm font-semibold text-ink">
                      To be confirmed by the owner
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
