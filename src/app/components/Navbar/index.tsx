export default function Navbar() {
  return (
    <nav className="w-full max-w-[1440px] m-auto flex justify-between items-center px-6 py-4">
      <h1>Logo</h1>

      <div>
        <ul className="flex gap-16">
          <li>Sobre</li>
          <li>Segmento</li>
          <li>Impacto Social</li>
          <li>Contato</li>
        </ul>
      </div>

      <button className="bg-red-400 py-2.5 px-3.5 rounded-2xl font-bold">
        Faça uma doação
      </button>
    </nav>
  )
}
