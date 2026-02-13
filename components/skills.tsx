"use client"

const skillCategories = [
  {
    title: "Linguagens & Core",
    skills: [
      { name: "TypeScript", level: 90 }, // Adicionado destaque
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
      { name: "Resend API", level: 90 }, // Nova habilidade
      { name: "Node.js", level: 70 },
      { name: "TailwindCSS", level: 95 },
    ],
  },
  {
    title: "Integrações & IA",
    skills: [
      { name: "Engenharia de Prompt (IA)", level: 85 }, // Nova habilidade
      { name: "Conexão com Calendário", level: 80 }, // Nova habilidade
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
  "IA (Prompt Engineering)",
  "Integração de Calendário",
  "React",
  "TailwindCSS",
  "JavaScript",
  "Python",
  "MySQL",
  "Node.js",
  "Git",
  "Vercel",
  "Supabase",
  "Linux"
]

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(hsl(185 80% 50%) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary/50" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">
              Habilidades
            </span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Stack{" "}
            <span className="text-primary glow-text">tecnológico</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card/30 p-6 transition-all hover:border-primary/20"
            >
              <h3 className="mb-5 font-mono text-sm font-semibold text-primary tracking-wider uppercase">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-foreground">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full bg-primary/80 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-secondary/30 px-4 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}