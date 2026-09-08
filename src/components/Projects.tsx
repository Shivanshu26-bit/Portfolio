interface TopProject {
  id: string;
  name: string;
  category: string;
  categoryTags: string[];
  description: string;
  techStack: string;
  github: string;
  demo?: string;
}

interface ProjectsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

const featuredProjects: TopProject[] = [
  {
    id: 'ai-resume-studio',
    name: 'AI Resume Studio',
    category: 'Full-Stack & AI',
    categoryTags: ['FULL-STACK', 'AI & DEVELOPER TOOLS'],
    description: 'Full-stack AI resume platform with Gemini, Firebase, document parsing and PDF generation.',
    techStack: 'React 19 • TypeScript • Express • Node.js • Google Gemini • Firebase • Docker • Render',
    github: 'https://github.com/Shivanshu26-bit/ai-resume-studio',
    demo: 'https://ai-resume-studio-feyx.onrender.com/',
  },
  {
    id: 'smartattend-erp',
    name: 'SmartAttend ERP',
    category: 'Full-Stack ERP',
    categoryTags: ['FULL-STACK'],
    description: 'Attendance/ERP platform involving authentication, APIs, database systems, verification and dashboards.',
    techStack: 'JavaScript • Node.js • Express • MongoDB Atlas • JWT • Docker Compose • GitHub Actions',
    github: 'https://github.com/Shivanshu26-bit/SmartAttend-ERP',
  },
  {
    id: 'devlens',
    name: 'DevLens',
    category: 'Developer Tooling & Static Analysis',
    categoryTags: ['AI & DEVELOPER TOOLS'],
    description: 'GitHub repository analysis platform with React/TypeScript frontend and Python/FastAPI backend.',
    techStack: 'Python • FastAPI • Uvicorn • Pydantic • React • TypeScript • Docker • Pytest',
    github: 'https://github.com/Shivanshu26-bit/Dev-Lens',
  },
  {
    id: 'aptos-zk-badge',
    name: 'Aptos ZK Badge',
    category: 'Web3 & Blockchain',
    categoryTags: ['WEB3 / BLOCKCHAIN'],
    description: 'Blockchain/Web3 project using Aptos and Move with privacy/zero-knowledge concepts.',
    techStack: 'Aptos • Move • Smart Contracts • Zero-Knowledge Concepts • Cryptographic Hashing',
    github: 'https://github.com/Shivanshu26-bit/aptos-zk-badge',
  },
  {
    id: 'car-game',
    name: 'CAR-GAME (Street Horizon)',
    category: 'Game Development',
    categoryTags: ['GAME DEVELOPMENT'],
    description: '3D racing game built with Godot/GDScript and custom gameplay/vehicle systems.',
    techStack: 'Godot 4 • GDScript • 3D Vehicle Physics • Autonomous AI • JSON Save Systems',
    github: 'https://github.com/Shivanshu26-bit/CAR-GAME',
  },
];

const filterTabs = [
  { id: 'ALL', label: 'All Builds (5)' },
  { id: 'FULL-STACK', label: 'Full-Stack (2)' },
  { id: 'AI & DEVELOPER TOOLS', label: 'AI & Tools (2)' },
  { id: 'WEB3 / BLOCKCHAIN', label: 'Web3 (1)' },
  { id: 'GAME DEVELOPMENT', label: 'Game Dev (1)' },
];

export default function Projects({ selectedCategory, onSelectCategory }: ProjectsProps) {
  const filteredList = selectedCategory === 'ALL'
    ? featuredProjects
    : featuredProjects.filter((p) => p.categoryTags.includes(selectedCategory));

  return (
    <section id="projects" className="section section-neutral">
      <div className="container">
        <div className="section-label">Featured Projects</div>
        <h2 className="section-title">What I've built.</h2>
        <p className="section-subtitle">
          Five core applications across full-stack web, developer tools, blockchain systems, and 3D game engines.
        </p>

        {/* Filter Buttons */}
        <div className="projects-filter-bar">
          <div className="filter-pill-group">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`filter-pill-btn ${selectedCategory === tab.id ? 'active' : ''}`}
                onClick={() => onSelectCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {selectedCategory !== 'ALL' && (
            <button
              type="button"
              className="filter-reset-btn"
              onClick={() => onSelectCategory('ALL')}
            >
              Reset to All (5)
            </button>
          )}
        </div>

        {/* Project Cards */}
        <div className="top-projects-list">
          {filteredList.map((p) => (
            <article key={p.id} className="top-project-card">
              <div className="top-project-header">
                <div>
                  <span className="top-project-category">{p.category}</span>
                  <h3 className="top-project-name">{p.name}</h3>
                </div>

                <div className="top-project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`View ${p.name} source code on GitHub`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      aria-label={`View live demo of ${p.name}`}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <p className="top-project-desc">{p.description}</p>

              <div className="top-project-tech-row">
                <span className="tech-row-label">Stack:</span>
                <span className="tech-row-items">{p.techStack}</span>
              </div>
            </article>
          ))}
        </div>

        {/* More Work note */}
        <div className="more-work-banner">
          <span>Looking for more builds?</span>
          <a 
            href="https://github.com/Shivanshu26-bit/Bike-Game" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="more-work-link"
          >
            Bike Game (Three.js 3D stunt racer) &rarr;
          </a>
          <span className="banner-separator">&bull;</span>
          <a 
            href="https://github.com/Shivanshu26-bit?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="more-work-link"
          >
            All 31 Repositories on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
