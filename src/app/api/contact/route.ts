import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Handle POST requests to send emails
export async function POST(req: Request) {
  try {
    // Parse form data from the request body
    const { name, email, message } = await req.json();

    // Validation: Ensure all fields are filled
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Nodemailer transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",  // Change this if using another email provider
      auth: {
        user: process.env.EMAIL_USER,  // Email from .env.local
        pass: process.env.EMAIL_PASS,  // App password from .env.local
      },
    });

    // Define the email options
    const mailOptions = {
      from: email, // User's email
      to: process.env.EMAIL_USER, // Your email where you receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
