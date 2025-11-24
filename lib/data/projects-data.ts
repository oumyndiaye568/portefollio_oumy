// Model: Projects Data (MVC Pattern - Data Layer)
export interface Project {
  name: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  duration?: string
  role?: string
}

export const projects: Project[] = [
  {
    name: "Application Chat en temps réel",
    description: "Application de messagerie permettant l'échange de messages en temps réel entre utilisateurs",
    technologies: ["React", "Tailwind CSS"],
    githubUrl: "https://github.com/oumyndiaye568/projet-chat-app",
    duration: "5 jours",
    role: "Développeuse front-end",
  },
  {
    name: "Gestion des employés et de la paie",
    description: "Modèle de gestion des employés et du calcul de la paie avec Prisma ORM",
    technologies: ["Node.js", "Prisma", "PostgreSQL", "MySQL"],
    githubUrl: "https://github.com/oumyndiaye568",
    duration: "9 jours",
    role: "Développeuse back-end",
  },
  {
    name: "Application To-Do List",
    description: "Application web intuitive pour la gestion de tâches (ajout, modification, suppression, filtrage)",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/oumyndiaye568/TODO_REACT",
    duration: "10 jours",
    role: "Développeuse front-end",
  },
  {
    name: "Application de gestion des tâches (Full-stack)",
    description:
      "Application web complète avec authentification, délégation de tâches, historique, et enregistrement vocal",
    technologies: ["Node.js", "React", "TypeScript"],
    githubUrl: "https://github.com/oumyndiaye568",
    duration: "12 jours",
    role: "Développeuse full-stack",
  },
  {
    name: "Développeuse Fullstack - OM Pay 2025",
    description: "Application mobile de gestion de paiements et transactions financières sécurisées. Plateforme complète avec authentification OTP et gestion multi-comptes bancaires. Solution de paiement intégrée avec suivi des transactions et historique détaillé.",
    technologies: ["Flutter", "Dart", "Laravel", "Supabase", "Eloquent ORM", "Swagger", "Laravel Passport"],
    githubUrl: "#",
    duration: "2 semaines",
    role: "Développeuse Fullstack",
  },
  {
    name: "Développeuse Backend - API Bancaire 2025",
    description: "Conception et développement d'une API REST sécurisée pour système bancaire. Implémentation complète de la gestion des comptes, transactions et utilisateurs. Mise en place de mécanismes de sécurité avancés et documentation technique.",
    technologies: ["Laravel 10", "PostgreSQL", "OAuth2", "Swagger", "PHPUnit", "Docker"],
    githubUrl: "#",
    duration: "3 semaines",
    role: "Développeuse Backend",
  },
  {
    name: "Développeuse Backend - MAXIT SA 2025",
    description: "Architecture et développement d'un écosystème financier interconnecté. Système de vérification d'identité et traitement sécurisé des transferts d'argent. Conception modulaire respectant les standards de l'industrie financière.",
    technologies: ["PHP POO", "MySQL", "Design Patterns SOLID", "REST API"],
    githubUrl: "#",
    duration: "1 semaine",
    role: "Développeuse Backend",
  },
]
