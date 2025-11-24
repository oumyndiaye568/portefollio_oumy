import { HeroSection } from "@/components/sections/hero-section"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <HeroSection />
    </main>
  )
}
