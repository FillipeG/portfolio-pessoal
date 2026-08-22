import React from 'react';
import '../styles/ProjectCard.css';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="terminal-card">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="btn close"></span>
          <span className="btn minimize"></span>
          <span className="btn maximize"></span>
        </div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-body">
        <p className="command">
          <span className="prompt">user@portfolio:~$</span> cat description.txt
        </p>
        <p className="output">{description}</p>
        
        <p className="command">
          <span className="prompt">user@portfolio:~$</span> ls ./technologies
        </p>
        <p className="output tech-list">
          {tech.map((item, index) => (
            <span key={index} className="tech-item">{item}</span>
          ))}
        </p>

        <a href={link} target="_blank" rel="noopener noreferrer" className="terminal-link">
          [ Acessar Repositório ]
        </a>
        <span className="cursor"></span>
      </div>
    </div>
  );
}