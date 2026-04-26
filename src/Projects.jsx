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
  name: 'AI_JOURNAL_SYSTEM',
  tech: 'Node.js, Express.js, MongoDB, React, Tailwind CSS, Prompt Engineering',
  description: 'Developed a full-stack AI-powered journaling application that enables users to create, manage, and analyze personal journal entries. Implemented secure authentication and RESTful APIs using Express.js, with MongoDB for efficient data storage. Integrated prompt engineering techniques to generate intelligent insights, summaries, and mood analysis from user entries. Designed a responsive and user-friendly interface using React and Tailwind CSS, ensuring a seamless user experience across devices.',
  github: 'https://github.com/sonam-yadav04/ai_journal_system',
},
  {
    name: 'MyWeatherApp',
    tech: 'Python, Flask, OpenWeather API, JavaScript',
    description: 'Weather application that fetches and displays real-time weather data including temperature and conditions using OpenWeather API.',
    github: 'https://github.com/sonam-yadav04/MyWeatherApp',
  },
  {
    name: 'finance-dashboard',
    tech: 'JavaScript, Reactjs,useReducer, useContext ,tailwind Css',
    description: 'Interactive game with dynamic UI, score tracking, and responsive design. Implemented using vanilla JavaScript with DOM manipulation.',
    github: 'https://github.com/sonam-yadav04/finance-dashboard',
    highlight:true,
    live: 'https://finance-dashboard-8814ut1oy-sonam-yadav04s-projects.vercel.app/'
  },
  {
    name: 'BOOk FINDER APP',
    tech: 'Reactjs, Redux , Hooks, OpenLibrary API ,CSS',
    description: 'Book finder app where you can search and find any book from the world wide using the author name, the title of book , subject or isbn .',
    github: 'https://github.com/sonam-yadav04/BOOKS_FINDER',
    highlight: true,
    live:'https://sonam-yadav04.github.io/BOOKS_FINDER/'
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