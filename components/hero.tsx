"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  MapPin,
  Sparkles,
  Rocket,
  MessageCircle,
} from "lucide-react";

const roles = [
  "Desenvolvedor Full-Stack",
  "Crio sites que vendem",
  "Automação & Sistemas Web",
  "Soluções digitais sob medida",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayedText(role.slice(0, displayedText.length + 1));
      }, 55);
    } else if (!isDeleting && displayedText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 25);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);

  return (
    /* ADICIONADO pt-80 PARA DESCER O CONTEÚDO ABAIXO DA NAVEGAÇÃO */
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-80 pb-20">
      {/* GRID BG */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(185 80% 50%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(185 80% 50%) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* GLOW BG */}
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        {/* NOME */}
        <h1 className="text-5xl font-bold md:text-7xl">
          Kauan{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent glow-text">
            Rey
          </span>
        </h1>

        {/* TYPEWRITER */}
        <div className="mt-4 flex items-center justify-center gap-1 font-mono text-lg text-muted-foreground md:text-2xl">
          <span className="text-primary">{">"}</span>
          <span>{displayedText}</span>
          <span className="ml-1 inline-block h-6 w-[2px] bg-primary animate-blink" />
        </div>

        {/* LOCAL */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin size={14} className="text-primary" />
          São Paulo — Brasil
        </div>

        {/* COPY */}
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed">
          Eu desenvolvo{" "}
          <span className="text-primary">
            sites profissionais, sistemas web e automações
          </span>
          {" "}que ajudam empresas a vender mais, automatizar processos e crescer no
          digital. Cada projeto é focado em{" "}
          <span className="text-primary">
            performance, conversão e resultado real.
          </span>
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contato"
            className="btn-magnetic flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-mono text-sm font-semibold text-black"
          >
            <Rocket size={16} />
            Solicitar orçamento
          </a>

          <a
            href="https://wa.me/5511960396532"
            target="_blank"
            className="btn-magnetic flex items-center gap-2 rounded-lg border border-primary/30 bg-white/5 px-6 py-3 font-mono text-sm backdrop-blur-xl hover:border-primary"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href="#projects"
            className="rounded-lg border border-border bg-secondary/50 px-6 py-3 font-mono text-sm transition hover:border-primary/40 hover:bg-secondary"
          >
            Ver projetos
          </a>
        </div>

        {/* PROVA SOCIAL */}
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "Sites", label: "Alta Conversão" },
            { value: "100%", label: "Responsivo" },
            { value: "Performance", label: "Otimizada" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-bold text-primary glow-text">
                {item.value}
              </div>
              <div className="text-xs font-mono text-muted-foreground uppercase">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL */}
      <a
        href="#projects"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
      >
        <span className="text-xs font-mono text-primary/60">scroll</span>
        <ChevronDown className="animate-bounce text-primary" size={16} />
      </a>
    </section>
  );
}