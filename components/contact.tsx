import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "E-mail",
    value: "kauanrey366@gmail.com",
    href: "mailto:kauanrey366@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 96039-6532",
    href: "tel:+5511960396532",
  },
  {
    icon: Phone,
    label: "Telefone 2",
    value: "(11) 95145-8593",
    href: "tel:+5511951458593",
  },
  {
    icon: MapPin,
    label: "Localizacao",
    value: "Jardim Jaragua - Sao Paulo, SP",
    href: null,
  },
]

const softSkills = [
  "Comunicacao clara e objetiva",
  "Aprendizado rapido",
  "Organizacao e responsabilidade",
  "Trabalho em equipe",
  "Proatividade",
  "Atencao a detalhes",
  "Resolucao de problemas",
  "Colaboracao remota",
]

export function Contact() {
  return (
    <section id="contato" className="relative py-24 px-6">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(hsl(185 80% 50%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-primary/50" />
            <span className="font-mono text-sm text-primary tracking-wider uppercase">
              Contato
            </span>
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Vamos{" "}
            <span className="text-primary glow-text">conectar</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <p className="mb-8 text-muted-foreground leading-relaxed">
              Estou buscando oportunidades de estagio para desenvolver minhas
              habilidades e contribuir para o crescimento da empresa. Se voce tem
              um projeto ou vaga que combina comigo, entre em contato!
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card/30 p-4 transition-all hover:border-primary/20"
                >
                  <div className="inline-flex rounded-lg bg-primary/10 p-3">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs text-muted-foreground font-mono uppercase tracking-wider">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        {item.value}
                        <ExternalLink size={12} className="text-muted-foreground" />
                      </a>
                    ) : (
                      <span className="text-sm text-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div>
            <h3 className="mb-6 font-mono text-sm font-semibold text-primary tracking-wider uppercase">
              Soft Skills
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card/30 px-4 py-3 transition-all hover:border-primary/20"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary glow-dot shrink-0" />
                  <span className="text-sm text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>

            {/* Differentials */}
            <div className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6">
              <h4 className="mb-4 font-mono text-sm font-semibold text-primary tracking-wider uppercase">
                Diferenciais
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "Experiencia pratica em projetos academicos e institucionais",
                  "Desenvolvimento de ferramenta de automacao com Python",
                  "Prototipo de solucao em Inteligencia Artificial",
                  "Vivencia em ambientes colaborativos e multidisciplinares",
                ].map((diff) => (
                  <li
                    key={diff}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {diff}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
