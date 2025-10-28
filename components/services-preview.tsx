import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, TreePine, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Building2,
    title: "Civil Engineering",
    description: "Comprehensive structural design, project management, and construction planning services",
    features: ["Structural Design", "Project Management", "Quality Control"],
  },
  {
    icon: Home,
    title: "Interior Services",
    description: "Professional interior design and fit-out solutions for workspaces and commercial spaces",
    features: ["Workspace Design", "Fit-out Services", "Furniture Planning"],
  },
  {
    icon: TreePine,
    title: "Exterior Services",
    description: "Landscape design, facade development, and outdoor space planning solutions",
    features: ["Landscape Design", "Facade Development", "Outdoor Planning"],
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-light-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-primary">Our Services</h2>
          <p className="text-xl text-dark-tertiary max-w-3xl mx-auto leading-relaxed font-body">
            Comprehensive solutions across civil engineering, interior design, and exterior development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="glass border-0 shadow-soft hover:shadow-soft-lg transition-smooth group">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-dark-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-dark-tertiary mb-6 leading-relaxed font-body">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-dark-secondary">
                      <div className="w-2 h-2 bg-light-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="gradient-primary text-white px-8 py-4 text-lg font-medium rounded-xl transition-smooth hover:shadow-soft-lg group"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
