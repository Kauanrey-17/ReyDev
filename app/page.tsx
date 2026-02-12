import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="mx-auto max-w-7xl">
          <div className="h-px bg-border" />
        </div>
        <About />
        <div className="mx-auto max-w-7xl">
          <div className="h-px bg-border" />
        </div>
        <Skills />
        <div className="mx-auto max-w-7xl">
          <div className="h-px bg-border" />
        </div>
        <Experience />
        <div className="mx-auto max-w-7xl">
          <div className="h-px bg-border" />
        </div>
        <Education />
        <div className="mx-auto max-w-7xl">
          <div className="h-px bg-border" />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
