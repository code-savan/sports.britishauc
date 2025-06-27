import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const ADMIN_EMAILS = ['sports@britishauc.com', 'collins@britishauc.com'];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { userEmail, userName, eventTitle, ...formFields } = data;

    // Compose admin email content
    const adminSubject = `New Registration for ${eventTitle}`;
    const adminHtml = `
      <h2>New Registration for <b>${eventTitle}</b></h2>
      <p><b>Submitted by:</b> ${userName} (${userEmail})</p>
      <h3>Form Details:</h3>
      <ul>
        ${Object.entries(formFields)
          .map(([key, value]) => `<li><b>${key}:</b> ${value}</li>`)
          .join('')}
      </ul>
    `;

    // Send to admins
    await resend.emails.send({
      from: 'British AUC Sport <collins@britishauc.com>',
      to: ADMIN_EMAILS,
      subject: adminSubject,
      html: adminHtml,
    });

    // Compose user confirmation email
    const userSubject = `Your registration for ${eventTitle} was received`;
    const userHtml = `
      <h2>Thank you for registering for ${eventTitle}!</h2>
      <p>We have received your submission and will be in touch soon.</p>
      <p>British AUC Sport Team</p>
    `;

    await resend.emails.send({
      from: 'British AUC Sport <collins@britishauc.com>',
      to: userEmail,
      subject: userSubject,
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
