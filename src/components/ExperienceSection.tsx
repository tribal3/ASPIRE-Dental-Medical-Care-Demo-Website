import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { SmartImage } from './SmartImage'

const blocks = [
  {
    number: '01',
    title: 'A Welcoming Environment',
    description: 'Feel comfortable reaching out to discuss your dental concerns.',
    image:
      'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Dentist speaking with a relaxed patient in a bright, modern dental clinic',
  },
  {
    number: '02',
    title: 'Clear Communication',
    description: 'Ask questions and understand your available treatment options.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    alt: 'Dental professional reviewing care details with a patient',
  },
  {
    number: '03',
    title: 'Care-Focused Experience',
    description: 'Take an informed approach to your dental care journey.',
    image:
      'https://images.pexels.com/photos/3845724/pexels-photo-3845724.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Dental instruments prepared in a clean treatment area',
  },
]

export function ExperienceSection() {
  return (
    <section
      id="care"
      aria-labelledby="care-heading"
      className="section-y relative scroll-mt-24 overflow-hidden bg-teal-dark text-ivory"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full border border-ivory/10" />
        <div className="absolute -left-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-teal/40 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow text-mint/80">
                <span className="h-px w-8 bg-mint/50" aria-hidden="true" />
                The Aspire Experience
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="care-heading"
                className="mt-5 max-w-xl font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ivory sm:text-4xl lg:text-[2.9rem]"
              >
                A More Comfortable Approach to{' '}
                <span className="font-serif font-normal italic text-mint">
                  Dental Care.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-md text-[15px] leading-relaxed text-ivory/65 lg:justify-self-end">
              From your first enquiry to your time in the clinic, Aspire is designed
              around a calm, clear and patient-focused experience.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:gap-8">
          {blocks.map((block, index) => (
            <Reveal key={block.number} delay={index * 0.08} y={22}>
              <article className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ivory/10">
                  <SmartImage
                    src={block.image}
                    alt={block.alt}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-teal-deep/50 to-transparent"
                  />
                </div>
                <p className="mt-6 font-display text-[11px] font-semibold tracking-[0.2em] text-sage">
                  {block.number}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.01em] text-ivory">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                  {block.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col gap-5 border-t border-ivory/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ivory/60">
              Thoughtful dental care begins with the right conversation
            </p>
            <a
              href="#appointment"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint"
            >
              Start an appointment enquiry
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
