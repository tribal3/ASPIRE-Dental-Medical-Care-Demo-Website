import { Clock, MapPin, MessageSquareText, Star } from 'lucide-react'
import { Reveal } from './Reveal'
import { cn } from '../lib/utils'

const items = [
  {
    icon: Star,
    value: '4.8 / 5',
    label: 'Google Rating',
    valueClassName: 'text-2xl sm:text-3xl',
  },
  {
    icon: MessageSquareText,
    value: '45',
    label: 'Google Reviews',
    valueClassName: 'text-2xl sm:text-3xl',
  },
  {
    icon: MapPin,
    value: 'Gulistan-e-Johar',
    label: 'Karachi Location',
    valueClassName: 'text-lg sm:text-xl',
  },
  {
    icon: Clock,
    value: '10 PM',
    label: 'Listed Closing Time',
    valueClassName: 'text-2xl sm:text-3xl',
  },
]

export function TrustStrip() {
  return (
    <section aria-label="Verified business information" className="border-y border-charcoal/10 bg-white">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <Reveal
                key={item.label}
                delay={index * 0.06}
                y={14}
                className={cn(
                  'border-charcoal/10',
                  index === 1 && 'border-l',
                  index === 2 && 'border-t lg:border-l lg:border-t-0',
                  index === 3 && 'border-l border-t lg:border-t-0',
                )}
              >
                <div className="flex h-full items-center gap-3.5 py-7 pr-2 sm:gap-4 sm:px-4 lg:px-8">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory text-teal ring-1 ring-charcoal/10">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p
                      className={cn(
                        'font-display font-semibold leading-tight text-charcoal',
                        item.valueClassName,
                      )}
                    >
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                      {item.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
