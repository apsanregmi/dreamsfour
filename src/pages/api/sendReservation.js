import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// console.log(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    eventDate,
    eventStartTime,
    numberOfGuests,
    typeOfEvent,
    additionalComments,
  } = req.body;

  const formattedDate = new Date(eventDate).toLocaleDateString();

  const adminEmailContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #B22222;">New Reservation Request</h2>
    <p>Hello Admin,</p>
    <p>You have received a new reservation request with the following details:</p>
    <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 10px;">
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phoneNumber}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Event Date:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formattedDate}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Start Time:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${eventStartTime}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Guests:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${numberOfGuests}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Event Type:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${typeOfEvent}</td>
      </tr>
      <tr>
        <td style="padding: 8px;"><strong>Additional Comments:</strong></td>
        <td style="padding: 8px;">${additionalComments}</td>
      </tr>
    </table>
    <p style="margin-top: 20px;">Best regards,</p>
    <p style="color: #B22222;">Your Restaurant Team</p>
  </div>
`;
const userEmailContent = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h2 style="color: #B22222;">Reservation Confirmation</h2>
    <p>Dear ${firstName} ${lastName},</p>
    <p>We are delighted to confirm your reservation at our restaurant! Here are your reservation details:</p>
    <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 10px;">
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Event Date:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${formattedDate}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Start Time:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${eventStartTime}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Guests:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${numberOfGuests}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Event Type:</strong></td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${typeOfEvent}</td>
      </tr>
    </table>
    <p style="margin-top: 20px;">We look forward to making your event memorable. If you have any further questions, please feel free to reach out.</p>
    <p>Warm regards,</p>
    <p style="color: #B22222;">Your Restaurant Team</p>
  </div>
`;

  try {
    // Send email to admin
    await sendgrid.send({
      to: 'maheshregmi61@gmail.com',
      from: 'maheshregmi61@gmail.com',
      subject: 'New Reservation Request',
      html: adminEmailContent,
    });

    // Send confirmation email to user
    await sendgrid.send({
      to: email,
      from: 'maheshregmi61@gmail.com',
      subject: 'Reservation Confirmation',
      html: userEmailContent,
    });

    res.status(200).json({ success: true, message: 'Emails sent successfully!' });
    console.log(userEmailContent)


    
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
}
