import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Zap } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality management system certification ensuring consistent service delivery",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals with deep expertise in civil engineering and design",
  },
  {
    icon: Target,
    title: "Turnkey Solutions",
    description: "Complete project management from concept to completion",
  },
  {
    icon: Zap,
    title: "Modern Approach",
    description: "Cutting-edge technology and innovative solutions for every project",
  },
]

export default function CompanyOverview() {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-primary">Why Choose HIRA ENTERPRISES</h2>
          <p className="text-xl text-dark-tertiary max-w-3xl mx-auto leading-relaxed font-body">
            We combine technical expertise with creative vision to deliver exceptional results that exceed expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass border-0 shadow-soft hover:shadow-soft-lg transition-smooth group text-center"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-primary mb-4">{feature.title}</h3>
                <p className="text-dark-tertiary leading-relaxed font-body">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
