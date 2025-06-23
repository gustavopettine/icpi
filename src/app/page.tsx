import About from '@/app/components/About'
import HeroImage from './components/HeroImage'
import HowWeHelp from './components/HowWeHelp'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full flex flex-col gap-24">
        <HeroImage />

        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Educação inclusiva
            <br />e inovadora
          </h1>

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

          <button className="bg-red-400 cursor-pointer hover:bg-red-500 text-zinc-50 py-3 px-4 rounded-xl font-bold shadow-sm transition-colors duration-300">
            Conheça nossa causa
          </button>
        </div>

        <About />

        <HowWeHelp />

        <Contact />
      </div>
    </main>
  )
}
