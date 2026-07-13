// src/components/Skills.jsx
import React from 'react';
import { Code2, Layers, Database, Package, Wrench, Brain } from 'lucide-react';

const skills = {
  languages: ['Node.js', 'JavaScript', 'HTML', 'CSS', 'Python'],
  frameworks: ['ReactJS', 'Express.js', 'Flask'],
  databases: ['MySQL', 'MongoDB'],
  libraries: ['React.js', 'Jinja2', 'Redux'],
  tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Twilio'],
  concepts: [
    'RESTful APIs',
    'OOPs',
    'Microservices Architecture',
    'API Integration',
    'Event-Driven Architecture',
    'JWT Authentication',
    'Password Hashing',
    'Context API',
    'Data Structures and Algorithms',
  ],
};

const categories = [
  { key: 'languages', label: 'Languages', icon: Code2 },
  { key: 'frameworks', label: 'Frameworks', icon: Layers },
  { key: 'databases', label: 'Databases', icon: Database },
  { key: 'libraries', label: 'Libraries', icon: Package },
  { key: 'tools', label: 'Tools', icon: Wrench },
  { key: 'concepts', label: 'Concepts', icon: Brain },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-content">
        <p className="section-eyebrow mono">// tech-stack</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {categories.map(({ key, label, icon: Icon }) => (
            <div className="skill-category" key={key}>
              <h3>
                <Icon size={20} />
                <span>{label}</span>
                <span className="skill-count mono">{skills[key].length}</span>
              </h3>
              <div className="skill-tags">
                {skills[key].map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}