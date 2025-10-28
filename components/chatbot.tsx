"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const qaDatabase = {
  "what services do you offer":
    "We offer comprehensive Civil Engineering services, Interior Design & Fit-out solutions, and Exterior Services including landscaping and facade development.",
  "are you iso certified":
    "Yes, we are ISO 9001:2015 certified, ensuring the highest quality management standards in all our projects.",
  "where are you located": "We are located at 7, Vini Garden 2, Mandapeshwar Road, Borivali West, Mumbai - 400103.",
  "how to contact you":
    "You can reach us at 9223350912 (Hira Pehare), 9223306882 (Manoj Pehare), or email us at hiraenterprises26@gmail.com",
  "what is your experience":
    "We have over 15 years of experience in civil engineering and construction with 50+ completed projects.",
  "do you provide turnkey solutions":
    "Yes, we provide complete turnkey solutions from concept to completion for all interior and exterior requirements.",
  "what areas do you serve":
    "We primarily serve Mumbai and surrounding areas, specializing in both residential and commercial projects.",
  "who are your team members":
    "Our team includes Hira Pehare (Founder & Director), Manoj Pehare (Director), Omkar Pehare (Project Lead), and Mandira Pardeshi (Design Specialist).",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with questions about HIRA ENTERPRISES. How can I assist you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase()

    for (const [key, answer] of Object.entries(qaDatabase)) {
      if (lowerQuestion.includes(key) || key.includes(lowerQuestion)) {
        return answer
      }
    }

    // Check for keywords
    if (lowerQuestion.includes("service")) return qaDatabase["what services do you offer"]
    if (lowerQuestion.includes("iso") || lowerQuestion.includes("certified")) return qaDatabase["are you iso certified"]
    if (lowerQuestion.includes("location") || lowerQuestion.includes("address"))
      return qaDatabase["where are you located"]
    if (lowerQuestion.includes("contact") || lowerQuestion.includes("phone")) return qaDatabase["how to contact you"]
    if (lowerQuestion.includes("experience") || lowerQuestion.includes("years"))
      return qaDatabase["what is your experience"]
    if (lowerQuestion.includes("turnkey")) return qaDatabase["do you provide turnkey solutions"]
    if (lowerQuestion.includes("team") || lowerQuestion.includes("staff"))
      return qaDatabase["who are your team members"]

    return "I'd be happy to help! You can ask me about our services, location, contact information, team members, or ISO certification. For specific project inquiries, please contact us directly."
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    const botResponse: Message = {
      id: messages.length + 2,
      text: findAnswer(inputValue),
      isBot: true,
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage, botResponse])
    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-96 h-96 glass border-light-primary/20 shadow-glass">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between text-dark-primary">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-dark-highlight" />
                HIRA Assistant
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-dark-secondary hover:text-dark-primary"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? "bg-light-background text-dark-primary border border-light-primary/20"
                        : "gradient-primary text-white"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.isBot ? (
                        <Bot className="w-4 h-4 mt-0.5 text-dark-highlight flex-shrink-0" />
                      ) : (
                        <User className="w-4 h-4 mt-0.5 text-white/80 flex-shrink-0" />
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 border-light-primary/30 focus:border-dark-highlight text-dark-primary"
              />
              <Button onClick={handleSendMessage} size="sm" className="gradient-primary text-white px-3">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        size="lg"
        className="rounded-full w-16 h-16 gradient-primary shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  )
}
