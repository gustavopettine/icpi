import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  nome: string
  email: string
  celular: string
  assunto: string
  descricao: string
}

interface ApiError {
  error: string
}

interface ApiSuccess {
  message: string
  id: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(
  request: NextRequest,
): Promise<NextResponse<ApiSuccess | ApiError>> {
  try {
    const body: ContactFormData = await request.json()
    const { nome, email, celular, assunto, descricao } = body

    if (!nome || !email || !celular || !assunto || !descricao) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 },
      )
    }

    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }

    const celularNumerico: string = celular.replace(/\D/g, '')
    if (celularNumerico.length < 10 || celularNumerico.length > 11) {
      return NextResponse.json({ error: 'Celular inválido' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'Instituto Conhecer para Incluir <onboarding@resend.dev>',
      to: ['gustavopettine20@gmail.com'],
      subject: `${assunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #ef4444; padding-bottom: 10px;">
            Nova Mensagem de Contato
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nome:</strong> ${nome}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Celular:</strong> ${celular}</p>
            <p style="margin: 10px 0;"><strong>Assunto:</strong> ${assunto}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Mensagem:</h3>
            <div style="background-color: #fff; padding: 20px; border-left: 4px solid #ef4444; border-radius: 4px;">
              ${descricao.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            Esta mensagem foi enviada através do formulário de contato do seu site.
          </p>
        </div>
      `,
      replyTo: email,
    })

    if (error) {
      console.error('Erro do Resend:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar email. Tente novamente.' },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        message: 'Email enviado com sucesso!',
        id: data?.id || 'unknown',
      },
      { status: 200 },
    )
  } catch (error: unknown) {
    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 },
    )
  }
}
