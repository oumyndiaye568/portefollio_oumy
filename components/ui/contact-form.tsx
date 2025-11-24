"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MailIcon, MessageCircleIcon } from "@/components/icons/icons"

export function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent, method: "email" | "whatsapp") => {
    e.preventDefault()

    const { nom, prenom, email, telephone, message } = formData

    if (method === "email") {
      const subject = encodeURIComponent(`Message de ${prenom} ${nom}`)
      const body = encodeURIComponent(
        `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\nTéléphone: ${telephone}\n\nMessage:\n${message}`,
      )
      window.location.href = `mailto:ndeyeoumyndiaye80@gmail.com?subject=${subject}&body=${body}`
    } else if (method === "whatsapp") {
      const text = encodeURIComponent(
        `Bonjour, je suis ${prenom} ${nom}.\n\nEmail: ${email}\nTéléphone: ${telephone}\n\nMessage:\n${message}`,
      )
      window.open(`https://wa.me/221772904307?text=${text}`, "_blank")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="border-primary/20 backdrop-blur-sm bg-card/50">
      <CardHeader>
        <CardTitle className="text-2xl">Envoyez-moi un message</CardTitle>
        <CardDescription>Remplissez le formulaire et choisissez votre méthode de contact préférée</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom">Nom *</Label>
              <Input
                id="nom"
                name="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input
                id="prenom"
                name="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone">Téléphone *</Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="+221 XX XXX XX XX"
                value={formData.telephone}
                onChange={handleChange}
                required
                className="bg-background/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décrivez votre projet ou votre demande..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-background/50 resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              type="button"
              onClick={(e) => handleSubmit(e, "email")}
              className="flex-1 gap-2 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              <MailIcon className="h-4 w-4" />
              Envoyer par Email
            </Button>
            <Button
              type="button"
              onClick={(e) => handleSubmit(e, "whatsapp")}
              variant="outline"
              className="flex-1 gap-2 border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              <MessageCircleIcon className="h-4 w-4" />
              Envoyer via WhatsApp
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
