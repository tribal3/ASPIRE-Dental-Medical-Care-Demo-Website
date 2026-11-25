import { ArrowRight, Check, HeartHandshake, MapPin } from 'lucide-react'
import { Reveal } from './Reveal'
import { SmartImage } from './SmartImage'

const expectations = [
  'A welcoming, patient-first environment',
  'Clear explanations and open conversation',
  'Straightforward appointment enquiries',
]

const aboutImage =
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80'

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-y scroll-mt-24 bg-ivory">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-teal">
              <span className="h-px w-8 bg-teal/50" aria-hidden="true" />
              Welcome to Aspire
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              id="about-heading"
              className="heading-display mt-5 text-3xl leading-[1.08] sm:text-4xl lg:text-[2.9rem]"
            >
              Care That Begins With{' '}
              <span className="font-serif font-normal italic text-teal">Listening.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
              At Aspire Dental &amp; Medical Care, we believe every patient deserves a
              welcoming experience and the opportunity to understand their dental care
              needs. Our goal is to make it easier for people in Gulistan-e-Johar to
              connect with dental care and take the next step towards their oral health.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3.5">
              {expectations.map((expectation) => (
                <li key={expectation} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint text-teal">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-charcoal/80">{expectation}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#treatments"
                className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal"
              >
                Explore our care approach
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                Block 13 · Gulistan-e-Johar · Karachi
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="relative mx-auto max-w-lg lg:ml-auto lg:mr-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-5 -bottom-5 hidden h-32 w-32 rounded-[1.5rem] bg-mint sm:block"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full border border-sage/60 sm:block"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 shadow-card">
              <SmartImage
                src={aboutImage}
                alt="Dental professional discussing care with a patient in a calm clinic setting"
                className="h-full w-full"
              />
            </div>

            <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white px-5 py-4 shadow-soft sm:right-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint text-teal">
                <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-charcoal">
                  Patient-focused care
                </p>
                <p className="text-[11px] text-muted">A welcoming first step</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
