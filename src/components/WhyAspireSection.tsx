import {
  ArrowUpRight,
  CalendarCheck2,
  MapPin,
  MessagesSquare,
  PhoneCall,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { site } from '../data/site'

const features = [
  {
    icon: MapPin,
    title: 'Convenient Location',
    description:
      'Located in Block 13, Gulistan-e-Johar, within easy reach across the neighbourhood.',
  },
  {
    icon: CalendarCheck2,
    title: 'Easy Appointment Enquiries',
    description:
      'Share your preferred service and date through a simple, straightforward enquiry.',
  },
  {
    icon: MessagesSquare,
    title: 'Patient-Focused Communication',
    description:
      'Ask questions and take your time understanding your available options.',
  },
  {
    icon: PhoneCall,
    title: 'Direct Contact',
    description:
      'Reach the team directly by phone or WhatsApp for care-related questions.',
  },
]

export function WhyAspireSection() {
  return (
    <section aria-labelledby="why-heading" className="section-y relative overflow-hidden bg-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full border border-sage/50"
      />
      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-teal">
              <span className="h-px w-8 bg-teal/50" aria-hidden="true" />
              Why Aspire
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="why-heading"
              className="heading-display mt-5 text-3xl leading-[1.08] sm:text-4xl lg:text-[2.9rem]"
            >
              Your Dental Care Journey{' '}
              <span className="font-serif font-normal italic text-teal">Starts Here.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
              A clear, welcoming path from your first question to your next dental visit
              — with straightforward ways to get in touch.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 rounded-2xl border border-charcoal/10 bg-white p-6 shadow-soft">
              <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-charcoal">
                Aspire Dental &amp; Medical Care
              </p>
              <p className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                <span>
                  Block 13, Gulistan-e-Johar,
                  <br />
                  Karachi, Pakistan, 75290.
                </span>
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-charcoal/10 pt-4">
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-teal"
                >
                  Get directions
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-teal"
                >
                  Call the team
                  <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-7">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal key={feature.title} delay={index * 0.06} y={18} className="h-full">
                <article className="group h-full rounded-2xl border border-charcoal/10 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-mint text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-ivory">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-semibold text-charcoal">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
