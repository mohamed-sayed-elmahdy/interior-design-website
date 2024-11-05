import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { firstname, lastname, phone, city, email, typeIs, message, radio } = await request.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '',
        pass: '',
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: 'ms7237322@gmail.com', // Your email to receive the form data
      subject: 'New Form Submission',
      text: `
        Name: ${firstname} ${lastname}
        Phone: ${phone}
        City: ${city}
        Email: ${email}
        Property Type: ${typeIs}
        Area: ${radio}
        Message: ${message}
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, info }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
