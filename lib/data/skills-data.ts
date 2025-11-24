// Model: Skills Data (MVC Pattern - Data Layer)
export interface SkillCategory {
  category: string
  title: string
  items: string[]
}

export const skills: SkillCategory[] = [
  {
    category: "languages",
    title: "Langages de programmation",
    items: ["Java", "PHP", "JavaScript", "TypeScript", "DART" ]
  },
  {
    category: "frameworks",
    title: "Frameworks & bibliothèques",
    items: ["Laravel", "React", "Spring Boot", "Node.js", "Express", "Flutter","Angular","React JS","Next JS","Nest JS",],
  },
  {
    category: "frontend-design",
    title: "Front-end & design",
    items: ["Tailwind CSS", "Figma"],
  },
  {
    category: "modeling-tools",
    title: "Modélisation & outils de développement",
    items: ["UML", "StarUML", "VS Code", "Postman"],
  },
  {
    category: "devops",
    title: "Outils & technologies DevOps",
    items: ["Docker", "Nginx", "Jenkins", "Git / GitHub"],
  },
  {
    category: "ai-tools",
    title: "Outils d'IA & No-code/Low-code",
    items: ["KiloCode", "V0", "Lovable", "Bolt", "chatgpt", "perplexity", "Copilot"],
  },
  {
    category: "databases",
    title: "Bases de données",
    items: ["MySQL", "PostgreSQL", "Neon", "MongoDB","Railway","Supabase"]
  },
  {
    category: "architecture",
    title: "Architecture",
    items: ["MVC","SOLID"],
  },
]
