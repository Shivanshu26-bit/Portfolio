import { useState } from 'react';

type EventCategory = 'ALL' | 'ACHIEVEMENTS' | 'HACKATHONS & COMPETITIONS' | 'TECHNICAL EVENTS & WORKSHOPS';

interface TechEvent {
  title: string;
  year: string;
  category: 'ACHIEVEMENTS' | 'HACKATHONS & COMPETITIONS' | 'TECHNICAL EVENTS & WORKSHOPS';
  role: string;
  badgeType: 'placed' | 'featured' | 'qualifier' | 'offline' | 'submission' | 'participant' | 'completed';
  institution?: string;
  description: string;
}

const techEventsList: TechEvent[] = [
  // 2026 Events
  {
    title: 'HackXtreme',
    year: '2026',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'Round 1 Qualifier',
    badgeType: 'qualifier',
    description: 'Cleared technical evaluation and system architecture screening round.',
  },
  {
    title: 'OpenAI Build Week — New Delhi NCR',
    year: '2026',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'Prototype Builder',
    badgeType: 'featured',
    institution: "Masters' Union, Gurugram",
    description: 'Built a Codex CLI middleware/hook with Anant Pandey to improve multimodal image handling and preserve image context in multi-turn conversations.',
  },
  {
    title: 'AIQrew 2025',
    year: '2026',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'Offline Round',
    badgeType: 'offline',
    description: 'Selected for and attended the in-person offline evaluation round demonstrating practical AI workflows.',
  },
  {
    title: 'Hack-The-Den',
    year: '2026',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'PPT Submission',
    badgeType: 'submission',
    description: 'Submitted an architectural feasibility paper and technical deck addressing real-world problem statements.',
  },

  // 2025 Events
  {
    title: 'Manthan AI - 2025',
    year: '2025',
    category: 'ACHIEVEMENTS',
    role: '4th Position · Team R821',
    badgeType: 'placed',
    institution: 'K.R. Mangalam University (1st AI Summit)',
    description: 'Secured 4th position competing in the university AI summit evaluating intelligent application prototypes, architecture, and technical feasibility.',
  },
  {
    title: 'MUJ HackX 3.0',
    year: '2025',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'Participant',
    badgeType: 'participant',
    institution: 'Manipal University Jaipur',
    description: 'Competitive software engineering sprint focused on rapid MVP development.',
  },
  {
    title: 'Aarambhathon 2025',
    year: '2025',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'Participant',
    badgeType: 'participant',
    institution: 'K.R. Mangalam University',
    description: 'Engineering hackathon focusing on practical software prototypes for campus and institutional challenges.',
  },
  {
    title: 'Code Slayer 2k25',
    year: '2025',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'Participant',
    badgeType: 'participant',
    description: 'Competitive programming contest testing algorithms, data structures, and implementation speed.',
  },
  {
    title: 'Hackfest',
    year: '2025',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'Participant',
    badgeType: 'participant',
    institution: 'GeeksforGeeks Classroom Program',
    description: 'Competitive coding challenge and algorithmic problem-solving sprint.',
  },
  {
    title: 'Gemini Write-off',
    year: '2025',
    category: 'HACKATHONS & COMPETITIONS',
    role: 'Participant',
    badgeType: 'participant',
    description: 'Developer technical writing and prompt engineering competition focusing on multimodal AI capabilities.',
  },
  {
    title: 'Rise In & Build On Aptos Bootcamp',
    year: '2025',
    category: 'TECHNICAL EVENTS & WORKSHOPS',
    role: 'Completed',
    badgeType: 'completed',
    description: 'Hands-on bootcamp on Aptos blockchain architecture, Move smart contracts, and decentralized application development.',
  },
  {
    title: 'Introduction to Midnight',
    year: '2025',
    category: 'TECHNICAL EVENTS & WORKSHOPS',
    role: 'Participant',
    badgeType: 'participant',
    description: 'Exploratory workshop on zero-knowledge smart contracts and privacy-preserving distributed architecture.',
  },
  {
    title: 'AI Agent Workshop',
    year: '2025',
    category: 'TECHNICAL EVENTS & WORKSHOPS',
    role: 'Participant',
    badgeType: 'participant',
    institution: 'Tech4hack',
    description: 'Hands-on technical workshop on autonomous AI agents, tool calling, and workflow automation.',
  },
];

const categoryTabs = [
  { id: 'ALL' as EventCategory, label: 'All Events (13)' },
  { id: 'ACHIEVEMENTS' as EventCategory, label: 'Achievements (1)' },
  { id: 'HACKATHONS & COMPETITIONS' as EventCategory, label: 'Hackathons & Competitions (9)' },
  { id: 'TECHNICAL EVENTS & WORKSHOPS' as EventCategory, label: 'Events & Workshops (3)' },
];

export default function Hackathons() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('ALL');

  const filteredEvents = activeCategory === 'ALL'
    ? techEventsList
    : techEventsList.filter((e) => e.category === activeCategory);

  return (
    <section id="competitions" className="section section-white">
      {/* Anchor for backward compatibility */}
      <div id="hackathons" style={{ position: 'relative', top: '-60px' }} />

      <div className="container">
        <div className="section-label">Verified Record</div>
        <h2 className="section-title">Competitions & tech events.</h2>
        <p className="section-subtitle">
          Factual record of competitions, hackathons, workshops, and technical events I have actively participated in.
        </p>

        {/* Category Tabs */}
        <div className="events-category-bar">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`events-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chronological List */}
        <div className="events-chronological-list">
          {filteredEvents.map((e, idx) => (
            <div 
              key={`${e.title}-${idx}`} 
              className={`event-timeline-item ${e.badgeType === 'placed' ? 'placed-item' : e.badgeType === 'featured' ? 'featured-item' : ''}`}
            >
              {/* Year Column */}
              <div className="event-year-badge">
                <span className="year-num">{e.year}</span>
              </div>

              {/* Main Event Info */}
              <div className="event-content">
                <div className="event-header-row">
                  <div className="event-title-group">
                    <h3 className="event-title">{e.title}</h3>
                    {e.institution && (
                      <span className="event-inst">{e.institution}</span>
                    )}
                  </div>

                  <div className="event-badges-group">
                    <span className="event-category-tag">
                      {e.category === 'ACHIEVEMENTS' ? 'ACHIEVEMENT' : e.category === 'TECHNICAL EVENTS & WORKSHOPS' ? 'WORKSHOP' : 'HACKATHON'}
                    </span>
                    <span className={`event-role-pill ${e.badgeType}`}>
                      {e.role}
                    </span>
                  </div>
                </div>

                <p className="event-desc">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
