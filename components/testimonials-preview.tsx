"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Tech Solutions Pvt Ltd",
    text: "HIRA ENTERPRISES delivered exceptional results for our office renovation. Their attention to detail and professional approach exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Mumbai Developers",
    text: "Outstanding civil engineering services. The team's expertise and commitment to quality made our project a huge success.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Corporate Interiors",
    text: "Professional, reliable, and innovative. HIRA ENTERPRISES transformed our workspace into a modern, functional environment.",
    rating: 5,
  },
]

export default function TestimonialsPreview() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark-primary">Client Testimonials</h2>
          <p className="text-xl text-dark-tertiary max-w-3xl mx-auto leading-relaxed font-body">
            Hear what our satisfied clients have to say about our services
          </p>
        </div>

        <Card className="glass border-0 shadow-soft">
          <CardContent className="p-12 text-center">
            <Quote className="w-12 h-12 text-light-primary mx-auto mb-6" />

            <p className="text-xl text-dark-secondary mb-8 leading-relaxed italic font-body">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <h4 className="text-lg font-bold text-dark-primary mb-1">{testimonials[currentIndex].name}</h4>
            <p className="text-dark-highlight font-medium">{testimonials[currentIndex].company}</p>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-smooth ${
                index === currentIndex ? "bg-light-primary" : "bg-light-primary/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
