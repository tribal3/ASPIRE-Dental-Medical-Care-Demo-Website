import { ArrowUpRight, Info } from 'lucide-react'
import { Reveal } from './Reveal'
import { services } from '../data/services'

export function ServicesSection() {
  return (
    <section
      id="treatments"
      aria-labelledby="treatments-heading"
      className="section-y scroll-mt-24 border-t border-charcoal/5 bg-white"
    >
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-teal">
                <span className="h-px w-8 bg-teal/50" aria-hidden="true" />
                Our Care Approach
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="treatments-heading"
                className="heading-display mt-5 text-3xl leading-[1.08] sm:text-4xl lg:text-[2.9rem]"
              >
                Explore Your Dental{' '}
                <span className="font-serif font-normal italic text-teal">Care Options.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                Whether you are looking for a routine checkup or discussing a dental
                concern, start with the right conversation.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <a
              href="#appointment"
              className="group inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors hover:border-teal hover:text-teal"
            >
              Start an enquiry
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id} delay={index * 0.05} y={20} className="h-full">
                <article className="group relative flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-soft">
                  <div className="flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mint text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-ivory">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-sage">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-[13px] font-bold uppercase leading-snug tracking-[0.12em] text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <a
                    href="#appointment"
                    className="mt-6 inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-teal"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 flex items-start gap-2.5 rounded-xl border border-charcoal/10 bg-ivory px-4 py-3 text-[11.5px] leading-relaxed text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-teal/70" aria-hidden="true" />
            <span>
              These service categories are proposed for this website concept and are not a
              confirmed clinic service menu. Please contact Aspire directly to discuss
              availability for your needs.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
