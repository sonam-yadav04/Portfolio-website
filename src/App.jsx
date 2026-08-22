import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { FileText, Download, Eye, X, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

import './style.css';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Home from './Home';

export const RESUME_URL = "https://drive.google.com/file/d/1xP_V00TGCugylb2ZX_hPr_SH1-RHK2Cu/view?usp=sharing";

const NAV_ITEMS = [
  { id: 'home', path: '/', label: 'Home' },
  { id: 'about', path: '/about', label: 'About' },
  { id: 'skills', path: '/skills', label: 'Skills' },
  { id: 'projects', path: '/projects', label: 'Projects' },
  { id: 'experience', path: '/experience', label: 'Experience' },
  { id: 'education', path: '/education', label: 'Education' },
  { id: 'contact', path: '/contact', label: 'Contact' },
];

export default function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll section handling & Active section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle direct route navigation scroll (e.g. if someone opens /projects)
  useEffect(() => {
    const path = location.pathname;
    let targetId = 'home';
    if (path === '/about') targetId = 'about';
    else if (path === '/skills') targetId = 'skills';
    else if (path === '/projects') targetId = 'projects';
    else if (path === '/experience') targetId = 'experience';
    else if (path === '/education') targetId = 'education';
    else if (path === '/contact') targetId = 'contact';

    setActiveSection(targetId);

    // Scroll to element after DOM settles
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }, [location.pathname]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveSection(item.id);
    navigate(item.path, { replace: true });
    
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      {/* Ambient background glowing shapes */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      <div className="ambient-orb orb-3"></div>

      <nav className="nav">
        <div className="nav-content">
          <a href="#home" onClick={(e) => handleNavClick(e, NAV_ITEMS[0])} className="nav-brand">
            <div className="nav-avatar">
              <img src={`${import.meta.env.BASE_URL}profile2.jpeg`} alt="Sonam Yadav" />
            </div>
            <div className="nav-brand-text">
              <span className="nav-logo">Sonam <span>Yadav</span></span>
              <span className="nav-tagline mono">Full Stack &amp; GenAI Dev</span>
            </div>
          </a>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`nav-link${activeSection === item.id ? ' active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button 
              onClick={() => setShowResumeModal(true)} 
              className="resume-preview-btn"
              title="Preview Resume"
            >
              <Eye size={15} />
              <span>Preview</span>
            </button>
            <a 
              href={RESUME_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="resume-btn"
              download
            >
              <Download size={15} /> 
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>

      <main className="main-container">
        <Routes>
          <Route path="*" element={<Home onOpenResume={() => setShowResumeModal(true)} />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Sonam Yadav</h3>
            <p>Full Stack Developer specializing in Python, FastAPI, React, Node.js &amp; GenAI solutions.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/sonam-yadav04" target="_blank" rel="noopener noreferrer">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/sonam-yadav-242149325" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="mailto:sonamyadav.ml@gmail.com">
              <Mail size={18} /> Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sonam Yadav. Crafted with passion &amp; modern web standards.</p>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <button onClick={scrollToTop} className="back-to-top" aria-label="Back to Top">
        <ArrowUp size={18} />
      </button>

      {/* Interactive Resume Modal */}
      {showResumeModal && (
        <div className="modal-backdrop" onClick={() => setShowResumeModal(false)}>
          <div className="modal-content resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <FileText size={20} className="modal-icon" />
                <div>
                  <h3>Sonam Yadav - Resume</h3>
                  <p className="mono">Full Stack Developer | Python · FastAPI · React · GenAI</p>
                </div>
              </div>
              <button className="modal-close" onClick={() => setShowResumeModal(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div className="resume-notice">
                <p>Viewing official Google Drive resume document. You can also download it directly below.</p>
                <div className="resume-modal-actions">
                  <a 
                    href={RESUME_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-solid btn-sm"
                  >
                    <Download size={16} /> Download PDF
                  </a>
                  <a 
                    href={RESUME_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline btn-sm"
                  >
                    <Eye size={16} /> Open in New Tab
                  </a>
                </div>
              </div>
              <div className="resume-iframe-container">
                <iframe 
                  src="https://drive.google.com/file/d/1xP_V00TGCugylb2ZX_hPr_SH1-RHK2Cu/preview" 
                  title="Sonam Yadav Resume"
                  width="100%"
                  height="600px"
                  style={{ border: 'none', borderRadius: '8px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
