"use client";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Loader2,
} from "lucide-react";
import { useState, FormEvent } from "react";

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
    icon: MapPin,
    label: "Localização",
    value: "São Paulo, SP — Brasil",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Kauanrey-17",
    href: "https://github.com/Kauanrey-17",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/kauanrey",
    href: "https://www.linkedin.com/in/kauanrey",
  },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  async function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      project: (form.elements.namedItem("project") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      const text = `🚀 Novo Orçamento

Nome: ${data.name}
Email: ${data.email}
WhatsApp: ${data.whatsapp}
Projeto: ${data.project}

Mensagem:
${data.message}`;

      const whatsappURL = `https://wa.me/5511960396532?text=${encodeURIComponent(
        text
      )}`;

      if (result.success) {
        window.open(whatsappURL, "_blank");
        form.reset();
        alert("Orçamento enviado 🚀");
      } else {
        alert("Erro ao enviar ❌");
      }
    } catch {
      alert("Erro de conexão ❌");
    }

    setLoading(false);
  }

  return (
    <section id="contato" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Solicitar <span className="text-cyan-400">Orçamento</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Me conte seu projeto e receba a melhor solução 🚀
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* INFO */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 hover:border-cyan-400/40 transition"
              >
                <item.icon className="text-cyan-400" size={18} />

                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      className="text-sm hover:text-cyan-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <form
            onSubmit={sendEmail}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)]"
          >
            <div className="flex flex-col gap-5">

              <PremiumInput name="name" label="Seu nome" />
              <PremiumInput name="email" type="email" label="Seu email" />
              <PremiumInput name="whatsapp" label="Seu WhatsApp" />

              {/* SELECT VISÍVEL */}
              <div className="relative">
                <select
                  name="project"
                  required
                  className="peer w-full rounded-xl border border-white/10 bg-[#0B0F19]/80 px-4 pt-5 pb-2 text-white backdrop-blur-xl outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <option value="Site Profissional">Site Profissional</option>
                  <option value="Sistema Web">Sistema Web</option>
                  <option value="Automação">Automação</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Outro">Outro</option>
                </select>
                <label className="absolute left-3 top-1 text-xs text-cyan-400">
                  Tipo de projeto
                </label>
              </div>

              <textarea
                name="message"
                rows={4}
                placeholder="Descreva seu projeto..."
                className="w-full rounded-xl border border-white/10 bg-[#0B0F19]/80 px-4 py-3 text-white backdrop-blur-xl outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                required
              />

              <button
                disabled={loading}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-3 font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Solicitar Orçamento
                  </>
                )}
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* INPUT PREMIUM BIG TECH */
function PremiumInput({ label, ...props }: any) {
  return (
    <div className="relative">
      <input
        {...props}
        required
        className="peer w-full rounded-xl border border-white/10 bg-[#0B0F19]/80 px-4 pt-5 pb-2 text-white backdrop-blur-xl outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
        placeholder=" "
      />
      <label className="absolute left-3 top-1 text-xs text-cyan-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-cyan-400">
        {label}
      </label>
    </div>
  );
}