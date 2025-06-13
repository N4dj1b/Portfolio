import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate full-stack web developer with over 5 years of experience creating digital solutions
                that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing my knowledge through blog posts and mentoring.
              </p>
              <p className="text-lg text-muted-foreground">
                I believe in writing clean, maintainable code and creating user experiences that are both functional and
                delightful.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Clean Code</h3>
                      <p className="text-sm text-muted-foreground">Writing maintainable and scalable code</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Palette className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">UI/UX Design</h3>
                      <p className="text-sm text-muted-foreground">Creating beautiful user interfaces</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Performance</h3>
                      <p className="text-sm text-muted-foreground">Optimizing for speed and efficiency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
