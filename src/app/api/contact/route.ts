import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, subject, message } = body ?? {};

    if (!firstName || !lastName || !email || !company || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // TODO: integrate with email provider or CRM here.
    // For now, we simply echo received data and respond OK.
    return NextResponse.json({ message: 'Message received' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
