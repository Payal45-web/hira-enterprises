"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, X } from "lucide-react"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 glass border-0 rounded-2xl p-4 shadow-glass">
          <div className="space-y-3">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start border-light-primary/30 text-dark-highlight hover:bg-light-primary/10 transition-smooth rounded-xl"
              onClick={() => window.open("tel:9223350912")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: 9223350912
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start border-light-primary/30 text-dark-highlight hover:bg-light-primary/10 transition-smooth rounded-xl"
              onClick={() => window.open("mailto:hiraenterprises26@gmail.com")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      )}

      <Button
        size="lg"
        className="rounded-full w-14 h-14 gradient-primary shadow-soft hover:shadow-soft-lg transition-smooth"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  )
}
