"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import FloatingContact from "@/components/floating-contact"

// Define the Project interface
interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
  cost: string;
  year: string;
  category: string;
  features: string[];
  gradient: string;
  accentColor: string;
}

// Define the type for projectsByCategory
interface ProjectsByCategory {
  [key: string]: Project[];
}

const projectsByCategory: ProjectsByCategory = {
  exterior: [
    {
      id: 17,
      title: "Sane Guruji Aarogya Mandir",
      location: "Santacruz (W)",
      image: "projects/sane guruji.webp",
      description: "Major repair, structural work, waterproofing, painting",
      cost: "",
      year: "2017",
      category: "Exterior",
      features: ["Structural Repair", "Waterproofing", "Exterior Painting"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 18,
      title: "Mahindra Academy School",
      location: "Mahindra Colony, Malad (E)",
      image: "/projects/mahindra school.webp",
      description: "Complete waterproofing, polymer treatment & painting",
      cost: "",
      year: "2023",
      category: "Exterior",
      features: ["Waterproofing", "Polymer Treatment", "Painting"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 19,
      title: "Vidya Vikas Mandal School",
      location: "Azad Nagar, Andheri (E)",
      image: "/projects/vidhya.png",
      description: "Terrace waterproofing, external & internal painting",
      cost: "",
      year: "2024",
      category: "Exterior",
      features: ["Terrace Waterproofing", "Exterior Painting", "Interior Painting"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 20,
      title: "Bank of Baroda Employees CHS",
      location: "Anupama Building, Andheri (E)",
      image: "/projects/bob.jpg",
      description: "Structural repair, terrace waterproofing, painting",
      cost: "",
      year: "2025",
      category: "Exterior",
      features: ["Structural Repair", "Terrace Waterproofing", "Painting"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 21,
      title: "Akruti Co-op HSG",
      location: "New Link Road, Borivali (W)",
      image: "/projects/akruti.jpeg",
      description: "Crack filling, patch plaster, external & internal painting",
      cost: "",
      year: "2011",
      category: "Exterior",
      features: ["Crack Filling", "Patch Plaster", "Painting"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 22,
      title: "Babashaheb Naek Co-op Soc",
      location: "Banjara Hill, Mulund (W)",
      image: "/projects/babasaheb.jpeg",
      description: "Crack filling, paver block flooring, external painting",
      cost: "",
      year: "2009",
      category: "Exterior",
      features: ["Crack Filling", "Paver Flooring", "Exterior Painting"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 23,
      title: "Hiland Ocean CHSL",
      location: "Highland Complex, Charkop, Kandivali (W)",
      image: "/projects/Hiland ocean.jpeg",
      description: "Comprehensive crack filling & painting work",
      cost: "",
      year: "2010",
      category: "Exterior",
      features: ["Crack Filling", "Exterior Painting"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 24,
      title: "Samarth Nagar CHS Ltd",
      location: "Saibaba Nagar, Kandivali (W)",
      image: "/projects/samarth.jpg",
      description: "Water tank waterproofing & terrace repair work",
      cost: "",
      year: "2024",
      category: "Exterior",
      features: ["Water Tank Waterproofing", "Terrace Repair"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    },
    {
      id: 25,
      title: "Mangalmurti Co-operative HSG Ltd",
      location: "Near Dr. Bedekar Vidhyamandir, Thane",
      image: "/projects/mangalmurti.jpeg",
      description: "Full structural repairing, crack filling, full plaster, full plumbing, external & internal painting, PCC koba",
      cost: "",
      year: "2014",
      category: "Exterior",
      features: ["Structural Repair", "Crack Filling", "Full Plaster", "Plumbing", "Painting", "PCC Koba"],
      gradient: "from-blue-600 to-blue-800",
      accentColor: "blue"
    }
  ],
  interior: [
    {
      id: 9,
      title: "Hotel Vala-Janu Pvt Ltd",
      location: "I.C. Colony, Borivali (W)",
      image: "/projects/hotel janu.webp",
      description: "Full interior fit-out 2000 sqft with modern amenities",
      cost: "",
      year: "2015",
      category: "Interior",
      features: ["Interior Fit-out", "Modern Amenities", "Space Planning"],
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue"
    },
    {
      id: 10,
      title: "Hotel Vala-Janu Phase 2",
      location: "I.C. Colony, Borivali (W)",
      image: "/projects/janu2.jpg",
      description: "Repairing & interior renovation across 3 floors",
      cost: "",
      year: "2016",
      category: "Interior",
      features: ["Renovation", "Interior Design", "Multi-floor"],
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue"
    },
    {
      id: 11,
      title: "S & O Investments",
      location: "Paradigm B-Wing, Chincholi Bunder, Malad (W)",
      image: "../projects/s.webp",
      description: "Complete office interior 750 sqft",
      cost: "",
      year: "2016",
      category: "Interior",
      features: ["Office Design", "Space Planning", "Interior Fit-out"],
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue"
    },
    {
      id: 12,
      title: "Seaswan Shipping Service",
      location: "58 West, S.V. Road, Andheri (W)",
      image: "../interior/i17.JPG",
      description: "Full interior fit-out 1200 sqft",
      cost: "",
      year: "2016",
      category: "Interior",
      features: ["Interior Fit-out", "Space Optimization", "Modern Design"],
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue"
    },
    {
      id: 13,
      title: "Hapag-Lloyd Global Service",
      location: "Dosti Pinnacle, Thane (W)",
      image: "../interior/i14.JPG",
      description: "Corporate office interior Unit 402 & 403",
      cost: "",
      year: "2016",
      category: "Interior",
      features: ["Corporate Design", "Office Fit-out", "Space Planning"],
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue"
    },
    {
      id: 14,
      title: "Krishna Hospital",
      location: "Krishna Nagar, Borivali (E)",
      image: "../interior/hospital.png",
      description: "Complete hospital interior 9000 sqft with all finishing",
      cost: "",
      year: "2015",
      category: "Interior",
      features: ["Hospital Design", "Interior Finishing", "Functional Layout"],
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue"
    },
    {
      id: 15,
      title: "CITI BANK Corporate Office",
      location: "Bandra Kurla Complex",
      image: "../interior/c1.webp",
      description: "55,000 sqft corporate office planning & execution",
      cost: "",
      year: "2012",
      category: "Interior",
      features: ["Corporate Office", "Large-scale Planning", "Premium Finishes"],
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue"
    },
    {
      id: 16,
      title: "Trans Ocean Office",
      location: "Powai, Mumbai",
      image: "../interior/c2.webp",
      description: "54,000 sqft office interior with premium finishes",
      cost: "",
      year: "2013",
      category: "Interior",
      features: ["Office Design", "Premium Finishes", "Space Planning"],
      gradient: "from-blue-500 to-blue-700",
      accentColor: "blue"
    }
  ],
  civil: [
    {
      id: 1,
      title: "Chemtrols Industries Limited",
      location: "Amar Hill, Saki Vihar Road, Powai",
      image: "../projects/chemtrols.jpeg",
      description: "Full structural repair, crack filling, polymer treatment, waterproofing",
      cost: "",
      year: "2010-2014",
      category: "Civil",
      features: ["Structural Repair", "Waterproofing", "Polymer Treatment"],
      gradient: "from-blue-700 to-blue-900",
      accentColor: "blue"
    },
    {
      id: 2,
      title: "Kavita Darshan Co-op HSG",
      location: "Natakwala Lane, Borivali (W)",
      image: "../projects/kavita.jpeg",
      description: "Major repair, restoration, waterproofing & painting",
      cost: "",
      year: "2012",
      category: "Civil",
      features: ["Restoration", "Waterproofing", "Painting"],
      gradient: "from-blue-700 to-blue-900",
      accentColor: "blue"
    },
    {
      id: 3,
      title: "Riviera CHSL",
      location: "Lokhandwala Township, Kandivali (E)",
      image: "../projects/ravira.jpg",
      description: "Major structural repair, polymer treatment, waterproofing",
      cost: "",
      year: "2017",
      category: "Civil",
      features: ["Structural Repair", "Polymer Treatment", "Waterproofing"],
      gradient: "from-blue-700 to-blue-900",
      accentColor: "blue"
    },
    {
      id: 4,
      title: "Ashish Neha CHS Ltd",
      location: "Ashish Complex, Dahisar (E)",
      image: "/projects/ashish.jpg",
      description: "Major repair, structural work, waterproofing",
      cost: "",
      year: "2023-24",
      category: "Civil",
      features: ["Structural Work", "Waterproofing", "Repair"],
      gradient: "from-blue-700 to-blue-900",
      accentColor: "blue"
    },
    {
      id: 5,
      title: "Raj Valley CHS Ltd",
      location: "I.C. Colony, Borivali (W)",
      image: "../projects/raj valley.webp",
      description: "Major repair, structural work, plumbing, waterproofing",
      cost: "",
      year: "2024",
      category: "Civil",
      features: ["Structural Work", "Plumbing", "Waterproofing"],
      gradient: "from-blue-700 to-blue-900",
      accentColor: "blue"
    },
    {
      id: 6,
      title: "Vaibhav CHS Ltd",
      location: "I.C. Colony, Borivali (W)",
      image: "../projects/vaibhav.webp",
      description: "External structural repair, waterproofing",
      cost: "",
      year: "2021-2022",
      category: "Civil",
      features: ["External Repair", "Waterproofing"],
      gradient: "from-blue-700 to-blue-900",
      accentColor: "blue"
    },
    {
      id: 7,
      title: "Kavis Fashions Pvt Ltd",
      location: "Kasimira, Mira Road East",
      image: "../projects/kavis",
      description: "Major repair, structural work, polymer treatment",
      cost: "",
      year: "2023",
      category: "Civil",
      features: ["Structural Work", "Polymer Treatment", "Repair"],
      gradient: "from-blue-700 to-blue-900",
      accentColor: "blue"
    },
    {
      id: 8,
      title: "New Shanti CHSL",
      location: "Poisar Village, Kandivali (W)",
      image: "../projects/shanti.webp",
      description: "Major structural repair, polymer, waterproofing",
      cost: "",
      year: "2018",
      category: "Civil",
      features: ["Structural Repair", "Polymer Treatment", "Waterproofing"],
      gradient: "from-blue-700 to-blue-900",
      accentColor: "blue"
    }
  ]
}

const categories = [
  { name: "All", gradient: "bg-gradient-to-r from-blue-500 to-blue-700", textColor: "text-white", borderColor: "border-transparent" },
  { name: "Exterior", gradient: "bg-gradient-to-r from-blue-600 to-blue-800", textColor: "text-white", borderColor: "border-blue-400" },
  { name: "Interior", gradient: "bg-gradient-to-r from-blue-500 to-blue-700", textColor: "text-white", borderColor: "border-blue-300" },
  { name: "Civil", gradient: "bg-gradient-to-r from-blue-700 to-blue-900", textColor: "text-white", borderColor: "border-blue-500" },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalClosing, setIsModalClosing] = useState(false)

  // Flatten projects for filtering
  const allProjects = Object.values(projectsByCategory).flat()
  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter((project) => project.category === selectedCategory)

  // Handle modal close with animation
  const handleCloseModal = () => {
    setIsModalClosing(true)
    setTimeout(() => {
      setSelectedProject(null)
      setIsModalClosing(false)
    }, 300)
  }

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }

  // Handle escape key
  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === "Escape" && selectedProject) {
      handleCloseModal()
    }
  }

  // Handle view more projects - filter by category and close modal
  const handleViewMoreProjects = (category: string) => {
    setSelectedCategory(category)
    handleCloseModal()
    
    // Scroll to projects section after a short delay
    setTimeout(() => {
      const projectsSection = document.getElementById('projects-grid')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 400)
  }

  // Add event listener for escape key
  useEffect(() => {
    if (selectedProject) {
      document.addEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  // Get gradient classes for badges and buttons
  const getGradientClass = (gradient: string) => {
    return `bg-gradient-to-r ${gradient}`
  }

  const getAccentColorClass = (accentColor: string, type: "text" | "border" = "text") => {
    const colorMap: { [key: string]: string } = {
      blue: type === "text" ? "text-blue-400" : "border-blue-400/30",
    }
    return colorMap[accentColor] || "text-white"
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <FloatingContact />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20" />
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Our Projects
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects across civil engineering, interior design, and exterior development
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className={
                  selectedCategory === category.name
                    ? `${category.gradient} text-white border-2 ${category.borderColor} transform scale-105 transition-all duration-300 shadow-lg`
                    : `border-2 ${category.borderColor} ${category.textColor} hover:${category.gradient} transition-all duration-300 transform hover:scale-105 bg-slate-900/80 backdrop-blur-sm`
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-slate-900/80 border-slate-800 backdrop-blur-sm hover:bg-slate-900 transition-all duration-500 cursor-pointer group transform hover:scale-105"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className={`absolute top-4 left-4 ${getGradientClass(project.gradient)} text-white border-0`}>
                    {project.category}
                  </Badge>
                  <div
                    className={`absolute inset-0 ${getGradientClass(project.gradient)} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold mb-2 text-white group-hover:${getAccentColorClass(project.accentColor)} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-3">{project.location}</p>
                  <p className="text-slate-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-slate-300 font-semibold">{project.cost}</span>
                    <span className="text-slate-300">{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 2).map((feature, featureIndex) => (
                      <Badge
                        key={featureIndex}
                        variant="outline"
                        className={getAccentColorClass(project.accentColor, "border") + " " + getAccentColorClass(project.accentColor)}
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div
                    className={`mt-4 h-1 ${getGradientClass(project.gradient)} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isModalClosing ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleBackdropClick}
        >
          <div 
            className={`bg-slate-900 border-slate-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg transition-transform duration-300 ${
              isModalClosing ? "scale-95" : "scale-100"
            }`}
          >
            <div className="relative">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-black/80 border-slate-700 hover:bg-slate-800 z-10"
                onClick={handleCloseModal}
              >
                <X className="w-4 h-4" />
              </Button>
              <Badge className={`absolute top-4 left-4 ${getGradientClass(selectedProject.gradient)} text-white border-0`}>
                {selectedProject.category}
              </Badge>
              <div className={`absolute inset-0 ${getGradientClass(selectedProject.gradient)} opacity-10`} />
            </div>
            <div className="p-6">
              <h2 className={`text-2xl font-bold mb-4 ${getAccentColorClass(selectedProject.accentColor)}`}>
                {selectedProject.title}
              </h2>
              <p className="text-sm text-slate-300 mb-3">{selectedProject.location}</p>
              <p className="text-slate-300 mb-4 leading-relaxed">{selectedProject.description}</p>
              <div className="flex justify-between items-center text-sm mb-4">
                <span className="text-slate-300 font-semibold">{selectedProject.cost}</span>
                <span className="text-slate-300">{selectedProject.year}</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Project Features:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className={getAccentColorClass(selectedProject.accentColor, "border") + " " + getAccentColorClass(selectedProject.accentColor)}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}