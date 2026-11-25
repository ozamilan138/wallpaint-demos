import { MessageCircle } from 'lucide-react'
import { paletteColours } from '../data/content'
import { useLanguage } from '../i18n/context'
import { WhatsAppAction } from './contact/ContactActions'
import { SectionHeading } from './SectionHeading'

export function ColourInspiration() {
  const { t } = useLanguage()
  return (
    <section id="colours" aria-labelledby="colours-title" className="bg-linen">
      <div className="page-x mx-auto max-w-page py-16 sm:py-24">
        <SectionHeading id="colours-title" title={t.colours.title}>
          {t.colours.intro}
        </SectionHeading>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {paletteColours.map((colours, index) => {
            const palette = t.colours.palettes[index]
            return (
              <li key={colours.id} className="flex flex-col bg-paper p-5 sm:p-6">
                <h3 className="text-[26px] leading-tight">{palette.name}</h3>
                <p className="mt-1 text-[15px] text-muted">{palette.mood}</p>
                <ul className="mt-5 grid grid-cols-4 gap-2" aria-label={t.colours.coloursIn(palette.name)}>
                  {colours.hex.map((hex, i) => (
                    <li key={hex}>
                      <span aria-hidden className="block h-14 border border-ink/10" style={{ backgroundColor: hex }} />
                      <span className="mt-2 block text-[13px] leading-snug">{palette.swatches[i]}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppAction
                  message={t.messages.palette(t.businessName, palette.name, palette.swatches)}
                  className="btn btn-outline mt-6 w-full sm:w-auto sm:self-start"
                  ariaLabel={t.colours.discussAria(palette.name)}
                >
                  <MessageCircle aria-hidden size={18} />
                  {t.colours.discuss}
                </WhatsAppAction>
              </li>
            )
          })}
        </ul>

        <p className="mt-6 max-w-[44rem] text-[14px] leading-[1.55] text-muted">{t.colours.note}</p>
      </div>
    </section>
  )
}
