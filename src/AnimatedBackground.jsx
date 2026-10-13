import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: null,
      y: null,
      radius: 170,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', handleResize);

    // Particles system
    const particleCount = width < 768 ? 45 : 95;
    let particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2 + 1;
        this.baseAlpha = Math.random() * 0.5 + 0.25;
        this.alpha = this.baseAlpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseStep = Math.random() * Math.PI * 2;
      }

      update() {
        // Continuous movement
        this.x += this.vx;
        this.y += this.vy;

        // Pulse opacity
        this.pulseStep += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseStep) * 0.2;

        // Wrap around borders smoothly
        if (this.x < -10) this.x = width + 10;
        if (this.x > width + 10) this.x = -10;
        if (this.y < -10) this.y = height + 10;
        if (this.y > height + 10) this.y = -10;

        // Interactive mouse reaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 3;
            this.y -= Math.sin(angle) * force * 3;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, this.alpha)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      const count = width < 768 ? 45 : 95;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Shooting meteors
    const meteors = [];
    const spawnMeteor = () => {
      meteors.push({
        x: Math.random() * width * 1.2,
        y: -50,
        length: Math.random() * 90 + 70,
        speed: Math.random() * 8 + 9,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
      });
    };

    let meteorTimer = 0;

    // Organic Aurora Wave
    let waveStep = 0;

    const drawAuroraWave = () => {
      waveStep += 0.008;

      // First ethereal wave ribbon
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.45);
      for (let x = 0; x <= width; x += 30) {
        const y =
          height * 0.45 +
          Math.sin(x * 0.003 + waveStep) * 60 +
          Math.cos(x * 0.002 - waveStep * 0.7) * 40;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const grad1 = ctx.createLinearGradient(0, height * 0.3, width, height * 0.9);
      grad1.addColorStop(0, 'rgba(255, 255, 255, 0.025)');
      grad1.addColorStop(0.5, 'rgba(161, 161, 170, 0.015)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fill();
      ctx.restore();

      // Second counter-flowing wave ribbon
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.7);
      for (let x = 0; x <= width; x += 30) {
        const y =
          height * 0.7 +
          Math.sin(x * 0.002 - waveStep * 1.2) * 80 +
          Math.cos(x * 0.004 + waveStep) * 45;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const grad2 = ctx.createLinearGradient(0, height * 0.5, width, height);
      grad2.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
      grad2.addColorStop(0.5, 'rgba(212, 212, 216, 0.01)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fill();
      ctx.restore();
    };

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing aurora waves
      drawAuroraWave();

      // 2. Update and draw particles
      const connectionDist = width < 768 ? 95 : 130;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles with network lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const lineAlpha = (1 - dist / connectionDist) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const mouseAlpha = (1 - dist / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${mouseAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 3. Handle shooting stars
      meteorTimer++;
      if (meteorTimer % 260 === 0 && Math.random() > 0.35) {
        spawnMeteor();
      }

      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.012;

        if (m.alpha <= 0 || m.x > width + 100 || m.y > height + 100) {
          meteors.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;
        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(1, `rgba(255, 255, 255, ${m.alpha * 0.85})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="animated-background-container" aria-hidden="true">
      {/* Dynamic Interactive HTML5 Canvas */}
      <canvas ref={canvasRef} className="animated-bg-canvas" />

      {/* Morphing Liquid Ambient Light Blobs */}
      <div className="liquid-orb liquid-orb-1" />
      <div className="liquid-orb liquid-orb-2" />
      <div className="liquid-orb liquid-orb-3" />
      <div className="liquid-orb liquid-orb-4" />

      {/* Futuristic Scanline Horizon & Architectural Grid Floor */}
      <div className="grid-floor-scanline" />
    </div>
  );
}
