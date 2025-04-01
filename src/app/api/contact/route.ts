import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();

    const data = await resend.emails.send({
      from: "noreply@yourdomain.com", // Must be a verified sender in Resend
      to: "mjanngalliguez77@gmail.com", // 🔹 Set your own email here
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
