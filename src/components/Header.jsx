import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" end className="nav-link">Sobre Mim</NavLink>
        <NavLink to="/projetos" className="nav-link">Projetos</NavLink>
        <NavLink to="/experiencias" className="nav-link">Experiências</NavLink>
        <NavLink to="/contato" className="nav-link">Contato</NavLink>
      </nav>

      <div className="socials">
        <a href="https://linkedin.com/in/fillipeg-ca" target="_blank" rel="noreferrer">
          <FaLinkedin size={20} />
        </a>
        <a href="https://instagram.com/fillipeeg" target="_blank" rel="noreferrer">
          <FaInstagram size={20} />
        </a>
        <a href="https://github.com/FillipeG" target="_blank" rel="noreferrer">
          <FaGithub size={20} />
        </a>
      </div>
    </header>
  );
}