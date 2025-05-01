import HeroSection from "@/components/hero-section"
import InterfaceSection from "@/components/interface-section"
import PlatformSection from "@/components/platform-section"
import EventsSection from "@/components/events-section"
import ControlSection from "@/components/control-section"
import ConferenceSection from "@/components/conference-section"
import CollaborateSection from "@/components/collaborate-section"
import RecordingSection from "@/components/recording-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import JoinSection from "@/components/join-section"
import WelcomeModal from "@/components/welcome-modal"
import { ScrollAnimationProvider } from "@/components/scroll-animation-provider"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col lg:px-10">
      <ScrollAnimationProvider>
        <main className="flex-1">
          <WelcomeModal />
          <HeroSection />
          <InterfaceSection />
          <PlatformSection />
          <EventsSection />
          <ControlSection />
          <ConferenceSection />
          <CollaborateSection />
          <RecordingSection />
          <StatsSection />
          <TestimonialsSection />
          <JoinSection />
        </main>
      </ScrollAnimationProvider>
    </div>
  )
}
