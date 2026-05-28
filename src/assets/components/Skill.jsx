import React from 'react';

const Skills = () => {
  // Your custom skill dataset with custom styling matching the RPG levels
  const skillData = [
    { name: 'HTML', level: '95%', color: 'from-orange-500 to-amber-400', textColor: 'text-orange-400', icon: 'html' },
    { name: 'CSS', level: '90%', color: 'from-blue-500 to-cyan-400', textColor: 'text-blue-400', icon: 'css' },
    { name: 'JavaScript', level: '95%', color: 'from-yellow-500 to-amber-300', textColor: 'text-amber-400', icon: 'js' },
    { name: 'React.js', level: '90%', color: 'from-cyan-500 to-blue-400', textColor: 'text-cyan-400', icon: 'react' },
    { name: 'Laravel', level: '85%', color: 'from-red-600 to-orange-500', textColor: 'text-red-400', icon: 'laravel' },
    { name: 'Spring Boot', level: '80%', color: 'from-green-600 to-emerald-400', textColor: 'text-emerald-400', icon: 'spring' },
    { name: 'GitHub', level: '85%', color: 'from-purple-600 to-indigo-400', textColor: 'text-purple-400', icon: 'github' },
    { name: 'Docker', level: '80%', color: 'from-blue-600 to-sky-400', textColor: 'text-sky-400', icon: 'docker' },
    { name: 'AWS', level: '75%', color: 'from-amber-600 to-orange-400', textColor: 'text-amber-500', icon: 'aws' },
  ];

  // Helper function to render matching tech icons using clean standard vector blocks
  const renderIcon = (type) => {
    const baseClass = "w-8 h-8 flex items-center justify-center font-bold text-xs rounded";
    switch(type) {
      case 'html': return <div className={`${baseClass} bg-orange-600 text-white`}>H5</div>;
      case 'css': return <div className={`${baseClass} bg-blue-600 text-white`}>C3</div>;
      case 'js': return <div className={`${baseClass} bg-yellow-500 text-black`}>JS</div>;
      case 'react': return (
        <svg className="w-8 h-8 text-cyan-400 animate-[spin_20s_linear_infinite]" viewBox="0 0 84.1 77.6">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" transform="translate(42.05 38.8)"/>
          <path stroke="currentColor" strokeWidth="1" fill="none" d="M42 .5C23 .5 7.2 17.7 7.2 38.8c0 21.1 15.8 38.3 34.8 38.3 19 0 34.8-17.2 34.8-38.3C76.8 17.7 61 .5 42 .5z" transform="rotate(30 42 38.8)"/>
          <path stroke="currentColor" strokeWidth="1" fill="none" d="M42 .5C23 .5 7.2 17.7 7.2 38.8c0 21.1 15.8 38.3 34.8 38.3 19 0 34.8-17.2 34.8-38.3C76.8 17.7 61 .5 42 .5z" transform="rotate(90 42 38.8)"/>
          <path stroke="currentColor" strokeWidth="1" fill="none" d="M42 .5C23 .5 7.2 17.7 7.2 38.8c0 21.1 15.8 38.3 34.8 38.3 19 0 34.8-17.2 34.8-38.3C76.8 17.7 61 .5 42 .5z" transform="rotate(150 42 38.8)"/>
        </svg>
      );
      case 'laravel': return <div className={`${baseClass} bg-red-600 text-white text-[10px]`}>LVL</div>;
      case 'spring': return <div className={`${baseClass} bg-green-500 text-white text-[10px]`}>SPR</div>;
      case 'github': return <div className={`${baseClass} bg-neutral-800 text-white`}>GIT</div>;
      case 'docker': return <div className={`${baseClass} bg-sky-600 text-white`}>DKR</div>;
      case 'aws': return <div className={`${baseClass} bg-amber-600 text-white`}>AWS</div>;
      default: return <div className={`${baseClass} bg-purple-600`}>TS</div>;
    }
  };

  return (
    <section id="skills" className=" text-white flex flex-col items-center justify-start px-6 md:px-12  relative min-h-screen overflow-hidden">
      
      {/* Background Star/Particle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#cca43b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none"></div>

      {/* Section Title Header */}
      <div className="w-full max-w-5xl flex flex-col items-center mb-2 z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#cca43b] font-bold tracking-widest uppercase drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
          SKILLS & TECHNOLOGIES
        </h2>
        
        {/* RPG Style Line with Center Diamond */}
        <div className="flex items-center justify-center w-full max-w-3xl mt-4 relative">
          <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#cca43b]/50"></div>
          <div className="mx-4 w-3 h-3 rotate-45 bg-gradient-to-br from-[#cca43b] to-[#6d521d] shadow-[0_0_8px_rgba(204,164,59,0.6)]"></div>
          <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-[#cca43b]/50"></div>
        </div>

        {/* Subtitle Accent */}
        <p className="text-gray-500 font-serif italic text-sm md:text-base mt-6 tracking-wide">
          Technologies I work with on a daily basis
        </p>
      </div>

      {/* Skills Grid Container - Expanded to max-w-5xl with a 2-column grid on desktop */}
      <div className="w-full max-w-5xl z-10 px-2 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {skillData.map((skill) => (
            <div 
              key={skill.name}
              className="relative bg-[#130b14]/80 border border-[#cca43b]/15 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-[#cca43b]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Inner ambient top border glow highlight */}
              <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-[#cca43b]/10 to-transparent"></div>

              {/* Title & Percentage Section */}
              <div className="flex items-center justify-between w-full mb-4">
                <div className="flex items-center space-x-4">
                  {/* Icon Frame */}
                  <div className="p-1 bg-[#0d070e] border border-[#cca43b]/20 rounded-lg shadow-inner group-hover:border-[#cca43b]/40 transition-colors duration-300">
                    {renderIcon(skill.icon)}
                  </div>
                  {/* Tech Name */}
                  <span className="font-serif text-base md:text-lg text-gray-200 tracking-wide font-medium">
                    {skill.name}
                  </span>
                </div>
                {/* Custom Level Text Color Matching skill.jpg */}
                <span className={`font-serif text-sm md:text-base font-bold tracking-wider ${skill.textColor}`}>
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-3 bg-[#080409] rounded-full p-[2px] border border-neutral-900 shadow-inner">
                {/* Filled Level Progress with specialized gradient fill */}
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_8px_rgba(204,164,59,0.2)]`} 
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default Skills;