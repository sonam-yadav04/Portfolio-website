import React from "react"

export default function Education(){

 return (
      <section id="education" className="section">
        <div className="section-content">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div>
                <h3>M.Sc. in Computer Science</h3>
                <p className="education-meta">Holkar Science College, Indore</p>
                <p className="education-details">2023 - 2025</p>
              </div>
              <div>
                <div className="education-score">7.48</div>
                <div className="education-score-label">CGPA</div>
              </div>
            </div>
            <div className="education-card">
              <div>
                <h3>B.Sc. in Computer Science</h3>
                <p className="education-meta">Govt. Netaji Subhash Chandra College, Biaora</p>
                <p className="education-details">2020 - 2023</p>
              </div>
              <div>
                <div className="education-score">70%</div>
                <div className="education-score-label">Percentage</div>
              </div>
            </div>
          </div>
         
        </div>
      </section>
);
};