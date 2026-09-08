import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighlightsRow from './components/HighlightsRow';
import WhatIBuild from './components/WhatIBuild';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hackathons from './components/Hackathons';
import Achievements from './components/Achievements';
import TwoTechY from './components/TwoTechY';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero 
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }} 
        />
        <HighlightsRow />
        <WhatIBuild 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleSelectCategory} 
        />
        <Projects 
          selectedCategory={selectedCategory} 
          onSelectCategory={handleSelectCategory} 
        />
        <Skills />
        <Hackathons />
        <Achievements />
        <TwoTechY />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
