import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, phone, service, message } = await req.json();

  // Basic validation check
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email to the company
    await transporter.sendMail({
      from: '"Contact Form Submission" <Developer@crestbeam.com.ng>',
      to: process.env.COMPANY_EMAIL,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    });

    // Send automated response to the client
    await transporter.sendMail({
      from: '"Crestbeam" <Developer@crestbeam.com.ng>',
      to: email,
      subject: 'Thank you for contacting us',
      text: `
        Dear ${name},

        Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.

        Best regards,
        Crestbeam Team
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
