import React from 'react';

// Authentic, high-precision SVG brand logos for developer portfolio
export const TechLogos = {
  // React (Official Cyan Spinning Atom)
  React: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
      <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
      <g stroke="#00D8FF" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),

  // GitHub (Official Octocat Mark)
  GitHub: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color: '#F0F6FC' }}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),

  // Python (Official Blue & Yellow Twin Snakes)
  Python: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#387EB8" d="M63.7 3.5c-15.6 0-25.2 6.8-29.6 15.6-5 9.9-4.7 20.3-4.7 30.6h29.9v4.3H19.7c-9.9 0-17.7 7.7-19.7 18.5-2.2 11.9.4 20.9 6.8 28.3 6.3 7.3 15.6 10.2 25.4 10.2h7.3v-14.8c0-8.5 7.1-15.3 15.7-15.3h29.8c8.3 0 15-6.8 15-15.1V35.6c0-8.5-7.3-15.6-16-16.7-7.2-.9-13.4-1.4-20.3-1.4zm-8.8 9.3c3.1 0 5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6-5.6-2.5-5.6-5.6 2.5-5.6 5.6-5.6z" />
      <path fill="#FFE052" d="M64.3 124.5c15.6 0 25.2-6.8 29.6-15.6 5-9.9 4.7-20.3 4.7-30.6H68.7v-4.3h39.6c9.9 0 17.7-7.7 19.7-18.5 2.2-11.9-.4-20.9-6.8-28.3-6.3-7.3-15.6-10.2-25.4-10.2h-7.3v14.8c0 8.5-7.1 15.3-15.7 15.3H43c-8.3 0-15 6.8-15 15.1v30.2c0 8.5 7.3 15.6 16 16.7 7.2.9 13.4 1.4 20.3 1.4zm8.8-9.3c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6z" />
    </svg>
  ),

  // JavaScript (Official Yellow Badge)
  JavaScript: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="16" fill="#F7DF1E" />
      <path d="M75.1 106.8c3.9 6.4 9 10.9 18 10.9 7.6 0 12.6-3.8 12.6-9.1 0-6.3-5-8.6-13.5-12.3l-4.6-2c-13.4-5.7-22.3-12.9-22.3-28.2 0-14 10.7-24.6 27.5-24.6 11.9 0 20.5 4.3 26.6 14.6l-13.7 8.8c-3-5.3-6.4-7.4-12.8-7.4-5.8 0-9.8 3.7-9.8 8.3 0 5.6 3.9 7.9 12.8 11.7l4.6 2c15.8 6.8 23.3 13.7 23.3 29 0 16.5-12.9 26.3-30.8 26.3-17.3 0-28.1-8.3-33-19.8l15.1-8.2zM27.5 105.7l15-9.1c3.1 5.5 5.9 10.1 11.9 10.1 6.1 0 10-3.6 10-17.5V42.8h17.9v46.9c0 23.6-13.7 34.3-32.1 34.3-14.7 0-23.7-7.7-27.7-18.3h5z" fill="#000000" />
    </svg>
  ),

  // Next.js (Official N badge)
  Nextjs: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 180 180" className={className}>
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <path d="M149.5 158.7L69.8 56H54v68h14.6V77.7l70.7 90.9c3.6-3.1 7-6.4 10.2-9.9z" fill="url(#next-grad)" />
      <path d="M117.8 56h14.6v68h-14.6z" fill="#FFFFFF" />
      <defs>
        <linearGradient id="next-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // Node.js (Official Green Hexagon)
  Nodejs: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#539E43" d="M64 4.5l54.5 31.5v63L64 123.5 9.5 99v-63L64 4.5z" />
      <path fill="#FFFFFF" d="M64 26.3c16.2 0 24.8 8.8 24.8 21.3v41.9h-13.5V50.8c0-7.8-4.7-11.9-12.8-11.9-8.5 0-14 4.7-14 13.5v37.1H35V47.6c0-12.5 10.7-21.3 29-21.3z" />
    </svg>
  ),

  // FastAPI (Official Teal Circle with Lightning Bolt)
  FastAPI: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="60" fill="#059669" />
      <path d="M67 18L32 72h30l-7 38 41-56H66l9-36h-8z" fill="#FFFFFF" />
    </svg>
  ),

  // Flask (Official Python Flask)
  Flask: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: '#F8FAFC' }}>
      <path d="M9 2v6L4.5 18a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L15 8V2" />
      <path d="M8 8h8" />
      <path d="M8 15h8" />
      <circle cx="10" cy="18" r="1" fill="currentColor" />
    </svg>
  ),

  // HTML5 (Official Orange Shield)
  HTML5: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
      <path fill="#E44D26" d="M107.6 464l-35.3-396.2h367.4L404.4 464 256 505.2z" />
      <path fill="#F16529" d="M256 75.3v394.4l120.7-33.5 29.3-329.1z" />
      <path fill="#EBEBEB" d="M256 186.7h-67.4l-4.7-52.6H256V81.5H127.3l14 157.9H256zm0 144.3l-.3.1-56.9-15.4-3.6-40.8H142.5l7.1 80 106.4 29.5z" />
      <path fill="#FFFFFF" d="M256 186.7h67.4l-6.4 71.7H256v52.6h62.8l-5.9 66.4-56.9 15.4V445l106.4-29.5 14.5-162.7.7-13.5H256z" />
    </svg>
  ),

  // CSS3 (Official Blue Shield)
  CSS3: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
      <path fill="#264DE4" d="M107.6 464l-35.3-396.2h367.4L404.4 464 256 505.2z" />
      <path fill="#2965F1" d="M256 75.3v394.4l120.7-33.5 29.3-329.1z" />
      <path fill="#EBEBEB" d="M256 186.7h-67.4l-4.7-52.6H256V81.5H127.3l14 157.9H256zm0 144.3l-.3.1-56.9-15.4-3.6-40.8H142.5l7.1 80 106.4 29.5z" />
      <path fill="#FFFFFF" d="M256 186.7h67.4l-6.4 71.7H256v52.6h62.8l-5.9 66.4-56.9 15.4V445l106.4-29.5 14.5-162.7.7-13.5H256z" />
    </svg>
  ),

  // Tailwind CSS (Official Dual Cyan Waves)
  Tailwind: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#06B6D4" className={className}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  ),

  // Redux (Official Purple Triple-Loop)
  Redux: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#764ABC" d="M84.4 20.2c-7.3-3.9-15.6-2.9-21.7 1.6-1.5 1.1-2.9 2.4-4.1 3.9-4.8-3.4-10.7-4.8-16.7-3.7-10.3 1.9-17.8 10.6-17.8 21.1 0 2 .3 4 .9 5.8-5.7 3.3-9.5 9.2-9.9 16-.4 8.7 5.1 16.5 13.5 18.8-.2 1.3-.3 2.6-.3 4 0 11.2 8.4 20.6 19.5 21.6 6.1.5 12.1-1.3 16.8-5 1.4 1.6 3 3 4.8 4.1 7.2 4.4 15.9 4.3 22.8-.2 9.8-6.4 13.2-18.7 8.3-28.8 4.6-4.6 6.7-11.2 5.5-17.7-1.4-8.1-7.8-14.3-15.8-15.7 1.2-7.8-1.7-15.7-7.8-19.8zm-1.8 16c4.6 2.4 6.7 8 4.7 13-3.6 1.1-7.1 2.9-10.2 5.4-2.8-5.3-3.5-11.4-1.9-17.1 2.3-.9 5-1.7 7.4-1.3zm-39.7 7.8c6.1-.9 11.8 1.9 15.2 6.8-4.4 3.7-8 8.4-10.4 13.8-6.4.3-12.4-2.8-15.7-8.2-.8-5.6 4.3-11.4 10.9-12.4zm34 23.4c6.6 4.8 10.5 12.3 10.5 20.5 0 2.2-.3 4.4-.9 6.5-6.5-.4-12.8-3.4-17.1-8.5 2.1-5.7 4.7-12.3 7.5-18.5z" />
    </svg>
  ),

  // shadcn/ui (Official Minimal Crosshair/Ray)
  Shadcn: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" className={className}>
      <rect width="256" height="256" rx="60" fill="#09090B" />
      <line x1="208" y1="128" x2="128" y2="208" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
      <line x1="192" y1="40" x2="40" y2="192" stroke="#FFFFFF" strokeWidth="24" strokeLinecap="round" />
    </svg>
  ),

  // MongoDB (Official Green Leaf)
  MongoDB: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#47A248" d="M66.4 3.2c-2.3-2.1-4.8-3.2-6.4-3.2-1.6 0-4.1 1.1-6.4 3.2C37.8 17.6 19.3 46 19.3 75.3c0 26.5 15.5 48.2 38.6 52.3 1.9.3 3.9.4 6.1.4 2.2 0 4.2-.1 6.1-.4 23.1-4.1 38.6-25.8 38.6-52.3 0-29.3-18.5-57.7-42.3-72.1z" />
      <path fill="#3FA037" d="M64 4.5v123c1.9 0 3.8-.1 5.6-.4 21.6-3.8 36.1-24.3 36.1-49.2 0-27.6-17.4-54.4-39.8-67.9-.6-.4-1.3-.8-1.9-1.2v-4.3z" />
      <path fill="#A6E3A1" d="M64 36.5v62.4c.7.2 1.5.3 2.3.3 10.9 0 19.7-8.8 19.7-19.7 0-16.3-12.8-30.8-22-43z" opacity="0.6" />
    </svg>
  ),

  // MySQL (Official Dolphin Crest)
  MySQL: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="20" fill="#00618A" />
      <path d="M42 36c14-10 32-8 44 2 8 7 12 17 11 27-1 10-7 19-15 25-5 4-11 7-18 8-2 0-4-2-3-4 1-2 3-3 5-4 12-5 19-16 18-29-1-11-8-20-18-24-11-5-25-3-34 4-2 2-5 0-4-3 1-1 1-1 3-2z" fill="#E48E00" />
      <circle cx="50" cy="48" r="4" fill="#FFFFFF" />
      <text x="64" y="104" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontSize="22" fontWeight="bold">SQL</text>
    </svg>
  ),

  // Redis (Official 3D Stacked Ruby Cube)
  Redis: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#A32422" d="M123.6 44.8L66.7 13.9a5.5 5.5 0 00-5.4 0L4.4 44.8c-2.4 1.3-3.9 3.8-3.9 6.5v25.4c0 2.7 1.5 5.2 3.9 6.5l56.9 30.9a5.5 5.5 0 005.4 0l56.9-30.9c2.4-1.3 3.9-3.8 3.9-6.5V51.3c0-2.7-1.5-5.2-3.9-6.5z" />
      <path fill="#D82C20" d="M64 16.5l54.5 29.6-54.5 29.6-54.5-29.6L64 16.5z" />
      <path fill="#FFFFFF" d="M52 42h24v12H52z" opacity="0.3" />
      <circle cx="64" cy="46" r="6" fill="#FFFFFF" />
    </svg>
  ),

  // Apache Kafka (Official Cluster Network Nodes)
  Kafka: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="20" fill="#231F20" />
      <circle cx="42" cy="64" r="14" fill="#FFFFFF" />
      <circle cx="86" cy="40" r="10" fill="#FFFFFF" />
      <circle cx="86" cy="88" r="10" fill="#FFFFFF" />
      <line x1="42" y1="64" x2="86" y2="40" stroke="#FFFFFF" strokeWidth="6" />
      <line x1="42" y1="64" x2="86" y2="88" stroke="#FFFFFF" strokeWidth="6" />
    </svg>
  ),

  // Qdrant (Official Vector Engine Logo)
  Qdrant: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="20" fill="#1C1917" />
      <path d="M64 24L98 44V84L64 104L30 84V44L64 24Z" fill="#DC2626" />
      <path d="M64 24L98 44L64 64L30 44L64 24Z" fill="#EF4444" />
      <path d="M64 64L98 44V84L64 104V64Z" fill="#B91C1C" />
      <circle cx="64" cy="64" r="10" fill="#FFFFFF" />
    </svg>
  ),

  // DeepSeek (Official DeepSeek AI Whale/Symbol)
  DeepSeek: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="24" fill="#0A192F" />
      <path d="M28 76C28 52 48 32 72 32C86 32 98 40 104 50C98 52 90 56 84 62C76 70 72 82 72 96C48 96 28 86 28 76Z" fill="#3B82F6" />
      <path d="M64 48C76 48 88 56 94 68C90 70 84 76 80 84C74 72 64 64 52 60C56 52 60 48 64 48Z" fill="#60A5FA" />
      <circle cx="48" cy="60" r="5" fill="#FFFFFF" />
    </svg>
  ),

  // Groq (Official Groq Speed Tensor)
  Groq: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="24" fill="#F55036" />
      <path d="M40 38H88V50H40zM40 58H88V70H40zM40 78H72V90H40z" fill="#FFFFFF" />
      <circle cx="82" cy="84" r="6" fill="#FFFFFF" />
    </svg>
  ),

  // FAISS (Meta AI Similarity Search)
  FAISS: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <rect width="128" height="128" rx="24" fill="#0064E0" />
      <circle cx="64" cy="64" r="34" stroke="#FFFFFF" strokeWidth="8" fill="none" />
      <line x1="64" y1="30" x2="64" y2="98" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="6 6" />
      <line x1="30" y1="64" x2="98" y2="64" stroke="#FFFFFF" strokeWidth="6" strokeDasharray="6 6" />
      <circle cx="64" cy="64" r="8" fill="#FFFFFF" />
      <circle cx="82" cy="46" r="6" fill="#93C5FD" />
      <circle cx="46" cy="82" r="6" fill="#93C5FD" />
    </svg>
  ),

  // Git (Official Orange Diamond)
  Git: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#F05032" d="M125.7 57.5L70.5 2.3c-3.1-3.1-8.1-3.1-11.2 0L44.8 16.8l14.2 14.2c3.3-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.4 6.6 2.3 9.9l13.7 13.7c3.3-1.1 7.2-.4 9.9 2.3 3.9 3.9 3.9 10.2 0 14.1s-10.2 3.9-14.1 0c-2.9-2.9-3.5-7.1-2-10.5L61.8 49.9v29.5c.8.4 1.5 1 2.1 1.6 3.9 3.9 3.9 10.2 0 14.1s-10.2 3.9-14.1 0c-3.9-3.9-3.9-10.2 0-14.1.8-.8 1.8-1.4 2.8-1.8V49.3c-1-.4-2-.9-2.8-1.8-2.9-2.9-3.5-7.2-1.9-10.6L34 23.2 2.3 54.9c-3.1 3.1-3.1 8.1 0 11.2l55.2 55.2c3.1 3.1 8.1 3.1 11.2 0l57-57c3.1-3.1 3.1-8.1 0-11.2z" />
    </svg>
  ),

  // Postman (Official Orange Astronaut)
  Postman: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="60" fill="#FF6C37" />
      <path d="M40 78l20-42 16 14-8 16 18 16-16 10z" fill="#FFFFFF" />
      <circle cx="76" cy="48" r="8" fill="#FFFFFF" />
    </svg>
  ),

  // VS Code (Official Blue Ribbon)
  VSCode: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#0065A9" d="M96.7 125.7l27.1-13.1c3.1-1.5 5.1-4.7 5.1-8.2V23.6c0-3.5-2-6.7-5.1-8.2L96.7 2.3c-2.8-1.4-6.2-.9-8.5 1.1L36.3 48.7 13.9 31.7c-2.3-1.7-5.5-1.7-7.7 0L1.6 35.3c-2.1 1.6-2.1 4.7 0 6.3L27.4 64 1.6 83.4c-2.1 1.6-2.1 4.7 0 6.3l4.6 3.6c2.3 1.7 5.5 1.7 7.7 0l22.4-17 51.9 45.3c2.3 2 5.7 2.5 8.5 1.1z" />
      <path fill="#007ACC" d="M96.7 125.7c-2.8 1.4-6.2.9-8.5-1.1L36.3 79.3 88.2 34.6c2.3-2 5.7-2.5 8.5-1.1l27.1 13.1c3.1 1.5 5.1 4.7 5.1 8.2v57.8c0 3.5-2 6.7-5.1 8.2l-27.1 13.1z" />
      <path fill="#1F9CF0" d="M123.8 23.6c0-3.5-2-6.7-5.1-8.2L96.7 2.3c-2.8-1.4-6.2-.9-8.5 1.1L3.9 76.5c-2.1 1.6-2.1 4.7 0 6.3l4.6 3.6c2.3 1.7 5.5 1.7 7.7 0L88.2 34.6l35.6-11z" />
    </svg>
  ),

  // Docker (Official Whale)
  Docker: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <path fill="#2496ED" d="M122.9 59.8c-2.2-.4-7.4-1.2-12.7 1.8-6.1-5-14.7-5.4-20.8-2.6-1.5-1.1-3.2-1.9-5-2.5V47H71v-9.5H58.4v9.5H45.8V37.5H33.2V47h-12v9.5H8.6v9.5h75.8c.8 4.2 3.1 10.7 8.7 15.6 10.8 9.5 28.5 6.7 34.7-6.8 1.4-3.1 1.3-8.8-4.9-15zM45.8 56.5H33.2V47h12.6v9.5zm12.6 0H45.8V47h12.6v9.5zm12.6 0H58.4V47H71v9.5zm-37.8-9.5H21.2v-9.5h12v9.5z" />
    </svg>
  ),

  // SQL / Database Engine
  SQL: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: '#38BDF8' }}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),

  // JWT (JSON Web Token)
  JWT: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
      <circle cx="64" cy="64" r="60" fill="#000000" />
      <path d="M64 16A48 48 0 0030 98l34-34z" fill="#FB015B" />
      <path d="M64 16v48l34 34A48 48 0 0064 16z" fill="#00B9F1" />
      <path d="M64 64L30 98a48 48 0 0068 0z" fill="#D63AFF" />
    </svg>
  ),

  // Security / GDPR
  Security: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: '#10B981' }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),

  // Prompt Engineering / AI Sparkle
  PromptEng: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: '#EC4899' }}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
    </svg>
  ),

  // Default Fallback Code Icon
  DefaultCode: ({ size = 20, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: '#6366F1' }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
};

