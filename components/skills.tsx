"use client"
 
import { useEffect, useRef, useState } from "react"
 
const skillCategories = [
  {
    title: "Linguagens & Core",
    skills: [
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "Python", level: 85 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    title: "Frameworks & Frontend",
    skills: [
      { name: "Next.js", level: 88 },
      { name: "React", level: 85 },
      { name: "TailwindCSS", level: 95 },
      { name: "Framer Motion", level: 80 },
      { name: "shadcn/ui", level: 88 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 72 },
      { name: "Resend API", level: 90 },
      { name: "Prisma ORM", level: 75 },
      { name: "REST APIs", level: 82 },
      { name: "Vercel SDK", level: 80 },
    ],
  },
  {
    title: "Banco de Dados & Cloud",
    skills: [
      { name: "Supabase / PostgreSQL", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "SQL Server", level: 72 },
      { name: "Vercel (Deploy)", level: 90 },
    ],
  },
  {
    title: "IA & Automações",
    skills: [
      { name: "Claude AI (Anthropic)", level: 88 },
      { name: "Engenharia de Prompt", level: 90 },
      { name: "Automações com IA", level: 82 },
      { name: "Integração LLMs", level: 78 },
    ],
  },
  {
    title: "Marketing Digital & Growth",
    skills: [
      { name: "Google Ads", level: 65 },
      { name: "Google Business", level: 70 },
      { name: "SEO On-Page", level: 75 },
      { name: "Domínio & DNS", level: 80 },
    ],
  },
  {
    title: "Infraestrutura & Redes",
    skills: [
      { name: "Linux", level: 65 },
      { name: "Hardware", level: 70 },
      { name: "Cisco Packet Tracer", level: 65 },
      { name: "Cabeamento Estruturado", level: 72 },
    ],
  },
  {
    title: "Design & Produtividade",
    skills: [
      { name: "Canva / UI Design", level: 85 },
      { name: "Pacote Office", level: 90 },
      { name: "Git / GitHub", level: 78 },
      { name: "Microsoft Visio", level: 65 },
    ],
  },
]
 
const techTags = [
  "TypeScript",
  "Next.js",
  "React",
  "Prisma",
  "Supabase",
  "TailwindCSS",
  "Node.js",
  "Python",
  "Claude AI",
  "Prompt Engineering",
  "Vercel",
  "PostgreSQL",
  "Google Ads",
  "SEO",
  "Git",
  "Linux",
  "Resend",
  "shadcn/ui",
]
 
export function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
 
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
 
  return (
    <section id="skills" ref={ref} className="relative py-28 px-6">
 
      {/* Background grid */}
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
 
        {/* Header */}
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Full-stack, IA, infraestrutura e marketing digital — uma stack completa para construir e escalar produtos digitais.
          </p>
        </div>
 
        {/* GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-xl border border-border bg-card/40 backdrop-blur-sm p-5 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
            >
              <h3 className="mb-4 font-mono text-[11px] tracking-widest uppercase text-cyan-400">
                {category.title}
              </h3>
 
              <div className="flex flex-col gap-3.5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span className="text-foreground/90">{skill.name}</span>
                      <span className="font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
 
                    <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-[2000ms] ease-out"
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
 
        {/* TAG CLOUD */}
        <div className="mt-14 flex flex-wrap justify-center gap-2.5">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-mono text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
} 