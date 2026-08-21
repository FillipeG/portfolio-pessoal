import PageTitle from '../components/PageTitle';
import ExperienceCarousel from '../components/ExperienceCarousel';
import '../styles/Page.css';

export default function Experiencias() {
  return (
    <section className="page-section">
      <PageTitle>Experiências</PageTitle>
      <ExperienceCarousel />
    </section>
  );
}