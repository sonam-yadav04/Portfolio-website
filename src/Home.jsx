import React from 'react';

import { Github, Linkedin,Code2, Mail, Phone, MapPin, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';


function Home() {


  return (
     
          <section className="hero">
            <div className="hero-content">
              <h1>Sonam Yadav</h1>
              <h2>Python Full Stack Developer</h2>
              <p className="hero-description">
                Computer Science postgraduate specializing in full stack development with expertise in Flask, ReactJS, and MySQL. Passionate about creating efficient solutions using modern web technologies and microservices architecture.
              </p>
    
          
              <div className="contact-links">
                <a href="mailto:sonamyadav.ml@gmail.com" className="contact-link">
                  <Mail size={18} /><span>Email</span>
                </a>
                <a href="tel:+916262688148" className="contact-link">
                  <Phone size={18} /><span>+91 6262688148</span>
                </a>
                <a href="https://github.com/sonam-yadav04" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Github size={18} /><span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/sonam-yadav-242149325/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Linkedin size={18} /><span>LinkedIn</span>
                </a>
                <a href="https://leetcode.com/your-username" className="contact-link">
                  <Code2 size={18} />
                            <span>LeetCode</span>
                              </a>
                <div className="contact-link">
                  <MapPin size={18} /><span>Bengaluru & Indore</span>
                </div>
              </div>
              
            </div>
          </section>
    
  );
}

export default Home;
