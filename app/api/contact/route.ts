import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const req = await request.json();
  const { name, email, message } = req;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      pass: process.env.NEXT_PUBLIC_CONTACT_PASSWORD,
    },
  });

  const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background-color:#060e20;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#131b2e 0%,#1e293b 100%);border-radius:16px 16px 0 0;padding:40px 40px 32px;text-align:center;border:1px solid rgba(255,255,255,0.08);border-bottom:none;">
              <div style="display:inline-block;background:rgba(76,215,246,0.1);border:1px solid rgba(76,215,246,0.25);border-radius:50px;padding:6px 20px;margin-bottom:20px;">
                <span style="color:#4cd7f6;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;font-weight:600;">New Message Received</span>
              </div>
              <h1 style="margin:0;font-size:28px;font-weight:700;color:#dae2fd;letter-spacing:-0.02em;">Ajithkumar Portfolio</h1>
              <p style="margin:8px 0 0;color:#bcc9cd;font-size:14px;">You have a new message from your portfolio contact form</p>
            </td>
          </tr>

          <!-- Sender Info -->
          <tr>
            <td style="background:#131b2e;padding:32px 40px 0;border:1px solid rgba(255,255,255,0.08);border-top:none;border-bottom:none;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="padding-right:12px;">
                    <div style="background:#1e293b;border:1px solid rgba(192,193,255,0.15);border-radius:12px;padding:20px;">
                      <p style="margin:0 0 4px;color:#908fa0;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">From</p>
                      <p style="margin:0;color:#c0c1ff;font-size:16px;font-weight:600;">${name}</p>
                    </div>
                  </td>
                  <td width="50%" style="padding-left:12px;">
                    <div style="background:#1e293b;border:1px solid rgba(76,215,246,0.15);border-radius:12px;padding:20px;">
                      <p style="margin:0 0 4px;color:#908fa0;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Email</p>
                      <p style="margin:0;color:#4cd7f6;font-size:14px;font-weight:500;word-break:break-all;">${email}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message body -->
          <tr>
            <td style="background:#131b2e;padding:24px 40px 32px;border:1px solid rgba(255,255,255,0.08);border-top:none;border-bottom:none;">
              <p style="margin:0 0 12px;color:#908fa0;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Message</p>
              <div style="background:#0b1326;border:1px solid rgba(255,255,255,0.06);border-left:3px solid #4cd7f6;border-radius:0 12px 12px 0;padding:20px 24px;">
                <p style="margin:0;color:#dae2fd;font-size:15px;line-height:1.7;white-space:pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background:#131b2e;padding:0 40px 32px;border:1px solid rgba(255,255,255,0.08);border-top:none;border-bottom:none;text-align:center;">
              <a href="mailto:${email}?subject=Re: Your message to Ajithkumar&body=Hi ${name},"
                style="display:inline-block;background:linear-gradient(to right,#4cd7f6,#c0c1ff);color:#003640;text-decoration:none;font-size:14px;font-weight:700;padding:14px 32px;border-radius:10px;letter-spacing:0.02em;">
                Reply to ${name}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0b1326;border:1px solid rgba(255,255,255,0.06);border-top:1px solid rgba(255,255,255,0.08);border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 4px;color:#464554;font-size:12px;">Sent via</p>
              <p style="margin:0;color:#c0c1ff;font-size:14px;font-weight:700;letter-spacing:0.05em;">Ajithkumar Portfolio V2</p>
              <p style="margin:8px 0 0;color:#464554;font-size:11px;">© ${new Date().getFullYear()} Ajith Kumar. Built with Precision.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: `"Ajithkumar Portfolio" <${process.env.NEXT_PUBLIC_CONTACT_EMAIL}>`,
      replyTo: email,
      to: process.env.NEXT_PUBLIC_CONTACT_TOMAIL,
      subject: `✉️ New message from ${name} — Ajithkumar Portfolio`,
      text: `New message from ${name} (${email}):\n\n${message}`,
      html: htmlTemplate,
    });

    return NextResponse.json(
      { message: "Email sent successfully", info },
      { status: 200 }
    );
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
