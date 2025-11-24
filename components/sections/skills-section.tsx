import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeIcon, DatabaseIcon, WrenchIcon, ServerIcon, MessageCircleIcon, BriefcaseIcon } from "@/components/icons/icons"
import { skills } from "@/lib/data/skills-data"

const iconMap = {
  languages: CodeIcon,
  frameworks: ServerIcon,
  "frontend-design": CodeIcon,
  "modeling-tools": WrenchIcon,
  devops: ServerIcon,
  "ai-tools": MessageCircleIcon,
  databases: DatabaseIcon,
  architecture: BriefcaseIcon,
}

export function SkillsSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Compétences Techniques</h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty">Technologies et outils que je maîtrise</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {skills.map((category, index) => {
            const Icon = iconMap[category.category as keyof typeof iconMap]
            return (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <Icon className="h-5 w-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {category.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary rounded-lg text-xs sm:text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
