"use client";

import Image from "next/image";
import { ExternalLink, Layout } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Rane Lazer",
    description:
      "Site institucional profissional focado em conversão, apresentação de serviços e experiência do usuário. Interface moderna, rápida e responsiva.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    link: "https://v0-rane-lazer.vercel.app/",
    image: "/project-rane.PNG",
  },
   {
    title: "Rane Construção",
    description:
      "Site institucional moderno para empresa de construção civil, com foco em autoridade, apresentação de serviços, portfólio de obras e geração de clientes.",
    tech: ["Next.js", "Tailwind", "SEO", "Responsivo"],
    link: "https://rane-constru-o.vercel.app", // coloque o link quando publicar
    image: "/rane-construcao.PNG",
  },

  {
    title: "Gerador de Assinaturas de Email",
    description:
      "Ferramenta desktop desenvolvida em Python para geração automática de assinaturas profissionais de e-mail padronizadas para empresas. Sistema rápido, leve e automatizado.",
    tech: ["Python", "Automação", "Desktop Tool"],
    link: "https://github.com/Kauanrey-17/Gerador-de-assinatura.", // explico abaixo como usar
    image: "/project-python.png",
  },
];

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
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-border bg-card/30 backdrop-blur overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)]"
            >

              {/* IMAGE PREVIEW */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80" />
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Layout size={20} className="text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-7">
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-mono text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_rgba(var(--primary),0.4)]"
                >
                  Ver Projeto <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}