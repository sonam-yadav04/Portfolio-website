import React from 'react';

function About() {
  return (
    <div>
      <section id="about" className="section">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>

          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
              fontSize: '1.1rem',
              color: '#666',
            }}
          >
          <p>
              I am a Computer Science postgraduate with strong expertise in both MERN stack
              development and Python-based backend development using Flask. I am passionate
              about building scalable, secure, and high-performance web applications, with
              hands-on experience in MongoDB, Express.js, ReactJS, Node.js, and Flask.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
              I specialize in designing and developing RESTful APIs, backend services, and
              responsive user interfaces for real-world applications. I have experience
              working with microservices architecture, event-driven systems, and
              implementing secure authentication using JWT.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
              Python is my primary language for problem-solving, and I actively use it to
              strengthen my understanding of Data Structures and Algorithms, enabling me to
              write efficient and optimized solutions.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
              I am currently seeking opportunities as a Full Stack or Backend Developer
              where I can contribute to building production-ready applications, solve
              complex problems, and grow as a software engineer.
            </p>
        </div>
        </div>
      </section>
    </div>
  );
}

export default About;
