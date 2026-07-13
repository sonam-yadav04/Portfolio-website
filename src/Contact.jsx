// src/components/Contact.jsx
import React from 'react';
import { Mail, Github, FileText } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1xP_V00TGCugylb2ZX_hPr_SH1-RHK2Cu/view?usp=sharing";

export default function Contact() {
  return (
    <section id="contact" className="section contact-cta">
      <div className="section-content">
        <h2 className="section-title">Let's work together</h2>
        <p>
          I'm currently open to new opportunities and exciting projects.
          Feel free to reach out.
        </p>
        <div className="contact-buttons">
          <a href="mailto:sonamyadav.ml@gmail.com" className="btn-solid">
            <Mail size={18} />
            <span>Get in touch</span>
          </a>
          <a href="https://github.com/sonam-yadav04" target="_blank" rel="noopener noreferrer" className="btn-outline">
            <Github size={18} />
            <span>View GitHub</span>
          </a>
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
            <FileText size={18} />
            <span>View resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}