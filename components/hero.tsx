"use client"

import { useEffect, useState } from "react"
import { ChevronDown, MapPin } from "lucide-react"

const roles = [
  "Desenvolvedor Full-Stack",
  "Estudante de Redes",
  "Entusiasta de IA",
  "Tech Innovator",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayedText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayedText(role.slice(0, displayedText.length + 1))
      }, 60)
    } else if (!isDeleting && displayedText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1))
      }, 30)
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRole])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(185 80% 50%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(185 80% 50%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating neon orbs */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Crown / Rey symbol */}
        <div className="mb-8 flex justify-center">
          <div className="relative inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-primary glow-dot animate-pulse-glow" />
            <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              Disponivel para oportunidades
            </span>
          </div>
        </div>

        {/* Name */}
        <h1 className="mb-2 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          <span className="text-foreground">Kauan </span>
          <span className="text-primary glow-text">Rey</span>
        </h1>

        {/* Typing effect role */}
        <div className="mb-6 flex items-center justify-center gap-1 font-mono text-lg text-muted-foreground md:text-2xl">
          <span className="text-primary">{">"}</span>
          <span>{displayedText}</span>
          <span className="ml-0.5 inline-block w-0.5 h-6 bg-primary animate-blink" />
        </div>

        {/* Location */}
        <div className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin size={14} className="text-primary" />
          <span>{"Sao Paulo, SP - Brasil"}</span>
        </div>

        {/* Bio */}
        <p className="mx-auto mb-10 max-w-2xl text-balance text-muted-foreground leading-relaxed">
          Estudante de Redes de Sistemas na FATEC e tecnico em Desenvolvimento
          de Sistemas. Apaixonado por criar solucoes inovadoras com Python,
          React, Java e muito mais.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground transition-all hover:scale-105 glow-border"
          >
            Entrar em contato
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 font-mono text-sm text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
          >
            Ver habilidades
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8">
          {[
            { value: "10+", label: "Tecnologias" },
            { value: "5+", label: "Projetos" },
            { value: "3+", label: "Certificacoes" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-primary glow-text md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Rolar para baixo"
      >
        <span className="font-mono text-xs">scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
