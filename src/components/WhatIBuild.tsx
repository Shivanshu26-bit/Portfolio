interface CategoryItem {
  id: string;
  title: string;
  count: string;
  summary: string;
  projects: string[];
}

interface WhatIBuildProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

const whatIDoPoints = [
  'Build full-stack web applications',
  'Develop AI-powered tools and developer utilities',
  'Explore Web3 and blockchain applications',
  'Build interactive games and technical experiments',
  'Participate in hackathons, competitions and tech communities',
];

const categories: CategoryItem[] = [
  {
    id: 'FULL-STACK',
    title: 'FULL-STACK',
    count: '2 Projects',
    summary: 'Production web apps with React, Express, Node.js, MongoDB, and Firebase.',
    projects: ['AI Resume Studio', 'SmartAttend ERP'],
  },
  {
    id: 'AI & DEVELOPER TOOLS',
    title: 'AI & DEVELOPER TOOLS',
    count: '2 Projects',
    summary: 'Gemini AI integration, FastAPI static code analysis, and CLI hooks.',
    projects: ['DevLens', 'AI Resume Studio'],
  },
  {
    id: 'WEB3 / BLOCKCHAIN',
    title: 'WEB3 / BLOCKCHAIN',
    count: '1 Project',
    summary: 'Smart contracts in Move on Aptos with zero-knowledge verification concepts.',
    projects: ['Aptos ZK Badge'],
  },
  {
    id: 'GAME DEVELOPMENT',
    title: 'GAME DEVELOPMENT',
    count: '1 Project',
    summary: '3D vehicle physics, custom driving systems, and AI logic in Godot 4.',
    projects: ['CAR-GAME (Street Horizon)'],
  },
];

export default function WhatIBuild({ selectedCategory, onSelectCategory }: WhatIBuildProps) {
  const handleCategoryClick = (id: string) => {
    const next = selectedCategory === id ? 'ALL' : id;
    onSelectCategory(next);
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="what-i-build" className="section section-neutral">
      <div className="container">
        {/* WHAT I DO Concise Block */}
        <div className="what-i-do-container">
          <div className="section-label">WHAT I DO</div>
          <div className="what-i-do-grid">
            {whatIDoPoints.map((point) => (
              <div key={point} className="what-i-do-item">
                <span className="what-i-do-bullet">▪</span>
                <span className="what-i-do-text">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Compact Filter Categories */}
        <div className="what-build-header-block">
          <div>
            <div className="section-label">Technical Focus</div>
            <h2 className="section-title">Core disciplines.</h2>
          </div>
          <p className="what-build-subtext">
            Click any category to filter my featured builds below:
          </p>
        </div>

        <div className="what-i-build-grid">
          {categories.map((cat, idx) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`what-build-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat.id)}
                aria-pressed={isSelected}
              >
                <div className="what-build-header">
                  <span className="what-build-num">0{idx + 1}</span>
                  <h3 className="what-build-category">{cat.title}</h3>
                </div>
                <p className="what-build-summary">{cat.summary}</p>
                <div className="what-build-projects">
                  {cat.projects.map((p) => (
                    <span key={p} className="what-build-pill">
                      {p}
                    </span>
                  ))}
                </div>
                <div className="what-build-filter-hint">
                  {isSelected ? '✓ Filter active below' : 'Click to filter projects →'}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
