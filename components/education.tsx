"use client";

// 1. CORREÇÃO: Importação essencial dos ícones
import { GraduationCap, BookOpen, Award } from "lucide-react";

// Dados da Educação
const education = [
  {
    icon: GraduationCap,
    level: "Nivel Superior",
    institution: "Faculdade de Tecnologia Prefeito Hirant Sanazar (FATEC)",
    course: "Redes de Sistemas",
    status: "Cursando - 3o Semestre",
    highlight: true,
  },
  {
    icon: BookOpen,
    level: "Nivel Tecnico",
    institution: "ETEC Prof Basilides de Godoy",
    course: "Desenvolvimento de Sistemas",
    status: "Concluido",
    highlight: false,
  },
  {
    icon: BookOpen,
    level: "Nivel Tecnico",
    institution: "Escola Estadual Anhanguera (Extensao Novotec ETEC)",
    course: "Marketing",
    status: "Concluido",
    highlight: false,
  },
];

// Dados das Certificações
const certifications = [
  { name: "Fundamentos do Python 1", institution: "Cisco Networking Academy", hours: "30h", year: "2025" },
  { name: "Fundamentos do Hardware do Computador", institution: "Cisco Networking Academy", hours: "6h", year: "2025" },
  { name: "Ideathon 2025 Osasco", institution: "Instituto SEBRAE", hours: "8h", year: "2025" },
  { name: "Desafio Soul", institution: "Desafio Soul", hours: "15h", year: "2024" },
  { name: "Gestao Empresarial", institution: "Microlins Lapa", hours: "90h", year: "2024" },
  { name: "Meu Trampo e Empreender", institution: "Instituto Besouro", hours: "20h", year: "2024" },
  { name: "Formacao Socioeducativa para o Trabalho", institution: "CAMP Oeste", hours: "240h", year: "2022" },
];

export function Education() {
  return (
    <section id="formacao" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header com brilho no texto */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary/50" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">
              Formacao
            </span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Educacao &{" "}
            <span className="text-primary glow-text">certificacoes</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Lado Esquerdo: Educação */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm font-semibold text-primary tracking-wider uppercase">
              <GraduationCap size={16} />
              Formacao Academica
            </h3>
            <div className="flex flex-col gap-4">
              {education.map((edu) => {
                // 2. CORREÇÃO: Atribuir a uma constante com letra MAIÚSCULA para renderizar o ícone
                const Icon = edu.icon;
                return (
                  <div
                    key={edu.course}
                    className={`group rounded-lg border p-6 transition-all duration-300 hover:bg-card/50 glow-border ${
                      edu.highlight
                        ? "border-primary/50 bg-primary/5 shadow-[0_0_15px_rgba(var(--primary),0.1)]"
                        : "border-border bg-card/30 hover:border-primary/30"
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <Icon
                        size={16}
                        className={`transition-colors ${edu.highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`}
                      />
                      <span className="font-mono text-xs text-muted-foreground uppercase">
                        {edu.level}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                      {edu.course}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                    <div className="mt-3">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 font-mono text-xs transition-all ${
                          edu.highlight
                            ? "bg-primary/20 text-primary border border-primary/20"
                            : "bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lado Direito: Certificações com Brilho Individual */}
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-sm font-semibold text-primary tracking-wider uppercase">
              <Award size={16} />
              Cursos & Certificacoes
            </h3>
            <div className="flex flex-col gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group flex items-center justify-between rounded-lg border border-border bg-card/30 px-5 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-card/50 glow-border"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {cert.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 ml-4 shrink-0">
                    <span className="font-mono text-[10px] text-muted-foreground group-hover:text-primary/70">
                      {cert.hours}
                    </span>
                    <span className="rounded bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-all">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}