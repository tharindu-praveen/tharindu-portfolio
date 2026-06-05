import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#050505; color:#ffffff; padding:24px;">
          <div style="max-width:650px; margin:auto; border:1px solid #262626; padding:24px;">
            <h2 style="color:#dc2626; margin-bottom:16px;">New Portfolio Message</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>

            <hr style="border:none; border-top:1px solid #262626; margin:20px 0;" />

            <p style="line-height:1.7;">${message.replace(/\n/g, "<br />")}</p>
          </div>
        </div>
      `,
    });

    return Response.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    return Response.json(
      { success: false, message: "Failed to send message." },
      { status: 500 }
    );
  }
}