export const chapters = [
  { id: 'about', name: 'About me', short: 'Profile', number: '01', symbol: '◎', description: 'The person behind the projects.', accent: '#6ee7d2' },
  { id: 'projects', name: 'Projects', short: 'Build archive', number: '02', symbol: '⌘', description: 'Explore the things I’ve built.', accent: '#ffb47d' },
  { id: 'skills', name: 'Skills', short: 'My toolkit', number: '03', symbol: '⟐', description: 'Languages, tools, and technologies.', accent: '#a9b9ff' },
  { id: 'community', name: '2TechY', short: 'Community', number: '04', symbol: '✳', description: 'Learning is better with people.', accent: '#6ee7d2' },
  { id: 'achievements', name: 'Achievements', short: 'Milestones', number: '05', symbol: '◇', description: 'A few moments along the way.', accent: '#ff9ca7' },
  { id: 'events', name: 'Events', short: 'Field notes', number: '06', symbol: '↗', description: 'Hackathons, workshops, and more.', accent: '#ffb47d' },
  { id: 'contact', name: 'Contact', short: 'Start a conversation', number: '07', symbol: '↗', description: 'Let’s make something happen.', accent: '#a9b9ff' },
] as const;
export type ChapterId = typeof chapters[number]['id'];
export function chapterFromHash(hash: string): ChapterId | null {
  const key = hash.replace(/^#/, '');
  if (key === 'home') return 'about';
  if (key === 'competitions' || key === 'hackathons') return 'events';
  return chapters.find(chapter => chapter.id === key)?.id ?? null;
}
