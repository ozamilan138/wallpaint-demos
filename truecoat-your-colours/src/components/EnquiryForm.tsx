import { useRef, useState, type FormEvent } from 'react'
import { AlertCircle, MessageCircle } from 'lucide-react'
import { useDemoNotice } from './ContactProvider'
import { PaletteStrip } from './planner/PaletteStrip'
import { findPalette } from '../data/palettes'
import { hasWhatsApp, whatsappUrl } from '../lib/contact'
import { enquiryMessage, type EnquiryDetails } from '../lib/messages'
import { usePlanner } from '../lib/planner'

type Errors = Partial<Record<keyof EnquiryDetails, string>>

const empty: EnquiryDetails = { name: '', phone: '', location: '', message: '' }

export function validate(d: EnquiryDetails): Errors {
  const errors: Errors = {}
  const name = d.name.trim()
  if (!name) errors.name = 'Enter your name.'
  else if (name.length < 2) errors.name = 'Enter at least 2 letters.'

  const phone = d.phone.trim()
  const digits = phone.replace(/\D/g, '')
  if (!phone) errors.phone = 'Enter your phone number, so that we can contact you.'
  else if (!/^\+?[\d\s()-]+$/.test(phone)) errors.phone = 'Use only numbers, spaces, brackets, dashes and a leading +.'
  else if (digits.length < 7 || digits.length > 15) errors.phone = 'Enter a phone number with 7 to 15 digits.'
  return errors
}

/**
 * The optional enquiry form. It checks the name and the phone number, then
 * makes a WhatsApp message. The message also contains the planner choices.
 * There is no backend: nothing is stored or sent to a server.
 */
export function EnquiryForm() {
  const { state, count } = usePlanner()
  const notify = useDemoNotice()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const refs = {
    name: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
  }
  const palette = findPalette(state.palette)

  const update = (key: keyof EnquiryDetails, value: string) => {
    const next = { ...values, [key]: value }
    setValues(next)
    if (submitted) setErrors(validate(next))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)
    const firstInvalid = (['name', 'phone'] as const).find((k) => found[k])
    if (firstInvalid) {
      refs[firstInvalid].current?.focus()
      return
    }
    const message = enquiryMessage(values, state)
    if (hasWhatsApp) window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
    else notify({ kind: 'whatsapp', message })
  }

  const errorCount = Object.keys(errors).length

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="enquiry-title" className="rounded-3xl bg-white p-6 sm:p-8">
      <h3 id="enquiry-title" className="text-[1.5rem] font-extrabold tracking-[-0.015em]">
        Send Your Details
      </h3>
      <p className="mt-2 text-[16px] text-ink/85">
        We need your name and phone number. The rest is optional.
      </p>

      {submitted && errorCount > 0 && (
        <p role="alert" className="mt-4 flex items-start gap-2 rounded-xl bg-beige-soft p-3 text-[15px] font-medium text-terracotta-deep">
          <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden />
          Check the {errorCount === 1 ? 'field' : `${errorCount} fields`} marked below.
        </p>
      )}

      <div className="mt-6 grid gap-5">
        <Field label="Your name" id="enq-name" error={errors.name} required>
          <input
            ref={refs.name}
            id="enq-name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? 'enq-name-error' : undefined}
            aria-required
            className="field-input"
          />
        </Field>
        <Field label="Phone number" id="enq-phone" error={errors.phone} required hint="Include the country code if you are outside the country.">
          <input
            ref={refs.phone}
            id="enq-phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? 'enq-phone-error' : 'enq-phone-hint'}
            aria-required
            className="field-input"
          />
        </Field>
        <Field label="Location" id="enq-location" optional>
          <input
            id="enq-location"
            type="text"
            autoComplete="address-level2"
            maxLength={80}
            value={values.location}
            onChange={(e) => update('location', e.target.value)}
            placeholder={state.location || 'Your area or city…'}
            className="field-input"
          />
        </Field>
        <Field label="Message" id="enq-message" optional>
          <textarea
            id="enq-message"
            rows={3}
            maxLength={500}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            className="field-input resize-y"
          />
        </Field>
      </div>

      {count > 0 && (
        <div className="mt-5 rounded-2xl bg-surface p-4">
          <p className="text-[15px] font-semibold">Your planner choices are added to the message.</p>
          {palette && (
            <div className="mt-2 flex items-center gap-3">
              <PaletteStrip palette={palette} className="w-28 [&>span]:h-6" />
              <span className="text-[15px]">{palette.name}</span>
            </div>
          )}
        </div>
      )}

      <button type="submit" className="btn btn-primary mt-6 min-h-14 w-full text-[17px]">
        <MessageCircle className="size-5" aria-hidden />
        Send on WhatsApp
      </button>
      <p className="mt-3 text-[14px] text-muted">
        This form opens WhatsApp with your message. Nothing is saved on this website.
      </p>
    </form>
  )
}

interface FieldProps {
  label: string
  id: string
  error?: string
  hint?: string
  required?: boolean
  optional?: boolean
  children: React.ReactNode
}

function Field({ label, id, error, hint, required, optional, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required && <span className="font-normal text-muted"> (required)</span>}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-[15px] font-medium text-terracotta-deep">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="mt-2 text-[15px] text-muted">
            {hint}
          </p>
        )
      )}
    </div>
  )
}
