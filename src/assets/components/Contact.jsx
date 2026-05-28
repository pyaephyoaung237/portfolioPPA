import React from 'react';

const Contact = () => {
  return (
    // FIX: Changed 'mt-20' to 'pt-20' to keep the dark background continuous under the fixed navbar
    <section id="contact" className=" text-white flex flex-col items-center justify-start px-6 md:px-12 pt-20 relative min-h-screen overflow-hidden">
      
      {/* Background Star/Particle Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#cca43b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none"></div>

      {/* Section Title Header */}
      <div className="w-full max-w-5xl flex flex-col items-center mb-16 z-10">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#cca43b] font-bold tracking-widest uppercase drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
          CONTACT LOG
        </h2>
        
        {/* RPG Style Line with Center Diamond */}
        <div className="flex items-center justify-center w-full max-w-3xl mt-4 relative">
          <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#cca43b]/50"></div>
          <div className="mx-4 w-3 h-3 rotate-45 bg-gradient-to-br from-[#cca43b] to-[#6d521d] shadow-[0_0_8px_rgba(204,164,59,0.6)]"></div>
          <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-[#cca43b]/50"></div>
        </div>
      </div>

      {/* Expanded Developer Stat Card Container matching image_d82daa.png (Enlarged for Desktop view) */}
      <div className="w-full max-w-3xl z-10 px-2 animate-fadeIn">
        <div className="relative group">
          
          {/* Top Multi-Color Gradient Rim Box Shadow/Border Effect */}
          <div className="absolute -top-[1px] inset-x-0 h-[4px] rounded-t-2xl bg-gradient-to-r from-orange-500 via-yellow-500 via-purple-500 to-blue-500 shadow-[0_-2px_20px_rgba(234,179,8,0.25)]"></div>
          
          {/* The Content Box Frame - Increased padding and width scalability */}
          <div className="relative bg-[#110912]/95 border border-[#cca43b]/15 rounded-b-2xl rounded-t-md p-8 md:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.7)]">
            
            {/* Header: Developer Profile Icon & Title */}
            <div className="flex items-center space-x-3 mb-10">
              {/* Mini Gold Diamond Icon */}
              <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#cca43b] to-[#6d521d] shadow-[0_0_6px_rgba(204,164,59,0.8)]"></div>
              <h3 className="font-mono text-xs md:text-sm tracking-[0.3em] text-[#cca43b]/80 font-bold uppercase">
                DEVELOPER PROFILE
              </h3>
            </div>

            {/* Profile Statistics / Information List */}
            <div className="space-y-8 font-sans text-base md:text-lg">
              
              {/* NAME FIELD */}
              <div className="flex justify-between items-baseline pb-4 border-b border-zinc-800/60">
                <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase font-semibold">NAME</span>
                <span className="text-gray-200 font-serif tracking-wide text-right">Pyae Phyo Aung</span>
              </div>

              {/* ROLE FIELD */}
              <div className="flex justify-between items-baseline pb-4 border-b border-zinc-800/60">
                <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase font-semibold">ROLE</span>
                <span className="text-gray-200 font-serif tracking-wide text-right">Full Stack Developer</span>
              </div>

              {/* LOCATION FIELD */}
              <div className="flex justify-between items-baseline pb-4 border-b border-zinc-800/60">
                <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase font-semibold">LOCATION</span>
                <span className="text-[#cca43b]/90 font-serif tracking-wide text-right">Mandalay,Myanmar</span>
              </div>

              {/* EMAIL FIELD */}
              <div className="flex justify-between items-baseline pb-4 border-b border-zinc-800/60">
                <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase font-semibold">EMAIL</span>
                <a 
                  href="mailto:arcturus@arcane.dev" 
                  className="text-gray-200 font-serif tracking-wide hover:text-[#cca43b] underline underline-offset-4 decoration-[#cca43b]/40 hover:decoration-[#cca43b] transition-all duration-200 text-right"
                >
                pyaephyoaung2377@gmail.com
                </a>
              </div>

              {/* AVAILABILITY FIELD */}
              <div className="flex justify-between items-baseline pb-4 border-b border-zinc-800/60">
                <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase font-semibold">AVAILABILITY</span>
                <span className="text-emerald-400 font-serif tracking-wide text-right flex items-center gap-1.5">
                  Open to Work <span className="text-sm font-sans">✓</span>
                </span>
              </div>

              {/* FOCUS FIELD */}
              <div className="flex justify-between items-baseline pb-2">
                <span className="font-mono text-xs md:text-sm tracking-widest text-zinc-500 uppercase font-semibold">FOCUS</span>
                <span className="text-[#cca43b]/90 font-serif tracking-wide text-right">Web, API, Cloud</span>
              </div>

            </div>

            {/* Functional Download CV Link Button wrapper */}
            <div className="mt-12 pt-2">
              <a 
                href="/CV.pdf" 
                download="Pyae_Phyo_Aung_CV.pdf"
                className="w-full inline-flex items-center justify-center py-4 px-6 rounded-lg border border-[#cca43b]/40 text-[#cca43b] bg-[#cca43b]/5 hover:bg-[#cca43b]/10 font-serif text-sm md:text-base tracking-widest uppercase transition-all duration-200 active:scale-[0.99] shadow-md hover:shadow-[0_0_20px_rgba(204,164,59,0.15)] text-center cursor-pointer"
              >
                DOWNLOAD CV
              </a>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;