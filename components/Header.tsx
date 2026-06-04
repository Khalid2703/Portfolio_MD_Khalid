import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { LINKEDIN_URL, GITHUB_URL } from '../constants';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeId: string;
}

const Header: React.FC<HeaderProps> = ({ onNavClick, activeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'systems', label: 'AI Systems' },
    { id: 'projects', label: 'Projects' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'stack', label: 'Tech Stack' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-dark-bg/80 backdrop-blur-md border-b border-dark-border py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavClick('hero')}>
            <Cpu className="text-accent-teal h-6 w-6 animate-pulse" />
            <span className="font-mono text-lg font-bold tracking-wider text-text-light bg-gradient-to-r from-text-light via-blue-400 to-accent-teal bg-clip-text text-transparent">
              MD KHALID
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`relative py-1 font-mono text-sm tracking-wide transition-colors duration-200 hover:text-accent-teal ${
                    activeId === item.id ? 'text-accent-teal font-medium' : 'text-gray-400'
                  }`}
                >
                  {item.label}
                  {activeId === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-teal" />
                  )}
                </button>
              ))}
            </div>

            {/* Social & Contact Shortcuts */}
            <div className="flex items-center space-x-4 border-l border-dark-border pl-6">
              <a 
                href={GITHUB_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-accent-teal transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href={LINKEDIN_URL} 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-accent-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <button 
                onClick={() => onNavClick('contact')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/10 to-accent-teal/10 hover:from-blue-600 hover:to-accent-teal text-accent-teal hover:text-dark-bg border border-accent-teal/30 hover:border-transparent font-mono text-xs rounded transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-text-light focus:outline-none p-2"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg border-b border-dark-border px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavClick(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left py-3 px-4 font-mono text-sm border-l-2 my-1 transition-all ${
                activeId === item.id 
                  ? 'bg-accent-teal/5 text-accent-teal border-accent-teal' 
                  : 'text-gray-400 border-transparent hover:bg-white/5 hover:text-text-light'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-dark-border flex justify-around">
            <a 
              href={GITHUB_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-accent-teal transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={LINKEDIN_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-accent-teal transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:mdkhalid2702@gmail.com"
              className="text-gray-400 hover:text-accent-teal transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          <button 
            onClick={() => {
              onNavClick('contact');
              setIsOpen(false);
            }}
            className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-accent-teal text-dark-bg tracking-wide font-mono text-sm rounded font-bold hover:brightness-110 active:scale-95 transition-all text-center block"
          >
            LET'S CHAT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
