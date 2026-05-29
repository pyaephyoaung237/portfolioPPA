import React from 'react';
import html from '../html-5.png';
import css from '../css-3.png';
import js from '../java-script.png';
import react from '../react.png';
import php from '../php.png';
import java from '../java.png';
import github from '../github.png';
import docker from '../docker.png';
import mySql from '../mysql-database.png'; // 1. Variable defined as camelCase 'mySql'

const Skills = () => {
  // Your custom skill dataset with custom styling matching the RPG levels
  const skillData = [
    {
      name: 'HTML',
      level: '90%',
      color: 'from-orange-500 to-amber-400',
      textColor: 'text-orange-400',
      icon: html 
    },
    { 
      name: 'CSS', 
      level: '80%', 
      color: 'from-blue-500 to-cyan-400', 
      textColor: 'text-blue-400', 
      icon: css 
    },
    { 
      name: 'JavaScript', 
      level: '80%', 
      color: 'from-yellow-500 to-amber-300', 
      textColor: 'text-amber-400', 
      icon: js 
    },
    { 
      name: 'React.js', 
      level: '60%', 
      color: 'from-cyan-500 to-blue-400', 
      textColor: 'text-cyan-400', 
      icon: react 
    },
    { 
      name: 'Php', 
      level: '70%', 
      color: 'from-red-600 to-orange-500', 
      textColor: 'text-red-400', 
      icon: php 
    },
    { 
      name: 'Java', 
      level: '70%', 
      color: 'from-green-600 to-emerald-400', 
      textColor: 'text-emerald-400', 
      icon: java
    },
    { 
      name: 'GitHub', 
      level: '80%', 
      color: 'from-purple-600 to-indigo-400', 
      textColor: 'text-purple-400', 
      icon: github
    },
    { 
      name: 'Docker', 
      level: '70%', 
      color: 'from-blue-600 to-sky-400', 
      textColor: 'text-sky-400', 
      icon: docker 
    },
    { 
      name: 'AWS', 
      level: '50%', 
      color: 'from-amber-600 to-orange-400', 
      textColor: 'text-amber-500', 
      icon: 'aws' 
    },
    { 
      name: 'MySql', 
      level: '80%', 
      color: 'from-slate-600 to-neutral-800', // Fixed non-existent Tailwind class 'black-400'
      textColor: 'text-slate-400', 
      icon: mySql // 2. FIXED: Matches the top import variable perfectly now
    },
  ];

  // Helper function to render matching tech icons or imported images
  const renderIcon = (iconSource) => {
    // 1. Array of known text keys used for fallback blocks
    const textualFallbacks = ['laravel', 'spring', 'github', 'docker', 'aws'];

    // 2. If it's a known text fallback key, render its custom vector block
    if (typeof iconSource === 'string' && textualFallbacks.includes(iconSource)) {
      const baseClass = "w-8 h-8 flex items-center justify-center font-bold text-xs rounded";
      switch (iconSource) {
        case 'laravel': return <div className={`${baseClass} bg-red-600 text-white text-[10px]`}>LVL</div>;
        case 'spring': return <div className={`${baseClass} bg-green-500 text-white text-[10px]`}>SPR</div>;
        case 'github': return <div className={`${baseClass} bg-neutral-800 text-white`}>GIT</div>;
        case 'docker': return <div className={`${baseClass} bg-sky-600 text-white`}>DKR</div>;
        case 'aws': return <div className={`${baseClass} bg-amber-600 text-white`}>AWS</div>;
      }
    }

    // 3. Otherwise, it is an imported graphic asset (HTML, CSS, JS, React, PHP, MySQL, etc.)
    return (
      <img 
        src={iconSource} 
        alt="Skill logo" 
        className="w-8 h-8 object-contain" 
      />
    );
  };

  return (
    <section id="skills" className="text-white flex flex-col items-center justify-start px-6 md:px-12 relative min-h-screen overflow-hidden">

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

      {/* Skills Grid Container */}
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
                  <div className="p-1 bg-[#0d070e] border border-[#cca43b]/20 rounded-lg shadow-inner group-hover:border-[#cca43b]/40 transition-colors duration-300 flex items-center justify-center min-w-[40px] min-h-[40px]">
                    {renderIcon(skill.icon)}
                  </div>
                  {/* Tech Name */}
                  <span className="font-serif text-base md:text-lg text-gray-200 tracking-wide font-medium">
                    {skill.name}
                  </span>
                </div>
                {/* Custom Level Text Color */}
                <span className={`font-serif text-sm md:text-base font-bold tracking-wider ${skill.textColor}`}>
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-3 bg-[#080409] rounded-full p-[2px] border border-neutral-900 shadow-inner">
                {/* Filled Level Progress */}
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