"use client";
 
import Image from "next/image";
import { ExternalLink, Github, Rocket, Wrench } from "lucide-react";
import { motion } from "framer-motion";
 
const projects = [
  {
    title: "Rane Lazer",
    description:
      "Site institucional profissional focado em conversão, apresentação de serviços e experiência do usuário. Interface moderna, rápida e responsiva com otimização para SEO e Google Ads.",
    tech: ["Next.js", "Tailwind", "Vercel", "SEO", "Google Ads"],
    link: "https://www.ranelazer.com.br/",
    image: "/project-rane.PNG",
    status: "live",
    label: "Publicado",
  },
  {
    title: "Rane Construção",
    description:
      "Site institucional moderno para empresa de construção civil com foco em autoridade, apresentação de serviços, portfólio de obras e geração de leads qualificados.",
    tech: ["Next.js", "Tailwind", "SEO", "Responsivo"],
    link: "https://rane-constru-o.vercel.app",
    image: "/rane-construcao.PNG",
    status: "live",
    label: "Publicado",
  },
  {
    title: "MoneyMind",
    description:
      "Aplicativo financeiro inteligente em desenvolvimento com integração de IA para análise de gastos, metas financeiras e insights personalizados. Em breve para testes com usuários beta.",
    tech: ["Next.js", "Supabase", "PostgreSQL", "IA", "Prisma"],
    link: "#",
    image: "/project-python.png",
    status: "wip",
    label: "Em desenvolvimento",
  },
  {
    title: "Gerador de Assinaturas",
    description:
      "Ferramenta desktop desenvolvida em Python para geração automática de assinaturas profissionais de e-mail padronizadas para empresas. Sistema rápido, leve e automatizado.",
    tech: ["Python", "Automação", "Desktop Tool"],
    link: "https://github.com/Kauanrey-17/Gerador-de-assinatura.",
    image: "/project-python.png",
    status: "live",
    label: "Open Source",
  },
];
 
const statusConfig = {
  live: {
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  wip: {
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    dot: "bg-amber-400 animate-pulse",
  },
};
 
export function Projects() {
  return (
    <section id="projetos" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
 
        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary/50" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">
              Portfólio
            </span>
          </div>
 
          <h2 className="text-3xl font-bold md:text-4xl">
            Projetos <span className="text-primary glow-text">em destaque</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Soluções reais entregues para clientes e produtos próprios em desenvolvimento.
          </p>
        </div>
 
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const status = statusConfig[project.status as keyof typeof statusConfig];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl border border-border bg-card/30 backdrop-blur overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] flex flex-col"
              >
                {/* IMAGE PREVIEW */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
 
                  {/* STATUS BADGE */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full border ${status.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      {project.label}
                    </span>
                  </div>
                </div>
 
                {/* CONTENT */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
 
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
 
                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-1 rounded border border-primary/20 bg-primary/5 text-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
 
                  {/* BUTTON */}
                  {project.status === "wip" ? (
                    <span className="inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-mono text-amber-400 w-fit">
                      <Wrench size={14} />
                      Em breve
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-mono text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] w-fit"
                    >
                      {project.link.includes("github") ? (
                        <><Github size={14} /> Ver Código</>
                      ) : (
                        <><Rocket size={14} /> Ver Projeto</>
                      )}
                    </a>
                  )}
                </div>
 
                {/* HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}