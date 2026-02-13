"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formacao", href: "#formacao" },
  { label: "Contato", href: "#contato" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      } h-24 md:h-32`} // Aumentei a altura do Header para a logo ter espaço
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* LOGO REYDEV - CONFIGURAÇÃO GIGANTE */}
        <a href="#" className="flex items-center group h-full py-2">
          <div className="relative h-full w-64 md:w-[450px] flex items-center justify-start overflow-visible">
            <Image
              src="/logo.png" // LEMBRETE: Renomeie seu arquivo para logo.png na pasta public
              alt="ReyDev Logo"
              fill
              className="object-contain object-left transition-transform duration-300 group-hover:scale-110 scale-150" 
              // O 'scale-150' força a imagem a estourar as bordas vazias e aparecer grande
              priority
            />
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary font-mono font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden z-50"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isMobileOpen && (
        <div className="absolute top-0 left-0 w-full h-screen border-b border-border bg-background/98 backdrop-blur-lg md:hidden flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-2xl text-muted-foreground transition-colors hover:text-primary font-mono"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}