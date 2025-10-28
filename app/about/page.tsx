import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Target, Users, Calendar } from "lucide-react"
import FloatingContact from "@/components/floating-contact"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">
            ISO 9001:2015 Certified Company
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About HIRA ENTERPRISES
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering turnkey solutions for all types of interior & exterior requirements to enhance the ambience of
            workspace
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To provide exceptional civil engineering and contracting services that exceed client expectations. We
                  are committed to delivering innovative, sustainable, and cost-effective solutions while maintaining
                  the highest standards of quality and safety.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  To be the leading civil engineering and contracting company, recognized for our expertise,
                  reliability, and commitment to excellence. We strive to build lasting relationships with our clients
                  and contribute to the development of sustainable infrastructure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/30 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Our Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Foundation</h3>
                <p className="text-slate-300">
                  Established with a vision to provide comprehensive civil engineering solutions
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">ISO Certification</h3>
                <p className="text-slate-300">
                  Achieved ISO 9001:2015 certification, demonstrating our commitment to quality
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Growth</h3>
                <p className="text-slate-300">
                  Expanded our services to include comprehensive interior and exterior solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Certifications & Standards
          </h2>

          <Card className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <Award className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4 text-white">ISO 9001:2015 Certified</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our ISO 9001:2015 certification demonstrates our commitment to maintaining the highest quality
                management standards in all our projects. This certification ensures that we consistently deliver
                services that meet customer and regulatory requirements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
