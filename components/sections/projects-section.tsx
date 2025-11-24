import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "@/components/icons/icons"
import { projects } from "@/lib/data/projects-data"

export function ProjectsSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Mes Projets</h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty">
            Découvrez mes réalisations et projets personnels
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{project.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {(project.role || project.duration) && (
                  <div className="space-y-1">
                    {project.role && (
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        <span className="font-medium">Rôle:</span> {project.role}
                      </p>
                    )}
                    {project.duration && (
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        <span className="font-medium">Durée:</span> {project.duration}
                      </p>
                    )}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-2 flex-1 bg-transparent text-xs sm:text-sm"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" className="gap-2 flex-1 text-xs sm:text-sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
