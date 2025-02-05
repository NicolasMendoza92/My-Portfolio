import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, Database, Paintbrush, TestTubeDiagonal } from "lucide-react"
import { useLanguage } from "../providers/LanguageProvider"

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "CSS", "Bootstrap"],
    icon: Code,
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python, ORM"],
    icon: Server,
  },
  {
    category: "Data bases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Neon.db", "Supabase"],
    icon: Database,
  },
  {
    category: "Design",
    items: ["Figma", "Adobe XD", "Responsive Design", "UI and UX experience"],
    icon: Paintbrush,
  },
  {
    category: "Testing",
    items: ["Unit Testing", "Jest", "POSTMAN", "React testing library"],
    icon: TestTubeDiagonal,
  },
]

export default function Skills() {
    const { t } = useLanguage()
  
    return (
      <section className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-800">
        <h2 className="mb-8 text-3xl font-bold text-center">{t("skills")}</h2>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <skill.icon className="mr-2 h-6 w-6" />
                  {skill.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }

