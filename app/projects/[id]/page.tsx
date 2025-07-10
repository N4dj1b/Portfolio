import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution built with modern web technologies.",
    longDescription:
      "This full-stack e-commerce platform provides a complete shopping experience with features like product catalog, shopping cart, secure payment processing, order management, and an admin dashboard. The application is built with performance and scalability in mind, utilizing server-side rendering and optimized database queries.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Tailwind CSS",
      "Prisma",
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Stripe payment integration",
      "Order management system",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "SEO optimized pages",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    challenges:
      "One of the main challenges was implementing a secure payment system while maintaining a smooth user experience. I solved this by integrating Stripe's secure payment processing and implementing proper error handling and loading states.",
    outcome:
      "The platform successfully handles hundreds of transactions daily with a 99.9% uptime and has received positive feedback from both customers and administrators.",
  },
  "chat-app": {
    title: "Real-Time Chat App",
    description:
      "A real-time chat application with user authentication, private messaging and group chats.",
    longDescription:
      "This chat application allows users to communicate in real-time through private messages and group chats. It features user authentication, message history, and a responsive design that works seamlessly on both desktop and mobile devices. The application uses WebSockets for real-time communication and provides a smooth user experience with instant message delivery.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    features: [
      "User registration and login",
      "Real-time messaging with WebSockets",
      "Private and group chats",
      "Message history and search functionality",
      "User profiles with avatars",
      "Responsive design for mobile and desktop",
      "Push notifications for new messages",
      "Emoji support and message reactions",
    ],
    githubUrl: "https://github.com/N4dj1b/Realtime-Chat",
    liveUrl: "https://mychat1pp.netlify.app/",
    challenges:
      "Implementing real-time messaging with WebSockets was a significant challenge. I overcame this by using Firebase's real-time database and authentication features, which simplified the process of managing user sessions and message delivery.",
    outcome:
      "The chat app has over 5,000 active users and has been praised for its intuitive interface and fast performance. It has also been featured in several tech blogs for its innovative use of real-time technology.",
  },
  "weather-dashboard": {
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with interactive visualizations.",
    longDescription:
      "This weather dashboard provides comprehensive weather information with beautiful visualizations, location-based forecasts, and historical data analysis. The application features interactive charts, maps, and a clean, intuitive interface that works seamlessly across all devices.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["React", "OpenWeatherMap API", "CSS"],
    features: [
      "Current weather conditions",
      "7-day weather forecast",
      "Interactive weather maps",
      "Historical weather data",
      "Location-based search",
      "Weather alerts and notifications",
      "Customizable dashboard widgets",
      "Data export functionality",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    challenges:
      "Handling large amounts of weather data and presenting it in an intuitive way was challenging. I implemented efficient data caching strategies and created custom chart components for optimal performance.",
    outcome:
      "The dashboard serves over 10,000 daily active users and has been featured in several weather-related publications for its innovative design and functionality.",
  },
  "Tours-platform": {
    title: "Mytours",
    description:
      "A platform for booking and managing tours with user reviews and ratings.",
    longDescription:
      "This platform allows users to explore various tours, book them online, and leave reviews. It features a user-friendly interface, secure payment processing, and an admin dashboard for managing tours and user feedback.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: ["Node.js", "Express", "MongoDB", "Pug", "Stripe", "Mapbox GL"],
    features: [
      "Tour listings with detailed descriptions",
      "User authentication and profile management",
      "Booking system with secure payment integration",
      "User reviews and ratings",
      "Admin dashboard for tour management",
      "Responsive design for mobile and desktop",
      "Search and filter functionality",
      "Email notifications for bookings and reviews",
    ],
    githubUrl: "https://github.com/N4dj1b/Mytours",
    liveUrl: "https://mytours-6x20.onrender.com",
    challenges:
      "Integrating a secure payment system while ensuring a smooth user experience was a significant challenge. I addressed this by using Stripe for payment processing and implementing thorough validation and error handling.",
    outcome:
      "The platform has successfully facilitated over 1,000 bookings in its first month and has received positive feedback for its ease of use and reliability.",
  },
  "event-management-system": {
    title: "Event Management System",
    description:
      "A comprehensive event management system with user registration, event creation, and ticket booking.",
    longDescription:
      "This system (web app) allows users to create, manage, and attend events. It features user registration, event creation tools, ticket booking, and an admin dashboard for managing events and users. The application is designed to handle high traffic and provide a seamless user experience.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "User registration and login",
      "Event creation and management",
      "Ticket booking system",
      "Admin dashboard for event management",
      "Responsive design for mobile and desktop",
      "Search and filter functionality for events",
      "Email notifications for bookings and updates",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    challenges:
      "One of the main challenges was ensuring real-time updates for event changes and bookings. I solved this by implementing Socket.IO for real-time communication, which allowed users to receive instant updates without refreshing the page.",
    outcome:
      "The system has successfully managed over 500 events with more than 10,000 attendees in its first three months. It has been praised for its user-friendly interface and robust functionality.",
  },
};

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects[id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>

            <h1 className="mb-4 text-4xl font-bold">{project.title}</h1>
            <p className="mb-6 text-xl text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex mb-8 space-x-4">
              <Button asChild>
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={project.githubUrl} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative mb-8 overflow-hidden rounded-lg aspect-video">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="grid gap-8 mb-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Purpose and Goal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Challenges & Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.challenges}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Results & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.outcome}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
