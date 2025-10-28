// src/components/Projects.jsx
import React from 'react';
import { Github ,ChevronLeft,ChevronRight} from 'lucide-react';


const projects = [
  {
    name: 'Inventory Management System',
    tech: 'Python, Flask, ReactJS, MySQL, Kafka, JWT',
    description: 'Scalable microservice-based inventory system with role-based dashboards for Admin, Employee, and Customer. Implemented RESTful APIs, Kafka for event-driven communication, and JWT authentication.',
    github: 'https://github.com/sonam-yadav04/inventory-management-system',
    highlight: true,
  },
  {
    name: 'Snap-Vault',
    tech: 'Python, Flask, ReactJS, HTML, CSS',
    description: 'Secure file upload and download application with file validation, authentication, and user-friendly UI for efficient image management.',
    github: '#',
  },
  {
    name: 'MyPortfolio',
    tech: 'Python, Flask, Jinja2, HTML, CSS',
    description: 'Dynamic personal portfolio website showcasing skills, projects, and academic achievements using Flask backend with Jinja2 templating.',
    github: 'https://github.com/sonam-yadav04/MyProtfolio',
  },
  {
    name: 'MyWeatherApp',
    tech: 'Python, Flask, OpenWeather API, JavaScript',
    description: 'Weather application that fetches and displays real-time weather data including temperature and conditions using OpenWeather API.',
    github: 'https://github.com/sonam-yadav04/MyWeatherApp',
  },
  {
    name: 'Rock-Paper-Scissors Game',
    tech: 'JavaScript, HTML, CSS',
    description: 'Interactive game with dynamic UI, score tracking, and responsive design. Implemented using vanilla JavaScript with DOM manipulation.',
    github: '#',
  },
  {
    name: 'BOOk FINDER APP',
    tech: 'Reactjs, Redux , Hooks, OpenLibrary API ,CSS',
    description: 'Book finder app where you can search and find any book from the world wide using the author name, the title of book , subject or isbn .',
    github: 'https://github.com/sonam-yadav04/BOOKS_FINDER',
    highlight: true,
  },
];

export default function Projects() {
  return (
     <section id="projects" className="section">
        <div className="section-content">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className={`project-card ${project.highlight ? 'highlight' : ''}`}>
                <h3>{project.name}</h3>
                <p className="project-tech">{project.tech}</p>
                <p className="project-description">{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={18} />
                  <span>View on GitHub →</span>
                </a>
              </div>
            ))}
          </div>
        
        </div>
      </section>

  );
}