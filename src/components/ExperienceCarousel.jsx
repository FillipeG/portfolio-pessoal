import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ExperienceCard from './ExperienceCard';
import '../styles/ExperienceCarousel.css';

const experiencias = [
  {
    title: 'Azapfy',
    description: 'Infraestrutura ',
    fullDescription:
      'Atuação na área de infraestrutura na Azapfy, contribuindo com a manutenção e o suporte dos ambientes da plataforma, com atenção a boas práticas de segurança e estabilidade dos sistemas.',
    image: '/src/assets/azapfyy.png',
  },
  {
    title: 'Amabilis Controle',
    description: 'Desenvolvedor Fullstack',
    fullDescription:
      'Sistema de gestão desenvolvido para uma construtora, com estrutura hierárquica de recursos e tarefas, dashboards, mapas de obras e emissão automática/manual de notas fiscais.',
    image: '/src/assets/amabilislogo.png',
  },
  {
    title: 'Projetos Semestrais — PUC Minas',
    description: 'Ciclo completo de desenvolvimento fullstack',
    fullDescription:
      'Participação em projetos semestrais baseados em problemas reais, cobrindo levantamento de requisitos, modelagem, prototipação e implementação. Destaques: RH Master, CanDonate e MoveWave.',
    image: '/src/assets/puclogo.png',
  },
  {
    title: 'Segurança da Informação',
    description: 'Estudos autônomos em AppSec e SecOps',
    fullDescription:
      'Formação complementar através da PortSwigger Web Security Academy (OWASP Top 10, Burp Suite), CTFs e labs práticos, unindo a vivência como desenvolvedor à identificação e correção de vulnerabilidades.',
    image: '/src/assets/cyberlogo.png',
  },
];

const PER_PAGE = 2;

export default function ExperienceCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(experiencias.length / PER_PAGE);

  function prevPage() {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  }

  function nextPage() {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  }

  const visible = experiencias.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <div className="experience-carousel">
      <button className="experience-carousel__arrow" onClick={prevPage} aria-label="Anterior">
        <FaChevronLeft />
      </button>

      <div className="experience-carousel__cards">
        {visible.map((exp) => (
          <ExperienceCard key={exp.title} {...exp} />
        ))}
      </div>

      <button className="experience-carousel__arrow" onClick={nextPage} aria-label="Próximo">
        <FaChevronRight />
      </button>
    </div>
  );
}