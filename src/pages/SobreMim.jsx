import PageTitle from '../components/PageTitle';
import MatrixRain from '../components/MatrixRain';
import LanguageToggle from '../components/LanguageToggle';
import { useLanguage } from '../context/LanguageContext';
import '../styles/SobreMim.css';

const content = {
  pt: {
    pageTitle: 'Sobre Mim',
    identificacao: 'IDENTIFICAÇÃO',
    nomeLabel: 'Nome:',
    nome: 'Fillipe Araujo',
    idadeLabel: 'Idade:',
    idade: '20',
    formacaoLabel: 'Formação:',
    formacao: 'Engenharia de Software',
    bio: `Estudante de Engenharia de Software na PUC Minas com sólida base em 
      desenvolvimento fullstack e experiência prática na construção de 
      aplicações reais. Apaixonado por Cybersecurity desde a infância, 
      atuo ativamente no desenvolvimento técnico na área por meio de cursos, 
      laboratórios práticos e CTFs, unindo a visão de desenvolvimento
      de software com a mentalidade de segurança ofensiva e defensiva.`,
    techStack: 'TECH STACK',
    jornada: 'MINHA JORNADA',
    jornadaTexto: `Estudante de Engenharia de Software na PUC Minas, com experiência 
      prática em desenvolvimento fullstack e um ano de imersão internacional nos EUA. 
      Venho me aprofundando por conta própria em Segurança da Informação: cursos, 
      labs e CTFs, unindo a vivência de quem desenvolve à capacidade de identificar 
      e corrigir vulnerabilidades. Interesse particular em AppSec e SecOps.`,
  },
  en: {
    pageTitle: 'About Me',
    identificacao: 'IDENTIFICATION',
    nomeLabel: 'Name:',
    nome: 'Fillipe Araujo',
    idadeLabel: 'Age:',
    idade: '20',
    formacaoLabel: 'Education:',
    formacao: 'Software Engineering',
    bio: `Software Engineering student at PUC Minas with a solid foundation in 
      fullstack development and hands-on experience building real-world 
      applications. Passionate about Cybersecurity since childhood, 
      I actively work on the technical side of the field through courses, 
      hands-on labs, and CTFs, combining a development mindset with 
      offensive and defensive security thinking.`,
    techStack: 'TECH STACK',
    jornada: 'MY JOURNEY',
    jornadaTexto: `Software Engineering student at PUC Minas, with hands-on 
      fullstack development experience and a year of international immersion 
      in the US. I've been diving deeper into Information Security on my own: 
      courses, labs, and CTFs, combining a developer's perspective with the 
      ability to identify and fix vulnerabilities. Particular interest in 
      AppSec and SecOps.`,
  },
};

export default function SobreMim() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="sobre-mim-section">
      <MatrixRain />
      <LanguageToggle />
      
      <div className="sobre-mim-content">
        <PageTitle>{t.pageTitle}</PageTitle>

        <div className="tech-cards-container">
          
          <div className="tech-card">
            <h3>{t.identificacao}</h3>
            <p>{t.nomeLabel} <span>{t.nome}</span></p>
            <p>{t.idadeLabel} <span>{t.idade}</span></p>
            <p>{t.formacaoLabel} <span>{t.formacao}</span></p>
            <div className="bio-box">
              <p>{t.bio}</p>
            </div>
          </div>

          <div className="tech-card">
            <h3>{t.techStack}</h3>
            <ul className="stack-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>React</li>
              <li>C</li>
              <li>C++</li>
              <li>Burp Suite</li>
              <li>Docker</li>
              <li>APIs RESTful</li>
            </ul>
          </div>

          <div className="tech-card">
            <h3>{t.jornada}</h3>
            <div className="story-content">
              <p>{t.jornadaTexto}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}