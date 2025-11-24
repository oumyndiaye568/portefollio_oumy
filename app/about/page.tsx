import { AboutSection } from "@/components/sections/about-section"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <AboutSection />
    </main>
  )
}
