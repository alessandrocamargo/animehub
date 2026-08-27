import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-slate-900 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-orange-400">
          AnimeHub
        </a>

        {/* Links de navegação - visíveis em telas médias/grandes, escondidos em mobile */}
        <ul className="hidden sm:flex items-center gap-6">
          <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
          <li><a href="/anime" className="hover:text-orange-400 transition-colors">Animes</a></li>
          <li><a href="/search" className="hover:text-orange-400 transition-colors">Buscar</a></li>
          <li><a href="/favorites" className="hover:text-orange-400 transition-colors">Favoritos</a></li>
        </ul>

        {/* Botão hambúrguer - visível só em mobile */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Menu mobile expansível - só aparece quando menuOpen é true, e só em telas pequenas */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 px-4 pb-4">
          <li><a href="/" className="hover:text-orange-400 transition-colors">Home</a></li>
          <li><a href="/anime" className="hover:text-orange-400 transition-colors">Animes</a></li>
          <li><a href="/search" className="hover:text-orange-400 transition-colors">Buscar</a></li>
          <li><a href="/favorites" className="hover:text-orange-400 transition-colors">Favoritos</a></li>
        </ul>
      )}
    </header>
  )
}

export default Header