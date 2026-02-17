"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    title: "Linguagens & Core",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Frameworks & APIs",
    skills: [
      { name: "Next.js", level: 85 },
      { name: "React", level: 80 },
      { name: "Resend API", level: 90 },
      { name: "Node.js", level: 70 },
      { name: "TailwindCSS", level: 95 },
    ],
  },
  {
    title: "Integrações & IA",
    skills: [
      { name: "Engenharia de Prompt (IA)", level: 85 },
      { name: "Conexão com Calendário", level: 80 },
      { name: "Vercel SDK", level: 75 },
      { name: "Git", level: 75 },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "Supabase / PostgreSQL", level: 70 },
      { name: "SQL Server", level: 70 },
    ],
  },
  {
    title: "Infraestrutura & Redes",
    skills: [
      { name: "Linux", level: 65 },
      { name: "Hardware", level: 70 },
      { name: "Cisco Packet Tracer", level: 65 },
    ],
  },
  {
    title: "Design & Office",
    skills: [
      { name: "Canva", level: 85 },
      { name: "Pacote Office", level: 90 },
      { name: "Microsoft Visio", level: 65 },
    ],
  },
]

const techTags = [
  "TypeScript",
  "Next.js",
  "Resend",
  "IA",
  "Integração Calendário",
  "React",
  "TailwindCSS",
  "Node.js",
  "Python",
  "MySQL",
  "Vercel",
  "Supabase",
  "Linux",
]

export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="relative py-28 px-6">
      
      {/* Background grid tech */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(hsl(185 80% 50%) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        
        {/* Header premium */}
        <div className="mb-20 text-center">
          <p className="font-mono text-sm text-primary tracking-widest uppercase">
            Stack Profissional
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Tecnologias que geram{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 glow-text">
              resultado real
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-xl border border-border bg-card/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
            >
              <h3 className="mb-5 font-mono text-xs tracking-widest uppercase text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>{skill.name}</span>
                      <span className="font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Barra premium animada */}
                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-[1800ms] ease-out"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* TAG CLOUD PREMIUM */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-mono text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_12px_rgba(34,211,238,0.4)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}