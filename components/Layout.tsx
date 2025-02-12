import type { ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { motion } from "framer-motion"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </motion.div>
  )
}

