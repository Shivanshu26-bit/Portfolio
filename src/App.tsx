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
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><Projects selectedCategory={category} onSelectCategory={setCategory} /><Skills /><TwoTechY /><Achievements /><section className="event-archive"><div className="container"><details><summary><span>Field notes / Events & workshops</span><span>Open the archive +</span></summary><Hackathons /></details></div></section><Contact /></main><Footer /></>;
}
