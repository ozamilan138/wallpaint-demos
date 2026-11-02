import { Camera, MessageCircle, MessageSquareQuote, PaintRoller, ReceiptText, Wallet } from 'lucide-react'
import { business } from '../data/config'
import { commitments, type Commitment } from '../data/content'
import { useReveal } from '../hooks/useReveal'

const icons: Record<Commitment['icon'], typeof ReceiptText> = {
  estimate: ReceiptText,
  message: MessageCircle,
  roller: PaintRoller,
  budget: Wallet,
}

/**
 * About TrueCoat and the proposed service commitments.
 * The two slots at the end are ready for real project photos and verified reviews.
 */
export function WhyChooseUs() {
  const ref = useReveal<HTMLElement>()
  return (
    <section ref={ref} id="about" aria-labelledby="about-title" className="bg-dark py-24 text-white sm:py-32 lg:py-40">
      <div className="frame">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h2 id="about-title" className="reveal text-[clamp(2.2rem,5.2vw,4.25rem)] leading-[1.02] font-extrabold lg:col-span-7">
            Honest Work, Clearly Explained.
          </h2>
          <p className="reveal max-w-[44ch] text-[18px] leading-relaxed text-white/85 lg:col-span-5 lg:pb-2" style={{ ['--d' as string]: '80ms' }}>
            {business.name} paints homes and apartments. We keep it simple: a clear estimate, regular updates, careful work and a price that suits the job.
          </p>
        </div>

        <div className="mt-14 lg:mt-20">
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {commitments.map((c, i) => {
              const Icon = icons[c.icon]
              return (
                <li key={c.title} className="reveal" style={{ ['--d' as string]: `${100 + i * 70}ms` }}>
                  <span className="grid size-12 place-items-center rounded-full bg-green text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[22px] leading-snug font-bold">{c.title}</h3>
                  <p className="mt-1.5 text-[16px] leading-relaxed text-white/80">{c.text}</p>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Slots for real proof. They stay until the owner adds real photos and verified reviews. */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-24">
          <div className="reveal flex gap-4 rounded-3xl bg-dark-2 p-6 sm:p-8">
            <Camera className="mt-1 size-6 shrink-0 text-warm" aria-hidden="true" />
            <div>
              <h3 className="text-[20px] font-bold">Real TrueCoat projects</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-white/80">Photos from finished TrueCoat jobs will appear here when they are ready.</p>
            </div>
          </div>
          <div className="reveal flex gap-4 rounded-3xl bg-dark-2 p-6 sm:p-8" style={{ ['--d' as string]: '80ms' }}>
            <MessageSquareQuote className="mt-1 size-6 shrink-0 text-warm" aria-hidden="true" />
            <div>
              <h3 className="text-[20px] font-bold">Verified customer feedback</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-white/80">Reviews from real customers will appear here, with their permission.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
