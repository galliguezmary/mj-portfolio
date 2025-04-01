import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();

    const data = await resend.emails.send({
      from: "your@email.com",
      to: "yourrecipient@email.com",
      subject: `New Message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
