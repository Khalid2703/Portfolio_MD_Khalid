import React from 'react';
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from '../constants';
import { Mail, Cpu } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-dark-border/60 py-16 relative">
      <div className="absolute inset-0 bg-[#070b19]/20 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center border-b border-dark-border/40 pb-12 mb-10 text-left">
          
          {/* Logo Brand / Focus Info */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Cpu className="text-accent-teal h-5 w-5" />
              <span className="font-mono text-sm font-bold tracking-wider text-text-light">
                MD KHALID
              </span>
            </div>
            
            {/* Philosophical Footer Quote */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
              "Building systems that don't just generate answers—but make better decisions."
            </p>
          </div>

          {/* Socials & Contact Actions */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6">
            <a 
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-accent-teal transition-colors"
              aria-label="Send Email"
            >
              <Mail size={16} />
              <span>{EMAIL}</span>
            </a>

            <a 
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-accent-teal transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a 
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-gray-400 hover:text-accent-teal transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>

        </div>

        {/* Brand Copyright and Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-500 text-left">
          <span>
            © {new Date().getFullYear()} Md Khalid. All rights reserved. Deployed via Vercel.
          </span>
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
            <span>Applied AI &amp; Production Integrity</span>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
