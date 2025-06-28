'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  nome: string
  email: string
  celular: string
  assunto: string
  descricao: string
}

interface FormErrors {
  nome?: string
  email?: string
  celular?: string
  assunto?: string
  descricao?: string
}

type SubmitStatus = 'success' | 'error' | null

interface ApiResponse {
  success: boolean
  data?: {
    message: string
    id: string
  }
  error?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    celular: '',
    assunto: '',
    descricao: '',
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    if (name === 'celular') {
      const numericValue = value.replace(/\D/g, '')
      let formattedValue = numericValue

      if (numericValue.length > 0) {
        if (numericValue.length <= 2) {
          formattedValue = `(${numericValue}`
        } else if (numericValue.length <= 7) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`
        } else if (numericValue.length <= 11) {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7)}`
        } else {
          formattedValue = `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7, 11)}`
        }
      }

      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.celular.trim()) {
      newErrors.celular = 'Celular é obrigatório'
    } else {
      const numericCelular = formData.celular.replace(/\D/g, '')
      if (numericCelular.length < 10 || numericCelular.length > 11) {
        newErrors.celular = 'Celular deve ter 10 ou 11 dígitos'
      }
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = 'Assunto é obrigatório'
    }

    if (!formData.descricao.trim()) {
      newErrors.descricao = 'Descrição é obrigatória'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendEmail = async (emailData: FormData): Promise<ApiResponse> => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar email')
      }

      return { success: true, data: result }
    } catch (error: unknown) {
      console.error('Erro no envio:', error)
      const errorMessage =
        error instanceof Error ? error.message : 'Erro desconhecido'
      return { success: false, error: errorMessage }
    }
  }

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        setSubmitStatus('success')
        setFormData({
          nome: '',
          email: '',
          celular: '',
          assunto: '',
          descricao: '',
        })
      } else {
        setSubmitStatus('error')
        console.error('Erro ao enviar email:', result.error)
      }
    } catch (error: unknown) {
      setSubmitStatus('error')
      console.error('Erro inesperado:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderField = (
    id: string,
    name: keyof FormData,
    type: string = 'text',
    placeholder: string,
    isTextarea: boolean = false,
    isMobile: boolean = false,
  ) => {
    const fieldId = isMobile ? `${id}-mobile` : id
    const commonClasses = `w-full px-4 py-3 border rounded-lg outline-none focus:border-red-500 transition-colors duration-200 ${
      errors[name] ? 'border-red-500' : 'border-gray-300'
    }`

    const labelMap: Record<keyof FormData, string> = {
      nome: 'Nome',
      email: 'E-mail',
      celular: 'Celular',
      assunto: 'Assunto',
      descricao: 'Descrição',
    }

    return (
      <div>
        <label
          htmlFor={fieldId}
          className="block text-sm font-medium text-zinc-700 mb-2"
        >
          {labelMap[name]} <span className="text-red-500">*</span>
        </label>
        {isTextarea ? (
          <textarea
            id={fieldId}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            rows={6}
            className={`${commonClasses} resize-vertical`}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            id={fieldId}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required
            className={commonClasses}
            placeholder={placeholder}
            maxLength={name === 'celular' ? 15 : undefined}
          />
        )}
        {errors[name] && (
          <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
        )}
      </div>
    )
  }

  const renderForm = (isMobile: boolean = false) => (
    <div className="w-full max-w-2xl">
      <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
        {submitStatus && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              submitStatus === 'success'
                ? 'bg-green-50 border border-green-200 text-green-800'
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}
          >
            {submitStatus === 'success' ? (
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Mensagem enviada com sucesso! Retornaremos em breve.
              </div>
            ) : (
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                Erro ao enviar mensagem. Tente novamente.
              </div>
            )}
          </div>
        )}

        <div className="space-y-6">
          {renderField(
            'nome',
            'nome',
            'text',
            'Digite seu nome completo',
            false,
            isMobile,
          )}
          {renderField(
            'email',
            'email',
            'email',
            'Digite seu e-mail',
            false,
            isMobile,
          )}
          {renderField(
            'celular',
            'celular',
            'tel',
            '(00) 00000-0000',
            false,
            isMobile,
          )}
          {renderField(
            'assunto',
            'assunto',
            'text',
            'Digite o assunto da sua mensagem',
            false,
            isMobile,
          )}
          {renderField(
            'descricao',
            'descricao',
            'text',
            'Descreva sua mensagem ou dúvida',
            true,
            isMobile,
          )}

          <div className="pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-xl font-bold shadow-md transition-all duration-300 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-400 hover:bg-red-500 cursor-pointer'
              } text-zinc-50`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando...
                </div>
              ) : (
                'Enviar Mensagem'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div id="fale-conosco" className="max-w-7xl mx-auto pt-8">
        <div className="hidden lg:flex flex-col">
          <div className="flex-shrink-0 w-96 space-y-6">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">
              Fale conosco
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
          </div>

          <div className="flex justify-center">{renderForm(false)}</div>
        </div>

        <div className="lg:hidden">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">
              Fale conosco
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
          </div>

          <div className="flex justify-center">{renderForm(true)}</div>
        </div>
      </div>
    </div>
  )
}
