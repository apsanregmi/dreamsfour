import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  // Email content for the admin
  const adminEmailContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #B22222;">New Contact Form Submission</h2>
      <p>Hello Admin,</p>
      <p>You have received a new message from the contact form:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Message</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
        </tr>
      </table>
      <p>Thank you!</p>
    </div>
  `;

  // Email content for the user
  const userEmailContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #B22222;">Thank You for Contacting Us</h2>
      <p>Hello ${name},</p>
      <p>Thank you for reaching out to us! We have received your message:</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>We will get back to you as soon as possible.</p>
      <p>Best regards,<br/>Dreams Four Restaurant</p>
    </div>
  `;

  try {
    // Send email to admin
    await sendgrid.send({
      to: 'itsmeapsan@gmail.com', 
      from: 'maheshregmi61@gmail.com', 
      subject: 'New Contact Form Submission',
      html: adminEmailContent,
    });

    // Send confirmation email to user
    await sendgrid.send({
      to: email,
      from: 'maheshregmi61@gmail.com', // Same verified email as above
      subject: 'Thank You for Contacting Us!',
      html: userEmailContent,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
