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
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { RESUME_URL } from './App';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import { HeroGreeting, RoleTyper } from './TypingText';

const ORGANIC_WAVY_PATH = "M 376.00 200.00 C 388.57 215.36, 386.12 233.97, 370.00 245.55 C 353.89 257.14, 349.22 268.42, 352.42 288.00 C 355.62 307.58, 344.20 322.48, 324.45 324.45 C 304.70 326.43, 295.02 333.86, 288.00 352.42 C 280.98 370.98, 263.64 378.17, 245.55 370.00 C 227.46 361.84, 215.36 363.43, 200.00 376.00 C 184.64 388.57, 166.03 386.12, 154.45 370.00 C 142.86 353.89, 131.58 349.22, 112.00 352.42 C 92.42 355.62, 77.52 344.20, 75.55 324.45 C 73.57 304.70, 66.14 295.02, 47.58 288.00 C 29.02 280.98, 21.83 263.64, 30.00 245.55 C 38.16 227.46, 36.57 215.36, 24.00 200.00 C 11.43 184.64, 13.88 166.03, 30.00 154.45 C 46.11 142.86, 50.78 131.58, 47.58 112.00 C 44.38 92.42, 55.80 77.52, 75.55 75.55 C 95.30 73.57, 104.98 66.14, 112.00 47.58 C 119.02 29.02, 136.36 21.83, 154.45 30.00 C 172.54 38.16, 184.64 36.57, 200.00 24.00 C 215.36 11.43, 233.97 13.88, 245.55 30.00 C 257.14 46.11, 268.42 50.78, 288.00 47.58 C 307.58 44.38, 322.48 55.80, 324.45 75.55 C 326.43 95.30, 333.86 104.98, 352.42 112.00 C 370.98 119.02, 378.17 136.36, 370.00 154.45 C 361.84 172.54, 363.43 184.64, 376.00 200.00 Z";

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

      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-top-row">
            {/* Left Column: Intro */}
            <div className="hero-intro-col">
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>Open to Full Stack &amp; GenAI Developer Roles</span>
              </div>

              <p className="section-eyebrow mono"><Sparkles size={14} /> full stack &amp; genai developer</p>

              <HeroGreeting />
              <h2 className="hero-subtitle">
                I&apos;m a <RoleTyper />
              </h2>

              <p className="hero-description">
                Full Stack &amp; GenAI Developer specializing in <strong>Python (FastAPI, Flask)</strong>, <strong>React / Next.js</strong>, and <strong>Node.js</strong>. Experienced in building production multi-tenant AI SaaS platforms, RAG document pipelines, vector databases (Qdrant, FAISS), and event-driven microservices. <strong>M.Sc. Computer Science graduate</strong>.
              </p>

              <div className="cta-row">
                <button onClick={() => scrollToSection('projects')} className="btn-secondary">
                  <span>See Projects</span>
                  <ArrowRight size={18} />
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-solid">
                  <span>Get In Touch</span>
                  <Mail size={16} />
                </button>
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
            </div>

            {/* Right Column: Profile Photo in Organic Wavy Shape with Solid Background */}
            <div className="hero-profile-col">
              <div className="hero-organic-container">
                <div className="hero-organic-badge">
                  <svg
                    className="hero-organic-svg"
                    viewBox="0 0 400 400"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Sonam Yadav"
                  >
                    <defs>
                      <clipPath id="organicWaveClip">
                        <path d={ORGANIC_WAVY_PATH} />
                      </clipPath>
                    </defs>

                    {/* Solid Background */}
                    <path
                      d={ORGANIC_WAVY_PATH}
                      fill="#0e1224"
                    />

                    {/* Profile Photo Clipped to Organic Wavy Shape */}
                    <g clipPath="url(#organicWaveClip)">
                      <image
                        href={`${import.meta.env.BASE_URL}profile.png`}
                        x="12"
                        y="4"
                        width="376"
                        height="440"
                        preserveAspectRatio="xMidYMid slice"
                        className="hero-organic-photo"
                      />
                    </g>

                    {/* Clean Solid Organic Border */}
                    <path
                      d={ORGANIC_WAVY_PATH}
                      fill="none"
                      stroke="rgba(167, 139, 250, 0.55)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="hero-organic-border"
                    />
                  </svg>

                  {/* Floating Pill Badge */}
                  <div className="hero-profile-pill">
                    <span className="pill-dot"></span>
                    <span>M.Sc. CS &bull; GenAI Engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

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