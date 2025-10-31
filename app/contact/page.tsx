"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Copy } from "lucide-react"
import FloatingContact from "@/components/floating-contact"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [copied, setCopied] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`New Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )

    // Opens the user's default mail app (Gmail, Outlook, etc.)
    window.location.href = `mailto:hiraenterprises26@gmail.com?subject=${subject}&body=${body}`
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch with our team for a consultation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    Office Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    7, Vini Garden 2,
                    <br />
                    Mandapeshwar Road,
                    <br />
                    Borivali West,
                    <br />
                    Mumbai - 400103
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Phone className="w-6 h-6 text-blue-400" />
                    Phone Numbers
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative group">
                    <Input
                      readOnly
                      value="9223350912"
                      className="bg-slate-700/50 border-slate-600 text-white pr-10 cursor-pointer hover:border-blue-500/50 transition-colors"
                      onClick={() => window.open("tel:9223350912")}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                        onClick={() => copyToClipboard("9223350912", "phone1")}
                        title="Copy number"
                      >
                        <Copy className={`h-3 w-3 ${copied === 'phone1' ? 'text-green-400' : ''}`} />
                      </Button>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Hira Pehare</p>
                  </div>
                  <div className="relative group">
                    <Input
                      readOnly
                      value="9223306882"
                      className="bg-slate-700/50 border-slate-600 text-white pr-10 cursor-pointer hover:border-blue-500/50 transition-colors"
                      onClick={() => window.open("tel:9223306882")}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                        onClick={() => copyToClipboard("9223306882", "phone2")}
                        title="Copy number"
                      >
                        <Copy className={`h-3 w-3 ${copied === 'phone2' ? 'text-green-400' : ''}`} />
                      </Button>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Manoj Pehare</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Mail className="w-6 h-6 text-blue-400" />
                    Email Addresses
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative group">
                    <Input
                      readOnly
                      value="hiraenterprises26@gmail.com"
                      className="bg-slate-700/50 border-slate-600 text-white pr-10 cursor-pointer hover:border-blue-500/50 transition-colors"
                      onClick={() => window.open("mailto:hiraenterprises26@gmail.com")}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                        onClick={() => copyToClipboard("hiraenterprises26@gmail.com", "email1")}
                        title="Copy email"
                      >
                        <Copy className={`h-3 w-3 ${copied === 'email1' ? 'text-green-400' : ''}`} />
                      </Button>
                    </div>
                  </div>
                  <div className="relative group">
                    <Input
                      readOnly
                      value="hiracons@gmail.com"
                      className="bg-slate-700/50 border-slate-600 text-white pr-10 cursor-pointer hover:border-blue-500/50 transition-colors"
                      onClick={() => window.open("mailto:hiracons@gmail.com")}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10"
                        onClick={() => copyToClipboard("hiracons@gmail.com", "email2")}
                        title="Copy email"
                      >
                        <Copy className={`h-3 w-3 ${copied === 'email2' ? 'text-green-400' : ''}`} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-400" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Full Name *"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Email Address *"
                  />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Phone Number"
                  />
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Tell us about your project requirements..."
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800/30 to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Find Us
          </h2>
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-96 bg-slate-700 flex items-center justify-center">
                <div className="text-center text-slate-300">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">7, Vini Garden 2, Mandapeshwar Rd, Borivali West, Mumbai - 400103</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}