import Hero from "./components/hero"
import About from "./components/about"
import Gallery from "./components/gallery"
import Portfolio from "./components/portfolio"
import Contact from "./components/contact"
import Footer from "./components/footer"
import { CustomCursor } from "./components/custom-cursor"
import WorkExperience from "./components/work-experience"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Hero />
      <About />
      <WorkExperience/>
      <Gallery />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
