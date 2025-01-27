import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useLanguage } from "../providers/LanguageProvider"

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  linkB?: string
}

const projects: Project[] = [
  {
    title: "ERP software",
    description: "Management integral system for SMEs and entrepreneurs",
    technologies: ["Next.js", "TypeScript", "NeonDb", "Clerk"],
    link: "https://gestionomy.com",
  },
  {
    title: "TechStore e-commerce",
    description: "Full e-commerce project, paymet gateway, cart and more...",
    technologies: ["Next.js", "Stripe", "MongoDB", "JavaScript"],
    link: "https://ecommerce-front-rust.vercel.app/",
    linkB: "https://ecommerce-admin-delta-lemon.vercel.app/",
  },
  {
    title: "Finance Tracker",
    description: "Personal finance tracker aplication.",
    technologies: ["Next.js", "Clerk", "Prisma", "TypeScript"],
    link: "https://finance-tracker-app-nu.vercel.app/",
  },
  {
    title: "Inventory Management",
    description: "Inventory management, operations, sales, purchasing and customer management.",
    technologies: ["Next.js", "MongoDB", "JavaScript"],
    link: "https://finance-tracker-app-nu.vercel.app/",
  },
  {
    title: "Bakery e-commerce",
    description: "Full e-commerce project, paymet gateway, cart and more....",
    technologies: ["React.js", "MongoDB", "JavaScript", "node.js", "express"],
    link: "https://coco-mad-react.vercel.app/",
  },
  {
    title: "OnePage appointment",
    description: "Page to make and manage bookings for hairdressing salons",
    technologies: ["React.js", "MongoDB", "JavaScript", "node.js"],
    link: "https://appointment-management.vercel.app/",
    linkB: "https://appointment-management.vercel.app/admin",
  },

]
export default function Projects() {
    const { t } = useLanguage()
  
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-3xl font-bold text-center">{t("projects")}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> {t("viewProject")}
                  </a>
                </Button>
                {project.linkB && (
                <Button variant="ghost" asChild>
                  <a href={project.linkB} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> {t("viewBackOffice")}
                  </a>
                </Button>
              )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    )
  }
  

