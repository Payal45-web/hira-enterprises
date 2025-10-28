import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Modern Office Complex",
    category: "Civil Engineering",
    image: "../projects/civil1.jpg",
    description: "Complete structural design and construction of a 5-story office complex",
  },
  {
    title: "Corporate Interior Fit-out",
    category: "Interior Design",
    image: "../projects/interior.jpg",
    description: "Comprehensive interior design for multinational corporation's Mumbai office",
  },
  {
    title: "Residential Landscape",
    category: "Exterior Design",
    image: "../projects/exterior.jpg",
    description: "Beautiful landscape design for luxury residential complex",
  },
]

export default function ProjectsPreview() {
  return (
    <section className="py-24 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-primary">Featured Projects</h2>
          <p className="text-xl text-dark-tertiary max-w-3xl mx-auto leading-relaxed font-body">
            Showcasing our expertise through successful project deliveries across various sectors
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="glass border-0 shadow-soft hover:shadow-soft-lg transition-smooth group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <Badge className="absolute top-4 left-4 bg-light-primary/90 text-dark-primary border-0 rounded-lg">
                  {project.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-dark-primary mb-3 group-hover:text-dark-highlight transition-smooth">
                  {project.title}
                </h3>
                <p className="text-dark-tertiary leading-relaxed font-body">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button
              size="lg"
              className="gradient-primary text-white px-8 py-4 text-lg font-medium rounded-xl transition-smooth hover:shadow-soft-lg group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}