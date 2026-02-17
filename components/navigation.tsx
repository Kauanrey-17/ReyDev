"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#process" },
  { label: "Formação", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / totalHeight) * 100);

      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-primary z-[60] shadow-[0_0_12px_rgba(var(--primary),0.9)]"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Container principal ajustado para empilhar Logo e Badge corretamente */}
        <nav className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-4 gap-2">
          <div className="flex w-full items-center justify-between">
            {/* LOGO - DIMINUA A LARGURA (w-32 no mobile e md:w-40 no desktop) */}
            <div className="relative flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center overflow-visible">
                <Image
                  src="/logo.png"
                  alt="ReyDev"
                  width={250}
                  height={80}
                  className="h-auto w-32 md:w-40 object-contain"
                  priority
                />
              </div>
            </div>
            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const section = link.href.replace("#", "");
                const isActive = activeSection === section;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative font-mono text-sm transition-all ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[1px] bg-primary transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* BADGE DISPONÍVEL - Versão Ultra Compacta */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                /* py-0.5 deixa o container extremamente fino */
                className="flex items-center gap-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-2.5 py-0.5 backdrop-blur-md"
              >
                <span className="relative flex h-1 w-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1 w-1 rounded-full bg-emerald-500" />
                </span>
                {/* Fonte reduzida para o mínimo necessário */}
                <span className="text-[11px] font-semibold uppercase tracking-tight text-emerald-400/90 md:text-xs">
                  Disponível para novos projetos
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
            >
              <ul className="flex flex-col items-center gap-6 py-10">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-lg font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
