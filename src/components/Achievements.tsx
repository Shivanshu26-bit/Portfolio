interface AchievementItem {
  title: string;
  category: string;
  organization: string;
  context?: string;
  highlight?: boolean;
}

const achievementsList: AchievementItem[] = [
  {
    title: 'Top 3 — Code Cubicle 6.0 Community Partners Referral Leaderboard',
    organization: 'Geek Room',
    category: 'Top 3 Placement',
    context: '122 registrations through the 2TechY referral code. Awarded an n8n Pro license.',
    highlight: true,
  },
  {
    title: '4th Place — AI Manthan Hackathon 2025',
    organization: 'AI Manthan',
    category: '4th Place',
    highlight: true,
  },
  {
    title: 'Top Community Recognition & Trophy',
    organization: 'Zyro Community',
    category: 'Community Award',
  },
  {
    title: 'Top 5 — Hacknfinity Link & Launch Referral Program',
    organization: 'Hacknfinity',
    category: 'Top 5 Placement',
    highlight: true,
  },
  {
    title: 'CampusCrew 100K Milestone Recognition',
    organization: 'CampusCrew',
    category: 'Milestone',
  },
  {
    title: 'Participant — MUJ HackX 3.0',
    organization: 'Manipal University Jaipur',
    category: 'Hackathon',
  },
  {
    title: 'Participant — HackFest',
    organization: 'GeeksforGeeks',
    category: 'Coding Sprint',
  },
  {
    title: 'Participant — Code Slayer',
    organization: 'NIT Delhi',
    category: 'Coding Contest',
  },
  {
    title: 'Certification — Cyber Security & Digital Forensics',
    organization: 'K.R. Mangalam University',
    category: 'Certification',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section section-neutral">
      <div className="container">
        <div className="section-label">04 / Along the way</div>
        <h2 className="section-title">A few milestones.</h2>
        <p className="section-subtitle">
          Placements, community recognition, and experiences collected along the way.
        </p>

        <div className="achievements-clean-list">
          {achievementsList.map((item) => (
            <div 
              key={item.title} 
              className={`achievement-list-item ${item.highlight ? 'highlight-item' : ''}`}
            >
              <div className="achievement-bullet">
                <span className="red-accent-dot">▪</span>
              </div>
              <div className="achievement-content">
                <div className="achievement-header-row">
                  <h3 className="achievement-title">{item.title}</h3>
                  <span className={`achievement-badge ${item.highlight ? 'placement-badge' : ''}`}>
                    {item.category}
                  </span>
                </div>
                <div className="achievement-org">{item.organization}</div>
                {item.context && <p className="achievement-context">{item.context}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
