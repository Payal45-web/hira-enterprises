"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, User, Award, Target, Users, Zap } from "lucide-react"
import FloatingContact from "@/components/floating-contact"
import Chatbot from "@/components/chatbot"

const teamMembers = [
  {
    name: "Hira Pehare",
    role: "Founder & Director",
    phone: "9223350912",
    email: "hiraenterprises26@gmail.com",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Visionary leader with extensive experience in civil engineering and project management. Drives the company's strategic direction and client relationships with over 15 years of industry expertise.",
    specialties: ["Strategic Planning", "Client Relations", "Project Oversight"],
  },
  {
    name: "Manoj Pehare",
    role: "Director",
    phone: "9223306882",
    email: "hiraenterprises26@gmail.com",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Expert in construction management and quality assurance. Oversees project execution and ensures adherence to industry standards with meticulous attention to detail.",
    specialties: ["Construction Management", "Quality Control", "Safety Standards"],
  },
  {
    name: "Omkar Pehare",
    role: "Project Lead",
    phone: "9223350912",
    email: "hiracons@gmail.com",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dynamic project leader specializing in interior design and client coordination. Ensures seamless project delivery and client satisfaction through innovative solutions.",
    specialties: ["Interior Design", "Project Coordination", "Client Management"],
  },
  {
    name: "Mandira Pardeshi",
    role: "Design Specialist",
    phone: "9223350912",
    email: "hiraenterprises26@gmail.com",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Creative design specialist with expertise in architectural visualization and space planning. Brings innovative design concepts to life with modern aesthetics and functionality.",
    specialties: ["Architectural Design", "Space Planning", "3D Visualization"],
  },
]

const companyValues = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in every project, ensuring the highest quality standards and client satisfaction.",
    color: "text-dark-highlight",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace innovative solutions and cutting-edge technologies to deliver superior results.",
    color: "text-light-primary",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in teamwork and collaborative approaches to achieve outstanding project outcomes.",
    color: "text-dark-accent",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We deliver projects on time and within budget through efficient processes and expert management.",
    color: "text-light-secondary",
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-light-surface to-blue-100">
      <FloatingContact />
      <Chatbot />

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-light-primary/20 to-light-secondary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-light-tertiary/15 to-light-primary/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8 text-dark-primary leading-tight">
            Meet Our{" "}
            <span className="text-gradient bg-gradient-to-r from-dark-highlight to-dark-accent bg-clip-text text-transparent">
              Expert Team
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-secondary max-w-4xl mx-auto leading-relaxed font-medium">
            The experienced professionals who bring expertise, dedication, and innovation to every project
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="glass border-light-primary/20 shadow-soft hover:shadow-soft-lg transition-all duration-500 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-32 h-32 mx-auto md:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-light-primary to-light-secondary p-1">
                        <div className="w-full h-full rounded-xl overflow-hidden bg-light-background flex items-center justify-center">
                          <User className="w-16 h-16 text-dark-highlight" />
                        </div>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-dark-primary mb-2">{member.name}</h3>
                      <p className="text-lg font-semibold text-dark-highlight mb-4">{member.role}</p>
                      <p className="text-dark-secondary text-sm leading-relaxed mb-6">{member.bio}</p>

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-dark-primary mb-3">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-light-primary/20 text-dark-highlight text-xs font-medium rounded-full border border-light-primary/30"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-light-primary/40 text-dark-highlight hover:bg-light-primary/10 transition-all duration-300 flex items-center gap-2 rounded-xl bg-transparent"
                          onClick={() => window.open(`tel:${member.phone}`)}
                        >
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-light-secondary/40 text-dark-highlight hover:bg-light-secondary/10 transition-all duration-300 flex items-center gap-2 rounded-xl bg-transparent"
                          onClick={() => window.open(`mailto:${member.email}`)}
                        >
                          <Mail className="w-4 h-4" />
                          Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-6 bg-gradient-to-r from-light-background/50 to-light-surface/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-primary">
              Our{" "}
              <span className="text-gradient bg-gradient-to-r from-dark-highlight to-dark-accent bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-dark-secondary max-w-3xl mx-auto leading-relaxed">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="glass border-light-primary/20 shadow-soft hover:shadow-soft-lg transition-all duration-500 group text-center"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-light-primary/20 to-light-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-dark-primary mb-4">{value.title}</h3>
                  <p className="text-dark-secondary leading-relaxed text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
