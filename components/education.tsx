"use client";

import { GraduationCap, BookOpen, Award } from "lucide-react";
import { motion } from "framer-motion";

/* =========================
   EDUCAÇÃO (TIMELINE)
========================= */
const education = [
  {
    icon: GraduationCap,
    level: "Ensino Superior",
    institution: "FATEC Prefeito Hirant Sanazar",
    course: "Redes de Computadores",
    status: "Cursando — 3º Semestre",
  },
  {
    icon: BookOpen,
    level: "Ensino Técnico",
    institution: "ETEC Prof. Basilides de Godoy",
    course: "Desenvolvimento de Sistemas",
    status: "Concluído",
  },
  {
    icon: BookOpen,
    level: "Ensino Técnico",
    institution: "Extensão Novotec ETEC",
    course: "Marketing",
    status: "Concluído",
  },
];

/* =========================
   CERTIFICAÇÕES
========================= */
const certifications = [
  {
    name: "Fundamentos do Python 1",
    institution: "Cisco Networking Academy",
    hours: "30h",
    year: "2025",
  },
  {
    name: "Fundamentos do Hardware do Computador",
    institution: "Cisco Networking Academy",
    hours: "6h",
    year: "2025",
  },
  {
    name: "Ideathon 2025 — Osasco",
    institution: "Instituto SEBRAE",
    hours: "8h",
    year: "2025",
  },
  {
    name: "Desafio Soul — Inteligência Artificial",
    institution: "Desafio Soul",
    hours: "15h",
    year: "2024",
  },
  {
    name: "Gestão Empresarial",
    institution: "Microlins Lapa",
    hours: "90h",
    year: "2024",
  },
  {
    name: "Meu Trampo é Empreender",
    institution: "Instituto Besouro",
    hours: "20h",
    year: "2024",
  },
  {
    name: "Formação Socioeducativa para o Trabalho",
    institution: "CAMP Oeste",
    hours: "240h",
    year: "2022",
  },
];

export function Education() {
  return (
    <section id="formacao" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary/50" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">
              Formação
            </span>
          </div>

          <h2 className="text-3xl font-bold md:text-4xl">
            Educação &{" "}
            <span className="text-primary glow-text">Certificações</span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">

          {/* TIMELINE EDUCAÇÃO */}
          <div>
            <h3 className="mb-8 flex items-center gap-2 font-mono text-sm font-semibold text-primary tracking-wider uppercase">
              <GraduationCap size={16} />
              Formação Acadêmica
            </h3>

            {/* Linha animada */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-[30px] top-32 w-px bg-primary/20"
            />

            <div className="relative border-l border-primary/20 pl-8">
              {education.map((edu, index) => {
                const Icon = edu.icon;

                return (
                  <motion.div
                    key={edu.course}
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="relative mb-12"
                  >
                    {/* DOT */}
                    <div className="absolute -left-[34px] top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_10px_rgba(var(--primary),0.6)]">
                      <Icon size={14} className="text-primary" />
                    </div>

                    {/* CARD */}
                    <div className="rounded-lg border border-border bg-card/40 p-6 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:bg-card/60 hover:shadow-[0_0_25px_rgba(var(--primary),0.25)] glow-border">
                      <span className="font-mono text-xs text-muted-foreground uppercase">
                        {edu.level}
                      </span>

                      <h4 className="mt-1 font-semibold text-foreground">
                        {edu.course}
                      </h4>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {edu.institution}
                      </p>

                      <span className="mt-3 inline-flex rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary border border-primary/20">
                        {edu.status}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CERTIFICAÇÕES */}
          <div>
            <h3 className="mb-8 flex items-center gap-2 font-mono text-sm font-semibold text-primary tracking-wider uppercase">
              <Award size={16} />
              Cursos & Certificações
            </h3>

            <div className="flex flex-col gap-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  viewport={{ once: true }}
                  className="group flex items-center justify-between rounded-lg border border-border bg-card/30 px-5 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-card/50 hover:shadow-[0_0_18px_rgba(var(--primary),0.25)] glow-border"
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
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}