import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    eventDate,
    startTime,
    guests,
    eventType,
    additionalMessage,
  } = req.body;

  const formattedDate = new Date(eventDate).toLocaleDateString();
  
  // Email content for the admin
  const adminEmailContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #B22222;">Dreams Four Restaurant - New Reservation Request</h2>
      <p>Hello Admin,</p>
      <p>You have received a new reservation request with the following details:</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Customer Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${firstName} ${lastName}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Date</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formattedDate}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Time</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${startTime}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Number of Guests</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${guests}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Event Type</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${eventType}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Additional Message</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${additionalMessage || "N/A"}</td>
        </tr>
      </table>
      <p>Thank you!</p>
    </div>
  `;

  // Email content for the customer
  const userEmailContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <div style="text-align: center;">
        <img src="https://dreamsfour-6q22a8vdl-cloudpro1.vercel.app/assets/images/logo/Asset2.svg" alt="Dreams Four Restaurant" style="width: 150px; margin-bottom: 20px;">
      </div>
      <h2 style="color: #B22222; text-align: center;">Reservation Confirmation</h2>
      <p style="text-align: center;">Thank you, ${firstName} ${lastName}, for choosing Dreams Four Restaurant!</p>
      <p style="text-align: center;">Here are the details of your reservation:</p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Date</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${formattedDate}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Time</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${startTime}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Number of Guests</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${guests}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Event Type</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${eventType}</td>
        </tr>
        <tr>
          <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Special Requests</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${additionalMessage || "N/A"}</td>
        </tr>
      </table>
      <p style="text-align: center;">We look forward to serving you a delightful dining experience!</p>
      <div style="background-color: #B22222; color: #fff; padding: 10px; text-align: center; border-radius: 4px; margin-top: 20px;">
        <p style="margin: 0;">If you have any questions, feel free to call us at (123) 456-7890.</p>
      </div>
    </div>
  `;

  try {
    // Send email to admin
    await sendgrid.send({
      to: 'itsmeapsan@gmail.com', // Admin email address
      from: 'maheshregmi61@gmail.com', // Must be a verified email on SendGrid
      subject: 'New Reservation Request - Dreams Four Restaurant',
      html: adminEmailContent,
    });

    // Send confirmation email to user
    await sendgrid.send({
      to: email,
      from: 'maheshregmi61@gmail.com', // Same verified email as above
      subject: 'Your Reservation at Dreams Four Restaurant is Confirmed!',
      html: userEmailContent,
    });

    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
