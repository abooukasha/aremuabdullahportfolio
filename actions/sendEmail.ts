"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  if (!senderEmail || !message) {
    return { error: "Missing required fields." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "aremuabdullah74@gmail.com",
      subject: "New message from your portfolio",
      reply_to: senderEmail,
      text: message,
    });

    return { data: "Email sent!" };
  } catch (error: any) {
    return { error: error.message };
  }
}
