"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, TrendingUp, Filter } from "lucide-react"

const experiences = [
  {
    role: "Jovem aprendiz de Técnico em TI",
    company: "Sabó Industria de Autopeças",
    period: "2026 - Atual",
    category: "Suporte",
    impact: "+42% eficiência",
    description:
      "Responsável por suporte técnico, manutenção de hardware, redes e atendimento a usuários. Redução significativa no tempo de resolução de chamados."
  },
  {
    role: "Infraestrutura & Redes",
    company: "Projeto Próprio",
    period: "2024 - 2025",
    category: "Redes",
    impact: "99.9% uptime",
    description:
      "Implementação e gerenciamento de domestica redes, cabeamento estruturado e monitoramento de infraestrutura."
  },
  {
    role: "Desenvolvedor Frontend",
    company: "Freelancer",
    period: "2026 - Atual",
    category: "Dev",
    impact: "+60% performance",
    description:
      "Criação de interfaces modernas, responsivas e performáticas utilizando React, Next.js e UX avançado."
  }
]

const filters = ["Todos", "Suporte", "Redes", "Dev"]

export function Experience() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filtered =
    activeFilter === "Todos"
      ? experiences
      : experiences.filter((exp) => exp.category === activeFilter)

  return (
    <section
      id="experience"
      className="relative py-24 px-6 max-w-6xl mx-auto"
    >
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experiência Profissional
        </h2>
        <p className="text-zinc-400 mt-3">
          Evolução contínua, impacto real e mentalidade Big Tech
        </p>
      </motion.div>

      {/* FILTERS */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              activeFilter === filter
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                : "border-zinc-700 text-zinc-400 hover:border-cyan-500 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* TIMELINE */}
      <div className="relative border-l border-cyan-500/20 pl-8 space-y-12">
        {filtered.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group relative"
          >
            {/* DOT */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_12px_cyan]" />

            {/* CARD */}
            <div className="relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl transition transform hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]">

              {/* HEADER */}
              <div className="flex justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>

                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {exp.impact}
                </span>
              </div>

              {/* COMPANY */}
              <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                <Briefcase size={14} />
                {exp.company}
              </div>

              {/* PERIOD */}
              <div className="flex items-center gap-2 text-zinc-500 text-xs mb-4">
                <Calendar size={13} />
                {exp.period}
              </div>

              {/* DESCRIPTION */}
              <p className="text-zinc-300 text-sm leading-relaxed">
                {exp.description}
              </p>

              {/* GLOW HOVER */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}