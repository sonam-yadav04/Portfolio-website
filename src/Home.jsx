// src/components/Home.jsx
import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  MapPin,
  FileText,
  Download,
  ArrowRight,
  CheckCircle2,
  Copy,
  ChevronDown
} from 'lucide-react';
import { RESUME_URL } from './App';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

function Home({ onOpenResume }) {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page-container">
      {/* 0. Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>Open to Full Stack &amp; GenAI Developer Roles</span>
          </div>

          <p className="section-eyebrow mono">// full stack &amp; genai developer</p>
          <h1 className="hero-title">Sonam Yadav</h1>
          <h2 className="hero-subtitle">
            Full Stack Developer <span className="highlight-text">| Python &middot; FastAPI &middot; React/Next.js &middot; GenAI</span>
          </h2>

          <p className="hero-description">
            Full Stack &amp; GenAI Developer specializing in <strong>Python (FastAPI, Flask)</strong>, <strong>React / Next.js</strong>, and <strong>Node.js</strong>. Experienced in building production multi-tenant AI SaaS platforms, RAG document pipelines, vector databases (Qdrant, FAISS), and event-driven microservices. <strong>M.Sc. Computer Science graduate</strong>.
          </p>

          <div className="cta-row">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-solid" download>
              <Download size={18} />
              <span>Download Resume</span>
            </a>
            <button onClick={onOpenResume} className="btn-outline">
              <FileText size={18} />
              <span>Preview Resume</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className="btn-secondary">
              <span>See Projects</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Quick Highlights / Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Production Internships</div>
              <div className="stat-detail">AI SaaS, Healthcare Tech &amp; Full Stack</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Full Stack &amp; AI Projects</div>
              <div className="stat-detail">RAG Pipelines, Microservices &amp; Vector DB</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7.48</div>
              <div className="stat-label">M.Sc. Computer Science</div>
              <div className="stat-detail">Holkar Science College, Indore</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">GenAI</div>
              <div className="stat-label">LLM &amp; Vector Search</div>
              <div className="stat-detail">DeepSeek, Groq, Qdrant, FAISS</div>
            </div>
          </div>

          {/* Contact Quick Badges */}
          <div className="contact-links">
            <button 
              onClick={() => handleCopy('sonamyadav.ml@gmail.com', 'Email')} 
              className="contact-link contact-btn"
              title="Click to copy email"
            >
              <Mail size={18} />
              <span>sonamyadav.ml@gmail.com</span>
              {copiedText === 'Email' ? <CheckCircle2 size={15} className="copied-icon" /> : <Copy size={14} className="copy-icon" />}
            </button>

            <a
              href="https://github.com/sonam-yadav04"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Github size={18} /><span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/sonam-yadav-242149325/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Linkedin size={18} /><span>LinkedIn</span>
            </a>

            <a
              href="https://leetcode.com/u/sonam_yadav4/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Code2 size={18} /><span>LeetCode</span>
            </a>

            <div className="contact-link location-badge">
              <MapPin size={18} /><span>Bengaluru | Indore | Hyderabad</span>
            </div>
          </div>

          {copiedText && (
            <div className="toast-notification">
              <CheckCircle2 size={16} /> Copied {copiedText} to clipboard!
            </div>
          )}

          <div className="scroll-down-indicator" onClick={() => scrollToSection('about')}>
            <span className="mono">Scroll to explore</span>
            <ChevronDown size={18} className="bounce-icon" />
          </div>
        </div>
      </section>

      {/* Sequential Full Page Sections */}
      <About onOpenResume={onOpenResume} />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact onOpenResume={onOpenResume} />
    </div>
  );
}

export default Home;
