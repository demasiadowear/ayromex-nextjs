import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { name, email, phone, service, budget, message, contact } = body

    // contact field is used in the homepage form (email or phone)
    const replyEmail = email || (contact?.includes('@') ? contact : undefined)
    const phoneDisplay = phone || (!contact?.includes('@') ? contact : undefined)

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0f0f14;color:#e8e8ec;border-radius:12px">
        <div style="margin-bottom:24px">
          <span style="background:#FF6B35;color:#000;font-weight:700;padding:4px 12px;border-radius:6px;font-size:13px">AYROMEX</span>
          <span style="color:#FF6B35;font-weight:600;margin-left:10px;font-size:14px">Nuova richiesta preventivo</span>
        </div>

        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#999;font-size:13px;width:130px">Nome</td>
              <td style="padding:8px 0;font-weight:600">${name || '—'}</td></tr>
          <tr><td style="padding:8px 0;color:#999;font-size:13px">Email</td>
              <td style="padding:8px 0">${replyEmail || '—'}</td></tr>
          ${phoneDisplay ? `<tr><td style="padding:8px 0;color:#999;font-size:13px">Telefono</td>
              <td style="padding:8px 0">${phoneDisplay}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#999;font-size:13px">Servizio</td>
              <td style="padding:8px 0;color:#FF6B35;font-weight:600">${service || 'Non specificato'}</td></tr>
          ${budget ? `<tr><td style="padding:8px 0;color:#999;font-size:13px">Budget</td>
              <td style="padding:8px 0">${budget}</td></tr>` : ''}
        </table>

        ${message ? `
        <div style="margin-top:20px;padding:16px;background:#1a1d24;border-radius:8px;border-left:3px solid #FF6B35">
          <div style="color:#999;font-size:12px;margin-bottom:8px">MESSAGGIO</div>
          <div style="line-height:1.6">${message.replace(/\n/g, '<br>')}</div>
        </div>` : ''}

        <div style="margin-top:24px;padding-top:16px;border-top:1px solid #2a2e38;color:#555;font-size:11px">
          Inviato da <a href="https://www.ayromex.com" style="color:#FF6B35">ayromex.com</a> · ${new Date().toLocaleString('it-IT')}
        </div>
      </div>
    `

    await resend.emails.send({
      from: 'AYROMEX Sito <noreply@ayromex.com>',
      to: ['info@ayromex.com'],
      replyTo: replyEmail,
      subject: `Preventivo ${service ? `— ${service}` : ''} da ${name || 'utente'}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
