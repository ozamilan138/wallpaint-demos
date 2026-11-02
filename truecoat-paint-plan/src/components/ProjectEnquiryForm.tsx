import { useRef, useState, type FormEvent } from 'react'
import { AlertCircle, CircleCheck, MessageCircle } from 'lucide-react'
import { business } from '../config/business'
import { useNotice } from '../lib/notice'
import { usePlan } from '../lib/plan'
import { enquiryMessage, whatsappUrl, type EnquiryDetails } from '../lib/whatsapp'
import { Img } from './Img'

const propertyTypes = ['Apartment', 'Independent House', 'Other']
const requirements = ['Interior', 'Exterior', 'Both']
const roomCounts = ['1', '2', '3', '4', '5', '6 or more']

type Field = 'name' | 'phone' | 'propertyType' | 'requirement'
type Errors = Partial<Record<Field, string>>

const EMPTY: EnquiryDetails = { name: '', phone: '', propertyType: '', requirement: '', rooms: '', budget: '' }

/** Checks the required fields. The phone number must have 7 to 15 digits. */
function validate(d: EnquiryDetails): Errors {
  const e: Errors = {}
  if (d.name.trim().length < 2) e.name = 'Enter your name.'
  const digitCount = d.phone.replace(/\D/g, '').length
  if (!d.phone.trim()) e.phone = 'Enter your phone number.'
  else if (!/^[+]?[\d\s\-().]+$/.test(d.phone.trim()) || digitCount < 7 || digitCount > 15)
    e.phone = 'Enter a phone number with 7 to 15 digits, for example +44 7700 900123.'
  if (!d.propertyType) e.propertyType = 'Choose the property type.'
  if (!d.requirement) e.requirement = 'Choose interior, exterior or both.'
  return e
}

const fieldOrder: Field[] = ['name', 'phone', 'propertyType', 'requirement']
const fieldLabels: Record<Field, string> = {
  name: 'Name',
  phone: 'Phone',
  propertyType: 'Property type',
  requirement: 'Painting requirement',
}

