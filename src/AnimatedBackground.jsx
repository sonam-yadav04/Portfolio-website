import React from 'react';

const wave = (height, amplitude) => {
  let path = `M0 ${height}`;
  for (let tile = 0; tile < 4; tile += 1) {
    const x = tile * 720;
    path += ` C${x + 240} ${height - amplitude} ${x + 480} ${height + amplitude} ${x + 720} ${height}`;
  }
  return `${path} V0 H0 Z`;
};


const LAYERS = [
  { h: 262, a: 46, opacity: 0.4, dur: 34, rev: false, delay: 0 },
  { h: 292, a: 58, opacity: 0.24, dur: 46, rev: true, delay: -9 },
  { h: 322, a: 40, opacity: 0.14, dur: 60, rev: false, delay: -22 },
];

function WaveBand({ position }) {
  return (
    <div className={`wave-banner ${position}`} aria-hidden="true">
      <svg viewBox="0 0 1440 360" preserveAspectRatio="none" focusable="false">
        {LAYERS.map((layer) => (
          <g
            key={layer.h}
            className={`wave-g${layer.rev ? ' rev' : ''}`}
            style={{ '--dur': `${layer.dur}s`, animationDelay: `${layer.delay}s` }}
            opacity={layer.opacity}
          >
            <path d={wave(layer.h, layer.a)} fill="#6F32E6" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function AnimatedBackground() {
  return (
    <>
      {/* fixed dark backdrop (styled in style.css + theme-upgrade.css) */}
      <div className="animated-background-container" aria-hidden="true" />
      {/* these two scroll with the page: header band and footer band */}
      <WaveBand position="top" />
      <WaveBand position="bottom" />
    </>
  );
}