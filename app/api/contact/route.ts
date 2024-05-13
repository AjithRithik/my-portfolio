import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// To handle a POST request to /api
export async function POST(request: Request) {
  const req = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      pass: process.env.NEXT_PUBLIC_CONTACT_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: req?.email,
      to: process.env.NEXT_PUBLIC_CONTACT_TOMAIL,
      subject: `New message from ${req?.name} - ${req?.email}`,
      text: req?.message,
    });

    return NextResponse.json(
      { message: "Email sent successfully", info },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
