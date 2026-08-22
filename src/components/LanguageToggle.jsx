import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageToggle.css';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Switch language"
    >
      <span className={`lang-option ${language === 'pt' ? 'active' : ''}`}>PT</span>
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
      <span className={`toggle-slider ${language === 'en' ? 'slide-right' : ''}`} />
    </button>
  );
}