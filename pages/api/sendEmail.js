import { sendEmail } from '../../libs/resend';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, subject, email, message } = req.body;

    try {
      const data = await sendEmail({
        to: 'elenamatay@gmail.com',
        subject: `${subject} - New Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
      });
      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}