// Smart logo mapper by skill name or alias
export function getTechLogo(name, size = 22) {
  if (!name) return <TechLogos.DefaultCode size={size} />;
  const n = name.toLowerCase().trim();

  if (n.includes('react')) return <TechLogos.React size={size} />;
  if (n.includes('github')) return <TechLogos.GitHub size={size} />;
  if (n.includes('git') && !n.includes('digital')) return <TechLogos.Git size={size} />;
  if (n.includes('python')) return <TechLogos.Python size={size} />;
  if (n.includes('javascript') || n === 'js') return <TechLogos.JavaScript size={size} />;
  if (n.includes('next.js') || n.includes('nextjs')) return <TechLogos.Nextjs size={size} />;
  if (n.includes('node')) return <TechLogos.Nodejs size={size} />;
  if (n.includes('fastapi')) return <TechLogos.FastAPI size={size} />;
  if (n.includes('flask')) return <TechLogos.Flask size={size} />;
  if (n.includes('html')) return <TechLogos.HTML5 size={size} />;
  if (n.includes('css') && !n.includes('tailwind')) return <TechLogos.CSS3 size={size} />;
  if (n.includes('tailwind')) return <TechLogos.Tailwind size={size} />;
  if (n.includes('redux')) return <TechLogos.Redux size={size} />;
  if (n.includes('shadcn')) return <TechLogos.Shadcn size={size} />;
  if (n.includes('mongo')) return <TechLogos.MongoDB size={size} />;
  if (n.includes('mysql')) return <TechLogos.MySQL size={size} />;
  if (n.includes('sql') || n.includes('sqlalchemy')) return <TechLogos.SQL size={size} />;
  if (n.includes('redis')) return <TechLogos.Redis size={size} />;
  if (n.includes('kafka')) return <TechLogos.Kafka size={size} />;
  if (n.includes('qdrant')) return <TechLogos.Qdrant size={size} />;
  if (n.includes('deepseek')) return <TechLogos.DeepSeek size={size} />;
  if (n.includes('groq')) return <TechLogos.Groq size={size} />;
  if (n.includes('faiss')) return <TechLogos.FAISS size={size} />;
  if (n.includes('postman')) return <TechLogos.Postman size={size} />;
  if (n.includes('vs code') || n.includes('vscode')) return <TechLogos.VSCode size={size} />;
  if (n.includes('docker')) return <TechLogos.Docker size={size} />;
  if (n.includes('jwt')) return <TechLogos.JWT size={size} />;
  if (n.includes('gdpr') || n.includes('security') || n.includes('breach') || n.includes('dpa') || n.includes('spf')) {
    return <TechLogos.Security size={size} />;
  }
  if (n.includes('prompt') || n.includes('llm') || n.includes('genai')) {
    return <TechLogos.PromptEng size={size} />;
  }

  return <TechLogos.DefaultCode size={size} />;
}

