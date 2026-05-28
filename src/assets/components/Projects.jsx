import React, { useState } from 'react';

const Projects = () => {
  // Modal State
  const [activeProject, setActiveProject] = useState(null);

  // Your two specific projects with RPG-style details
  const projectsData = [
    {
      id: 1,
      title: 'MangaTai',
      rarity: 'LEGENDARY',
      rarityColor: 'border-[#cca43b] text-[#cca43b]',
      type: 'MANGA READER & ECONOMY',
      description: 'A comprehensive manga platform featuring user and admin panel hubs, optimized for responsive reading and a secure internal database system.',
      stars: 5,
      tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'Admin User Panel'],
      image: 'https://via.placeholder.com/600x400/130b14/cca43b?text=MangaTai+Preview', 
      longDescription: 'MangaTai is a high-performance manga reader platform complete with an advanced ecosystem. It features a dedicated User Panel for tracking reading history, bookmarks, and account details alongside a powerful Admin Panel managing file uploads, categories, payment verification paths, and access permissions.',
    },
    {
      id: 2,
      title: 'Guitar Hub',
      rarity: 'EPIC',
      rarityColor: 'border-[#a855f7] text-[#a855f7]',
      type: 'E-COMMERCE ECOSYSTEM',
      description: 'An immersive digital marketplace designed for guitar enthusiasts, offering custom equipment selections with streamlined admin inventories.',
      stars: 5,
      tags: ['Spring', 'Bootstrap', 'Mysql', 'Admin User Control'],
      image: 'https://via.placeholder.com/600x400/130b14/a855f7?text=Guitar+Hub+Preview', 
      longDescription: 'Guitar Hub bridges premium music equipment sales with automated stock monitoring. The platform segments into dual operational interfaces: an intuitive store experience for customers exploring catalogs, and a secure Admin Dashboard engineered to manage incoming product lists and check transaction histories.',
    }
  ];

  return (
    <section id="projects" className=" text-white flex flex-col items-center justify-start px-6 md:px-12 py-20 relative min-h-screen overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#cca43b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none"></div>

      {/* Section Title Header */}
      <div className="w-full max-w-5xl flex flex-col items-center mb-16 z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#cca43b] font-bold tracking-widest uppercase drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
          MY QUEST LOG
        </h2>
        
        {/* RPG Style Line with Center Diamond */}
        <div className="flex items-center justify-center w-full max-w-3xl mt-4 relative">
          <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#cca43b]/50"></div>
          <div className="mx-4 w-3 h-3 rotate-45 bg-gradient-to-br from-[#cca43b] to-[#6d521d] shadow-[0_0_8px_rgba(204,164,59,0.6)]"></div>
          <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-[#cca43b]/50"></div>
        </div>

        <p className="text-gray-500 font-serif italic text-sm md:text-base mt-6 tracking-wide">
          A selection of work I am proud of
        </p>
      </div>

      {/* Projects Grid Container */}
      <div className="w-full max-w-5xl z-10 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="relative bg-[#130b14]/90 border border-[#cca43b]/15 rounded-2xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:border-[#cca43b]/30 transition-all duration-300 group"
            >
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#cca43b]/10 to-transparent"></div>

              <div>
                {/* Rarity & Completion Status row */}
                <div className="flex items-center justify-between w-full mb-6">
                  <span className={`text-[10px] md:text-xs font-mono font-bold tracking-widest px-2.5 py-1 border rounded bg-black/40 ${project.rarityColor}`}>
                    {project.rarity}
                  </span>
                  <span className="text-[10px] md:text-xs font-mono tracking-widest px-2.5 py-1 text-emerald-400 bg-emerald-950/20 border border-emerald-500/20 rounded flex items-center gap-1">
                    ✓ COMPLETED
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-2xl md:text-3xl text-white font-bold tracking-wide uppercase mb-2 group-hover:text-[#cca43b] transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Subtitle / Category Type */}
                <p className="text-[#a855f7] font-mono text-xs tracking-widest uppercase mb-4">
                  {project.type}
                </p>

                {/* Description Paragraph */}
                <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Star Ratings Row */}
                <div className="flex items-center space-x-1 mb-6 text-[#cca43b]">
                  {[...Array(project.stars)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>

                {/* Tech Tags List Layout */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[11px] font-mono tracking-wider px-3 py-1 bg-purple-950/30 text-purple-300 border border-purple-500/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <div>
                <button
                  onClick={() => setActiveProject(project)}
                  className="w-fit inline-flex items-center justify-center py-2.5 px-5 rounded-md border border-[#cca43b]/30 text-[#cca43b] bg-[#cca43b]/5 hover:bg-[#cca43b]/10 text-xs md:text-sm font-serif tracking-wider transition-all duration-200"
                >
                  View Project →
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* --- SIDE-BY-SIDE NO-SCROLL MODAL --- */}
      {activeProject && (
        <div 
          // FIX: Changed items-center to items-start + pt-24 to dynamically keep it safely separated from the fixed header layer on small viewports
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 pt-24 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setActiveProject(null)}
        >
          {/* Main Modal Card Container */}
          <div 
            className="relative bg-[#130b14] border border-[#cca43b]/30 w-full max-w-4xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden grid grid-cols-1 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Cross */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-[#cca43b] text-xl transition-colors duration-200 bg-black/40 p-1.5 rounded-full backdrop-blur-sm"
            >
              ✕
            </button>

            {/* Left Side: Image Panel */}
            <div className="relative w-full h-full min-h-[200px] md:min-h-[400px] bg-neutral-900 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#cca43b]/20">
              <img 
                src={activeProject.image} 
                alt={`${activeProject.title} Preview`}
                className="w-full h-full object-cover absolute inset-0"
              />
              {/* Sleek shadow masking for a unified look */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-[#130b14]/80 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Right Side: Detailed Details Panel (No scroll needed) */}
            <div className="p-6 md:p-8 flex flex-col justify-between space-y-4 bg-[#110912]">
              <div>
                {/* Meta Badge Tags */}
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-[10px] font-mono tracking-widest px-2 py-0.5 border rounded bg-black/40 ${activeProject.rarityColor}`}>
                    {activeProject.rarity}
                  </span>
                  <span className="text-[#a855f7] font-mono text-xs tracking-widest uppercase">
                    {activeProject.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl text-[#cca43b] font-bold uppercase tracking-wide mb-3">
                  {activeProject.title}
                </h3>

                <div className="w-full h-[1px] bg-gradient-to-r from-[#cca43b]/30 to-transparent mb-4"></div>

                {/* Project Narrative Text Description */}
                <p className="text-gray-300 font-sans text-sm md:text-base leading-relaxed mb-6">
                  {activeProject.longDescription}
                </p>

                {/* Technical System Environment Parameters */}
                <div>
                  <h4 className="text-xs font-serif tracking-widest text-[#cca43b] uppercase mb-2">Attributes / Stack:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[11px] font-mono tracking-wider px-2.5 py-1 bg-purple-950/30 text-purple-300 border border-purple-500/20 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Box Frame Buttons */}
              <div className="pt-4 border-t border-[#cca43b]/10 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="py-2 px-6 rounded border border-[#cca43b]/30 text-[#cca43b] hover:bg-[#cca43b]/10 transition-colors font-serif text-xs uppercase tracking-wider"
                >
                  Close Log
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;