"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    title: "E-commerce Optimization",
    description: "Improved load times and checkout process for a major online retailer.",
    image: "/ecommerce.jpg",
    category: "Performance",
  },
  {
    title: "Social Media App",
    description: "Developed new features and fixed critical bugs for a growing social platform.",
    image: "/social-media.jpg",
    category: "Feature Development",
  },
  {
    title: "Financial Dashboard",
    description: "Enhanced security and data visualization for a fintech startup.",
    image: "/finance.jpg",
    category: "Security",
  },
  {
    title: "Travel Booking Platform",
    description: "Redesigned UI/UX to improve user engagement and conversion rates.",
    image: "/travel.jpg",
    category: "UI/UX",
  },
]

export default function Portfolio() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Portfolio
        </motion.h2>
        <div className="flex justify-center mb-8">
          {["All", "Performance", "Feature Development", "Security", "UI/UX"].map((category) => (
            <motion.button
              key={category}
              className={`mx-2 px-4 py-2 rounded-full ${filter === category ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

