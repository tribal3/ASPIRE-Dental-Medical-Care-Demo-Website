import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Clock, MapPin, MessageCircle, Star } from 'lucide-react'
import { SmartImage } from './SmartImage'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

const heroImage =
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=80'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-ivory pb-16 pt-28 scroll-mt-24 sm:pt-32 md:pb-24 lg:pt-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-8 h-[34rem] w-[34rem] rounded-full border border-sage/40" />
        <div className="absolute -right-24 top-24 h-[26rem] w-[26rem] rounded-full bg-mint/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item} className="eyebrow text-teal">
            <span className="h-px w-8 bg-teal/50" aria-hidden="true" />
            Aspire Dental &amp; Medical Care
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="heading-display mt-6 text-[2.6rem] leading-[1.03] sm:text-6xl lg:text-[4.05rem] xl:text-[4.5rem]"
          >
            Your Smile Deserves
            <br className="hidden sm:block" />{' '}
            <span className="font-serif font-normal italic text-teal">
              Thoughtful Care.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-muted sm:text-lg"
          >
            Take the next step towards better oral health with a welcoming care
            experience at Aspire Dental &amp; Medical Care, Gulistan-e-Johar,
            Karachi.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center"
          >
            <a
              href="#appointment"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-teal px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory shadow-soft transition-colors hover:bg-teal-dark"
            >
              Book an Appointment
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-charcoal/20 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:border-teal hover:text-teal"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Contact Our Team
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-muted"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              Gulistan-e-Johar · Karachi
            </span>
            <span className="hidden h-3 w-px bg-charcoal/15 sm:block" aria-hidden="true" />
            <span className="hidden items-center gap-2 sm:flex">
              <Clock className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              Open until 10 PM
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-tl-[2rem] border-l border-t border-teal/25 sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -right-5 hidden h-40 w-40 rounded-full bg-sage/30 blur-2xl sm:block"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 shadow-card sm:aspect-[5/6] lg:aspect-[4/5]">
            <SmartImage
              src={heroImage}
              alt="Bright, modern dental clinic treatment room with a professional care setting"
              loading="eager"
              className="h-full w-full"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-teal-deep/45 via-transparent to-transparent"
            />

            <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal backdrop-blur sm:right-6 sm:top-6">
              <Clock className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
              Open until 10 PM
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-soft backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-[248px]">
              <div>
                <div className="flex items-end gap-1">
                  <span className="font-display text-3xl font-bold leading-none text-charcoal">
                    4.8
                  </span>
                  <span className="pb-0.5 text-xs font-medium text-muted">/ 5</span>
                </div>
                <div className="mt-2 flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-3 w-3 fill-current text-teal" />
                  ))}
                </div>
              </div>
              <div className="border-l border-charcoal/10 pl-4">
                <p className="text-xs font-semibold text-charcoal">Google rating</p>
                <p className="mt-0.5 text-[11px] text-muted">45 reviews</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
