import { Clock, MapPin, Phone } from 'lucide-react'
import { Logo } from './Logo'
import { navItems, site } from '../data/site'

export function Footer() {
  return (
    <footer className="bg-teal-deep text-ivory/70">
      <div className="container-x pb-8 pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_0.6fr_0.9fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
              Thoughtful dental care begins with the right conversation.
            </p>
            <p className="mt-3 max-w-sm text-[11px] leading-relaxed text-ivory/55">
              Photography is illustrative for this website concept.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/55">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory/55">
              Visit &amp; Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <span className="leading-relaxed text-ivory/70">
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </span>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 text-ivory/70 transition-colors hover:text-ivory"
                >
                  <Phone className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-ivory/70">
                <Clock className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                Listed closing time: {site.closingTime}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ivory/10 pt-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aspire Dental &amp; Medical Care. All rights reserved.</p>
          <p className="text-ivory/55">
            Website concept by{' '}
            <span className="font-semibold tracking-[0.08em] text-ivory/75">TRIBAL³</span>{' '}
            · Client presentation demo
          </p>
        </div>
      </div>
    </footer>
  )
}
