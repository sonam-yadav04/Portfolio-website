
import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';

const skills = {
  languages: [

    'Node.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Python'
  
  ],

  frameworks: [
    
    'ReactJS',
    'Express.js',
    'Flask',
  ],

  databases: [
    'MySQL',
    'MongoDB'
  ],

  libraries: [
    'Reactjs',
    'Jinja2',
    'Redux'
  ],

  tools: [
    'Git',
    'Postman',
    'VS Code',
    'twilio',
  ],

  concepts: [
    'RESTful APIs',
    'OOPs',
    'Microservices Architecture',
    'API Integration',
    'Event-Driven Architecture',
    'JWT Authentication',
    'password hashing '
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-content">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-category">
            <h3><Code size={20} /> Languages</h3>
            <div className="skill-tags">
              {skills.languages.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><Code size={20} /> Frameworks</h3>
            <div className="skill-tags">
              {skills.frameworks.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><Database size={20} /> Databases</h3>
            <div className="skill-tags">
              {skills.databases.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><Code size={20} /> Libraries</h3>
            <div className="skill-tags">
              {skills.libraries.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><Wrench size={20} /> Tools</h3>
            <div className="skill-tags">
              {skills.tools.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3><Code size={20} /> Concepts</h3>
            <div className="skill-tags">
              {skills.concepts.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
