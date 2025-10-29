"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Play, X, ChevronDown, ChevronUp } from "lucide-react"

// Generate gallery items based on your file structure
const generateGalleryItems = () => {
  const items = []
  let id = 1

  // Interior - 40 images (most items - listed first)
  for (let i = 1; i <= 40; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Interior Design ${i}`,
      category: "Interior",
      subCategory: null,
      src: `/interior/i${i}.jpg`,
    })
  }

  // Work Done - 34 images
  for (let i = 1; i <= 34; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Completed Project ${i}`,
      category: "Work Done",
      subCategory: null,
      src: `/Work done/w${i}.jpg`,
    })
  }

  // Exterior - Breaking - 19 images
  for (let i = 1; i <= 19; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Breaking Work ${i}`,
      category: "Exterior",
      subCategory: "Breaking",
      src: `/Exterior/breaking/b${i}.jpg`,
    })
  }

  // Exterior - Terrace Water Proofing - 19 images
  for (let i = 1; i <= 19; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Terrace Waterproofing ${i}`,
      category: "Exterior",
      subCategory: "Terrace Water Proofing",
      src: `/Exterior/terrace water proffing/t${i}.jpg`,
    })
  }

  // Exterior - Rehabilitation - Micro Concrete - 14 images
  for (let i = 1; i <= 14; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Micro Concrete ${i}`,
      category: "Exterior",
      subCategory: "Rehabilitation and Retro Fitting - Micro Concrete",
      src: `/Exterior/rehabitation/micro concrete/mc${i}.jpg`,
    })
  }

  // Safety - 13 images
  for (let i = 1; i <= 13; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Safety Measures ${i}`,
      category: "Safety",
      subCategory: null,
      src: `/safety/s${i}.jpg`,
    })
  }

  // Exterior - Scaffolding - 12 images
  for (let i = 1; i <= 12; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Scaffolding ${i}`,
      category: "Exterior",
      subCategory: "Scaffolding",
      src: `/Exterior/scafolding/s${i}.jpg`,
    })
  }

  // Exterior - Rehabilitation - Reinforcement Rebaring - 11 images
  for (let i = 1; i <= 11; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Reinforcement Rebaring ${i}`,
      category: "Exterior",
      subCategory: "Rehabilitation and Retro Fitting - Reinforcement Rebaring",
      src: `/Exterior/rehabitation/reinforcement rebaring/r${i}.jpg`,
    })
  }

  // Office - 10 images
  for (let i = 1; i <= 10; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Office Space ${i}`,
      category: "Office",
      subCategory: null,
      src: `/office/o${i}.jpg`,
    })
  }

  // Exterior - Plastering - 8 images
  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Plastering Work ${i}`,
      category: "Exterior",
      subCategory: "Plastering",
      src: `/Exterior/plastering/p${i}.jpg`,
    })
  }

  // Exterior - Rehabilitation - Polymer Application - 8 images
  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Polymer Application ${i}`,
      category: "Exterior",
      subCategory: "Rehabilitation and Retro Fitting - Polymer Application",
      src: `/Exterior/rehabitation/polymer application/pa${i}.jpg`,
    })
  }

  // Exterior - Rehabilitation - Rust Passivator - 7 images
  for (let i = 1; i <= 7; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Rust Passivator ${i}`,
      category: "Exterior",
      subCategory: "Rehabilitation and Retro Fitting - Rust Passivator",
      src: `/Exterior/rehabitation/rust passivator/rp${i}.jpg`,
    })
  }

  // Exterior - Plumbing - 5 images
  for (let i = 1; i <= 5; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Plumbing Work ${i}`,
      category: "Exterior",
      subCategory: "Plumbing",
      src: `/Exterior/plumbing/pl${i}.JPG`,
    })
  }

  // Exterior - Rehabilitation - Bonding - 5 images
  for (let i = 1; i <= 5; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Bonding Work ${i}`,
      category: "Exterior",
      subCategory: "Rehabilitation and Retro Fitting - Bonding",
      src: `/Exterior/rehabitation/bonding/b${i}.jpg`,
    })
  }

  // Exterior - Rehabilitation - Hipoxy Coating - 3 images
  for (let i = 1; i <= 3; i++) {
    items.push({
      id: id++,
      type: "image",
      title: `Hipoxy Coating ${i}`,
      category: "Exterior",
      subCategory: "Rehabilitation and Retro Fitting - Hipoxy Coating",
      src: `/Exterior/rehabitation/hipoxy coating/hc${i}.jpg`,
    })
  }

  // Exterior - Flooring/Floorpainting - 1 image
  items.push({
    id: id++,
    type: "image",
    title: "Flooring and Floor Painting",
    category: "Exterior",
    subCategory: "Flooring/Floorpainting",
    src: `/Exterior/flooring/f1.jpg`,
  })

  // Exterior - Jacketing - 1 image
  items.push({
    id: id++,
    type: "image",
    title: "Column Jacketing",
    category: "Exterior",
    subCategory: "Jacketing",
    src: `/Exterior/jacketing/j1.jpg`,
  })

  // Exterior - Rehabilitation - Injection Grouting - 1 image
  items.push({
    id: id++,
    type: "image",
    title: "Injection Grouting",
    category: "Exterior",
    subCategory: "Rehabilitation and Retro Fitting - Injection Grouting",
    src: `/Exterior/rehabitation/injection grouting/i1.jpg`,
  })

  // Exterior - Rehabilitation - Shuttering and Centring - 1 image
  items.push({
    id: id++,
    type: "image",
    title: "Shuttering and Centring",
    category: "Exterior",
    subCategory: "Rehabilitation and Retro Fitting - Shuttering and Centring",
    src: `/Exterior/rehabitation/shuttering and centering/s1.jpg`,
  })

  return items
}

