import { useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { photos } from '../data/photos'
import { enquiryMessage, whatsappHref, type Enquiry } from '../utils/contact'
import { useDemoNotice } from './ContactProvider'
import { ContactButton } from './ContactButton'
import { Picture } from './Picture'
import { WhatsAppIcon } from './WhatsAppIcon'

const propertyTypes = ['Apartment', 'Independent house', 'Villa or bungalow', 'Other']
const projectTypes = [
  'Single room',
  'Several rooms',
  'Complete apartment',
  'Full house interior',
  'Exterior painting',
  'Interior and exterior',
  'Not sure yet',
]
const roomOptions = ['1', '2', '3', '4', '5', '6 or more', 'Not sure']

type Errors = Partial<Record<keyof Enquiry, string>>

const empty: Enquiry = { name: '', phone: '', propertyType: '', projectType: '', rooms: '', location: '', description: '' }

/** A phone number has 7 to 15 digits. Spaces, +, -, dots and brackets are allowed. */
const validPhone = (v: string) => /^[+\d\s().-]+$/.test(v.trim()) && v.replace(/\D/g, '').length >= 7 && v.replace(/\D/g, '').length <= 15

function validate(v: Enquiry): Errors {
  const e: Errors = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!v.phone.trim()) e.phone = 'Enter your phone number.'
  else if (!validPhone(v.phone)) e.phone = 'Enter a phone number with 7 to 15 digits, for example +44 7700 900000.'
  if (!v.propertyType) e.propertyType = 'Select the type of property.'
  if (!v.projectType) e.projectType = 'Select the type of project.'
  if (v.location.trim().length < 2) e.location = 'Enter the area or town of the property.'
  return e
}

function Field({ id, label, optional, error, hint, children }: { id: string; label: string; optional?: boolean; error?: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block font-ui text-[15px] font-semibold">
        {label}
        {optional && <span className="font-medium text-muted"> (optional)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-0.5 text-[14px] text-muted">
          {hint}
        </p>
      )}
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex gap-1.5 text-[14px] font-medium text-[#b3261e]">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export function ProjectEnquiryForm() {
  const uid = useId()
  const [values, setValues] = useState<Enquiry>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sent, setSent] = useState<string | null>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  const notify = useDemoNotice()

  const id = (k: keyof Enquiry) => `${uid}-${k}`
  const set = (k: keyof Enquiry) => (e: { target: { value: string } }) => {
    const next = { ...values, [k]: e.target.value }
    setValues(next)
    // After the first submit, update the errors as the visitor corrects the fields.
    if (submitted) setErrors(validate(next))
  }
  const aria = (k: keyof Enquiry, hint = false) => ({
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': [hint ? `${id(k)}-hint` : '', errors[k] ? `${id(k)}-error` : ''].filter(Boolean).join(' ') || undefined,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setSent(null)
      // Focus the first field with an error. The summary above the form lists every error.
      const order: (keyof Enquiry)[] = ['name', 'phone', 'propertyType', 'projectType', 'location']
      const first = order.find((k) => found[k])
      requestAnimationFrame(() => (first ? document.getElementById(id(first)) : summaryRef.current)?.focus())
      return
    }
    const message = enquiryMessage(values)
    const href = whatsappHref(message)
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer')
      setSent('WhatsApp opened in a new tab with your details. Press send in WhatsApp to share them with us.')
    } else {
      notify({ kind: 'whatsapp', message })
      setSent('Your details are complete. On the live website, this button opens WhatsApp with the message.')
    }
  }

  const errorList = Object.entries(errors) as [keyof Enquiry, string][]

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate md:min-h-[100svh] md:py-24">
      <div className="relative aspect-[4/3] w-full overflow-hidden md:absolute md:inset-0 md:-z-10 md:aspect-auto">
        <Picture photo={photos.contactBright} sizes="100vw" className="h-full w-full object-cover object-[30%_50%]" />
        <span className="demo-tag top-3 left-3 md:top-6 md:left-6">Demo image</span>
      </div>

      <div className="shell relative -mt-20 pb-24 md:mt-0 md:flex md:justify-end md:pb-0">
        <div className="bg-paper p-6 sm:p-8 md:w-[560px] lg:p-10">
          <h2 id="contact-title" className="text-[clamp(28px,3vw,40px)] leading-[1.08] font-extrabold tracking-[-0.025em]">
            Tell Us About Your Project
          </h2>
          <p className="mt-3 text-[17px] text-muted">
            Fill in the form, and we prepare a WhatsApp message with your details. Nothing is sent until you press send in
            WhatsApp. Fields marked optional can stay empty.
          </p>

          <div ref={summaryRef} tabIndex={-1} className="outline-none" aria-live="polite">
            {errorList.length > 0 && (
              <div className="mt-6 bg-[#fbe9e7] p-4 text-[15px] text-[#7d1a14]">
                <p className="font-semibold">Please correct {errorList.length === 1 ? 'this field' : `these ${errorList.length} fields`}:</p>
                <ul className="mt-2 grid gap-1">
                  {errorList.map(([k, msg]) => (
                    <li key={k}>
                      <a href={`#${id(k)}`} className="underline underline-offset-2">
                        {msg}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <form noValidate onSubmit={onSubmit} className="mt-6 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={id('name')} label="Name" error={errors.name}>
                <input id={id('name')} name="name" className="field" autoComplete="name" value={values.name} onChange={set('name')} {...aria('name')} />
              </Field>
              <Field id={id('phone')} label="Phone" error={errors.phone}>
                <input
                  id={id('phone')}
                  name="phone"
                  className="field"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={set('phone')}
                  {...aria('phone')}
                />
              </Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={id('propertyType')} label="Property type" error={errors.propertyType}>
                <select id={id('propertyType')} name="propertyType" className="field cursor-pointer" value={values.propertyType} onChange={set('propertyType')} {...aria('propertyType')}>
                  <option value="">Select</option>
                  {propertyTypes.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field id={id('projectType')} label="Project type" error={errors.projectType}>
                <select id={id('projectType')} name="projectType" className="field cursor-pointer" value={values.projectType} onChange={set('projectType')} {...aria('projectType')}>
                  <option value="">Select</option>
                  {projectTypes.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id={id('rooms')} label="Approximate number of rooms" optional>
                <select id={id('rooms')} name="rooms" className="field cursor-pointer" value={values.rooms} onChange={set('rooms')}>
                  <option value="">Select</option>
                  {roomOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </Field>
              <Field id={id('location')} label="Location" error={errors.location} hint="Area or town">
                <input
                  id={id('location')}
                  name="location"
                  className="field"
                  autoComplete="address-level2"
                  value={values.location}
                  onChange={set('location')}
                  {...aria('location', true)}
                />
              </Field>
            </div>
            <Field id={id('description')} label="Description" optional hint="Rooms, colours, wall condition or dates">
              <textarea
                id={id('description')}
                name="description"
                className="field min-h-28 resize-y"
                rows={4}
                value={values.description}
                onChange={set('description')}
                {...aria('description', true)}
              />
            </Field>

            <button type="submit" className="btn btn-accent w-full">
              <WhatsAppIcon className="size-5" />
              Send My Details on WhatsApp
            </button>
            <p className="sr-only" aria-live="polite">
              {sent ?? ''}
            </p>
            {sent && (
              <p className="flex gap-2 text-[15px] text-accent-deep">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {sent}
              </p>
            )}
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[16px]">
            <span className="text-muted">Prefer to talk?</span>
            <ContactButton kind="phone" className="link-arrow" plain>
              Call Now
            </ContactButton>
          </div>
        </div>
      </div>
    </section>
  )
}
