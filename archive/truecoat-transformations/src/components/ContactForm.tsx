import { useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { enquiryMessage, whatsappHref, type EnquiryDetails } from '../utils/whatsapp'
import { useDemoNotice } from './ContactProvider'
import { WhatsAppIcon } from './WhatsAppIcon'

export const propertyTypes = ['Apartment', 'Independent house', 'Villa or row house', 'Other'] as const
export const paintingTypes = [
  'Interior painting',
  'Exterior painting',
  'Interior and exterior',
  'Repainting',
  'Texture painting',
  'Feature wall painting',
] as const

type Field = keyof EnquiryDetails
type Errors = Partial<Record<Field, string>>

const empty: EnquiryDetails = { name: '', mobile: '', propertyType: '', paintingType: '', location: '', message: '' }

const labels: Record<Field, string> = {
  name: 'Name',
  mobile: 'Mobile number',
  propertyType: 'Property type',
  paintingType: 'Type of painting',
  location: 'Location',
  message: 'Message',
}

function validate(field: Field, value: string): string | undefined {
  const v = value.trim()
  switch (field) {
    case 'name':
      return v.length < 2 ? 'Enter your name.' : undefined
    case 'mobile': {
      if (!v) return 'Enter your mobile number.'
      if (!/^[+\d\s().-]+$/.test(v) || v.replace(/\D/g, '').length < 8) return 'Enter a mobile number with at least 8 digits, for example +91 98765 43210.'
      return undefined
    }
    case 'propertyType':
      return v ? undefined : 'Choose a property type.'
    case 'paintingType':
      return v ? undefined : 'Choose the type of painting.'
    default:
      return undefined
  }
}

const required: Field[] = ['name', 'mobile', 'propertyType', 'paintingType']

/**
 * The enquiry form. It has no backend: on submit it builds a structured WhatsApp
 * message from the answers. If WhatsApp is not configured, the demo notice shows the message.
 */
export function ContactForm() {
  const [values, setValues] = useState<EnquiryDetails>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [summary, setSummary] = useState<Field[]>([])
  const [status, setStatus] = useState('')
  const summaryRef = useRef<HTMLDivElement>(null)
  const notice = useDemoNotice()

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const field = e.target.name as Field
    setValues((v) => ({ ...v, [field]: e.target.value }))
    // Remove an error as soon as the answer becomes valid.
    if (errors[field] && !validate(field, e.target.value)) setErrors((er) => ({ ...er, [field]: undefined }))
    setStatus('')
  }

  const onBlur = (e: { target: { name: string; value: string } }) => {
    const field = e.target.name as Field
    if (!required.includes(field)) return
    // Do not show an error on a field that the visitor only passed through.
    if (!e.target.value && !errors[field]) return
    setErrors((er) => ({ ...er, [field]: validate(field, e.target.value) }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const next: Errors = {}
    for (const f of required) next[f] = validate(f, values[f])
    const failed = required.filter((f) => next[f])
    setErrors(next)
    setSummary(failed)
    if (failed.length) {
      setStatus('')
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    const message = enquiryMessage(values)
    const href = whatsappHref(message)
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
      setStatus('WhatsApp opens in a new tab with your message. Press send in WhatsApp to contact us.')
    } else {
      notice({ kind: 'whatsapp', message })
      setStatus('Your message is ready. On the live website, it opens in WhatsApp.')
    }
  }

  const fieldClass = (f: Field) =>
    `mt-2 block min-h-12 w-full rounded-2xl border-2 bg-paper px-4 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-soft focus-visible:outline-3 focus-visible:outline-offset-1 focus-visible:outline-green ${
      errors[f] ? 'border-[#b42318]' : 'border-[#c9d2c8] hover:border-[#8f9a91]'
    }`

  const describedBy = (f: Field, hint?: string) => [hint, errors[f] ? `${f}-error` : undefined].filter(Boolean).join(' ') || undefined

  const label = (f: Field, req: boolean) => (
    <label htmlFor={f} className="font-ui text-[16px] font-semibold text-ink">
      {labels[f]} <span className="font-normal text-soft-ink">{req ? '(required)' : '(optional)'}</span>
    </label>
  )

  const error = (f: Field) =>
    errors[f] ? (
      <p id={`${f}-error`} className="mt-2 flex items-start gap-1.5 text-[15px] leading-snug text-[#b42318]">
        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
        {errors[f]}
      </p>
    ) : null

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="form-title" className="rounded-3xl bg-white p-6 text-ink sm:p-8 lg:p-10">
      <h3 id="form-title" className="text-[30px] leading-tight font-extrabold">
        Send Your Requirements
      </h3>
      <p className="mt-2 max-w-[60ch] text-[16px] leading-relaxed text-soft-ink">Fill in the form. We turn it into a WhatsApp message that you can check and send.</p>

      {summary.length > 0 && (
        <div ref={summaryRef} tabIndex={-1} role="alert" aria-labelledby="summary-title" className="mt-6 rounded-2xl bg-[#fdecea] p-5 outline-none focus-visible:outline-3 focus-visible:outline-[#b42318]">
          <h4 id="summary-title" className="font-ui text-[16px] font-bold text-[#8f1c13]">
            Check {summary.length === 1 ? 'this answer' : `these ${summary.length} answers`}:
          </h4>
          <ul className="mt-2 grid gap-1">
            {summary.map((f) => (
              <li key={f}>
                <a href={`#${f}`} className="text-[15px] font-medium text-[#8f1c13] underline underline-offset-4">
                  {errors[f] ?? labels[f]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          {label('name', true)}
          <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={onChange} onBlur={onBlur} aria-invalid={!!errors.name} aria-describedby={describedBy('name')} className={fieldClass('name')} />
          {error('name')}
        </div>
        <div>
          {label('mobile', true)}
          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.mobile}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={!!errors.mobile}
            aria-describedby={describedBy('mobile')}
            className={fieldClass('mobile')}
          />
          {error('mobile')}
        </div>
        <div>
          {label('propertyType', true)}
          <select id="propertyType" name="propertyType" value={values.propertyType} onChange={onChange} onBlur={onBlur} aria-invalid={!!errors.propertyType} aria-describedby={describedBy('propertyType')} className={`${fieldClass('propertyType')} cursor-pointer`}>
            <option value="">Choose one</option>
            {propertyTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {error('propertyType')}
        </div>
        <div>
          {label('paintingType', true)}
          <select id="paintingType" name="paintingType" value={values.paintingType} onChange={onChange} onBlur={onBlur} aria-invalid={!!errors.paintingType} aria-describedby={describedBy('paintingType')} className={`${fieldClass('paintingType')} cursor-pointer`}>
            <option value="">Choose one</option>
            {paintingTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {error('paintingType')}
        </div>
        <div className="sm:col-span-2">
          {label('location', false)}
          <input id="location" name="location" type="text" autoComplete="address-level2" placeholder="Area or city…" value={values.location} onChange={onChange} className={fieldClass('location')} />
        </div>
        <div className="sm:col-span-2">
          {label('message', false)}
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="For example: two bedrooms and the hall, the walls are marked…"
            value={values.message}
            onChange={onChange}
            className={`${fieldClass('message')} resize-y`}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-green mt-7 w-full sm:w-auto">
        <WhatsAppIcon className="size-5" />
        Send on WhatsApp
      </button>
      <p className="mt-4 flex items-start gap-2 text-[15px] leading-relaxed text-green-deep" role="status" aria-live="polite">
        {status && <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />}
        {status}
      </p>
    </form>
  )
}
