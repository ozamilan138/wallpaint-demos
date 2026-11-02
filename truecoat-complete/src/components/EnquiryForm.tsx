import { useRef, useState, type FormEvent } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { labelFor } from '../data/options'
import { enquiryMessage, whatsAppUrl } from '../lib/whatsapp'
import { useContactNotice } from './contact/ContactProvider'
import { usePlan } from './PlanContext'

const propertyTypes = ['Apartment', 'Independent house', 'Townhouse or row house', 'Other']
const requirements = [
  'Interior painting',
  'Exterior painting',
  'Interior and exterior',
  'Repainting and renovation',
  'Texture or feature wall',
  'Not sure yet',
]
const roomCounts = ['1', '2', '3', '4', '5', '6 or more']

type Field = 'fullName' | 'phone' | 'propertyType' | 'requirement' | 'location'
type Errors = Partial<Record<Field, string>>

const empty = {
  fullName: '',
  phone: '',
  propertyType: '',
  requirement: '',
  rooms: '',
  location: '',
  details: '',
}

/** Accepts digits with spaces, dashes, dots, brackets and one leading "+". It needs 7 to 15 digits. */
function isValidPhone(value: string): boolean {
  const v = value.trim()
  if (!/^\+?[\d\s\-().]+$/.test(v)) return false
  const digits = v.replace(/\D/g, '')
  return digits.length >= 7 && digits.length <= 15
}

function validate(v: typeof empty): Errors {
  const e: Errors = {}
  if (v.fullName.trim().length < 2) e.fullName = 'Enter your full name.'
  if (!v.phone.trim()) e.phone = 'Enter your phone number.'
  else if (!isValidPhone(v.phone)) e.phone = 'Enter a phone number with 7 to 15 digits, for example +44 7700 900123.'
  if (!v.propertyType) e.propertyType = 'Choose the type of property.'
  if (!v.requirement) e.requirement = 'Choose what you would like painted.'
  if (v.location.trim().length < 2) e.location = 'Enter your area or city.'
  return e
}

const order: Field[] = ['fullName', 'phone', 'propertyType', 'requirement', 'location']

/**
 * The project enquiry form.
 * It does not send data to a server. It builds a structured WhatsApp message from the answers.
 */
