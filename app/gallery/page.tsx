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
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
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
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg shadow-blue-500/50 border-0"
                    : "bg-slate-800 border-2 border-blue-500/50 text-white hover:bg-slate-700 hover:border-blue-400 font-medium"
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
            <div className="flex flex-wrap justify-center gap-3 mb-6 p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50">
              <Button
                size="sm"
                variant={selectedSubCategory === null ? "default" : "outline"}
                onClick={() => {
                  setSelectedSubCategory(null)
                  setShowRehabilitationDropdown(false)
                }}
                className={
                  selectedSubCategory === null
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-md"
                    : "bg-slate-700 border-2 border-blue-500/40 text-slate-200 hover:bg-slate-600 hover:border-blue-400/60 font-medium"
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
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-md"
                      : "bg-slate-700 border-2 border-blue-500/40 text-slate-200 hover:bg-slate-600 hover:border-blue-400/60 font-medium"
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
                className="bg-slate-700 border-2 border-blue-500/40 text-slate-200 hover:bg-slate-600 hover:border-blue-400/60 font-medium"
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
            <div className="flex flex-wrap justify-center gap-3 mb-6 p-6 bg-slate-700/50 rounded-xl backdrop-blur-sm border border-slate-600/50">
              {rehabilitationSubCategories.map((subCat) => (
                <Button
                  key={subCat}
                  size="sm"
                  variant={selectedSubCategory === subCat ? "default" : "outline"}
                  onClick={() => setSelectedSubCategory(subCat)}
                  className={
                    selectedSubCategory === subCat
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-md"
                      : "bg-slate-600 border-2 border-blue-500/40 text-slate-200 hover:bg-slate-500 hover:border-blue-400/60 font-medium"
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
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedItem(item)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Video Play Button */}
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-blue-600/90 text-white">
                      {item.category}
                    </Badge>

                    {/* Type Badge */}
                    <Badge className="absolute top-4 right-4 bg-slate-900/80 text-white">
                      {item.type === "video" ? "Video" : "Image"}
                    </Badge>
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
                className="bg-blue-600 hover:bg-blue-700 text-white"
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
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="outline"
              size="sm"
              className="absolute -top-2 right-0 z-10 bg-slate-900/80 border-slate-600 text-white hover:bg-slate-800"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-4 h-4" />
            </Button>

            <Card className="bg-slate-800 border-slate-700 mt-8">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={selectedItem.src || "/placeholder.svg"}
                    alt={selectedItem.title}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-t-lg"
                  />

                  {selectedItem.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-t-lg">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <Badge className="bg-blue-600/90 text-white">{selectedItem.category}</Badge>
                    {selectedItem.subCategory && (
                      <Badge className="bg-blue-500/80 text-white">{selectedItem.subCategory}</Badge>
                    )}
                    <Badge variant="outline" className="border-slate-600 text-slate-300">
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
    </main>
  )
}