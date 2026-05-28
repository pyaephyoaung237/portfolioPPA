import React, { useState } from 'react';

const Navbar = ({ activeTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#content' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const themes = [
    { id: 'wizard', name: '✨ Wizard Magic' },
    { id: 'snow', name: '❄️ Snow Falling' },
    { id: 'rain', name: '🌧️ Gold Rain' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d070e]/90 backdrop-blur-md border-b border-[#cca43b]/20 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <span className="text-[#cca43b] font-serif tracking-widest text-lg font-bold">
              pyaephyoaung.dev
            </span>
          </div>

          {/* Right side navigation control menu containing theme selection blocks */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#f8cd60] hover:text-[#d1a943] font-serif tracking-wide transition-colors duration-200 text-sm uppercase"
              >
                {link.name}
              </a>
            ))}

            {/* THEME STYLE CONTROLLER CHANGER */}
            <div className="relative">
              <button
                onClick={() => setShowThemeDropdown(!showThemeDropdown)}
                className="flex items-center gap-2 px-3 py-1.5 border border-[#cca43b]/40 rounded-md text-xs font-mono tracking-wider text-[#cca43b] bg-[#cca43b]/5 hover:bg-[#cca43b]/10 transition-all duration-200 uppercase"
              >
                {themes.find(t => t.id === activeTheme)?.name.split(' ')[0]} STYLE ▾
              </button>

              {showThemeDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-[#110912] border border-[#cca43b]/30 shadow-xl overflow-hidden z-50">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onThemeChange(t.id);
                        setShowThemeDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-xs font-mono tracking-wide transition-colors duration-150 ${
                        activeTheme === t.id 
                          ? 'bg-[#cca43b]/20 text-[#f8cd60] font-bold' 
                          : 'text-gray-300 hover:bg-[#cca43b]/10 hover:text-white'
                      }`}
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Action Area */}
          <div className="md:hidden flex items-center gap-4">
            {/* Quick Cycle Button for Mobile Users */}
            <button
              onClick={() => {
                const nextIndex = (themes.findIndex(t => t.id === activeTheme) + 1) % themes.length;
                onThemeChange(themes[nextIndex].id);
              }}
              className="p-2 border border-[#cca43b]/30 rounded-md text-[#cca43b] text-xs font-mono"
              aria-label="Cycle Environment Background Style"
            >
              {themes.find(t => t.id === activeTheme)?.name.split(' ')[0]}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md border border-[#cca43b]/40 text-[#cca43b] hover:bg-[#cca43b]/10 focus:outline-none transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-20 left-0 w-full bg-[#0d070e]/95 backdrop-blur-md border-b border-[#cca43b]/20 transition-all duration-300 ease-in-out`} id="mobile-menu">
        <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full max-w-xs text-center py-3 px-4 rounded-md border border-[#cca43b]/10 text-[#cca43b]/90 hover:text-[#cca43b] hover:bg-[#cca43b]/5 font-serif text-base tracking-wider transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;