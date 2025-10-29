// src/components/Skills.jsx
import React from 'react';
import { Code, Database, Wrench,ChevronRight } from 'lucide-react';

const skills = {
  languages: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  frameworks: ['Flask', 'ReactJS', 'RESTful APIs'],
  databases: ['MySQL', 'Oracle'],
  libraries: ['NumPy', 'Pandas', 'Matplotlib', 'Jinja2', 'Redux'],
  tools: ['Git', 'Postman', 'VS Code', 'Kafka'],
  concepts: ['OOP', 'Microservices', 'API Integration', 'Event-Driven Architecture', 'JWT Authentication'],
};

export default function Skills() {
  const categories = [
    { title: 'Languages', icon: <Code size={20} />, data: skills.languages },
    { title: 'Frameworks', icon: <Code size={20} />, data: skills.frameworks },
    { title: 'Databases', icon: <Database size={20} />, data: skills.databases },
    { title: 'Libraries', icon: <Code size={20} />, data: skills.libraries },
    { title: 'Tools', icon: <Wrench size={20} />, data: skills.tools },
    { title: 'Concepts', icon: <Code size={20} />, data: skills.concepts },
  ];

  return (
    
    <section id="skills" className="section">
        <div className="section-content">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3><Code size={20} />Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3><Code size={20} />Frameworks</h3>
              <div className="skill-tags">
                {skills.frameworks.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3><Database size={20} />Databases</h3>
              <div className="skill-tags">
                {skills.databases.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3><Code size={20} />Libraries</h3>
              <div className="skill-tags">
                {skills.libraries.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3><Wrench size={20} />Tools</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h3><Code size={20} />Concepts</h3>
              <div className="skill-tags">
                {skills.concepts.map((skill, i) => <span key={i} className="skill-tag">{skill}</span>)}
              </div>
            </div>
          </div>
         
        </div>
        
      </section>

  );
}