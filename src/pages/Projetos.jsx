import PageTitle from '../components/PageTitle';
import ProjectCard from '../components/ProjectCard';
import '../styles/Page.css';

const meusProjetos = [
  {
    title: "ROAD TO SEC",
    description: "Repositório dedicado ao registro da minha jornada prática em Application Security (AppSec) e Security Operations (SecOps)",
    tech: ["Burp Suite", "Web Applications", "Docker", ""],
    link: "https://github.com/FillipeG/road-to-sec"
  },
  {
    title: "CAN DONATE",
    description: "...",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/FillipeG"
  },
  {
    title: "RH MASTER",
    description: "...",
    tech: ["..."],
    link: "https://github.com/FillipeG"
  }
];

export default function Projetos() {
  return (
    <section className="page-section">
      <div className="content-container">
        <PageTitle>Projetos</PageTitle>
        
        <div className="projects-grid">
          {meusProjetos.map((projeto, index) => (
            <ProjectCard 
              key={index}
              title={projeto.title}
              description={projeto.description}
              tech={projeto.tech}
              link={projeto.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}