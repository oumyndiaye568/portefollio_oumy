import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, MessageCircleIcon } from "@/components/icons/icons"
import { contactInfo } from "@/lib/data/contact-data"
import { ContactForm } from "@/components/ui/contact-form"

export function ContactSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="space-y-3 sm:space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">Contactez-moi</h1>
          <p className="text-lg sm:text-xl text-muted-foreground text-pretty px-4">
            N'hésitez pas à me contacter pour discuter de vos projets
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <ContactForm />
        </div>

        <div className="space-y-3 sm:space-y-4 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold">Autres moyens de contact</h2>
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Vous pouvez également me joindre directement via ces plateformes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <MailIcon className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
              <CardDescription className="text-sm">Envoyez-moi un email</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full gap-2 bg-transparent text-sm">
                <a href={`mailto:${contactInfo.email}`}>
                  <MailIcon className="h-4 w-4" />
                  <span className="truncate">{contactInfo.email}</span>
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <PhoneIcon className="h-5 w-5 text-primary" />
                Téléphone
              </CardTitle>
              <CardDescription className="text-sm">Appelez-moi directement</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full gap-2 bg-transparent text-sm">
                <a href={`tel:${contactInfo.phone}`}>
                  <PhoneIcon className="h-4 w-4" />
                  {contactInfo.phone}
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <MessageCircleIcon className="h-5 w-5 text-primary" />
                WhatsApp
              </CardTitle>
              <CardDescription className="text-sm">Discutons sur WhatsApp</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full gap-2 bg-transparent text-sm">
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircleIcon className="h-4 w-4" />
                  Ouvrir WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <LinkedinIcon className="h-5 w-5 text-primary" />
                LinkedIn
              </CardTitle>
              <CardDescription className="text-sm">Connectons-nous sur LinkedIn</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full gap-2 bg-transparent text-sm">
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="h-4 w-4" />
                  Voir mon profil
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <GithubIcon className="h-5 w-5 text-primary" />
              GitHub
            </CardTitle>
            <CardDescription className="text-sm">Découvrez mes projets open source</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {contactInfo.github.map((profile, index) => (
              <Button
                key={index}
                asChild
                variant="outline"
                className="w-full gap-2 bg-transparent hover:scale-105 transition-transform duration-300 text-sm"
              >
                <a href={profile.url} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  {profile.username}
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
