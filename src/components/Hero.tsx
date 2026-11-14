import profilePhoto from '../assets/profile.jpeg';
export default function Hero() {
  return <section id="home" className="hero"><div className="container">
    <div className="hero-topline"><span>Independent portfolio / Vol. 01</span><span>Code, data & everything in between</span></div>
    <h1 className="nameplate" aria-label="Shivanshu Shukla">Shivanshu<span>Shukla<span className="name-star" aria-hidden="true">✳</span></span></h1>
    <div className="hero-layout"><div className="hero-margin"><span className="margin-index">A little introduction</span><svg viewBox="0 0 120 70" fill="none" aria-hidden="true"><path d="M8 12C80 0 100 20 58 35S8 48 94 53m-14-12 17 13-19 7" stroke="currentColor" strokeWidth="1.6"/></svg><span className="handwritten">Always a work<br />in progress.</span></div>
      <div className="hero-text"><h2>I learn things.<br />Then I <em>make things.</em></h2><p className="hero-intro">I’m a BCA student working across full-stack development, AI tools, and data science. This is a collection of my projects, experiments, and the communities I’m part of.</p><div className="hero-buttons"><a href="#projects" className="btn btn-primary">Take a look around <span aria-hidden="true">↓</span></a><a href="https://www.linkedin.com/in/shivanshu-shukla-183771380/" target="_blank" rel="noopener noreferrer" className="hero-social">Say hello ↗</a></div><p className="hero-education">BCA · Artificial Intelligence & Data Science<br /><strong>K.R. Mangalam University</strong> / 2025–2028</p></div>
      <figure className="portrait"><span className="photo-tape" aria-hidden="true"/><div className="portrait-image"><img src={profilePhoto} alt="Shivanshu Shukla at a library" width="420" height="500" fetchPriority="high" /></div><figcaption><span>Me, away from the keyboard.</span><span aria-hidden="true">↗</span></figcaption></figure>
    </div>
    <div className="hero-footnote"><span><b>Currently exploring</b> / Data & machine learning</span><a href="#community">Also building a community called 2TechY ↗</a></div>
  </div></section>;
}
