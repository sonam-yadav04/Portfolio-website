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
              I am a motivated Computer Science postgraduate focused on MERN stack
              development, with hands-on experience in building scalable and secure web
              applications using MongoDB, Express.js, ReactJS, and Node.js. I specialize
              in developing RESTful APIs, backend services, and responsive user
              interfaces for real-world applications.
            </p>

            <p style={{ marginTop: '1.5rem' }}>
              I have experience working with microservices concepts, event-driven
              systems, and implementing secure authentication using JWT.
              Alongside my development skills, I use Python for Data Structures and
              Algorithms to strengthen my problem-solving and logical thinking.
              Currently, I am seeking opportunities as a MERN Stack Developer where I
              can contribute to production-ready applications and grow as a software
              engineer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
