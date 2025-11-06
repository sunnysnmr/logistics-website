import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Email content for admin/owner(s)
    // Support multiple emails separated by commas
    const ownerEmails = process.env.EMAIL_TO || process.env.EMAIL_USER;
    
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: ownerEmails, // Can be single or multiple emails (comma-separated)
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #1e293b 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 0;">Contact Details</h2>
            
            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong style="color: #475569; display: inline-block; width: 140px;">Name:</strong> <span style="color: #1e293b;">${name}</span></p>
              <p style="margin: 10px 0;"><strong style="color: #475569; display: inline-block; width: 140px;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
              ${phone ? `<p style="margin: 10px 0;"><strong style="color: #475569; display: inline-block; width: 140px;">Phone:</strong> <span style="color: #1e293b;">${phone}</span></p>` : ''}
              ${company ? `<p style="margin: 10px 0;"><strong style="color: #475569; display: inline-block; width: 140px;">Company:</strong> <span style="color: #1e293b;">${company}</span></p>` : ''}
              ${service ? `<p style="margin: 10px 0;"><strong style="color: #475569; display: inline-block; width: 140px;">Service Interest:</strong> <span style="color: #1e293b;">${service}</span></p>` : ''}
            </div>

            <h2 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-top: 30px;">Message</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <p style="color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px;">
              <p style="margin: 0;">This email was sent from your website's contact form</p>
              <p style="margin: 5px 0 0 0;">Received on ${new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' })}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Email content for customer (auto-reply)
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us - On Globe Console',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e40af 0%, #1e293b 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Us!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <p style="color: #334155; line-height: 1.6; font-size: 16px;">Dear ${name},</p>
            
            <p style="color: #334155; line-height: 1.6;">Thank you for reaching out to On Globe Console. We have received your message and our team will get back to you within 24 hours.</p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e293b; margin-top: 0;">Your Submission Summary:</h3>
              <p style="color: #475569; margin: 5px 0;"><strong>Name:</strong> ${name}</p>
              <p style="color: #475569; margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              ${service ? `<p style="color: #475569; margin: 5px 0;"><strong>Service Interest:</strong> ${service}</p>` : ''}
              <p style="color: #475569; margin: 10px 0 5px 0;"><strong>Message:</strong></p>
              <p style="color: #334155; line-height: 1.6; margin: 5px 0; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="color: white; margin: 0 0 10px 0; font-size: 14px;">Need immediate assistance?</p>
              <p style="color: white; margin: 0; font-size: 18px; font-weight: bold;">📞 +60 3-1234 5678</p>
              <p style="color: white; margin: 10px 0 0 0; font-size: 14px;">📧 info@onglobeconsole.com</p>
            </div>

            <p style="color: #334155; line-height: 1.6;">Best regards,<br><strong style="color: #1e293b;">On Globe Console Team</strong></p>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #64748b; font-size: 12px;">
              <p style="margin: 0;">On Globe Console - Your Trusted Logistics Partner</p>
              <p style="margin: 5px 0 0 0;">123 Jalan Logistics, Petaling Jaya, Selangor 46000, Malaysia</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}