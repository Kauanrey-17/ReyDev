import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-0.5">
            <span className="text-lg font-bold text-primary glow-text font-mono">
              {"<"}
            </span>
            <span className="text-lg font-bold text-foreground">Rey</span>
            <span className="text-lg font-bold text-primary glow-text">Dev</span>
            <span className="text-lg font-bold text-primary glow-text font-mono">
              {" />"}
            </span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:kauanrey366@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Enviar email"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">kauanrey366@gmail.com</span>
            </a>
            <a
              href="tel:+5511960396532"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Ligar"
            >
              <Phone size={14} />
              <span className="hidden sm:inline">(11) 96039-6532</span>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            {"Kauan Rey Bento da Silva. Todos os direitos reservados."}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {"Construido com "}
            <span className="text-primary">Next.js</span>
            {" + "}
            <span className="text-primary">React</span>
            {" + "}
            <span className="text-primary">TailwindCSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
