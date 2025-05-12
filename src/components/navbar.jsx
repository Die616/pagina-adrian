import logo from '../assets/logo-1.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/sobre-mi' },
    { label: 'Especialidades', path: '/especialidades' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo Dr. Adrián" className="h-24 w-auto" />
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative group transition-colors duration-300 ${isActive ? 'text-[#4FC3F7] font-semibold' : 'text-[#0D47A1] hover:text-[#4FC3F7]'}`}
              >
                {link.label}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-[#4FC3F7] transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
