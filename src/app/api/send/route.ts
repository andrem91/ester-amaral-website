import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error("RESEND_API_KEY is not configured");
        return NextResponse.json(
            { error: "Serviço de e-mail não configurado" },
            { status: 503 }
        );
    }

    const resend = new Resend(apiKey);

    try {
        const { name, email, phone, message } = await request.json();

        const data = await resend.emails.send({
            from: "Site Ester Amaral <contato@psicologaesteramaral.com.br>",
            to: ["contato@psicologaesteramaral.com.br"],
            subject: `Nova mensagem do site: ${name}`,
            replyTo: email,
            html: `
        <h2>Nova mensagem recebida pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { error: "Erro ao enviar mensagem" },
            { status: 500 }
        );
    }
}
