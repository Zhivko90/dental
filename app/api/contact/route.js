import { Resend } from "resend";
import { client } from "../../../sanity/client";
import { CONTACT_QUERY } from "../../../sanity/queries";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone) {
      return Response.json({ error: "Липсват задължителни полета." }, { status: 400 });
    }

    const contact = await client.fetch(CONTACT_QUERY);
    const to = contact?.email;
    if (!to) {
      return Response.json({ error: "Няма зададен имейл на клиниката." }, { status: 500 });
    }

    await resend.emails.send({
      from: "Уебсайт <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `Ново запитване от сайта — ${name}`,
      text: `Име: ${name}\nИмейл: ${email}\nТелефон: ${phone}\n\nСъобщение:\n${message || "(без съобщение)"}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Изпращането не бе успешно." }, { status: 500 });
  }
}