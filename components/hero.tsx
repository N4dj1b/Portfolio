import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="container px-4 mx-auto text-center sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 mt-6 text-4xl font-bold sm:text-6xl lg:text-7xl text-foreground">
            Hi, I'm <span className="text-primary">Nadjib</span>
          </h1>
          <p className="mb-8 text-xl sm:text-2xl text-muted-foreground">Software Developer</p>
          <p className="max-w-2xl mx-auto mb-12 text-lg text-muted-foreground">
            I create beautiful, responsive, and user-friendly web applications using modern technologies. Let's build
            something amazing together.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="flex justify-center mb-12 space-x-6">
            <Link href="https://github.com/N4dj1b" className="transition-colors text-muted-foreground hover:text-primary">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="https://linkedin.com/in/mohamed-nadjib-taleb" className="transition-colors text-muted-foreground hover:text-primary">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:mn.taleb@esi-sba.dz" className="transition-colors text-muted-foreground hover:text-primary">
              <Mail className="w-6 h-6" />
            </Link>
          </div>

          <Link
            href="#about"
            className="inline-flex items-center transition-colors text-muted-foreground hover:text-primary"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
