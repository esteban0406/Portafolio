import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email, message } = body ?? {};

  // Server-side validation
  if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
    return Response.json({ success: false, message: "Invalid name." }, { status: 400 });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email) || email.length > 254) {
    return Response.json({ success: false, message: "Invalid email address." }, { status: 400 });
  }
  if (!message || typeof message !== "string" || message.trim().length < 10 || message.length > 2000) {
    return Response.json(
      { success: false, message: "Message must be between 10 and 2000 characters." },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "luisesteban0406@gmail.com",
      replyTo: email,
      subject: `New portfolio contact from ${name.trim()}`,
      html: `
        <h2>New contact from your portfolio</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, "<br>")}</p>
      `,
    });

    return Response.json({ success: true, message: "Message sent." }, { status: 200 });
  } catch {
    return Response.json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
