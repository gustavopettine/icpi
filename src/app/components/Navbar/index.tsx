'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMobileItemClick = () => {
    setIsMenuOpen(false) // Fecha o menu mobile ao clicar
  }

  return (
    <nav className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
      {/* Logo */}
      <h1 className="text-xl font-bold text-zinc-950">Logo</h1>

      {/* Menu Desktop */}
      <div className="hidden lg:block">
        <ul className="flex gap-8 xl:gap-16">
          {['Sobre', 'Segmento', 'Impacto Social', 'Contato'].map((item) => (
            <li
              key={item}
              className="relative text-zinc-600 hover:text-zinc-950 cursor-pointer transition-colors duration-300 py-1 group"
            >
              {item}
              {/* Linha aparece apenas no hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300"></div>
            </li>
          ))}
        </ul>
      </div>

      {/* Botão Doação Desktop */}
      <button className="hidden lg:block cursor-pointer bg-red-400 hover:bg-red-500 text-zinc-50 py-2.5 px-3.5 rounded-xl font-bold shadow-md transition-colors duration-300">
        Faça uma doação
      </button>

      {/* Botão Menu Hambúrguer Mobile */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-zinc-950 transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-zinc-950 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-zinc-950 transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Menu Mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-zinc-100 transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          <ul className="space-y-4">
            {['Sobre', 'Segmento', 'Impacto Social', 'Contato'].map((item) => (
              <li
                key={item}
                onClick={handleMobileItemClick}
                className={`cursor-pointer transition-colors duration-300 py-2 text-zinc-600 hover:text-zinc-950 ${
                  item !== 'Contato' ? 'border-b border-zinc-100' : ''
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Botão Doação Mobile */}
          <button className="w-full cursor-pointer bg-red-400 hover:bg-red-500 text-zinc-50 py-3 px-4 rounded-xl font-bold shadow-md transition-colors duration-300">
            Faça uma doação
          </button>
        </div>
      </div>
    </nav>
  )
}
