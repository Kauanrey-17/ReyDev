"use client"
 
import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
 
const experiences = [
  {
    role: "Jovem Aprendiz — Técnico em TI",
    company: "Sabó Indústria de Autopeças",
    period: "2026 — Atual",
    category: "Suporte",
    impact: "+42% eficiência",
    description:
      "Responsável por suporte técnico N1/N2, manutenção de hardware e redes corporativas, atendimento a usuários e gestão de chamados. Redução significativa no tempo médio de resolução.",
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "Freelancer — Projetos Próprios",
    period: "2025 — Atual",
    category: "Dev",
    impact: "4 projetos entregues",
    description:
      "Criação de sites institucionais profissionais, sistemas web, landing pages e ferramentas de automação para clientes. Projetos publicados: Rane Lazer (ranelazer.com.br), Rane Construção e MoneyMind (em desenvolvimento).",
  },
  {
    role: "Especialista em IA & Automações",
    company: "Projetos Próprios",
    period: "2024 — Atual",
    category: "IA",
    impact: "10x produtividade",
    description:
      "Implementação de fluxos com Claude AI (Anthropic), engenharia de prompt avançada, automações de processos e integração de LLMs em produtos digitais. Desenvolvimento de ferramentas internas com Python.",
  },
  {
    role: "Infraestrutura & Redes",
    company: "Projeto Próprio",
    period: "2024 — 2025",
    category: "Redes",
    impact: "99.9% uptime",
    description:
      "Implementação e gerenciamento de redes domésticas e corporativas, cabeamento estruturado, monitoramento de infraestrutura e configuração de servidores Linux.",
  },
]
 
const filters = ["Todos", "Dev", "IA", "Suporte", "Redes"]
 
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
        <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">
          Trajetória
        </p>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experiência Profissional
        </h2>
        <p className="text-zinc-400 mt-3 max-w-xl mx-auto">
          Evolução contínua combinando desenvolvimento, IA e infraestrutura com impacto real.
        </p>
      </motion.div>
 
      {/* FILTERS */}
      <div className="flex justify-center gap-2.5 mb-12 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
              activeFilter === filter
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                : "border-zinc-700 text-zinc-400 hover:border-cyan-500/50 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
 
      {/* TIMELINE */}
      <div className="relative border-l border-cyan-500/20 pl-8 space-y-10">
        {filtered.map((exp, index) => (
          <motion.div
            key={`${exp.role}-${index}`}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.12, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* DOT */}
            <div className="absolute -left-[34px] top-2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
 
            {/* CARD */}
            <div className="relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl transition-all transform hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
 
              {/* HEADER */}
              <div className="flex justify-between flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                  {exp.impact}
                </span>
              </div>
 
              <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                <Briefcase size={13} />
                {exp.company}
              </div>
 
              <div className="flex items-center gap-2 text-zinc-500 text-xs mb-4">
                <Calendar size={12} />
                {exp.period}
              </div>
 
              <p className="text-zinc-300 text-sm leading-relaxed">
                {exp.description}
              </p>
 
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}