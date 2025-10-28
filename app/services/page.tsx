import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Home, TreePine, Wrench, Palette, LandmarkIcon as Landscape } from "lucide-react"
import Link from "next/link"
import FloatingContact from "@/components/floating-contact"

const services = [
  {
    category: "Civil Engineering",
    icon: Building2,
    services: [
      "Structural Design & Analysis",
      "Project Management",
      "Construction Planning",
      "Quality Control & Assurance",
      "Site Supervision",
      "Building Permits & Approvals",
    ],
    description: "Comprehensive civil engineering solutions for residential and commercial projects",
  },
  {
    category: "Interior Services",
    icon: Home,
    services: [
      "Workspace Interior Fit-outs",
      "Office Design & Planning",
      "Residential Interiors",
      "Commercial Space Design",
      "Furniture & Fixtures",
      "Lighting Design",
    ],
    description: "Transform your spaces with our expert interior design and fit-out services",
  },
  {
    category: "Exterior Services",
    icon: TreePine,
    services: [
      "Landscaping Design",
      "Facade Development",
      "Outdoor Space Planning",
      "Garden Design",
      "Exterior Lighting",
      "Hardscaping Solutions",
    ],
    description: "Enhance your property's exterior appeal with our comprehensive outdoor solutions",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive turnkey solutions for all your civil engineering, interior, and exterior requirements
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{service.category}</CardTitle>
                  <p className="text-slate-300">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/30 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Specialized Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Wrench className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Maintenance Services</h3>
                <p className="text-slate-300">Ongoing maintenance and support for all completed projects</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Palette className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Design Consultation</h3>
                <p className="text-slate-300">Expert design consultation for optimal space utilization</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-8">
                <Landscape className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Project Planning</h3>
                <p className="text-slate-300">Comprehensive project planning from concept to completion</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today for a consultation and let us bring your vision to life
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
