import { motion } from "framer-motion"
import { useState } from "react"

const faqs = [
  {
    question: "How long does it take to fix bugs on my website?",
    answer:
      "The time required to fix bugs varies depending on their complexity. We typically provide an estimate after our initial assessment. Our team works efficiently to resolve issues as quickly as possible, usually within a few days to a couple of weeks for more complex problems.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes, we offer ongoing maintenance packages to ensure your website or app continues to perform optimally. These packages can include regular updates, security checks, and performance optimizations.",
  },
  {
    question: "Can you help with SEO optimization?",
    answer:
      "SEO optimization is a crucial part of our performance improvement services. We can help with on-page SEO, technical SEO, and provide guidance on content strategy to improve your search engine rankings.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We have expertise in a wide range of technologies, including but not limited to React, Angular, Vue.js, Node.js, Python, PHP, and various database systems. We're always adapting to new technologies to provide the best solutions for our clients.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform ${activeIndex === index ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-white rounded-b-lg shadow-md"
              >
                <p className="p-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

