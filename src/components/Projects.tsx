interface TopProject {
  id: string;
  name: string;
  category: string;
  categoryTags: string[];
  description: string;
  techStack: string;
  features: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

interface ProjectsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

const featuredProjects: TopProject[] = [
  {
    id: 'dev-lens',
    name: 'Dev-Lens',
    category: 'Developer Tooling & Code Analysis',
    categoryTags: ['FULL-STACK', 'AI & DEVELOPER TOOLS'],
    description: 'A developer tool that analyzes a GitHub repository and generates a structured engineering report.',
    techStack: 'React 19 • Vite • TypeScript • Tailwind CSS • Python 3.13 • FastAPI • PostgreSQL • Docker',
    features: [
      'GitHub repository analysis',
      'File and language detection',
      'Code-line metrics',
      'Code quality checks',
      'Security scanning',
      'Secret masking',
      'GitHub OAuth',
      'Gemini-based analysis',
      'PostgreSQL with SQLAlchemy/Alembic',
      'Docker Compose',
      'Automated backend tests',
    ],
    github: 'https://github.com/Shivanshu26-bit/Dev-Lens',
    featured: true,
  },
  {
    id: 'smartattend-erp',
    name: 'SmartAttend ERP',
    category: 'Full-Stack ERP & Attendance',
    categoryTags: ['FULL-STACK'],
    description: 'An attendance management system using face verification and GPS-based attendance tracking.',
    techStack: 'React.js • Node.js • Express.js • MongoDB Atlas • Google OAuth',
    features: [
      'Face verification',
      'GPS-based attendance tracking',
      'Google OAuth login',
      'MongoDB Atlas',
      'Separate student and faculty dashboards',
    ],
    github: 'https://github.com/Shivanshu26-bit/SmartAttend-ERP',
    featured: true,
  },
  {
    id: 'ai-resume-recommendation-system',
    name: 'AI Resume Recommendation System',
    category: 'AI & Web Application',
    categoryTags: ['AI & DEVELOPER TOOLS'],
    description: 'A web application that compares a resume with a job description and returns AI-generated feedback.',
    techStack: 'Python • Flask • AI API • HTML • CSS',
    features: [
      'Resume upload',
      'Job description comparison',
      'AI-generated feedback',
      'Simple upload-and-results interface',
    ],
  },
  {
    id: 'cyberpulse',
    name: 'CyberPulse',
    category: 'Cybersecurity & Web',
    categoryTags: ['WEB / JAVASCRIPT'],
    description: 'A responsive cybersecurity news and awareness website with interactive JavaScript features.',
    techStack: 'HTML • CSS • JavaScript',
    features: [
      'Cybersecurity news',
      'Security awareness content',
      'Responsive design',
      'Interactive JavaScript features',
    ],
  },
];

const filterTabs = [
  { id: 'ALL', label: 'All Builds (4)' },
  { id: 'FULL-STACK', label: 'Full-Stack (2)' },
  { id: 'AI & DEVELOPER TOOLS', label: 'AI & Tools (2)' },
  { id: 'WEB / JAVASCRIPT', label: 'Web & Security (1)' },
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
          Featured engineering applications across full-stack development, developer tooling, AI systems, and responsive web platforms.
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
              Reset to All (4)
            </button>
          )}
        </div>

        {/* Project Cards */}
        <div className="top-projects-list">
          {filteredList.length === 0 ? (
            <div className="top-project-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '0.85rem', fontSize: '0.92rem' }}>
                No featured projects currently listed under "{selectedCategory}".
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => onSelectCategory('ALL')}
              >
                View All Builds (4) &rarr;
              </button>
            </div>
          ) : (
            filteredList.map((p) => (
              <article key={p.id} className={`top-project-card ${p.featured ? 'featured-project' : ''}`}>
                <div className="top-project-header">
                  <div className="top-project-title-group">
                    <div className="top-project-category-row">
                      <span className="top-project-category">{p.category}</span>
                      {p.featured && (
                        <span className="top-project-featured-badge">Featured Build</span>
                      )}
                    </div>
                    <h3 className="top-project-name">{p.name}</h3>
                  </div>

                  <div className="top-project-links">
                    {p.github && (
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
                    )}
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

                <div className="top-project-features">
                  <div className="top-project-features-label">Key Features:</div>
                  <div className="top-project-features-grid">
                    {p.features.map((feature) => (
                      <div key={feature} className="top-project-feature-item">
                        <span className="top-project-feature-bullet">▪</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="top-project-tech-row">
                  <span className="tech-row-label">Stack:</span>
                  <span className="tech-row-items">{p.techStack}</span>
                </div>
              </article>
            ))
          )}
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
