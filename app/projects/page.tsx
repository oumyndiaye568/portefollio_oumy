import { ProjectsSection } from "@/components/sections/projects-section"
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <ProjectsSection />
    </main>
  )
}
