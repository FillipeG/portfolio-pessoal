import { useState } from 'react';
import '../styles/ExperienceCard.css';

export default function ExperienceCard({ image, title, description, fullDescription }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="experience-card">
      <div className="experience-card__image">
        <img src={image} alt={title} />
      </div>
      <h3 className="experience-card__title">{title}</h3>
      <p className="experience-card__desc">{description}</p>

      {expanded && (
        <p className="experience-card__full">{fullDescription}</p>
      )}

      <button
        className="experience-card__btn"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Ver Menos' : 'Saiba Mais'} <span>&gt;</span>
      </button>
    </div>
  );
}