// src/components/About.jsx
import React from 'react';
import { 
  Bot, 
  Cpu, 
  Layout, 
  ShieldCheck, 
  FileText, 
  Download, 
  Sparkles
} from 'lucide-react';
import { RESUME_URL } from './App';

function About({ onOpenResume }) {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <p className="section-eyebrow mono">// 01 about-me</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-grid">
          <div className="about-text-column">
            <p className="about-lead">
              <strong>Full Stack &amp; GenAI Engineer</strong> with an <strong>M.Sc. in Computer Science</strong> (CGPA 7.48) and hands-on experience developing production AI SaaS products.
            </p>

            <ul className="ats-highlights-list">
              <li><strong>AI &amp; RAG Systems:</strong> Integrated DeepSeek LLMs, Qdrant vector databases, and FAISS similarity search for automated SaaS chatbot &amp; Q&amp;A engines.</li>
              <li><strong>Backend &amp; Microservices:</strong> Built high-throughput REST APIs using FastAPI, Flask, Node.js/Express, Redis queues, and Kafka event streams.</li>
              <li><strong>Modern Frontend:</strong> Designed responsive admin dashboards and user interfaces using React, Next.js, Redux, and shadcn/ui.</li>
              <li><strong>Enterprise Security:</strong> Implemented GDPR/DPDP consent flows, breach detection services, and SPF/DKIM/DMARC email authentication.</li>
            </ul>

            <div className="about-resume-box">
              <div className="resume-box-content">
                <FileText size={24} className="resume-icon" />
                <div>
                  <h4>Sonam Yadav — Resume</h4>
                  <p>M.Sc. CS &middot; Full Stack &amp; GenAI Developer</p>
                </div>
              </div>
              <div className="resume-box-actions">
                <button onClick={onOpenResume} className="btn-outline btn-sm">
                  Preview
                </button>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-solid btn-sm" download>
                  <Download size={14} /> Download PDF
                </a>
              </div>
            </div>
          </div>

          <div className="about-cards-column">
            <div className="domain-card">
              <div className="domain-icon-wrapper">
                <Bot size={24} />
              </div>
              <div>
                <h3>GenAI &amp; Vector Databases</h3>
                <p>RAG pipelines, LLM prompt engineering, FAISS, and Qdrant vector search integration.</p>
              </div>
            </div>

            <div className="domain-card">
              <div className="domain-icon-wrapper">
                <Cpu size={24} />
              </div>
              <div>
                <h3>Backend Architecture</h3>
                <p>FastAPI, Flask, Node.js, RESTful APIs, Redis queues, Kafka, SQLAlchemy, MySQL &amp; MongoDB.</p>
              </div>
            </div>

            <div className="domain-card">
              <div className="domain-icon-wrapper">
                <Layout size={24} />
              </div>
              <div>
                <h3>Frontend Development</h3>
                <p>React.js, Next.js, Redux, shadcn/ui, Tailwind CSS, and responsive UI design.</p>
              </div>
            </div>

            <div className="domain-card">
              <div className="domain-icon-wrapper">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3>Security &amp; Compliance</h3>
                <p>GDPR/DPDP erasure flows, breach detection, DPA compliance, and email security.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-callout">
          <div className="callout-header">
            <Sparkles size={20} className="callout-icon" />
            <h3>Open for Full-Time Roles</h3>
          </div>
          <p>
            Seeking <strong>Full Stack Developer</strong> or <strong>GenAI Engineer</strong> roles in <strong>Bengaluru | Indore | Hyderabad | Remote</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