const galleryItems = generateGalleryItems()

// Categories in descending order by image count
const categories = ["All", "Interior", "Work Done", "Exterior", "Safety", "Office"]

const exteriorSubCategories = [
  "Breaking",
  "Terrace Water Proofing",
  "Scaffolding",
  "Plastering",
  "Plumbing",
  "Flooring/Floorpainting",
  "Jacketing",
]

const rehabilitationSubCategories = [
  "Rehabilitation and Retro Fitting - Micro Concrete",
  "Rehabilitation and Retro Fitting - Reinforcement Rebaring",
  "Rehabilitation and Retro Fitting - Polymer Application",
  "Rehabilitation and Retro Fitting - Rust Passivator",
  "Rehabilitation and Retro Fitting - Bonding",
  "Rehabilitation and Retro Fitting - Hipoxy Coating",
  "Rehabilitation and Retro Fitting - Injection Grouting",
  "Rehabilitation and Retro Fitting - Shuttering and Centring",
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [showSubCategories, setShowSubCategories] = useState(false)
  const [showRehabilitationDropdown, setShowRehabilitationDropdown] = useState(false)

  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === "All") return true
    if (selectedCategory !== item.category) return false
    if (selectedSubCategory && item.subCategory !== selectedSubCategory) return false
    return true
  })

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedSubCategory(null)
    setShowSubCategories(category === "Exterior")
    setShowRehabilitationDropdown(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-float-delayed"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Explore our workspace, projects, and achievements through our comprehensive media gallery
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => handleCategoryChange(category)}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 border-0 transform scale-105 transition-all duration-300"
                    : "bg-slate-800/80 border-2 border-blue-400/30 text-white hover:bg-slate-700/80 hover:border-blue-400/50 font-medium backdrop-blur-sm transition-all duration-300"
                }
              >
                {category}
                {category === "Exterior" && (
                  <span className="ml-2">
                    {showSubCategories ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                )}
              </Button>
            ))}
          </div>

          {/* Exterior Sub-Categories */}
          {showSubCategories && selectedCategory === "Exterior" && (
            <div className="flex flex-wrap justify-center gap-3 mb-6 p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl backdrop-blur-sm border border-blue-400/20">
              <Button
                size="sm"
                variant={selectedSubCategory === null ? "default" : "outline"}
                onClick={() => {
                  setSelectedSubCategory(null)
                  setShowRehabilitationDropdown(false)
                }}
                className={
                  selectedSubCategory === null
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-md"
                    : "bg-slate-700/80 border-2 border-blue-400/30 text-slate-200 hover:bg-slate-600/80 hover:border-blue-400/50 font-medium"
                }
              >
                All Exterior
              </Button>
              {exteriorSubCategories.map((subCat) => (
                <Button
                  key={subCat}
                  size="sm"
                  variant={selectedSubCategory === subCat ? "default" : "outline"}
                  onClick={() => {
                    setSelectedSubCategory(subCat)
                    setShowRehabilitationDropdown(false)
                  }}
                  className={
                    selectedSubCategory === subCat
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-md"
                      : "bg-slate-700/80 border-2 border-blue-400/30 text-slate-200 hover:bg-slate-600/80 hover:border-blue-400/50 font-medium"
                  }
                >
                  {subCat}
                </Button>
              ))}
              
              {/* Rehabilitation Dropdown Button */}
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowRehabilitationDropdown(!showRehabilitationDropdown)}
                className="bg-slate-700/80 border-2 border-blue-400/30 text-slate-200 hover:bg-slate-600/80 hover:border-blue-400/50 font-medium"
              >
                Rehabilitation and Retro Fitting
                <span className="ml-2">
                  {showRehabilitationDropdown ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </Button>
            </div>
          )}

          {/* Rehabilitation Sub-Categories Dropdown */}
          {showRehabilitationDropdown && showSubCategories && selectedCategory === "Exterior" && (
            <div className="flex flex-wrap justify-center gap-3 mb-6 p-6 bg-gradient-to-br from-slate-700/80 to-slate-800/80 rounded-2xl backdrop-blur-sm border border-blue-400/20">
              {rehabilitationSubCategories.map((subCat) => (
                <Button
                  key={subCat}
                  size="sm"
                  variant={selectedSubCategory === subCat ? "default" : "outline"}
                  onClick={() => setSelectedSubCategory(subCat)}
                  className={
                    selectedSubCategory === subCat
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-md"
                      : "bg-slate-600/80 border-2 border-blue-400/30 text-slate-200 hover:bg-slate-500/80 hover:border-blue-400/50 font-medium"
                  }
                >
                  {subCat.replace("Rehabilitation and Retro Fitting - ", "")}
                </Button>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="text-center text-blue-400 font-semibold mb-4 text-lg">
            Showing {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 cursor-pointer overflow-hidden hover:scale-105"
                onClick={() => setSelectedItem(item)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white border-0 shadow-lg">
                      {item.category}
                    </Badge>

                    {/* Type Badge */}
                    <Badge className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm text-white border border-blue-400/30">
                      {item.type === "video" ? "Video" : "Image"}
                    </Badge>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg mb-4">No items found in this category</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedSubCategory(null)
                  setShowSubCategories(false)
                  setShowRehabilitationDropdown(false)
                }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg"
              >
                View All Items
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="outline"
              size="sm"
              className="absolute -top-2 right-0 z-10 bg-slate-900/80 border-blue-400/50 text-white hover:bg-slate-800 hover:border-blue-400 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-4 h-4" />
            </Button>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-blue-400/30 mt-8 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={selectedItem.src || "/placeholder.svg"}
                    alt={selectedItem.title}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />

                  {selectedItem.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Badge className="bg-gradient-to-r from-blue-400 to-blue-500 text-white border-0">{selectedItem.category}</Badge>
                    {selectedItem.subCategory && (
                      <Badge className="bg-blue-500/80 text-white border-0">{selectedItem.subCategory}</Badge>
                    )}
                    <Badge variant="outline" className="border-blue-400/30 text-slate-300">
                      {selectedItem.type === "video" ? "Video" : "Image"}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedItem.title}</h2>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 1s;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
      `}</style>
    </main>
  )
}