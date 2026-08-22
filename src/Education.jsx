// src/components/Education.jsx
import React from "react";
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-content">
        <p className="section-eyebrow mono">// 05 education</p>
        <h2 className="section-title">Academic Qualifications</h2>

        <div className="education-grid">
          <div className="education-card featured-edu">
            <div className="edu-main">
              <div className="edu-badge-icon">
                <GraduationCap size={28} />
              </div>
              <div className="edu-info">
                <h3>M.Sc. in Computer Science</h3>
                <p className="education-institution">
                  Holkar Science College (DAVV), Indore
                </p>
                <div className="education-meta mono">
                  <span><Calendar size={13} /> 2023 – 2025</span>
                  <span><MapPin size={13} /> Indore, M.P.</span>
                </div>
                
                <div className="edu-coursework">
                  <span className="course-label mono">Key Focus &amp; Coursework:</span>
                  <div className="course-tags">
                    <span className="course-tag">Data Structures &amp; Algorithms</span>
                    <span className="course-tag">Python for Data Science (Pandas, NumPy, Matplotlib)</span>
                    <span className="course-tag">Database Management Systems</span>
                    <span className="course-tag">Software Engineering</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="edu-score-box">
              <div className="education-score">7.48</div>
              <div className="education-score-label mono">CGPA</div>
              <div className="edu-status-tag">Completed</div>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-main">
              <div className="edu-badge-icon secondary">
                <BookOpen size={26} />
              </div>
              <div className="edu-info">
                <h3>B.Sc. in Computer Science</h3>
                <p className="education-institution">
                  Govt. Netaji Subhash Chandra College, Biaora
                </p>
                <div className="education-meta mono">
                  <span><Calendar size={13} /> 2020 – 2023</span>
                  <span><MapPin size={13} /> Biaora, M.P.</span>
                </div>

                <div className="edu-coursework">
                  <span className="course-label mono">Core Subjects:</span>
                  <div className="course-tags">
                    <span className="course-tag">Object Oriented Programming</span>
                    <span className="course-tag">Computer Networks</span>
                    <span className="course-tag">Web Technologies</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="edu-score-box">
              <div className="education-score">70%</div>
              <div className="education-score-label mono">Percentage</div>
              <div className="edu-status-tag">Graduated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}