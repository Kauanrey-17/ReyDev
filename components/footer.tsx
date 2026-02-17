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
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =========================
      MENSAGENS AUTOMÁTICAS
  ========================= */

  const whatsappMessage = encodeURIComponent(
    `Olá Kauan, vim pelo seu portfólio 🚀

Quero solicitar um orçamento.

📌 Tipo de projeto:
📌 Prazo:
📌 Orçamento estimado:
📌 Detalhes:

Aguardo seu retorno.`,
  );

  const emailSubject = encodeURIComponent(
    "Solicitação de Orçamento — Novo Projeto",
  );
  const emailBody = encodeURIComponent(
    `Olá Kauan,

Vim pelo seu portfólio e gostaria de solicitar um orçamento.

Tipo de projeto:
Prazo:
Orçamento estimado:
Detalhes:

Obrigado.`,
  );

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-card/40 to-background/90 backdrop-blur-xl px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* ================= TOP ================= */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* LOGO + STATUS */}
          <div className="flex flex-col gap-6">
            {/* CONTAINER DA LOGO REFORMULADO PARA NÃO CORTAR */}
            <div className="flex items-center justify-start overflow-visible py-4">
              <Image
                src="/logo.png"
                alt="ReyDev"
                width={280} // Tamanho real que ela ocupará
                height={100} // Proporção garantida
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
                  <Clock size={12} />
                  Resposta média: ~2h
                </span>
              </div>
            </div>

            {/* MICRO COPY */}
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Transformo ideias em soluções digitais modernas, rápidas e
              escaláveis. Se você precisa de um site profissional, sistema ou
              automação — vamos construir juntos.
            </p>
          </div>

          {/* ================= CTA CONVERSÃO ================= */}
          <div className="flex flex-col justify-center gap-5">
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider">
              <Sparkles size={14} />
              Vamos construir algo
            </div>

            <h3 className="text-2xl font-bold">
              Pronto para transformar sua ideia em realidade?
            </h3>

            <p className="text-sm text-muted-foreground max-w-md">
              Me conte seu projeto e eu retorno com a melhor solução, prazo e
              estratégia.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap gap-3 mt-2">
              {/* BOTÃO ATUALIZADO PARA O FORMULÁRIO */}
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:scale-[1.04] hover:shadow-primary/40"
              >
                <Rocket size={16} />
                Solicitar orçamento
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                />
              </a>

              {/* WHATSAPP — MENSAGEM AUTOMÁTICA */}
              <a
                href={`https://wa.me/5511960396532?text=${whatsappMessage}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/40 px-6 py-3 text-sm text-muted-foreground transition hover:border-primary hover:text-primary hover:scale-[1.03]"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-5 mt-4">
              <a
                href="mailto:kauanrey366@gmail.com"
                className="text-muted-foreground hover:text-primary transition hover:scale-110"
              >
                <Mail size={18} />
              </a>

              <a
                href="tel:+5511960396532"
                className="text-muted-foreground hover:text-primary transition hover:scale-110"
              >
                <Phone size={18} />
              </a>

              <a
                href="https://github.com/Kauanrey-17"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition hover:scale-110"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/kauan-rey"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= SEPARATOR ================= */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center text-center md:text-left">
          <p className="text-xs text-muted-foreground">
            © 2026 <span className="text-primary font-medium">Kauan Rey</span>.
            Todos os direitos reservados.
          </p>

          <p className="font-mono text-xs text-muted-foreground">
            Built with <span className="text-primary">Next.js</span> +
            <span className="text-primary"> React</span> +
            <span className="text-primary"> Tailwind</span>
          </p>
        </div>
      </div>

      {/* ================= BACK TO TOP ================= */}
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 rounded-full border border-primary/30 bg-card/70 backdrop-blur-md p-3 shadow-xl transition hover:scale-110 hover:border-primary"
        >
          <ArrowUpRight size={18} className="rotate-[-90deg] text-primary" />
        </motion.button>
      )}
    </footer>
  );
}
