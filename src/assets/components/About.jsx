import React from 'react';

const About = () => {
  return (
    <section id="about" className=" text-white flex flex-col items-center justify-start px-6 md:px-12 relative min-h-screen overflow-hidden">
      
      {/* Background Star/Particle Accent (Subtle dark RPG texture) */}
      <div className="absolute inset-0 bg-[radial-gradient(#cca43b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none"></div>

      {/* Section Title Header */}
      {/* INCREASED: max-w-xl -> max-w-3xl to let the gold lines expand beautifully on desktop */}
      <div className="w-full max-w-3xl flex flex-col items-center mb-12 z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#cca43b] font-bold tracking-widest uppercase drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
          ABOUT ME
        </h2>
        
        {/* RPG Style Line with Center Diamond */}
        <div className="flex items-center justify-center w-full mt-4 relative">
          {/* Left Line */}
          <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#cca43b]/50"></div>
          
          {/* Center Diamond */}
          <div className="mx-4 w-3 h-3 rotate-45 bg-gradient-to-br from-[#cca43b] to-[#6d521d] shadow-[0_0_8px_rgba(204,164,59,0.6)]"></div>
          
          {/* Right Line */}
          <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-[#cca43b]/50"></div>
        </div>
      </div>

      {/* Main Content Card Container */}
      {/* INCREASED: max-w-xl -> max-w-4xl to open up the card size on desktop */}
      <div className="w-full max-w-4xl z-10 px-2">
        <div className="relative group">
          
          {/* External Soft Card Glow */}
          <div className="absolute inset-0 rounded-2xl bg-purple-900/10 opacity-50 blur-xl"></div>
          
          {/* The Content Box Frame */}
          <div className="relative bg-[#130b14]/90 border border-[#cca43b]/15 rounded-2xl p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.05)] hover:border-[#cca43b]/25 transition-all duration-300">
            
            {/* Top Border Inner Highlight Line */}
            <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-[#cca43b]/20 to-transparent"></div>

            {/* Paragraph Text Content */}
            {/* OPTIONAL GRID UPGRADE: Split into 2 columns on desktop for an even better website view, or leave as clean paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300/90 font-sans text-base md:text-lg leading-relaxed tracking-wide">
              
              <div className="space-y-4">
                <p>
                  I'm a <span className="text-[#cca43b] font-medium font-serif">Full Stack Developer</span> with over 5 years of experience building modern web applications from the ground up. I specialize in React, Node.js, and cloud architecture, with a strong passion for creating intuitive user interfaces backed by robust, well-structured APIs.
                </p>
              </div>
              
              <div className="space-y-4 md:border-l md:border-[#cca43b]/10 md:pl-8">
                <p>
                  I began my journey studying Computer Science and quickly fell in love with the intersection of design and engineering. Since then, I've focused on transforming complex problems into elegant, highly efficient digital experiences.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default About;