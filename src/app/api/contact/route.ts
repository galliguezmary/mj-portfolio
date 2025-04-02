import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        // Parse the JSON body from the request
        const body = await req.json();
        const { name, email, message } = body;

        // Validate input: All fields are required
        if (!name || !email || !message) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Configure the Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587, // Use port 587 for Gmail
            secure: false, // Must be false for port 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send the email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO, // Must be defined
            subject: "New Contact Form Submission",
            text: message,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        // Return success response
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json({ message: "Error sending email", error }, { status: 500 });
    }
}
