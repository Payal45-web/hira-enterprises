"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"   // <-- NEW
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const router = useRouter()                // <-- NEW

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // NEW: navigation handler
  const handleCompanyProfileClick = () => {
    router.push("/projects")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-light-surface to-blue-100">
      {/* ... (all your animated background stays the same) ... */}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge, Heading, Subtitle, Description – unchanged */}
        <Badge className="mb-8 glass border-light-primary/30 text-dark-primary px-8 py-3 text-base font-semibold rounded-full shadow-soft backdrop-blur-md">
          <Award className="w-5 h-5 mr-3 text-dark-highlight" />
          ISO 9001:2015 Certified Company
          <Sparkles className="w-4 h-4 ml-3 text-dark-highlight animate-pulse" />
        </Badge>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 text-dark-primary leading-tight tracking-tight">
          <span className="block">HIRA</span>
          <span className="block text-gradient bg-gradient-to-r from-dark-highlight to-dark-accent bg-clip-text text-transparent">
            ENTERPRISES
          </span>
        </h1>

        <div className="mb-8">
          <p className="text-3xl md:text-4xl font-bold text-dark-secondary mb-2">Civil Engineers & Contractors</p>
          <div className="w-32 h-1 bg-gradient-to-r from-light-primary to-light-secondary mx-auto rounded-full"></div>
        </div>

        <p className="text-xl md:text-2xl text-dark-tertiary max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          Turnkey solutions for all types of interior & exterior requirements to enhance the ambience of workspace.
          <span className="block mt-2 text-lg text-dark-secondary">
            Professional excellence in civil engineering, construction, and design services.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="gradient-primary hover:shadow-soft-lg text-white px-10 py-5 text-xl font-bold rounded-2xl transition-all duration-300 group shadow-soft hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>

          {/* FIXED BUTTON */}
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-dark-highlight text-dark-primary hover:bg-dark-highlight hover:text-white px-10 py-5 text-xl font-bold rounded-2xl transition-all duration-300 group shadow-soft hover:scale-105 bg-transparent"
            onClick={handleCompanyProfileClick}   // <-- uses defined handler
          >
            <Download className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            Company Profile
          </Button>
        </div>

        {/* Stats Row – unchanged */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-black text-dark-highlight mb-2">50+</div>
            <div className="text-sm font-medium text-dark-secondary">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-dark-highlight mb-2">15+</div>
            <div className="text-sm font-medium text-dark-secondary">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-dark-highlight mb-2">100%</div>
            <div className="text-sm font-medium text-dark-secondary">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-dark-highlight mb-2">24/7</div>
            <div className="text-sm font-medium text-dark-secondary">Support Available</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator – unchanged */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dark-highlight/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-dark-highlight to-light-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}