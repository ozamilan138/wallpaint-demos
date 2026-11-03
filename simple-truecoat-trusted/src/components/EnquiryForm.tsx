import { useId, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { AlertCircle, MessageCircle } from 'lucide-react'
import { propertyTypes, requirementTypes } from '../data/content'
import { enquiryMessage, whatsAppUrl } from '../utils/whatsapp'
import type { EnquiryDetails } from '../utils/whatsapp'
import { useContactNotice } from './contact/ContactProvider'

type FieldName = keyof EnquiryDetails
type Errors = Partial<Record<FieldName, string>>

const empty: EnquiryDetails = {
  name: '',
  phone: '',
  propertyType: '',
  requirement: '',
  location: '',
  message: '',
}

/** Accepts digits, spaces, "+", "-", "(" and ")". The number must have 7 to 15 digits. */
function isValidPhone(value: string): boolean {
  if (!/^[+\d\s()-]+$/.test(value.trim())) return false
  const digits = value.replace(/\D/g, '').length
  return digits >= 7 && digits <= 15
}

function validate(values: EnquiryDetails): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name.'
  if (!values.phone.trim()) errors.phone = 'Enter your phone number.'
  else if (!isValidPhone(values.phone)) errors.phone = 'Enter a phone number with 7 to 15 digits, for example +44 7700 900123.'
  if (!values.propertyType) errors.propertyType = 'Select the type of property.'
  if (!values.requirement) errors.requirement = 'Select the painting work that you need.'
  if (values.location.trim().length < 2) errors.location = 'Enter your area or city.'
  return errors
}

const fieldOrder: FieldName[] = ['name', 'phone', 'propertyType', 'requirement', 'location', 'message']

const inputClass =
  'mt-2 block min-h-13 w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/80 transition-colors focus:border-green focus:outline-none aria-[invalid=true]:border-[#b42318]'

interface FieldProps {
  id: string
  label: string
  optional?: boolean
  error?: string
  children: ReactNode
}

function Field({ id, label, optional, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="font-medium">
        {label}
        {optional && <span className="font-normal text-muted"> (optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-base text-[#b42318]">
          <AlertCircle aria-hidden size={18} className="mt-0.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}

export function EnquiryForm() {
  const id = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [values, setValues] = useState<EnquiryDetails>(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<{ text: string; isError: boolean }>({ text: '', isError: false })
  const { showDemoNotice } = useContactNotice()

  const fieldId = (name: FieldName) => `${id}-${name}`

  const update = (name: FieldName, value: string) => {
    const next = { ...values, [name]: value }
    setValues(next)
    // After the first submit, the errors update as the visitor types.
    if (submitted) setErrors(validate(next))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)
    const firstInvalid = fieldOrder.find((name) => found[name])
    if (firstInvalid) {
      const count = Object.keys(found).length
      setStatus({ text: `${count} ${count === 1 ? 'field needs' : 'fields need'} your attention.`, isError: true })
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid))}`)?.focus()
      return
    }
    const message = enquiryMessage(values)
    const href = whatsAppUrl(message)
    if (href) {
      setStatus({ text: 'WhatsApp opens in a new tab with your message.', isError: false })
      window.open(href, '_blank', 'noopener,noreferrer')
    } else {
      setStatus({ text: '', isError: false })
      showDemoNotice({ channel: 'whatsapp', message })
    }
  }

  const describedBy = (name: FieldName) => (errors[name] ? `${fieldId(name)}-error` : undefined)

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-labelledby="estimate-title" className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={fieldId('name')} label="Full name" error={errors.name}>
          <input
            id={fieldId('name')}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={`${inputClass} border-ink/15`}
          />
        </Field>
        <Field id={fieldId('phone')} label="Phone number" error={errors.phone}>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            className={`${inputClass} border-ink/15`}
          />
        </Field>
        <Field id={fieldId('propertyType')} label="Property type" error={errors.propertyType}>
          <select
            id={fieldId('propertyType')}
            name="propertyType"
            autoComplete="off"
            value={values.propertyType}
            onChange={(e) => update('propertyType', e.target.value)}
            aria-invalid={Boolean(errors.propertyType)}
            aria-describedby={describedBy('propertyType')}
            className={`${inputClass} border-ink/15`}
          >
            <option value="">Select one</option>
            {propertyTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field id={fieldId('requirement')} label="Painting requirement" error={errors.requirement}>
          <select
            id={fieldId('requirement')}
            name="requirement"
            autoComplete="off"
            value={values.requirement}
            onChange={(e) => update('requirement', e.target.value)}
            aria-invalid={Boolean(errors.requirement)}
            aria-describedby={describedBy('requirement')}
            className={`${inputClass} border-ink/15`}
          >
            <option value="">Select one</option>
            {requirementTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
      </div>
      <Field id={fieldId('location')} label="Location" error={errors.location}>
        <input
          id={fieldId('location')}
          name="location"
          autoComplete="address-level2"
          placeholder="Your area or city…"
          value={values.location}
          onChange={(e) => update('location', e.target.value)}
          aria-invalid={Boolean(errors.location)}
          aria-describedby={describedBy('location')}
          className={`${inputClass} border-ink/15`}
        />
      </Field>
      <Field id={fieldId('message')} label="Message" optional>
        <textarea
          id={fieldId('message')}
          name="message"
          autoComplete="off"
          rows={3}
          placeholder="For example: two bedrooms and a hallway…"
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputClass} min-h-28 resize-y border-ink/15`}
        />
      </Field>


      <button type="submit" className="btn btn-primary w-full text-base sm:w-auto sm:justify-self-start">
        <MessageCircle aria-hidden size={20} />
        Send on WhatsApp
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`text-base empty:hidden ${status.isError ? 'text-[#b42318]' : 'text-green-deep'}`}
      >
        {status.text}
      </p>
    </form>
  )
}
