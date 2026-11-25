import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export interface NavItem {
  label: string
  href: string
}

export interface TrustItem {
  icon: LucideIcon
  value: string
  label: string
}
