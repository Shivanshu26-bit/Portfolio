import profilePhoto from '../assets/profile.jpeg';
export default function Hero() {
  return <section id="home" className="hero"><div className="container">
    <div className="hero-topline"><span><i /> Developer · Student · Community builder</span><span>Portfolio / 2026</span></div>
    <div className="hero-layout"><div className="hero-text"><p className="hero-eyebrow">Hi, I’m Shivanshu Shukla.</p><h1>Curiosity in.<br /><span>Real projects out.</span></h1><p className="hero-intro">I build web applications, developer tools, and AI-powered solutions. Now exploring how data and machine learning can turn complex questions into useful answers.</p><div className="hero-buttons"><a href="#projects" className="btn btn-primary">Explore my work <span aria-hidden="true">↘</span></a><a href="https://www.linkedin.com/in/shivanshu-shukla-183771380/" target="_blank" rel="noopener noreferrer" className="hero-social">Connect on LinkedIn ↗</a></div><p className="hero-education">BCA · Artificial Intelligence & Data Science<br /><strong>K.R. Mangalam University</strong> <span>2025–2028</span></p></div>
    <figure className="portrait"><div className="portrait-image"><img src={profilePhoto} alt="Shivanshu Shukla" width="420" height="500" fetchPriority="high" /></div><figcaption><span>Learning. Building. Sharing.</span><span aria-hidden="true">✳</span></figcaption></figure></div>
    <div className="hero-footnote"><span>Full-stack development</span><span>AI & developer tools</span><span>Data science & ML</span><a href="#community">Founder, 2TechY ↗</a></div>
  </div></section>;
}
