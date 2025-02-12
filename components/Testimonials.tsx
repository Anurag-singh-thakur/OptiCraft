"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
  {
    name: "John Doe",
    company: "Tech Innovators Inc.",
    quote:
      "OptiCraft transformed our website performance. Our load times decreased by 50%, and user engagement skyrocketed!",
    image: "/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    company: "E-commerce Solutions",
    quote:
      "The team at OptiCraft is simply outstanding. They fixed critical bugs that had been plaguing our app for months.",
    image: "/jane-smith.jpg",
  },
  {
    name: "Mike Johnson",
    company: "Digital Marketing Agency",
    quote:
      "The UI/UX improvements suggested by OptiCraft resulted in a 30% increase in our client's conversion rates. Highly recommended!",
    image: "/mike-johnson.jpg",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={testimonials[currentTestimonial].image || "/placeholder.svg"}
              alt={testimonials[currentTestimonial].name}
              className="w-24 h-24 rounded-full mb-6"
            />
            <p className="text-xl md:text-2xl mb-6 max-w-2xl">"{testimonials[currentTestimonial].quote}"</p>
            <h3 className="text-lg font-semibold">{testimonials[currentTestimonial].name}</h3>
            <p className="text-blue-200">{testimonials[currentTestimonial].company}</p>
          </motion.div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <motion.button
              onClick={prevTestimonial}
              className="bg-white text-blue-600 rounded-full p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <motion.button
              onClick={nextTestimonial}
              className="bg-white text-blue-600 rounded-full p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

