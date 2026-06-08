import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/** Escape user input to prevent XSS in HTML email templates */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Admin email that receives all inquiry notifications
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@pragyaan.in';
// The "from" address - must use a verified Resend domain
const FROM_EMAIL = process.env.FROM_EMAIL || 'Pragyan Inquiry <onboarding@resend.dev>';

// ── RATE LIMITING STATE ───────────────────────────────────────────────
// Note: In-memory map for basic rate limiting. Resets on server restart.
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, countryCode, service, message } = body;

    // ── RATE LIMITING LOGIC ─────────────────────────────────────────────
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown-ip';
    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, lastRequest: now };

    if (now - rateData.lastRequest > RATE_LIMIT_WINDOW_MS) {
      rateData.count = 1;
      rateData.lastRequest = now;
    } else {
      rateData.count++;
    }
    rateLimitMap.set(ip, rateData);

    if (rateData.count > MAX_REQUESTS) {
      return NextResponse.json({ error: 'Too many requests from this IP. Please try again in an hour.' }, { status: 429 });
    }

    // ── SERVER-SIDE VALIDATION ──────────────────────────────────────────
    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (name.length > 100) {
      return NextResponse.json({ error: 'Name is too long (max 100 chars).' }, { status: 400 });
    }

    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (email.length > 100) {
      return NextResponse.json({ error: 'Email is too long (max 100 chars).' }, { status: 400 });
    }

    if (!phone?.trim()) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }
    if (phone.length > 20) {
      return NextResponse.json({ error: 'Phone number is too long.' }, { status: 400 });
    }

    if (!service?.trim()) {
      return NextResponse.json({ error: 'Please select a service.' }, { status: 400 });
    }
    if (service.length > 50) {
      return NextResponse.json({ error: 'Invalid service selection.' }, { status: 400 });
    }

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
    }
    if (message.length > 2000) {
      return NextResponse.json({ error: 'Message is too long (max 2000 characters).' }, { status: 400 });
    }

    const fullPhone = `${countryCode || '+91'} ${phone}`.trim();
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    // ── HTML EMAIL TEMPLATE ─────────────────────────────────────────────
    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry — Pragyan</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #f4f4f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #18181b; }
    .wrapper { max-width: 560px; margin: 32px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: #0b0b0f; padding: 32px 36px; }
    .header-logo { font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; }
    .header-subtitle { font-size: 12px; color: #71717a; margin-top: 4px; letter-spacing: 0.1em; text-transform: uppercase; }
    .accent-bar { height: 4px; background: linear-gradient(90deg, #161245 0%, #4B3FD4 60%, #786CF0 100%); }
    .body { padding: 32px 36px; }
    .title { font-size: 20px; font-weight: 700; color: #0b0b0f; margin-bottom: 4px; }
    .meta { font-size: 12px; color: #a1a1aa; margin-bottom: 28px; }
    .field { margin-bottom: 18px; }
    .label { font-size: 11px; font-weight: 600; color: #71717a; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #18181b; font-weight: 500; line-height: 1.5; }
    .service-badge { display: inline-block; background: linear-gradient(90deg, #161245 0%, #4B3FD4 100%); color: #ffffff; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 100px; letter-spacing: 0.04em; }
    .message-box { background: #f4f4f5; border-radius: 8px; padding: 16px; font-size: 14px; color: #3f3f46; line-height: 1.7; white-space: pre-wrap; }
    .divider { border: none; border-top: 1px solid #e4e4e7; margin: 20px 0; }
    .footer { padding: 20px 36px 28px; background: #fafafa; font-size: 11px; color: #a1a1aa; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <div class="header-logo">
        <img src="https://www.mypragyan.com/assets/img/Header-logo.webp" alt="Pragyan" width="160" height="80" style="display:block; object-fit: contain;" />
      </div>
    </div>
    <div class="accent-bar"></div>
    <div class="body">
      <div class="title">New Inquiry Received</div>
      <div class="meta">Submitted on ${submittedAt} IST</div>

      <div class="field">
        <div class="label">Name</div>
        <div class="value">${escapeHtml(name)}</div>
      </div>
      <hr class="divider" />

      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${escapeHtml(email)}" style="color:#4B3FD4;text-decoration:none;">${escapeHtml(email)}</a></div>
      </div>
      <hr class="divider" />

      <div class="field">
        <div class="label">Phone</div>
        <div class="value">${escapeHtml(fullPhone)}</div>
      </div>
      <hr class="divider" />

      <div class="field">
        <div class="label">Service Interested In</div>
        <div class="value"><span class="service-badge">${escapeHtml(service)}</span></div>
      </div>
      <hr class="divider" />

      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${escapeHtml(message)}</div>
      </div>
    </div>
    <div class="footer">
      This email was generated automatically from the inquiry form at www.mypragyan.com.<br />
      Reply directly to this email to respond to the lead.
    </div>
  </div>
</body>
</html>
    `.trim();

    // ── SEND EMAIL VIA RESEND ───────────────────────────────────────────
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      replyTo: email,
      subject: `New Inquiry from ${name} — ${service}`,
      html: htmlBody,
    });

    if (error) {
      console.error('[Resend error]', error);
      return NextResponse.json(
        { error: 'Failed to send your inquiry. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err: unknown) {
    console.error('[API /contact error]', err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}
