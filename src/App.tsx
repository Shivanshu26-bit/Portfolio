import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hackathons from './components/Hackathons';
import Achievements from './components/Achievements';
import TwoTechY from './components/TwoTechY';
import Contact from './components/Contact';
import profilePhoto from './assets/profile.jpeg';
import { chapters, chapterFromHash, type ChapterId } from './data/chapters';
import type { Category } from './data/projects';

export default function App() {
  const [active, setActive] = useState<ChapterId | null>(() => typeof window === 'undefined' ? null : chapterFromHash(window.location.hash));
  const [category, setCategory] = useState<Category>('All work');
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstRender = useRef(true);
  const selected = chapters.find(chapter => chapter.id === active);
  const activeIndex = chapters.findIndex(chapter => chapter.id === active);

  function navigate(id: ChapterId | null) {
    if (id === active) return;
    window.history.pushState(null, '', id ? `#${id}` : '#menu');
    setActive(id);
  }
  useEffect(() => {
    const syncRoute = () => setActive(chapterFromHash(window.location.hash));
    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    return () => { window.removeEventListener('popstate', syncRoute); window.removeEventListener('hashchange', syncRoute); };
  }, []);
  useEffect(() => {
    document.title = `${selected ? selected.name : 'Select a chapter'} · Shivanshu Shukla`;
    if (firstRender.current) { firstRender.current = false; return; }
    headingRef.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [active]);

  function handleInternalLink(event: MouseEvent<HTMLDivElement>) {
    const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!anchor) return;
    const hash = anchor.getAttribute('href') ?? '';
    if (hash === '#main') { event.preventDefault(); document.getElementById('main')?.focus(); return; }
    event.preventDefault();
    navigate(chapterFromHash(hash));
  }
  const openProjects = (nextCategory: Category) => { setCategory(nextCategory); navigate('projects'); };

  return <div className={`chapter-app ${active ? 'chapter-is-open' : 'chapter-is-menu'}`} style={{ '--chapter-accent': selected?.accent ?? '#6ee7d2' } as CSSProperties} onClick={handleInternalLink} onKeyDown={event => { if (event.key === 'Escape' && active) navigate(null); }}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="chapter-header"><button type="button" className="chapter-brand" onClick={() => navigate(null)} aria-label="Shivanshu Shukla — return to chapter menu"><span className="brand-emblem" aria-hidden="true">S<span>S</span></span><span>SHIVANSHU SHUKLA<small>Developer / AI & Data Science student</small></span></button><div className="chapter-header-right"><span className="edition-label">PERSONAL ARCHIVE / 2026</span><a href="https://github.com/Shivanshu26-bit" target="_blank" rel="noopener noreferrer">GitHub ↗</a><button type="button" className="menu-return" onClick={() => navigate(null)} aria-current={active ? undefined : 'page'}><span aria-hidden="true">▦</span> Menu</button></div></header>
    <main id="main" tabIndex={-1}>
      {!active ? <div className="chapter-hub" key="menu"><section className="hub-intro"><div className="hub-eyebrow"><span/>THE STORY SO FAR</div><h1 ref={headingRef} tabIndex={-1}>Every build<br />starts with<br /><em>curiosity.</em></h1><p>I’m Shivanshu. A student, developer, and founder of 2TechY. Pick a chapter to get to know my work.</p><div className="hub-portrait"><div className="hub-orbit" aria-hidden="true"/><img src={profilePhoto} alt="Shivanshu Shukla at a library" width="960" height="1280" fetchPriority="high"/><span className="hub-portrait-tag">SHIVANSHU / IN FULL COLOUR</span><span className="hub-portrait-star" aria-hidden="true">✳</span></div><span className="hub-caption">Learning through the things I make.</span></section>
      <section className="chapter-selection" aria-labelledby="chapter-selection-title"><div className="selection-heading"><h2 id="chapter-selection-title">Choose your chapter</h2><span>07 CHAPTERS / YOUR ORDER</span></div><div className="chapter-grid">{chapters.map(chapter => <button type="button" key={chapter.id} className={`chapter-tile tile-${chapter.id}`} style={{ '--tile-accent': chapter.accent } as CSSProperties} onClick={() => navigate(chapter.id)}><span className="tile-top"><span>CH.{chapter.number}</span><span aria-hidden="true">↗</span></span><span className="tile-symbol" aria-hidden="true">{chapter.symbol}</span><strong>{chapter.name}</strong><span className="tile-description">{chapter.description}</span><span className="tile-bottom">{chapter.short}<span aria-hidden="true">OPEN →</span></span></button>)}</div><p className="selection-footnote">Start anywhere. Each chapter opens on its own.</p></section></div>
      : <div className="chapter-workspace"><nav className="chapter-rail" aria-label="Portfolio chapters"><p className="rail-label">CHAPTER SELECT</p>{chapters.map(chapter => <button type="button" key={chapter.id} className={`rail-button ${chapter.id === active ? 'is-active' : ''}`} aria-current={chapter.id === active ? 'page' : undefined} onClick={() => navigate(chapter.id)}><span>{chapter.number}</span><strong>{chapter.name}</strong><span aria-hidden="true">{chapter.id === active ? '↗' : '·'}</span></button>)}<button type="button" className="rail-all" onClick={() => navigate(null)}>← All chapters</button><p className="rail-note">One chapter at a time.<br />Press Esc for the menu.</p></nav><div className="chapter-reader" key={active}><div className="reader-topline"><span>PORTFOLIO / CHAPTER {selected?.number}</span><span>{selected?.short}</span></div><div className="reader-title"><h1 ref={headingRef} tabIndex={-1}>{selected?.name}</h1><span aria-hidden="true">{selected?.symbol}</span></div><div className="chapter-panel">
        {active === 'about' && <section className="about-chapter" aria-labelledby="about-title"><div className="about-visual"><img src={profilePhoto} alt="Shivanshu Shukla" width="960" height="1280"/><span>THE PERSON BEHIND THE PROJECTS</span></div><div className="about-copy"><div className="section-label">Student / Developer / Community builder</div><h2 id="about-title">Learning things.<br /><em>Making things.</em></h2><p>I’m Shivanshu Shukla, studying BCA in Artificial Intelligence & Data Science at K.R. Mangalam University (2025–2028).</p><p>I build web applications, developer tools, and data-science projects. I also founded 2TechY, a student community for programming, AI, cybersecurity, and collaborative learning.</p><div className="about-facts"><span>EDUCATION<strong>BCA · AI & Data Science</strong></span><span>UNIVERSITY<strong>K.R. Mangalam University</strong></span></div><div className="about-paths"><p>Where would you like to go next?</p><button type="button" onClick={() => openProjects('Full-stack')}>Full-stack work ↗</button><button type="button" onClick={() => openProjects('AI & Tools')}>AI & tools ↗</button><button type="button" onClick={() => openProjects('Data & ML')}>Data & ML ↗</button></div></div></section>}
        {active === 'projects' && <Projects selectedCategory={category} onSelectCategory={setCategory}/>}
        {active === 'skills' && <Skills/>}
        {active === 'community' && <TwoTechY/>}
        {active === 'achievements' && <Achievements/>}
        {active === 'events' && <Hackathons/>}
        {active === 'contact' && <Contact/>}
      </div><div className="reader-pagination"><button type="button" onClick={() => activeIndex === 0 ? navigate(null) : navigate(chapters[activeIndex - 1].id)}>← {activeIndex === 0 ? 'All chapters' : chapters[activeIndex - 1].name}</button><span>{selected?.number} / 07</span><button type="button" onClick={() => activeIndex === chapters.length - 1 ? navigate(null) : navigate(chapters[activeIndex + 1].id)}>{activeIndex === chapters.length - 1 ? 'All chapters' : chapters[activeIndex + 1].name} →</button></div></div></div>}
    </main><footer className="chapter-footer"><span>SHIVANSHU SHUKLA / © {new Date().getFullYear()}</span><span>Curiosity → Code → Community</span><a href="https://www.linkedin.com/in/shivanshu-shukla-183771380/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></footer>
  </div>;
}
