"use client";

import { ExternalLink, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Rane Lazer",
    description:
      "Site institucional desenvolvido para a Rane Lazer, com foco em apresentação de serviços de eventos e lazer. Interface moderna, responsiva e otimizada para conversão.",
    tech: ["Next.js", "Tailwind CSS", "v0.dev"],
    link: "https://v0-rane-lazer.vercel.app/",
    image: "/project-rane.png",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header da Seção */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary/50" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Projetos <span className="text-primary glow-text">em destaque</span>
          </h2>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              // A classe 'group' permite animar os filhos quando o mouse entra no card
              // 'glow-border' adiciona o efeito de luz que você tem nos outros cards
              className="group relative rounded-xl border border-border bg-card/30 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-card/50 glow-border"
            >
              <div className="p-8">
                {/* O ícone muda de cor no hover do card */}
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                  <Layout size={24} className="text-primary" />
                </div>

                {/* O título muda de cor no hover */}
                <h3 className="text-xl font-bold mb-3 transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags de tecnologia que também reagem ao hover */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-1 rounded border border-primary/20 bg-primary/5 text-primary transition-all group-hover:border-primary/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {/* Mantive o as any para evitar o erro de tipagem que você teve no terminal */}
                  <Button {...({ asChild: true, size: "sm" } as any)} className="gap-2 transition-transform group-hover:scale-105">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Acessar Site <ExternalLink size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}