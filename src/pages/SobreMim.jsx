import PageTitle from '../components/PageTitle';
import MatrixRain from '../components/MatrixRain';
import '../styles/SobreMim.css';

export default function SobreMim() {
  return (
    <section className="sobre-mim-section">
      <MatrixRain />
      <div className="sobre-mim-content">
        <PageTitle>Sobre Mim</PageTitle>
      </div>
    </section>
  );
}