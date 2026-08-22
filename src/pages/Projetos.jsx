import PageTitle from '../components/PageTitle';
import ProjectCard from '../components/ProjectCard';
import '../styles/Page.css';

const meusProjetos = [
  {
    title: "ROAD TO SEC 01/08/2026 - atual",
    description: "Repositório dedicado ao registro da minha jornada prática em Application Security (AppSec) e Security Operations (SecOps)",
    tech: ["Burp Suite,", "Web Applications,", "Docker", ""],
    link: "https://github.com/FillipeG/road-to-sec"
  },
  {
    title: "CAN DONATE 01/08/2025 - 01/12/2025",
    description: "O Can Donate é um projeto desenvolvido com o objetivo de simplificar e tornar mais segura a relação entre doadores e beneficiários. Ele surge da necessidade de criar um ambiente digital confiável e acessível, capaz de conectar pessoas dispostas a ajudar diretamente àquelas que realmente precisam de apoio. A proposta busca reduzir barreiras, eliminar intermediários desnecessários e garantir maior transparência no processo",
    tech: ["Java,", "Spring Boot,", "MySQL"],
    link: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-2-ti2-3687100-candonate.git"
  },
  {
    title: "RH MASTER 01/08/2025 - 01/12/2025",
    description: " O RHSoft é um sistema de Recursos Humanos desenvolvido com o objetivo de apoiar a gestão de pessoas em organizações, oferecendo uma solução integrada para o cadastro e administração de funcionários, processamento da folha de pagamento e gerenciamento de vagas de emprego. O sistema centraliza informações essenciais, reduz erros operacionais e promove maior eficiência e confiabilidade nos processos de RH",
    tech: ["Java,", "Spring Boot,", "MySQL"],
    link: "https://github.com/ICEI-PUC-Minas-EngSoft-PM/tp-rhsoft-rh-master.git"
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