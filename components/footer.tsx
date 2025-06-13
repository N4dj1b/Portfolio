import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Mohamed Nadjib Taleb</h3>
            <p className="text-muted-foreground">
              Full-Stack Web Developer passionate about creating amazing digital experiences.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#about" className="block transition-colors text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="#skills" className="block transition-colors text-muted-foreground hover:text-primary">
                Skills
              </Link>
              <Link href="#projects" className="block transition-colors text-muted-foreground hover:text-primary">
                Projects
              </Link>
              <Link href="#contact" className="block transition-colors text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com/N4dj1b" className="transition-colors text-muted-foreground hover:text-primary">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com/in/mohamed-nadjib-taleb" className="transition-colors text-muted-foreground hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" className="transition-colors text-muted-foreground hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:mn.taleb@esi-sba.dz"
                className="transition-colors text-muted-foreground hover:text-primary"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mohamed Nadjib Taleb. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
