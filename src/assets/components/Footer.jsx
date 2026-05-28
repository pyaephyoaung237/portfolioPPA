import React from 'react';

const Footer = () => {
  // Smooth scroll helper for quick portfolio navigation
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className=" text-white border-t border-[#cca43b]/10 relative overflow-hidden py-12 px-6 md:px-12">
      
      {/* Soft ambient background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-900/10 blur-2xl rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center space-y-6 z-10 relative">
        
        {/* Quick Links Navigation Block */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm font-serif tracking-widest uppercase">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-400 hover:text-[#cca43b] transition-colors duration-200"
          >
            HOME
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-[#cca43b] transition-colors duration-200"
          >
            ABOUT
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-400 hover:text-[#cca43b] transition-colors duration-200"
          >
            SKILLS
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-400 hover:text-[#cca43b] transition-colors duration-200"
          >
            PROJECTS
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-gray-400 hover:text-[#cca43b] transition-colors duration-200"
          >
            CONTACT
          </button>
        </nav>

        {/* Signature Golden RPG Divider Line with Center Diamond */}
        <div className="flex items-center justify-center w-full max-w-xl py-2 relative">
          <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#cca43b]/30"></div>
          <div className="mx-3 w-2 h-2 rotate-45 bg-gradient-to-br from-[#cca43b]/70 to-[#6d521d]/70 shadow-[0_0_6px_rgba(204,164,59,0.4)]"></div>
          <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-[#cca43b]/30"></div>
        </div>

        {/* Social / External Portal Links */}
        <div className="flex items-center space-x-6">
          {/* GitHub Portal */}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-[#cca43b]/10 bg-[#130b14]/60 rounded-lg text-gray-400 hover:text-[#cca43b] hover:border-[#cca43b]/40 transition-all duration-200 shadow-md hover:shadow-[0_0_10px_rgba(204,164,59,0.1)]"
            aria-label="GitHub Portal"
          >
            <svg className="w-5 replace-w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn Portal */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-[#cca43b]/10 bg-[#130b14]/60 rounded-lg text-gray-400 hover:text-[#cca43b] hover:border-[#cca43b]/40 transition-all duration-200 shadow-md hover:shadow-[0_0_10px_rgba(204,164,59,0.1)]"
            aria-label="LinkedIn Portal"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Copyright Metadata */}
        <div className="text-center font-mono text-[10px] md:text-xs tracking-widest text-zinc-600 uppercase">
          <p>© {new Date().getFullYear()} Pyae Phyo Aung. All Rights Reserved.</p>
          <p className="text-zinc-700/60 mt-1 text-[9px]">Crafted with React & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;