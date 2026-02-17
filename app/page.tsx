"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Particles } from "@/components/Particles"
import { Process } from "@/components/Process" // ✅ IMPORT ADICIONADO

export default function Page() {
  return (
    <>
      {/* Partículas tech fundo */}
      <Particles />

      {/* Navbar */}
      <Navigation />

      <main className="relative z-10">
        {/* HERO */}
        <Hero />

        <Divider />

        {/* SOBRE */}
        <About />

        <Divider />

        {/* SKILLS */}
        <Skills />

        <Divider />

        {/* EXPERIÊNCIA */}
        <Experience />

        <Divider />

        {/* PROJETOS */}
        <Projects />

        <Divider />

        {/* PROCESS (Como eu trabalho) */}
        <Process />   {/* ✅ CORRIGIDO */}

        <Divider />

        {/* EDUCAÇÃO */}
        <Education />

        <Divider />

        {/* CONTATO */}
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  )
}

/* ---------- Divider Premium ---------- */
function Divider() {
  return (
    <div className="mx-auto max-w-7xl py-6">
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
    </div>
  )
}
