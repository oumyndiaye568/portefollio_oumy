"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GithubIcon, MailIcon, PhoneIcon, LinkedinIcon } from "@/components/icons/icons"
import { Typewriter } from "@/components/ui/typewriter"
export function HeroSection() {

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-20 min-h-screen flex items-center relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-[float-up_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-[float-up_10s_ease-in-out_infinite_2s]" />

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full relative z-10">
        <div className="space-y-6 sm:space-y-8">
          <div className="inline-block animate-slide-in-left">
            <span className="text-primary font-mono text-xs sm:text-sm tracking-wider px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300">
              Bonjour, je suis
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-balance animate-slide-in-left animate-delay-100">
            <Typewriter
              text="Ndeye Oumy Ndiaye"
              delay={100}
              loop={true}
              className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_3s_linear_infinite]"
            />
          </h1>

          <div className="space-y-3 sm:space-y-4">
            <p className="text-xl sm:text-2xl font-semibold text-foreground animate-slide-in-left animate-delay-200 flex items-center gap-2 sm:gap-3">
              <span className="inline-block w-8 sm:w-12 h-0.5 bg-gradient-to-r from-primary to-accent animate-[gradient-shift_3s_linear_infinite] bg-[length:200%_auto]" />
              Développeuse Fullstack
            </p>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl text-pretty animate-slide-in-left animate-delay-300 leading-relaxed">
              Passionnée par la création d'expériences web innovantes et performantes. Je transforme des idées en
              applications modernes avec une architecture solide et un code de qualité.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6 animate-slide-in-left animate-delay-400">
            <Button
              asChild
              size="lg"
              className="gap-2 group relative overflow-hidden shadow-lg hover:shadow-primary/50 transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/projects">
                <span className="relative z-10 flex items-center gap-2">
                  Voir mes projets
                  <span className="inline-block transition-transform group-hover:translate-x-1 duration-300">→</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 group relative overflow-hidden shadow-lg hover:shadow-accent/50 transition-all duration-300 border-accent/30 hover:border-accent bg-transparent hover:bg-accent/10 w-full sm:w-auto"
            >
              <a href="/Ndeye_Oumy_Ndiaye_CV.pdf" download>
                <span className="relative z-10 flex items-center gap-2">
                  Voir CV
                  <span className="inline-block transition-transform group-hover:translate-y-1 duration-300">↓</span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 group hover:bg-primary/10 transition-all duration-300 border-primary/30 hover:border-primary shadow-lg hover:shadow-accent/50 bg-transparent w-full sm:w-auto"
            >
              <Link href="/contact">
                <span className="flex items-center gap-2">
                  Me contacter
                  <span className="inline-block transition-transform group-hover:scale-110 duration-300">✉</span>
                </span>
              </Link>
            </Button>
          </div>

          <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6 animate-slide-in-left animate-delay-500 justify-center sm:justify-start">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/20 hover:scale-125 transition-all duration-300 border border-transparent hover:border-primary/30 shadow-lg hover:shadow-primary/50"
            >
              <a href="https://github.com/oumyndiaye568" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-[#0077B5]/20 hover:scale-125 transition-all duration-300 border border-transparent hover:border-[#0077B5]/30 shadow-lg hover:shadow-[#0077B5]/50"
            >
              <a
                href="https://www.linkedin.com/in/ndeye-oumy-ndiaye"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-accent/20 hover:scale-125 transition-all duration-300 border border-transparent hover:border-accent/30 shadow-lg hover:shadow-accent/50"
            >
              <a href="mailto:ndeyeoumyndiaye80@gmail.com" aria-label="Email">
                <MailIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/20 hover:scale-125 transition-all duration-300 border border-transparent hover:border-primary/30 shadow-lg hover:shadow-primary/50"
            >
              <a href="tel:+221772904307" aria-label="Téléphone">
                <PhoneIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative animate-[float-up_6s_ease-in-out_infinite] order-first lg:order-last">
          <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 rounded-3xl blur-3xl animate-[glow-pulse_4s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 via-primary/40 to-accent/30 rounded-3xl blur-2xl animate-[glow-pulse_5s_ease-in-out_infinite_1s]" />

            <div className="relative rounded-3xl overflow-hidden border-2 border-primary/40 shadow-2xl hover:border-primary/70 transition-all duration-500 hover:scale-105 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-[gradient-shift_3s_linear_infinite]" />
              <Image
                src="/images/profile.png"
                alt="Ndeye Oumy Ndiaye"
                width={350}
                height={350}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>

            <div className="absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-primary/30 rounded-full blur-2xl animate-[glow-pulse_3s_ease-in-out_infinite]" />
            <div className="absolute -bottom-6 -left-6 w-32 sm:w-40 h-32 sm:h-40 bg-accent/30 rounded-full blur-2xl animate-[glow-pulse_4s_ease-in-out_infinite_1.5s]" />
            <div className="absolute top-1/2 -right-6 sm:-right-8 w-20 sm:w-24 h-20 sm:h-24 bg-primary/20 rounded-full blur-xl animate-[float-up_5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    </section>
  )
}
