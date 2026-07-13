import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { FileText } from 'lucide-react';

import './style.css';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Home from './Home';


const RESUME_URL = "https://drive.google.com/file/d/1xP_V00TGCugylb2ZX_hPr_SH1-RHK2Cu/view?usp=sharing";

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
];

export default function App() {
  return (
    <div className="portfolio">
      <nav className="nav">
        <div className="nav-content">
          <div className="nav-brand">
            <div className="nav-avatar">
              <img src={`${import.meta.env.BASE_URL}profile2.jpeg`} alt="Profile" />
            </div>
            <span className="nav-logo">Sonam <span>Yadav</span></span>
          </div>

          <ul className="nav-links">
            {NAV_ITEMS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="resume-btn">
            <FileText size={15} /> Resume
          </a>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}