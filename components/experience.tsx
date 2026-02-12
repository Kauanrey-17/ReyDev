import { Briefcase, Radio, Heart, Lightbulb, Code2, ShoppingBag } from "lucide-react"

const experiences = [
  {
    icon: Code2,
    title: "Membro do Board Estudantil - Desenvolvimento",
    company: "Desafio Soul",
    type: "Home Office",
    description:
      "Atuacao como membro do board estudantil, colaborando em iniciativas de inovacao educacional. Desenvolvimento de ferramenta de automacao de assinaturas de e-mail com Python, HTML e CSS. Manipulacao de dados via CSV e Excel.",
    tags: ["Python", "HTML", "CSS", "Automacao"],
  },
  {
    icon: Lightbulb,
    title: "Participacao em Ideathon - Inovacao & Tecnologia",
    company: "Osasco, SP",
    type: "Presencial",
    description:
      "Analise de problemas reais em educacao e desenvolvimento de prototipo conceitual de solucao baseada em Inteligencia Artificial, voltada ao apoio educacional de alunos com diferentes necessidades de aprendizagem.",
    tags: ["IA", "Inovacao", "Prototipacao", "Pitch"],
  },
  {
    icon: Radio,
    title: "Criacao e Operacao de Radio Escolar",
    company: "Projeto Escolar",
    type: "Presencial",
    description:
      "Colaboracao na criacao e implantacao da radio escolar, operacao de equipamentos de audio (mesa de som, microfones) e divulgacao de comunicados institucionais.",
    tags: ["Comunicacao", "Audio", "Trabalho em Equipe"],
  },
  {
    icon: ShoppingBag,
    title: "Vendedor",
    company: "Gabriella Sports - Lapa",
    type: "Temporario",
    description:
      "Atendimento direto ao cliente, apresentacao de produtos esportivos, organizacao de estoque e apoio no processo de compra. Atuacao em tecnicas de comunicacao e negociacao.",
    tags: ["Vendas", "Atendimento", "Negociacao"],
  },
  {
    icon: Heart,
    title: "Trabalho Voluntario - Acao Social",
    company: "Igreja",
    type: "Voluntario",
    description:
      "Participacao em acao social de arrecadacao e distribuicao de brinquedos para criancas de comunidades locais. Apoio logistico e organizacao da acao.",
    tags: ["Voluntariado", "Logistica", "Impacto Social"],
  },
]

export function Experience() {
  return (
    <section id="experiencia" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary/50" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">
              Experiencia
            </span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Trajetoria{" "}
            <span className="text-primary glow-text">profissional</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div className="h-3 w-3 rounded-full bg-primary glow-dot" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="rounded-lg border border-border bg-card/30 p-6 transition-all hover:border-primary/20 hover:bg-card/50">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="inline-flex rounded-lg bg-primary/10 p-2">
                        <exp.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {exp.company}
                        </span>
                        <span className="mx-2 text-border">|</span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <h3 className="mb-2 font-semibold text-foreground text-pretty">
                      {exp.title}
                    </h3>

                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
