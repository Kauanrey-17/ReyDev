"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Network, Cpu, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Criação de sistemas e sites modernos com foco em performance, conversão e experiência premium para o usuário.",
  },
  {
    icon: Network,
    title: "Infra & Performance",
    description:
      "Conhecimento em redes, deploy e otimização para garantir estabilidade, velocidade e segurança nas aplicações.",
  },
  {
    icon: Cpu,
    title: "Soluções Técnicas",
    description:
      "Automação, integrações e soluções sob medida para reduzir trabalho manual e aumentar produtividade.",
  },
  {
    icon: Lightbulb,
    title: "Mentalidade de Resultado",
    description:
      "Cada projeto é pensado para gerar impacto real, atrair clientes e entregar valor de verdade.",
  },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.25 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" ref={ref} className="relative py-28 px-6 overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-6xl">
        
        {/* Header */}
        <div
          className={`mb-20 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-sm text-cyan-400 tracking-widest uppercase">
            Sobre mim
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            Construindo soluções que geram{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 glow-text">
              resultado real
            </span>
          </h2>
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          
          {/* LEFT */}
          <div
            className={`flex flex-col gap-6 transition-all duration-1000 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-muted-foreground leading-relaxed">
              Sou <span className="text-foreground font-medium">Kauan Rey</span>,
              desenvolvedor focado em criar soluções digitais modernas, rápidas
              e que realmente geram resultado. Meu objetivo não é apenas fazer
              sites — é construir ferramentas que atraem clientes, automatizam
              processos e elevam o nível do negócio.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Trabalho com desenvolvimento full-stack, automações, integrações e
              criação de experiências digitais premium. Cada projeto é pensado
              estrategicamente para performance, conversão e crescimento.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Hoje atuo como freelancer desenvolvendo soluções sob medida,
              sistemas web, automações e sites modernos para empresas e
              profissionais que querem crescer no digital.
            </p>

            {/* Terminal Premium */}
            <div className="mt-4 rounded-xl border border-border bg-card/40 backdrop-blur-md p-4 font-mono text-sm shadow-[0_0_20px_rgba(34,211,238,0.05)]">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-red-400/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <div className="h-3 w-3 rounded-full bg-green-400/70" />
                <span className="ml-2 text-xs text-muted-foreground">
                  reydev-terminal
                </span>
              </div>

              <div className="space-y-1 text-muted-foreground">
                <div>
                  <span className="text-cyan-400">kauan@reydev</span>:~$ cat
                  perfil.txt
                </div>
                <div>{">"} Desenvolvedor Full-Stack</div>
                <div>{">"} Freelancer — Projetos sob medida</div>
                <div>{">"} Foco: Performance, Automação e Resultado</div>
                <div>{">"} São Paulo — Brasil</div>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-xl border border-border bg-card/40 backdrop-blur-md p-6 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="mb-4 inline-flex rounded-lg bg-cyan-400/10 p-3 group-hover:bg-cyan-400/20 transition">
                  <item.icon size={20} className="text-cyan-400" />
                </div>

                <h3 className="mb-2 font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}