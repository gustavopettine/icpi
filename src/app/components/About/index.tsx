export default function About() {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between gap-20 items-start">
          {/* Seção Sobre - Desktop */}
          <div className="flex-shrink-0 w-96 space-y-6">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">Sobre</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
            <p className="text-zinc-600 leading-relaxed text-base">
              O ICPI é um Instituto sem fins lucrativos, comprometida com a
              promoção da inclusão social, cultural, educacional, científica e
              artística de pessoas com deficiência. Nossa missão é desenvolver
              projetos e atividades voltados para a quebra de barreiras que
              limitam o desenvolvimento de pessoas com deficiência, sejam elas
              física, visual, auditiva, intelectual, psicossocial, sensorial e
              múltipla, bem como oferecer suporte a seus familiares e
              responsáveis. Acreditamos na valorização da diversidade e buscamos
              construir um mundo inclusivo para todos por meio de ações pautadas
              na ciência e educação. Almejamos transformar vidas e fomentar o
              crescimento pessoal e coletivo.
            </p>
          </div>

          {/* Cards - Desktop */}
          <div className="flex-1">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Card Missão */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-lg">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">Missão</h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Desenvolver e compartilhar projetos de educação criativa e
                  inovadora que transformam a sociedade.
                </p>
              </div>

              {/* Card Visão */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-zinc-600 font-bold text-lg">👁️</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">Visão</h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Ser referência em educação, empreendedorismo e eventos
                  criativos por meio do aprendizado inovador.
                </p>
              </div>

              {/* Card Valores - Ocupa 2 colunas no desktop */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 xl:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600 font-bold text-lg">
                      ⭐
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950">Valores</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-zinc-600 text-sm">
                      Sustentabilidade
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-zinc-600 text-sm">
                      Ética, respeito e honestidade
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-zinc-600 text-sm">
                      Qualidade efetiva
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-zinc-600 text-sm">
                      Colaboração, comprometimento e união
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-zinc-600 text-sm">
                      Criatividade e inovação
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-zinc-600 text-sm">
                      Conhecimento e aprendizagem qualitativa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden space-y-12">
          {/* Seção Sobre - Mobile */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">Sobre</h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
            <p className="text-zinc-600 leading-relaxed text-base">
              O ICPI é um Instituto sem fins lucrativos, comprometida com a
              promoção da inclusão social, cultural, educacional, científica e
              artística de pessoas com deficiência. Nossa missão é desenvolver
              projetos e atividades voltados para a quebra de barreiras que
              limitam o desenvolvimento de pessoas com deficiência, sejam elas
              física, visual, auditiva, intelectual, psicossocial, sensorial e
              múltipla, bem como oferecer suporte a seus familiares e
              responsáveis. Acreditamos na valorização da diversidade e buscamos
              construir um mundo inclusivo para todos por meio de ações pautadas
              na ciência e educação. Almejamos transformar vidas e fomentar o
              crescimento pessoal e coletivo.
            </p>
          </div>

          {/* Cards - Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Missão */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold text-lg">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-950">Missão</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Desenvolver e compartilhar projetos de educação criativa e
                inovadora que transformam a sociedade.
              </p>
            </div>

            {/* Card Visão */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-zinc-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-zinc-600 font-bold text-lg">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-950">Visão</h3>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Ser referência em educação, empreendedorismo e eventos criativos
                por meio do aprendizado inovador.
              </p>
            </div>

            {/* Card Valores - Mobile */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-600 font-bold text-lg">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-950">Valores</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-zinc-600 text-sm">
                    Sustentabilidade
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-zinc-600 text-sm">
                    Ética, respeito e honestidade
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-zinc-600 text-sm">
                    Qualidade efetiva
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-zinc-600 text-sm">
                    Colaboração, comprometimento e união
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-zinc-600 text-sm">
                    Criatividade e inovação
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-zinc-600 text-sm">
                    Conhecimento e aprendizagem qualitativa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
