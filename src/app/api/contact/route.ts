import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        // Parse request body
        const body = await req.json();
        console.log("Request Body:", body); // Debugging: Log request body

        const { name, email, message } = body;

        // Validate input
        if (!name || !email || !message) {
            console.error("Validation Error: Missing fields");
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Debugging: Verify environment variables
        console.log("EMAIL_USER:", process.env.EMAIL_USER);
        console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists" : "Not Set"); // Hide actual value
        console.log("EMAIL_TO:", process.env.EMAIL_TO);

        // Configure Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // Allow self-signed certs (only if needed)
            },
        });
        
        

        // Send email
        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO,
            subject: "New Contact Form Submission",
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        });

        console.log("Email sent successfully!", info.response);
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error in API Route:", error);
        return NextResponse.json({ message: "Internal Server Error"}, { status: 500 });
    }
}
