import {
  ClipboardCheck,
  HeartHandshake,
  MessageCircle,
  ShieldPlus,
  Sparkles,
  Stethoscope,
} from 'lucide-react'
import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'consultation',
    number: '01',
    title: 'General Dental Consultation',
    description: 'Discuss your dental concerns and explore appropriate care options.',
    icon: Stethoscope,
  },
  {
    id: 'checkups',
    number: '02',
    title: 'Dental Checkups',
    description: 'Routine dental assessments to help you understand your oral health needs.',
    icon: ClipboardCheck,
  },
  {
    id: 'cleaning',
    number: '03',
    title: 'Dental Cleaning',
    description: 'Explore professional dental cleaning and oral hygiene care.',
    icon: Sparkles,
  },
  {
    id: 'restorative',
    number: '04',
    title: 'Restorative Dental Care',
    description: 'Discuss treatment options for common dental problems.',
    icon: ShieldPlus,
  },
  {
    id: 'enquiries',
    number: '05',
    title: 'Dental Treatment Enquiries',
    description: 'Get in touch to discuss your individual dental concerns.',
    icon: MessageCircle,
  },
  {
    id: 'guidance',
    number: '06',
    title: 'Patient Guidance',
    description: 'Understand your treatment options through a clear consultation.',
    icon: HeartHandshake,
  },
]
