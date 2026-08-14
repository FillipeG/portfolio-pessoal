import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
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
      <p>© 2026 Fillipe Araujo</p>
    </footer>
  );
}