// src/components/Home.jsx
import React from 'react';
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  Phone,
  MapPin,
  FileText,
  ArrowDown
} from 'lucide-react';


const RESUME_URL = "https://drive.google.com/file/d/1xP_V00TGCugylb2ZX_hPr_SH1-RHK2Cu/view?usp=sharing";

function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="section-eyebrow mono">// full stack developer</p>
        <h1>Sonam Yadav</h1>
        <h2>Full Stack Developer || Software Developer</h2>

        <p className="hero-description">
          Computer Science postgraduate focused on MERN stack development with hands-on
          experience in building scalable and secure web applications using MongoDB,
          Express.js, ReactJS, and Node.js. Experienced in developing RESTful APIs,
          backend services, and responsive user interfaces.
        </p>

        <div className="cta-row">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-solid">
            <FileText size={18} />
            <span>View resume</span>
          </a>
          <a href="#projects" className="btn-outline">
            <ArrowDown size={18} />
            <span>See projects</span>
          </a>
        </div>

        <div className="contact-links">
          <a href="mailto:sonamyadav.ml@gmail.com" className="contact-link">
            <Mail size={18} /><span>Email</span>
          </a>

          <a href="tel:+916262688148" className="contact-link">
            <Phone size={18} /><span>+91 6262688148</span>
          </a>

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

          <div className="contact-link">
            <MapPin size={18} /><span>Bengaluru &amp; Indore</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;