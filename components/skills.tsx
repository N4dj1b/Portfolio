import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Redux", "Zustand", "React Query", "Framer Motion"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "MySql", "Sqlite", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Azure", "Vercel", "Netlify", "R", "Figma", "Jest", "Cypress", "Linux", "CI/CD", "Agile Methodologies", "Web Accessibility (a11y)"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-center sm:text-4xl">My Skills</h2>

          <div className="text-lg mb-8">Apart from the courses included in my degree, i've taken a number of online courses such as <strong>Node.js, Express, MongoDB & More: The Complete Bootcamp</strong> and <strong>Offensive Hacking Unfolded</strong></div>
          <div className="grid gap-8 md:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
