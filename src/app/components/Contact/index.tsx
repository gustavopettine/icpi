'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    descricao: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    console.log('Dados do formulário:', formData)
    // Aqui você pode adicionar a lógica para enviar o formulário
  }

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="hidden lg:flex flex-col">
          <div className="flex-shrink-0 w-96 space-y-6">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">
              Fale conosco
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Digite seu e-mail"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="assunto"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Assunto <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Digite o assunto da sua mensagem"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="descricao"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Descrição <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="descricao"
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200 resize-vertical"
                      placeholder="Descreva sua mensagem ou dúvida"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full cursor-pointer bg-red-400 hover:bg-red-500 text-zinc-50 py-3 px-4 rounded-xl font-bold shadow-md transition-colors duration-300"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">
              Fale conosco
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="nome-mobile"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Nome <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nome-mobile"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-mobile"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email-mobile"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Digite seu e-mail"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="assunto-mobile"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Assunto <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="assunto-mobile"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200"
                      placeholder="Digite o assunto da sua mensagem"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="descricao-mobile"
                      className="block text-sm font-medium text-zinc-700 mb-2"
                    >
                      Descrição <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="descricao-mobile"
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors duration-200 resize-vertical"
                      placeholder="Descreva sua mensagem ou dúvida"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full cursor-pointer bg-red-400 hover:bg-red-500 text-zinc-50 py-3 px-4 rounded-xl font-bold shadow-md transition-colors duration-300"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