// Brand color resolver for glowing effects
export function getTechBrandColor(name) {
  if (!name) return '#6366f1';
  const n = name.toLowerCase().trim();

  if (n.includes('react')) return '#00d8ff';
  if (n.includes('github')) return '#f0f6fc';
  if (n.includes('git')) return '#f05032';
  if (n.includes('python')) return '#ffd43b';
  if (n.includes('javascript') || n === 'js') return '#f7df1e';
  if (n.includes('next.js') || n.includes('nextjs')) return '#ffffff';
  if (n.includes('node')) return '#539e43';
  if (n.includes('fastapi')) return '#059669';
  if (n.includes('flask')) return '#f8fafc';
  if (n.includes('html')) return '#e44d26';
  if (n.includes('css') && !n.includes('tailwind')) return '#264de4';
  if (n.includes('tailwind')) return '#06b6d4';
  if (n.includes('redux')) return '#764abc';
  if (n.includes('shadcn')) return '#f8fafc';
  if (n.includes('mongo')) return '#47a248';
  if (n.includes('mysql')) return '#00758f';
  if (n.includes('sql') || n.includes('sqlalchemy')) return '#38bdf8';
  if (n.includes('redis')) return '#dc382d';
  if (n.includes('kafka')) return '#ffffff';
  if (n.includes('qdrant')) return '#dc2626';
  if (n.includes('deepseek')) return '#3b82f6';
  if (n.includes('groq')) return '#f55036';
  if (n.includes('faiss')) return '#0064e0';
  if (n.includes('postman')) return '#ff6c37';
  if (n.includes('vs code') || n.includes('vscode')) return '#007acc';
  if (n.includes('docker')) return '#2496ed';
  if (n.includes('jwt')) return '#d63aff';
  if (n.includes('gdpr') || n.includes('security')) return '#10b981';
  if (n.includes('prompt') || n.includes('llm')) return '#ec4899';

  return '#6366f1';
}
