import { MotionConfig } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustStrip } from './components/TrustStrip'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { ExperienceSection } from './components/ExperienceSection'
import { WhyAspireSection } from './components/WhyAspireSection'
import { AppointmentForm } from './components/AppointmentForm'
import { LocationSection } from './components/LocationSection'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-ivory">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-5 focus:py-3 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.16em] focus:text-ivory"
        >
          Skip to content
        </a>

        <Navbar />

        <main>
          <Hero />
          <TrustStrip />
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <WhyAspireSection />
          <AppointmentForm />
          <LocationSection />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  )
}
