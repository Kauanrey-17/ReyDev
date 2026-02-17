"use client"

const steps = [
  {
    title: "Diagnóstico",
    desc: "Entendo seu negócio, público e objetivo para criar a solução certa.",
  },
  {
    title: "Estratégia",
    desc: "Planejo estrutura, tecnologia e conversão focada em resultado real.",
  },
  {
    title: "Desenvolvimento",
    desc: "Construção com código limpo, performance alta e design premium.",
  },
  {
    title: "Entrega & Suporte",
    desc: "Publicação, ajustes finais e suporte para garantir funcionamento perfeito.",
  },
]

export function Process() {
  return (
    <section className="py-28 px-6 relative">
      <div className="mx-auto max-w-5xl text-center">
        
        <h2 className="text-4xl font-bold mb-4">
          Como eu{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            trabalho
          </span>
        </h2>

        <p className="text-muted-foreground mb-16">
          Processo estruturado para entregar sites rápidos, modernos e que geram resultado.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card/40 p-6 lift glow-border"
            >
              <div className="text-2xl font-bold text-primary mb-3">
                0{i + 1}
              </div>

              <h3 className="font-semibold mb-2">{step.title}</h3>

              <p className="text-sm text-muted-foreground">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}