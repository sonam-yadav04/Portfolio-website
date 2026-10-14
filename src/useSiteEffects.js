import { useEffect } from 'react';

// Cards that get the cursor "spotlight" glow
const CARDS = [
  '.stat-card', '.domain-card', '.skill-category-card', '.project-card',
  '.exp-content-box', '.education-card', '.contact-card',
  '.about-callout', '.about-resume-box',
].join(', ');

// Elements that fade/slide in as they scroll into view
const REVEAL = [
  '.hero-content > *',
  '.section-eyebrow', '.section-title',
  '.about-text-column', '.domain-card', '.about-callout', '.about-resume-box',
  '.skills-filter-bar', '.skill-category-card',
  '.project-tabs', '.project-card',
  '.experience-item', '.education-card',
  '.contact-subtitle', '.contact-card', '.contact-buttons-row',
].join(', ');

/**
 * Light, dependency-free site effects:
 *  1. staggered scroll-reveal (IntersectionObserver)
 *  2. cursor spotlight on cards (sets --mx / --my)
 * Call once from <App />.
 */
export default function useSiteEffects() {
  useEffect(() => {
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.documentElement.classList.add('fx-on');

    // ---- 1. scroll reveal ----
    let observer = null;
    const timers = [];
    if (!reduce && 'IntersectionObserver' in window) {
      const all = Array.from(document.querySelectorAll(REVEAL));
      const set = new Set(all);
      // skip elements nested inside another revealed element (avoids double transforms)
      const targets = all.filter((el) => {
        for (let p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return false;
        return true;
      });

      const siblingCount = new Map();
      targets.forEach((el) => {
        const n = siblingCount.get(el.parentElement) || 0;
        siblingCount.set(el.parentElement, n + 1);
        el.style.setProperty('--d', `${Math.min(n, 6) * 80}ms`);
        el.classList.add('reveal');
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            el.classList.add('is-visible');
            el.dataset.revealed = '1';
            observer.unobserve(el);
            // hand the element back to its own CSS (hover transforms etc.)
            timers.push(
              setTimeout(() => {
                el.classList.remove('reveal', 'is-visible');
                el.style.removeProperty('--d');
              }, 1500)
            );
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      targets.forEach((el) => observer.observe(el));
    } else {
      document.querySelectorAll('.section-title').forEach((el) => {
        el.dataset.revealed = '1';
      });
    }

    // ---- 2. cursor spotlight ----
    let raf = 0;
    const onMove = (e) => {
      if (raf) return;
      const target = e.target;
      const x = e.clientX;
      const y = e.clientY;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const card = target.closest ? target.closest(CARDS) : null;
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${x - r.left}px`);
        card.style.setProperty('--my', `${y - r.top}px`);
      });
    };
    document.addEventListener('pointermove', onMove, { passive: true });

    return () => {
      document.removeEventListener('pointermove', onMove);
      if (observer) observer.disconnect();
      timers.forEach(clearTimeout);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove('fx-on');
    };
  }, []);
}