/** The optional project form. It makes a WhatsApp message and does not send data to a server. */
export function ProjectEnquiryForm() {
  const plan = usePlan()
  const { show } = useNotice()
  const [data, setData] = useState<EnquiryDetails>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<{ url: string | null } | null>(null)
  const summaryRef = useRef<HTMLDivElement>(null)

  const update = (key: keyof EnquiryDetails, value: string) => {
    const next = { ...data, [key]: value }
    setData(next)
    setResult(null)
    if (submitted) setErrors(validate(next))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setResult(null)
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }
    const message = enquiryMessage(data, plan)
    const url = whatsappUrl(message)
    setResult({ url })
    if (url) window.open(url, '_blank', 'noopener,noreferrer')
    else show('whatsapp', message)
  }

  const errorList = fieldOrder.filter((f) => errors[f])
  const planText = [plan.room?.name, plan.style?.name, plan.palette?.name].filter(Boolean)

  return (
    <section id="estimate" aria-labelledby="estimate-title" className="py-20 sm:py-28 lg:py-32">
      <div className="wrap">
        {/* The coupon: a card with a perforated line between the text and the form. */}
        <div className="relative grid overflow-hidden rounded-card bg-beige lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div className="relative flex flex-col p-6 sm:p-10 lg:p-12">
            <h2 id="estimate-title" className="h-section max-w-[13ch]" data-reveal>
              Tell Us About Your Project.
            </h2>
            <p className="mt-5 max-w-[30rem] text-lg leading-relaxed" data-reveal style={{ ['--d' as string]: 1 }}>
              This form is optional. Fill in a few details and we will receive them as one WhatsApp message. Nothing is
              stored on this website.
            </p>
            <ul className="mt-8 grid gap-3 text-base" data-reveal style={{ ['--d' as string]: 2 }}>
              {['Takes about one minute', 'Your colour plan is added if you made one', 'No price is promised until we discuss the work'].map(
                (t) => (
                  <li key={t} className="flex gap-2.5">
                    <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-sage-deep" />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <Img
              name="form-empty-room"
              alt="An empty apartment room with freshly painted white walls and a large window"
              sizes="36vw"
              className="mt-10 hidden min-h-[16rem] w-full flex-1 rounded-card lg:block"
            />
            {/* Perforation dots */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 bottom-0 border-b-[5px] border-dotted border-ground lg:inset-x-auto lg:inset-y-6 lg:bottom-auto lg:right-0 lg:border-b-0 lg:border-r-[5px]"
            />
          </div>

          <form noValidate onSubmit={onSubmit} className="bg-paper/70 p-6 sm:p-10 lg:p-12" aria-describedby="form-required-note">
            <p id="form-required-note" className="text-base text-muted">
              Fields with <span aria-hidden="true">*</span>
              <span className="sr-only">a star</span> are required.
            </p>

            {submitted && errorList.length > 0 && (
              <div
                ref={summaryRef}
                tabIndex={-1}
                role="alert"
                aria-labelledby="error-summary-title"
                className="mt-5 rounded-card bg-[#FBEDE8] p-4 text-ink"
              >
                <p id="error-summary-title" className="flex items-center gap-2 font-ui font-bold text-terracotta-deep">
                  <AlertCircle aria-hidden="true" className="size-5" />
                  Please check {errorList.length === 1 ? 'one field' : `${errorList.length} fields`}
                </p>
                <ul className="mt-2 grid gap-1 pl-7 text-base">
                  {errorList.map((f) => (
                    <li key={f}>
                      <a href={`#field-${f}`} className="underline underline-offset-2">
                        {fieldLabels[f]}: {errors[f]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <TextField
                id="name"
                label="Name"
                autoComplete="name"
                value={data.name}
                error={errors.name}
                onChange={(v) => update('name', v)}
              />
              <TextField
                id="phone"
                label="Phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={data.phone}
                error={errors.phone}
                onChange={(v) => update('phone', v)}
              />
            </div>

            <ChoiceGroup
              id="propertyType"
              legend="Property type"
              options={propertyTypes}
              value={data.propertyType}
              error={errors.propertyType}
              onChange={(v) => update('propertyType', v)}
            />
            <ChoiceGroup
              id="requirement"
              legend="Painting requirement"
              options={requirements}
              value={data.requirement}
              error={errors.requirement}
              onChange={(v) => update('requirement', v)}
            />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <SelectField
                id="rooms"
                label="Number of rooms (optional)"
                value={data.rooms}
                options={roomCounts}
                onChange={(v) => update('rooms', v)}
              />
              <SelectField
                id="budget"
                label="Approximate budget (optional)"
                value={data.budget}
                options={business.budgetRanges}
                hint="Broad ranges only. We confirm the cost after we discuss the work."
                onChange={(v) => update('budget', v)}
              />
            </div>

            <div className="mt-6 rounded-card bg-ground p-4 text-base">
              <p className="font-ui text-sm font-semibold text-muted">Your colour plan</p>
              {planText.length ? (
                <p className="mt-1 font-semibold">{planText.join(', ')} (added to the message)</p>
              ) : (
                <p className="mt-1">
                  No colour plan yet.{' '}
                  <a href="#explore-colours" className="font-semibold text-sage-deep underline underline-offset-2">
                    Make one in the colour planner
                  </a>
                  , or leave it for later.
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto">
              <MessageCircle aria-hidden="true" className="size-5" />
              Send My Details on WhatsApp
            </button>

            <div aria-live="polite">
              {result && (
                <p className="mt-4 flex gap-2 text-base">
                  <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-sage-deep" />
                  {result.url ? (
                    <span>
                      WhatsApp opened in a new tab with your message. If it did not open,{' '}
                      <a href={result.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
                        open WhatsApp here
                      </a>
                      .
                    </span>
                  ) : (
                    <span>Your message is ready. This demo has no WhatsApp number yet, so the message is shown in a notice.</span>
                  )}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  'mt-2 block min-h-13 w-full rounded-card bg-paper px-4 text-[1.0625rem] text-ink field outline-none placeholder:text-muted'

function ErrorText({ id, error }: { id: string; error?: string }) {
  if (!error) return null
  return (
    <p id={`${id}-error`} className="mt-2 flex gap-1.5 text-base font-medium text-terracotta-deep">
      <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
      {error}
    </p>
  )
}

interface TextFieldProps {
  id: string
  label: string
  value: string
  error?: string
  type?: string
  inputMode?: 'tel' | 'text'
  autoComplete?: string
  onChange: (v: string) => void
}

function TextField({ id, label, value, error, type = 'text', inputMode, autoComplete, onChange }: TextFieldProps) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="font-ui text-base font-semibold">
        {label} <span aria-hidden="true">*</span>
      </label>
      <input
        id={`field-${id}`}
        name={id}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      />
      <ErrorText id={id} error={error} />
    </div>
  )
}

interface ChoiceGroupProps {
  id: string
  legend: string
  options: string[]
  value: string
  error?: string
  onChange: (v: string) => void
}

function ChoiceGroup({ id, legend, options, value, error, onChange }: ChoiceGroupProps) {
  return (
    <fieldset
      id={`field-${id}`}
      tabIndex={-1}
      className="mt-6 min-w-0"
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? `${id}-error` : undefined}
    >
      <legend className="font-ui text-base font-semibold">
        {legend} <span aria-hidden="true">*</span>
      </legend>
      <div className="mt-2 grid gap-2.5 xs:grid-cols-3">
        {options.map((o) => {
          const checked = value === o
          return (
            <label
              key={o}
              className={`flex min-h-13 cursor-pointer items-center gap-3 rounded-card px-4 py-2 font-ui text-base transition-shadow has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sage-deep ${
                checked
                  ? 'bg-sage-soft font-bold field-on'
                  : `bg-paper font-medium ${error ? 'field-error' : 'field'}`
              }`}
            >
              <input
                type="radio"
                name={id}
                value={o}
                checked={checked}
                onChange={() => onChange(o)}
                className="size-5 shrink-0 accent-[var(--color-sage-deep)]"
              />
              {o}
            </label>
          )
        })}
      </div>
      <ErrorText id={id} error={error} />
    </fieldset>
  )
}

interface SelectFieldProps {
  id: string
  label: string
  value: string
  options: string[]
  hint?: string
  onChange: (v: string) => void
}

function SelectField({ id, label, value, options, hint, onChange }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={`field-${id}`} className="font-ui text-base font-semibold">
        {label}
      </label>
      <select
        id={`field-${id}`}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={`${inputClass} appearance-auto pr-3`}
      >
        <option value="">Choose (optional)</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {hint && (
        <p id={`${id}-hint`} className="mt-2 text-sm text-muted">
          {hint}
        </p>
      )}
    </div>
  )
}
