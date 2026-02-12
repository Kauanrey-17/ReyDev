import { Code2, Network, Cpu, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Experiencia com React, Python, Java, ASP.NET, Flutter e criacao de interfaces web modernas.",
  },
  {
    icon: Network,
    title: "Redes & Infra",
    description:
      "Cursando Redes de Sistemas na FATEC com conhecimentos em Cisco Packet Tracer, Linux e configuracao de redes.",
  },
  {
    icon: Cpu,
    title: "Hardware",
    description:
      "Manutencao de computadores, crimpagem de cabos de rede e suporte tecnico.",
  },
  {
    icon: Lightbulb,
    title: "Inovacao",
    description:
      "Participacao em ideathon com prototipo de solucao em IA voltada a educacao inclusiva.",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary/50" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">
              Sobre mim
            </span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Construindo o{" "}
            <span className="text-primary glow-text">futuro</span> com codigo
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - text */}
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-muted-foreground">
              Sou Kauan Rey Bento da Silva, estudante e estagiario em Tecnologia
              da Informacao com uma paixao genuina por criar solucoes que fazem a
              diferenca. Atualmente cursando Redes de Sistemas na{" "}
              <span className="text-foreground font-medium">
                FATEC Prefeito Hirant Sanazar
              </span>
              , e com formacao tecnica em Desenvolvimento de Sistemas pela{" "}
              <span className="text-foreground font-medium">
                ETEC Prof Basilides de Godoy
              </span>
              .
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Minha trajetoria inclui desde o desenvolvimento de ferramentas de
              automacao com Python ate a participacao em ideathons de inovacao
              tecnologica. Sou movido pela curiosidade e pelo desejo constante de
              aprender, sempre buscando unir teoria e pratica para gerar impacto
              real.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Tenho experiencia em trabalho remoto, colaboracao em equipes
              multidisciplinares e projetos que vao do front-end ao back-end,
              passando por automacao, banco de dados e infraestrutura de redes.
            </p>

            {/* Terminal-style snippet */}
            <div className="mt-4 rounded-lg border border-border bg-secondary/30 p-4 font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-3 w-3 rounded-full bg-destructive/60" />
                <div className="h-3 w-3 rounded-full bg-chart-4/60" />
                <div className="h-3 w-3 rounded-full bg-chart-2/60" />
                <span className="ml-2 text-xs text-muted-foreground">
                  reydev-terminal
                </span>
              </div>
              <div className="flex flex-col gap-1 text-muted-foreground">
                <div>
                  <span className="text-primary">kauan@rey</span>
                  <span className="text-muted-foreground">:</span>
                  <span className="text-chart-2">~</span>
                  <span className="text-muted-foreground">$ </span>
                  <span className="text-foreground">cat sobre.txt</span>
                </div>
                <div className="text-muted-foreground pl-0 mt-1">
                  {">"} 20 anos | Sao Paulo, SP
                </div>
                <div className="text-muted-foreground pl-0">
                  {">"} FATEC - Redes de Sistemas (3o semestre)
                </div>
                <div className="text-muted-foreground pl-0">
                  {">"} ETEC - Dev. de Sistemas (concluido)
                </div>
                <div className="text-muted-foreground pl-0">
                  {">"} Status: Buscando oportunidades de estagio
                </div>
              </div>
            </div>
          </div>

          {/* Right - highlight cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-card glow-border"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <item.icon size={20} className="text-primary" />
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
