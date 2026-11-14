interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask', 'FastAPI'],
  },
  {
    title: 'Databases',
    items: ['MongoDB Atlas', 'PostgreSQL'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Docker Compose'],
  },
  {
    title: 'AI & Data',
    items: ['Google Gemini / AI APIs', 'Pandas', 'Scikit-learn', 'SQL', 'Tableau Public'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-tint-red">
      <div className="container">
        <div className="section-label">02 / The toolkit</div>
        <h2 className="section-title">Tools behind the work.</h2>
        <p className="section-subtitle">
          Direct practical experience across programming languages, full-stack engineering, databases, DevOps tools, and AI solutions.
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
