"use client";
 
import { useEffect, useState } from "react";
import {
  ChevronDown,
  MapPin,
  Rocket,
  MessageCircle,
  ArrowRight,
  Star,
} from "lucide-react";
 
const roles = [
  "Desenvolvedor Full-Stack",
  "Especialista em IA & Automações",
  "Criador de Sites que Vendem",
  "Soluções Digitais sob Medida",
];
 
const stats = [
  { value: "4+", label: "Projetos Entregues" },
  { value: "100%", label: "Responsivo & Rápido" },
  { value: "IA", label: "Integrada nos Projetos" },
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
      }, 50);
    } else if (!isDeleting && displayedText.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 22);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }
 
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole]);
 
  return (
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
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/8 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-blue-500/8 blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/3 blur-[100px]" />
 
      <div className="relative z-10 mx-auto max-w-5xl text-center">
 
        {/* BADGE */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-mono text-emerald-400">Disponível para novos projetos</span>
        </div>
 
        {/* NOME */}
        <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl tracking-tight">
          Kauan{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent glow-text">
            Rey
          </span>
        </h1>
 
        {/* TYPEWRITER */}
        <div className="mt-5 flex items-center justify-center gap-1 font-mono text-base text-muted-foreground md:text-xl lg:text-2xl min-h-[2rem]">
          <span className="text-primary">{">"}</span>
          <span className="text-foreground/80">{displayedText}</span>
          <span className="ml-0.5 inline-block h-5 w-0.5 bg-primary animate-blink" />
        </div>
 
        {/* LOCAL */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin size={13} className="text-primary" />
          São Paulo, SP — Brasil
        </div>
 
        {/* COPY */}
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground leading-relaxed text-sm md:text-base">
          Desenvolvo{" "}
          <span className="text-foreground font-medium">
            sites profissionais, sistemas web e automações com IA
          </span>
          {" "}que ajudam empresas a{" "}
          <span className="text-primary font-medium">
            vender mais, economizar tempo e crescer no digital.
          </span>
          {" "}Cada projeto é pensado para gerar resultado real — não apenas parecer bonito.
        </p>
 
        {/* CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#contato"
            className="btn-magnetic group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-mono text-sm font-bold text-black shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-all"
          >
            <Rocket size={15} />
            Solicitar Orçamento
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
 
          <a
            href="https://wa.me/5511960396532"
            target="_blank"
            className="btn-magnetic flex items-center gap-2 rounded-xl border border-primary/30 bg-white/5 px-6 py-3.5 font-mono text-sm backdrop-blur-xl hover:border-primary hover:bg-white/10 transition-all"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
 
          <a
            href="#projetos"
            className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-6 py-3.5 font-mono text-sm transition hover:border-primary/40 hover:bg-secondary"
          >
            <Star size={14} />
            Ver Projetos
          </a>
        </div>
 
        {/* STATS */}
        <div className="mt-16 grid grid-cols-3 gap-6 md:gap-10 max-w-md mx-auto">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary glow-text font-mono">
                {item.value}
              </div>
              <div className="text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
 
        {/* CLIENTES */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <div className="h-px w-12 bg-border" />
          <span className="font-mono">ranelazer.com.br · rane construção · moneymind (em breve)</span>
          <div className="h-px w-12 bg-border" />
        </div>
      </div>
 
      {/* SCROLL */}
      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 md:flex"
      >
        <span className="text-[10px] font-mono text-primary/50 uppercase tracking-widest">scroll</span>
        <ChevronDown className="animate-bounce text-primary/60" size={16} />
      </a>
    </section>
  );
}