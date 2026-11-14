import { useState } from 'react';
import { categories, projects, type Category } from '../data/projects';
interface Props { selectedCategory: Category; onSelectCategory: (category: Category) => void }
const sketches: Record<string, { input: string; middle: string; output: string; note: string }> = {
  Earthquake_Analysis: { input: 'USGS records', middle: 'Explore / train', output: 'Magnitude class', note: '7,651 records. Three model families. One question: what can the data tell us?' },
  'Healthcare-Appointment-Dashboard': { input: 'Raw records', middle: 'SQL pipeline', output: 'Tableau dashboard', note: 'Bronze → Silver → Gold. Making appointment patterns easier to see.' },
  'Backend-Assignment-3': { input: 'REST request', middle: 'Validate / query', output: 'Inventory data', note: 'The useful work happens between the request and the response.' },
  'Dev-Lens': { input: 'GitHub repo', middle: 'Scan / analyze', output: 'Engineering report', note: 'A repository is more than its file count. Look a little closer.' },
  'ai-resume-studio': { input: 'Your experience', middle: 'Edit / improve', output: 'Resume PDF', note: 'An assistant for presenting your experience, with editable suggestions.' },
  'SmartAttend-ERP': { input: 'Face + location', middle: 'Verify / record', output: 'Attendance view', note: 'Connecting verification, location, and the classroom dashboard.' },
};
function Workflow({ repo }: { repo: string }) {
  const s = sketches[repo];
  return <div className="workflow"><p className="workflow-label">Architecture / workflow sketch</p><svg viewBox="0 0 580 125" role="img" aria-label={`${s.input}, then ${s.middle}, then ${s.output}`}>
    <defs><marker id={`arrow-${repo}`} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1l5 3-5 3" fill="none" stroke="currentColor"/></marker></defs>
    <rect x="4" y="30" width="159" height="65" rx="2"/><rect x="211" y="26" width="159" height="73" rx="2" className="workflow-middle"/><rect x="418" y="30" width="158" height="65" rx="2"/>
    <path d="M168 62h34m174 0h33" markerEnd={`url(#arrow-${repo})`}/>
    <text x="83" y="68">{s.input}</text><text x="290" y="68">{s.middle}</text><text x="497" y="68">{s.output}</text>
    <text className="workflow-step" x="83" y="16">01 / INPUT</text><text className="workflow-step" x="290" y="12">02 / PROCESS</text><text className="workflow-step" x="497" y="16">03 / OUTPUT</text>
  </svg><p className="workflow-note">{s.note}</p></div>;
}
export default function Projects({ selectedCategory, onSelectCategory }: Props) {
  const [selectedRepo, setSelectedRepo] = useState<string>(projects[0].repo);
  const visible = projects.filter(p => selectedCategory === 'All work' || p.category === selectedCategory);
  const selected = visible.find(p => p.repo === selectedRepo) ?? visible[0];
  return <section id="projects" className="section projects-section"><div className="container">
    <div className="section-heading"><div><div className="section-label">01 / Selected projects</div><h2 className="section-title">Built to <em>figure it out.</em></h2></div><p className="section-aside">Explore the projects, the tools,<br />and the thinking behind each build.</p></div>
    <div className="project-filters" aria-label="Filter projects">{categories.map(cat => <button key={cat} type="button" aria-pressed={cat === selectedCategory} className={cat === selectedCategory ? 'active' : ''} onClick={() => onSelectCategory(cat)}>{cat}<span>{projects.filter(p => cat === 'All work' || p.category === cat).length.toString().padStart(2,'0')}</span></button>)}</div>
    <p className="sr-only" role="status">Showing {visible.length} project files. Open file: {selected.name}.</p>
    <div className="project-desk"><div className="project-index" aria-label="Choose a project">{visible.map(p => <button type="button" key={p.repo} aria-pressed={selected.repo === p.repo} aria-controls="project-file" className={`project-index-row ${selected.repo === p.repo ? 'selected' : ''}`} onClick={() => setSelectedRepo(p.repo)}><span className="index-number">{p.mark}</span><span><strong>{p.name}</strong><small>{p.category} / {p.date}</small></span><span className="index-arrow" aria-hidden="true">↗</span></button>)}<a className="all-files" href="https://github.com/Shivanshu26-bit?tab=repositories" target="_blank" rel="noopener noreferrer">The rest lives on GitHub ↗</a></div>
      <article id="project-file" className={`project-file ${selected.color}`} aria-labelledby="project-title" key={selected.repo}><div className="file-header"><span>PROJECT / {selected.mark}</span><span>{selected.date}</span></div><div className="file-content"><p className="file-category">{selected.category} {selected.fresh && <span>Recent work</span>}</p><h3 id="project-title">{selected.name}</h3><p className="file-description">{selected.description}</p><Workflow repo={selected.repo}/><ul className="stack-tags">{selected.stack.map(t => <li key={t}>{t}</li>)}</ul><div className="file-footer"><span>{selected.detail}</span><a className="btn btn-primary" href={`https://github.com/Shivanshu26-bit/${selected.repo}`} target="_blank" rel="noopener noreferrer">Read the source ↗<span className="sr-only"> for {selected.name}</span></a></div></div></article>
    </div>
  </div></section>;
}
