"use client";
 
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageCircle,
  Rocket,
  Sparkles,
  Clock,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
 
export function Footer() {
  const [showTop, setShowTop] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
 
  const whatsappMessage = encodeURIComponent(
    `Olá Kauan, vim pelo seu portfólio 🚀\n\nQuero solicitar um orçamento.\n\n📌 Tipo de projeto:\n📌 Prazo:\n📌 Orçamento estimado:\n📌 Detalhes:\n\nAguardo seu retorno.`
  );
 
  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-card/40 to-background/90 backdrop-blur-xl px-6 py-16">
      <div className="mx-auto max-w-6xl">
 
        {/* TOP */}
        <div className="grid gap-12 md:grid-cols-2">
 
          {/* LOGO + STATUS */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-start overflow-visible py-4">
              <Image
                src="/logo.png"
                alt="ReyDev"
                width={280}
                height={100}
                className="h-auto w-48 md:w-64 object-contain transition-transform hover:scale-105"
                priority
              />
            </div>
 
            {/* STATUS */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-mono text-emerald-400">
                  Disponível para novos projetos
                </span>
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock size={11} />
                  Resposta média: ~2h
                </span>
              </div>
            </div>
 
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Transformo ideias em soluções digitais modernas, rápidas e escaláveis com IA integrada. 
              Site profissional, sistema ou automação — vamos construir juntos.
            </p>
 
            {/* DOMAIN BADGE */}
            <div className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 w-fit">
              <Globe size={13} className="text-primary" />
              <span className="text-xs font-mono text-primary">reydev.com.br</span>
              <span className="text-[10px] font-mono text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">em breve</span>
            </div>
          </div>
 
          {/* CTA */}
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
              <Sparkles size={13} />
              Vamos construir algo
            </div>
 
            <h3 className="text-2xl font-bold leading-tight">
              Pronto para transformar sua ideia em realidade?
            </h3>
 
            <p className="text-sm text-muted-foreground max-w-sm">
              Me conte seu projeto e eu retorno com a melhor solução, prazo e estratégia.
            </p>
 
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:scale-[1.03] hover:shadow-primary/40"
              >
                <Rocket size={15} />
                Solicitar orçamento
                <ArrowUpRight size={14} className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
              </a>
 
              <a
                href={`https://wa.me/5511960396532?text=${whatsappMessage}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/40 px-6 py-3 text-sm text-muted-foreground transition hover:border-primary hover:text-primary hover:scale-[1.02]"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>
 
            <div className="flex gap-5 mt-4">
              <a href="mailto:kauanrey366@gmail.com" className="text-muted-foreground hover:text-primary transition hover:scale-110">
                <Mail size={17} />
              </a>
              <a href="tel:+5511960396532" className="text-muted-foreground hover:text-primary transition hover:scale-110">
                <Phone size={17} />
              </a>
              <a href="https://github.com/Kauanrey-17" target="_blank" className="text-muted-foreground hover:text-primary transition hover:scale-110">
                <Github size={17} />
              </a>
              <a href="https://linkedin.com/in/kauan-rey" target="_blank" className="text-muted-foreground hover:text-primary transition hover:scale-110">
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>
 
        {/* SEPARATOR */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
 
        {/* BOTTOM */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center text-center md:text-left">
          <p className="text-xs text-muted-foreground">
            © 2026{" "}
            <span className="text-primary font-medium">Kauan Rey</span> · ReyDev.
            Todos os direitos reservados.
          </p>
 
          <p className="font-mono text-xs text-muted-foreground">
            Built with{" "}
            <span className="text-primary">Next.js</span> +{" "}
            <span className="text-primary">React</span> +{" "}
            <span className="text-primary">Tailwind</span> +{" "}
            <span className="text-primary">Claude AI</span>
          </p>
        </div>
      </div>
 
      {/* BACK TO TOP */}
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 rounded-full border border-primary/30 bg-card/70 backdrop-blur-md p-3 shadow-xl transition hover:scale-110 hover:border-primary z-50"
        >
          <ArrowUpRight size={17} className="rotate-[-90deg] text-primary" />
        </motion.button>
      )}
    </footer>
  );
}