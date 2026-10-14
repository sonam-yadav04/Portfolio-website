import React, { useEffect, useState } from 'react';

function useTypewriter(
  phrases,
  { typeSpeed = 70, deleteSpeed = 35, hold = 1600, startDelay = 400, loop = true } = {}
) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      setText(phrases[0]);
      setDone(true);
      return undefined;
    }

    let i = 0;
    let n = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = phrases[i];
      if (!deleting) {
        n += 1;
        setText(word.slice(0, n));
        if (n === word.length) {
          if (!loop && i === phrases.length - 1) {
            setDone(true);
            return;
          }
          deleting = true;
          timer = setTimeout(tick, hold);
          return;
        }
        timer = setTimeout(tick, typeSpeed + Math.random() * 40);
      } else {
        n -= 1;
        setText(word.slice(0, n));
        if (n === 0) {
          deleting = false;
          i = (i + 1) % phrases.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    };

    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [phrases, typeSpeed, deleteSpeed, hold, startDelay, loop]);

  return { text, done };
}

const GREETING_PHRASES = ["Hi, I'm Sonam"];
const GREETING = "Hi, I'm ";
const ROLES = [
  'Full Stack Developer',
  'GenAI Engineer',
  'FastAPI & React Builder',
  'Problem Solver',
];


export function HeroGreeting() {
  const { text, done } = useTypewriter(GREETING_PHRASES, {
    loop: false,
    typeSpeed: 95,
    startDelay: 600,
  });
  const head = text.slice(0, GREETING.length);
  const tail = text.slice(GREETING.length);

  return (
    <h1 className="hero-title" aria-label="Hi, I'm Sonam Yadav">
      <span className="type-wrap" aria-hidden="true">
        {/* invisible full text reserves the width so nothing jumps while typing */}
        <span className="type-sizer">
          {GREETING}Sonam<span className="wave">👋</span>
        </span>
        <span className="type-live">
          {head}
          <span className="type-name">{tail}</span>
          {done && <span className="wave">👋</span>}
          <span className="type-caret" />
        </span>
      </span>
    </h1>
  );
}


export function RoleTyper() {
  const { text } = useTypewriter(ROLES, {
    typeSpeed: 55,
    deleteSpeed: 28,
    hold: 1500,
    startDelay: 2600,
  });

  return (
    <span className="role-typer" aria-label="Full Stack Developer and GenAI Engineer">
      <span className="type-name">{text}</span>
      <span className="type-caret small" />
    </span>
  );
}