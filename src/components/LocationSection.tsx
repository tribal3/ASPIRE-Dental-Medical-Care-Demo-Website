import {
  ArrowUpRight,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from 'lucide-react'
import { Reveal } from './Reveal'
import { site, whatsappEnquiry, whatsappLink } from '../data/site'

export function LocationSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-y relative scroll-mt-24 overflow-hidden bg-charcoal text-ivory"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[34rem] w-[34rem] rounded-full border border-ivory/10" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-teal/30 blur-3xl" />
      </div>

      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-sage">
              <span className="h-px w-8 bg-sage/50" aria-hidden="true" />
              Visit Aspire
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="contact-heading"
              className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-ivory sm:text-4xl lg:text-[2.9rem]"
            >
              Find Us in{' '}
              <span className="font-serif font-normal italic text-sage">
                Gulistan-e-Johar.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[1.75rem] border border-ivory/10 bg-white/[0.04] p-7 backdrop-blur-sm md:p-9">
              <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ivory">
                Aspire Dental &amp; Medical Care
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-sage">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ivory/80">
                      {site.addressLine1}
                      <br />
                      {site.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-sage">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60">
                      Phone
                    </p>
                    <a
                      href={site.phoneHref}
                      className="mt-1 block font-display text-lg font-semibold text-ivory transition-colors hover:text-sage"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-sage">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60">
                      Listed Closing Time
                    </p>
                    <p className="mt-1 text-sm font-medium text-ivory/80">
                      {site.closingTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-sage">
                    <Star className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory/60">
                      Google Rating
                    </p>
                    <p className="mt-1 text-sm font-medium text-ivory/80">
                      {site.rating} / 5 · {site.reviews} reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 border-t border-ivory/10 pt-7 sm:grid-cols-2">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-5 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-teal transition-colors hover:bg-mint"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={whatsappLink(whatsappEnquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/20 px-5 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory/10"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/20 px-5 py-3.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-ivory/10 sm:col-span-2"
                >
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-[1.75rem] border border-ivory/10 bg-ivory/5">
              <iframe
                title="Google Maps location of Aspire Dental & Medical Care in Gulistan-e-Johar, Karachi"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[360px] w-full flex-1 border-0"
              />
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-ivory/10 bg-ivory/[0.06] px-5 py-4">
                <p className="text-[11px] text-ivory/65">
                  Gulistan-e-Johar · Karachi, Pakistan
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-sage transition-colors hover:text-ivory"
                >
                  Open in Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