export function EnquiryForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [includePlan, setIncludePlan] = useState(true)
  const formRef = useRef<HTMLFormElement>(null)
  const { selected, clear } = usePlan()
  const { showWhatsAppNotice } = useContactNotice()
  const planned = selected.map(labelFor)

  const set = (key: keyof typeof empty, value: string) => {
    const next = { ...values, [key]: value }
    setValues(next)
    if (submitted) setErrors(validate(next))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)
    const firstInvalid = order.find((f) => found[f])
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    const message = enquiryMessage({ ...values, plannedRooms: includePlan ? planned : [] })
    const url = whatsAppUrl(message)
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
    else showWhatsAppNotice(message)
  }

  const errorCount = Object.keys(errors).length

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 text-ink sm:p-9" aria-labelledby="form-title">
      <h3 id="form-title" className="text-2xl font-bold leading-tight">
        Project enquiry
      </h3>
      <p className="mt-2 text-muted">
        Fill in the details and we will prepare a WhatsApp message for you to send. Fields marked “optional” can stay
        empty.
      </p>

      {submitted && errorCount > 0 && (
        <p role="alert" className="mt-5 rounded-xl bg-[#fbeceb] px-4 py-3 font-medium text-[#8a2c25]">
          Please check {errorCount === 1 ? '1 field' : `${errorCount} fields`} below.
        </p>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <TextField
          name="fullName"
          label="Full name"
          autoComplete="name"
          value={values.fullName}
          error={errors.fullName}
          onChange={(v) => set('fullName', v)}
        />
        <TextField
          name="phone"
          label="Phone number"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          error={errors.phone}
          onChange={(v) => set('phone', v)}
        />
        <SelectField
          name="propertyType"
          label="Property type"
          options={propertyTypes}
          value={values.propertyType}
          error={errors.propertyType}
          onChange={(v) => set('propertyType', v)}
        />
        <SelectField
          name="requirement"
          label="Painting requirement"
          options={requirements}
          value={values.requirement}
          error={errors.requirement}
          onChange={(v) => set('requirement', v)}
        />
        <SelectField
          name="rooms"
          label="Number of rooms"
          optional
          options={roomCounts}
          value={values.rooms}
          onChange={(v) => set('rooms', v)}
        />
        <TextField
          name="location"
          label="Location"
          autoComplete="address-level2"
          placeholder="For example: North district…"
          value={values.location}
          error={errors.location}
          onChange={(v) => set('location', v)}
        />
        <div className="sm:col-span-2">
          <label htmlFor="details" className="block font-semibold">
            Additional details <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            value={values.details}
            onChange={(e) => set('details', e.target.value)}
            placeholder="For example: wall condition, preferred colours or timing…"
            className="mt-2 w-full rounded-xl border-2 border-[#d5dbd4] bg-white px-4 py-3 text-base outline-none transition-colors placeholder:text-[#7d867f] focus:border-green"
          />
        </div>
      </div>

      {planned.length > 0 && (
        <div className="mt-5 flex flex-col gap-3 rounded-xl bg-ground-2 p-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={includePlan}
              onChange={(e) => setIncludePlan(e.target.checked)}
              className="mt-1 size-5 shrink-0 accent-green"
            />
            <span>
              <span className="block font-semibold">Include the areas from the floor plan</span>
              <span className="text-muted">{planned.join(', ')}</span>
            </span>
          </label>
          <button type="button" onClick={clear} className="text-link shrink-0 text-muted">
            <X aria-hidden size={16} /> Clear Areas
          </button>
        </div>
      )}

      <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto sm:px-8">
        <MessageCircle aria-hidden size={20} />
        Send Enquiry on WhatsApp
      </button>
      <p className="mt-3 text-sm text-muted">Nothing is sent until you press send in WhatsApp.</p>
    </form>
  )
}

interface FieldBase {
  name: string
  label: string
  value: string
  error?: string
  optional?: boolean
  onChange: (value: string) => void
}

const inputClass = (error?: string) =>
  `mt-2 block min-h-12 w-full rounded-xl border-2 bg-white px-4 py-2.5 text-base outline-none transition-colors placeholder:text-[#7d867f] ${
    error ? 'border-[#b3261e] focus:border-[#b3261e]' : 'border-[#d5dbd4] focus:border-green'
  }`

function Label({ name, label, optional }: { name: string; label: string; optional?: boolean }) {
  return (
    <label htmlFor={name} className="block font-semibold">
      {label} {optional && <span className="font-normal text-muted">(optional)</span>}
    </label>
  )
}

function ErrorText({ name, error }: { name: string; error?: string }) {
  if (!error) return null
  return (
    <p id={`${name}-error`} className="mt-1.5 text-[0.9rem] font-medium text-[#b3261e]">
      {error}
    </p>
  )
}

function TextField({
  name,
  label,
  value,
  error,
  optional,
  onChange,
  type = 'text',
  inputMode,
  autoComplete,
  placeholder,
}: FieldBase & {
  type?: string
  inputMode?: 'tel' | 'text'
  autoComplete?: string
  placeholder?: string
}) {
  return (
    <div>
      <Label name={name} label={label} optional={optional} />
      <input
        id={name}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        required={!optional}
        className={inputClass(error)}
      />
      <ErrorText name={name} error={error} />
    </div>
  )
}

function SelectField({ name, label, value, error, optional, onChange, options }: FieldBase & { options: string[] }) {
  return (
    <div>
      <Label name={name} label={label} optional={optional} />
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        required={!optional}
        className={`${inputClass(error)} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23456B53' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat pr-11 ${
          value ? '' : 'text-[#6b746e]'
        }`}
      >
        <option value="">{optional ? 'Not sure' : 'Choose one'}</option>
        {options.map((o) => (
          <option key={o} value={o} className="text-ink">
            {o}
          </option>
        ))}
      </select>
      <ErrorText name={name} error={error} />
    </div>
  )
}
