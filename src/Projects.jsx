// src/components/Projects.jsx
import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, Bot, Layers, ShieldCheck, BookOpen, Database, X, Eye } from 'lucide-react';

const projects = [
  {
    id: 'rag-qa',
    name: 'RAG Document Q&A System',
    category: 'genai',
    tech: 'Python, FastAPI, Groq LLM, FAISS',
    description: 'Retrieval-augmented generation (RAG) system answering questions over PDF documents using FAISS vector search and Groq LLM inference.',
    details: 'Built a high-performance vector search engine with FAISS to chunk and index PDF documents. Integrated Groq LLM for real-time contextual question answering via FastAPI REST endpoints.',
    github: 'https://github.com/sonam-yadav04',
    highlight: true,
    badge: 'GenAI / RAG'
  },
  {
    id: 'lashvae-saas',
    name: 'Multi-Tenant AI SaaS & Growth System',
    category: 'genai',
    tech: 'FastAPI, DeepSeek, Qdrant, Redis, Next.js, shadcn/ui',
    description: 'Production AI chatbot SaaS backend & dashboard with DeepSeek response automation, Redis alert queues, and GDPR compliance flows.',
    details: 'Architected vector search workflows using Qdrant & DeepSeek LLMs. Built async Growth Analytics reporting, transactional email auth (SPF/DKIM/DMARC), and GDPR erasure pipelines.',
    github: 'https://github.com/sonam-yadav04',
    highlight: true,
    badge: 'Production SaaS'
  },
  {
    id: 'inventory-system',
    name: 'Microservice Inventory System',
    category: 'microservices',
    tech: 'Flask, React, MySQL, Apache Kafka, JWT',
    description: 'Scalable microservice inventory platform featuring role-based dashboards (Admin/Employee/Customer) and event-driven stock sync via Kafka.',
    details: 'Decoupled microservices communicate over Kafka topic streams for real-time inventory updates with JWT authentication and MySQL relational data modeling.',
    github: 'https://github.com/sonam-yadav04/inventory-management-system',
    highlight: true,
    badge: 'Microservices'
  },
  {
    id: 'ai-journal',
    name: 'AI Journaling System',
    category: 'genai',
    tech: 'Node.js, Express, React, Groq API, MongoDB, Prompt Engineering',
    description: 'LLM-powered journaling app extracting emotion analysis, mood trends, keywords, and automated summaries from user entries.',
    details: 'Full-stack application utilizing MongoDB document storage and custom prompt engineering to generate real-time emotional insights and entry summaries.',
    github: 'https://github.com/sonam-yadav04/ai_journal_system',
    highlight: false,
    badge: 'GenAI / Full-Stack'
  },
  {
    id: 'book-finder',
    name: 'Book Finder App',
    category: 'frontend',
    tech: 'React.js, Redux, OpenLibrary API, CSS3',
    description: 'Real-time book search web app with dynamic filtering across title, author, subject, or ISBN using OpenLibrary API.',
    details: 'Leverages OpenLibrary API for instant query resolution, Redux for state management, and debounced search calls for optimal user experience.',
    github: 'https://github.com/sonam-yadav04/BOOKS_FINDER',
    live: 'https://sonam-yadav04.github.io/BOOKS_FINDER/',
    highlight: true,
    badge: 'Live Web App'
  },
  {
    id: 'snap-vault',
    name: 'Snap-Vault Media Storage',
    category: 'microservices',
    tech: 'Flask, Node.js, React, JWT Auth',
    description: 'Secure image upload & download platform with strict backend MIME validation, payload sanitization, and JWT authentication.',
    details: 'Enforces file type validation, access token verification, and secure image asset storage across React and Flask API layers.',
    github: 'https://github.com/sonam-yadav04',
    highlight: false,
    badge: 'Security / Web'
  },
  {
    id: 'finance-dashboard',
    name: 'Interactive Finance Dashboard',
    category: 'frontend',
    tech: 'JavaScript, React.js, useReducer, useContext, Tailwind CSS',
    description: 'Financial analytics dashboard with dynamic charts, expense categorization, and custom React state management.',
    details: 'Built with React state management patterns (useReducer + useContext) and responsive Tailwind CSS layout components.',
    github: 'https://github.com/sonam-yadav04/finance-dashboard',
    live: 'https://finance-dashboard-8814ut1oy-sonam-yadav04s-projects.vercel.app/',
    highlight: false,
    badge: 'Live Dashboard'
  }
];


export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  );

  return (
    <section id="projects" className="section">
      <div className="section-content">
        <p className="section-eyebrow mono">// 03 portfolio</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="project-tabs">
          <button
            className={`project-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Projects ({projects.length})
          </button>
          <button
            className={`project-tab ${activeTab === 'genai' ? 'active' : ''}`}
            onClick={() => setActiveTab('genai')}
          >
            🤖 GenAI &amp; RAG
          </button>
          <button
            className={`project-tab ${activeTab === 'microservices' ? 'active' : ''}`}
            onClick={() => setActiveTab('microservices')}
          >
            ⚡ Microservices &amp; Full Stack
          </button>
          <button
            className={`project-tab ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            ⚛️ Frontend &amp; Web Apps
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.highlight ? 'highlight' : ''}`}>
              <div className="project-card-header">
                <span className="project-badge mono">{project.badge}</span>
              </div>
              
              <h3>{project.name}</h3>
              <p className="project-tech mono">{project.tech}</p>
              <p className="project-description">{project.description}</p>
              
              <div className="project-card-footer">
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={17} />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>

                <button 
                  onClick={() => setSelectedProject(project)} 
                  className="project-detail-btn"
                  title="View Details"
                >
                  <Eye size={15} /> Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
            <div className="modal-content project-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title">
                  <span className="project-badge mono">{selectedProject.badge}</span>
                  <h3>{selectedProject.name}</h3>
                </div>
                <button className="modal-close" onClick={() => setSelectedProject(null)}>
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-section">
                  <h4>Tech Stack</h4>
                  <p className="project-tech mono">{selectedProject.tech}</p>
                </div>
                <div className="modal-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>
                <div className="modal-section">
                  <h4>Key Architectural Details</h4>
                  <p>{selectedProject.details}</p>
                </div>
                <div className="modal-actions">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-solid btn-sm"
                  >
                    <Github size={16} /> View GitHub Repository
                  </a>
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-secondary btn-sm"
                    >
                      <ExternalLink size={16} /> Launch Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}