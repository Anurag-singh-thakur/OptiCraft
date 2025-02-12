import { motion } from "framer-motion"
export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About OptiCraft
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At OptiCraft, we're on a mission to elevate digital experiences through expert optimization and innovative
              solutions. We believe that every website and app has the potential to perform at its best, and we're here
              to make that happen.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              We envision a web where performance, functionality, and user experience coexist in perfect harmony. Our
              goal is to be at the forefront of this digital revolution, setting new standards for web and app
              optimization.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[
              { title: "Projects Completed", value: "20+" },
              { title: "Happy Clients", value: "15+" },
              { title: "Team Members", value: "3+" },
              { title: "Years of Experience", value: "2+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-xl font-bold text-blue-600 mb-2">{stat.value}</h4>
                <p className="text-gray-600">{stat.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

