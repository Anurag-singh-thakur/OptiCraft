import { motion } from "framer-motion"

const steps = [
  {
    title: "Consultation",
    description: "We discuss your goals, challenges, and expectations.",
    icon: "💬",
  },
  {
    title: "Audit & Plan",
    description: "We audit your website/app and create a tailored plan.",
    icon: "🔍",
  },
  {
    title: "Implementation",
    description: "Our team implements fixes, features, and optimizations.",
    icon: "🛠️",
  },
  {
    title: "Launch & Support",
    description: "We ensure everything is live and provide ongoing support.",
    icon: "🚀",
  },
]

export default function Process() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Process
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

