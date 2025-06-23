import Image from 'next/image'
import image1 from '@/images/projects/image1.png'
import image2 from '@/images/projects/image2.png'
import image3 from '@/images/projects/image3.png'
import image4 from '@/images/projects/image4.png'

export default function Projects() {
  const projects = [
    {
      title: 'Mães Atípicas',
      description:
        'Ser mãe atípica é aprender a lidar com adversidades, dores e medos, além de um conjunto de fatores, tais como o "eu", filhos, família, casa trabalho, relacionamentos, e por muitas vezes a falta deste. Portanto, esse projeto, em parceria com a SEBREA RJ, visa criar a possibilidade de se reinventar oferecendo cursos nos quais essas mães possam explorar novas oportunidades.',
      emoji: '👩‍👧‍👦',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      image: image1,
    },
    {
      title: 'Torcida para todos',
      description:
        'O ICPI tem como objetivo, a partir deste projeto, viabilizar a presença, e sobretudo a permanência eficaz, de pessoas com deficiência, principalmente sensoriais, em estádios, ginásios e outras unidades esportivas onde eles poderão atuar como torcedores de maneira harmonizada, podendo assim, exercer seus direitos como cidadãos.',
      emoji: '⚽',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      image: image2,
    },
    {
      title: 'Projeto Anjo',
      description:
        'O Projeto Anjo tem como propósito fazer a arrecadação de medicamentos e alimentos para doação às famílias de PCDs em situação de vulnerabilidade.',
      emoji: '😇',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      image: image3,
    },
    {
      title: 'Te Acolho',
      description:
        '​Quem cuida de quem cuida? Com esse projeto, o ICPI busca oferecer rodas de conversa, dias de beleza e redes de apoio para mães atípicas em situação de vulnerabilidade, para que, assim, elas possam resgatar confiança em si mesmas e sintam-se acolhidas.',
      emoji: '🤗',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      image: image4,
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full">
        <div className="hidden lg:flex flex-col">
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">
              Nossos Projetos
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
            <p className="text-zinc-600 leading-relaxed text-base">
              Nós acreditamos que só é possível mudar o mundo colocando a mão na
              massa para valer! Por isso, o Instituto ICPI conta efetivamente,
              por enquanto, com 4 projetos em funcionamento, todos com o
              objetivo de propagar a diversidade e a inclusão efetiva tanto de
              pessoas com deficiência quanto seus familiares na sociedade, desde
              do âmbito social até o cultural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div
                    className={`w-8 h-8 ${project.bgColor} rounded-full flex items-center justify-center mr-3`}
                  >
                    <span className={`${project.textColor} font-bold text-lg`}>
                      {project.emoji}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 leading-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl font-bold text-zinc-950 mb-2">
              Nossos Projetos
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-6"></div>
            <p className="text-zinc-600 leading-relaxed text-sm sm:text-base">
              Nós acreditamos que só é possível mudar o mundo colocando a mão na
              massa para valer! Por isso, o Instituto ICPI conta efetivamente,
              por enquanto, com 4 projetos em funcionamento, todos com o
              objetivo de propagar a diversidade e a inclusão efetiva tanto de
              pessoas com deficiência quanto seus familiares na sociedade, desde
              do âmbito social até o cultural.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-32 sm:h-48 bg-gray-200 relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center mb-3">
                  <div
                    className={`w-8 h-8 ${project.bgColor} rounded-full flex items-center justify-center mr-3`}
                  >
                    <span className={`${project.textColor} font-bold text-lg`}>
                      {project.emoji}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-950 leading-tight">
                    {project.title}
                  </h3>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
