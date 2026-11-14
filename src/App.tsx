import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hackathons from './components/Hackathons';
import Achievements from './components/Achievements';
import TwoTechY from './components/TwoTechY';
import Contact from './components/Contact';
import Footer from './components/Footer';
import type { Category } from './data/projects';
export default function App() {
  const [category, setCategory] = useState<Category>('All work');
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><Projects selectedCategory={category} onSelectCategory={setCategory} /><Skills /><TwoTechY /><Achievements /><Hackathons /><Contact /></main><Footer /></>;
}
