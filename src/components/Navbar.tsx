import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Clock, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react'
import { Logo } from './Logo'
import { navItems, site, whatsappEnquiry, whatsappLink } from '../data/site'
import { cn } from '../lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main section[id]'),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-charcoal/10 bg-ivory/90 shadow-[0_10px_30px_-24px_rgba(18,61,59,0.5)] backdrop-blur-md'
          : 'border-b border-transparent bg-ivory/40 backdrop-blur-[2px]',
      )}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a
          href="#home"
          aria-label="Aspire Dental & Medical Care — home"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                className={cn(
                  'relative px-4 py-2 text-[13px] font-medium transition-colors',
                  isActive ? 'text-teal' : 'text-charcoal/75 hover:text-teal',
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute inset-x-4 -bottom-0.5 h-px origin-left bg-teal transition-transform duration-300',
                    isActive ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-[13px] font-medium text-charcoal/75 transition-colors hover:text-teal xl:flex"
          >
            <Phone className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
            {site.phone}
          </a>

          <a
            href="#appointment"
            className="group hidden items-center gap-2 whitespace-nowrap rounded-full bg-teal px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:bg-teal-dark sm:inline-flex"
          >
            Book Appointment
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors hover:border-teal hover:text-teal lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full h-[calc(100vh-5rem)] h-[calc(100dvh-5rem)] overflow-y-auto border-t border-charcoal/10 bg-ivory lg:hidden"
          >
            <div className="container-x pb-10 pt-4">
              <nav aria-label="Mobile" className="flex flex-col">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.href ? 'location' : undefined}
                    className={cn(
                      'flex items-center justify-between border-b border-charcoal/10 py-4 font-display text-lg font-medium',
                      active === item.href ? 'text-teal' : 'text-charcoal',
                    )}
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                  </a>
                ))}
              </nav>

              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-teal px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory"
              >
                Book Appointment
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={site.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-charcoal/80"
              >
                <Phone className="h-4 w-4 text-teal" aria-hidden="true" />
                {site.phone}
              </a>

              <a
                href={whatsappLink(whatsappEnquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-charcoal/80"
              >
                <MessageCircle className="h-4 w-4 text-teal" aria-hidden="true" />
                Message on WhatsApp
              </a>

              <div className="mt-6 border-t border-charcoal/10 pt-5">
                <p className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  <MapPin className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                  Block 13 · Gulistan-e-Johar · Karachi
                </p>
                <p className="mt-3 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                  <Clock className="h-3.5 w-3.5 text-teal" aria-hidden="true" />
                  Listed closing time: {site.closingTime}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
