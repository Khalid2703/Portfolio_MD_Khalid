import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import AISystems from './components/AISystems';
import Projects from './components/Projects';
import Philosophy from './components/Philosophy';
import SkillsContent from './components/Skills';
import ExperienceContent from './components/Experience';
import EducationContent from './components/Education';
import AchievementsContent from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler
  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  // Tracking which section is currently active in viewport
  useEffect(() => {
    if (isLoading) return;

    const sections = ['hero', 'about', 'systems', 'projects', 'philosophy', 'stack', 'experience', 'education', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160; // offset for nav header height

      for (let i = 0; i < sections.length; i++) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className="min-h-screen font-sans leading-relaxed text-gray-300 bg-dark-bg selection:bg-accent-pink selection:text-white">
      {isLoading ? (
        <SplashScreen onFinished={() => setIsLoading(false)} />
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Header Glassmorphism Navigation */}
          <Header onNavClick={handleNavClick} activeId={activeSection} />

          {/* Main sections */}
          <main className="flex-grow">
            {/* Hero Banner Section */}
            <Hero onNavClick={handleNavClick} />

            {/* Metrics Bento Section */}
            <Metrics />

            {/* AI Systems I've Built Section */}
            <AISystems />

            {/* Projects Section */}
            <Projects />

            {/* Philosophy of Evaluation & Trust Section */}
            <Philosophy />

            {/* Tech Stack Skills Section */}
            <SkillsContent />

            {/* Professional Timeline Experience Section */}
            <ExperienceContent />

            {/* Academic Credentials Education Section */}
            <EducationContent />

            {/* Awards & Leadership Achievements Section */}
            <AchievementsContent />

            {/* Communication payload ingest feedback form Section */}
            <Contact />
          </main>

          {/* Copyright, Policy & Bilaterals Footer */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
