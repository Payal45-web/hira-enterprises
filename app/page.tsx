import Hero from "@/components/hero"
import CompanyOverview from "@/components/company-overview"
import ServicesPreview from "@/components/services-preview"
import ProjectsPreview from "@/components/projects-preview"
import TestimonialsPreview from "@/components/testimonials-preview"
import FloatingContact from "@/components/floating-contact"
import Chatbot from "@/components/chatbot"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CompanyOverview />
      <ServicesPreview />
      <ProjectsPreview />
      <TestimonialsPreview />
      <FloatingContact />
      <Chatbot />
    </main>
  )
}
