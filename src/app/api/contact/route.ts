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

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
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

        // Email HTML template with styles
        const emailHTML = `
            <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px; border-radius: 8px;">
                <h2 style="color: #333;">New Contact Form Submission</h2>
                <p><strong style="color: #007bff;">Name:</strong> ${name}</p>
                <p><strong style="color: #007bff;">Email:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
                <p style="margin-top: 10px; padding: 10px; background: #fff; border-radius: 5px; border-left: 4px solid #007bff;">
                    ${message}
                </p>
                <br/>
                <p style="color: #666; font-size: 12px;">This message was sent from your website contact form.</p>
            </div>
        `;

        // Send the email
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO, // Must be defined
            subject: "New Contact Form Submission",
            text: message,
            html: emailHTML,
        });

        // Return success response
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error: any) {
        console.error("Email sending error:", error);
    
        return NextResponse.json({ 
            message: "Error sending email", 
            error: error.message || "Unknown error"  // Ensure error details are included
        }, { status: 500 });
    }
}
