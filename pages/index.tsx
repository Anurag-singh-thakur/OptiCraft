import Head from "next/head"
import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import Process from "@/components/Process"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
export default function Home() {
  return (
    <>
      <Head>
        <title>OptiCraft - Crafting High-Performance Websites & Apps</title>
        <meta
          name="description"
          content="We specialize in bug fixes, feature improvements, and optimization for websites and apps."
        />
        <link  rel="icon" href="/logo.ico" />
      </Head>
      <Layout>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </Layout>
    </>
  )
}

