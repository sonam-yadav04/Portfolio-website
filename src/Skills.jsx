// src/components/Skills.jsx
import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Cpu, 
  Wrench, 
  Brain, 
  ShieldCheck, 
  Sparkles,
  Search,
  Filter
} from 'lucide-react';

const skillsData = [
  {
    category: 'languages',
    label: 'Languages',
    icon: Code2,
    color: '#38bdf8',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: true },
      { name: 'Python', level: 'Advanced', highlight: true },
      { name: 'SQL', level: 'Proficient' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
    ],
  },
  {
    category: 'frontend',
    label: 'Frontend Development',
    icon: Layers,
    color: '#10b981',
    skills: [
      { name: 'React.js', level: 'Advanced', highlight: true },
      { name: 'Next.js', level: 'Proficient', highlight: true },
      { name: 'Redux', level: 'Proficient' },
      { name: 'shadcn/ui', level: 'Proficient', highlight: true },
      { name: 'Responsive Design', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Proficient' },
    ],
  },
  {
    category: 'backend',
    label: 'Backend & APIs',
    icon: Cpu,
    color: '#f59e0b',
    skills: [
      { name: 'FastAPI', level: 'Advanced', highlight: true },
      { name: 'Flask', level: 'Advanced', highlight: true },
      { name: 'Node.js / Express', level: 'Advanced', highlight: true },
      { name: 'SQLAlchemy', level: 'Proficient' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'JWT Auth', level: 'Advanced' },
      { name: 'asyncio', level: 'Proficient' },
    ],
  },
  {
    category: 'data_infra',
    label: 'Data & Infrastructure',
    icon: Database,
    color: '#a855f7',
    skills: [
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Redis', level: 'Proficient', highlight: true },
      { name: 'Qdrant (Vector DB)', level: 'Proficient', highlight: true },
      { name: 'Kafka', level: 'Proficient', highlight: true },
    ],
  },
  {
    category: 'ai_tools',
    label: 'AI, LLM & Tools',
    icon: Brain,
    color: '#ec4899',
    skills: [
      { name: 'DeepSeek / LLM Integration', level: 'Advanced', highlight: true },
      { name: 'Groq API', level: 'Proficient', highlight: true },
      { name: 'FAISS Vector Search', level: 'Proficient', highlight: true },
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'Git / GitHub', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'VS Code', level: 'Advanced' },
    ],
  },
  {
    category: 'compliance',
    label: 'Compliance & Security',
    icon: ShieldCheck,
    color: '#6366f1',
    skills: [
      { name: 'GDPR / DPDP Consent Flows', level: 'Proficient', highlight: true },
      { name: 'Breach Detection Service', level: 'Proficient' },
      { name: 'DPA Documentation', level: 'Proficient' },
      { name: 'SPF/DKIM/DMARC Email Auth', level: 'Proficient', highlight: true },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillsData.filter((cat) => {
    if (activeCategory !== 'all' && cat.category !== activeCategory) return false;
    if (!searchQuery.trim()) return true;
    return (
      cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.skills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="section">
      <div className="section-content">
        <p className="section-eyebrow mono">// 02 tech-stack</p>
        <h2 className="section-title">Technical Expertise</h2>

        <div className="skills-filter-bar">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Skills ({totalSkillsCount})
            </button>
            {skillsData.map((cat) => (
              <button
                key={cat.category}
                className={`filter-tab ${activeCategory === cat.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.category)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skill-search">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skills (e.g. FastAPI, DeepSeek, Redis)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="skills-grid">
          {filteredCategories.map(({ category, label, icon: Icon, color, skills }) => (
            <div className="skill-category-card" key={category}>
              <div className="category-header">
                <div className="category-icon" style={{ background: `${color}20`, color: color }}>
                  <Icon size={22} />
                </div>
                <h3>{label}</h3>
                <span className="skill-count mono">{skills.length}</span>
              </div>
              
              <div className="skill-tags">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`skill-tag ${skill.highlight ? 'highlight-tag' : ''}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}