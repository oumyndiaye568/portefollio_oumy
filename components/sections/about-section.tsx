import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon, MapPinIcon, BriefcaseIcon } from "@/components/icons/icons"
import { personalInfo, education, softSkills } from "@/lib/data/personal-data"

export function AboutSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-balance">À propos de moi</h1>
          <p className="text-xl text-muted-foreground text-pretty">{personalInfo.objective}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-primary" />
                Informations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground">Localisation</p>
                <p className="font-medium">{personalInfo.location}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="font-medium text-primary hover:underline">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Téléphone</p>
                <a href={`tel:${personalInfo.phone}`} className="font-medium text-primary hover:underline">
                  {personalInfo.phone}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCapIcon className="h-5 w-5 text-primary" />
                Formation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BriefcaseIcon className="h-5 w-5 text-primary" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Langues</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Français</span>
              <span className="text-sm text-muted-foreground">Courant</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Anglais</span>
              <span className="text-sm text-muted-foreground">Intermédiaire</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
