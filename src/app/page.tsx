import About from '@/app/components/About'
import HeroImage from './components/HeroImage'
import HowWeHelp from './components/HowWeHelp'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Container principal com padding responsivo */}
      <div className="max-w-7xl mx-auto px-6 py-16 w-full flex flex-col items-center gap-24">
        <div>
          <HeroImage />
        </div>

        {/* Seção Hero com layout responsivo */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl">
          {/* Título responsivo */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Educação inclusiva
            <br />e inovadora
          </h1>

          {/* Parágrafo responsivo */}
          <p className="text-zinc-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            <span className="hidden sm:inline">
              O Instituto Conhecer Para Incluir é uma ONG que nasceu
              <br />
              para transformar a vida das pessoas.
            </span>
            <span className="sm:hidden">
              O Instituto Conhecer Para Incluir é uma ONG que nasceu para
              transformar a vida das pessoas.
            </span>
          </p>

          {/* Botão responsivo */}
          <button className="bg-red-400 cursor-pointer hover:bg-red-500 text-zinc-50 py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-xl font-bold shadow-sm transition-colors duration-300 text-sm sm:text-base">
            Conheça nossa causa
          </button>
        </div>

        <About />

        <HowWeHelp />

        <div>Contato</div>
      </div>
    </main>
  )
}
