import Image from 'next/image'

export default function HowWeHelp() {
  const services = [
    {
      title: 'Desenvolvimento pessoal',
      description: 'Possibilitando mudança de vida para mães atípicas',
      emoji: '💪',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Capacitação',
      description:
        'Capacitando empresas e preparando pessoas com deficiência para o mercado de trabalho.',
      emoji: '🎓',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Ações socias',
      description:
        'Promovendo atividades beneficentes e ações com deficiência através de um grupo de vulnerabilidade.',
      emoji: '🤝',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Cursos, workshops e palestras',
      description: 'Espalhando conhecimento para a sociedade.',
      emoji: '📚',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Educação inclusiva',
      description:
        'Ofertando um método de aprendizagem individualizada e apoiada.',
      emoji: '🌟',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      image: '/api/placeholder/400/300',
    },
    {
      title: 'Pesquisa',
      description:
        'Buscando inovação, ampliando o objetivo de melhorar a qualidade de vida, incluindo a ciência das PcD.',
      emoji: '🔬',
      bgColor: 'bg-cyan-100',
      textColor: 'text-cyan-600',
      image: '/api/placeholder/400/300',
    },
  ]

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col">
          {/* Seção Como Ajudamos - Desktop */}
          <div className="flex-shrink-0 w-96 space-y-6">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">
              Como ajudamos
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
          </div>

          {/* Cards - Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-8 h-8 ${service.bgColor} rounded-full flex items-center justify-center mr-3`}
                  >
                    <span className={`${service.textColor} font-bold text-lg`}>
                      {service.emoji}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Seção Como Ajudamos - Mobile */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">
              Como ajudamos
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
          </div>

          {/* Cards - Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-8 h-8 ${service.bgColor} rounded-full flex items-center justify-center mr-3`}
                  >
                    <span className={`${service.textColor} font-bold text-lg`}>
                      {service.emoji}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 leading-tight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
