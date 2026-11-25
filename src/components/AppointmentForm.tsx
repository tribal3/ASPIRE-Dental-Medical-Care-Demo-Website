import { useEffect, useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  Info,
  MessageCircle,
  PencilLine,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { site, whatsappLink } from '../data/site'
import { cn } from '../lib/utils'

interface FormValues {
  name: string
  phone: string
  service: string
  date: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  phone: '',
  service: '',
  date: '',
  message: '',
}

const serviceOptions = [
  'General Consultation',
  'Dental Checkup',
  'Dental Cleaning',
  'Other / Not Sure',
]

const steps = [
  {
    title: 'Share your details',
    description: 'Tell us what you need and when you would prefer to visit.',
  },
  {
    title: 'Review your enquiry',
    description: 'Check everything before deciding how you would like to continue.',
  },
  {
    title: 'Continue on WhatsApp',
    description: 'Choose to send the prepared message directly to the clinic.',
  },
]

function getLocalToday(): string {
  const now = new Date()
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
  return local.toISOString().slice(0, 10)
}

function formatDate(value: string): string {
  if (!value) return 'Not selected'
  const parsed = new Date(`${value}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return value
  return parsed.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function fieldClass(hasError: boolean): string {
  return cn(
    'w-full rounded-xl border bg-ivory/60 px-4 py-3.5 text-sm text-charcoal transition-colors placeholder:text-muted/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal/15',
    hasError
      ? 'border-red-400 focus:border-red-400'
      : 'border-charcoal/15 focus:border-teal',
  )
}

export function AppointmentForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const minDate = getLocalToday()

  useEffect(() => {
    if (!submitted || !cardRef.current) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const top = cardRef.current.getBoundingClientRect().top + window.scrollY - 96

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }, [submitted])

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => ({ ...previous, [field]: undefined }))
  }

  const validate = (formValues: FormValues): FormErrors => {
    const nextErrors: FormErrors = {}

    if (formValues.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.'
    }

    const digits = formValues.phone.replace(/[\s\-()]/g, '')
    if (!/^\+?\d{10,15}$/.test(digits)) {
      nextErrors.phone = 'Enter a valid phone number, e.g. 0313 2656659.'
    }

    if (!formValues.service) {
      nextErrors.service = 'Please select a preferred service.'
    }

    if (!formValues.date) {
      nextErrors.date = 'Please choose a preferred date.'
    } else if (formValues.date < minDate) {
      nextErrors.date = 'Please choose today or a future date.'
    }

    if (formValues.message.length > 500) {
      nextErrors.message = 'Please keep your message under 500 characters.'
    }

    return nextErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      const firstField = Object.keys(nextErrors)[0]
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstField}"]`)
        ?.focus()
      return
    }

    setSubmitted(true)
  }

  const buildMessage = (): string => {
    const lines = [
      'Hello Aspire Dental & Medical Care,',
      "I'd like to enquire about an appointment.",
      '',
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Preferred service: ${values.service}`,
      `Preferred date: ${formatDate(values.date)}`,
    ]

    if (values.message.trim()) {
      lines.push('', `Message: ${values.message.trim()}`)
    }

    lines.push('', 'Sent from the Aspire website concept.')
    return lines.join('\n')
  }

  const resetForm = () => {
    setSubmitted(false)
    setErrors({})
  }

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-heading"
      className="section-y relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white to-mint/40"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-sage/40" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-mint/60 blur-3xl" />
      </div>

      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-teal">
            <span className="h-px w-8 bg-teal/50" aria-hidden="true" />
            Appointment Enquiry
          </p>
          <h2
            id="appointment-heading"
            className="heading-display mt-5 text-3xl leading-[1.08] sm:text-4xl lg:text-[2.9rem]"
          >
            Let&apos;s Talk About{' '}
            <span className="font-serif font-normal italic text-teal">Your Smile.</span>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
            Have a dental concern or want to arrange a visit? Send an appointment enquiry
            to Aspire Dental &amp; Medical Care.
          </p>

          <div className="mt-8 max-w-sm rounded-2xl border border-charcoal/10 bg-white p-5 shadow-soft">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Prefer to call?
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 flex items-center gap-3 font-display text-xl font-semibold text-charcoal transition-colors hover:text-teal"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-teal">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              {site.phone}
            </a>
            <p className="mt-3 flex items-center gap-2 text-xs text-muted">
              <Clock className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              Listed closing time: {site.closingTime}
            </p>
          </div>

          <ol className="mt-8 hidden max-w-md space-y-4 lg:block">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal/20 bg-white font-display text-[11px] font-semibold text-teal">
                  {`0${index + 1}`}
                </span>
                <div>
                  <p className="text-sm font-semibold text-charcoal">{step.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-7 hidden max-w-md items-start gap-2 text-[11.5px] leading-relaxed text-muted lg:flex">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal/70" aria-hidden="true" />
            <span>
              This page is a presentation demo. Your details stay in this browser and are
              only shared if you choose to continue on WhatsApp or call the clinic.
            </span>
          </p>
        </div>

        <div
          ref={cardRef}
          className="rounded-[1.75rem] border border-charcoal/10 bg-white p-6 shadow-card sm:p-8"
        >
          {submitted ? (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-teal">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-ivory px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted ring-1 ring-charcoal/10">
                  Demo only
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em] text-charcoal">
                Your enquiry is ready to send.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                This is a frontend presentation demo, so no appointment has been booked or
                stored. To continue, send your details to Aspire on WhatsApp or call the
                clinic directly.
              </p>

              <dl className="mt-6 divide-y divide-charcoal/10 rounded-xl border border-charcoal/10 bg-ivory/60 px-4">
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Name
                  </dt>
                  <dd className="max-w-[65%] break-words text-right text-sm font-medium text-charcoal">
                    {values.name}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Phone
                  </dt>
                  <dd className="max-w-[65%] break-words text-right text-sm font-medium text-charcoal">
                    {values.phone}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Service
                  </dt>
                  <dd className="max-w-[65%] break-words text-right text-sm font-medium text-charcoal">
                    {values.service}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Date
                  </dt>
                  <dd className="text-right text-sm font-medium text-charcoal">
                    {formatDate(values.date)}
                  </dd>
                </div>
                {values.message.trim() && (
                  <div className="flex flex-col gap-1 py-3">
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Message
                    </dt>
                    <dd className="break-words text-sm leading-relaxed text-charcoal">
                      {values.message}
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(buildMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-teal px-5 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-teal-dark"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Continue on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-charcoal/20 px-5 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors hover:border-teal hover:text-teal"
                >
                  <PencilLine className="h-4 w-4" aria-hidden="true" />
                  Edit details
                </button>
              </div>

              <a
                href={site.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-muted transition-colors hover:text-teal"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                Prefer to call? {site.phone}
              </a>
            </motion.div>
          ) : (
            <>
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-lg font-semibold text-charcoal">
                    Appointment Enquiry
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    Share a few details to prepare your enquiry.
                  </p>
                </div>
                <span className="rounded-full bg-ivory px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-muted ring-1 ring-charcoal/10">
                  Demo
                </span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/70"
                    >
                      Full Name <span className="text-teal">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={80}
                      placeholder="Your full name"
                      value={values.name}
                      onChange={(event) => updateField('name', event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={fieldClass(Boolean(errors.name))}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-[11px] text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/70"
                    >
                      Phone Number <span className="text-teal">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={20}
                      placeholder="0313 2656659"
                      value={values.phone}
                      onChange={(event) => updateField('phone', event.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={fieldClass(Boolean(errors.phone))}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1.5 text-[11px] text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/70"
                    >
                      Preferred Service <span className="text-teal">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={values.service}
                        onChange={(event) => updateField('service', event.target.value)}
                        aria-invalid={Boolean(errors.service)}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        className={cn(fieldClass(Boolean(errors.service)), 'appearance-none pr-10')}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                        aria-hidden="true"
                      />
                    </div>
                    {errors.service && (
                      <p id="service-error" className="mt-1.5 text-[11px] text-red-600">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/70"
                    >
                      Preferred Date <span className="text-teal">*</span>
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={minDate}
                      value={values.date}
                      onChange={(event) => updateField('date', event.target.value)}
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={errors.date ? 'date-error' : undefined}
                      className={fieldClass(Boolean(errors.date))}
                    />
                    {errors.date && (
                      <p id="date-error" className="mt-1.5 text-[11px] text-red-600">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-charcoal/70"
                    >
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={500}
                      placeholder="Tell us briefly about your concern (optional)"
                      value={values.message}
                      onChange={(event) => updateField('message', event.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={cn(fieldClass(Boolean(errors.message)), 'resize-none')}
                    />
                    {errors.message ? (
                      <p id="message-error" className="mt-1.5 text-[11px] text-red-600">
                        {errors.message}
                      </p>
                    ) : (
                      <p className="mt-1.5 text-right text-[10px] text-muted">
                        {values.message.length}/500
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-teal px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-teal-dark"
                >
                  Request an Appointment
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>

                <p className="mt-4 flex items-start justify-center gap-2 text-center text-[10.5px] leading-relaxed text-muted">
                  <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal/70" aria-hidden="true" />
                  <span>
                    Frontend demo only. Details are not stored or sent until you choose to
                    continue on WhatsApp.
                  </span>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
