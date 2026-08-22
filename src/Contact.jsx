// src/components/Contact.jsx
import React, { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Code2, 
  MapPin, 
  Download, 
  FileText, 
  CheckCircle2, 
  Copy, 
  Sparkles, 
  Send
} from 'lucide-react';
import { RESUME_URL } from './App';

export default function Contact({ onOpenResume }) {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  return (
    <section id="contact" className="section contact-cta">
      <div className="section-content">
        <p className="section-eyebrow mono">// 06 get-in-touch</p>
        <h2 className="section-title">Let's Build Something Exceptional</h2>
        <p className="contact-subtitle">
          I am currently actively interviewing for <strong>Full Stack Developer</strong> and <strong>GenAI Engineer</strong> roles. Whether you have a position open, a project idea, or simply want to connect, my inbox is always open!
        </p>

        <div className="contact-cards-container">
          <div className="contact-card">
            <div className="contact-card-icon">
              <Mail size={22} />
            </div>
            <h4>Email Me</h4>
            <p className="mono">sonamyadav.ml@gmail.com</p>
            <div className="contact-card-actions">
              <a href="mailto:sonamyadav.ml@gmail.com" className="contact-card-link">
                Send Email <Send size={14} />
              </a>
              <button 
                onClick={() => handleCopy('sonamyadav.ml@gmail.com', 'Email')}
                className="contact-copy-btn"
                title="Copy Email"
              >
                {copiedText === 'Email' ? <CheckCircle2 size={15} /> : <Copy size={15} />}
              </button>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <Github size={22} />
            </div>
            <h4>GitHub Profile</h4>
            <p className="mono">github.com/sonam-yadav04</p>
            <div className="contact-card-actions">
              <a href="https://github.com/sonam-yadav04" target="_blank" rel="noopener noreferrer" className="contact-card-link">
                View Repositories <Github size={14} />
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <MapPin size={22} />
            </div>
            <h4>Target Locations</h4>
            <p className="mono">Bengaluru | Indore | Hyderabad</p>
            <div className="contact-card-actions">
              <span className="location-pill">Open to Remote &amp; Onsite</span>
            </div>
          </div>
        </div>

        <div className="contact-buttons-row">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-solid" download>
            <Download size={18} />
            <span>Download Official Resume</span>
          </a>
          <button onClick={onOpenResume} className="btn-outline">
            <FileText size={18} />
            <span>Preview Resume PDF</span>
          </button>
          <a href="https://linkedin.com/in/sonam-yadav-242149325" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Linkedin size={18} />
            <span>LinkedIn Profile</span>
          </a>
          <a href="https://leetcode.com/u/sonam_yadav4/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Code2 size={18} />
            <span>LeetCode</span>
          </a>
        </div>

        {copiedText && (
          <div className="toast-notification">
            <CheckCircle2 size={16} /> Copied {copiedText} to clipboard!
          </div>
        )}
      </div>
    </section>
  );
}
