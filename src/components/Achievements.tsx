import { useState } from 'react';

interface AchievementItem {
  title: string;
  category: string;
  context: string;
  organization: string;
  highlight?: boolean;
}

const topAchievements: AchievementItem[] = [
  {
    title: '4th Position — Manthan AI - 2025',
    category: 'Competition Placement',
    organization: 'K.R. Mangalam University (1st AI Summit)',
    context: 'Secured 4th position evaluating intelligent system prototype architecture, feasibility, and presentation.',
    highlight: true,
  },
  {
    title: 'OpenAI Build Week — Codex CLI Middleware',
    category: 'Prototype Build',
    organization: "OpenAI Build Week Community / Masters' Union",
    context: 'Built a Codex CLI middleware with Anant Pandey to optimize multimodal image context in multi-turn conversations.',
    highlight: true,
  },
  {
    title: 'HackXtreme — Round 1 Qualifier',
    category: 'Technical Qualification',
    organization: 'HackXtreme (Aug 2026)',
    context: 'Cleared technical architecture screening and initial algorithmic evaluation.',
  },
  {
    title: 'AIQrew 2025 — Offline Round',
    category: 'In-Person Evaluation',
    organization: 'AIQrew (Jun 2026)',
    context: 'Selected for and attended the competitive in-person offline round demonstrating practical AI workflows.',
  },
  {
    title: 'MUJ HackX 3.0',
    category: 'Hackathon Sprint',
    organization: 'Manipal University Jaipur (Nov 2025)',
    context: 'Competitive software engineering sprint focused on rapid MVP development.',
  },
  {
    title: 'Aarambhathon 2025',
    category: 'Engineering Hackathon',
    organization: 'K.R. Mangalam University (2025)',
    context: 'Campus hackathon developing software prototypes for campus and institutional challenges.',
  },
];

const allVerifiedRecords: AchievementItem[] = [
  ...topAchievements,
  {
    title: 'Code Slayer 2k25 — Algorithmic Challenge',
    category: 'Coding Contest',
    organization: 'Code Slayer (Oct 2025)',
    context: 'Speed-optimized algorithmic problem-solving in competitive programming.',
  },
  {
    title: 'Hack-The-Den — PPT Submission',
    category: 'Technical Deck',
    organization: 'Hack-The-Den (Jun 2026)',
    context: 'Technical feasibility paper and presentation submission for real-world domain problem statements.',
  },
  {
    title: 'Hackfest — Participation',
    category: 'Coding Sprint',
    organization: 'GeeksforGeeks Classroom Program (2025)',
    context: 'Hands-on problem solving and code optimization challenge.',
  },
  {
    title: 'AI Agent Workshop — Hands-On Automation',
    category: 'Technical Workshop',
    organization: 'Tech4hack (2025)',
    context: 'Intensive workshop on autonomous agent architectures, tool integration, and workflow automation.',
  },
];

export default function Achievements() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="achievements" className="section section-neutral">
      <div className="container">
        <div className="section-label">Verified Record</div>
        <h2 className="section-title">Achievements.</h2>
        <p className="section-subtitle">
          Core competitive awards, technical qualifications, and builder milestones.
        </p>

        <div className="achievements-clean-list">
          {topAchievements.map((item) => (
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
                  <span className="achievement-badge">{item.category}</span>
                </div>
                <div className="achievement-org">{item.organization}</div>
                <p className="achievement-context">{item.context}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-cta-row">
          <button 
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setModalOpen(true)}
            aria-label="View complete verified record"
          >
            View Complete Record ({allVerifiedRecords.length} Events) &rarr;
          </button>
        </div>

        {/* Clean Modal for All Records */}
        {modalOpen && (
          <div className="achievements-modal-backdrop" onClick={() => setModalOpen(false)}>
            <div className="achievements-modal-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div>
                  <div className="modal-label">Complete Record</div>
                  <h3 className="modal-title">Verified Hackathons, Competitions & Events</h3>
                </div>
                <button 
                  type="button"
                  className="modal-close-btn" 
                  onClick={() => setModalOpen(false)}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="modal-body">
                {allVerifiedRecords.map((item, idx) => (
                  <div key={idx} className="modal-item-row">
                    <div className="modal-item-num">0{idx + 1}</div>
                    <div className="modal-item-info">
                      <div className="modal-item-title-row">
                        <h4 className="modal-item-title">{item.title}</h4>
                        <span className="modal-item-tag">{item.category}</span>
                      </div>
                      <div className="modal-item-org">{item.organization}</div>
                      <p className="modal-item-desc">{item.context}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm" 
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
