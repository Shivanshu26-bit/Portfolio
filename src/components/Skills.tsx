interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'GDScript', 'Move', 'C / C++', 'HTML5 / CSS3'],
  },
  {
    title: 'Frontend',
    items: ['React 19', 'Vite', 'Next.js', 'Vanilla JavaScript', 'Three.js', 'Responsive Web Design'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'JWT Authentication', 'Middleware Engineering'],
  },
  {
    title: 'Databases',
    items: ['MongoDB Atlas', 'Firebase / Firestore', 'Document Stores', 'Relational Schema Design'],
  },
  {
    title: 'AI / Developer Tools',
    items: ['Google Gemini API', 'Codex CLI Middleware', 'DevLens Code Analysis', 'Git / GitHub', 'Postman'],
  },
  {
    title: 'Cloud / DevOps',
    items: ['Docker', 'Docker Compose', 'Render Deployment', 'GitHub Actions (CI/CD)'],
  },
  {
    title: 'Web3',
    items: ['Aptos', 'Move Language', 'Smart Contracts', 'Zero-Knowledge Proof Concepts'],
  },
  {
    title: 'Game Development',
    items: ['Godot 4', 'GDScript', '3D Vehicle Physics', 'Autonomous AI Logic', 'Custom Physics Systems'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-tint-red">
      <div className="container">
        <div className="section-label">Technical Stack</div>
        <h2 className="section-title">Skills & technologies.</h2>
        <p className="section-subtitle">
          Direct practical experience across systems, full-stack web, AI tooling, Web3, and game architecture.
        </p>

        <div className="skills-structured-grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category-card">
              <div className="skill-cat-header">
                <span className="skill-cat-marker">▪</span>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <ul className="skill-cat-items">
                {cat.items.map((item, idx) => (
                  <li key={item} className="skill-item">
                    {item}
                    {idx < cat.items.length - 1 && <span className="skill-item-sep">•</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
