'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type NavItem =
  | { label: string; route: string; isRoute: true }
  | { label: string; targetId: string; isRoute: false }

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const router = useRouter()

  const navItems: NavItem[] = [
    { label: 'Início', route: '/', isRoute: true },
    { label: 'Sobre', targetId: 'sobre', isRoute: false },
    { label: 'Como ajudamos', targetId: 'como-ajudamos', isRoute: false },
    { label: 'Fale conosco', targetId: 'fale-conosco', isRoute: false },
    { label: 'Projetos', route: '/projetos', isRoute: true },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMobileItemClick = () => {
    setIsMenuOpen(false)
  }

  const handleScrollLinkClick = (targetId: string) => {
    router.push(`/#${targetId}`)
  }

  return (
    <nav className="w-full max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative z-40">
      <h1 className="text-xl font-bold text-zinc-950">
        <Link href={'/'}>Logo</Link>
      </h1>

      <div className="hidden lg:block">
        <ul className="flex gap-8 xl:gap-16">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative text-zinc-600 hover:text-zinc-950 cursor-pointer transition-colors duration-300 py-1 group"
            >
              {item.isRoute ? (
                <Link href={item.route}>{item.label}</Link>
              ) : (
                <span onClick={() => handleScrollLinkClick(item.targetId)}>
                  {item.label}
                </span>
              )}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300"></div>
            </li>
          ))}
        </ul>
      </div>

      <button className="hidden lg:block cursor-pointer bg-red-400 hover:bg-red-500 text-zinc-50 py-3 px-4 rounded-xl font-bold shadow-md transition-colors duration-300">
        Faça uma doação
      </button>

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

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-zinc-100 transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="px-6 py-6 space-y-6">
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  handleMobileItemClick()
                  if (!item.isRoute) {
                    handleScrollLinkClick(item.targetId)
                  }
                }}
                className={`cursor-pointer transition-colors duration-300 py-2 text-zinc-600 hover:text-zinc-950 ${
                  item.label !== 'Projetos' ? 'border-b border-zinc-100' : ''
                }`}
              >
                {item.isRoute ? (
                  <Link href={item.route}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </li>
            ))}
          </ul>

          <button className="w-full cursor-pointer bg-red-400 hover:bg-red-500 text-zinc-50 py-3 px-4 rounded-xl font-bold shadow-md transition-colors duration-300">
            Faça uma doação
          </button>
        </div>
      </div>
    </nav>
  )
}
