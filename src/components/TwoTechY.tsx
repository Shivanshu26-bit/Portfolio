export default function TwoTechY() {
  return (
    <section id="community" className="section section-neutral" style={{ paddingTop: '1.5rem', paddingBottom: '2.5rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {/* 2TechY Community — Founder Role */}
          <div className="two-techy-card" style={{ borderLeft: '3.5px solid var(--red-primary)' }}>
            <div className="two-techy-left">
              <div className="section-label" style={{ marginBottom: '0.25rem' }}>2TechY Community</div>
              <h3 className="two-techy-title">Founder — 2TechY Community</h3>
              <p className="two-techy-description">
                A student technology community focused on programming, AI, cybersecurity, and collaborative learning.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.65rem' }}>
                <span className="domain-tag">Programming</span>
                <span className="domain-tag">AI</span>
                <span className="domain-tag">Cybersecurity</span>
                <span className="domain-tag">Collaborative Learning</span>
              </div>
            </div>

            <div className="two-techy-right">
              <a
                href="https://github.com/Shivanshu26-bit/2TechY"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="View 2TechY Community on GitHub"
              >
                View 2TechY on GitHub &rarr;
              </a>
            </div>
          </div>

          {/* Community / Outreach — Campus Ambassador & PR Role */}
          <div className="two-techy-card">
            <div className="two-techy-left" style={{ maxWidth: '100%' }}>
              <div className="section-label" style={{ marginBottom: '0.25rem' }}>Community / Outreach</div>
              <h3 className="two-techy-title">Campus Ambassador / PR & Outreach Volunteer</h3>
              <p className="two-techy-description">
                Promoting hackathons, workshops, and technical events through student communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
