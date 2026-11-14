import profilePhoto from '../assets/profile.jpeg';
export default function Hero() {
  return <section id="home" className="hero"><div className="container">
    <div className="hero-topline"><span>Personal portfolio / 2026</span><span>Full-stack · AI · Data science</span></div>
    <div className="hero-layout"><div className="hero-text"><p className="hero-eyebrow">Student. Developer. Community builder.</p><h1 className="nameplate" aria-label="Shivanshu Shukla">Shivanshu<br /><span>Shukla<span className="name-star" aria-hidden="true">↗</span></span></h1><h2>Learning by <em>making.</em></h2><p className="hero-intro">I’m a BCA student working across full-stack development, AI tools, and data science. These are my projects, experiments, and the communities I’m part of.</p><div className="hero-buttons"><a href="#projects" className="btn btn-primary">Explore the work <span aria-hidden="true">↓</span></a><a href="https://www.linkedin.com/in/shivanshu-shukla-183771380/" target="_blank" rel="noopener noreferrer" className="hero-social">Let’s connect ↗</a></div><p className="hero-education">BCA · Artificial Intelligence & Data Science<br /><strong>K.R. Mangalam University</strong> / 2025–2028</p></div>
      <figure className="portrait"><div className="portrait-image"><img src={profilePhoto} alt="Shivanshu Shukla at a library" width="420" height="500" fetchPriority="high" /></div><figcaption><span>Shivanshu Shukla</span><span>Developer / Student</span></figcaption><div className="portrait-note"><span aria-hidden="true">✳</span>Turning what I learn<br />into things you can use.</div></figure>
    </div>
    <div className="hero-footnote"><span><b>Currently exploring</b> / Data & machine learning</span><a href="#community">Behind the community / 2TechY ↗</a></div>
  </div></section>;
}
