import { Resend } from "resend";

if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
  throw new Error("NEXT_PUBLIC_RESEND_API_KEY is not set");
}

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async ({
  to,
  subject,
  text,
  html,
  replyTo,
}: {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string | string[];
}) => {
  console.log('sendEmail function called'); // Debugging statement
  console.log('Email parameters:', { to, subject, text, html, replyTo }); // Debugging statement

  try {
    const { data, error } = await resend.emails.send({
      from: 'hi@elenamatay.com',
      to,
      subject,
      text,
      html,
      ...(replyTo && { replyTo }),
    });

    if (error) {
      console.error("Error sending email:", error.message);
      throw error;
    }

    console.log('Email sent successfully:', data); // Debugging statement
    return data;
  } catch (error) {
    console.error('Error in sendEmail function:', error); // Debugging statement
    throw error;
  }
};