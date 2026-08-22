// src/components/Experience.jsx
import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Thundertribes (Lashvae)",
    period: "May 2026 – Present",
    type: "Onsite",
    location: "Bengaluru",
    highlight: true,
    skills: ["Python", "FastAPI", "DeepSeek", "Qdrant", "Redis", "Next.js", "shadcn/ui", "GDPR/DPDP"],
    points: [
      "Engineered backend microservices (Python, FastAPI, SQLAlchemy, Redis, Qdrant) for Lashvae AI SaaS, integrating DeepSeek for automated response generation.",
      "Built transactional email APIs & HTML templates aligned with SPF/DKIM/DMARC; shipped Growth Analytics dashboard with async background AI processing.",
      "Developed lead-alert pipeline with Redis queue cooldown & deduplication; fixed DM webhooks & built Next.js (shadcn/ui) Leads Pipeline UI.",
      "Implemented enterprise GDPR/DPDP compliance workflows (consent erasure, breach detection, DPA tracking)."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Navhim Healthcare Tech",
    period: "Nov 2025 – Jan 2026",
    type: "Remote",
    location: "Remote",
    skills: ["Node.js", "Express.js", "MongoDB", "React.js", "REST APIs", "JWT Auth"],
    points: [
      "Designed RESTful APIs (Node.js, Express) and MongoDB schemas for patient & appointment management in a healthcare platform.",
      "Integrated backend endpoints with React interfaces, implementing JWT authentication & CRUD workflows in an Agile team."
    ]
  },
  {
    role: "Python Full Stack Developer Intern",
    company: "Disha Computer Institute",
    period: "2024 (2 Months)",
    type: "Onsite",
    location: "Indore",
    skills: ["Python", "Flask", "React.js", "MySQL", "JWT Auth"],
    points: [
      "Developed Flask REST APIs integrated with ReactJS frontends using MySQL database modeling.",
      "Implemented secure JWT user authentication and modular backend controllers."
    ]
  }
];


export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-content">
        <p className="section-eyebrow mono">// 04 experience</p>
        <h2 className="section-title">Work Experience</h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`experience-item ${exp.highlight ? 'featured-exp' : ''}`}>
              <div className="exp-badge-column">
                <span className="exp-dot"></span>
              </div>
              <div className="exp-content-box">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-company mono">
                      <Building2 size={15} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="exp-meta-badge">
                    <span className="exp-period"><Calendar size={13} /> {exp.period}</span>
                    <span className="exp-type"><MapPin size={13} /> {exp.type}</span>
                  </div>
                </div>

                <ul className="exp-points">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <ChevronRight size={16} className="point-icon" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="exp-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}