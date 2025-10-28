import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

function About(){

const navigate = useNavigate()


    return(
        <div>
    <section id="about" className="section">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: '#666' }}>
            <p>
              Motivated Computer Science postgraduate with a strong foundation in full stack development. I specialize in building scalable, secure applications using modern technologies. My experience spans across developing microservices architectures, implementing RESTful APIs, and creating responsive user interfaces.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              I'm passionate about clean code, efficient algorithms, and creating solutions that make a real impact. Currently seeking opportunities to contribute to innovative projects as a Python Full Stack Developer.
            </p>
          </div>
        </div>
      </section>
     </div>

    );
}
export default About;
