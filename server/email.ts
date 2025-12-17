import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  message: string;
}

const RECIPIENTS = [
  "info@seashelltravel.sc",
  "tech@switch.sc"
];

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "smtp.office365.com",
  port: parseInt(process.env.MAIL_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME || "formmail@switch.sc",
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const serviceTypeLabels: Record<string, string> = {
    general: "General Inquiry",
    leisure: "Leisure Travel",
    corporate: "Corporate Travel",
    group: "Group Booking",
  };

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1e3a5f;">New Contact Form Submission</h2>
      <hr style="border: 1px solid #ddd;">
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${data.phone || "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service Type:</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${serviceTypeLabels[data.serviceType] || data.serviceType}</td>
        </tr>
      </table>
      
      <h3 style="color: #1e3a5f; margin-top: 30px;">Message:</h3>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</div>
      
      <hr style="border: 1px solid #ddd; margin-top: 30px;">
      <p style="color: #888; font-size: 12px;">This email was sent from the Seashell Travel website contact form.</p>
    </div>
  `;

  const mailOptions = {
    from: `"Seashell Travel Contact Form" <${process.env.MAIL_USERNAME || "formmail@switch.sc"}>`,
    to: RECIPIENTS.join(", "),
    subject: `New Contact Form Submission - ${serviceTypeLabels[data.serviceType] || data.serviceType}`,
    html: htmlContent,
    replyTo: data.email,
  };

  await transporter.sendMail(mailOptions);
}
