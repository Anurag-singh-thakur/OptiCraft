import { motion } from "framer-motion"

const services = [
  {
    title: "Bug Fixing",
    description: "Identify and resolve issues to ensure your website or app runs smoothly.",
    icon: "🐛",
  },
  {
    title: "Performance Optimization",
    description: "Speed up your site or app to deliver the best user experience.",
    icon: "⚡",
  },
  {
    title: "Feature Development",
    description: "Adding innovative, user-centric features to elevate your digital presence.",
    icon: "🚀",
  },
  {
    title: "Security Enhancements",
    description: "Ensure your site or app is secure and protected.",
    icon: "🔒",
  },
  {
    title: "UI/UX Improvements",
    description: "Refining designs for a seamless user experience.",
    icon: "🎨",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <motion.button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

