import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-dark-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden bg-white p-1">
                <Image
                  src="/logo.jpeg"
                  alt="HIRA ENTERPRISES Logo"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white font-display">HIRA ENTERPRISES</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-body">
              ISO 9001:2015 Certified Civil Engineers & Contractors providing turnkey solutions for interior & exterior
              requirements.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-display">Quick Links</h3>
            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-white/70 hover:text-light-primary transition-smooth text-sm font-body"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block text-white/70 hover:text-light-primary transition-smooth text-sm font-body"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="block text-white/70 hover:text-light-primary transition-smooth text-sm font-body"
              >
                Projects
              </Link>
              <Link
                href="/team"
                className="block text-white/70 hover:text-light-primary transition-smooth text-sm font-body"
              >
                Team
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-display">Services</h3>
            <div className="space-y-3">
              <p className="text-white/70 text-sm font-body">Civil Engineering</p>
              <p className="text-white/70 text-sm font-body">Interior Design</p>
              <p className="text-white/70 text-sm font-body">Exterior Services</p>
              <p className="text-white/70 text-sm font-body">Project Management</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-display">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-light-primary mt-1 flex-shrink-0" />
                <p className="text-white/70 text-sm font-body">
                  7, Vini Garden 2, Mandapeshwar Rd, Borivali West, Mumbai - 400103
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-light-primary" />
                <p className="text-white/70 text-sm font-body">9223350912, 9223306882</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-light-primary" />
                <p className="text-white/70 text-sm font-body">hiraenterprises26@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm font-body">
            © {new Date().getFullYear()} HIRA ENTERPRISES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}