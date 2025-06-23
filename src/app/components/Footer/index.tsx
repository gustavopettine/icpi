import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-zinc-600 text-sm mr-2">Siga-nos:</span>
            <a
              href="#"
              className="text-zinc-600 hover:text-red-500 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-red-500 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-red-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-zinc-600 hover:text-red-500 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center lg:text-right">
            <p className="text-zinc-600 text-sm">
              © 2025 Instituto Conhecer para Incluir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
