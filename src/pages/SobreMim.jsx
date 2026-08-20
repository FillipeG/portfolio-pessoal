import PageTitle from '../components/PageTitle';
import MatrixRain from '../components/MatrixRain';
import '../styles/SobreMim.css';

export default function SobreMim() {
  return (
    <section className="sobre-mim-section">
      <MatrixRain />
      
      <div className="sobre-mim-content">
        <PageTitle>Sobre Mim</PageTitle>

        <div className="tech-cards-container">
          
          {}
          <div className="tech-card">
            <h3> IDENTIFICAÇÃO</h3>
            <p>Nome: <span>Fillipe Araujo</span></p>
            <p>Idade: <span>20</span></p>
            <p>Formação: <span>Engenharia de Software</span></p>
            <div className="bio-box">
              <p>
                Estudante de Engenharia de Software na PUC Minas com sólida base em 
                desenvolvimento fullstack e experiência prática na construção de 
                aplicações reais. Apaixonado por Cybersecurity desde a infância, 
                atuo ativamente no desenvolvimento técnico na área por meio de cursos, 
                laboratórios práticos e CTFs, unindo a visão de desenvolvimento
                 de software com a mentalidade de segurança ofensiva e defensiva.
              </p>
            </div>
          </div>

          {}
          <div className="tech-card">
            <h3> TECH STACK</h3>
            <ul className="stack-list">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>React</li>
              <li>C</li>
              <li>C++</li>
              <li>Burp Suite</li>
              <li>Docker</li>
              <li>APIs restful</li>
            </ul>
          </div>

          {}
          <div className="tech-card">
            <h3> MINHA JORNADA</h3>
            <div className="story-content">
              <p>
                
                
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}