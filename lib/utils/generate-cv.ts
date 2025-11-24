import jsPDF from "jspdf"

export function generateCV() {
  const doc = new jsPDF()

  // Configuration des couleurs
  const primaryColor: [number, number, number] = [41, 128, 185] // Bleu
  const textColor: [number, number, number] = [44, 62, 80] // Gris foncé
  const lightGray: [number, number, number] = [189, 195, 199]

  let yPosition = 20

  // En-tête avec nom
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, 210, 40, "F")
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont("helvetica", "bold")
  doc.text("Ndeye Oumy Ndiaye", 105, 20, { align: "center" })
  doc.setFontSize(14)
  doc.setFont("helvetica", "normal")
  doc.text("Developpeuse Web Fullstack", 105, 30, { align: "center" })

  yPosition = 50

  // Informations de contact
  doc.setTextColor(...textColor)
  doc.setFontSize(10)
  doc.text("Email: ndeyeoumyndiaye80@gmail.com", 20, yPosition)
  doc.text("Tel: 77 290 43 07", 120, yPosition)
  yPosition += 6
  doc.text("LinkedIn: linkedin.com/in/ndeye-oumy-ndiaye", 20, yPosition)
  doc.text("GitHub: github.com/oumyndiaye568", 120, yPosition)

  yPosition += 15

  // Fonction pour ajouter une section
  const addSection = (title: string) => {
    doc.setFillColor(...primaryColor)
    doc.rect(15, yPosition - 5, 180, 8, "F")
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont("helvetica", "bold")
    doc.text(title, 20, yPosition)
    yPosition += 12
    doc.setTextColor(...textColor)
    doc.setFont("helvetica", "normal")
  }

  // Expériences Projet
  addSection("EXPERIENCES PROJET")

  const projects = [
    {
      title: "Application Chat en temps reel",
      description: "Developpement d'une application de messagerie permettant l'echange de messages en temps reel.",
      role: "Developpeuse front-end",
      tech: "React, Tailwind CSS",
      duration: "5 jours",
      github: "github.com/oumyndiaye568/projet-chat-app",
    },
    {
      title: "Gestion des employes et de la paie",
      description: "Mise en place d'un modele de gestion des employes et du calcul de la paie avec Prisma ORM.",
      role: "Developpeuse back-end",
      tech: "Node.js, Prisma, PostgreSQL/MySQL",
      duration: "9 jours",
      github: "github.com/oumyndiaye568",
    },
    {
      title: "Application To-Do List",
      description: "Application web intuitive pour la gestion de taches (ajout, modification, suppression, filtrage).",
      role: "Developpeuse front-end",
      tech: "HTML, CSS, JavaScript",
      duration: "10 jours",
      github: "github.com/oumyndiaye568/TODO_REACT",
    },
    {
      title: "Application de gestion des taches (Full-stack)",
      description:
        "Application complete avec authentification, delegation de taches, historique, et enregistrement vocal.",
      role: "Developpeuse full-stack",
      tech: "Node.js, React",
      duration: "12 jours",
      github: "github.com/oumyndiaye568",
    },
  ]

  doc.setFontSize(9)
  projects.forEach((project, index) => {
    if (yPosition > 250) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFont("helvetica", "bold")
    doc.text(project.title, 20, yPosition)
    yPosition += 5

    doc.setFont("helvetica", "normal")
    const descLines = doc.splitTextToSize(project.description, 170)
    doc.text(descLines, 20, yPosition)
    yPosition += descLines.length * 4

    doc.text(`- Role: ${project.role}`, 20, yPosition)
    yPosition += 4
    doc.text(`- Technologies: ${project.tech}`, 20, yPosition)
    yPosition += 4
    doc.text(`- Duree: ${project.duration}`, 20, yPosition)
    yPosition += 4
    doc.setTextColor(...primaryColor)
    doc.text(`- GitHub: ${project.github}`, 20, yPosition)
    doc.setTextColor(...textColor)
    yPosition += 8
  })

  // Formation académique
  if (yPosition > 220) {
    doc.addPage()
    yPosition = 20
  }

  addSection("FORMATION ACADEMIQUE")
  doc.setFontSize(9)
  doc.text("- Baccalaureat STEG - 2023", 20, yPosition)
  yPosition += 5
  doc.text("- Formation en bureautique", 20, yPosition)
  yPosition += 5
  doc.text("- Formation en informatique - Orange Digital Center / Sonatel Academie", 20, yPosition)
  yPosition += 4
  doc.text("  (fevrier 2024 - novembre 2024)", 20, yPosition)
  yPosition += 10

  // Compétences
  addSection("COMPETENCES")
  doc.setFontSize(9)
  doc.setFont("helvetica", "bold")
  doc.text("Hard Skills:", 20, yPosition)
  yPosition += 5
  doc.setFont("helvetica", "normal")
  const hardSkills = doc.splitTextToSize(
    "HTML, CSS, JavaScript, React, Node.js, Prisma ORM, PostgreSQL/MySQL, Git/GitHub, outils de deploiement (Vercel, Render)",
    170,
  )
  doc.text(hardSkills, 20, yPosition)
  yPosition += hardSkills.length * 4 + 3

  doc.setFont("helvetica", "bold")
  doc.text("Soft Skills:", 20, yPosition)
  yPosition += 5
  doc.setFont("helvetica", "normal")
  doc.text("Travail en equipe, Adaptabilite, Autonomie, Communication, Resolution de problemes", 20, yPosition)
  yPosition += 10

  // Référents
  if (yPosition > 250) {
    doc.addPage()
    yPosition = 20
  }

  addSection("REFERENTS")
  doc.setFontSize(9)
  doc.text("- Aly Tall Niang - Sonatel Academie (Front-end) - Tel: 77 182 54 14", 20, yPosition)
  yPosition += 5
  doc.text("- Birane Baila Wane - Sonatel Academie (Back-end) - Tel: 77 766 95 95", 20, yPosition)

  // Télécharger le PDF
  doc.save("Ndeye_Oumy_Ndiaye_CV.pdf")
}
