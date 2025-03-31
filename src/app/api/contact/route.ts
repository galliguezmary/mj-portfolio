import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Validate input fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER as string,
      pass: process.env.EMAIL_PASS as string,
    },
  });

  // Send styled email
  await transporter.sendMail({
    from: `${name} via Your Website <${process.env.EMAIL_USER}>`, // Corrected email format
    replyTo: email, // Allows direct replies to the sender
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #007bff; text-align: center;">New Message from ${name}</h2>
            
            <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
            
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
            
            <h3 style="color: #007bff; text-align: center;">Message</h3>
            <p style="font-size: 16px; background: #f9f9f9; padding: 15px; border-radius: 5px; box-shadow: inset 0px 1px 3px rgba(0,0,0,0.1);">${message}</p>
            
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;" />
            
            <p style="text-align: center; font-size: 14px; color: #666;">
              <em>This message was sent from your website's contact form.</em>
            </p>
          </div>
        </body>
      </html>
    `,
  });

  // Respond back with success status
  return NextResponse.json(
    { success: true, message: "Email sent successfully!" },
    { status: 200 }
  );
}
