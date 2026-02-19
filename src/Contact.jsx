import React from 'react'

function Contact(){



    return(
        <div>
    <section className="section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', textAlign: 'center' }}>
        <div className="section-content">
          <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>Let's Work Together</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', opacity: 0.95 }}>
            I'm currently open to new opportunities and exciting projects. Feel free to reach out!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:sonamyadav.ml@gmail.com" style={{ display: 'inline-block', padding: '1rem 2rem', background: 'white', color: '#667eea', textDecoration: 'none', borderRadius: '30px', fontWeight: '600', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              Get In Touch
            </a>
            <a href="https://github.com/sonam-yadav04" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '1rem 2rem', background: 'rgba(255,255,255,0.2)', color: 'white', textDecoration: 'none', borderRadius: '30px', fontWeight: '600', border: '2px solid white', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#667eea'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'white'; }}>
              View GitHub
            </a>
          </div>
        </div>
      </section>
      
     </div>
     

    );
}
export default Contact;
