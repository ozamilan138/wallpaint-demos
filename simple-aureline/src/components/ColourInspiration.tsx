import { MessageCircle } from 'lucide-react'
import { palettes } from '../data/content'
import { WhatsAppAction } from './contact/ContactActions'
import { paletteMessage } from '../lib/contact'
import { SectionHeading } from './SectionHeading'

export function ColourInspiration() {
  return (
    <section id="colours" aria-labelledby="colours-title" className="bg-linen">
      <div className="page-x mx-auto max-w-page py-16 sm:py-24">
        <SectionHeading id="colours-title" title="Colour Ideas">
          Four palettes to start the conversation. Send the one you like and we can talk it through.
        </SectionHeading>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {palettes.map((palette) => (
            <li key={palette.id} className="flex flex-col bg-paper p-5 sm:p-6">
              <h3 className="text-[26px] leading-tight">{palette.name}</h3>
              <p className="mt-1 text-[15px] text-muted">{palette.mood}</p>
              <ul className="mt-5 grid grid-cols-4 gap-2" aria-label={`Colours in ${palette.name}`}>
                {palette.swatches.map((swatch) => (
                  <li key={swatch.name}>
                    <span
                      aria-hidden
                      className="block h-14 border border-ink/10"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="mt-2 block text-[13px] leading-snug">{swatch.name}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppAction
                message={paletteMessage(
                  palette.name,
                  palette.swatches.map((s) => s.name),
                )}
                className="btn btn-outline mt-6 w-full sm:w-auto sm:self-start"
                ariaLabel={`Discuss the ${palette.name} palette on WhatsApp`}
              >
                <MessageCircle aria-hidden size={18} />
                Discuss Your Colour Ideas
              </WhatsAppAction>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-[44rem] text-[14px] leading-[1.55] text-muted">
          Screen colours are only a guide. Always check physical paint samples in your own light before you choose a
          final shade.
        </p>
      </div>
    </section>
  )
}
