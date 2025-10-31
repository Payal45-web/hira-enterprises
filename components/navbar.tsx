"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Desktop */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden bg-white">
              <Image
                src="/logo.jpeg"
                alt="HIRA ENTERPRISES"
                width={160}
                height={160}
                className="w-full h-full object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white font-display leading-tight">HIRA ENTERPRISES</span>
              <span className="text-xs text-blue-400 font-medium">ISO 9001:2015 Certified</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                  pathname === item.href ? "text-blue-400" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg shadow-blue-500/25">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden border-white/20 text-white bg-slate-800/50 hover:bg-slate-700/50">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-white/10 w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-4 pb-4 border-b border-white/10">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                    <Image
                      src="/logo.jpeg"
                      alt="HIRA ENTERPRISES"
                      width={140}
                      height={140}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white font-display leading-tight">HIRA ENTERPRISES</span>
                    <span className="text-xs text-blue-400 font-medium">ISO 9001:2015 Certified</span>
                  </div>
                </div>

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-all duration-300 hover:text-blue-400 py-2 ${
                      pathname === item.href ? "text-blue-400 border-l-2 border-blue-400 pl-4" : "text-white/80 pl-6"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}