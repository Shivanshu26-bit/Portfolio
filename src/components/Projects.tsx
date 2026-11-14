import { categories, projects, type Category } from '../data/projects';
interface Props { selectedCategory: Category; onSelectCategory: (category: Category) => void }
export default function Projects({ selectedCategory, onSelectCategory }: Props) {
  const visible = projects.filter(p => selectedCategory === 'All work' || p.category === selectedCategory);
  return <section id="projects" className="section projects-section"><div className="container">
    <div className="section-heading"><div><div className="section-label">01 / Selected work</div><h2 className="section-title">Ideas, built into things.</h2></div><p className="section-aside">From full-stack applications to data science.<br />A selection of what I’ve been working on.</p></div>
    <div className="project-filters" aria-label="Filter projects">{categories.map(cat => <button key={cat} type="button" aria-pressed={cat === selectedCategory} className={cat === selectedCategory ? 'active' : ''} onClick={() => onSelectCategory(cat)}>{cat}<span>{projects.filter(p => cat === 'All work' || p.category === cat).length}</span></button>)}</div>
    <p className="sr-only" role="status">Showing {visible.length} projects</p>
    <div className="project-grid">{visible.map(p => <article className={`project-card ${p.color}`} key={p.repo}>
      <div className="project-topline"><span>{p.category}</span><span>{p.fresh ? '↗ Recent work' : p.date}</span></div>
      <div className="project-art" aria-hidden="true"><span className="project-number">{p.mark}</span><span className="project-concept">{p.title}</span></div>
      <div className="project-body"><p className="project-date">{p.date}</p><h3><a href={`https://github.com/Shivanshu26-bit/${p.repo}`} target="_blank" rel="noopener noreferrer">{p.name}<span aria-hidden="true">↗</span></a></h3><p>{p.description}</p><ul className="stack-tags">{p.stack.map(t => <li key={t}>{t}</li>)}</ul><div className="project-bottom"><span>{p.detail}</span><a href={`https://github.com/Shivanshu26-bit/${p.repo}`} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.name} source on GitHub`}>Source ↗</a></div></div>
    </article>)}</div>
    <a className="text-link more-projects" href="https://github.com/Shivanshu26-bit?tab=repositories" target="_blank" rel="noopener noreferrer">Explore all repositories on GitHub <span>↗</span></a>
  </div></section>;
}
