import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Tours from "@/assets/tours.png";

export function Projects() {
  const projects = [
    {
      id: "Tours-platform",
      title: "Mytours",
      description:
        "A platform for booking and managing tours with user reviews and ratings.",
      image: Tours,
      technologies: ["Node.js", "Express", "MongoDB", "Pug"],
      githubUrl: "https://github.com/N4dj1b/Mytours",
      liveUrl: "https://mytours-6x20.onrender.com",
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "chat-app",
      title: "Real-Time Chat App",
      description:
        "A real-time chat application with user authentication, private messaging and group chats.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/N4dj1b/Realtime-Chat",
      liveUrl: "https://example.com",
    },
    {
      id: "weather-dashboard",
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive charts.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      id: "event-management-system",
      title: "Event Management System",
      description:
        "A comprehensive event management system with user registration, event creation, and ticket booking.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center sm:text-4xl">
            Featured Projects
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Link>
                    </Button>
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/projects/${project.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
