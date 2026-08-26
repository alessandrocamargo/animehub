function Header() {
  return (
    <header className="bg-slate-900 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-orange-400">
          AnimeHub
        </a>

        {/* Links de navegação */}
        <ul className="flex items-center gap-6">
          <li>
            <a href="/" className="hover:text-orange-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/anime" className="hover:text-orange-400 transition-colors">
              Animes
            </a>
          </li>
          <li>
            <a href="/search" className="hover:text-orange-400 transition-colors">
              Buscar
            </a>
          </li>
          <li>
            <a href="/favorites" className="hover:text-orange-400 transition-colors">
              Favoritos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;