import { cn } from '../lib/utils'

export function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 5.3c-1.6-1.7-4.2-2-5.9-.6-1.7 1.5-1.9 4.1-1 6.4.6 1.6.9 3.3 1.1 5.1.1 1 .3 2 .9 2.4.7.4 1.4-.4 1.7-1.2.4-1 .5-2.1.9-3.1.3-.8.7-1.4 1.3-1.4s1 .6 1.3 1.4c.4 1 .5 2.1.9 3.1.3.8 1 1.6 1.7 1.2.6-.4.8-1.4.9-2.4.2-1.8.5-3.5 1.1-5.1.9-2.3.7-4.9-1-6.4-1.7-1.4-4.3-1.1-5.9.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  const isDark = variant === 'dark'

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span
        className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl',
          isDark
            ? 'bg-teal text-ivory'
            : 'bg-ivory/10 text-ivory ring-1 ring-ivory/20',
        )}
      >
        <ToothMark className="h-6 w-6" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            'block font-display text-xl font-extrabold tracking-[0.18em]',
            isDark ? 'text-charcoal' : 'text-ivory',
          )}
        >
          ASPIRE
        </span>
        <span
          className={cn(
            'mt-1 block text-[8.5px] font-semibold uppercase tracking-[0.24em]',
            isDark ? 'text-muted' : 'text-ivory/60',
          )}
        >
          Dental &amp; Medical Care
        </span>
      </span>
    </div>
  )
}
