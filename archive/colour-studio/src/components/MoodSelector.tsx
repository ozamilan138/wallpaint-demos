import { Check } from 'lucide-react'
import { moods, type MoodId } from '../data/colourDiscovery'
import { Img } from './Img'

interface Props {
  value: MoodId | null
  onChange: (id: MoodId) => void
}

/** Step 2. A radio group of moods, each with a photo and preview colours. */
export function MoodSelector({ value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="sr-only">Select your mood</legend>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {moods.map((mood) => {
          const checked = value === mood.id
          return (
            <label
              key={mood.id}
              className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white transition-shadow duration-200 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-terracotta-deep ${
                checked ? 'ring-[3px] ring-ink' : 'ring-1 ring-ink/10 hover:ring-ink/30'
              }`}
            >
              <input
                type="radio"
                name="mood"
                value={mood.id}
                checked={checked}
                onChange={() => onChange(mood.id)}
                className="sr-only"
              />
              <span className="photo-zoom relative block aspect-[16/10] overflow-hidden">
                <Img name={mood.image} alt="" sizes="(min-width: 1280px) 16vw, (min-width: 640px) 45vw, 92vw" className="size-full object-cover" />
                <span className="absolute inset-x-3 bottom-3 flex h-7 overflow-hidden rounded-full ring-2 ring-white" aria-hidden>
                  {mood.preview.map((hex) => (
                    <span key={hex} className="flex-1" style={{ backgroundColor: hex }} />
                  ))}
                </span>
              </span>
              <span className="flex flex-1 flex-col gap-1.5 p-4">
                <span className="flex items-center justify-between gap-2 text-base font-semibold">
                  {mood.label}
                  <span
                    aria-hidden
                    className={`inline-flex size-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                      checked ? 'bg-ink text-cream' : 'ring-1 ring-ink/25'
                    }`}
                  >
                    {checked && <Check className="size-4" strokeWidth={3} />}
                  </span>
                </span>
                <span className="text-[15px] leading-snug text-muted">{mood.description}</span>
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
