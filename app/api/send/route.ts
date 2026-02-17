import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name = "Não informado",
      email = "Não informado",
      whatsapp = "Não informado",
      project = "Não informado",
      message = "Sem mensagem",
    } = body;

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["kauanrey366@gmail.com"],
      subject: `Novo orçamento — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif">
          <h2>Novo orçamento recebido 🚀</h2>

          <p><b>Nome:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>WhatsApp:</b> ${whatsapp}</p>
          <p><b>Projeto:</b> ${project}</p>

          <h3>Mensagem:</h3>
          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    console.error("RESEND ERROR:", error);
    return Response.json({ success: false });
  }
}