interface CategoryItem {
  id: string;
  title: string;
  summary: string;
  pills: string[];
  filterTag?: string;
  targetSection?: string;
  filterHint?: string;
}

interface WhatIBuildProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

const whatIDoPoints = [
  'Build practical full-stack web applications with modern frameworks',
  'Create developer tools for repository analysis and code metrics',
  'Integrate Google Gemini and AI APIs for intelligent analysis',
  'Design structured databases with MongoDB Atlas and PostgreSQL',
  'Develop cybersecurity awareness projects and secure web interfaces',
  'Organize student technology communities, hackathons, and workshops',
];

const categories: CategoryItem[] = [
  {
    id: 'full-stack',
    title: 'Full-Stack Web Applications',
    summary: 'Building practical web applications with React, Node.js, Express.js, Flask, and FastAPI.',
    pills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'FastAPI'],
    filterTag: 'FULL-STACK',
    filterHint: 'Filter full-stack builds →',
  },
  {
    id: 'dev-tools',
    title: 'Developer Tools',
    summary: 'Building developer-focused tools for GitHub repository analysis, code metrics, engineering reports, and development workflows.',
    pills: ['Dev-Lens', 'GitHub Analysis', 'Code Metrics', 'Docker'],
    filterTag: 'AI & DEVELOPER TOOLS',
    filterHint: 'Filter developer tool builds →',
  },
  {
    id: 'ai-apps',
    title: 'AI-Powered Applications',
    summary: 'Building applications that use Google Gemini and AI APIs for analysis, recommendations, and intelligent features.',
    pills: ['Google Gemini', 'AI APIs', 'Prompt Engineering'],
    filterTag: 'AI & DEVELOPER TOOLS',
    filterHint: 'Filter AI builds →',
  },
  {
    id: 'databases',
    title: 'Database-Driven Systems',
    summary: 'Working with MongoDB Atlas and PostgreSQL for structured application data and backend systems.',
    pills: ['MongoDB Atlas', 'PostgreSQL', 'Schemas', 'REST APIs'],
    filterTag: 'FULL-STACK',
    filterHint: 'Filter database-backed builds →',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Projects',
    summary: 'Building cybersecurity awareness and web projects while exploring security-focused development.',
    pills: ['CyberPulse', 'Security Awareness', 'Interactive JS'],
    filterTag: 'WEB / JAVASCRIPT',
    filterHint: 'Filter security & web builds →',
  },
  {
    id: 'community',
    title: 'Community & Technical Initiatives',
    summary: 'Building and contributing to student technology communities, hackathons, workshops, and technical outreach.',
    pills: ['2TechY Community', 'Campus Outreach', 'Hackathons'],
    targetSection: '#community',
    filterHint: 'View community initiative →',
  },
];

export default function WhatIBuild({ selectedCategory, onSelectCategory }: WhatIBuildProps) {
  const handleCategoryClick = (cat: CategoryItem) => {
    if (cat.targetSection) {
      document.querySelector(cat.targetSection)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (cat.filterTag) {
      const next = selectedCategory === cat.filterTag ? 'ALL' : cat.filterTag;
      onSelectCategory(next);
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="what-i-build" className="section section-neutral">
      <div className="container">
        {/* WHAT I DO Concise Block */}
        <div className="what-i-do-container">
          <div className="section-label">WHAT I BUILD</div>
          <div className="what-i-do-grid">
            {whatIDoPoints.map((point) => (
              <div key={point} className="what-i-do-item">
                <span className="what-i-do-bullet">▪</span>
                <span className="what-i-do-text">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6 Structured Focus Categories */}
        <div className="what-build-header-block">
          <div>
            <div className="section-label">Technical Focus</div>
            <h2 className="section-title">Core disciplines & work.</h2>
          </div>
          <p className="what-build-subtext">
            Areas of practical engineering, development workflows, and student leadership:
          </p>
        </div>

        <div className="what-i-build-grid">
          {categories.map((cat, idx) => {
            const isSelected = Boolean(cat.filterTag && selectedCategory === cat.filterTag);
            return (
              <button
                key={cat.id}
                type="button"
                className={`what-build-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat)}
                aria-pressed={isSelected}
              >
                <div className="what-build-header">
                  <span className="what-build-num">0{idx + 1}</span>
                  <h3 className="what-build-category">{cat.title}</h3>
                </div>
                <p className="what-build-summary">{cat.summary}</p>
                <div className="what-build-projects">
                  {cat.pills.map((pill) => (
                    <span key={pill} className="what-build-pill">
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="what-build-filter-hint">
                  {isSelected ? '✓ Filter active below' : cat.filterHint || 'Click to view projects →'}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
