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
            <p>Nome: <span></span></p>
            <p>Idade: <span></span></p>
            <p>Formação: <span></span></p>
            <div className="bio-box">
              <p>
                []
              </p>
            </div>
          </div>

          {}
          <div className="tech-card">
            <h3> TECH STACK</h3>
            <ul className="stack-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
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