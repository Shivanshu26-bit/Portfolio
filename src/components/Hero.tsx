import React from 'react';
import profilePhoto from '../assets/profile.png';

interface HeroProps {
  onSelectCategory?: (category: string) => void;
}

export default function Hero({ onSelectCategory }: HeroProps) {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTagClick = (tag: string) => {
    if (onSelectCategory) {
      onSelectCategory(tag);
    } else {
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-layout">
          {/* Left: Prominent Identity, Education Status & Positioning */}
          <div className="hero-text">
            {/* Main Name — unmistakable primary visual anchor */}
            <h1 className="hero-name">SHIVANSHU SHUKLA</h1>

            {/* Current Student Status Line */}
            <div className="hero-status-row">
              <span className="status-degree">BCA (AI & DATA SCIENCE) STUDENT</span>
              <span className="status-sep">·</span>
              <span className="status-school">K.R. Mangalam University</span>
              <span className="status-sep">·</span>
              <span className="status-year">2025–2028</span>
            </div>

            {/* Role Headline */}
            <h2 className="hero-role-headline">
              FULL-STACK DEVELOPER & BUILDER
            </h2>

            {/* Concise Introduction */}
            <p className="hero-intro">
              I build practical software across full-stack web, AI, Web3 and interactive experiences.
            </p>

            {/* 4 compact highlight tags */}
            <div className="hero-domain-tags">
              <button 
                type="button" 
                className="domain-tag clickable-tag"
                onClick={() => handleTagClick('FULL-STACK')}
                title="Filter Full-Stack builds"
              >
                FULL-STACK
              </button>
              <button 
                type="button" 
                className="domain-tag clickable-tag"
                onClick={() => handleTagClick('AI & DEVELOPER TOOLS')}
                title="Filter AI & Developer Tool builds"
              >
                AI & DEVELOPER TOOLS
              </button>
              <button 
                type="button" 
                className="domain-tag clickable-tag"
                onClick={() => handleTagClick('WEB3 / BLOCKCHAIN')}
                title="Filter Web3 builds"
              >
                WEB3 / BLOCKCHAIN
              </button>
              <button 
                type="button" 
                className="domain-tag clickable-tag"
                onClick={() => handleTagClick('GAME DEVELOPMENT')}
                title="Filter Game Development builds"
              >
                GAME DEVELOPMENT
              </button>
            </div>

            {/* Action Buttons */}
            <div className="hero-buttons">
              <a 
                href="#projects" 
                className="btn btn-primary"
                onClick={handleScrollToProjects}
                aria-label="View selected projects"
              >
                View Projects
              </a>
              <a 
                href="https://github.com/Shivanshu26-bit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                aria-label="Visit GitHub profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/shivanshu-shukla-183771380/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                aria-label="Visit LinkedIn profile"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Clean 190px profile portrait */}
          <div className="hero-photo-wrapper">
            <img 
              src={profilePhoto} 
              alt="Shivanshu Shukla" 
              className="hero-photo"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
