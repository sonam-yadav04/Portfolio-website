import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


import './app.css';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';
import Home from './Home';

export default function App() {
  return (
    <div className="portfolio">

      <nav className="nav">
        <div className="nav-content">
         
          <div className="nav-logo"><i>Sy</i></div>
          <div className="nav-avatar">
  <img src={`${import.meta.env.BASE_URL}profile photo.png`} alt="Profile" />
 
</div>
          <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
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
