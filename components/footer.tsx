import { Mail, Phone } from "lucide-react"
import Image from "next/image" // Certifique-se de importar o Image

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/20 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          
          {/* LOGO AUMENTADA NO RODAPÉ */}
          <div className="relative h-24 w-72 md:h-32 md:w-96 flex items-center justify-start overflow-visible my-4 md:my-0">
            <Image
              src="/logo.png"
              alt="ReyDev Logo"
              fill
              className="object-contain object-left scale-125" 
              // O 'scale-125' ajuda a preencher o espaço se a imagem tiver bordas transparentes
              priority
            />
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <a
              href="mailto:kauanrey366@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Enviar email"
            >
              <Mail size={16} />
              <span>kauanrey366@gmail.com</span>
            </a>
            <a
              href="tel:+5511960396532"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              aria-label="Ligar"
            >
              <Phone size={16} />
              <span>(11) 96039-6532</span>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 h-px bg-border" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Kauan Rey Bento da Silva. Todos os direitos reservados."}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {"Construído com "}
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