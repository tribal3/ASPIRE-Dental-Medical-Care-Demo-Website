import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappEnquiry, whatsappLink } from '../data/site'
import { cn } from '../lib/utils'

export function WhatsAppButton() {
  const [suppressed, setSuppressed] = useState(false)

  useEffect(() => {
    const formSection = document.getElementById('appointment')
    if (!formSection) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setSuppressed(entry.isIntersecting))
      },
      { rootMargin: '0px 0px -15% 0px', threshold: 0 },
    )

    observer.observe(formSection)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={cn(
        'fixed bottom-5 right-5 z-40 hidden transition-opacity duration-300 sm:bottom-6 sm:right-6 lg:block',
        suppressed ? 'pointer-events-none opacity-0' : 'opacity-100',
      )}
    >
      <a
        href={whatsappLink(whatsappEnquiry)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Aspire Dental & Medical Care on WhatsApp"
        aria-hidden={suppressed}
        tabIndex={suppressed ? -1 : undefined}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-teal text-ivory shadow-card transition-all duration-300 hover:scale-105 hover:bg-teal-dark"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/20"
        />
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-charcoal px-3 py-2 text-[11px] font-medium text-ivory opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}
