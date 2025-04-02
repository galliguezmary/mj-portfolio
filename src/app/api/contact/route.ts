import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface EmailRequestBody {
    name: string;
    email: string;
    message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, message } = req.body as EmailRequestBody;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
        service: "gmail", // Or use another email service
        auth: {
            user: process.env.EMAIL_USER as string,
            pass: process.env.EMAIL_PASS as string,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO,
            subject: "New Contact Form Submission",
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        });

        return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return res.status(500).json({ message: "Error sending email" });
    }
}
