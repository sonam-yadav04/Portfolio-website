import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-content">
        <h2 className="section-title">Experience & Training</h2>

        <div className="experience-timeline">

          <div className="experience-item">
            <h3>MERN Stack Intern</h3>
            <p className="experience-meta">
              Navhim Healthcare • November 2025 – Present
            </p>
            <p className="experience-description">
              Working on full stack web application development using the MERN stack.
              Contributing to backend API development with Node.js and Express.js,
              integrating frontend components using ReactJS, and collaborating on
              real-world healthcare-related application features.
            </p>
          </div>

          <div className="experience-item">
            <h3>Python Full Stack Development Intern</h3>
            <p className="experience-meta">
              Disha Computer Institute, Indore • 2 Months
            </p>
            <p className="experience-description">
              Worked on full stack web development by integrating Flask backend APIs
              with React frontend components. Gained hands-on experience in RESTful API
              development, database integration, and modern web development practices.
            </p>
          </div>

          <div className="experience-item">
            <h3>Python for Data Science</h3>
            <p className="experience-meta">
              M.Sc. Computer Science • 4th Semester Coursework
            </p>
            <p className="experience-description">
              Completed in-depth coursework on data analysis and visualization using
              Pandas, NumPy, and Matplotlib. Developed strong analytical thinking and
              problem-solving skills through practical assignments and projects.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
