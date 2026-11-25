import type { NavItem } from '../types'

export const site = {
  name: 'Aspire Dental & Medical Care',
  phone: '+92 313 2656659',
  phoneHref: 'tel:+923132656659',
  whatsapp: 'https://wa.me/923132656659',
  addressLine1: 'Block 13, Gulistan-e-Johar,',
  addressLine2: 'Karachi, Pakistan, 75290.',
  location: 'Gulistan-e-Johar, Karachi',
  closingTime: '10:00 PM',
  rating: '4.8',
  reviews: 45,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Aspire+Dental+Medical+Care+Block+13+Gulistan-e-Johar+Karachi',
  mapEmbed:
    'https://www.google.com/maps?q=Aspire+Dental+Medical+Care+Block+13+Gulistan-e-Johar+Karachi&output=embed',
} as const

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Patient Care', href: '#care' },
  { label: 'Contact', href: '#contact' },
]

export function whatsappLink(message?: string): string {
  return message ? `${site.whatsapp}?text=${encodeURIComponent(message)}` : site.whatsapp
}

export const whatsappEnquiry =
  "Hello Aspire Dental & Medical Care, I'd like to enquire about an appointment."
